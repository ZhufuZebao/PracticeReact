import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {updateCheckAttributeGroupAction,checkAllAttributeGruopAction} from '../redux/attributeGroupReducer'

const withShowTable = (Components:any) => {
  return (props:any) => {
    const {data:attributeGroupList} = useSelector((state: RootState) => state.attributeGroupSlice)
    const dispatch = useDispatch()
    const changeChecked = (id:number) => {
      dispatch(updateCheckAttributeGroupAction(id))
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
      dispatch(checkAllAttributeGruopAction())
    }
    return (
      <Components {...props} changeChecked={changeChecked} getCheckedNumber={getCheckedNumber} checkedAll={checkedAll}/>
    )
  }
}
export default withShowTable