import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pqueue'

chai.use(chaiChange)

describe('pQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()

      expect(() => pQueue.enqueue('foo', 50))
        .to.alter(() => pQueue.length(), { from: 0, to: 1 })
      expect(() => pQueue.enqueue('yas', 30))
        .to.alter(() => pQueue.length(), { from: 1, to: 2 })
      expect(() => pQueue.enqueue('tee', 60))
        .to.alter(() => pQueue.length(), { from: 2, to: 3 })
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      expect(() => pQueue.enqueue('foo', 50))
        .to.alter(() => pQueue.length(), { from: 0, to: 1 })
      expect(() => pQueue.enqueue('yas', 30))
        .to.alter(() => pQueue.length(), { from: 1, to: 2 })
      expect(() => pQueue.dequeue())
        .to.alter(() => pQueue.length(), { from: 2, to: 1 })
      console.log('pQueue', pQueue)
      expect( pQueue.front()).to.equal('yas', 30)
    })
  })

    it( 'returns null if the queue is empty', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.dequeue() ).to.be.null
    })

  context('front()', () => {
    it('returns the front element in queue', () => {
      const pQueue = new PriorityQueue()
      expect(() => pQueue.enqueue('foo', 50))
        .to.alter(() => pQueue.length(), { from: 0, to: 1 })
      expect(() => pQueue.enqueue('yas', 30))
        .to.alter(() => pQueue.length(), { from: 1, to: 2 })
      expect(() => pQueue.enqueue('tee', 60))
        .to.alter(() => pQueue.length(), { from: 2, to: 3 })
      expect( pQueue.front() ).to.equal('tee', 60)
    })
  })

    it( 'returns null if the queue is empty', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.front() ).to.be.null
    })

  context('back()', () => {
    it('returns the back element in queue', () => {
      const pQueue = new PriorityQueue()
      expect(() => pQueue.enqueue('foo', 50))
        .to.alter(() => pQueue.length(), { from: 0, to: 1 })
      expect(() => pQueue.enqueue('tee', 60))
        .to.alter(() => pQueue.length(), { from: 1, to: 2 })
      expect( pQueue.back() ).to.equal('foo', 50)
    })

    it( 'returns null if the queue is empty', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.back() ).to.be.null
    })
  })

  context( 'isEmpty()', () => {
    it( 'returns true if the queue is not empty', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.isEmpty() ).to.be.true
    })

    it( 'returns false if the queue is empty', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('tee', 60)
      expect( pQueue.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it( 'returns the number of elements in the queue', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue( 'yaseen', 20 )
      pQueue.enqueue( 'izzy', 30 )
      pQueue.enqueue( 'nadir', 40 )
      expect( pQueue.length() ).to.eql(3)
    })
  })

})
