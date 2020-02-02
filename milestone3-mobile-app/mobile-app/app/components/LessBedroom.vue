<template>
    <Page>
        <ScrollView orientation="vertical">
            <ListView for="product in smallerthan3"
                @itemTap="$delegate.onItemTap">
                <v-template>
                    <StackLayout orientation="vertical" height="400">
                        <Image :src="product.image" stretch="aspectFill" />
                        <Label :text="product.title" class="h2" />
                        <Label :text="product.estate" class="h3" />
                        <Label :text="'HK$' + product.rent" class="h3" />
                    </StackLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </Page>
</template>

<script>
    //v-if="(selectedEstate.Name == product.estate)"
    import Vue from "nativescript-vue";
    import EstateDetail from "./EstateDetail";
    export default {
        props: ["smallerthan3", "$delegate"],
        method: {},
        data() {
            return {};
        }
    };
</script>

<style>
</style>