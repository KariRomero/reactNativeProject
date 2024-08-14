import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { styled } from 'nativewind';

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();
    const PressableStyled = styled(Pressable);
    // console.log(games);

    useEffect(() => {
        getLatestGames().then(games => {
            setGames(games);
        });
    }, []);

    return (
        <View className='bg-black'>
            
            {games.length === 0 ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={game => game.slug}
                    renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
                />
            )}
        </View>
    );
}


