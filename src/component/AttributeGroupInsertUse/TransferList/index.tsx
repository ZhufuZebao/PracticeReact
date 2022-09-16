import React, {useEffect, useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import style from './style.module.css'
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      justifyContent: 'initial',
      marginLeft:'80px',
      width:'auto'
    },
    cardHeader: {
      padding: theme.spacing(1, 2),
    },
    list: {
      width: 382,
      height: 210,
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  }),
);

function not(a: number[], b: Array<module>) {
  return a.filter((value) => {
    let getResultType = b.filter((item) => item.id == value)
    if(getResultType.length > 0){
      return false
    }
    return true
  });
}
function notNumber(a:number[],b:number[]){
  return a.filter((value) => b.indexOf(value) === -1);
}
function notFirstArray(a:Array<module>,b:number[]){
  let resultList = []
  for(let i = 0;i<a.length;i++){
    if(b.indexOf(a[i].id) === -1){
      resultList.push(a[i].id)
    }
  }
  return resultList
}

function intersection(a: number[], b: Array<module>) {
  return a.filter((value) => {
    let getResultType = b.filter((item) => item.id == value)
    if(getResultType.length>0){
      return true
    }
    return false
  });
}

function union(a: number[], b: Array<module>) {
  return [...a, ...notFirstArray(b, a)];
}
function concatFirstArray(itself:Array<module>,add:number[]){
  return itself.filter((item) => {
    let getResultType = add.filter((value) => item.id == value)
    if(getResultType.length > 0){
      return true
    }
    return false
  })
}
function delFirstArray(itself:Array<module>,del:number[]){
  return itself.filter((item) => del.indexOf(item.id) === -1
  )
}

interface module {
  id:number,
  moduleName:string
}
interface TransferListProps {
  right:Array<module>
  setRight:(date:Array<module>)=>void
  pageType:string
}
const moduleList:Array<module> = [
  {
    id:1,
    moduleName:'EYRFJDHSKAS-用户资料'
  },
  {
    id:2,
    moduleName:'EYRFJDHSKAS-账户资料'
  },
  {
    id:3,
    moduleName:'EYRFJDHSKAS-模块属性'
  },
  {
    id:4,
    moduleName:'EYRFJDHSKAS-菜单属性'
  }
]
function TransferList({right,setRight,pageType}:TransferListProps) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<number[]>([]);
  const [left, setLeft] = React.useState<Array<module>>(moduleList);

  const [leftRightHaveChecked,setLeftRightHaveChecked] = useState(false)

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  useEffect(() => {
    if(right.length > 0){
      const copyDate = [...left]
      const resultLeft = copyDate.filter((item) => {
        const check = right.find(function(obj){
          return obj.id == item.id
        })
        if(check == undefined){
          return true
        }else{
          return false
        }
      })
      setLeft(resultLeft)
    }
  },[pageType])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: Array<module>) => {
    return intersection(checked, items).length;
  }

  const handleToggleAll = (items: Array<module>) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(concatFirstArray(left,leftChecked)));
    setLeft(delFirstArray(left, leftChecked));
    setChecked(notNumber(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(concatFirstArray(right,rightChecked)));
    setRight(delFirstArray(right, rightChecked));
    setChecked(notNumber(checked, rightChecked));
  };
  const exchange = () => {
    if(leftChecked.length > 0){
      handleCheckedRight()
      if(rightChecked.length > 0){
        setLeftRightHaveChecked(true)
        return
      }
    }
    if(rightChecked.length > 0){
      handleCheckedLeft()
    }
  }
  useEffect(() => {
    if(leftRightHaveChecked){
      handleCheckedLeft()
      setLeftRightHaveChecked(false)
    }
  },[leftRightHaveChecked])

  const customList = (title: React.ReactNode, items: Array<module>) => (
    <Card style={{width:'382px',border:'1px solid #656D92'}} elevation={0}>
      <CardHeader
      className={classes.cardHeader}
      avatar={
        <Checkbox
          className={style.checkBoxColor}
          onClick={handleToggleAll(items)}
          checked={numberOfChecked(items) === items.length && items.length !== 0}
          indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
          disabled={items.length === 0}
          inputProps={{ 'aria-label': 'all items selected' }}
        />
      }
      title={title}
      subheader={`${items.length} 项`}
    />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value: module) => {
          const labelId = `transfer-list-all-item-${value.id}-label`;

          return (
            <ListItem key={value.id} role="listitem" button onClick={handleToggle(value.id)}>
              <ListItemIcon>
                <Checkbox
                  className={style.checkBoxColor}
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.moduleName} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList('可选', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <IconButton color="primary"  component="span" onClick={() => exchange()}>
            <CompareArrowsIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>{customList('已选', right)}</Grid>
    </Grid>
  );
}

export default TransferList;