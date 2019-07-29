<template>
    <div class="friend-card-wrap card-wrap">
        <img class="friend-card-img" :src="list.img"/>
        <div class="info-wrap">
            <div class="name-status-wrap">
                <span>{{ list.userName}}</span>
                <span class="status">{{ status[list.status] }}</span>
            </div>
            <span class="word"> {{ list.text }}</span>
        </div>
        <div class="date-like-wrap">
            <span>{{ list.time }}</span>
            <span class="like"> {{ like[list.isLike] }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list'],
    data (){
        return {
            status: {
                ontime: '按时起床'
            },
            like: {
                true: '❤️',
                false: '🖤'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "compass/css3/flexbox";
    .friend-card-wrap {
        @include display-flex(flex);
        @include justify-content(space-between);
        margin-bottom: 20px;
        padding: 5px 10px;
        .friend-card-img {
            width: 50px;
            height: 50px;
            @include flex(none);
            @include align-self(center);
        }
        .info-wrap {
            @include flex(auto);
            @include display-flex(flex);
            @include flex-direction(column);
            @include justify-content(space-between);
            padding-left: 20px;
            .word {
                word-break: break-all;
            }
        }
        .date-like-wrap {
            @include flex(none);
            @include display-flex(flex);
            @include flex-direction(column);
            @include justify-content(space-between);
            .like {
                text-align: right;
            }
        }
    }
</style>


