import WriteInformation from '../index'
import {render,fireEvent} from '@testing-library/react'
import {AttributeGroupModule, initialAttributeGroupDate} from '../../../interface'

describe('测试WriteInformation组件',() => {
  it('画面渲染',() => {
    const setInsertAttributeGroupDate = jest.fn()
    render(<WriteInformation setInsertAttributeGroupDate={setInsertAttributeGroupDate} insertAttributeGroupDate={initialAttributeGroupDate}/>)
  })
  // it('input框输入，groupName',() => {
  //   const [insertAttributeGroupDate,setInsertAttributeGroupDate] = useState<AttributeGroupModule>(initialAttributeGroupDate)
  //   const {getByTestId} = render(
  //     <WriteInformation setInsertAttributeGroupDate={setInsertAttributeGroupDate} insertAttributeGroupDate={insertAttributeGroupDate}/>
  //     )
  //   const name:HTMLInputElement = getByTestId("groupName").querySelector(".MuiInputBase-input") as HTMLInputElement
  //   fireEvent.change(name,{target:{value:'admin'}})
  //   expect(name).toBe('admin')
  // })
})