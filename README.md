# Sorting-Visualizer
this website is used to visualized four sorting algorithms </br>
(Bubble,selection,Quick,insertion) </br>
I created this visualizer by using p5js Libarary</br>
<b> Website link</b> :https://michael-maurice.github.io/</br>
<b> vido link</b> :https://www.youtube.com/watch?v=zh9CXYtMcXU</br>

<h3>Bubble :- </h3>
<code>
async function BubleSort() {</br>
  if (i < values.length) {</br>
l=i+1;</br>
    await sleep(50);</br>
for (let j = 0; j < values.length- 1; j++) {</br>
await sleep(150);</br>
       a = values[j];</br>
       b = values[j + 1];</br>
      if (a > b) {</br>
         swap(values, j, j + 1);</br>
      }</br>
    }</br>
  } else {</br>
    console.log("finished");</br>
    noLoop(); }</br>
  i++;}</br>
  async function swap(arr, a, b) {</br>
  let temp = arr[a];</br>
  arr[a] = arr[b];</br>
  arr[b] = temp;</br>
}
</code>
<h3>selection :- </h3>

<code>
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
  
    values[i]=values[min];

    values[min]=temp;
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

}

</code>
<h3>Quick :- </h3>
<code>
  async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {

    if (arr[i] < pivotValue) {

      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {

    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}
  </code>

<h3>insertian :- </h3>
<code>
 
async function insertion_sort() {
  if (i < values.length) {

       a=values[i];

    if (values[i] < values[0]) {

      values.unshift(values.splice(i,1)[0]);

    }
    else {
        b=values[i-1];
     
      if (values[i]< values[i-1]) {

        //find where number should go
        for (var j = 1; j < i; j++) {
          if (values[i]>= values[j-1] && values[i] < values[j]) {

            
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
</code>
