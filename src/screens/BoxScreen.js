import React from 'react'
import {TextInput, Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View flexDirection='column' alignItems='center'>
            <Text style={styles.child}>Element 1</Text>
            <Text style={styles.child}>Element 2</Text>
            <Text style={styles.child}>Element 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    child : {
       margin: 5,
       padding: 25 ,
       borderWidth: 2
    }
})

export default BoxScreen