import {createData} from '../common'

test('测试createData方法',() => {
  expect(createData(1,'普通股', "yeahwiki", '知识库管理', false,true,[]))
    .toStrictEqual({id:1,groupName:'普通股',type:'yeahwiki',illustrate:'知识库管理',check:false,showType:true,useModule:[]})
})