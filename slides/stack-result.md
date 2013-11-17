## Result of Stack

***

Our data has been annotated with `y0` values representing the baseline for each part of the stack.

```javascript
data => 
[ // Apples. Bottom of the stack, so all baselines are 0!
  [{y: 5, y0: 0}, {y: 4, y0: 0} ...  ],
  // Oranges. Second on the stack, so all 
  // baselines are the corresponding apple value.
  [{y: 10, y0: 5}, {y: 12, y0: 4} ...  ],
  // Pears. Top of the stack, so all baselines 
  // are the sum of apple and orange values.
  [{y: 22, y0: 15}, {y: 28, y0: 16} ...  ],
]
```

If the first apples value is 5, the first oranges baseline should be 5.
