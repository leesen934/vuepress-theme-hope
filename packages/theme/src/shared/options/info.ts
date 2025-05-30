import type { Author } from "../author.js";

export interface InfoOptions {
  /**
   * Site favicon
   *
   * 站点图标
   */
  favicon?: string;

  /**
   * Domain which to be deployed to
   *
   * 网站部署域名
   */
  hostname?: string;

  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author;

  /**
   * Global default license
   *
   * 全局默认协议
   */
  license?: string;

  /**
   * Extra i18n sites
   *
   * @description key is the name of language, and value is the path of site, `:route` will be replaced by current route
   *
   * 额外的多语言站点
   *
   * @description 键是语言的名称，值是站点的路径，`:route` 会被替换为当前路由
   */
  extraLocales?: Record<string, string>;
}

export type InfoConfig = Omit<InfoOptions, "favicon" | "hostname">;
