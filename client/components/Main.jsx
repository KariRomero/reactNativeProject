import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { View, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import Entypo from '@expo/vector-icons/Entypo';
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
        <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
            <View className='mb-6 '>
                <Logo />
            </View>
            <Link asChild href='/about'>
                <PressableStyled className="active:opacity-10">
                    <Entypo name="info-with-circle" size={36} color="white" />
                </PressableStyled>
            </Link>
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


