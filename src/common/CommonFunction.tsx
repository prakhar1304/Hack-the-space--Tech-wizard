import { Alert, Linking, Share } from 'react-native';
import { deleteUser } from '../redux/slices/user';


export const logout = (dispatch: any) => {
  Alert.alert('Logout', 'Are you sure you want to logout?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: async () => {
        dispatch(deleteUser());
        try {
          Alert.alert('Success', 'You have been logged out successfully.');
        } catch (error) {
          console.error('Error setting first install status:', error);
        }
      }
    },
  ]);
}

export const RateUs = () => {
  const handleRateApp = () => {
    Linking.openURL('https://...');
  };
  return handleRateApp;
};


export const shareApp = () => {
  Share.share({message:'msg....'})
    .then((result) => console.log(result))
    .catch((errorMsg) => console.log(errorMsg));
};




