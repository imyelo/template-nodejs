import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.resolve(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    name: 'foo',
  })
  t.snapshot(stream.fileList, 'generated files')

  stream.fileList.forEach(file => {
    t.snapshot(stream.fileContents(file), `content of ${file}`)
  })
})
