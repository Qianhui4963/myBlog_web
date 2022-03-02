import eventBus from "@/eventBus.js"
import debounce from "@/utils/debounce.js"
import loading from "@/assets/loading.svg"

let imgs = [];

function setImage(img) {
    // 先把所有的img都设置为占位图
    img.dom.src = loading

    let rect = img.dom.getBoundingClientRect()
    let clientHeight = document.documentElement.clientHeight
    let height = rect.height || img.dom.height

    if (rect.top <= clientHeight && rect.top >= -height) {
        const tempImg = new Image();
        tempImg.src = img.src
        tempImg.onload = function () {
            img.dom.src = img.src;
            imgs = imgs.filter(i => i !== img)
        }
    }
}

// 希望调用该函数，就可以设置哪些合适的图片
function setImages() {
    for (const img of imgs) {
        // 处理该图片
        setImage(img)
    }
}

function handleScroll() {
    if (!imgs.length) {
        return
    }
    setImages()
}
let setScrollDebounce = debounce(handleScroll, 50)
eventBus.$on("mainScroll", setScrollDebounce)

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(i => i.dom !== el)
    },
}