/*
 * @Date: 2020-04-14 16:29:30
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-04-14 16:29:43
 * @FilePath: /okr/src/types/okr.d.ts
 */
export namespace TOKRList {
    interface IGetOKRData {
      krDate?: string;
      statusType?: string;
      isDept?: number;
    }
  
    interface IQList {
      Dept?: string;
      btnType?: string;
      okrVersion: string;
      status?: any;
      url?: string;
      feedBackType?: boolean;
      okrdaiList?: any[];
      okrlist: IOList[];
      dept?: boolean;
      krdate?: string;
    }
  
    interface IOList {
      type: string;
      okrRangeIds?: string;
      okrRangeNames?: string;
      okrVersion?: string;
      okrperList?: any[];
      okr: string;
      krlist: IKRList[];
    }
  
    interface IKRList {
      krId?: number;
      kr: string;
      krRangeIds?: string;
      krRangeNames?: string;
      unit?: string;
      krperlist?: any[];
    }
  }
  