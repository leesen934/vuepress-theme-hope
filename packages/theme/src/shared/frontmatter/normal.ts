import type { GetHeadersOptions } from "@vuepress/helper/shared";

import type { ThemeBasePageFrontmatter } from "./base.js";
import type { PageInfoType } from "../info.js";
import type { AutoLinkOptions } from "../nav.js";

export interface StructureSidebarDirOptions {
  /**
   * Dir title
   *
   * @default title of README.md
   *
   * 目录标题
   *
   * @default README.md 标题
   */
  text?: string;

  /**
   * Dir icon
   *
   * @default icon of README.md
   *
   * 目录图标
   *
   * @default README.md 图标
   */
  icon?: string;

  /**
   * Whether dir is expanded by default
   *
   * 当前目录是否默认展开
   *
   * @default false
   */
  expanded?: boolean;

  /**
   * Whether Dir is collapsible
   *
   * 目录是否可折叠
   *
   * @default true
   */

  collapsible?: boolean;

  /**
   * Whether Dir is clickable
   *
   * @description Will set group link to link of README.md
   *
   * 目录是否可点击
   *
   * @description 将会将目录分组的链接设置为 README.md 对应的链接
   *
   * @default false
   */

  link?: boolean;

  /**
   * Whether index current dir
   *
   * 是否索引此目录
   *
   * @default true
   */
  index?: boolean;

  /**
   * Dir order in sidebar
   *
   * 目录在侧边栏中的顺序
   *
   * @default 0
   */
  order?: number;
}

export interface ThemeNormalPageFrontmatter extends ThemeBasePageFrontmatter {
  /**
   * Whether is homepage
   *
   * 是否是主页
   */
  home?: false;

  /**
   * Whether index current page
   *
   * 是否索引此页面
   *
   * @default true
   */
  index?: boolean;

  /**
   * Page order in sidebar
   *
   * 页面在侧边栏的顺序
   *
   * @default 0
   */
  order?: number;

  /**
   * Dir config
   *
   * @description Only available at README.md
   *
   * 目录配置
   *
   * @description 仅在 README.md 中可用
   */
  dir?: StructureSidebarDirOptions;

  /**
   * A short title used in navbar, sidebar and breadcrumb
   *
   * 用于导航栏，侧边栏和路径导航的短标题
   */
  shortTitle?: string;

  /**
   * Whether display lastUpdated time
   *
   * 是否显示最后更新事件
   */
  lastUpdated?: boolean;

  /**
   * Whether display changelog
   *
   * 是否显示变更历史
   */
  changelog?: boolean;

  /**
   * Whether display contributors
   *
   * 是否显示贡献者
   */
  contributors?: boolean | string[];

  /**
   * Whether show Edit link
   *
   * 是否显示编辑此页链接
   */
  editLink?: boolean;

  /**
   * Previous page link
   *
   * 上一页链接
   */
  prev?: string | AutoLinkOptions;

  /**
   * Next page link
   *
   * 下一页链接
   */
  next?: string | AutoLinkOptions;

  /**
   * Whether show toc list in desktop mode
   *
   * 是否在桌面模式下展示标题列表
   */
  toc?: GetHeadersOptions | boolean;

  /**
   * PageInfo items
   *
   * 页面信息项
   *
   * @default ["Author", "Visitor", "Time", "Category", "Tag", "ReadTime"]
   */
  pageInfo?: PageInfoType[] | false;

  /**
   * Whether enable breadcrumb
   *
   * 是否启用路径导航
   */
  breadcrumb?: boolean;

  /**
   * Whether enable breadcrumb icon
   *
   * 是否启用路径导航图标
   */
  breadcrumbIcon?: boolean;

  /**
   * Whether exclude current page in breadcrumb
   *
   * 是否在路径导航中排除
   */
  breadcrumbExclude?: boolean;

  /**
   *
   * Whether enable pageviews
   *
   * @description Only available when using artalk or waline comment service
   *
   * 是否启用访问量
   *
   * @description 仅在使用 Artalk 或 Waline 评论服务时有效
   *
   * @default true
   */
  pageview?: boolean;

  /**
   * Whether this page is an article
   */
  article?: boolean;

  /**
   * Whether the article be sticky in list
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否置顶，如果填入数字，更大值会出现在前面
   */
  sticky?: boolean | number;

  /**
   * Whether the article be stared
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否标为星标，如果填入数字，更大值会出现在前面
   */
  star?: boolean | number;

  /**
   * Page excerpt
   *
   * 页面的摘要
   */
  excerpt?: string;
}
