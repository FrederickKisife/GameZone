// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";
import Header from "../shared/Header";
import react from "react";


const Stack = createNativeStackNavigator()

export default function AboutStack() {

    
  return (
   
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={({navigation})=>{
                return {
                        headerTitle:()=><Header navigation={navigation} title="About GameZone"/>,
                        headerStyle:{
                            backgroundColor:"#eee",
                            height:60,
                            headerTintColor:'#444'
                        }
                    
                }
            }}/>
        
        </Stack.Navigator>
    
    
  )
}
