#!/usr/bin/env node

const program = require('commander');
const {generateComponent} = require('./gen/gen-component');
const {generateCssFile} = require('./gen/gen-cssfile');

program
    .command('generate <componentName> [fileType]')
    .alias('gen')
    .description('generate a new component')
    .action((componentName)=>{
        generateComponent(componentName)
    })


program
    .version('0.0.1','-v,--version')
    .parse(process.argv)
