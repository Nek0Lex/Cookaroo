import { View, FlatList, Image, ImageBackground } from "react-native";
import { Title, Text, Card } from "react-native-paper";

const cardHeight = 150

export const TodaysPickCard = ({ recipeItem, navigation }) => (
    // <Card style={{ height: cardHeight, margin: 10, width: 90 }}>
    //     {/* <Image
    //         source={{ uri: 'https://picsum.photos/700' }}
    //     /> */}
    //     <ImageBackground source={{ uri: 'https://picsum.photos/700' }} resizeMode='cover'>

    //     </ImageBackground>
    //     {/* <Text style={{ padding: 5, maxWidth: '85%' }} ellipsizeMode='tail' numberOfLines={1}>{recipeItem.title}</Text> */}
    // </Card>
    <Card style={{ width: 250, marginVertical: 10, }} onPress={() => {
        navigation.navigate('RecipeDetail')
    }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700/300' }} style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, height: 140 }} />
        <Card.Content style={{ marginTop: 10 }}>
            <Text variant="titleMedium">{recipeItem.title}</Text>
        </Card.Content>
    </Card>
);