import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();
    console.log(games);

    useEffect(() => {
        getLatestGames().then(games => {
            setGames(games);
        });
    }, []);

    return (
        <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
            <View style={{marginBottom:20}}>
                <Logo />
            </View>
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


