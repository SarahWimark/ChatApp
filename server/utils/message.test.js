const expect = require('expect')

const { generateMessage } = require('./message')

describe('Generate message', () => {
  it('should generate correct message object', () => {
    let from = 'SW'
    let text = 'Some text'
    let message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({ from, text })
  })
})
