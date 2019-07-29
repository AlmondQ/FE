<template>
    <div class="card-wrap list-card-wrap">
        <img :src='cardInfo.img' class="card-img"/>
        <div class="card-text-wrap">
            <span class="card-title">{{ cardInfo.text }}</span>
            <span class="card-date">{{ cardInfo.time }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cardInfo']
}
</script>

<style lang="scss" scoped>
    @import 'compass/css3/flexbox';
    .list-card-wrap {
        margin-bottom: 10px;
        margin-top: 10px;
        @include display-flex(flex);
        @include align-items(center);
        padding: 0 10px;
        .card-img {
            width: 50px;
            height: 50px;
            @include flex(none);
        }
        .card-text-wrap {
            padding-left: 15px;
            @include display-flex(flex);
            @include flex-direction(column);
            @include flex(1);
            .card-date {
                text-align: right;
            }
        }
    }
</style>

