import chalk from 'chalk';
import consola from 'consola';
import { join } from 'path';
import { CWD, GENERATOR_DIR } from './constant';
import Yeoman from 'yeoman-environment';
import Generator from 'yeoman-generator';

const TEMPLATES = join(GENERATOR_DIR, 'templates', 'pc');
const PROMPTS: Generator.Questions<any> = [
  // {
  //     type: 'list',
  //     name: 'AuthTypes',
  //     message: '请选择三中心对接方式',
  //     choices: ['TC', 'TC1']
  // }
];
export class PC extends Generator {
  inputs = {
    name: '',
    AuthTypes: '',
    // preprocessor: ''
  };

  constructor(name: string) {
    super([], {
      env: Yeoman.createEnv([], {
        cwd: join(CWD, name)
      }),
      resolved: GENERATOR_DIR
    });
    this.inputs.name = name;
  }

  async prompting() {
    return this.prompt(PROMPTS).then(props => {
      this.inputs.AuthTypes = props.AuthTypes;
    });
  }

  writing() {
    consola.info(`Creating project in ${join(CWD, this.inputs.name)}\n`);

    const copy = (from: string, to?: string) => {
      this.fs.copy(join(TEMPLATES, from), this.destinationPath(to || from));
    };

    const copyTpl = (from: string, to?: string) => {
      this.fs.copyTpl(
        join(TEMPLATES, from),
        this.destinationPath(to || from),
        this.inputs
      );
    };

    copyTpl('package.json.tpl', 'package.json');
    copy('build/**/*', 'build');
    // copy('.vscode/**/*', '.vscode')
    copy('plop-templates/**/*', 'plop-templates');
    copy('public/**/*', 'public');
    copyTpl('src/**/*', 'src');
    // switch (this.inputs.AuthTypes) {
    //     case 'ONE': copy('permission-one.js')
    //         break;
    //     case 'TC': copy('permission-tc.js')
    //         break;
    //     case 'TC1': copy('permission-tc1.js')
    //         break;
    // }
    // copy('.easymockrc');
    copy('.eslintignore');
    copy('.eslintrc.js');
    copy('.env.development');
    copy('.env.production');
    copy('.env.test');
    copy('.gitignore');
    copy('.prettierrc');
    copy('babel.config.js');
    copy('plopfile.js');
    copy('README.md');
    copy('README-DEMO.md');
    copy('vue.config.js');
    copy('webstorm.config.js');
  }

  install() {
    console.log();
    consola.info('Install dependencies...\n');

    process.chdir(this.inputs.name);

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true
    });
  }

  end() {
    const { name } = this.inputs;

    console.log();
    consola.success(`Successfully created ${chalk.yellow(name)}.`);
    consola.success(
      `Run ${chalk.yellow(`cd ${name} && yarn dev`)} to start development!`
    );
  }
}
