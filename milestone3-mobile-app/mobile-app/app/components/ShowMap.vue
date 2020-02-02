<template>
    <Page>
        <ActionBar :title="'Map of ' + name" />
        <ScrollView orientation="vertical">
            <!-- <WebView
                src="https://leafletapi.mtchoy.now.sh/index.html?lat=22.34&lng=114.18&zoom=17&markerLat=22.341072&markerLng=114.179645&markerTitle=AC%20Hall&locate=true" /> -->
            <WebView
                :src="'https://leafletapi.mtchoy.now.sh/index.html?lat=' + lan + '&lng=' + lon + '&zoom=17' + '&markerLat=' + lan
			            + '&markerLng=' + lon + '&markerTitle=' + ename + '&locate=true'" />
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        props: ["lan", "lon", "name", "$delegate"],
        // props: [],
        mounted() {
            this.ename = encodeURIComponent(this.name);
        },
        methods: {},
        data() {
            return {
                ename: "",
            };
        }
    };
</script>

<style>
</style>