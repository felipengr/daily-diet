import { StatusBar } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { HomeScreen } from '@screens/home';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <HomeScreen />
      ) : (
        <Loading />
      )}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
    </ThemeProvider>
  );
}