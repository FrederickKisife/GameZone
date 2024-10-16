import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const RootDrawer = createDrawerNavigator();

export default function Drawer(){
    return (
        <NavigationContainer>
        <RootDrawer.Navigator>
            <RootDrawer.Screen name="Home" component={HomeStack} options={{
                headerShown: false,
            }}/>
            <RootDrawer.Screen name="About" component={AboutStack} options={{
                headerShown: false,
            }}/>
        </RootDrawer.Navigator>
        </NavigationContainer>
    )
   
}