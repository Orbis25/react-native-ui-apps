import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from 'react-native-paper';
import {globalStyles} from '../styles/global';
import axios from 'axios';
import Axios from 'axios';

const NewClientScreen = ({navigation, route}) => {
  const {setRequestApi, client} = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [enterprise, setEnterprise] = useState('');
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  useEffect(() => {
    if (client !== undefined) {
      setName(client.name);
      setPhone(client.phone);
      setEmail(client.email);
      setEnterprise(client.enterprise);
    }
  }, []);

  const handleSubmit = async () => {
    if (!name.length || !phone.length || !email.length || !enterprise.length) {
      setAlertIsVisible(true);
    } else {
      const client = {name, phone, email, enterprise};
      try {
        const result = await axios.post('http://{YOU IP}/clients', client);
        if (result.status === 200 || result.status === 201) {
          setName('');
          setPhone('');
          setEmail('');
          setEnterprise('');

          navigation.navigate('home');
          setRequestApi(true);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleCloseAlert = () => {
    setAlertIsVisible(false);
  };

  const handleEdit = async () => {
    if (!name.length || !phone.length || !email.length || !enterprise.length) {
      setAlertIsVisible(true);
    } else {
      try {
        const _data = {name, phone, email, enterprise};
        await Axios.put(`http://{YOU IP}/clients/${client.id}`, _data);
        navigation.navigate('home');
        setRequestApi(true);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Headline style={globalStyles.title}>Añadir Nuevo Cliente</Headline>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          label="Nombre"
          value={name}
        />
        <TextInput
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
          label="Telefono"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          label="Correo"
        />
        <TextInput
          onChangeText={(text) => setEnterprise(text)}
          value={enterprise}
          style={styles.input}
          label="Nombre Empresa"
        />
        {client ? (
          <Button onPress={handleEdit} icon="pencil-circle" mode="contained">
            Actualizar cliente
          </Button>
        ) : (
          <Button onPress={handleSubmit} icon="pencil-circle" mode="contained">
            Guardar cliente
          </Button>
        )}
        <Portal>
          <Dialog visible={alertIsVisible}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={handleCloseAlert}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NewClientScreen;
