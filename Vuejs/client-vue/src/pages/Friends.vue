<template>
    <div class="friends-wrap top-wrap">
        <header-top>好友状态</header-top>
        <div class="main main-wrap" ref="friendsMain">
            <span class="title">今日好友状态</span>
            <scroll-list :scrollElement="$refs.friendsMain" :status="status" :hasMore="hasMore" :scrollMethod="getFriendsList">
                <friend-card v-for="(list, index) in friendsList" :list="list" :key="index"></friend-card>
            </scroll-list>
        </div>
    </div>
</template>

<script>
import Header from '@/component/Header.vue';
import FriendCard from '@/component/FriendCard.vue';
import ScrollList from '@/component/ScrollList.vue';
import { mapState, mapActions } from 'vuex';
import * as TYPES from '@/store/types.js'

export default {
    data (){
        return {}
    },
    components: {
        'header-top': Header,
        'friend-card': FriendCard,
        'scroll-list': ScrollList
    },
    computed: mapState('friends', ['friendsList', 'hasMore', 'status']),
    methods: {
        ...mapActions('friends', {
            getFriendsList: TYPES.GET_FRIEND_LIST
        })
    },
    created(){
        this.getFriendsList();
        //this.$store.dispatch('friends/'+TYPES.GET_FRIEND_LIST);
    }
    
}
</script>

<style lang="scss" scoped>
    .main {
        .title {
            display: inline-block;
            margin: 20px;
        }
    }
</style>