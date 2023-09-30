import { View, FlatList } from "react-native";
import { Title, Text, Card } from "react-native-paper";
import { TodaysPickCard } from "./TodaysPickCard";
import { Layout } from "../../constant/layout";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'asdasdsasdfasdfasdf',
        title: 'First Item',
    },
    {
        id: 'adsfhrdfgjhdfgjfd',
        title: 'Second Item',
    },
    {
        id: 'asdgadfhjutreurytery',
        title: 'Third Item',
    },
];

export default function TodaysPickSection() {
    return (
        <View>
            <Title style={{ marginStart: Layout.margin }}>
                Today's Pick
            </Title>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={DATA}
                horizontal={true}
                renderItem={({ item }) => <TodaysPickCard title={item.title} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                ListHeaderComponent={() => <View style={{ width: 5 }} />}
            />
        </View>
    )
}