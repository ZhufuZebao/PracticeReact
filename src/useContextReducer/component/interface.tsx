export interface AttributeGroupModule{
  id:number,
  groupName:string,
  type:string,
  illustrate:string,
  check:boolean,
  showType:boolean,
  useModule:Array<useModuleInterface>
}
export const initialAttributeGroupDate = {
  id:0,
  groupName:'',
  type:'',
  illustrate:'',
  check:false,
  showType:true,
  useModule:[]
}
export interface useModuleInterface {
  id:number,
  moduleName:string
}

