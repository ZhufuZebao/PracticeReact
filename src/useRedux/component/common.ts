import {useModuleInterface} from "./interface";

export function createData(id:number,groupName: string, type: string, illustrate: string,check:boolean,showType:boolean,useModule:Array<useModuleInterface>) {
  return {id, groupName, type, illustrate, check,showType,useModule};
}
export const AttributeGroupList = [
  createData(1,'普通股', "yeahwiki", '知识库管理', false,true,[]),
  createData(2,'限制性股份', "yeahwiki", '项目管理', false,true,[]),
  createData(3,'优先股', "yeahwiki", '平台管理', false,true,[]),
  createData(4,'分红股', "yeahwiki",'知识库管理', false,true,[]),
  createData(5,'普通股', "yeahwiki",'知识库管理', false,true,[]),
  createData(6,'限制性股份', "yeahwiki",'项目管理',false,true,[]),
  createData(7,'优先股', "yeahwiki",'平台管理', false,true,[]),
  createData(8,'分红股', "yeahwiki",'知识库管理', false,true,[]),
]