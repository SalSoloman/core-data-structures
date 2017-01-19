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
    });
    return x
  }


  front(){
    return this.queue > 0 ? this.queue[0]: null;
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
