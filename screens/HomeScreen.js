import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constant/Colors";
import { Title, IconButton } from 'react-native-paper';
import TodaysPickSection from "../component/HomeScreen/TodaysPickSection";
import FeaturedRecipeSection from "../component/HomeScreen/FeaturedRecipeSection";


export default function HomeScreen() {
    return (
        <SafeAreaView style={{ display: 'flex', backgroundColor: 'red' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                        profile butto
                    </Text>
                </View>
                <View style={styles.mainContainer}>
                    <Text>
                        search bar
                    </Text>
                    <TodaysPickSection />
                    <FeaturedRecipeSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    mainContainer: {
        backgroundColor: 'white',
    }
});
