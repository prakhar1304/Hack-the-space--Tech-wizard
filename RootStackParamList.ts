import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameters for the navigation stack
type RootStackParamList = {
  Home: undefined;
  Detailed: {
    id: string;
    imageUrl: string;
    minBid: string;
  };
};

// Define the navigation prop type for the Detailed screen
type DetailedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detailed'>;
