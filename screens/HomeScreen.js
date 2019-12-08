import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.h1}>New screen session</Text>
        <Card style={styles.card}><Text>Californian optometrist Jeffrey
Anshel designed the 20-20-20 rule 
as an easy reminder to take breaks
and prevent eye strain.
</Text>
</Card >
<Card style={styles.card}>
<Text >When following the rule, a person 
takes a 20-second break from
looking at a screen every 20 minutes.
During the break, the person focuses
on an object 20 feet away, which
relaxes the eye muscles.</Text>
</Card>
<TouchableOpacity style ={styles.button}>
        <Button 
          title="Start"
          onPress={() => this.props.navigation.navigate('Timer')} color='#9983EF'/>
     </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    h1:{
      fontSize:30,
      fontWeight: 'bold',
      marginVertical:20
    },
card:{
    margin:10,
    marginHorizontal:30,
    borderRadius:10
},
button:{
    marginVertical: 20
  }

})


export default HomeScreen;