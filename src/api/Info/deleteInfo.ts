import { http } from "../../utils/request";

// 发送 delete 请求删除对应 alias 的文章
export function deleteInfo(alias: string) {
    return http.delete<void>(`/api/delete?alias=${encodeURIComponent(alias)}`);
}