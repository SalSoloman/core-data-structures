'use strict'

export default class Stack {
  constructor(){
    this.arr = []
  }

  add(element) {
    return this.arr.push(element)
  }

  remove(){
    return this.arr.pop()
  }

  peek() {
    return this.arr.length > 0 ? this.arr[this.arr.length-1]: null
    // if(this.arr.length > 0){
    //   return this.arr[this.arr.length-1]
    // } else {
    //   return null
    // }
  }

  isEmpty(){
    return this.arr.length > 0
  }

  size(){
    return this.arr.length
  }

}
