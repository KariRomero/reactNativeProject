import { Tabs } from "expo-router";
import { View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown:false,
            tabBarStyle:{ backgroundColor:'black'},
            tabBarActiveTintColor:'#ffee00',
            
        }}
        >
            <Tabs.Screen
            name='index'
            options={{
                title:'Home',
                tabBarIcon: ({color})=> <Entypo name="home" size={36} color={color}/>
            }}/>
            <Tabs.Screen
            name='about'
            options={{
                title:'About',
                tabBarIcon: ({color})=> <Entypo name="info-with-circle" size={36} color={color} />
            }}/>
        </Tabs>
    )
}
