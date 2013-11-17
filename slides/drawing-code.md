## Outer Binding

***

```javascript
var groups = svg.selectAll("g").data(dataset)
    .enter()
    .append("g")
    .attr("transform","translate(" + [margin.left, margin.top] + ")")
    .style("fill", function(d, i) { return colors(i); });
```

