import { StatusBar } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme';
import { Loading } from '@components/Loading';
import { StatisticsScreen } from '@screens/statistics';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <StatisticsScreen />
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