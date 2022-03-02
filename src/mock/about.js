import Mock from "mockjs"
Mock.setup({
    timeout: "1000-3000"
})

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://leetcode-cn.com/"
})