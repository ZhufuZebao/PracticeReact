import React, {useEffect, useReducer, useState} from 'react';
import {Outlet, NavLink, useLocation, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {Collapse} from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SmsIcon from '@material-ui/icons/Sms';
import ComputerIcon from '@material-ui/icons/Computer';
import {myContext} from '../../../context/store'
import {reducer} from '../../../context/reducer'
import {AttributeGroupList} from '../../component/common'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  secondaryMenu:{
    marginLeft: '20px',
    color:"inherit"
  },
  menuActive:{
    background: '#744DFE',
    borderRadius: '11px',
    opacity: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textDecoration:'none',
    color:'#fff'
  },
  menuLink:{
    opacity: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textDecoration:'none',
  },
  topHr:{
    backgroundColor:'#ECF0F1',
    height:'2px',
    border:'0px'
  },
  topTitle:{
    font: 'normal normal normal 22px/29px Microsoft YaHei',
    color: '#364064',
    marginTop: '30px'
  },
  topImage:{
    width:'60px',
    height:'60px',
    backgroundImage:' url("images/avatar_button_topBar.jpg")',
    marginTop: '7px',
    float: 'left',
  }

}));

export default function User() {
  const classes = useStyles();
  const location = useLocation();
  const [tenantManagementListMenu,setTenantManagementListMenu] = useState(false)
  const [systemManagementListMenu,setSystemManagementListMenu] = useState(true)
  const [title,setTitle] = useState('')
  // const [attributeGroupList,dispatch] = useReducer(reducer,AttributeGroupList)
  const [attributeGroupList,dispatch] = useReducer(reducer,[])
  const getIcon = (iconName:string) => {
    switch (iconName) {
      case 'userList':
        return <AccountCircleIcon style={{color:'inherit'}}/>
      case 'productList':
        return <CategoryIcon  style={{color:'inherit'}}/>
      case 'attributeGroup':
        return <ComputerIcon style={{color:'inherit'}}/>
      default:
        return <ControlPointIcon style={{color:'inherit'}}/>
    }
  }
  const menuList = [
    {
      id:1,
      path: "/user/userList",
      text: "用户列表",
      iconName:'userList',
      title:'用户列表',
    },
    {
      id:2,
      path: "/user/productList",
      text: "产品列表",
      iconName:'productList',
      title:'产品列表'
    },
  ];
  const systemMenuList = [
    {
      id:1,
      path: "/user/attributeGroup",
      text: "属性组管理",
      iconName:'attributeGroup',
      title:'EAV-属性组管理'
    },
    {
      id:2,
      path: "/user/useReduxAttributeGroup",
      text: "属性组管理(Redux)",
      iconName:'attributeGroup',
      title:'EAV-属性组管理(Redux)'
    },
  ];
  return (
    <div className={classes.root}>


      <Drawer
        variant="permanent"
        className={classes.drawerOpen}
        classes={{
          paper: classes.drawerOpen,
        }}>
        <div className={classes.toolbar}>
        </div>
        <List>
          <ListItem button onClick={() => setTenantManagementListMenu(!tenantManagementListMenu)}>
            <ListItemIcon>
              <PeopleAltIcon style={{color:'#656D92'}}/>
            </ListItemIcon>
            <ListItemText primary="租户管理" style={{color:'#656D92'}}/>
            {tenantManagementListMenu ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </ListItem>
          <Collapse in={tenantManagementListMenu}>
            <List>
              {menuList.map((item, index) => (
                  <NavLink key={item.id}  to={item.path}
                    style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#656D92",
                    textDecoration : 'none',
                    })}
                    className={({isActive})=> isActive ? classes.menuActive : classes.menuLink}
                    onClick={() => setTitle(item.title)}
                  >
                    <ListItem button >
                      <ListItemIcon  className={classes.secondaryMenu}>{getIcon(item.iconName)}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </NavLink>
              ))}
            </List>
          </Collapse>
        </List>
        <List>
          <ListItem button onClick={() => setSystemManagementListMenu(!systemManagementListMenu)}>
            <ListItemIcon>
              <SmsIcon style={{color:'#656D92'}}/>
            </ListItemIcon>
            <ListItemText primary="系统管理" style={{color:'#656D92'}}/>
            {systemManagementListMenu ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </ListItem>
          <Collapse in={systemManagementListMenu}>
            <List>
              {systemMenuList.map((item, index) => (
                <NavLink key={item.id}  to={item.path} style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#656D92",
                  textDecoration : 'none'
                })}
                className={({isActive})=> isActive ? classes.menuActive : classes.menuLink}
                onClick={() => setTitle(item.title)}>
                  <ListItem button>
                    <ListItemIcon  className={classes.secondaryMenu}>{getIcon(item.iconName)}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
      <main className={classes.content}>

        <div className={classes.toolbar}>
          <div style={{width:'100%',display:"flex",justifyContent:'space-between',padding:'0px 30px 0px 30px'}}>
            {/*<div className={classes.topTitle}>EAV-属性组管理</div>*/}
            <div className={classes.topTitle}>{title}</div>
            <div className={classes.topImage}></div>
          </div>
        </div>
        <hr className={classes.topHr}/>
        <myContext.Provider value={{attributeGroupList,dispatch}}>
          <Outlet/>
        </myContext.Provider>
      </main>
    </div>
  );
}