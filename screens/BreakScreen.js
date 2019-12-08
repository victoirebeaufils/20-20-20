import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet, Button} from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Card from '../components/Card'
//import Sound from 'react-native-sound';


const screen = Dimensions.get('window')
const formatNumber = number =>`0${number}`.slice(-2)
const getRemaining = (time) =>{
  const mins = Math.floor(time/60);
  const secs = time -mins*60;
  return{mins:formatNumber(mins), secs:formatNumber(secs)}
}

const BreakScreen = (props)=>{

     /* const  sound = new Sound('./notification-sound.mp3', Sound.MAIN_BUNDLE, (error)=>{
            if(error){
                console.log("The song wont playy")
            }
        })
*/
  const [remainingSecs, setRemainingSecs] = useState(20);
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
      clearInterval(interval);
    }
    if(remainingSecs==0){
       
      setIsTimeOver(true)
      reset()
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);
   //handleSound(()=>{
   // sound.play()
   //})
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Card style={styles.card}><Text>You've exposed your eyes to a
screen for 20 minutes now, it's
time to take a break!
</Text>
</Card >
<Card style={styles.card}>
<Text>Look at least 20 feet (6 meters) 
away for 20 seconds</Text>
</Card>
          <TouchableOpacity style={styles.timer} >
          <Text style={styles.timerText} >{`${mins}:${secs}`}</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.toggle}>
         <Button  title={isActive? 'Pause': 'Start'} color='#9983EF'/>
         </TouchableOpacity>
         {isTimerOver && <Button title='Next'  onPress={() => props.navigation.navigate('Congratulations')} color='#9983EF'/>}
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
        margin: 20
      },
      card:{
        margin:10,
        marginHorizontal:30,
        borderRadius:10
    },
})


export default BreakScreen;