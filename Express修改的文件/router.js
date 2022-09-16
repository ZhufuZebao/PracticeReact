const express = require('express')
const fs = require('fs')

const router = express.Router()

// 用户列表一览
router.get('/userList',(req,res) =>{
    let userList = JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    res.send({
        status: 200,
        msg:'success',
        data:userList
    })
})
// 用户查询
router.get('/getuser',(req,res) =>{
    let userList = JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    // 【GET】方式：获取request参数
    const query = req.query
	console.log(query)
    // 不区分大小写
    let name = query['name']?.toUpperCase();
    let type = query['type']?.toUpperCase();
    if (name) {
        let userTmp = userList.filter(item => item['name'].toUpperCase().includes(name) && item['roleType'].toUpperCase().includes(type));
        console.log(userTmp)
        res.send({
            status: 200,
            msg:'success',
            data:userTmp
        })
    } else {
        res.send({
            status: 200,
            msg:'数据不存在',
            data:'数据不存在'
        })
    }
    
})
// 用户新增
router.post('/addUser',(req,res) => {
    // 【POST】方式：通过req的body 获取请求体中包含的url-encoded格式的数据
    const body = req.body
    let userList = JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    
    userList.push({
        // "id": userList.length + 1,
        "id": Math.max(...userList.map((x) => x.id))+1,
        "name": body?.name,
        "application": body?.application,
        "roleType": body?.roleType,
        "operate": body?.operate,
        "showType": JSON.parse(body?.showType),
        "useModule": JSON.parse(body?.useModule),
    })
    fs.writeFileSync("./dist/data.json",JSON.stringify(userList))
    res.send({
        status: 200,
        msg:'success',
        data:JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    })

})
// 用户修改
router.post('/updateUser',(req,res) => {
    //【POST】方式：通过req的body 获取请求踢中包含的url-encoded格式的数据
    const body = req.body
	console.log(body)
    let userID = body['id']
    let userList = JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    userList.forEach(item => {
        if(item['id'] == userID){
            item['name'] = body['name']
            item['application'] = body['application']
            item['roleType'] = body['roleType']
            item['operate'] = body['operate']
            item['showType'] = JSON.parse(body['showType'])
            item['useModule'] = JSON.parse(body['useModule'])
        }
    })

    fs.writeFileSync("./dist/data.json",JSON.stringify(userList))
    res.send({
        status: 200,
        msg:'success',
        data:JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    })

})
// 用户删除
router.post('/deleteUser',(req,res) => {
    //【POST】方式：通过req的body 获取请求踢中包含的url-encoded格式的数据
    const body = req.body
    let userID = JSON.parse(body['id'])
    let userList = JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    // userList.some((item, index) =>{
    //     if(item.id == userID){
    //         userList.splice(index, 1)
    //     }
    // })
		for(let i = userList.length-1;i>0;i--){
			if(userID.includes(userList[i].id )){
				console.log(userList[i].id)
				userList.splice(i, 1)
			}
		}
    fs.writeFileSync("./dist/data.json",JSON.stringify(userList))
    res.send({
        status: 200,
        msg:'success',
        data:JSON.parse(fs.readFileSync('./dist/data.json','utf-8'))
    })

})

module.exports = router