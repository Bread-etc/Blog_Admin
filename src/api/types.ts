// 通用参数类型
export type Result<T> = {
  code: number;
  message: string;
  data: T;
};

// 登录参数 (用户名 + 加密密码)
export interface Login {
  code: number;
  message: string;
  data: {
    user: {
      username: string;
      encryptedPassword: string;
    }
  };
};

// 文章参数 (用于展示dataTable)
export interface Article {
  code: number;
  message: number;
  data: {
    article: {
      // No 
      id: number;
      // 文章简介
      content?: string;
      // tag (标签)
      tag: string;
      // title (标题)
      title: string;
      // headPic (封面)
      img: string;
    }
  }
}