## Fixing Attributes

***

Before:

```javascript
var rects = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d, i)   { return xScale(i); })
  .attr("y", function(d)      { return yScale(d.y0); })
  .attr("height", function(d) { return yScale(d.y); })
  .attr("width", xScale.rangeBand());
```

After:

```javascript
var rects = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d, i)   { return xScale(i);                    })
  .attr("y", function(d)      { return invertedYScale(d.y0 + d.y);   })
  .attr("height", function(d) { return height - invertedYScale(d.y); })
  .attr("width", xScale.rangeBand());
```

[And we're done!](http://boulder-denver-d3-vis.github.io/stack-example)
