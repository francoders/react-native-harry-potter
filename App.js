import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer >
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
