import React, {FC, useContext, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import classes from './style.module.css'
import {useNavigate} from "react-router-dom";
import withHeader from "../../../../hoc/withHeader";

interface TopQueryInputModuleProps {
  enquirie:() =>void
  reset:() =>void
  delDate:() =>void
  attributeName:string
  attributeType:string
  setAttributeName:(data:string)=>void
  setAttributeType:(data:string)=>void

}
export const TopQueryInputModule:React.FC<TopQueryInputModuleProps> = ({enquirie,reset,delDate,attributeName,attributeType,setAttributeName,setAttributeType}) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={classes.inputDiv}>
        <div className={classes.flexDiv}>
          <div className={classes.flexDiv}>
            <div className={classes.inputFirstText}>属性组名称：</div>
            <TextField
              variant="outlined"
              size="small"
              style={{marginRight:'40px'}}
              value={attributeName}
              onChange={(value) => setAttributeName(value.target.value)}/>
          </div>
          <div className={classes.flexDiv}>
            <div className={classes.inputFirstText}>标题：</div>
            <TextField
              variant="outlined"
              size="small"
              value={attributeType}
              onChange={(value) => setAttributeType(value.target.value)}
            />
          </div>
        </div>
        <div className={classes.flexDiv}>
          <Button variant="contained" color="primary" style={{marginRight:'25px'}} onClick={() => enquirie()}>查询</Button>
          <Button variant="outlined" style={{color:'#656D92',marginRight:'40px'}} onClick={() => reset()}>重置</Button>
          <Button endIcon={<AddCircleOutlineIcon/>} style={{color: "#1AD188",marginRight:'10px'}}
                  onClick={() => navigate('/user/attributeGroup/insert')}>新增</Button>
          <Button endIcon={<RemoveCircleOutlineIcon/>} style={{color: "#DF1847"}} onClick={() => delDate()}>删除</Button>

        </div>
      </div>
    </>
  );
}

export default withHeader(TopQueryInputModule);