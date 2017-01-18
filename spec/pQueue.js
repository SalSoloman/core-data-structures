import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      expect(pQueue.enqueue('foo',70)).to.eql([{name: 'cool', priority: 20}, {name: 'foo', priority: 70},{name: 'dude', priority: 90}])
    })
  })
})

//[{data: 'pizza', priority: 100},{data: 'burger', priority: 90},{data: 'taco', priority: 80}]
