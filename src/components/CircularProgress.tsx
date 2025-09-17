import React from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

type CustomCircularProgressProps = {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  textStyle?: TextStyle;
  progressBarStyle?: object;
  backgroundColor?: string;
  progressColor?: string;
  innerText?: string;
  valueSuffix?: string;
};

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = ({
  value = 0,
  maxValue = 100,
  size = 120,
  strokeWidth = 10,
  duration = 1000,
  textStyle = {},
  progressBarStyle = {},
  backgroundColor = '#e0e0e0',
  progressColor = '#3b5998',
  innerText = '',
  valueSuffix = '',
}) => {
  return (
    <View style={[styles.container, progressBarStyle]}>
      <CircularProgress
        value={value}
        radius={size / 2}
        duration={duration}
        progressValueColor={progressColor}
        maxValue={maxValue}
        activeStrokeWidth={strokeWidth}
        inActiveStrokeWidth={strokeWidth}
        inActiveStrokeColor={backgroundColor}
        activeStrokeColor={progressColor}
        title={innerText}
        titleColor={progressColor}
        valueSuffix={valueSuffix}
        valueSuffixStyle={textStyle as TextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomCircularProgress;
