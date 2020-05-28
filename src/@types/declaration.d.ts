/*
 * @Date: 2020-04-14 17:12:43
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-04-14 18:14:18
 * @FilePath: /okr/src/types/index.d.ts
 */
declare module '*.less';

declare module '*.scss';

declare module '*.svg';

declare module "*.png";

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.gif';

declare module '*.md' {
  const content: string;
  export default content;
}
