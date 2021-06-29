import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {COLORS} from '../../constants/colors';

const CoinsIcon = ({color = COLORS.iconGreen}) => (
  <Svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M23.4728 0.976832C22.0451 0.346939 20.1637 0 18.175 0C16.1864 0 14.3049 0.346939 12.8772 0.976832C11.2513 1.69417 10.3559 2.72361 10.3559 3.87549V10.44C9.60193 10.2026 8.80004 10.0742 7.96875 10.0742C3.57798 10.0742 0.00585938 13.6463 0.00585938 18.0371C0.00585938 22.4278 3.57798 26 7.96875 26C10.9894 26 13.6225 24.3093 14.9718 21.8245C15.9699 22.0352 17.0645 22.1458 18.175 22.1458C20.1637 22.1458 22.0451 21.799 23.4728 21.1691C25.0987 20.4517 25.9941 19.4223 25.9941 18.2704V3.87549C25.9941 2.72361 25.0987 1.69417 23.4728 0.976832ZM13.4921 2.37063C14.7303 1.82432 16.3934 1.52344 18.175 1.52344C19.9566 1.52344 21.6197 1.82432 22.8579 2.37063C23.8527 2.80953 24.4707 3.38621 24.4707 3.87549C24.4707 4.36477 23.8527 4.94139 22.8579 5.38035C21.6196 5.92665 19.9566 6.22753 18.175 6.22753C16.3934 6.22753 14.7303 5.92665 13.4921 5.38035C12.4973 4.94139 11.8793 4.36482 11.8793 3.87549C11.8793 3.38616 12.4973 2.80953 13.4921 2.37063ZM7.96869 24.4766C4.41795 24.4766 1.52925 21.5879 1.52925 18.0371C1.52925 14.4864 4.41795 11.5977 7.96869 11.5977C11.5194 11.5977 14.4081 14.4864 14.4081 18.0371C14.4081 21.5879 11.5194 24.4766 7.96869 24.4766ZM22.8579 19.7752C21.6196 20.3215 19.9566 20.6224 18.175 20.6224C17.2758 20.6224 16.3922 20.5433 15.5762 20.3917C15.7735 19.7555 15.8927 19.0852 15.9233 18.3924C16.6467 18.4944 17.4001 18.5471 18.1751 18.5471C20.1637 18.5471 22.0452 18.2002 23.4729 17.5703C23.8445 17.4063 24.1774 17.2259 24.4707 17.0316V18.2704C24.4707 18.7597 23.8527 19.3363 22.8579 19.7752ZM22.8579 16.1765C21.6197 16.7228 19.9566 17.0237 18.175 17.0237C17.3644 17.0237 16.5824 16.961 15.8415 16.839C15.7258 16.0753 15.5008 15.3471 15.1837 14.6703C16.1205 14.8523 17.1372 14.9484 18.175 14.9484C20.1637 14.9484 22.0451 14.6015 23.4728 13.9716C23.8444 13.8076 24.1774 13.6272 24.4707 13.4329V14.6716C24.4707 15.161 23.8527 15.7376 22.8579 16.1765ZM22.8579 12.5778C21.6196 13.1241 19.9566 13.425 18.175 13.425C16.5999 13.425 15.0964 13.1849 13.9157 12.748C13.3337 12.0944 12.6459 11.5369 11.8793 11.1029V9.83423C12.1726 10.0285 12.5056 10.209 12.8772 10.3729C14.3049 11.0028 16.1864 11.3497 18.175 11.3497C20.1637 11.3497 22.0451 11.0028 23.4728 10.3729C23.8444 10.2089 24.1774 10.0285 24.4707 9.83423V11.0729C24.4707 11.5622 23.8527 12.1388 22.8579 12.5778ZM22.8579 8.97902C21.6197 9.52533 19.9566 9.82621 18.175 9.82621C16.3934 9.82621 14.7303 9.52533 13.4921 8.97902C12.4973 8.54012 11.8793 7.9635 11.8793 7.47417V6.23545C12.1726 6.42974 12.5056 6.61017 12.8772 6.77414C14.3049 7.40404 16.1864 7.75093 18.175 7.75093C20.1637 7.75093 22.0451 7.40404 23.4728 6.77414C23.8444 6.61017 24.1774 6.42974 24.4707 6.23545V7.47417C24.4707 7.9635 23.8527 8.54012 22.8579 8.97902Z"
      fill={color}
    />
  </Svg>
);

export default CoinsIcon;
