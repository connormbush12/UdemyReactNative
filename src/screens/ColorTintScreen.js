import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Button} from 'react-native'
import ColorButton from '../components/colorButton'

const ColorTintScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColorButton 
                color='Red' 
                onIncrease={()=> {
                    setRed(red+10)
                    if(red>256) {
                        setRed(256)
                    }
                }}
                onDecrease={()=> {
                    setRed(red-10)
                    if(red<0) {
                        setRed(0)
                    }
                }}
            />
            <ColorButton 
                color='Green' 
                onIncrease={()=> {
                    setGreen(green+10)
                    if(green>256) {
                        setGreen(256)
                    }
                }}
                onDecrease={()=> {
                    setGreen(green-10)
                    if(green<0) {
                        setGreen(0)
                    }
                }}
            />            
            <ColorButton 
                color='Blue'
                onIncrease={()=> {
                    setBlue(blue+10)
                    if(blue>256) {
                        setBlue(256)
                    }
                }}
                onDecrease={()=> {
                    setBlue(blue-10)
                    if(blue<0) {
                        setBlue(0)
                    }
                }}
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