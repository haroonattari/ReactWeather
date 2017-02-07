function addNumbers(a, b){
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
    } else {
      reject ('a & b should be number');
    }
  });
}

addNumbers(5,10).then(function(number){
  console.log('sum of these two numbers is '+number);
}).catch(function(error){
  console.log('ERROR: '+error);
});
