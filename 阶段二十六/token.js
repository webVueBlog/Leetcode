/**

const jwt = require('jsonwebtoken')
// 密钥
const key = 'secretKey'

// 这里的 data 是用户名，使用用户名来生成唯一的 token 
function generateToken(data) {
    const token = jwt.sign({
        data,
        exp: Math.floor(Date.now() / 1000) + (3600 * 24 * 7), // 有效期一周
    }, key)

    return token
}

是否是有效的 token
是否过期
是否和数据库中保存的 token 一致


function isVaildToken(db, token) {
    return new Promise(resolve => {
        let result
        try {
            result = jwt.verify(token, key)
        } catch(e) {
            resolve(false)
        }

        const { exp } = result
        const current = Math.floor(Date.now() / 1000)
        if (current > exp) {
            resolve(false)
        }

        db.collection(userCollection).findOne({ token }).then(res => {
            console.log(res)
            if (res) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}


 */