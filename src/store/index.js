import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        players: [],
        searchPlayers: [],
        player: [],
        positionFilter:'All',
        loader: false,
    },
    actions: {
        async fetchAllPlayers(ctx) {
            ctx.state.loader = true
            await axios.get(`https://www.balldontlie.io/api/v1/players`)
                .then(response => {
                    return response.data.data
                })
                .then(data => {
                    ctx.commit('AllPlayers', data)
                })
            ctx.state.loader = false
        },
        async fetchNextPage(ctx, page = 1) {
            ctx.state.loader = true
            await axios.get(`https://www.balldontlie.io/api/v1/players?page=${page}`)
                .then(response => {
                    return response.data.data
                })
                .then(data => {
                    ctx.commit('NextPage', data)
                })
            ctx.state.loader = false
        },
        async fetchOnePlayers(ctx, id) {
            ctx.state.loader = true
            await axios.get('https://www.balldontlie.io/api/v1/players/' + id)
                .then(response => {
                    return response.data
                })
                .then(data => {
                    ctx.commit('OnePlayer', data)
                })
            ctx.state.loader = false
        },
        async fetchSearchPlayers(ctx, payload) {
            ctx.state.loader = true
            await axios.get('https://www.balldontlie.io/api/v1/players/?search=' + payload)
                .then(response => {
                    return response.data.data
                })
                .then(data => {
                    ctx.commit('SearchPlayer', data)
                })
            ctx.state.loader = false
        }
    },
    mutations: {
        AllPlayers(state, payload) {
            state.players = payload
        },
        NextPage(state, payload) {
            state.players = [...state.players, ...payload]
        },
        OnePlayer(state, payload) {
            state.player = payload
        },
        SearchPlayer(state, payload) {
            state.players = payload
        },
        searchPlayersPosition(state, position) {
            return  state.positionFilter = position;
        }
    },
    getters: {
        getAllPlayers(state) {
            return state.players
        },
        getOnePlayer(state) {
            return state.player
        },

    },
    modules: {}
})