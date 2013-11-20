## Organizing Data

***

To provide the data that D3 expects: 

If I have `apples`, `bananas`, and `grapes` types, and a value for each type for 5 time periods:

```javascript
var dataset = [
  [ // apples
    { y: 5 }, { y: 4 }, { y: 2 }, { y: 7 }, { y: 23 }
  ],
  [ // bananas
    { y: 10 }, { y: 12 }, { y: 19 }, { y: 23 }, { y: 17 }
  ],
  [ // grapes
    { y: 22 }, { y: 28 }, { y: 32 }, { y: 35 }, { y: 43 }
  ]
];
```

Take note, 3 series of 5 items each, not the other way around.
