import React from 'react';
import NameStep from '../components/signUpSteps/NameStep';

export default [
  {
    id: '2',
    title: 'Your Name\nand Last Name',
    description:
      'Please enter your legal name that will be associated with your account',
    component: <NameStep />,
  },
  {
    id: '3',
    title: 'Your Email',
    description:
      'Please enter your email address that you would like to use for GoldX',
    component: <NameStep />,
  },
  {
    id: '4',
    title: 'Set up your\npassword',
    description:
      'Think about strong password that includes upper and lower characters, special characters and numbers',
    component: <NameStep />,
  },
  {
    id: '5',
    title: 'Mobile\nVerification',
    description:
      'In order to protect the security of your account, we will send you a ONE time SMS message with a verification code to your number',
    component: <NameStep />,
  },
  {
    id: '6',
    title: 'Mobile\nVerification',
    description: 'Check a message with a verification code that we sent',
    component: <NameStep />,
  },
];
