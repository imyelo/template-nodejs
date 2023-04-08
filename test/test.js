const path = require('path')
const test = require('ava')
const sao = require('sao')

const generator = path.resolve(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock(
    { generator },
    {
      name: 'foo',
    }
  )
  t.snapshot(stream.fileList, 'generated files')

  for (const file of stream.fileList) {
    const content = await stream.readFile(file)
    t.snapshot(content, `content of ${file}`)
  }
})
