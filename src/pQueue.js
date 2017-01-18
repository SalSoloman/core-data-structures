'use strict'

export default class PriorityQueue{
  constructor(){
    this.queue = []
  }

  enqueue(name, priority){
    this.queue.push({name, priority})
    console.log(this.queue)
    this.queue.sort(function(a,b){
      //a through b not a - b thank you trevor
      //parseFloat turns a string into an interger
      return parseFloat(a.priority) - parseFloat(b.priority);
    });
  }


  front(){
    return
  }

  back(){
    return
  }

  dequeue(){
    return
  }

  isEmpty(){
    return
  }

  length(){
    return
  }
}
