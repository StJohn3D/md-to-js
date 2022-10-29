import { mdToJs } from '@src/mdToJs'

describe('mdToJs', () => {
  it('should be async', async () => {
    const result = await mdToJs(`
---
version: 0
title: "The Title"
---
`)
    expect(result).toEqual({
      metadata: {
        version: 0,
        title: 'The Title',
      }
    })
  })
})