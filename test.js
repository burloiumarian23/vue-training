function foreachFn( cb, array ) {
    for (let i = 0; i < array.length; i++) { 
      cb(array[i])
  }
}

foreachFn( element =>  {  console.log( element ) } , [
  'a', 
  'b',
  'c'
] )

function mapFn( cb, array) {
  let returnArr = [];
  let length = array.length
  for( let i=0; i< length; i++ ){
      let counter = cb(array[i])
      returnArr.push(counter)
  }
  return returnArr
}
let nb = [ 1,2, 3]
let a = mapFn(  n  => n * 2, nb  )
console.log( a )
console.log( nb )