import React from "react";
import{ View, Text, TextInput, TouchableOpacity, StyleSheet, image} from "react-native";
import { SafeAreaView } from "react-native-web";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
        source={{ uri:'https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg',}}
        style={styles.logo}
        />
      <View style={styles.inputView}>  
        <TextInput
          style={styles.inputText}
          placeholder="Login"
          placeholderTextColor="#003f5c"
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}></Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alingItem: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBotton: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    alingmItems: 'center',
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
    flex: 1,
    borderColor: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  bacground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc'
  }, 
});

export default LoginScreen;