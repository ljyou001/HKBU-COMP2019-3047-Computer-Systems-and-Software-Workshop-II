<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10" class="form">
                <Image :src="selectedProduct.image" height="300"
                    stretch="aspectFill" />
                <Label :text="selectedProduct.title" margin="10" class="h2" />
                <Label :text="selectedProduct.estate" class="body" />
                <Label :text="'Bedrooms:' + selectedProduct.bedrooms"
                    class="body" />
                <Label :text="'Rent: HK$' + selectedProduct.rent"
                    class="body" />
                <Label :text="'Tenants:' + selectedProduct.tenants"
                    class="body" />
                <Label :text="'Area: ' + selectedProduct.grossarea"
                    class="body" />
                <Button v-if="($delegate.logined && count == 0)"
                    text="Move-in" @tap="onRentTap"
                    class="btn btn-primary btn-rounded-lg" />
                <Button v-else-if="($delegate.logined && count > 0)"
                    text="Move-out" @tap="onDeleteTap"
                    class="btn btn-warning btn-rounded-lg" />
                <Button v-else text="Login to check your move-in status"
                    class="btn btn-primary btn-rounded-lg" />
                <Button text="Show on Map" @tap="showMap"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Vue from "nativescript-vue";
import ShowMap from "./ShowMap";
export default 
{
    props: ["selectedProduct", "estate", "count", "$delegate"],
    methods: {
        async onRentTap() {
            var thisapp = this.$delegate;
            console.log("Rent was pressed");
            var result = confirm({
                title: "Confirm?",
                message: "Will you move in?",
                okButtonText: "Yes",
                cancelButtonText: "Cancel"
            });
            if (result) {
                console.log("Rent was confirmed");
                var response = await fetch(
                    global.rootURL + "/user/add/" + 
                    this.selectedProduct.id, {
                        method: "GET",
                        credentials: "same-origin"
                    }
                );

                console.log("Rent Info Sent");

                if (response.ok) {
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
                            "MyReatal info: " +
                            JSON.stringify(thisapp.rentedProd)
                        );
                    } else {
                        console.log(resp.statusText);
                    }
                } else if (response.status == 422) {
                    var data = await response.text();
                    alert(data);
                } else {
                    alert("here");
                    alert(response.statusText);
                }
            };
            this.count = thisapp.rentedProd.filter(function(p) {
                return p.id == this.selectedProduct.id;
            }).length;
        },

        async onDeleteTap() {
            var thisapp = this.$delegate;
            console.log("Delete was pressed");
            var result = confirm({
                title: "Confirm?",
                message: "Will you move out?",
                okButtonText: "Yes",
                cancelButtonText: "Cancel"
            });
            if (result) {
                console.log("Delete was confirmed");
                var response = await fetch(
                    global.rootURL + "/user/remove/" + 
                    this.selectedProduct.id, {
                        method: "GET",
                        credentials: "same-origin"
                    }
                );

                console.log("Delete Info Sent");

                if (response.ok) {
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
                            "MyReatal info: " +
                            JSON.stringify(thisapp.rentedProd)
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
            };
            this.count = thisapp.rentedProd.filter(function(p) {
                return p.id == this.selectedProduct.id;
            }).length;
        },
        
        showMap() {
            console.log("showMap");
            console.log(
                this.estate.Name +
                " " +
                this.estate.Latitude +
                " " +
                this.estate.Longitude
            );
            this.$navigateTo(ShowMap, {
                transition: {},
                transitionIOS: {},
                transitionAndroid: {},
                props: {
                    lan: this.estate.Latitude,
                    lon: this.estate.Longitude,
                    name: this.estate.Name,
                    $delegate: this
                }
            });
        }
    },
    data() {
        return {};
    }
};
</script>

<style>
</style>