# @socialler/rn-three-column-layout

@socialler/rn-three-column-layout is a specialized React Native library that simplifies the creation of three-column layouts for mobile applications. This library enables easy division of screen space into three equal parts, providing an intuitive and efficient user experience. Ideal for developers looking to optimize content distribution in their mobile applications.

## Installation

```sh
npm install @socialler/rn-three-column-layout
```

## Usage

```js
import React from 'react';
import { ThreeColumnLayout, View } from '@socialler/rn-three-column-layout';

const MyComponent = () => {
  return (
    <ThreeColumnLayout
      leftWidth={200} // Adjust width as needed
      middleWidth={300} // Adjust width as needed
    >
      <View style={{ backgroundColor: 'red' }}>Left Column</View>
      <View style={{ backgroundColor: 'yellow' }}>Middle Column</View>
      <View style={{ backgroundColor: 'blue' }}>Right Column</View>
    </ThreeColumnLayout>
  );
};

export default MyComponent;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Special thanks to craftzdog, this repo is a clone of their repo, but we improved some things.
