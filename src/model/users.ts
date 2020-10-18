/**
 * 定义user模型
 */

// user interface
export interface UserInterface {
  id: string
  username: string
  password: string
}
export const modelUser = (sequelize: any, DataTypes: any): UserInterface => {
  const User = sequelize.define('user', {
    // 定义模型属性
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return User
}
