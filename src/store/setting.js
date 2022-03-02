import { getSetting } from "../api/getsetting"
import titleControl from "@/utils/titleControl"

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
        async fetchSetting(context) {
            context.commit("setLoading", true)
            const result = await getSetting()
            context.commit("setData", result)
            context.commit("setLoading", false)
            // 附加操作
            // 设置网站图标
            if (result.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']")
                if (link) {
                    return
                }
                link = document.createElement("link")
                link.rel = "shortcut icon"
                link.type = "images/x-icon"
                link.href = result.favicon
                document.querySelector("head").appendChild(link)
            }
            // 设置网站标题
            if (result.siteTitle) {
                titleControl.setSiteTitle(result.siteTitle)
            }
        }
    }
}