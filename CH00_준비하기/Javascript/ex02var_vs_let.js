// 화살표 함수
// map()과 () => {}

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// materials.length만큼 반복
// idx는 row를 카운트해줌.


let newArr = materials.map(e => {
return e.length*2;
});
console.log(newArr);
// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '음악',
  '인도인',
  '필리핀',
  '다시합시다',
  '피카추',
  '안경안보여',
  '역삼역'
  ];
const contents = palindromes.filter((str)=>{
  if(str === str.split('').reverse('').join('')){
    return str;
  }
});

console.log(contents);

class Rectangle{
  //생성자
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
  //getter
  get area(){
    return this.calcArea();
  }
  //method
  calcArea(){
    return this.height = this.width;
  }
}

const p = new Rectangle(3,7);
const square = new Rectangle(3,7);
square.area();