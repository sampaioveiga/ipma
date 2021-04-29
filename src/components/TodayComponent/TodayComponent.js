import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import WeatherIconComponent from '../WeatherIconComponent/WeatherIconComponent';
import WindIconComponent from '../WindIconComponent/WindIconComponent';
import styles, { ThemeColors } from './styles';

import districts_islands from '../../utils/districts_islands.json';

export default function TodayComponent(props) {
  const {
    locationID,
    day,
    colorScheme,
  } = props;
  const window = useWindowDimensions();
  const location = districts_islands.data.filter(o => o.globalIdLocal === locationID);

  return (
    <View style={[styles.centeredView, ThemeColors.container[colorScheme]]}>
      <Text style={[ { fontSize: window.width*.2 }, ThemeColors.textColor[colorScheme]]}>{location[0]['local']}</Text>
      <View style={styles.rainContainer}>
        <WeatherIconComponent
          forecast={day['idWeatherType']}
          rainChance={day['precipitaProb']}
          colorScheme={colorScheme}
          size={window.width*.16}
        />
    
        <View style={styles.centeredView}>
          <Text style={[{ fontSize: window.width*.12 }, ThemeColors.textColor[colorScheme]]}>{day['tMax']}°</Text>
          <Text style={[{ fontSize: window.width*.12 }, ThemeColors.textColor[colorScheme]]}>{day['tMin']}°</Text>
        </View>

        <WindIconComponent
          forecast={day['classWindSpeed']}
          colorScheme={colorScheme}
          size={window.width*.15}
        />
        
      </View>
      
      
    </View>
  );
}