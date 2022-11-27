import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function RestaurantPage({ route }) {
    const res = route.params.res;
    
    return (
      <View>
        <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image style={styles.cardImage} source={res.imgUrl} />
        </View>
        <View style={styles.info}>
            <Text style={styles.darkText}>8am - 9pm</Text>
            <Text style={styles.darkText}>123-456-7890</Text>
            <Text style={styles.darkText}>2.8 km</Text>
        </View>
        </View>
        <View style={styles.textContainer}>
        <View>
            <Text style={styles.headingText}>About {res.name}</Text>
            <Text style={styles.normalText}>After several months of planning and hard work, we opened Hatęm in July 2020. Opening up a restaurant had been always our dream and when we saw the chance we took it! Our team has years of culinary experience and we love mouthwatering food, which had inspired us to convert our dream into a reality.</Text>
            <Text style={styles.normalText}>All of our burgers are made fresh and in our kitchen. Our burgers are marinated with our unique seasonings. Our meals are always prepared to perfection for you!</Text>
        </View>
        <View style={styles.faq}>
        <Text style={styles.headingText}>F.A.Q</Text>
        <View style={styles.btnHeader}>
            <Text style={{fontSize: 15}}>Do you have Vegetarian options?</Text>
            <MaterialCommunityIcons name="arrow-down" size={18} color="black" />
        </View>
        </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 40,
        alignItems: "center",
    },
    cardImage: {
        width: 350,
        height: 200,
    },
    imageContainer: {
        borderWidth: 3,
        borderRadius: 30, 
        overflow: "hidden"
    },
    info: {
        marginTop: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    darkText: {
        fontWeight: "bold"
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 35,
        marginBottom: 10
    },
    normalText: {
        fontSize: 18,
        marginTop: 10
    },
    textContainer: {
        marginTop: 30,
        marginHorizontal: 30
    },
    faq: {
        marginTop: 30
    },
    btnHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default RestaurantPage;