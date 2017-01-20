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

  context('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const set = new Set()
      set.add('a')
      set.add('b')
      set.add('c')
      expect(set.remove('a')).deep.equal(['b','c'])
    })
  })

  context('forEveryElement()', () =>{
    it('takes a callback function and passes it each element in sequence.', () => {
      const set = new Set()
      set.add('a')
      set.add('b')
      set.add('c')
      expect(set.forEveryElement(console.log(set))).to.equal(undefined)
      })
    })

    context('size()', () =>{
      it('returns the number of elements in the set.', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        expect(set.size()).to.equal(3)
        })
      })

    context('union()', () =>{
      it('unions the set with another set and returns the resulting set.', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        expect(set.union(['b','d','e'])).to.eql(['a','b','c','d','e'])
        })
      })

    context('intersect()', () =>{
      it('intersects the set with another set and returns the resulting set', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        expect(set.intersect(['b','d','e'])).to.eql(['b'])
        })
      })

    context('difference()', () =>{
      it('returns a set that contains the elements found in the set but not in otherSet.', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        expect(set.difference(['b','d','e'])).to.eql(['d','e'])
        })
      })

    context('subSet()', () =>{
      it('returns true if the set is a subset of otherSet or false if not.', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        set.add('d')
        set.add('e')
        expect(set.subSet(['b','d','e'])).to.eql(true)
        })
      })

    context('clone()', () =>{
      it('returns a cloned set.', () => {
        const set = new Set()
        set.add('a')
        set.add('b')
        set.add('c')
        expect(set.clone()).to.eql(['a','b','c'])
        })
      })
    })
