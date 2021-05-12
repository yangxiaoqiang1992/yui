/*
 * @Author: yangxiaoqiang 
 * @Date: 2021-05-11 17:14:00 
 * @Last Modified by: yangxiaoqiang
 * @Last Modified time: 2021-05-12 21:30:34
 * @description 用于生成一个组件基本模板的快捷方式
 */

const path = require('path');
const fs = require('fs');
function generateComponent(commandName){
   console.log(process.argv)
   console.log(process.cwd())
}

module.exports = {
    generateComponent
};