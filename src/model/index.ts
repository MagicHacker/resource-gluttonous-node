/**
 * 统一管理sequelize的model
 */
import dbConfig from '../config/db'
import { Sequelize, DataTypes } from 'sequelize'
import { modelUser, UserInterface } from './users'

interface dbInterface {
  sequelize: Sequelize
  User: UserInterface
}
// 初始化sequelize
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
export const db: dbInterface = {
  sequelize,
  User: modelUser(sequelize, DataTypes)
}
