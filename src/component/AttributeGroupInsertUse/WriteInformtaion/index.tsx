import React, {useEffect, useState} from 'react';
import {
  createStyles, FormControl,
  Grid, InputLabel,
  makeStyles, Select,
  Switch,
  TextField,
  Theme,
  withStyles
} from "@material-ui/core";
import theme from "../../../theme";
import {AttributeGroupModule,initialAttributeGroupDate} from "../../interface";

const useStyle = makeStyles({
  inputFirstText:{
    width:'98px',
    font:'normal normal normal 14px/24px Microsoft YaHei',
    color: '#656D92',
    lineHeight:'40px'
  },
  inputFirstTypeText:{
    width:'98px',
    font:'normal normal normal 14px/24px Microsoft YaHei',
    color: '#656D92',
  },
  line:{
    display:'flex'
  },
  input:{
    width: '173px',
  },
  requireTag:{
    color:'red',
    fontSize:'20px',
    lineHeight: '40px'
  },
  intervalDiv:{
    height:"18px"
  },
  textField:{
    width:'382px',
    height:'145px'
  },
  formControl: {
    width: 173,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
})
const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
      overflow:'initial'
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);
interface WriteInformationProps {
  setInsertAttributeGroupDate:(date:any)=>void
  insertAttributeGroupDate:AttributeGroupModule
}
function WriteInformation({setInsertAttributeGroupDate,insertAttributeGroupDate}:WriteInformationProps){

  const classes = useStyle()
  const changeNewDate = (date:string|unknown,type:string) => {
    const copyDate = {
      ...insertAttributeGroupDate,
      [type] : date
    }
    setInsertAttributeGroupDate(copyDate)
  }
  return (
    <div>
      <div className={classes.line}>
        <div className={classes.requireTag} style={{marginLeft:'-10px'}}>*</div>
        <div className={classes.inputFirstText}>属性组名称：</div>
        <TextField variant="outlined" size="small" className={classes.input}
                   value={insertAttributeGroupDate.groupName}
                   onChange={(value) => {
                     changeNewDate(value.target.value,'groupName')
                   }}/>
      </div>
      <div className={classes.intervalDiv}/>
      <div className={classes.line}>
        <div className={classes.requireTag} style={{marginLeft:'-10px'}}>*</div>
        <div className={classes.inputFirstText}>标签：</div>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            value={insertAttributeGroupDate.type}
            onChange={(event) => changeNewDate(event.target.value,'type')}
            style={{height:'40px'}}
          >
            <option aria-label="None" value="" />
            <option value={'yeahwiki'}>yeahwiki</option>
            <option value={'test1'}>test1</option>
            <option value={'test2'}>test2</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.intervalDiv}/>
      <div className={classes.line}>
        <div className={classes.inputFirstTypeText}>是否显示标签：</div>
        <Grid item >
          <AntSwitch checked={insertAttributeGroupDate.showType} onChange={() => {changeNewDate(!insertAttributeGroupDate.showType,'showType')}} name="checkedC"/>
        </Grid>
      </div>
      <div className={classes.intervalDiv}/>
      <div className={classes.line}>
        <div className={classes.inputFirstTypeText}>说明：</div>
        <TextField
          multiline
          minRows={5}
          variant="outlined"
          className={classes.textField}
          value={insertAttributeGroupDate.illustrate}
          onChange={(value) => changeNewDate(value.target.value,'illustrate')}/>
      </div>
    </div>
  );
}

export default WriteInformation;