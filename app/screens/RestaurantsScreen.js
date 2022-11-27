import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import colors from './../components/colors';


function RestaurantsScreen({ navigation }) {

    const handleNavigation = (name) => {
        navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
        <ScrollView>

        <View style={styles.textContainer}>
            <Text style={styles.headingText}>Let's reserve a table for you</Text>
            <Text style={styles.normalText}>Select your Restaurant or Cafe</Text>
        </View>
        <View styles={styles.sectionsContainer}>
        <TouchableOpacity onPress={() => handleNavigation('Hatem')}>
        <View>
            <ImageBackground blurRadius={5} style={styles.section} source={require("../assets/hatem.jpg")}
            >
            <Text style={styles.resText}>Hatem</Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Madona")}>
        <View>
            <ImageBackground blurRadius={5} style={styles.section} source={require("../assets/madona.jpg")}
            >
             <Text style={styles.resText}>Madona Cafe</Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Caviche")} >
        <View>
            <ImageBackground blurRadius={5} style={styles.section} source={require("../assets/caviche.jpg")}
            >
             <Text style={styles.resText}>Caviche</Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    textContainer: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    headingText: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
    },
    normalText: {
        fontSize: 18,
        color: colors.grey,
    },
    section: {
        marginTop: 30,
        height: 160,
        marginHorizontal: 30,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 5,
        justifyContent: "flex-end"
    },
    resText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "bold",
        marginLeft: 25
    }
})

export default RestaurantsScreen;