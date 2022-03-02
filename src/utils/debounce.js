export default function (fn, duration = 50) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, duration)
    }
}