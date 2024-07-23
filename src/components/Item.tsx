import React from 'react';
import { View, Text } from 'react-native';

interface ItemProps {
    title: string;
    description: string;
    time?:number;
    icon?:string;
    completion?:number;
}

const Item: React.FC<ItemProps> = ({ title, description, time, icon, completion  }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
            {time ? <Text>{time}</Text> : null}
            {icon ? <Text>{icon}</Text> : null}
            <Text>{completion}</Text>
        </View>
    );
};

export default Item;