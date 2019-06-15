import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.resolve(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock({ generator }, {
    name: 'foo',
  })
  t.snapshot(stream.fileList, 'generated files')

  await stream.fileList.reduce(async (promise, file) => {
    return promise
      .then(() => stream.readFile(file))
      .then((content) => t.snapshot(content, `content of ${file}`))
  }, Promise.resolve())
})
