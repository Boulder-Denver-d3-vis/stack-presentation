## Inner Binding 

***

```javascript
var rects = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x",      function(d, i) { return xScale(i);   })
  .attr("y",      function(d)    { return yScale(d.y0);})
  .attr("height", function(d)    { return yScale(d.y); })
  .attr("width", xScale.rangeBand());
```

