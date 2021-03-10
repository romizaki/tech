let data = 4

function algorithmic(num) {
  let result = []
  let final = []
  for (let i = 1; i <= num; i++) {
    ((i + (i - num)) <= 4) ? result.push(i) : ''
    let temp = []
    let numTemp = num
    if (i <= num) {
      do {
        temp.push(i)
        numTemp -= 1
      } while (numTemp !== 0);
    }
    final.push(temp)
  }
  return final
}

console.log(algorithmic(data));

/*
cari susunan angka num(4)
setelah ketemu cek array ke satu bisa ke angka empat dengan nilai apa saja
loop susunan angka
jika loop[0] <= num(4) maka loop[0] akan loop lagi
loop kedua sampai num(4) habis
*/
