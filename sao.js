module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:',
    },
  },
  move: {
    'gitignore': '.gitignore',
  },
  gitInit: true,
  installDependencies: true,
  post({ log, folderName, chalk }) {
    log.success(`Successfully generated into ${chalk.cyan(folderName)}`)
  },
}
