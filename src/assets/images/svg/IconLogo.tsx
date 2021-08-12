import React from 'react'
import Svg, { Color, Path } from 'react-native-svg'

import { Colors } from '@/constants'

export type IconLogoProps = {
  color?: Color
}

export const IconLogo: React.FC<IconLogoProps> = ({ color = Colors.white }) => (
  <Svg width='74' height='14' viewBox='0 0 74 14' fill='none'>
  <Path
    d='M12.8163 11.043C12.8163 10.2764 12.8163 9.6558 12.8365 9.18123C12.8567 8.63364 13.039 8.4146 13.5249 8.34159C13.7274 8.30509 13.8691 8.28683 14.0108 8.28683C14.1323 8.28683 14.2335 8.21382 14.2335 8.12256C14.2335 7.99478 14.1121 7.97653 13.8691 7.97653C13.2819 7.97653 12.3506 8.01304 11.7837 8.01304C11.2572 8.01304 9.9817 7.97653 9.05034 7.97653C8.80738 7.97653 8.66565 7.99478 8.66565 8.12256C8.66565 8.21382 8.78713 8.28683 8.94911 8.28683C9.19207 8.28683 9.49577 8.30509 9.6375 8.34159C10.2044 8.48761 10.3866 8.65189 10.4069 9.18123C10.4271 9.6558 10.4271 10.2399 10.4271 11.0065V12.4302C10.4271 12.704 10.3461 12.8683 10.0829 12.9778C9.65775 13.1421 9.2933 13.1421 8.82763 13.1421C5.02122 13.1421 2.63209 10.7145 2.63209 7.37419C2.63209 5.47588 3.27999 4.32594 4.27208 3.59583C5.50714 2.70143 6.7422 2.68318 7.71405 2.68318C9.71849 2.68318 11.0548 3.37679 11.5812 3.86962C12.0469 4.30769 12.1481 4.80052 12.1886 5.14733C12.2088 5.2751 12.2493 5.34811 12.3708 5.34811C12.5126 5.34811 12.6138 5.23859 12.6138 5.0013C12.6138 3.04824 12.7353 2.62842 12.7353 2.44589C12.7353 2.33638 12.6948 2.28162 12.4923 2.26336C12.0671 2.24511 11.4395 2.15385 11.075 2.09909C10.7106 2.02608 9.15157 1.84355 7.91652 1.84355C6.41825 1.84355 4.81875 1.95306 3.11801 2.84746C1.47802 3.70535 0 5.43937 0 7.92177C0 12.2112 3.86715 14 8.24047 14C9.6375 14 11.399 13.8357 12.5935 13.3064C12.8163 13.1969 12.8163 13.1786 12.8163 12.7588V11.043Z'
    fill={color}
  />
  <Path
    d='M23.1463 14C27.7423 14 30.6173 11.2073 30.6173 7.64798C30.6173 4.08866 27.8233 1.84355 23.3285 1.84355C17.9226 1.84355 15.8574 5.2751 15.8574 7.92177C15.8574 10.678 17.9631 14 23.1463 14ZM23.8751 13.1604C20.5142 13.1604 18.4895 10.6415 18.4895 7.4472C18.4895 3.61408 20.8179 2.66493 22.8021 2.66493C25.6771 2.66493 27.965 4.78227 27.965 8.21382C27.965 12.631 25.1304 13.1604 23.8751 13.1604Z'
    fill={color}
  />
  <Path
    d='M36.3244 6.5528C36.3244 4.19817 36.3244 3.7601 36.3649 3.26728C36.4054 2.71969 36.5471 2.50065 37.0331 2.42764C37.2355 2.39113 37.519 2.37288 37.7215 2.37288C37.9442 2.37288 38.0454 2.31812 38.0454 2.2086C38.0454 2.09909 37.9239 2.06258 37.6607 2.06258C36.9723 2.06258 35.5145 2.09909 35.0894 2.09909C34.6034 2.09909 33.4696 2.06258 32.6395 2.06258C32.3763 2.06258 32.2548 2.09909 32.2548 2.2086C32.2548 2.31812 32.356 2.37288 32.5585 2.37288C32.7812 2.37288 33.0039 2.39113 33.1457 2.42764C33.7126 2.57366 33.8746 2.73794 33.915 3.26728C33.9353 3.7601 33.9353 4.19817 33.9353 6.5528V9.29074C33.9353 10.7145 33.9353 11.9374 33.8543 12.5945C33.7936 13.0508 33.6923 13.3429 33.3279 13.4159C33.1659 13.4524 32.9634 13.4707 32.7002 13.4707C32.4775 13.4707 32.4168 13.5619 32.4168 13.6349C32.4168 13.7445 32.5383 13.7992 32.761 13.7992C33.1254 13.7992 33.5709 13.781 33.996 13.7627C34.4212 13.7627 34.8059 13.7445 35.0084 13.7445C35.7373 13.7445 36.4864 13.7627 37.3773 13.781C38.2681 13.8175 39.3007 13.8357 40.5763 13.8357C41.5076 13.8357 41.5886 13.7627 41.7101 13.4159C41.8518 12.9596 41.9733 11.8096 41.9733 11.6271C41.9733 11.4446 41.9328 11.2803 41.8113 11.2803C41.6696 11.2803 41.6291 11.3716 41.6088 11.5176C41.5684 11.8096 41.3861 12.2477 41.1634 12.4485C40.718 12.8683 40.0296 12.8866 39.078 12.8866C37.7012 12.8866 37.0128 12.7953 36.7091 12.558C36.3244 12.266 36.3244 11.2803 36.3244 9.29074V6.5528Z'
    fill={color}
  />
  <Path
    d='M45.1066 9.29074C45.1066 10.7145 45.1067 11.9374 45.0257 12.5945C44.9649 13.0508 44.8637 13.3429 44.4992 13.4159C44.3373 13.4524 44.1348 13.4707 43.8716 13.4707C43.6489 13.4707 43.5881 13.5619 43.5881 13.6349C43.5881 13.7445 43.7096 13.7992 43.9323 13.7992C44.2968 13.7992 44.7422 13.781 45.1674 13.7627C45.5926 13.7627 45.9773 13.7445 46.1797 13.7445C46.6252 13.7445 47.2731 13.781 47.9817 13.8357C48.6903 13.8722 49.4597 13.927 50.1076 13.927C53.3876 13.927 55.2706 12.8318 56.0804 12.1017C57.0928 11.2073 58.0241 9.72881 58.0241 7.77575C58.0241 5.9322 57.2345 4.63625 56.3437 3.83312C54.4 2.06258 51.4034 2.06258 49.1763 2.06258C48.1032 2.06258 46.8276 2.09909 46.281 2.09909C45.7748 2.09909 44.641 2.06258 43.7096 2.06258C43.4464 2.06258 43.3047 2.09909 43.3047 2.2086C43.3047 2.31812 43.4262 2.37288 43.6084 2.37288C43.8716 2.37288 44.1753 2.39113 44.317 2.42764C44.8839 2.57366 45.0459 2.73794 45.0864 3.26728C45.1067 3.7601 45.1066 4.19817 45.1066 6.5528V9.29074ZM47.4958 6.31552C47.4958 5.09257 47.4958 3.81486 47.516 3.28553C47.516 3.103 47.5768 3.02999 47.7387 2.97523C47.8805 2.90222 48.4676 2.86571 48.8321 2.86571C50.2291 2.86571 52.1728 3.02999 53.8128 4.3442C54.6024 4.9648 55.473 6.2425 55.473 8.21382C55.473 9.82008 55.1086 11.2073 53.9545 12.0652C52.8814 12.8683 51.6869 13.1239 50.0671 13.1239C48.6701 13.1239 47.9615 12.7953 47.7387 12.5033C47.597 12.339 47.5565 11.7914 47.5363 11.4081C47.516 11.0978 47.4958 9.91134 47.4958 8.26858V6.31552Z'
    fill={color}
  />
  <Path
    d='M70.6795 1.8618C71.2869 1.05867 71.6919 0.547587 72.1575 0.43807C72.441 0.365058 72.684 0.328553 72.8864 0.328553C73.0889 0.328553 73.2104 0.273794 73.2104 0.164276C73.2104 0.0547581 73.0686 0 72.8459 0C72.0968 0 71.2667 0.0547581 70.8617 0.0547581C70.4771 0.0547581 69.6267 0 68.8371 0C68.5536 0 68.4119 0.0547581 68.4119 0.164276C68.4119 0.292046 68.5334 0.328553 68.6548 0.328553C68.8168 0.328553 69.1003 0.328553 69.3027 0.383311C69.5052 0.43807 69.6469 0.584094 69.6469 0.711864C69.6469 0.857888 69.5862 1.14993 69.4242 1.40548C69.1205 1.91656 67.2578 4.45372 66.6706 5.25684C65.881 4.01565 64.9699 2.68318 64.0993 1.22295C63.9778 1.02216 63.8968 0.803129 63.8968 0.693611C63.8968 0.584094 63.9576 0.456323 64.1398 0.401565C64.3018 0.346806 64.565 0.328553 64.6865 0.328553C64.8687 0.328553 64.9902 0.292046 64.9902 0.164276C64.9902 0.0365054 64.8687 0 64.5852 0C63.8361 0 62.7023 0.0547581 62.4188 0.0547581C61.4672 0.0547581 59.8272 0 59.3413 0C59.0781 0 58.9364 0.0365054 58.9364 0.146023C58.9364 0.273794 59.0173 0.328553 59.1388 0.328553C59.3413 0.328553 59.6652 0.365058 59.9892 0.456323C60.6978 0.657106 61.1838 1.09518 61.6697 1.82529L65.1521 7.02738L61.285 12.0104C60.5966 12.8866 60.2119 13.2334 59.6247 13.3794C59.321 13.4524 59.0173 13.4707 58.8756 13.4707C58.7136 13.4707 58.5922 13.5254 58.5922 13.6349C58.5922 13.7445 58.6934 13.7992 58.8959 13.7992H59.2401C59.564 13.7992 60.5561 13.7445 60.9408 13.7445C61.447 13.7445 62.7225 13.7992 62.844 13.7992H63.2084C63.4716 13.7992 63.6134 13.7627 63.6134 13.6349C63.6134 13.5254 63.4919 13.4707 63.3704 13.4707C63.2084 13.4707 63.0262 13.4524 62.9047 13.4342C62.7225 13.3977 62.5403 13.2881 62.52 13.1239C62.4998 12.9231 62.601 12.6493 62.8035 12.3572L65.8 7.99478C66.7314 9.36375 67.8855 11.1708 68.999 12.9596C69.1408 13.1969 69.0598 13.3611 68.9585 13.3794C68.7763 13.4159 68.6751 13.4707 68.6751 13.5802C68.6751 13.708 68.8371 13.7445 69.3635 13.7627C70.9225 13.7992 72.522 13.7992 73.0079 13.7992H73.6153C73.838 13.7992 74 13.7445 74 13.6167C74 13.5072 73.8785 13.4707 73.7368 13.4707C73.5546 13.4707 73.3116 13.4524 72.9674 13.3611C72.441 13.2151 72.1373 12.9961 71.7931 12.5945C71.2869 12.0104 68.0069 7.06389 67.359 6.16949L70.6795 1.8618Z'
    fill={color}
  />
</Svg>
)