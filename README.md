# Sorting-Visualizer
this website is used to visualized four sorting algorithms </br>
(Bubble,selection,Quick,insertion) </br>
I created this visualizer by using p5js Libarary</br>
<b> Website link</b> :https://michael-maurice.github.io/</br>
<b> vido link</b> :https://www.youtube.com/watch?v=zh9CXYtMcXU</br>

<h3>Bubble :- </h3>
<code>
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
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
</code>
<h3>selection :- </h3>
```javascript
```
<h3>Quick :- </h3>
```javascript
```

<h3>insertian :- </h3>
```javascript
```
