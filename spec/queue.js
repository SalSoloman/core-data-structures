import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const myQueue = new Queue()
      // console.log(myQueue)
      expect(myQueue.enqueue('foo')).to.be.eql('foo')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 3, to: 2 })
    })
  })

  context('dequeue()', () => {
    it('testing to see if the first element in the queue is removed and returned', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      console.log(Queue);
      console.log(myQueue.dequeue())
      console.log(Queue);
      expect(myQueue.dequeue()).to.eql('foo')
    })
  })
})
