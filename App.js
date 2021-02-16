/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header'
import Card from './src/components/Card'

const App: () => React$Node = () => {

  const [listPets, setPets] = React.useState([]);

  const getPets = async () => {
    try {
      let response = await fetch('url_services', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      );
      let json = await response.json();
      setPets(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getPets();
  },[])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Header />
            {listPets.forEach((pet)=> 
              <Card
                raza={pet.raza}
                imagen={pet.imagen}
                nombre={pet.nombre}
                informacion={pet.informacion}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
