import {useContext, useEffect, useState} from "react";
import {AttributeGroupModule} from "../useContextReducer/component/interface";
import {AttributeGroupList} from "../useContextReducer/component/common";
import {myContext} from "../context/store";
import {get, post} from "../utils/http";

const withHeader = (Component:any) => {
  return (props:any) => {
    const {attributeGroupList,dispatch} = useContext(myContext)
    const [attributeName,setAttributeName] = useState('')
    const [attributeType,setAttributeType] = useState('')
    useEffect(() => {
      getAttributeGroupList()
    },[])
    const adjustmentApiData = (oldData:any):Array<AttributeGroupModule> => {
      let adjustmentData:Array<AttributeGroupModule> = []
      oldData.forEach((item:any) => {
        adjustmentData.push({
          id:item.id,
          groupName:item.name,
          showType:item.showType,
          type:item.roleType,
          useModule:item.useModule,
          illustrate:item.application,
          check:false
        })
      })
      return adjustmentData
    }
    const getAttributeGroupList = () => {
      get("userList").then((res:any) => {
        const getData = res.data.data
        let adjustmentData:Array<AttributeGroupModule> = adjustmentApiData(getData)
        dispatch({
          type:'getData',
          state:adjustmentData
        })
        console.log(getData)
      })
    }
    const enquirie = () => {
      get("getuser",{
        'name':attributeName,
        'type':attributeType
      }).then((res:any) => {
        if(res.data.data != "数据不存在"){
          let adjustmentData:Array<AttributeGroupModule> = adjustmentApiData(res.data.data)
          dispatch({
            type:'getData',
            state:adjustmentData
          })
        }

      }).catch(e => {
        console.log(e)
      })
    }
    const reset = () => {
      setAttributeName('')
      setAttributeType('')
      getAttributeGroupList()
    }
    const delDate = () => {
      const copyDate = [...attributeGroupList]
      let checkedId:Array<number> = []
      copyDate.forEach((item) => {
        if(item.check){
          checkedId.push(item.id)
        }
      })
      post("deleteUser",{id:JSON.stringify(checkedId)}).then((res:any) => {
        let adjustmentData:Array<AttributeGroupModule> = adjustmentApiData(res.data.data)
        dispatch({
          type:'getData',
          state:adjustmentData
        })
      }).catch(e => {
        console.log(e)
      })
      console.log(checkedId)
    }
    return (
      <Component {...props}
                 enquirie={enquirie}
                 reset={reset}
                 delDate={delDate}
                 attributeName={attributeName}
                 setAttributeName={setAttributeName}
                 attributeType={attributeType}
                 setAttributeType={setAttributeType}/>
    )
  }
}
export default withHeader