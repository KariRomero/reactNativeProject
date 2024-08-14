import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Detail() {
    return (
        <View className='felx-1 justify-center items-center'>
            <View>
                <Text className='text-white font-extrabold mb-6 text-xl'>
                    Detalle del juego
                </Text>
                <Link href='/' className='text-yellow-500'>
                    Atrás
                </Link>
            </View>
        </View>
    )
}