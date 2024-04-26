import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

type ThreeColumnLayoutProps = {
  type: 'three-column';
  isVisible: boolean;
};

type RenderView = (props: ThreeColumnLayoutProps) => React.ReactNode;

type Props = {
  renderLeftView: RenderView;
  renderMiddleView: RenderView;
  renderRightView: RenderView;
  leftWidth?: number;
  middleWidth?: number;
  defaultLeftVisible?: boolean;
  defaultMiddleVisible?: boolean;
};

const ThreeColumnLayout: React.FC<Props> = ({
  renderLeftView,
  renderMiddleView,
  renderRightView,
  leftWidth = 240,
  middleWidth = 320,
  defaultLeftVisible = true,
  defaultMiddleVisible = true,
}) => {
  const [leftVisible, setLeftVisible] = useState(defaultLeftVisible);
  const [middleVisible, setMiddleVisible] = useState(defaultMiddleVisible);

  const leftValue = useRef(
    new Animated.Value(leftVisible ? leftWidth : 0)
  ).current;
  const middleValue = useRef(
    new Animated.Value(middleVisible ? middleWidth : 0)
  ).current;

  const animatedLeftViewStyle = {
    width: leftValue,
  };

  const animatedMiddleViewStyle = {
    width: middleValue,
  };

  const toggleLeftView = useCallback(() => {
    const toValue = leftVisible ? 0 : leftWidth;
    setLeftVisible(!leftVisible);
    Animated.spring(leftValue, {
      useNativeDriver: false,
      toValue,
      bounciness: 0,
    }).start();
  }, [leftValue, leftVisible, leftWidth]);

  const toggleMiddleView = useCallback(() => {
    const toValue = middleVisible ? 0 : middleWidth;
    setMiddleVisible(!middleVisible);
    Animated.spring(middleValue, {
      useNativeDriver: false,
      bounciness: 0,
      toValue,
    }).start();
  }, [middleValue, middleVisible, middleWidth]);

  useEffect(() => {
    if (leftVisible !== defaultLeftVisible) {
      toggleLeftView();
    }
  }, [defaultLeftVisible, leftVisible, toggleLeftView]);

  useEffect(() => {
    if (middleVisible !== defaultMiddleVisible) {
      toggleMiddleView();
    }
  }, [defaultMiddleVisible, middleVisible, toggleMiddleView]);

  const viewProps: ThreeColumnLayoutProps = {
    type: 'three-column',
    isVisible: leftVisible && middleVisible,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.columnContainer, animatedLeftViewStyle]}>
        <View style={styles.flex}>{renderLeftView(viewProps)}</View>
      </Animated.View>
      <Animated.View style={[styles.columnContainer, animatedMiddleViewStyle]}>
        <View style={styles.flex}>{renderMiddleView(viewProps)}</View>
      </Animated.View>
      <View style={styles.columnContainer}>{renderRightView(viewProps)}</View>
    </View>
  );
};

export default ThreeColumnLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  columnContainer: {
    flexShrink: 0,
  },
});
