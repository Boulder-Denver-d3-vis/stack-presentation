## Inner Binding 

***

```javascript
var rects = groups.selectAll("rect") // Creating a new sub-selection inside groups
  .data(function(d) { return d; })   // Our data is the value of the data bound to each group.
  .enter()
  .append("rect")
  .attr("x",      function(d, i) { return xScale(i);   })
  .attr("y",      function(d)    { return yScale(d.y0);})
  .attr("height", function(d)    { return yScale(d.y); })
  .attr("width", xScale.rangeBand());
```

