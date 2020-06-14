

let values = [];
let w=10;
let i = 0;
let j = 0;
  let a,b;
  let l=1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }

}

function draw() {
  background(0);
BubleSort();


  for (let i = 0; i < values.length; i++) {

      if (values[i] ==a) {
        fill('#E0777D');
      } else if (values[i] == b) {
        fill('#D6FFB7');
      } else {
        fill(0,0,255);
      }
      

        rect(i * w, 0, w, values[i]);
  }
  
}
 async function BubleSort() {
  if (i < values.length) {
l=i+1;
    await sleep(50);
for (let j = 0; j < values.length- 1; j++) {


await sleep(150);
       a = values[j];
       b = values[j + 1];

      if (a > b) {


         swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();

  }
  i++;

}
  async function swap(arr, a, b) {
//await sleep(1000);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
