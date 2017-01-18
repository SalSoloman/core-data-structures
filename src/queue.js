'use strict'

export default class Queue {
  constructor(){
    this.queue = []
    this.index = 0;
  }

  enqueue(element){
    return this.queue.push(element)
  }

  dequeue(){
    return this.queue.length > 0 ? this.queue.shift(this.queue[this.index]): null
  }

  front(){
    return this.queue.length > 0 ? this.queue[this.index]: null
  }

  back(){
    return
  }

  isEmpty(){
    return
  }

  length(){
    return this.queue.length
  }
}
