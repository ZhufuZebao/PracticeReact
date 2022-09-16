import AttributeGroup from '../index'
import {render,fireEvent} from '@testing-library/react'
import store from "../../../../redux/store";
import {Provider} from "react-redux";
import React from "react";
import {BrowserRouter} from "react-router-dom";
describe('AttributeGroup组件测试',() => {
  it('画面渲染',() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributeGroup/>
        </BrowserRouter>
      </Provider>
      )
  })

})