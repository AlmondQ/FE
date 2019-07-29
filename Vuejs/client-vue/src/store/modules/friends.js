import * as TYPES from '@/store/types.js';
import { post } from '@/util/util.js'

const state = {
    friendsList: [],
    hasMore: null,
    status: 'loading',
    offset: 0,
    limit: 10
};

const mutations = {
    [TYPES.GET_FRIEND_LIST](state, payload){
        state.friendsList.push(...payload.list);
        state.hasMore = payload.hasMore;
        state.offset += state.limit;
        state.status = 'loaded';
    }
};

const actions = {
    async [TYPES.GET_FRIEND_LIST]({commit, state}){
        state.status = 'loading';
        const response = await post('/api/todaylist', {offset: state.offset, limit: state.limit});
        commit(TYPES.GET_FRIEND_LIST, response.data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}