import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Modal} from 'react-native';
import { globalStyles } from '../styles/global';
import {useState} from 'react';
import Card from '../shared/Card';
import {MaterialIcons} from "@expo/vector-icons";



export default function Home({navigation}) {
  const[modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title:"Mario", rating: 5, body:"Action and Adventure Quest", key:'1'},
        {title:"god of war", rating: 4, body:"Action and Adventure Quest", key:'2'},
        {title:"GTA", rating: 3, body:"Action and Adventure Quest", key:'3'},
    ])

  return (
    <ImageBackground source={require("../assets/game_bg.png")} style={globalStyles.container}>

      <Modal visible={modalOpen} animationType="slide">
        <View>
        <MaterialIcons
          name="close"
          size={24}
          style={styles.modalToggleClose}
          onPress={()=>setModalOpen(false)}
      />
          <Text>Hello from modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={()=>setModalOpen(true)}
        style={styles.modalToggle}
      />
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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:"#f2f2f2",
    alignSelf:"center",
  },
  modalToggleClose:{
    marginBottom:0,
    borderWidth:1,
    borderColor:"#f2f2f2",
    alignSelf:"center",
    marginTop:20,
  },
  modalContent:{
    flex: 1,
  }
})


