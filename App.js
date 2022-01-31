import React,{useEffect} from "react";
import {Text, View} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import DataFetching from "./android/app/src/components/DataFetching";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab=createBottomTabNavigator();
const App =()=> {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={{

                headerStyle:{
                    backgroundColor:'#2196F3',
                },
                headerTintColor:'white',
                headerStatusBarHeight:30,
                headerTitleStyle:{

                    fontStyle:'normal',
                    fontSize:25,


                }
            }

            }>
                <Tab.Screen name="Home" component={HomeScreen} options={{headerTitle:'All Items',tabBarIcon: ({ color,size }) =>(
                    <MaterialCommunityIcons  name='home'  color={'#2196F3'}  size={30} />
                    ),
                }}
                />
                <Tab.Screen name="Wishlist" component={WishlistScreen} options={{tabBarIcon: ({ color,size }) =>(
                        <MaterialCommunityIcons  name='heart'  color={'#2196F3'}  size={30} />
                    ),}}/>
                <Tab.Screen name="Account" component={AccountScreen} options={{tabBarIcon: ({ color,size }) =>(
                        <MaterialCommunityIcons  name='account'  color={'#2196F3'}  size={30} />
                    ),}}/>
                <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon: ({ color,size }) =>(
                        <MaterialCommunityIcons  name='cart'  color={'#2196F3'}  size={30} />
                    ),}}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ({ color,size }) =>(
                        <MaterialCommunityIcons  name='magnify'  color={'#2196F3'}  size={30} />
                    ),}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )

}
function HomeScreen() {
    return (
        <View>

            <DataFetching/>
        </View>

    )
}
function WishlistScreen(){
    return(
        <View>
            <Text>SORRY</Text>
        </View>
    )
}
function AccountScreen(){
    return(
        <View>
            <Text>NOTHING</Text>
        </View>
    )
}
function CartScreen(){
    return(
        <View>
            <Text>HELLO</Text>
        </View>
    )
}
function SearchScreen(){
    return(
        <View>
            <Text>BBYE</Text>
        </View>
    )
}

export default App
