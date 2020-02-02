<template>
    <Page>
        <ActionBar title="Real Estate Rental System" />
        <StackLayout>
            <BottomNavigation height="400px">
                <TabStrip>
                    <TabStripItem>
                        <Label text="Highlights"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Properties"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedrooms"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="My Account"></Label>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>
                    <ListView for="product in highlights"
                        @itemTap="onItemTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="400">
                                <Image :src="product.image"
                                    stretch="aspectFill" />
                                <Label :text="product.title" class="h2" />
                                <Label :text="product.estate" class="h3" />
                                <Label :text="'HK$' + product.rent"
                                    class="h3" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>
                    <ListView for="estate in estates" @itemTap="onEstateTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="150">
                                <Label :text="estate.Name" class="h2"
                                    height="150" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>
                    <ListView for="brstatus in bedroomStatus"
                        @itemTap="onBRTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="150">
                                <Label :text="brstatus.name" class="h2"
                                    height="150" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>
                    <ScrollView v-if="logined == false"
                        orientation="vertical">
                        <StackLayout orientation="vertical" margin="10"
                            class="form">
                            <TextField v-model="username" hint="Username"
                                class="h2" />
                            <TextField v-model="password" hint="Password"
                                secure="true" class="h2" />
                            <Button text="Login" @tap="loginClient"
                                class="h2" />
                        </StackLayout>
                    </ScrollView>
                    <ScrollView v-else orientation="vertical">
                        <StackLayout orientation="vertical" margin="10">
                            <StackLayout orientation="vertical" margin="10"
                                class="form">
                                <Image
                                    src="https://i-love-png.com/images/img_191958_11550.png"
                                    width="400" height="400" />
                                <TextView editable="false" align="center">
                                    <FormattedString>
                                        <Span
                                            :text="'Username: ' + currentuser"
                                            fontWeight="Bold" class="h1" />
                                    </FormattedString>
                                </TextView>
                                <Button text="Logout" @tap="logoutClient"
                                    class="h2" />
                                <Button text="My Rental" @tap="myRental"
                                    class="h2" />
                            </StackLayout>
                        </StackLayout>
                    </ScrollView>

                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import EstateDetail from "./EstateDetail";
    import InEstate from "./InEstate";
    import ShowMap from "./ShowMap";
    import LessBedroom from "./LessBedroom";
    import MoreBedroom from "./MoreBedroom";
    import MyRental from "./MyRental";
    export default {
        async mounted() {
            global.rootURL = "https://984061b2.ngrok.io";
            var response = await fetch(global.rootURL + "/person/json", {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.products = await response.json();
                console.log(JSON.stringify(this.products));
            } else {
                console.log(response.statusText);
            }

            console.log("mounting highlights");
            this.highlights = this.products.filter(function(p) {
                return p.highlighted == "y";
            });

            console.log("mounting bedrooms");
            this.smallerthan3 = this.products.filter(function(p) {
                return p.bedrooms < 3;
            });
            this.largerthan3 = this.products.filter(function(p) {
                return p.bedrooms >= 3;
            });

            console.log("mounting finished");
        },

        methods: {
            async getRented() {
                var response = await fetch(global.rootURL +
                "/user/rent", {
                    method: "GET",
                    credentials: "same-origin"
                });
                if (response.ok) {
                    this.rentedProd = await response.json();
                    console.log(JSON.stringify(this.rentedProd));
                } else {
                    console.log(response.statusText);
                }
            },

            async loginClient() {
                var thisapp = this;
                console.log("loginClient Button was pressed");
                var response = await fetch(global.rootURL +
                "/user/login", {
                    method: "POST",
                    credentials: "same-origin",
                    body: "username=" + this.username +
                        "&password=" + this.password
                });
                console.log("Log In Info Sent");

                if (response.ok) {
                    this.logined = true;
                    this.currentuser = this.username;
                    var resp = await fetch(global.rootURL +
                    "/user/rent", {
                        method: "GET",
                        credentials: "same-origin"
                    });
                    console.log("MyReatal Request Sent");
                    if (resp.ok) {
                        var rp = await resp.json();
                        console.log(
                            "Downloaded MyReatal info: " +
                            JSON.stringify(rp.rentedProd)
                        );
                        thisapp.rentedProd = rp.persons;
                        console.log(
                            "MyReatal info: " + JSON.stringify(thisapp
                                .rentedProd)
                        );
                    } else {
                        console.log(resp.statusText);
                    }
                } else if (response.status == 401) {
                    var data = await response.text();
                    alert(data);
                } else {
                    alert("here");
                    alert(response.statusText);
                }
            },

            async logoutClient() {
                console.log("logoutClient Button was pressed");
                var response = await fetch(global.rootURL +
                    "/user/logout", {
                        method: "GET",
                        credentials: "same-origin"
                    });
                console.log("Log out Info Sent");
                if (response.ok) {
                    this.logined = false;
                    this.currentuser = "";
                }
            },

            myRental() {
                this.$navigateTo(MyRental, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        rentedProd: this.rentedProd,
                        $delegate: this
                    }
                });
            },

            onItemTap: function(args) {
                console.log("Item with id: " + args.index + " tapped");
                console.log(
                    "Product selected: " + args.item.title + " " +
                    args.item.estate
                );
                var theEstate = this.estates.filter(function(e) {
                    return e.Name == args.item.estate;
                })[0];
                var count = this.rentedProd.filter(function(p) {
                    return p.id == args.item.id;
                }).length;
                console.log("Count number is " + count);
                console.log(JSON.stringify(theEstate));
                this.$navigateTo(EstateDetail, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedProduct: args.item,
                        estate: theEstate,
                        count: count,
                        $delegate: this
                    }
                });
            },
            onEstateTap: function(args) {
                console.log("Estate with id: " + args.index + " tapped");
                console.log("Estate selected: " + args.item.Name);
                this.selectedProducts = this.products.filter(function(p) {
                    return p.estate == args.item.Name;
                });
                this.$navigateTo(InEstate, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedEstate: args.item,
                        $delegate: this
                    }
                });
            },
            onBRTap: function(args) {
                console.log("Bedroom Status with id: " + args.index +
                    " tapped");
                console.log("Bedroom Status selected: " + args.item.name);
                if (args.item.ids == "l3") {
                    this.$navigateTo(LessBedroom, {
                        transition: {},
                        transitionIOS: {},
                        transitionAndroid: {},
                        props: {
                            smallerthan3: this.smallerthan3,
                            $delegate: this
                        }
                    });
                } else if (args.item.ids == "m3") {
                    this.$navigateTo(MoreBedroom, {
                        transition: {},
                        transitionIOS: {},
                        transitionAndroid: {},
                        props: {
                            largerthan3: this.largerthan3,
                            $delegate: this
                        }
                    });
                }
            }
        },

        data() {
            return {
                username: "",
                password: "",
                logined: false,
                currentuser: "",
                user: [],
                selectedProducts: [],
                theEstate: {},
                products: [],
                rentedProd: [],
                estates: [{
                        Latitude: "22.343233",
                        Longitude: "114.1852626",
                        Name: "Tin Ma Court"
                    },
                    {
                        Latitude: "22.3330397",
                        Longitude: "114.1645305",
                        Name: "Shek Kip Mei"
                    },
                    {
                        Latitude: "22.3410169",
                        Longitude: "114.1805053",
                        Name: "Broadcast Drive"
                    },
                    {
                        Latitude: "22.3887767",
                        Longitude: "114.1820634",
                        Name: "Sha Tin"
                    },
                    {
                        Latitude: "22.32198",
                        Longitude: "114.1718194",
                        Name: "Kowloon City"
                    }
                ],
                highlights: [],
                bedroomStatus: [{
                        name: "Less than 3 Bedrooms",
                        ids: "l3"
                    },
                    {
                        name: "More than or equal to 3 Bedrooms",
                        ids: "m3"
                    }
                ],
                smallerthan3: [],
                largerthan3: []
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>