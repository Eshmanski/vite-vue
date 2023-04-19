import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state: {
        test: 'Hello from VueX',
    },
    mutations: {},
    modules: {},
    plugins: [
        createPersistedState({
            paths: [],
        }),
    ],
})
