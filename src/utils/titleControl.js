let routerTitle = "",
    siteTitle = "";

function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = "loading..."
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle
    } else if (siteTitle && !routerTitle) {
        document.title = siteTitle
    } else {
        document.title = `${siteTitle}-${routerTitle}`
    }
}

export default {
    // 设置路由标题
    setRouteTitle(title) {
        routerTitle = title
        setTitle()
    },
    // 设置网站标题
    setSiteTitle(title) {
        siteTitle = title
        setTitle()
    }
}