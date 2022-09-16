import {useContext} from "react";
import {myContext} from "../context/store";

const withShowTable = (Components:any) => {
  return (props:any) => {
    const {attributeGroupList,dispatch} = useContext(myContext)
    const changeChecked = (id:number) => {
      const copyDate = [...attributeGroupList]
      for(let i = 0;i<copyDate.length;i++){
        if(copyDate[i].id == id){
          copyDate[i].check = !copyDate[i].check
        }
      }
      dispatch({
        type:'update',
        state:copyDate
      })
    }
    const getCheckedNumber = () => {
      let checkNumber = 0
      for(let i = 0;i<attributeGroupList.length;i++){
        if(attributeGroupList[i].check){
          checkNumber++
        }
      }
      return checkNumber
    }
    const checkedAll = () => {
      const copyDate = [...attributeGroupList]
      if(getCheckedNumber() == copyDate.length){
        for(let i = 0;i<copyDate.length;i++){
          copyDate[i].check = !copyDate[i].check
        }
      }else{
        for(let i = 0;i<copyDate.length;i++){
          if(!copyDate[i].check){
            copyDate[i].check = true
          }
        }
      }
      dispatch({
        type:'update',
        state:copyDate
      })
    }
    return (
      <Components {...props} changeChecked={changeChecked} getCheckedNumber={getCheckedNumber} checkedAll={checkedAll}/>
    )
  }
}
export default withShowTable