import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image, Clipboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import color from '../common/color';
import { FONTFAMILY } from '../common/theme';
import PopUpAnimation from '../components/Animation/PopUpAnimation';
import MyTextInput from '../components/MyTextInput';
import { BlurView } from '@react-native-community/blur';

const CreateAccount: React.FC = () => {
  const navigation = useNavigation();
  const [showAnimation, setShowAnimation] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for ActivityIndicator
  const [keypairs, setKeypairs] = useState<{ publicKey: string; secret: string }[]>([]);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState<number | null>(null);
  const [fundingMessage, setFundingMessage] = useState<string>('');

  const storeKeys = async (newKeypair: { publicKey: string; secret: string }) => {
    try {
      const existingKeypairs = JSON.parse(await AsyncStorage.getItem('keypairs') || '[]');
      existingKeypairs.push(newKeypair);
      await AsyncStorage.setItem('keypairs', JSON.stringify(existingKeypairs));
      setKeypairs(existingKeypairs);
      setSelectedAccountIndex(existingKeypairs.length - 1);
    } catch (error) {
      console.error('Error storing keys:', error);
    }
  };

  const retrieveKeys = async () => {
    try {
      const existingKeypairs = JSON.parse(await AsyncStorage.getItem('keypairs') || '[]');
      setKeypairs(existingKeypairs);
      if (existingKeypairs.length > 0) {
        setSelectedAccountIndex(0);
      }
    } catch (error) {
      console.error('Error retrieving keys:', error);
    }
  };

  useEffect(() => {
    retrieveKeys();
  }, []);

  const generateKeypair = async () => {
    try {
      const response = await fetch('http://{ip}:3001/create-keypair', { // put  ur ip  her
        method: 'POST',
      });
      const data = await response.json();
      await storeKeys({ publicKey: data.publicKey, secret: data.secret });
      console.log("success");
    } catch (error) {
      console.error('Error generating keypair:', error);
    }
  };

  const fundAccount = async () => {
    if (selectedAccountIndex === null) return;

    const publicKeyToFund = keypairs[selectedAccountIndex]?.publicKey;
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://{ip}:3001/fund-account', { // put  ur  ip ther
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicKey: publicKeyToFund }),
      });
      const data = await response.json();
      setShowAnimation(true);

      setTimeout(() => {
        setShowAnimation(false);
        navigation.navigate('BottomNavigator');
      }, 2000);
      setFundingMessage(data.message);
    } catch (error) {
      console.error('Error funding account:', error);
      setFundingMessage('Error funding account.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const switchAccount = (index: number) => {
    setSelectedAccountIndex(index);
  };

  const removeAccount = async (index: number) => {
    Alert.alert(
      'Remove Account',
      'Are you sure you want to remove this account?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            const updatedKeypairs = keypairs.filter((_, i) => i !== index);
            await AsyncStorage.setItem('keypairs', JSON.stringify(updatedKeypairs));
            setKeypairs(updatedKeypairs);
            if (selectedAccountIndex === index) {
              setSelectedAccountIndex(updatedKeypairs.length > 0 ? Math.min(0, updatedKeypairs.length - 1) : null);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <View style={styles.container}>

      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : null}

      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/topVector.png")}
          style={styles.topImage}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.heading}>Create Account</Text>


          <View style = {{}}>
               
          <MyTextInput
                            style={styles.inputText}
                          
                            placeholder="Enter Usser name"
                            placeholderTextColor={color.BLACK}
                        />

                        <MyTextInput
                            style={styles.inputText}
                            
                            placeholder="Password"
                            secureTextEntry
                            placeholderTextColor={color.BLACK}
                        />
       
          </View>

        <TouchableOpacity style={styles.button} onPress={generateKeypair}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {selectedAccountIndex !== null && keypairs[selectedAccountIndex] && (
          <View style={styles.keysContainer}>
            <View style={styles.keyRow}>
              <Text style={styles.keyText}>Public Key: {keypairs[selectedAccountIndex].publicKey}</Text>
              <TouchableOpacity onPress={() => copyToClipboard(keypairs[selectedAccountIndex].publicKey)}>
                <Text style={styles.copyText}>Copy</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keyRow}>
              <Text style={styles.keyText}>Secret Key: {keypairs[selectedAccountIndex].secret}</Text>
              <TouchableOpacity onPress={() => copyToClipboard(keypairs[selectedAccountIndex].secret)}>
                <Text style={styles.copyText}>Copy</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={fundAccount} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>Fund Account</Text>
              )}
            </TouchableOpacity>

          </View>
        )}

        {/* <Text style={styles.messageText}>{fundingMessage}</Text> */}

        {/* {keypairs.map((_, index) => (
          <View key={index} style={styles.accountContainer}>
            <TouchableOpacity
              style={styles.switchButton}
              onPress={() => switchAccount(index)}
            >
              <Text style={styles.buttonText}>Switch to Account {index + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeAccount(index)}
            >
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))} */}

        {/* <TouchableOpacity onPress={() => { navigation.navigate("BottomNavigator") }}>
          <View style={styles.Navigation}>
            <Text style={[styles.buttonText , {color:color.WHITE}]}>HOME SCREEN</Text>
          </View>
        </TouchableOpacity> */}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  subContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  topImage: {
    width: "100%",
    height: 130,
  },
  topImageContainer: {},
  heading: {
    fontSize: 28,
    color: color.mainApp,
    marginBottom: 20,
    fontFamily: FONTFAMILY.poppins_regular,
    textAlign: 'center',
  },
  LottieAnimation: {
    flex: 1,
  },
  keysContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  keyRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  keyText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  copyText: {
    color: '#00FFCC',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#00FFCC',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  switchButton: {
    flex: 1,
    backgroundColor: '#005f5f',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#ff3b3b',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  messageText: {
    color: color.GREY,
    marginBottom: 20,
    textAlign: 'center',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Navigation: {
    backgroundColor:color.mainApp,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    position:"absolute",
    bottom:-100,
     left:10,
    width:360,
    height:50,
    justifyContent:"center"
  },

  inputText: {
    color: color.Obsidian,
    // backgroundColor:"red",
    flex:1
},
blur_view: {
  borderRadius: 10,
  overflow: 'hidden',
  padding: 10,
  marginBottom: 20,
},
});

export default CreateAccount;
