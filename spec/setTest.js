import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const set = new Set()
      set.add(90)
      console.log(set);
      expect(set.add(70)).to.deep.equal([90, 70])
    })
  })

  context('isEmpty()', () => {
    it('returns true if the set is empty or false if not.', () => {
      const set = new Set()
      set.add(90)
      expect(set.isEmpty()).to.equal(false)
    })
    it('returns true if the set is empty or false if not.', () => {
      const set = new Set()
      expect(set.isEmpty()).to.equal(true)
    })
  })

  context('contains()', () => {
    it('returns true the set contains the element or false if not.', () => {
      const set = new Set()
      set.add(90)
      expect(set.contains(90)).to.equal(true)
    })
    it('returns true the set contains the element or false if not.', () => {
      const set = new Set()
      set.add(90)
      expect(set.contains(60)).to.equal(false)
    })
  })
})
