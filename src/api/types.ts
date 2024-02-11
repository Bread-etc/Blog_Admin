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
      // image (封面)
      image?: string;
      // time (发布时间)
      time?: Date;
    };
  };
}

// 单个文章类型
export interface article {
  // No 
  id: number;
  // 文章简介 (可有可无)
  content?: string;
  // tag (标签)
  tag: string;
  // title (标题)
  title: string;
  // img (封面)
  image?: string;
  // alias (文件名)
  alias: string;
  // time (发布时间)
  time?: Date;
};

// tag + number 类型
export interface tagCircle {
  // tag
  tag: string;
  // num
  count: number;
}