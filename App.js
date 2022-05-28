import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor='#111' barStyle={'light-content'} />
      <NavigationContainer >
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
