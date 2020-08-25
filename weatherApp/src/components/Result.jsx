import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//day
import SunSvg from '../../assets/svg/sun.svg';
import CloudsSvg from '../../assets/svg/clouds.svg';
import RainSvg from '../../assets/svg/Rain.svg';
import SnowSvg from '../../assets/svg/Snow.svg';
import StormSvg from '../../assets/svg/Storm.svg';

//night
import MoonSvg from '../../assets/svg/clearMoon.svg';
import ClodsMoonSvg from '../../assets/svg/cloudsMoon.svg';

const Result = ({result}) => {
  const {name, main, sys, wind, weather} = result;

  const isDay = new Date().getHours() < 18;
  const colorBg = isDay ? '#E5ECF4' : '#313745';
  const colorText = isDay ? '#313745' : '#E5ECF4';

  const daySvg = () => {
    switch (String(weather.main).toUpperCase()) {
      case 'CLEAR':
        return <SunSvg width={200} height={300} />;
      case 'CLOUDS':
        return <CloudsSvg width={200} height={300} />;
      case 'RAIN':
        return <RainSvg width={200} height={300} />;
      case 'SNOW':
        return <SnowSvg width={200} height={300} />;
      case 'EXTREME':
        return <StormSvg width={200} height={300} />;
      default:
        return <SunSvg width={200} height={300} />;
    }
  };

  const nightSvg = () => {
    switch (String(weather.main).toUpperCase()) {
      case 'CLEAR':
        return <MoonSvg width={200} height={300} />;
      case 'CLOUDS':
        return <ClodsMoonSvg width={200} height={300} />;
      case 'RAIN':
        return <RainSvg width={200} height={300} />;
      case 'SNOW':
        return <SnowSvg width={200} height={300} />;
      case 'EXTREME':
        return <StormSvg width={200} height={300} />;
      default:
        return <MoonSvg width={200} height={300} />;
    }
  };

  const tempFormated = () => {
    const kelvil = 273.15;
    return parseInt(main.temp - kelvil);
  };

  const sunriseFormated = () => {
    const date = new Date(sys.sunrise);

    return `${date.getHours()}:${date.getMinutes()}`;
  };

  const getHours = () => {
    const time = new Date();
    return time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const getWikedName = () => {
    const time = new Date();

    switch (time.getDay()) {
      case 1:
        return 'MONDAY';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Sunday';
    }
  };

  const getGreetings = () => {
    const hours = new Date().getHours();
    return hours < 12
      ? 'Good morning'
      : hours < 18
      ? 'Good Afternoon'
      : 'Good Night';
  };

  return (
    <View style={{...styles.container, backgroundColor: colorBg}}>
      <ScrollView>
        <View style={styles.textCityContainer}>
          <Text style={{...styles.textCity, color: colorText}}>{name}</Text>
          <Text style={{...styles.textDate, color: colorText}}>
            {getWikedName().toUpperCase()} {getHours()}
          </Text>
        </View>
        <View style={styles.svgContainer}>{isDay ? daySvg() : nightSvg()}</View>
        <View style={styles.svgContainer}>
          <Text style={{...styles.textTemp, color: colorText}}>
            {tempFormated()}
            <Text>&#x2103;</Text>
          </Text>
          <Text style={{...styles.textGreetings, color: colorText}}>
            {getGreetings()}
          </Text>
        </View>
        <View style={styles.resumeContainer}>
          <View style={styles.resumeTextContainer}>
            <Text style={{color: colorText}}>SUNRISE</Text>
            <Text style={{...styles.textSunrise, color: colorText}}>
              {sunriseFormated()}
            </Text>
          </View>
          <View style={styles.resumeTextContainer}>
            <Text style={{textAlign: 'center', color: colorText}}>WIND</Text>
            <Text style={{...styles.textWind, color: colorText}}>
              {wind.speed}m/s
            </Text>
          </View>
          <View style={styles.resumeTextContainer}>
            <Text style={{color: colorText}}>TEMPERATURE</Text>
            <Text style={{...styles.textWind, color: colorText}}>
              {tempFormated()}
              <Text>&#x2103;</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCityContainer: {
    marginTop: 60,
  },
  textCity: {
    textAlign: 'center',
    fontFamily: 'Alata',
    fontSize: 40,
  },
  textDate: {
    textAlign: 'center',
    fontFamily: 'Alata',
  },
  svgContainer: {
    alignSelf: 'center',
  },
  textTemp: {
    fontSize: 60,
  },
  textGreetings: {
    textAlign: 'center',
    marginTop: 10,
  },
  resumeContainer: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resumeTextContainer: {
    margin: 15,
  },
  textSunrise: {
    textAlign: 'center',
    fontSize: 25,
  },
  textWind: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Result;
