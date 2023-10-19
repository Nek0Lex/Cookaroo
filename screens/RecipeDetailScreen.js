import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Title, List } from 'react-native-paper';
import { Layout } from "../constant/Layout";
import { useState } from "react";


export default function RecipeDetailScreen({ navigation }) {
    const [expanded, setExpanded] = useState(true);
    const [favourite, setfavourite] = useState(false);

    const handlePress = () => setExpanded(!expanded);
    const handleFav = () => setfavourite(!favourite);

    const TimeSectionCard = ({ }) => (
        <View style={styles.timeSection}>
            <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                <Text>
                    Prep time
                </Text>
                <Text>
                    15 mins
                </Text>
            </View>
            <View style={{ width: 3, backgroundColor: 'black', height: '80%' }} />
            <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                <Text>
                    Cook time
                </Text>
                <Text>
                    20 mins
                </Text>
            </View>
        </View>
    )

    return (
        <View>
            <Appbar.Header mode="center-aligned">
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Recipe" />
                <Appbar.Action icon={favourite ? "heart" : "heart-outline"} onPress={handleFav} animated={false} />
            </Appbar.Header>
            <View style={{ marginHorizontal: Layout.margin }}>
                <Title style={{ marginTop: Layout.margin }}>
                    Recipe Title asdasdasdasdsadasasdsadsadasdasdsadasdsa
                </Title>
                <Image style={{ height: 200, backgroundColor: "yellow", marginVertical: 30, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/750' }} />
                <TimeSectionCard />
                <List.Section style={styles.listSection}>
                    <List.Accordion
                        style={{ borderTopLeftRadius: Layout.radius, borderTopRightRadius: Layout.radius }}
                        title="Ingedient"
                        left={props => <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginLeft: 20 }}>🥦</Text>}>
                        <Text style={{ backgroundColor: 'red', paddingLeft: 0 }}>
                            asdjkasdka
                        </Text>
                    </List.Accordion>
                    <List.Accordion
                        theme={{
                            colors: {
                                primary: 'orange'
                            }
                        }}
                        expanded={expanded}
                        onPress={handlePress}
                        title="Cook method"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <Text style={{ backgroundColor: 'red', paddingLeft: 0 }}>
                            "Cook method"
                        </Text>
                    </List.Accordion>
                </List.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timeSection: {
        height: 100,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    listSection: {
        borderWidth: 2,
        borderTopLeftRadius: Layout.radius,
        borderTopRightRadius: Layout.radius,
        overflow: 'hidden',
        height: '100%'
    },
})