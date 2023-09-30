import { View, FlatList } from "react-native";
import { Title, Text, Card } from "react-native-paper";

const cardHeight = 150

export const TodaysPickCard = ({ title }) => (
    <Card style={{ height: cardHeight, margin: 10, width: 90, justifyContent: 'flex-end' }}>
        <Text style={{ padding: 5, maxWidth: '85%' }} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
    </Card>
);