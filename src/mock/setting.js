import Mock from "mockjs";

Mock.setup({
    timeout: "1000-3000"
})

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
        siteTitle: "我的个人空间",
        github: "https://domain()",
        qq: "2741607698",
        qqQrCode:
            "@image()",
        weixin: "15826753270",
        weixinQrCode:
            "@image()",
        mail: "@email()",
        icp: "@cword()ICP备@natural(10000000,19999999)号",
        githubName: "@cword(2,7)",
        favicon: "http://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg",
    },
});
