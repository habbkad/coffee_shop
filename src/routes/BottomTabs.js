import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import History from "../screens/History";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        headerStyle: {
          backgroundColor: "black",
        },
        // headerTitleStyle: {
        //   color: "white",
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home-sharp" size={24} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="history" size={24} color="white" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => {
            return <Feather name="shopping-cart" size={24} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="person" size={24} color="white" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
