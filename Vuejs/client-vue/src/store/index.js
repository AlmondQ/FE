import main from '@/store/modules/main.js';
import friends from '@/store/modules/friends.js'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main,
        friends
    }
});