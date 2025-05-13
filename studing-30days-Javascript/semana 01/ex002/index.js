lista = [5, 2, 8, 1, 10]

function findSecondBiggest(array) {
  const biggest = Math.max(...array)
  const secondaryList = []
  let secondBiggest;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < biggest){
      secondaryList.push(array[i])
    } 
  }
  secondBiggest = Math.max(...secondaryList)
  console.log('O segundo maior valor é : ', secondBiggest)
}

findSecondBiggest(lista)
