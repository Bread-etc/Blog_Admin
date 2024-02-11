import { http } from '../../utils/request';
import type { article } from '../types';

// 发送 post 请求,修改对应id文章的/ 简介 / 标题 / 封面图片
export function reviseInfo(item: article) {
    return http.post<article>("/dataTable/revise", item);
}