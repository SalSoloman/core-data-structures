'use strict'

export default class Set{
  constructor(){
    this.arr1 = [];
  }

  add(element){
    //must push
   this.arr1[this.arr1.length] = element
   //then return
   return this.arr1
  }

  isEmpty() {
    return this.arr1.length <= 0
  }

  contains(element){
    return this.arr1.indexOf(element) !== -1 ? true: false
  }

  remove(element){
    return this.arr1.indexOf(element) !== -1 ? this.arr1[this.arr1.indexOf(element)] = "" : null
  }
}
