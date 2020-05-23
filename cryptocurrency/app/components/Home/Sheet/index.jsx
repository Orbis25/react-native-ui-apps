import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';
const Header = () => {
  const [money, setMoney] = useState('');
  const [cryptomoney, setCryptoMoney] = useState('');
  const [cryptomoneys, setCryptoMoneys] = useState([]);
  const [resultApi, setResultApi] = useState('');

  useEffect(() => {
    const url =
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const fetchToApi = async () => {
      const result = await axios.get(url);
      setCryptoMoneys(result.data.Data);
    };
    fetchToApi();
  }, []);

  const getMoney = money => {
    setMoney(money);
  };

  const getCrypto = crytoMoney => {
    setCryptoMoney(crytoMoney);
  };

  const getResults = async () => {
    if (money !== '' && cryptomoney !== '') {
      const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptomoney},ETH&tsyms=${money}`;
      const result = await axios.get(url);
      setResultApi(result.data[cryptomoney][money]);
    } else {
      alert('Debe seleccionar ambos campos');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#005691'}}>
      <View style={styles.headerImage}>
        <Image
          style={styles.image}
          resizeMode="center"
          source={require('../../../../assets/bitcoin_.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.title}>COTIZADOR</Text>
            <View>
              <Text style={styles.label}>Moneda</Text>
              <Picker
                selectedValue={money}
                style={{height: 50, width: '100%'}}
                onValueChange={itemValue => getMoney(itemValue)}>
                <Picker.Item label="Seleccione" value="" />
                <Picker.Item label="DOLAR" value="USD" />
                <Picker.Item label="PESO DOMINICANO" value="DOP" />
                <Picker.Item label="PESO MEXICANO" value="MXN" />
                <Picker.Item label="EURO" value="EUR" />
              </Picker>
            </View>
            <View>
              <Text style={styles.label}>Criptomoneda</Text>
              <Picker
                selectedValue={cryptomoney}
                style={{height: 50, width: '100%'}}
                onValueChange={itemValue => getCrypto(itemValue)}>
                <Picker.Item label="Seleccione" value="" />
                {cryptomoneys.map(item => (
                  <Picker.Item
                    key={item.CoinInfo.Id}
                    label={item.CoinInfo.FullName}
                    value={item.CoinInfo.Name}
                  />
                ))}
              </Picker>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <InfoResult result={resultApi} money={money} />
              {cryptomoneys !== '' ? (
                <TouchableOpacity onPress={getResults} style={styles.btn}>
                  <Text style={styles.btnText}>Cotizar</Text>
                </TouchableOpacity>
              ) : (
                <Text>Espere un momento...</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const InfoResult = ({result, money}) => {
  return (
    <>
      {result !== '' && <Text style={styles.label}>Resultado </Text>}
      <Text style={styles.label}>
        {result !== '' && money} {result}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 140,
    borderBottomLeftRadius: 140,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    height: '50%',
    backgroundColor: '#005691',
  },
  content: {
    marginHorizontal: 30,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#005691',
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
  },
  btnText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Header;
