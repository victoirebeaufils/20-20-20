import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../components/Card'
import { TouchableOpacity } from 'react-native-gesture-handler';
class CongratulationsScreen extends React.Component {
    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.h1}>New screen session</Text>
        <Card style={styles.card}><Text>And... Voila!
</Text>
</Card >
<Card style={styles.card}>
<Text >You did it, congratulations!</Text>
</Card>
<TouchableOpacity style ={styles.button}>
        <Button 
          title="Start new timer"
          onPress={() => this.props.navigation.navigate('Home')} color='#9983EF'/>
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


export default CongratulationsScreen;