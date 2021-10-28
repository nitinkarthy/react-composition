# react-composition

This is a repo to demonstrate the use of _composition_ when designing React components.
There are 3 approaches presented
| Approach |Advantages |Disadvantages |
|--|--|--|
| Specialized | Easiest way to design while learning React | Prop drilling through components that don't care about props|
| Composed | Avoids prop drilling, improved readability - the state variable definition is closer to the usage of it |🙅🏽‍♂️|
| Lifted | Reduced number of props to be drilled down |Not as readable as composed approach|

This repo is to supplement the [blog article](https://nitin-karthy.medium.com/using-composition-to-reduce-prop-drilling-in-react-375dafbb681d) on the same.
