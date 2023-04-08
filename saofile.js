const { resolve } = require('path')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project?',
        default: this.outFolder,
      },
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
    {
      type: 'move',
      patterns: {
        _husky: '.husky',
        _editorconfig: '.editorconfig',
        _eslintrc: '.eslintrc',
        _gitignore: '.gitignore',
        '_tsconfig.json': 'tsconfig.json',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    await this.fs.chmod(resolve(this.outDir, './.husky/pre-commit'), 0o755)
    this.showProjectTips()
  },
}
