// 公共的远程获取数据的代码
// 提供一个远程获取数据的方法 fetchData。这个方法是组件提供的

export default function (defaultDataType = {}) {
    return {
        // 这些Data中的数据和一些方法都会暴露出去
        data() {
            return {
                isLoading: true,
                data: defaultDataType
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    }
}