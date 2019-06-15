module.exports = {
  prompts () {
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
        'gitignore': '.gitignore',
      },
    },
  ],
  async completed () {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
