export interface Question {
  id: string;
  /** 题图 */
  picture?: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 作者id */
  authors: string[];
}
