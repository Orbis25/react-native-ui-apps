import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {List, Headline, Button, FAB} from 'react-native-paper';
import {globalStyles} from '../styles/global';

const HomeScreen = ({navigation}) => {
  const [clients, setClients] = useState([]);
  const [requestApi, setRequestApi] = useState(true);

  useEffect(() => {
    if (requestApi) {
      (async () => await getClients())();
      setRequestApi(false);
    }
  }, [requestApi]);

  const getClients = async () => {
    try {
      const result = await Axios.get('http://{YOU IP}/clients');
      setClients(result.data);
    } catch (error) {
      alert(error);
    }
  };

  const ClientItem = (client) => {
    const handleDetail = () => {
      const params = {client,setRequestApi}
      navigation.navigate('Detail', params);
    };
    return (
      <List.Item
        title={client.name}
        onPress={handleDetail}
        description={client.enterprise}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <Button
        icon="plus-circle"
        onPress={() => {
          navigation.navigate('NewClient', {setRequestApi});
        }}>
        Nuevo cliente
      </Button>
      <Headline style={globalStyles.title}>
        {clients.length > 0 ? 'Clientes' : 'No hay clientes'}
      </Headline>
      <FlatList
        data={clients}
        renderItem={({item}) => <ClientItem {...item} />}
        keyExtractor={({id}) => id.toString()}
      />
      <FAB
        onPress={() => {
          navigation.navigate('NewClient', {setRequestApi});
        }}
        icon="plus"
        style={styles.fab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20,
  },
});

export default HomeScreen;
