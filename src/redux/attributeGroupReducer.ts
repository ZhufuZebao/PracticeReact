import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {AttributeGroupModule} from '../component/interface'
import {AttributeGroupList} from '../component/common'

export interface State {
  data:Array<AttributeGroupModule>
}
const initialState:State = {
  data:AttributeGroupList
}
const attributeGroupSlice = createSlice({
  name:'attributeGroupSlice',
  initialState,
  reducers:{
    addAttributeGroupAction:(state:State,action:PayloadAction<AttributeGroupModule>) => {
      const {payload} = action
      payload.id = Math.max(...state.data.map((item) => item.id))+1
      state.data = [...state.data, payload]
    },
    updateAttributeGroupAction:(state:State,action:PayloadAction<AttributeGroupModule>) => {
      const {payload} = action
      let copyData = state.data
      copyData.map((item) => {
        if(item.id == payload.id){
          item.groupName = payload.groupName
          item.type = payload.type
          item.showType = payload.showType
          item.illustrate = payload.illustrate
          item.useModule = payload.useModule
        }
      })
      state.data = copyData
    },
    updateCheckAttributeGroupAction:(state:State,action:PayloadAction<number>) => {
      const {payload} = action
      let copyData = state.data
      copyData.map((item) => {
        if(item.id == payload){
          item.check = !item.check
        }
      })
      state.data = copyData
    },
    checkAllAttributeGruopAction:(state:State) => {
      let copyData = state.data
      let checkNumber = 0
      for(let i = 0;i<copyData.length;i++){
        if(copyData[i].check){
          checkNumber++
        }
      }
      if(checkNumber == copyData.length){
        for(let i = 0;i<copyData.length;i++){
          copyData[i].check = !copyData[i].check
        }
      }else{
        for(let i = 0;i<copyData.length;i++){
          if(!copyData[i].check){
            copyData[i].check = true
          }
        }
      }
      state.data = copyData
    },
    deleteAttributeGroupAction:(state:State) => {
      let copyData = state.data
      for(let i = copyData.length-1;i>=0;i--){
        if(copyData[i].check){
          copyData.splice(i,1)
        }
      }
      state.data = copyData
    },
    resetAttributeGroupAction:(state:State,action:PayloadAction<Array<AttributeGroupModule>>) => {
      const {payload} = action
      state.data = payload
    },
    enquirieAttributeGroupAction:(state:State,action:PayloadAction<{name:string,type:string}>) => {
      const {payload} = action
      let copyData = state.data
      state.data = copyData.filter(
        (item:AttributeGroupModule) => item.groupName.indexOf(payload.name) !== -1 && item.type.indexOf(payload.type) !== -1
      )
    }
  }
})
export const {
  addAttributeGroupAction,
  updateAttributeGroupAction,
  updateCheckAttributeGroupAction,
  checkAllAttributeGruopAction,
  deleteAttributeGroupAction,
  resetAttributeGroupAction,
  enquirieAttributeGroupAction
} = attributeGroupSlice.actions
export default attributeGroupSlice.reducer