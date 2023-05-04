/*
 * @Author: zhoulf
 * @FilePath: /cli-app/src/index.ts
 * @Date: 2023-05-04 11:17:47
 * @LastEditors: zhoulf
 * @LastEditTime: 2023-05-04 15:01:11
 * @Description: 
 */
import inquirer from 'inquirer';
import consola from 'consola';
import { ensureDir } from 'fs-extra';
import { PC } from './pc';
import { stderr } from "chalk";

const PROMPTS = [
    {
        type: 'input',
        name: 'name',
        message: '请输入项目名称',
    },
    {
        type: 'list',
        name: 'platform',
        message: '平台类型',
        choices: ['pc']
    }
];

export default async function run() {

    const exec = require('child_process').exec
    const cmdStr = 'npm view cli-app version'
    consola.log('正在检测版本更新...');
    exec(cmdStr, (err: any, stdout: string, stderr: string) => {
        if (err) {
            consola.error(err)
        } else {
            const version = require('../package.json').version
            console.log('版本比较', version.trim(), stdout.trim());
            doInquire()
            // if (version.trim() === stdout.trim()) {
            //     consola.log('您本地装的已是最新版本');
            //     doInquire()
            // } else {
            //     consola.error('检测到已有最新版本的cli-app，请更新包后再重试')
            // }
        }
    })
}

async function doInquire() {
    const { name, platform } = await inquirer.prompt(PROMPTS);

    try {
        await ensureDir(name);

        let generator = null
        switch (platform) {
            case 'pc': {
                // pc的模版生成
                consola.log('选择了pc')
                generator = new PC(name)
                break
            }

        }
        generator && generator.run();
    } catch (e) {
        consola.error(e);
    }
}

run();
