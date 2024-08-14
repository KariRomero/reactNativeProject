import { Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Detail() {
    const { id } = useLocalSearchParams();
    return (
        <View className='felx-1 bg-black justify-center items-center'>
            <View>
                <Text className='text-white font-extrabold mb-6 text-xl'>
                    Detalle del juego {id}
                </Text>
                <Link href='/' className='text-yellow-500'>
                    Atrás
                </Link>
            </View>
        </View>
    )
}