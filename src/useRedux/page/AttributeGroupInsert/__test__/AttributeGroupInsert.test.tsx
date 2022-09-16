import AttributeGroupInsert from '../index'
import {render,fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import store from "../../../../redux/store";
import {Provider} from "react-redux";
import React from "react";
import ButtomShowAttributeList from "../../../component/AttributeGroupUse/ButtomShowAttributeList";
describe('测试AttributeGroupInsert画面',() => {
  it('画面渲染',() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
      )
  })
  it('input框输入，groupName',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const name:HTMLInputElement = getByTestId("groupName").querySelector(".MuiInputBase-input") as HTMLInputElement
    fireEvent.change(name,{target:{value:'admin'}})
    expect(name.value).toBe('admin')
  })
  it('选择属性组标签测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const type:HTMLOptionElement = getByTestId("attributeGroupType").querySelector(".MuiSelect-root") as HTMLOptionElement
    fireEvent.change(type,{target:{value:'test1'}})
    expect(type.value).toBe('test1')
  })
  it('显示标签按钮测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const type = getByTestId("showType")
    fireEvent.click(type)
  })
  it('input框输入，illustrate',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const illustrate:HTMLInputElement = getByTestId("illustrate").querySelector(".MuiInputBase-input") as HTMLInputElement
    fireEvent.change(illustrate,{target:{value:'illustrate'}})
    expect(illustrate.value).toBe('illustrate')
  })
  it('insert提交按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const submit = getByText('提交')
    fireEvent.click(submit)
  })
  it('返回按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroupInsert/>
        </BrowserRouter>
      </Provider>
    )
    const callback = getByText('返回')
    fireEvent.click(callback)
  })
})