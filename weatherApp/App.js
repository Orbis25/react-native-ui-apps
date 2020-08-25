import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Form from './src/components/Form.jsx';
import Result from './src/components/Result.jsx';
import NotFound from './src/components/NotFound';

const apiKey = 'ecab1e0d3c7e2d8261ca4965585921ae';

const App = () => {
  const [location, setLocation] = useState({
    city: 'nagua',
    country: 'DO',
  });

  const [result, setResult] = useState(null);

  const [consultation, setConsultation] = useState(false);

  useEffect(() => {
    getInformation();
  }, []);

  useEffect(() => {
    getInformation();
  }, [consultation]);

  const getInformation = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${apiKey}`,
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        alert('Error city not found 🤷‍♂️🤷‍♂️');
        setResult(null);
      })
      .then((result) => {
        setResult(result);
      })
      .catch(() => {
        setResult(null);
      });
  };

  return (
    <>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Form
            location={location}
            setLocation={setLocation}
            setConsultation={setConsultation}
            consultation={consultation}
          />
        </View>
        <View animation="sfadeInlideInDown" iterationCount={1} key="2">
          {result ? <Result result={result} /> : <NotFound />}
        </View>
      </ViewPager>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
