import TransferList from '../index'
import {render,fireEvent} from '@testing-library/react'

describe('测试TransferLst组件',() => {
  it('画面渲染',() => {
    const setRight = jest.fn()
    render(<TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>)
  })
  it('画面渲染,当没有已选数据',() => {
    const setRight = jest.fn()
    render(<TransferList right={[]} setRight={setRight} pageType={'insert'}/>)
  })
  it('测试左边全选按钮',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
      )
    const checkBox = getByTestId('可选')
    fireEvent.click(checkBox)
  })
  it('测试右边全选按钮',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const checkBoxAll = getByTestId('已选')
    const rightcheckBox = getByTestId('已选-0')
    fireEvent.click(rightcheckBox)
    fireEvent.click(checkBoxAll)
  })
  it('测试左边全选按钮取消选中',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const checkBoxall = getByTestId('可选')
    const rightcheckBox = getByTestId('已选-0')
    fireEvent.click(rightcheckBox)
    fireEvent.click(checkBoxall)
    fireEvent.click(checkBoxall)
  })
  it('测试左边checkbox',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const checkBox = getByTestId('可选-0')
    fireEvent.click(checkBox)
  })
  it('测试右边checkbox',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const checkBox = getByTestId('已选-0')
    fireEvent.click(checkBox)
  })
  it('测试右边checkbox选中后取消选中',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const checkBox = getByTestId('已选-0')
    fireEvent.click(checkBox)
    fireEvent.click(checkBox)
  })
  it('测试中间的交换按钮',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const leftCheckBox = getByTestId('可选-0')
    const rightCheckBox = getByTestId('已选-0')
    const button = getByTestId('button')
    fireEvent.click(leftCheckBox)
    fireEvent.click(rightCheckBox)
    fireEvent.click(button)
  })
  it('测试中间的交换按钮，只有已选',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const rightCheckBox = getByTestId('已选-0')
    const button = getByTestId('button')
    fireEvent.click(rightCheckBox)
    fireEvent.click(button)
  })
  it('测试中间的交换按钮，只有可选',() => {
    const setRight = jest.fn()
    const {getByTestId} = render(
      <TransferList right={[{id:1, moduleName:'EYRFJDHSKAS-用户资料'},{id:2, moduleName:'EYRFJDHSKAS-账户资料'}]} setRight={setRight} pageType={'insert'}/>
    )
    const leftCheckBox = getByTestId('可选-0')
    const button = getByTestId('button')
    fireEvent.click(leftCheckBox)
    fireEvent.click(button)
  })
})