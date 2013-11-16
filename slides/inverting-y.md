## Inverting Y

***

Instead, let's change the __output__ of the y scale to start at the `height` and go to 0:

```javascript
var yScale = d3.scale.linear()
    .domain([0,max])
    .range([height, 0]);
```

But how does this affect our `y` and `height` attributes?

