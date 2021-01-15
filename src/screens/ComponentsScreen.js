//Creating a component has four steps.

//First, need to import the libraries we need
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const name = 'Connor'

//Then, we create a Component. Components are functions that return JSX
const ComponentsScreen = () => {
    //<Text> was imported above from 'react-native'
    //JSX looks similar to HTML
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with Reactive Native!</Text>
        <Text style={styles.nameStyle}>My name is {name}</Text>
    </View>
    )
}

//Then, we create a style sheet. Once again, StyleSheet was imported from 'react-native'
const styles = StyleSheet.create({
    //We create a textStyle object with the fontSize property
    textStyle : {
        fontSize : 45
    },
    nameStyle : {
        fontSize : 20
    }
});

//The last step to create a component is to export it.
export default ComponentsScreen;

