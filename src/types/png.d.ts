import { ImageSourcePropType } from 'react-native';

declare module '*.png' {
  export const value: ImageSourcePropType
}
