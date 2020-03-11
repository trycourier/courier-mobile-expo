import { SplashScreen } from 'expo';

const DELAY = 100;

export default function () {
  SplashScreen.preventAutoHide();
  setTimeout(SplashScreen.hide, DELAY);
}
