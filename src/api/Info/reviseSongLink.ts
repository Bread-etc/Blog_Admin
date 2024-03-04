import { http } from "../../utils/request";
import type { Result } from "../types";

// 发送 post 请求, 修改数据库内link链接
export function reviseSongLink(newSong: string) {
    return http.post<Result<string>>("/api/reviseSong", { link: newSong });
}