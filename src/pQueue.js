'use strict'

export default class PriorityQueue{
  constructor(){
    this.queue = []
    //this.index = 0
  }

  enqueue(name, priority){
    this.queue[this.queue.length] = {name, priority}
    var x = this.queue.sort(function(a,b){
      //a through b not a - b thank you trevor
      //parseFloat turns a string into an interger
      return parseFloat(b.priority) - parseFloat(a.priority);
    })
    return x
  }


  front(){
    return this.queue > 0 ? this.queue[0]: null;
    return this.queue[0] !== undefined ? this.queue[0] : null
  }

  back(){
    return this.queue.length > 0 ? this.queue[this.queue.length - 1] : null
  }

  dequeue(){
    return this.queue.length > 0 ? this.queue.shift(this.queue[0]) : null
  }

  isEmpty(){
    return this.queue.length > 0 ? false : true
  }

  length(){
    return this.queue.length
  }
}
