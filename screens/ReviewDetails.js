import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({navigation, route}) {
  const rating = route.params.rating;


  return (
    <View style={globalStyles.container}>
        <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>
              GameZone rating: 
          </Text>
          <Image source={images.ratings[rating]} />
        </View>
        {/* <Text>{route.params.rating}</Text> */}
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({

})

