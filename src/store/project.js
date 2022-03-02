import { getProject } from "../api/getProject"

export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
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
        async fetchProject(context) {
            if (context.state.data.length) {
                return
            }
            context.commit("setLoading", true)
            const result = await getProject()
            context.commit("setData", result)
            context.commit("setLoading", false)
        }
    }
}