/*1.
 In your own words, explain what a 'prop' is and why props make components reusable. */
// prop is a shortform of property ,A parameter is a general programming term — any input to a function.A prop is React's specific term for data passed into a component from its parent, similar to how you'd pass arguments into a function, but with its own naming convention and rules (e.g., props are read-only — a component can't modify its own props).You pass a prop when using a component.You receive it inside the component's function parameters.props make components reusable because by different  prop we can use a componenet and get updated UI.

/* 2.
List 3 rules about how props behave in React (e.g. read-only, one-directional flow). */
/* 1.props are read-only,a componenet cant modify its own prop
2.it maintains one -directional flow,it maintains the flow parent to child
3.in case of variable props are pass inside JSX and with "" when it is a string
4.in case of dynamic props should be written inside JSX and with {},any non-string value (numbers, booleans, objects, variables, expressions) must be wrapped in curly braces
5.props can be pass as an object,which can be destructured*/

