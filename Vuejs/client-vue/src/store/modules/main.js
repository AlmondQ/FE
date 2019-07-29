import * as TYPES from '@/store/types.js';
import { get, post } from '@/util/util.js';

const state = {
    userName: '',
    avatar: null,
    getupTime: '',
    rank: null,
    continued: null,
    myList: [],
    hasMore: null,
    status: 'loading',
    offset: 0,
    limit: 10
};

const mutations = {
    [TYPES.GET_MY_INFO](state, info){
        state.userName = info.userName;
        state.avatar = info.avatar;
        state.getupTime = info.getupTime;
        state.rank = info.rank;
        state.continued = info.continued;
    },
    [TYPES.GET_MY_LIST](state, info){
        state.myList.push(...info.list);
        state.hasMore = info.hasMore;
        state.status= 'loaded';
        state.offset += state.limit;
    }
};

const actions = {
    async [TYPES.GET_MY_INFO]({ commit }, payload){
        try {
            const response = await get(payload.url, payload.params);
            commit(TYPES.GET_MY_INFO, response.data);
        } catch (err) {}

    },
    async [TYPES.GET_MY_LIST]({ commit, state }, payload){
        try {
            state.status = 'loading';
            const response = await post(payload.url, { offset: state.offset, limit: state.limit });
            commit(TYPES.GET_MY_LIST, response.data);
        } catch (err) {

        }
    }
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};