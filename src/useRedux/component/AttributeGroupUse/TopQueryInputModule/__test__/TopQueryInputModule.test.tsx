import TopQueryInputModule from '../index'
import {render,fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import store from "../../../../../redux/store";
import {Provider} from "react-redux";
import React from "react";
describe('测试TopQueryInputModule组件',() => {
  it('画面渲染',() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
  })
  it('属性组input测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const addBtn:HTMLInputElement = getByTestId('attributeName').querySelector('.MuiInputBase-input') as HTMLInputElement
    fireEvent.change(addBtn,{target:{value:'attributeName'}})
    expect(addBtn.value).toBe('attributeName')
  })
  it('属性组标签input测试',() => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const addBtn:HTMLInputElement = getByTestId('attributeType').querySelector('.MuiInputBase-input') as HTMLInputElement
    fireEvent.change(addBtn,{target:{value:'attributeType'}})
    expect(addBtn.value).toBe('attributeType')
  })





  it('新增按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const addBtn = getByText('新增')
    fireEvent.click(addBtn)
  })
  it('查询按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const selectBtn = getByText('查询')
    fireEvent.click(selectBtn)
  })
  it('重置按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const resetBtn = getByText('重置')
    fireEvent.click(resetBtn)
  })
  it('删除按钮测试',() => {
    const {getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopQueryInputModule/>
        </BrowserRouter>
      </Provider>
    )
    const deleteBtn = getByText('删除')
    fireEvent.click(deleteBtn)
  })
})