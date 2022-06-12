import { mdToJs } from '@src/mdToJs'

describe('mdToJs', () => {
  it('should be async', async () => {
    const result = await mdToJs('This is a test')
    expect(result).toEqual({})
  })
})