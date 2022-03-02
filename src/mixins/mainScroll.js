export default function (refContainer) {
    return {
        methods: {
            setMainScroll(scrollTop) {
                this.$refs[refContainer].scrollTop = scrollTop;
            },
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refContainer]);
            },
        },
        mounted() {
            this.$refs[refContainer].addEventListener("scroll", this.handleScroll);
            this.$bus.$on("setMainScroll", this.setMainScroll);
        },
        beforeDestroy() {
            // 通知其它监听者，该dom对象以销毁
            this.$bus.$emit("mainScroll");
            this.$bus.$off("setMainScroll", this.setMainScroll)
            this.$refs[refContainer].removeEventListener("scroll", this.handleScroll);
        },
    }
}