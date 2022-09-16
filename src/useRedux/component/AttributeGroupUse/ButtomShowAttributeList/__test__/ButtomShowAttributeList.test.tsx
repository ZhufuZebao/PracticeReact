import ButtomShowAttributeList from '../index'
import {render,fireEvent} from "@testing-library/react";
import store from "../../../../../redux/store";
import {Provider} from "react-redux";
import React from "react";
import {BrowserRouter} from "react-router-dom";

describe('ButtomShowAttributeList组件测试',() => {
  it('画面渲染',() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
         <ButtomShowAttributeList/>
        </BrowserRouter>
      </Provider>
    )
  })
  it('全选按钮测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <ButtomShowAttributeList/>
        </BrowserRouter>
      </Provider>
    )
    const checkedAll = getByTestId('checkedAll')
    fireEvent.click(checkedAll)
  })
  it('全选按钮测试,点击后取消点击',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <ButtomShowAttributeList/>
        </BrowserRouter>
      </Provider>
    )
    const checkedAll = getByTestId('checkedAll')
    fireEvent.click(checkedAll)
    fireEvent.click(checkedAll)
  })
  it('列表中checkbox测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <ButtomShowAttributeList/>
        </BrowserRouter>
      </Provider>
    )
    const checked = getByTestId('checked-0')
    fireEvent.click(checked)
  })
  it('列表中checkbox测试,点击后取消点击',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <ButtomShowAttributeList/>
        </BrowserRouter>
      </Provider>
    )
    const checked = getByTestId('checked-0')
    fireEvent.click(checked)
    fireEvent.click(checked)
  })
})