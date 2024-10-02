import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import color from '../../common/color';

const DropDownBox = ({ onAccountSwitch }) => {
  const [accountData, setAccountData] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // Fetch stored accounts from AsyncStorage
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const storedAccounts = JSON.parse(await AsyncStorage.getItem('keypairs') || '[]');
        const formattedData = storedAccounts.map((account, index) => ({
          label: `Account ${index + 1}: ${account.publicKey}`,
          value: account.publicKey, // Use publicKey as the value for selection
        }));
        setAccountData(formattedData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: color.purple, borderWidth: 1.5 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={accountData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Account' : '...'}
        searchPlaceholder="Search account..."
        value={selectedAccount}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedAccount(item.value);
          setIsFocus(false);
          if (onAccountSwitch) {
            onAccountSwitch(item.value); // Call the parent function to handle account switching
          }
        }}
        textStyle={styles.dropdownItemTextStyle} // Apply style to dropdown items text
      />
    </View>
  );
};

export default DropDownBox;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP('90%'),
    height: heightPercentageToDP("8%"), // Adjust width for responsiveness
  },
  dropdown: {
    width: '100%',
    height: heightPercentageToDP('10%'),
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: color.purple, // Selected item text color
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    padding: 10,
    backgroundColor: color.GREY,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: color.purple,
  },
  dropdownItemTextStyle: {
    color: '#000', // Change this to any color you prefer, e.g., black for visibility
    fontSize: 16,
  },
});
