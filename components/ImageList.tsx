import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { CardImage } from './CardImage';

export const ImageList = ({ photos }:any) => {
    const renderItem = ({ item, index }:any) => <CardImage image={item} />;
    if (photos.length === 0) return <Text>Loading</Text>;
    return (
        <FlatList 
            data={ photos }
            renderItem={ renderItem }
            keyExtractor={(item:any) => item.id.toString()}
            numColumns={2}
        />
    )
}