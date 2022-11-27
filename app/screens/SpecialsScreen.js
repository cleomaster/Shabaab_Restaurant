import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import colors from './../components/colors';
import restaurants from './../components/data';


const renderItem = ({ item, index }) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <View style={styles.container}>
        <View style={styles.image}></View>
        <View style={styles.foodinfo}>
            <Text style={styles.normalHeading}>{days[index]}</Text>
            <Text style={styles.normalText}>{item.name}</Text>
        </View>
        <View style={styles.pricing}>
            <Text style={styles.normalText}>$9.99</Text>
            <Text style={styles.normalText}>$12.99</Text>
        </View>
       </View>
    )
}


function SpecialsScreen({ route }) {
    const specials = route.params.specials;
    return (
        <View style={styles.main}>
           <Text style={styles.headingText}>Daily Specials</Text>
           <FlatList ItemSeparatorComponent={() => <View style={{height: 10}}></View>} data={specials} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100
    },
    normalHeading: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5
    },
    normalText: {
        color: colors.grey,
        fontSize: 18
    },
    foodinfo: {
        flex: 1,
        marginLeft: 25
    },
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderRadius: 10
    },
    main: {
        marginTop: 50,
        marginHorizontal: 20
    },
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30
    }
})

export default SpecialsScreen;