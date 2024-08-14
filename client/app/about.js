import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { styled } from 'nativewind';

export default function About() {
    const PressableStyled = styled(Pressable);
    return (
        <ScrollView className='mt-20'>
            <Link asChild href='/'>
                <PressableStyled className="active:opacity-10">
                    <Entypo name="home" size={36} color="white"/> 
                </PressableStyled>
            </Link>
            <Text className='text-white font-bold mb-8 text-2xl'>
                Sobre el proyecto
            </Text>
            <Text className='text-white text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus dictum velit quis porta.
                Aenean feugiat nisl massa, vitae rutrum justo cursus quis. Vestibulum nec felis in metus venenatis condimentum.
                Vivamus ac finibus tortor, at convallis elit. Phasellus libero enim, tincidunt ut tortor non, imperdiet pharetra magna.
                Curabitur turpis diam, iaculis vel ex eget, consequat interdum tellus. Nullam malesuada erat volutpat odio pharetra laoreet.
                Integer non feugiat dui. Vestibulum mattis nisi leo, ut hendrerit ex ultricies ut. Sed risus purus, convallis ut elementum eu,
                imperdiet non risus.
            </Text>
            <Text className='text-white text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus dictum velit quis porta.
                Aenean feugiat nisl massa, vitae rutrum justo cursus quis. Vestibulum nec felis in metus venenatis condimentum.
                Vivamus ac finibus tortor, at convallis elit. Phasellus libero enim, tincidunt ut tortor non, imperdiet pharetra magna.
                Curabitur turpis diam, iaculis vel ex eget, consequat interdum tellus. Nullam malesuada erat volutpat odio pharetra laoreet.
                Integer non feugiat dui. Vestibulum mattis nisi leo, ut hendrerit ex ultricies ut. Sed risus purus, convallis ut elementum eu,
                imperdiet non risus.
            </Text>
            <Text className='text-white text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus dictum velit quis porta.
                Aenean feugiat nisl massa, vitae rutrum justo cursus quis. Vestibulum nec felis in metus venenatis condimentum.
                Vivamus ac finibus tortor, at convallis elit. Phasellus libero enim, tincidunt ut tortor non, imperdiet pharetra magna.
                Curabitur turpis diam, iaculis vel ex eget, consequat interdum tellus. Nullam malesuada erat volutpat odio pharetra laoreet.
                Integer non feugiat dui. Vestibulum mattis nisi leo, ut hendrerit ex ultricies ut. Sed risus purus, convallis ut elementum eu,
                imperdiet non risus.
            </Text>
        </ScrollView>
    )
}