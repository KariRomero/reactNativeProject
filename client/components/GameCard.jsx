import { useEffect, useRef } from 'react';
import { Text, View, Image, Animated } from 'react-native';

export function GameCard({ game }) {
    return (
        <View
            className="flex-row bg-gray-500/10 p-4 rounded-xl gap-4 mb-10"
            key={game.slug}>
            <Image source={{ uri: game.image }} className='w-32 h-60' />
            <View>
                <Text className='text-lg text-white'>{game.title}</Text>
                <Text className='text-white text-xs'>{game.description}</Text>
                <Text className='text-green-600 text-lg'>{game.score}</Text>
            </View>
        </View>
    )
};

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start()
    }, [opacity, index])
    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    )
}