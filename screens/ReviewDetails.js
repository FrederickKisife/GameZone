import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation, route}) {


  return (
    <View style={globalStyles.container}>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
    </View>
  )
}

