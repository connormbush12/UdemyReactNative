//Creating a component has four steps.

//First, need to import the libraries we need
import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Then, we create a Component. Components are functions that return JSX
const ComponentsScreen = () => {
    //<Text> was imported above from 'react-native'
    //JSX looks similar to HTML
    return <Text style={styles.textStyle}>This is the components screen</Text>;
}

//Then, we create a style sheet. Once again, StyleSheet was imported from 'react-native'
const styles = StyleSheet.create({
    //We create a textStyle object with the fontSize property
    textStyle : {
        fontSize : 30
    }
});

//The last step to create a component is to export it.
export default ComponentScreen;

