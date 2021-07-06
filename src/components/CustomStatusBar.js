import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={{backgroundColor, paddingBottom: StatusBar.currentHeight}}>
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} translucent {...props} />
    </SafeAreaView>
  </View>
);

export default CustomStatusBar;
