//This is a counter screen using useState
// import React, {useState} from 'react'
// import {Text, View, StyleSheet, Button} from 'react-native'

// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0)
//     return (
//         <View>
//             <Button
//             title='Increase'
//             onPress={()=> {
//                 setCounter(counter+1)
//             }}
//             />
//             <View style={{width:50, height:50, backgroundColor:'rgb(50, 45, 160)'}}>
//                 <Text style={{color:'white', justifyContent: 'center'}}>{counter}</Text>
//             </View>
//             <Button
//             title='Decrease'
//             onPress={()=> {
//                 setCounter(counter-1)
//             } }
//             />
//         </View>

//     )
// }

// export default CounterScreen



//This is a counter screen using useReducer
import React, {useReducer} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const COUNTER_INTERVAL = 1;
reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload}
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state
    return (
        <View>
            <Button
            title='Increase'
            onPress={()=> {dispatch({type: 'counter', payload: COUNTER_INTERVAL})}}
            />
            <View style={{width:50, height:50, backgroundColor:'rgb(50, 45, 160)'}}>
                <Text style={{color:'white', justifyContent: 'center'}}>{counter}</Text>
            </View>
            <Button
            title='Decrease'
            onPress={()=> {dispatch({type: 'counter', payload: -1*COUNTER_INTERVAL})}}
            />
        </View>

    )
}

export default CounterScreen