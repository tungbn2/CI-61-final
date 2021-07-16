// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    link: {result:{
          short_link:"",
          short_link2:"",
          short_link3:""
        }},
    status: false
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getLink({ commit }, payload) {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${payload}/very/long/link.html`)
            .then(response => {
                alert(`short success`)
                commit('SET_LINK', response.data)
        })
    }
}

//to handle mutations
const mutations = {
    SET_LINK(state, posts) {
        state.link = posts;
        state.status = true;
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})