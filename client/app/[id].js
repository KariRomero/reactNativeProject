import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getGameDetails } from '../lib/metacritic';
import { Score } from '../components/Score';

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        if (id) {
            getGameDetails(id).then(setGame)
        }
    }, [id])
    return (
        <View className='felx-1 bg-black justify-center items-center'>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#ffee00' },
                    headerTintColor: 'black',
                    headerLeft: () => { },
                    headerRight: () => { },
                    headerTitle: 'Detalles del juego'
                }}
            />
            <View>
                {
                    game === null ? (
                        <ActivityIndicator />
                    ) : (
                        <ScrollView>
                            <View className='items-center'>
                                <View className='flex-row mb-4 mt-2'>
                                    <Text className='text-white font-extrabold mr-2 text-xl'>
                                        {game.title}
                                    </Text>
                                    <Score score={game.score} maxScore={100} />
                                </View>
                                <Image
                                    className='rounded mb-4'
                                    source={{ uri: game.img }}
                                    style={{ width: 214, height: 294 }}
                                />
                                <Text className='text-white font-medium text-left mb-6 text-base'>
                                    {game.description}
                                </Text>
                            </View>
                        </ScrollView>
                    )
                }
            </View>
        </View>
    )
}