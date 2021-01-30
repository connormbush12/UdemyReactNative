import React, {useReducer} from 'react'
import {Text, View, StyleSheet, FlatList, Button} from 'react-native'
import ColorButton from '../components/colorButton'

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    switch(action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? {...state} : {...state, red: state.red + action.payload}
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? {...state} : {...state, green: state.green + action.payload}
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? {...state} : {...state, blue: state.blue + action.payload}
        }

}
const ColorTintScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    
    return (
        <View>
            <ColorButton 
                color='Red' 
                onIncrease={()=> {dispatch({type: 'red', payload: COLOR_INCREMENT})}}
                onDecrease={()=> {dispatch({type: 'red', payload: -1 *COLOR_INCREMENT})}}
            />
            <ColorButton 
                color='Green' 
                onIncrease={()=> {dispatch({type: 'green', payload: COLOR_INCREMENT})}}
                onDecrease={()=> {dispatch({type: 'green', payload: -1 * COLOR_INCREMENT})}}
            />            
            <ColorButton 
                color='Blue'
                onIncrease={()=> {dispatch({type: 'blue', payload: COLOR_INCREMENT})}}
                onDecrease={()=> {dispatch({type: 'blue', payload: -1 * COLOR_INCREMENT})}}
            />
            <View style={{width:150, height:150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
        </View>
    )
    }

const styles = StyleSheet.create({
    textStyles : {

    }
})

export default ColorTintScreen