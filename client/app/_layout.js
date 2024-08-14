import { Pressable, View } from "react-native";
import { Stack, Link } from "expo-router";
import { Logo } from "../components/Logo";
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout() {
    return (
        <View className='flex-1'>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: 'yellow',
                    headerTitle: '',
                    headerLeft: () => <Logo />,                    
                }}
            />
        </View>
    )
}