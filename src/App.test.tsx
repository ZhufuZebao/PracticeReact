import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import ButtomShowAttributeList from "./useRedux/component/AttributeGroupUse/ButtomShowAttributeList";

test('测试index文件', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
});
it('列表中link测试,跳转到insert画面赋值update',() => {
  const {getByTestId,getByText} = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
  const login = getByText('LOGIN')
  fireEvent.click(login)
  const attributeGroupPage = getByText('属性组管理(Redux)')
  fireEvent.click(attributeGroupPage)
  const link = getByTestId('link-0')
  fireEvent.click(link)
})
it('列表中link测试,跳转到insert画面赋值update，并提交',() => {
  const {getByTestId,getByText} = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
  const attributeGroupPage = getByText('属性组管理(Redux)')
  fireEvent.click(attributeGroupPage)
  const link = getByTestId('link-0')
  fireEvent.click(link)
  const submit = getByText('提交')
  fireEvent.click(submit)
})
