import AtrributeGroupInformation from '../index'
import {render,fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
describe('测试AttributeGroupInformation组件',() => {
  it('画面渲染',() => {
    render(
      <BrowserRouter>
        <AtrributeGroupInformation/>
      </BrowserRouter>
      )
  })
})