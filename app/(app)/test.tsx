import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from '../../src/components/ProgressCircle';
const Test = () => {
    return (
        <View>
            <Text>Test Page</Text>
            <ProgressCircle completed={5} total={7} />
        </View>
    );
};

export default Test;