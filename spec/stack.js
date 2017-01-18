import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.add('foo'))
        .to.alter(() => myStack.size(), { from: 0, to: 1 })
    })
  })


  context('remove()', () => {
    it('removes an element from the top of the stack.', () => {
      const myStack = new Stack()
      myStack.add('foo')
      expect(() => myStack.remove())
        .to.alter(() => myStack.size(), { from: 1, to: 0 })
    })
  })

  context('peek()', () => {
    it('shows the top element of the stack.', () => {
      const myStack = new Stack()
      // myStack.add('foo')
      // myStack.add('dude')
      // myStack.add('adam')
      console.log(myStack)
      console.log('this is cool ', myStack.peek())
      expect(myStack.peek()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('checks if the stack is empty or not.', () => {
      const myStack = new Stack()
      myStack.add('foo')
      myStack.add('dude')
      myStack.add('adam')
      expect(myStack.isEmpty()).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.add('foo')
      myStack.add('dude')
      myStack.add('adam')
      expect(myStack.size()).to.equal(3)
    })
  })
})
