module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.zhihu.com"
            }
        }
    }
}