'use strict'

class Node {
  constructor( data, priority, link ) {
    this.data = data
    this.priority = priority
    this.link = link
  }
}

export default class PriorityQueue {
  constructor() {
    this.frontElement = null
    this.backElement = null
    this.size = 0
  }

  enqueue( element, priority ) {
    this.size++
    if( this.frontElement === null ) {
      this.frontElement = this.backElement = new Node( element, priority, null )
    } else if ( this.frontElement.priority < priority ) {
      this.frontElement = new Node( element, priority, this.frontElement )
    } else if ( this.backElement.priority > priority ) {
      this.backElement.link = new Node( element, priority, null )
      this.backElement = this.backElement.link
    } else {
      const result = this.frontElement
      while ( result.link !== null && result.link.priority > priority ) {
        result = result.link
      }
      result.link = new Node( element, priority, result.link )
    }
  }

  dequeue() {
    if( this.frontElement !== null ) {
      let result = this.frontElement.data
      this.frontElement = this.frontElement.link
      this.size--
      return result
    }
    return null
  }

  front() {
    return this.frontElement !== null ? this.frontElement.data : null
  }

  back() {
    return this.backElement !== null ? this.backElement.data : null
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}
