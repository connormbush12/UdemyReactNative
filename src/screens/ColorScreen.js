import React, {useState} from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    
    return (
        <View>
            <Button 
                title='Add a Color'
                onPress= {() => {
                    setColors([...colors, randomRGB()]);
                }}
            />

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return (
                        <View style={{width: 150, height:150, backgroundColor: item}}/>
                    )
                }}
            />
        </View>
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`
}


export default ColorScreen;