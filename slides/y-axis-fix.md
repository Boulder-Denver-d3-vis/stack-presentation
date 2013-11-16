## Fixing the Y Axis

***

The original example uses SVG's default y axis, from the top.

``` javascript
var yScale = d3.scale.linear()
	.domain([0, max])
	.range([0, h]);
```

* The domain is the __input__ to a scale
* The range is the __output__ of a scale

***

The output of this scale starts at 0 (the top of the SVG).


