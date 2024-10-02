import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import color from '../common/color';


const { width, height } = Dimensions.get('window');

const MyTextInput = ({ ...props }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  const onPressShow = () => {
    console.log("press");
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        {...props}
        secureTextEntry={secureTextEntry}
      />
      {props.secureTextEntry ? (
        <TouchableOpacity onPress={onPressShow} activeOpacity={0.4}>
          <Text style={styles.hide}>{secureTextEntry ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    height: height * 0.06, // 6% of screen height
    width: '90%', // 90% of screen width
    paddingHorizontal: width * 0.05, // 5% of screen width
    justifyContent: 'space-between',
    marginBottom: height * 0.02, // 2% of screen height
    backgroundColor: color.Offwhite,
    
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center', // Center the container horizontally

    shadowColor: color.Obsidian,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 2.54,
    elevation: 2,
    
  },

  inputText: {
    flex: 1, // Takes up available space in the row
    height: '100%',
    fontSize: width * 0.04, // Font size relative to screen width
    fontWeight: '500',
    color: color.Obsidian,
    
    // width:"80%"
  },
  
  hide: {
    fontSize: width * 0.035, // Font size relative to screen width
    color: color.Obsidian,
    // backgroundColor:"green"
  },
});
