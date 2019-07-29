<template>
    <div class="wrap">
        <router-view/>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import Footer from '@/component/Footer.vue';

    export default {
        components: {
            'footer-bottom': Footer
        }
    }
</script>

<style lang="scss">
@import 'compass/reset';
@import '@/style/icon.scss';
@import '@/style/common.scss';
* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
}
.wrap {
    height: 100%;
}
</style>


