import { http } from "../../utils/request";

// 发送 get 请求, 获取后台写入的网易云歌曲链接
export function getSongLink() {
    return http.get<string>("/api/getSong");
}