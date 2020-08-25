import React from 'react';
import {View, Text} from 'react-native';

const NotFound = () => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#313745', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', color: '#E5ECF4', fontSize: 25}}>
        NOT FOUND , PLEASE TYPE A VALID LOCATION ⛅
      </Text>
      <Text style={{textAlign: 'center', color: '#E5ECF4', fontSize: 25}}>
        {'\n'}⬅ SWIPE BACK PAGE{' '}
      </Text>
    </View>
  );
};

export default NotFound;
