import React from 'react';
import { TouchableOpacity ,StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CardImage = ({image}:any) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.cardImage} onPress={() => navigation.navigate("ImageScreen", {image}) }>
            <Image 
                source={{ uri: image.src.small
                    ? image.src.small
                    : "http://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png"
                }}
                style={{ width: "100%", height: 200 }}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cardImage:{
        display: 'flex',
        width: "50%",
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5,
    }
})
