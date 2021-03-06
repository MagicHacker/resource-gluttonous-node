/**
 * 测试sequelize连接数据库
 */
import { Sequelize } from 'sequelize'
import dbConfig from './config/db'
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: dbConfig.pool
  }
)

export async function testConnect(): Promise<any> {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    process.exit(1)
  }
}
