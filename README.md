# Context API

> Code sample from my lightning talk at ReactJS Dublin ⚡

## Talk Instructions

> Because live coding is risky and should be planned in full beforehand
> to avoid any avoidable mistakes or trouble 😎

Start in `App.js`

1.  Create `Context.js` **(cmd+alt+n)**
2.  `import React, { Component } from 'react' **(imrc)**
3.  `{ Component, createContext }`
4.  `const Context = createContext()` **(ctx)**
5.  type `export` then **(rcjc)**, then `Provider`
6.  `<Context.Provider>{this.props.children}</Context.Provider>`
7.  `export const Consumer = Context.Consumer`

Go to `index.js`

1.  `import { Provider } from './components/Context'`
2.  `<Provider><App /></Provider>`

....

UPDATING:

**sst** = `this.setState({})`

Go back to `App.js`
