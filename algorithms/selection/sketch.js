

let values = [];

let i = 0;
let j = 0;
let w=10;
let a,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  values = new Array(floor(width/w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(0);
Selection_sort();


  for (let i = 0; i < values.length; i++) {
    if (values[i] ==a) {
            fill('#E0777D');
          } else if (values[i]==b ) {
            fill('#D6FFB7');
          } else {
            fill(0,0,255);
          }


            rect(i * w, 0, w, values[i]);
  }
}
async function Selection_sort() {
  if (i < values.length) {
  await sleep(100);
    let min=i;
    let temp=values[i];

a=values[i];

    for (let j = i+1; j < values.length; j++) {

        b=values[j];
      if ( values[j]<values[min]) {

        min=j;

      }
    }
  //
    values[i]=values[min];

    values[min]=temp;
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
