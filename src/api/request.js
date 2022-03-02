import axios from "axios"
import showMessage from "@/utils/showMessage"
// 创建一个axios实例
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code != 0) {
        showMessage({
            content: resp.data.msg,
            type: "error"
        })
    }
    return resp.data.data
})

export default ins