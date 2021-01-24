import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Button} from 'react-native'
import ColorButton from '../components/colorButton'

const COLOR_INCREMENT = 15;

const ColorTintScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch(color) {
            case 'red':
                red+change>255 || red+change < 0 ? null : setRed(red+change)
            break;
            case 'green':
                green+change>255 || green+change < 0 ? null : setGreen(green+change)
            break;
            case 'blue':
                blue+change>255 || blue+change < 0 ? null : setBlue(blue+change)
            break;
        }
            
        }

    return (
        <View>
            <ColorButton 
                color='Red' 
                onIncrease={()=> {setColor('red', COLOR_INCREMENT)}}
                onDecrease={()=> {setColor('red', -1*COLOR_INCREMENT)}}
            />
            <ColorButton 
                color='Green' 
                onIncrease={()=> {setColor('green', COLOR_INCREMENT)}}
                onDecrease={()=> {setColor('green', -1*COLOR_INCREMENT)}}
            />            
            <ColorButton 
                color='Blue'
                onIncrease={()=> {setColor('blue', COLOR_INCREMENT)}}
                onDecrease={()=> {setColor('blue', -1*COLOR_INCREMENT)}}
            />
            <View style={{width:150, height:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    )
    }

const styles = StyleSheet.create({
    textStyles : {

    }
})

export default ColorTintScreen