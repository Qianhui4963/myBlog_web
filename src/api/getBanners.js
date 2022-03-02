import request from "./request"

export async function getBanners() {
    return await request.get("/api/banner")
}

// getNews().then(r => {
//     console.log(r)
// })