import WelcomeScreen from './app/screens/WelcomeScreen';
import RestaurantsScreen from './app/screens/RestaurantsScreen';
import RestaurantPage from './app/screens/RestaurantPage';
import restaurants from "./app/components/data";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from './app/components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SpecialsScreen from './app/screens/SpecialsScreen';
import ReserveScreen from './app/screens/ReserveScreen';
import AccountsScreen from './app/screens/AccountsScreen';



const Tab = createMaterialBottomTabNavigator();
const TabNavigator = ({ route }) => {
  const name = route.params.name;
  const displayName = route.params.displayName;
  return (
  <Tab.Navigator activeColor={colors.yellow} inactiveColor={colors.white} barStyle={{ backgroundColor: colors.black }}>
  <Tab.Screen
  options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
   name="Home" component={RestaurantPage} initialParams={{res: restaurants[name]}} />
  <Tab.Screen
   options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="food" size={26} color={color} />
          ),
        }}
   name="Specials" component={SpecialsScreen} initialParams={{specials: restaurants[name].specials}} />
  <Tab.Screen
   options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bookmark-outline" size={26} color={color} />
          ),
        }}
   name="Reserve" component={ReserveScreen} />
    <Tab.Screen
   options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={26} color={color} />
          ),
        }}
   name="Accounts" component={AccountsScreen} />
  </Tab.Navigator>
)}


const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName='WelcomeScreen'>
  <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
  <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
  <Stack.Screen name="Hatem" component={TabNavigator} initialParams={{name:"hatem", displayName: "Hatem"}} />
  <Stack.Screen name="Madona" component={TabNavigator} initialParams={{name:"madona", displayName: "Madona Cafe"}} />
  <Stack.Screen name="Caviche" component={TabNavigator} initialParams={{name:"caviche", displayName: "Caviche"}} />
  </Stack.Navigator>
)

function App(props) {
  return (
  <NavigationContainer>
   <StackNavigator />
   </NavigationContainer>

  );
}

export default App;