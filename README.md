# rn-three-column-layout

@socialler/rn-three-column-layout is a specialized React Native library that simplifies the creation of three-column layouts for mobile applications. This library enables easy division of screen space into three equal parts, providing an intuitive and efficient user experience. Ideal for developers looking to optimize content distribution in their mobile applications.

## Installation

```sh
npm install rn-three-column-layout
```

## Usage

```js

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeColumnLayout from 'rn-three-column-layout';

export default function App() {
  <ThreeColumnLayout
    renderLeftView={() => <View style={[styles.box, styles.leftColumn]} />}
    renderMiddleView={() => <View style={[styles.box, styles.middleColumn]} />}
    renderRightView={() => <View style={[styles.box, styles.rightColumn]} />}
  />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
  },
  leftColumn: { backgroundColor: 'red' },
  middleColumn: { backgroundColor: 'yellow' },
  rightColumn: { backgroundColor: 'blue' },
});



```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Special thanks to craftzdog, this repo is a clone of their repo, but we improved some things.
