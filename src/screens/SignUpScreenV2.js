import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Animated,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

import slides from '../utils/mockData/signUpData';
import MainButton from '@components/MainButton';
import SignUpItem from '@components/SignUpItem';
import Paginator from '@components/Paginator';
import { COLORS } from '../constants/colors';

const SignUpScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleSubmit = values => {
    console.log('name is ', values);
  };

  const scrollTo = values => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('verificationComplete');
    }
  };

  ///////////
  const initialValues = {firstName: '', lastName: ''};
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('first name is required'),
    lastName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('first name is required'),
  });
  ////////////

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.containerInner}>
        <View>
          <Text style={styles.titleText}>
            {`Your Name\nand Last Name`}
          </Text>
          <Text style={styles.description}>
            {`Please enter your legal name that will\nbe associated with your account`}
          </Text>
        </View>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        resetForm,
        values,
        touched,
        errors,
      }) => (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputsBox}>
          <Input
            label="First Name"
            labelStyle={styles.labelStyle}
            placeholder="Your First Name"
            placeholderTextColor={COLORS.silver}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
          <Input
            label="Last Name"
            labelStyle={styles.labelStyle}
            placeholder="Your Last Name"
            placeholderTextColor={COLORS.silver}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
        </KeyboardAvoidingView>
      )}
    </Formik>


        {/* <FlatList
          horizontal
          keyExtractor={item => item.id}
          data={slides}
          renderItem={({ item }) => (
            <SignUpItem item={item} handleSubmit={handleSubmit} />
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          scrollEnabled={false}
        /> */}

        <View style={styles.footer}>
          <Paginator data={slides} currentSlide={currentIndex} />
          <MainButton title="Continue" onPress={scrollTo} />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  containerInner: {
    height: '100%',
    paddingHorizontal: 38,
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.titlesText,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 10,
  },
  description: {
    color: COLORS.ordinaryText,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
  labelStyle: {
    color: COLORS.iconGrey,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 5,
  },
  inputContainerStyle: {
    borderColor: COLORS.silver,
    borderWidth: 1,
    borderRadius: 5,
    height: 47,
    paddingLeft: 10,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingBottom: 72,
    
  },
  inputsBox: {
    backgroundColor: 'lightgrey',
  },
  containerStyle: {
    width: '100%',
    backgroundColor: 'green'
  }
});

export default SignUpScreen;
