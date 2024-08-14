import { useEffect, useRef } from 'react';
import { Text, View, Image, Animated, Pressable } from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

export function GameCard({ game }) {

    const PressableStyled = styled(Pressable);
    return (
        <Link href={`/${game.slug}`} asChild>
            <PressableStyled 
            className='active:opacity-80'
            >
                <View
                    className="flex-row bg-gray-500/10 gap-4 mb-10"
                    key={game.slug}>
                    <Image source={{ uri: game.image }} className='h-48 w-32' />
                    <View className='flex-shrink'>
                        <Text className='text-lg text-white'>{game.title}</Text>
                        <Text className='text-white text-xs'>
                            {game.description.slice(0, 100)}...
                        </Text>
                        <Score score={game.score} maxScore={100} />
                    </View>
                </View>
            </PressableStyled>
        </Link>
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