import React, {useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button
            title='Increase'
            onPress={()=> {
                setCounter(counter+1)
            }}
            />
            <View style={{width:50, height:50, backgroundColor:'rgb(50, 45, 160)'}}>
                <Text style={{color:'white', justifyContent: 'center'}}>{counter}</Text>
            </View>
            <Button
            title='Decrease'
            onPress={()=> {
                setCounter(counter-1)
            } }
            />
        </View>

    )
}

export default CounterScreen