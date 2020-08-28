import React from 'react';
import {View, Text, StyleSheet, Alert, LogBox} from 'react-native';
import {globalStyles} from '../styles/global';
import {Headline, Button, FAB} from 'react-native-paper';
import Axios from 'axios';

LogBox.ignoreAllLogs(true);

const DetailScreen = ({navigation, route}) => {
  const {client, setRequestApi} = route.params;
  const {name, email, phone, enterprise, id} = client;

  const handleRemoveConfirm = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Si lo eliminas no se puede recuperar',
      [
        {
          text: 'Si Eliminar',
          onPress: () => {
            remove();
          },
          F,
        },
        {text: 'Cancelar'},
      ],
    );
  };

  const remove = async () => {
    try {
      await Axios.delete(`http://{YOU IP}/clients/${id}`);
      navigation.navigate('home');
      setRequestApi(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = () => {
    navigation.navigate('NewClient', {client, setRequestApi});
  };

  return (
    <View style={globalStyles.container}>
      <Headline style={globalStyles.title}>{name}</Headline>
      <Text style={styles.text}>Empresa : {enterprise}</Text>
      <Text style={styles.text}>Correo : {email}</Text>
      <Text style={styles.text}>Telefono : {phone}</Text>
      <Button
        onPress={handleRemoveConfirm}
        style={{backgroundColor: 'red'}}
        mode="contained"
        icon="cancel">
        Eliminar
      </Button>
      <FAB onPress={handleEdit} style={styles.fab} icon="plus" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    right: 0,
    margin: 20,
    bottom: 20,
  },
});

export default DetailScreen;
