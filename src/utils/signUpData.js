import React from 'react';
import NameStep from '../components/signUpSteps/NameStep';
import CountryStep from '../components/signUpSteps/CountryStep';
import EmailStep from '../components/signUpSteps/EmailStep';
import PasswordStep from '../components/signUpSteps/PasswordStep';
import MobileVerStep from '../components/signUpSteps/MobileVerStep';
import MobileCodeStep from '../components/signUpSteps/MobileCodeStep';

export default [
  // {
  //   id: '0',
  //   title: "Let's get started",
  //   description: 'Choose your country residence',
  //   component: <CountryStep />,
  // },
  {
    id: '1',
    title: 'Your Name\nand Last Name',
    description:
      'Please enter your legal name that will\nbe associated with your account',
    component: <NameStep />,
  },
  {
    id: '2',
    title: 'Your Email',
    description:
      'Please enter your email address that\nyou would like to use for GoldX',
    component: <EmailStep />,
  },
  {
    id: '3',
    title: 'Set up your\npassword',
    description:
      'Think about strong password that includes\nupper and lower characters, special characters and numbers',
    component: <PasswordStep />,
  },
  {
    id: '4',
    title: 'Email\nVerification',
    description:
      'Please check your email to verify your\naccount before completing\nthe registration process.',
    component: null,
  },
  {
    id: '5',
    title: 'Mobile\nVerification',
    description:
      'In order to protect the security of your account, we will send you a ONE time SMS message with a verification code to your number',
    component: <MobileVerStep />,
  },
  {
    id: '6',
    title: 'Mobile\nVerification',
    description: 'Check a message with a verification\ncode that we sent',
    component: <MobileCodeStep />,
  },
];
