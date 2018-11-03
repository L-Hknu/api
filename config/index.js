//打包文件中设置参数 修改url
let config = window.DEV_MODE ? require('./dev.env').default : require('./prod.env').default
export default config

