import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/BackGround.jpg')} resizeMode="cover" style={styles.image}>

        <RegistrationScreen/>
        {/*<LoginScreen/>*/}
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'green',
    fontSize:25,
    fontWeight:'bold',
    textAlign:"center"
  },
  image:{
    flex: 1,
    width:"100%",
    height:"100%",
    justifyContent:"center",

  }

});
