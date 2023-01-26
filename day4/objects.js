// const sherlock = {
//   surname: 'Holmes',
//   city: 'london',
// };

// let john = sherlock;
// john = { city: 'rome' };

// console.log('john', john);
// console.log('sherlock', sherlock);

const double = (array) => {
  for (let i = 0; array.length; i++) {
    array[i] += 2;
  }
};

const aData = [1, 2, 3];
double(aData);
console.log('aData', aData);
