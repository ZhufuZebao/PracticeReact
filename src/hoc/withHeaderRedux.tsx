import { useState} from "react";
import {AttributeGroupModule} from "../useContextReducer/component/interface";
import {AttributeGroupList} from "../useContextReducer/component/common";
import {RootState} from '../redux/store'
import {useDispatch, useSelector} from "react-redux";
import {deleteAttributeGroupAction,resetAttributeGroupAction,enquirieAttributeGroupAction} from '../redux/attributeGroupReducer'

const withHeader = (Component:any) => {
  return (props:any) => {
    const {data:attributeGroupList} = useSelector((state: RootState) => state.attributeGroupSlice)
    const [attributeName,setAttributeName] = useState('')
    const [attributeType,setAttributeType] = useState('')
    const dispatch = useDispatch()


    const enquirie = () => {
      dispatch(enquirieAttributeGroupAction({name:attributeName,type:attributeType}))
    }
    const reset = () => {
      setAttributeName('')
      setAttributeType('')
      dispatch(resetAttributeGroupAction(AttributeGroupList))
    }
    const delDate = () => {
      dispatch(deleteAttributeGroupAction())
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