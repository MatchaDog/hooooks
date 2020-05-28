/*
 * @Date: 2020-04-10 17:00:18
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-04-13 14:31:35
 * @FilePath: /okr/src/types/routes.d.ts
 */
export declare namespace TRoute {
    interface IRoute {
        path: string;
        name: string;
        key: string;
        component: React.FC<{ routes: IRoute[] }>;
        hidden?: boolean;
        routes?: Array<IRoute>;
    }
}
