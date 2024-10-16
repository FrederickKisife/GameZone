import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import {useState} from 'react';
import Card from '../shared/Card';



export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        {title:"Mario", rating: 5, body:"Action and Adventure Quest", key:'1'},
        {title:"god of war", rating: 4, body:"Action and Adventure Quest", key:'2'},
        {title:"GTA", rating: 3, body:"Action and Adventure Quest", key:'3'},
    ])

  return (
    <View style={globalStyles.container}>
        <FlatList
        data={reviews}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails", item)}>
                <Card>
                  <Text style={globalStyles.titleText}>{item.title}</Text>
                </Card>
            </TouchableOpacity>
          )    
        }
       />
    </View>
  )
}


