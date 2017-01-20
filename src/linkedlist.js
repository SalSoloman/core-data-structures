'use strict'
export default class Node(){
  constructor(value){
    this.value = value
    this.pointer = null;
  }
}



export default class LinkedList(){
  //creates linked list
  constructor(){
    this.head = null;
    this.tail = null
  }


  //how do we insert new created node into LinkedList
    //how do we set head node
    //how do we set tail node

  addNode(value){
    node = new Node()
    if(this.head  === null){ //checks to see if ll is empty or not
      this.head = node //sets head
      this.tail = node //sets tail
    } else {
      let currentNode = this.head
      while(currentNode !== this.tail){ 
        this.tail.pointer = currentNode
        this.tail = currentNode
      }
    }
  }

  getHeadNode(){
    return this.head
  }

  getTailNode(){
    return this.tail
  }
