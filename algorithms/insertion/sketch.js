

let values = [];

let i = 0;
let j = 0;
let w=10;
let a,b;
let l=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(10);
    values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }

}

function draw() {
  background(0);
insertion_sort();


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


async function insertion_sort() {

  if (i < values.length) {

       a=values[i];

    if (values[i] < values[0]) {

      //move number to the first position

      values.unshift(values.splice(i,1)[0]);

    }
    else {
        b=values[i-1];
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (values[i]< values[i-1]) {

        //find where number should go
        for (var j = 1; j < i; j++) {
          if (values[i]>= values[j-1] && values[i] < values[j]) {

            //move number to the right spot
            values.splice(j,0,values.splice(i,1)[0]);
          }
        }
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;
  l++;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
