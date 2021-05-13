/*
 * @Author: yangxiaoqiang 
 * @Date: 2021-05-11 17:14:00 
 * @Last Modified by: yangxiaoqiang
 * @Last Modified time: 2021-05-13 15:47:08
 * @description 用于生成一个组件基本模板的快捷方式
 */

const path = require('path');
const fs = require('fs');
const { exit } = require('process');
function generateComponent(commandName){
    const uiPath = path.join(process.cwd(),'\\packages\\ui\\')
    const nameArr = commandName && commandName.split('.')
    let tempDir = uiPath+nameArr.join('\\');
    let comName = nameArr[nameArr.length - 1];
    if(fs.existsSync(tempDir)){
      console.error('文件夹或组件已存在')
      exit(0)
    }
    comName = comName[0].toUpperCase()+comName.substring(1)
    let componentEntry =
`
import type { App } from 'vue'
import ${comName} from './src'

(${comName} as any).install = function (app:App):void{
    app.component(${comName}.name,${comName})
}
export {
    ${comName}
}
export default ${comName}
`
    let componentContent = 
`
import { defineComponent } from 'vue'

export default defineComponent({
    name:'Y${comName}',  
    setup(){
        return ()=>{
            return <div>${comName}</div> 
        }  
    }
})
`
    fs.mkdir(tempDir,()=>{
        fs.appendFileSync(tempDir+'\\index.ts',componentEntry)
        fs.mkdir(tempDir+'\\src',()=>{
            fs.appendFileSync(tempDir+'\\src\\index.tsx',componentContent)
            if(nameArr.length>1){
               fs.appendFileSync(`${uiPath}\\${nameArr[nameArr.length-2]}\\index.ts`,`\nexport * from './${nameArr[nameArr.length-1]}'`) 
            }
        })
    })
}

module.exports = {
    generateComponent
};