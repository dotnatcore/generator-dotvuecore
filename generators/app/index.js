'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    console.log('prompting');
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('generator-dotvuecore') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'solutionName',
      message: 'Your Solution name?',
      default: this.appname
    }, {
      type: 'input',
      name: 'webProjectName',
      message: 'Your Web Project name?',
      default: this.appname + '.Web'
    }
    ];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log('writing');
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {solutionName: this.props.solutionName, webProjectName: this.props.webProjectName});
    this.fs.copyTpl(this.templatePath('DotVueCore.sln'), this.destinationPath(this.props.solutionName + '.sln'), {solutionName: this.props.solutionName, webProjectName: this.props.webProjectName});
    this.fs.copyTpl(this.templatePath('global.json'), this.destinationPath('global.json'));
    this.fs.copyTpl(this.templatePath('.gitattributes'), this.destinationPath('.gitattributes'));
    this.fs.copyTpl(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copyTpl(this.templatePath('app.json'), this.destinationPath('app.json'));


    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/DotVueCore.Web.xproj'), this.destinationPath('src/' + this.props.webProjectName + '/' + this.props.webProjectName + '.xproj'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/DotVueCore.Web.xproj.user'), this.destinationPath('src/' + this.props.webProjectName + '/' + this.props.webProjectName + '.xproj.user'));

    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/.babelrc'), this.destinationPath('src/' + this.props.webProjectName + '/.babelrc'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/.eslintignore'), this.destinationPath('src/' + this.props.webProjectName + '/.eslintignore'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/.eslintrc.js'), this.destinationPath('src/' + this.props.webProjectName + '/.eslintrc.js'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/appsettings.json'), this.destinationPath('src/' + this.props.webProjectName + '/appsettings.json'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/package.json'), this.destinationPath('src/' + this.props.webProjectName + '/package.json'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/Program.cs'), this.destinationPath('src/' + this.props.webProjectName + '/Program.cs'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/project.json'), this.destinationPath('src/' + this.props.webProjectName + '/project.json'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/README.md'), this.destinationPath('src/' + this.props.webProjectName + '/README.md'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/Startup.cs'), this.destinationPath('src/' + this.props.webProjectName + '/Startup.cs'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/web.config'), this.destinationPath('src/' + this.props.webProjectName + '/web.config'));
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/webpack.config.js'), this.destinationPath('src/' + this.props.webProjectName + '/webpack.config.js'));
  
    this.fs.copyTpl(this.templatePath('src/DotVueCore.Web/build'), this.destinationPath('src/' + this.props.webProjectName + '/build'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/ClientApp'), this.destinationPath('src/' + this.props.webProjectName + '/ClientApp'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/config'), this.destinationPath('src/' + this.props.webProjectName + '/config'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/Controllers'), this.destinationPath('src/' + this.props.webProjectName + '/Controllers'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/Extensions'), this.destinationPath('src/' + this.props.webProjectName + '/Extensions'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/Middlewares'), this.destinationPath('src/' + this.props.webProjectName + '/Middlewares'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/Models'), this.destinationPath('src/' + this.props.webProjectName + '/Models'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/templates'), this.destinationPath('src/' + this.props.webProjectName + '/templates'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/Views'), this.destinationPath('src/' + this.props.webProjectName + '/Views'));
    this.fs.copy(this.templatePath('src/DotVueCore.Web/wwwroot'), this.destinationPath('src/' + this.props.webProjectName + '/wwwroot'));
  }

  install() {
    console.log('install');
    // this.installDependencies();
  }
};
