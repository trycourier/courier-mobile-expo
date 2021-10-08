import * as SplashScreen from 'expo-splash-screen';

const DELAY = 100;

export default function () {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, DELAY);
}
