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
    it('adds an element to the back of the queue.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('yass'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('hello'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect( myQueue.front() ).to.equal('foo')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('yas'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('tee'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 3, to: 2 })
      expect( myQueue.front() ).to.equal('yas')
    })
  })

    it( 'returns null if the queue is empty', () => {
      const myQueue = new Queue()
      expect( myQueue.dequeue() ).to.be.null
    })

  context('front()', () => {
    it('returns the front element in queue', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('yas'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('tee'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 3, to: 2 })
      expect( myQueue.front() ).to.equal('yas')
    })
  })

    it( 'returns null if the queue is empty', () => {
      const myQueue = new Queue()
      expect( myQueue.front() ).to.be.null
    })

  context('back()', () => {
    it('returns the back element in queue', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('tee'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
        console.log('myQueue', myQueue)
      expect( myQueue.back() ).to.equal('tee')
    })

    it( 'returns null if the queue is empty', () => {
      const myQueue = new Queue()
      expect( myQueue.back() ).to.be.null
    })
  })

  context( 'isEmpty()', () => {
    it( 'returns true if the queue is not empty', () => {
      const myQueue = new Queue()
      expect( myQueue.isEmpty() ).to.be.true
    })

    it( 'returns false if the queue is empty', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'tee' )
      expect( myQueue.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it.only( 'returns the number of elements in the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'yaseen' )
      myQueue.enqueue( 'izzy' )
      myQueue.enqueue( 'nadir' )
      expect( myQueue.length() ).to.eql(3)
    })
  })

})
