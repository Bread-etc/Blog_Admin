import { http } from "../../utils/request";
import type { tagCircle } from "../types";

// 发送 get 请求,获取 tag + number
export function getTag() {
    return http.get<tagCircle[]>("/analytic/getTag");
}