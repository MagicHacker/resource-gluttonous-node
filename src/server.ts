import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from 'morgan'

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import constant from './config/constant'
import { testConnect } from './testConnection'
import { db } from './model/index'
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
// 测试数据库连接
async function initServer(): Promise<any> {
  await testConnect()
  app.listen(constant.port, () => {
    db.sequelize.sync()
    console.log(`Express server started on port ${constant.port}`)
  })
}
initServer()
