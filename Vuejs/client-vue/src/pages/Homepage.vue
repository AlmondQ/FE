<template>
    <div class="index-wrap top-wrap">
        <header-top>主页</header-top>
        <div class="main main-wrap" ref="main">
            <div class="avatar-wrap">
                <img :src="avatar" class="avatar"/>
                <span class="username">{{ userName }}</span>
            </div>
            <div class="add card-wrap">
                <span class="iconfont icon-add add-icon"></span>
                <span class="add-text">添加今日状态</span>
            </div>
            <span class="list-tag">最近状态</span>
            <scroll-list :scrollElement="$refs.main" :status="status" :hasMore="hasMore" :scrollMethod="getList">
                <card v-for="(list, index) in myList" :cardInfo="list" :key="index"></card>
            </scroll-list>
        </div>
    </div>
</template>

<script>
import Header from '@/component/Header.vue';
import ScrollList from '@/component/ScrollList.vue'
import * as TYPES from '@/store/types.js';
import { mapState, mapActions } from 'vuex';
import Card from '@/component/Card.vue'
import { debuglog } from 'util';

export default {
    data (){
        return {
            scrollElement: null
        };
    },
    computed: mapState('main',['avatar', 'userName', 'myList', 'hasMore', 'status']),
    methods: {
        ...mapActions('main', {
            getListOri: TYPES.GET_MY_LIST
        }),
        getList (){
            this.getListOri({url: '/api/mylist'});
        }
    },
    components: {
        'header-top': Header,
        'card': Card,
        'scroll-list': ScrollList
    },
    created () {
        this.$store.dispatch('main/' + TYPES.GET_MY_INFO, {
            url: '/api/myinfo'
        });
        this.$store.dispatch('main/' + TYPES.GET_MY_LIST , {
            url: '/api/mylist'
        });
    }
    
}
</script>

<style lang="scss" scoped>
    @import 'compass/css3';
    @import 'compass/css3/flexbox';
    .index-wrap {
        .main {
        .avatar-wrap{
            padding: 50px;
            @include display-flex(flex);
            @include flex-direction(column);
            @include justify-content(center);
            @include align-items(center);
            .avatar {
                width: 100px;
                height: 100px;
                @include border-radius(50%);
            }
            .username {
                padding-top: 20px;
            }
        }
        .add {
                @include display-flex(flex);
                @include align-items(center);
                margin-bottom: 20px;
                .add-icon {
                    flex: 0.25;
                    text-align: center;
                }
                .add-text {
                    @include flex(0.75);
                }
            }
            .list-tag {
                padding-left: 20px;
            }
        }
    }
</style>

