import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet, Button} from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
const screen = Dimensions.get('window')
const formatNumber = number =>`0${number}`.slice(-2)
const getRemaining = (time) =>{
  const mins = Math.floor(time/60);
  const secs = time -mins*60;
  return{mins:formatNumber(mins), secs:formatNumber(secs)}
}

const TimerScreen = (props)=>{
  const [remainingSecs, setRemainingSecs] = useState(1200);
  const [isActive, setIsActive] = useState(false); 
  const { mins, secs } = getRemaining(remainingSecs);
const [count, setCount] = useState(2); //For testing purposes
  const [isTimerOver, setIsTimeOver] = useState(false);
  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(20);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs - 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
     setCount(count => count + 1);
      if(count>1){
      setIsTimeOver(true)
      }
      clearInterval(interval);
    }
    if(remainingSecs==0){
      setIsTimeOver(true)
      reset()
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);
   
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.timer} >
          <Text style={styles.timerText} >{`${mins}:${secs}`}</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.toggle}>
         <Button  title={isActive? 'Pause': 'Start'} color='#9983EF'/>
        
         </TouchableOpacity>
         <View style ={ styles.buttons}>
         <Button style={styles.button}title='End session' color='#9983EF'/>
         
        {isTimerOver && <Button style={styles.button} title='Next'  onPress={() => props.navigation.navigate('Break')} color='#9983EF'/>}
        </View>
        </View>
      );
    }

  const styles = StyleSheet.create({

    timer:{
      borderRadius: screen.width/2,
      width:screen.width/2,
      height:screen.width/2,
      borderWidth:10,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center'
    },
    timerText:{
      fontSize:45
    },
    button:{
      paddingVertical:15,

    },
    buttons:{
      flexDirection:'row',
      justifyContent:"space-between",
      width:'40%'
    }
  })
  export default TimerScreen;