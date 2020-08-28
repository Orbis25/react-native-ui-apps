import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Bar = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('NewClient');
  };
  return (
    <Button icon="plus-circle" color="#FFF" onPress={handlePress}>
      cliente
    </Button>
  );
};

export default Bar;
