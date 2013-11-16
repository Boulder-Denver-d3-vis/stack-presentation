## The Stack Layout

***

D3's layouts produce a function that modifies or adds properties to your data so that it is convenient to display in a particular way.

***

The `stack` layout calculates a a 'baseline' for each element in a stack, based on the values before it.

If your stack is along the y axis (as ours is), this results in a new `y0` attribute on our data.
