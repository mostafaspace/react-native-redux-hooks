
import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';



export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Counter: {counter}</Text>

            <View style={styles.buttons}>
                <View style={styles.button}>
                  <Button onPress={() => dispatch({type: "INCREMENT"})} title={"INC"}/>
                </View>

                <View style={styles.button}>
                    <Button onPress={() => dispatch({type: "DECREMENT"})} title={"DEC"}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttons: {
      flexDirection: 'row',
  },
  button: {
      margin: 8,
  }
});
