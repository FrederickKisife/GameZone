import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";


const Stack = createNativeStackNavigator()

export default function HomeStack() {

    
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                title:"GameZone",
                headerStyle:{
                    backgroundColor:"#eee",
                    height:60,
                    headerTintColor:'#444'
                }
            }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{
                title:"GameZone",
                headerStyle:{
                    backgroundColor:"#eee",
                    height:60,
                    headerTintColor:'#444'
                }
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}
