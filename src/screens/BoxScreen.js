import React from 'react'
import {TextInput, Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parent}>
            <Text style={styles.childOne}>Element 1</Text>
            <Text style={styles.childTwo}>Element 2</Text>
            <Text style={styles.childThree}>Element 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parent : {
        flexDirection : 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 10,
        borderWidth: 2,
        width: 400,
        height: 600
    },
    childOne : {
       margin: 5,
       padding: 25 ,
       borderWidth: 2,
       backgroundColor: 'red'
    },
    childTwo : {
        margin: 5,
        padding: 25,
        borderWidth: 2,
        top: 200,
        backgroundColor: 'green'
    },
    childThree : {
        margin: 5,
        padding: 25,
        borderWidth: 2,
        backgroundColor: 'purple'
    }
})

export default BoxScreen