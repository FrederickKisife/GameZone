// import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";
import react from "react";



const Stack = createNativeStackNavigator()

export default function HomeStack() {

    
  return (
   
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({navigation})=>{
                return{
                        headerTitle: ()=> <Header navigation={navigation} title="GameZone"/>,
                        headerStyle:{
                            backgroundColor:"#eee",
                            height:60,
                            headerTintColor:'#444'
                        }
                    
                }
            }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{
                title:"ReviewDetails",
                headerStyle:{
                    backgroundColor:"#eee",
                    height:60,
                    headerTintColor:'#444'
                }
            }}/>
        </Stack.Navigator>
   
    
  )
}
