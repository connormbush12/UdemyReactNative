import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
      title="Go to Components Page"
      onPress={() => navigation.navigate('Components')}
     />
    <Button 
      title="Go to Lists Page"
      onPress={() => navigation.navigate('List')}
     />
     <Button
      title="Go to Images Page"
      onPress={() => navigation.navigate('Images')}
     />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;