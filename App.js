import React from 'react';
import {View} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';
import BreakScreen from './screens/BreakScreen';
import CongratulationsScreen from './screens/CongratulationsScreen'
import {AppRegistry} from 'react-native'
AppRegistry.registerComponent('RNNavigators', () => Drawer)
const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen , navigationOptions : {
    title: '20-20-20',
    headerTitleStyle :{
      textAlign:'center',
      alignSelf: 'center',
     width:'90%'},
  }},
  Timer : { screen: TimerScreen,navigationOptions : {
        title: 'Timer', 
    
   }},
   Break : {screen: BreakScreen, navigationOptions : {
    title: 'Break',}},
  Congratulations: {screen: CongratulationsScreen,navigationOptions : {
    title: 'Congratulations',}}
});
const App = createAppContainer(AppNavigator);
export default App;