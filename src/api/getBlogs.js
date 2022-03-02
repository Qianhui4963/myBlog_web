import request from "./request"
/**
 * 
 * @param {Number} page 请求的是第几页
 * @param {Number} limit 每页有多少条数据
 * @param {Number} categoryid 所属分类，-1表示全部
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

export async function getBlogTypes() {
    return await request.get("/api/blogtype")
}

// 获取单个博客信息
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo);
}

// 获取评论
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}
