'use strict'

export default class Set{
  constructor(){
    this.arr = [];
  }

  add(element){
    //must push
   this.arr[this.arr.length] = element
   //then return
   return this.arr
  }

  isEmpty() {
    return this.arr.length <= 0
  }

  contains(element){
    return this.arr.indexOf(element) !== -1 ? true: false
  }

  remove(element){
    if(this.arr.indexOf(element) !== -1){
      this.arr.splice([this.arr.indexOf(element)],1);
        return this.arr
    } else{
        return null;
    }
  }

  forEveryElement(){
    this.arr.forEach(function(element){
      console.log(element);
    })
  }

  size(){
    return this.arr.length
  }

  union(otherSet){
    let union = []
    let combined = this.arr.concat(otherSet);
    combined.forEach(function(element){
      if(union.indexOf(element) === -1)
      union.push(element);
      })
    return union;
  }

  intersect(otherSet){
    let intersect = [];
    this.arr.forEach(function(element){
      if(otherSet.indexOf(element) >= 0)
      intersect.push(element)
    })
    return intersect
  }

  difference(otherSet){
    let difference = [];
    otherSet.forEach(function(element){
      if(this.arr.indexOf(element) === -1)
      difference.push(element)
    }, this) //must pass this as second parameter or it will clash with built in this scope and that local scope will win
    return difference
  }

  subSet(otherSet){
    let test = [];
    otherSet.forEach(function(element){
      if(this.arr.indexOf(element) >= 0)
      test.push(element)
    }, this)
    return test.length === otherSet.length
  }

  clone(){
    let test = this.arr.slice()
    return test
}
