import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title, IconButton } from 'react-native-paper';

export const FeaturedChips = ({ title }) => (
    <View style={{ width: 110, borderColor: 'black', borderWidth: 1, borderRadius: 10, padding: 10 }}>
        <Text numberOfLines={1} ellipsizeMode="tail">{title}</Text>
    </View>
);