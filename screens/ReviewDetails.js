import React from 'react';
import { Button, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({navigation, route}) {
  const rating = route.params.rating;


  return (
    <ImageBackground source={require("../assets/game_bg.png")} style={globalStyles.container}>
        <Card>
        <Text style={globalStyles.details}>{route.params.title}</Text>
        <Text style={globalStyles.details}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.details}>
              GameZone rating: 
          </Text>
          <Image source={images.ratings[rating]} />
        </View>
        {/* <Text>{route.params.rating}</Text> */}
        </Card>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
 rating:{
  flexDirection:"row",
  justifyContent:"center",
  paddingTop:16,
  marginTop:16,
  borderTopWidth:1,
  borderTopColor:"#eee",
 }
})

