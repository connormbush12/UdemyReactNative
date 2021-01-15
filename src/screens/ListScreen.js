import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name : 'Connor', age : 21},
        {name : 'Coonnoor', age : 22},
        {name : 'Cooonnooor', age : 23},
        {name : 'Coooonnoooor', age : 24},
        {name : 'Cooooonnooooor', age : 25},
    ]
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem= {({item}) => {
                return <Text>My friend's name is {item.name} and his age is {item.age}</Text>
            }}
        ></FlatList>
    )
}

const style = StyleSheet.create({

})

export default ListScreen