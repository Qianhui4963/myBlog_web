/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {HTMLElement} contatiner 容器，消息会显示到容器的正中;如果不传，则显示到页面正中
 * @param {Number} duration 容器持续的时间
 */

import getComponentRootDom from "./getComponentRootDom.js"
import Icon from "@/components/Icon"
import styles from "@/styles/message.module.less"
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const contatiner = options.contatiner || document.body;
    const duration = options.duration || 2000;


    // 创建消息元素
    const div = document.createElement('div');
    const IconDom = getComponentRootDom(Icon, { type, });
    div.innerHTML = `<span class="${styles.icon}">${IconDom.outerHTML}</span><div>${content}</div>`;
    // 设置样式
    div.className = `${styles.message} ${styles['message-' + type]}`


    // 检测父容器的position是否改动过
    if (getComputedStyle(contatiner).position === "static") {
        contatiner.style.position = "relative"
    }

    contatiner.appendChild(div)

    div.clientHeight;
    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-30px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            // 运行回调函数
            options.callback && options.callback();
        }, { once: true })
    }, duration)
}