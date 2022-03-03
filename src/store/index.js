import {Store,install} from "vuex"
import Vue from "vue"
import banner from "./banner"
import setting from "./setting"
import about from "./about"
import project from "./project"
install(Vue)

const store = new Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true
})

export default store