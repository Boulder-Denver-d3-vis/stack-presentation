## Applying Stack

***

First, create our stack function: [(API Docs)](https://github.com/mbostock/d3/wiki/Stack-Layout)

```javascript
var stack = d3.layout.stack();
```

And then apply it to our data:

```javascript
stack(data);
```

The stack function we got back from D3 will add baseline values for our stacks.
