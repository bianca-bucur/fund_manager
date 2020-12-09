
import { PixelRatio } from 'react-native';

const normalizeFontSize = (size) => {
  if (PixelRatio.get() >= 2) {
    return (size/PixelRatio.getFontScale());
  }
  else return size;
}

export { normalizeFontSize };