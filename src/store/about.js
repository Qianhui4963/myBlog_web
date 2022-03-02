import { getAbout } from "../api/getAbout"

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchAbout(context) {
            if (context.state.data) {
                return
            }
            context.commit("setLoading", true)
            const result = await getAbout()
            context.commit("setData", result)
            context.commit("setLoading", false)
        }
    }
}