import React, {useState} from 'react'
import {Text, Button, StyleSheet, FlatList, View} from 'react-native'

const ColorButton = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Button title={`Increase ${color}`} onPress={onIncrease} />
            <Button title={`Decrease ${color}`} onPress={onDecrease} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorButton