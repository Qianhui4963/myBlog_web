import { getBanners } from "../api/getBanners";

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
        async fetchBanner(context) {
            // 检测是否请求过数据
            if(context.state.data.length){
                return
            }
            context.commit("setLoading", true)
            const result = await getBanners()
            context.commit("setData", result)
            context.commit("setLoading", false)
        }
    }
}