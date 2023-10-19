import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Title, IconButton } from 'react-native-paper';
import TodaysPickSection from "../component/HomeScreen/TodaysPickSection";
import FeaturedRecipeSection from "../component/HomeScreen/FeaturedRecipeSection";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from "react";
import { Searchbar, Avatar } from 'react-native-paper';
import { Layout } from "../constant/Layout";


export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const safeAreainsets = useSafeAreaInsets();

    const safeAreainsetsTop = {
        paddingTop: safeAreainsets.top
    }

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
            <View style={[styles.topSearchContainer, safeAreainsetsTop]}>
                <View style={styles.topContainer}>
                    <Title style={{ flex: 1 }}>
                        Hello, User
                    </Title>
                    <IconButton
                        icon="history"
                        size={28}
                        onPress={() => console.log('Pressed')}
                    />
                    <Avatar.Text size={35} label="US" style={{ margin: 0 }} />
                </View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ marginHorizontal: 30, height: 60, marginBottom: 20 }}
                />
            </View>
            <View style={styles.mainContainer}>
                <TodaysPickSection navigation={navigation} />
                <FeaturedRecipeSection navigation={navigation} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        display: 'flex',
    },
    topSearchContainer: {
        flexDirection: "column",
        backgroundColor: 'grey',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 30
    },
    topContainer: {
        flexDirection: 'row',
        marginHorizontal: Layout.margin,
        alignItems: 'center'
    },
    mainContainer: {
        backgroundColor: 'white',
    }
});
