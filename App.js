import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from 'react-redux'
import store from './store'

// screens
import { OnBoarding, Product, Order, Cart, Favourites, MainMenu } from "./screens";
// import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    // const [loaded] = useFonts({})

    // if(!loaded){
    //     return null;
    // }
    return (
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'OnBoarding'}
          >
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
};


export default () => {
    return <App />;
};