/**
 * mysql数据库配置文件
 * 使用ES6的模块系统
 */
const config = {
  host: 'localhost',
  username: 'root',
  password: 'zhang2684323',
  port: '3306',
  database: 'gluttonous',
  pool: {
    max: 5,
    min: 0,
    acquire: 3000, // 连接池尝试建立连接的最大时间 连接不上抛出错误
    idle: 1000 //闲置的连接超时多少毫秒被释放
  }
}

export default config
