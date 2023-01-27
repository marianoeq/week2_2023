const sherlock = {
  surname: 'Holmes',
  city: 'london',
};

let john = sherlock;
john = { city: 'rome' };

console.log('john', john);
console.log('sherlock', sherlock);

const double = (array) => {
  const newArr = [...array];
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] *= 2;
  }

  return newArr;
};

const aData = [1, 2, 3];
double(aData);
