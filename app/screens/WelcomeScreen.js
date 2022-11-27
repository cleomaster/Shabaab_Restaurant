import { Text, View, StyleSheet, ImageBackground} from 'react-native';
import Button from '../components/Button';
import colors from './../components/colors';

function WelcomeScreen({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate('Restaurants')
    }

    return (
       <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/restaurant1.jpg')}>
        <View style={styles.container}>
            <Text style={styles.headingText}>Shabaab</Text>
            <Text style={styles.normalText}>Online Reservation System for all our Restaurants and Cafe' in one convenient place.</Text>
        </View>
        <Button onPress={() => handleNavigation('Home')} style={styles.button} title="Get Started" color={colors.yellow} />
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    headingText: {
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
        marginBottom: 20
    },
    normalText: {
        fontSize: 25,
        color: "white",
        letterSpacing: -0.24
    },
    button: {
     marginHorizontal: 30,
     marginBottom: 50
    }
})

export default WelcomeScreen;