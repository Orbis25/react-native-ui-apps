import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import HomeScreen from './src/views/Home';
import NewScreen from './src/views/NewClient';
import DetailScreen from './src/views/Detail';
import TopBar from './src/components/ui/Bar';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
          }}
          initialRouteName="home">
          <Stack.Screen
            name="home"
            options={{
              title: 'Inicio',
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="NewClient"
            options={{
              title: 'Nuevo',
            }}
            component={NewScreen}
          />

          <Stack.Screen
            name="Detail"
            options={{
              title: 'Detalle',
            }}
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
