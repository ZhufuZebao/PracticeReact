import React, {useContext, useEffect, useState} from 'react';
import {Button, makeStyles} from "@material-ui/core";
import {WriteInformtaion,TransferList} from '../../component/AttributeGroupInsertUse'
import {useLocation, useNavigate} from "react-router-dom";
import {myContext} from "../../context/store";
import {AttributeGroupModule,initialAttributeGroupDate} from "../../component/interface";
import style from './style.module.css'

const useStyles = makeStyles({
  contentOutDiv:{
    padding:"34px 45px",
    textAlign:'left'
  }
})
interface module {
  id:number,
  moduleName:string
}
function AttributeGroupInsert() {
  const classes = useStyles();
  const navigator = useNavigate()
  const {attributeGroupList,setAttributeGroupList} = useContext(myContext)
  const [insertAttributeGroupDate,setInsertAttributeGroupDate] = useState<AttributeGroupModule>(initialAttributeGroupDate)
  const [right, setRight] = React.useState<Array<module>>([]);
  const [pageType,setPageType] = useState('insert')
  const location = useLocation()
  useEffect(() => {
    if(location.state != null && typeof location.state == "object"){
      let getState:any = location.state
      let assignmentDate:AttributeGroupModule = {
        id:getState.id,
        groupName:getState.groupName,
        type:getState.type,
        illustrate:getState.illustrate,
        check:getState.check,
        showType:getState.showType,
        useModule:getState.useModule
      }
      setInsertAttributeGroupDate(assignmentDate)
      setRight(getState.useModule)
      setPageType('update')
    }

  },[])
  const submitDate = () => {
    if(pageType == 'update'){
      const copyDate = [...attributeGroupList]
      for(let i = 0;i<copyDate.length;i++){
        if(copyDate[i].id == insertAttributeGroupDate.id){
          copyDate[i].groupName = insertAttributeGroupDate.groupName
          copyDate[i].type = insertAttributeGroupDate.type
          copyDate[i].illustrate = insertAttributeGroupDate.illustrate
          copyDate[i].showType = insertAttributeGroupDate.showType
          copyDate[i].useModule = right
        }
      }
      setAttributeGroupList(copyDate)
      navigator(-1)
    }else{
      const result = Math.max(...attributeGroupList.map((x:any) => x.id));
      const updateId = {...insertAttributeGroupDate,id:result+1,useModule:right}
      const newList = [...attributeGroupList]
      newList.push(updateId)
      setAttributeGroupList(newList)
      navigator(-1)
    }
  }
  return (
    <div className={classes.contentOutDiv}>
      <WriteInformtaion setInsertAttributeGroupDate={setInsertAttributeGroupDate} insertAttributeGroupDate={insertAttributeGroupDate}/>
      <div style={{height:'62.5px'}}></div>
      <hr style={{backgroundColor: '#E3E4EB', border: '0px', height: '1px'}}/>
      <TransferList right={right} setRight={setRight} pageType={pageType}/>
      <div>
        <div className={style.buttonDiv}>
          <Button variant="contained" color="primary" style={{marginRight:'25px'}} onClick={() => {submitDate()}}>提交</Button>
          <Button variant="outlined" style={{color:'#656D92'}} onClick={() => {navigator(-1)}}>返回</Button>
        </div>
      </div>
    </div>
  );
}

export default AttributeGroupInsert;