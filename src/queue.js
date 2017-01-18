'use strict'

export default class Queue {
  constructor(){
    this.queue = []
  }

  enqueue(element){
    return this.queue[this.queue.length] = element
  }

  dequeue(){
    return this.queue.length > 0 ? this.queue.shift(this.queue[0]): null
  }

  front(){
    return this.queue.length > 0 ? this.queue[0]: null
  }

  back(){
    return this.queue.length > 0 ? this.queue[this.queue.length-1]: null
  }

  isEmpty(){
    return this.queue.length <= 0
  }

  length(){
    return this.queue.length
  }
}
