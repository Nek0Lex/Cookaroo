import { View, Text, StyleSheet, FlatList } from "react-native";
import { Title, IconButton, Button, Card } from 'react-native-paper';
import { Layout } from "../../constant/Layout";
import { FeaturedChips } from "./FeaturedChips";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Breakfast',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Lunch',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Pasta',
    },
];

export default function FeaturedRecipeSection({ navigation }) {

    const handleToDetail = () => { navigation.navigate('RecipeDetail') }

    const FeaturedListItem = ({ title }) => (
        <Card style={{ marginHorizontal: 15, height: 120, overflow: "hidden" }} onPress={handleToDetail}>
            <View style={styles.recipeCard}>
                <View style={{ height: '100%', width: '30%', backgroundColor: 'black' }} />
                <View style={{ flexDirection: 'col', margin: 15 }}>
                    <Text>
                        Recipe name
                    </Text>
                    <Text>
                        Ingedient tag
                    </Text>
                    <Text>
                        735 calories
                    </Text>
                </View>

            </View>
        </Card>
    );

    return (
        <View>
            <Title style={styles.title}>
                Featured Recipe
            </Title>
            <FlatList
                horizontal={true}
                data={DATA}
                renderItem={({ item }) => <FeaturedChips title={item.title} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                ListHeaderComponent={() => <View style={{ width: 10 }} />}
            />
            <FlatList
                data={DATA}
                nestedScrollEnabled={true}
                renderItem={({ item }) => <FeaturedListItem title={item.title} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListHeaderComponent={() => <View style={{ height: 10 }} />}
                ListFooterComponent={() => <View style={{ height: 15 }} />}
                style={{ marginTop: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: { marginStart: Layout.margin, marginTop: Layout.margin },
    mainContainer: {
        backgroundColor: 'white',
    },
    recipeCard: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        height: '100%',
    }
});
