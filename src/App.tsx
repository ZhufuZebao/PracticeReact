import React, {useEffect} from 'react';
// import Login from './pages/Login'
// import User from './pages/User'
// import UserList from './pages/UserList'
// import ProductList from './pages/ProductList'
// import AttributeGroup from './pages/AttributeGroup'
// import AttributeGroupInsert from './pages/AttributeGroupInsert'

//useContractReducer
import UseContractReducerLogin from './useContextReducer/page/Login'
import UseContractReducerUser from './useContextReducer/page/User'
import UseContractReducerUserList from './useContextReducer/page/UserList'
import UseContractReducerProductList from './useContextReducer/page/ProductList'
import UseContractReducerAttributeGroup from './useContextReducer/page/AttributeGroup'
import UseContractReducerAttributeGroupInsert from './useContextReducer/page/AttributeGroupInsert'
import UseReduxAttributeGroup from './useRedux/page/AttributeGroup'
import UseReduxAttributeGroupInsert from './useRedux/page/AttributeGroupInsert'
import { Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core';

function Redirect({to}:any){
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  })
  return null
}
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/*<Routes>*/}
        {/*  <Route path='/' element={<Redirect to="/login"/>}/>*/}
        {/*  <Route path='/login' element={<Login/>}/>*/}
        {/*  <Route path='/user' element={<User/>}>*/}
        {/*    <Route path='/user/userList' element={<UserList/>}/>*/}
        {/*    <Route path='/user/productList' element={<ProductList/>}/>*/}
        {/*    <Route path='/user/attributeGroup' element={<AttributeGroup/>}/>*/}
        {/*    <Route path='/user/attributeGroup/insert' element={<AttributeGroupInsert/>}/>*/}
        {/*    <Route path='/user/attributeGroup/information' element={<AttributeGroupInsert/>}/>*/}
        {/*  </Route>*/}
        {/*</Routes>*/}
        {/*useContractReducer*/}
        <Routes>
          <Route path='/' element={<Redirect to="/login"/>}/>
          <Route path='/login' element={<UseContractReducerLogin/>}/>
          <Route path='/user' element={<UseContractReducerUser/>}>
            <Route path='/user/userList' element={<UseContractReducerUserList/>}/>
            <Route path='/user/productList' element={<UseContractReducerProductList/>}/>
            <Route path='/user/attributeGroup' element={<UseContractReducerAttributeGroup/>}/>
            <Route path='/user/attributeGroup/insert' element={<UseContractReducerAttributeGroupInsert/>}/>
            <Route path='/user/attributeGroup/information' element={<UseContractReducerAttributeGroupInsert/>}/>
            <Route path='/user/useReduxAttributeGroup' element={<UseReduxAttributeGroup/>}/>
            <Route path='/user/useReduxAttributeGroup/insert' element={<UseReduxAttributeGroupInsert/>}/>
            <Route path='/user/useReduxAttributeGroup/information' element={<UseReduxAttributeGroupInsert/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
