import styles from "./Loading.module.less"
import LoadingUrl from "@/assets/loading.svg"
function isExist(el) {
    return el.querySelector("img[data-role=loading]")
}

function createLoading() {
    let img = document.createElement("img")
    img.className = styles.loading_img;
    img.dataset.role = "loading"
    img.src = LoadingUrl;
    return img
}


export default function (el, binding) {
    let isImg = isExist(el)
    if (binding.value) {
        if (!isImg) {
            let img = createLoading()
            el.appendChild(img)
        }
    } else {
        if (isImg) {
            isImg.remove();
        }
    }
}