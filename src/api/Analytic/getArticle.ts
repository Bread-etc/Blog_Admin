import { http } from "../../utils/request";

// 发送 get 请求获取文章篇数
export function getArticle() {
    return http.get<number>("/analytic/getArticle");
}