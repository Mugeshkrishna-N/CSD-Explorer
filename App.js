// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import AdventureScreen from'./AdventureScreen';
import AssociationHome from './AssosciationHome';
import csdaofficebearers from './CSDAofficebearers';
import CodingclubHome from './CodingClubhome';
import cdccofficebearers from './CDCCofficebearers';
import arvrcontrol from './arvrhome';
import news from './newsletter';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Adventure" component={AdventureScreen} />
        <Stack.Screen name="Association" component={AssociationHome} />
        <Stack.Screen name="csdaoffice" component={csdaofficebearers} />
        <Stack.Screen name="Codingclub" component={CodingclubHome} />
        <Stack.Screen name="cdccoffice" component={cdccofficebearers} />
        <Stack.Screen name="arvrcontrol" component={arvrcontrol} />
        <Stack.Screen name="newsletter" component={news} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
