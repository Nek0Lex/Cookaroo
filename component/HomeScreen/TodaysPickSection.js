import { View, FlatList } from "react-native";
import { Title, Text, Card } from "react-native-paper";
import { TodaysPickCard } from "./TodaysPickCard";
import { Layout } from "../../constant/Layout";

const DATA = [
    {
        "id": 1,
        "title": "Classic Spaghetti Bolognese",
        "recipe": "1. Heat olive oil in a large saucepan over medium heat. Add minced onions, garlic, and ground beef. Cook until beef is browned. 2. Stir in crushed tomatoes, tomato paste, and season with salt and pepper. Simmer for 20 minutes. 3. Cook spaghetti according to package instructions. Serve sauce over cooked spaghetti.",
        "image": "https://example.com/spaghetti_bolognese.jpg"
    },
    {
        "id": 2,
        "title": "Homemade Margherita Pizza",
        "recipe": "1. Preheat the oven to 475°F (245°C). 2. Roll out pizza dough and top with crushed tomatoes, fresh mozzarella, and basil leaves. 3. Bake in the oven for 12-15 minutes or until the crust is golden and the cheese is bubbly. 4. Drizzle with olive oil before serving.",
        "image": "https://example.com/margherita_pizza.jpg"
    },
    {
        "id": 3,
        "title": "Creamy Chicken Alfredo",
        "recipe": "1. Cook fettuccine according to package instructions. 2. In a separate pan, cook chicken until no longer pink. 3. In a saucepan, melt butter, then stir in heavy cream and grated Parmesan cheese. Cook until thickened. 4. Toss cooked fettuccine and chicken with the creamy sauce. Serve hot.",
        "image": "https://example.com/chicken_alfredo.jpg"
    },
    {
        "id": 4,
        "title": "Vegetable Stir-Fry",
        "recipe": "1. Heat vegetable oil in a wok or large skillet. 2. Add a variety of sliced vegetables (e.g., bell peppers, broccoli, carrots) and stir-fry until crisp-tender. 3. Stir in a sauce made of soy sauce, ginger, and garlic. 4. Serve over cooked rice or noodles.",
        "image": "https://example.com/vegetable_stir_fry.jpg"
    },
    {
        "id": 5,
        "title": "Fresh Fruit Salad",
        "recipe": "1. In a large bowl, combine a variety of fresh fruits (e.g., strawberries, blueberries, watermelon, and kiwi). 2. Optional: drizzle with honey and sprinkle with mint leaves. 3. Toss to combine and chill before serving.",
        "image": "https://example.com/fruit_salad.jpg"
    },
    {
        "id": 6,
        "title": "Chocolate Chip Cookies",
        "recipe": "1. Preheat the oven to 350°F (175°C). 2. In a mixing bowl, cream together butter, white sugar, and brown sugar until smooth. 3. Beat in eggs, one at a time, then stir in vanilla. 4. Gradually add dry ingredients, then fold in chocolate chips. 5. Drop by rounded tablespoons onto ungreased baking sheets. Bake for 10-12 minutes or until edges are golden brown.",
        "image": "https://example.com/chocolate_chip_cookies.jpg"
    }
];

export default function TodaysPickSection({ navigation }) {
    return (
        <View>
            <Title style={{ marginStart: Layout.margin }}>
                Today's Pick
            </Title>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={DATA}
                horizontal={true}
                renderItem={({ item }) => <TodaysPickCard recipeItem={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: Layout.margin }} />}
                ListHeaderComponent={() => <View style={{ width: Layout.margin }} />}
            />
        </View>
    )
}