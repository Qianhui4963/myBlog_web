import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import setting from "./setting"
import about from "./about"
import project from "./project"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true
})

export default store