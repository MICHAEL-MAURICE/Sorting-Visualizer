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
```javascript
```
<h3>Quick :- </h3>
```javascript
```

<h3>insertian :- </h3>
```javascript
```
