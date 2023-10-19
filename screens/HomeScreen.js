import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constant/Colors";
import { Title, IconButton } from 'react-native-paper';
import TodaysPickSection from "../component/HomeScreen/TodaysPickSection";
import FeaturedRecipeSection from "../component/HomeScreen/FeaturedRecipeSection";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from "react";
import { Searchbar } from 'react-native-paper';
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
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <Text>
                        profile button
                    </Text>
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
                <FeaturedRecipeSection />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        display: 'flex',
    },
    topSearchContainer: { flexDirection: "column", backgroundColor: 'grey', borderBottomLeftRadius: 35, borderBottomRightRadius: 30 },
    topContainer: {
        flexDirection: 'row',
        marginHorizontal: Layout.margin
    },
    mainContainer: {
        backgroundColor: 'white',
    }
});
