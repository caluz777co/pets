import React from 'react';
import { View, Image, Text } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const Card = (props) => {
  return (
    <View style={[s.bgLight, s.m2]}>
      <View style={[s.card, s.shadow]}>
        <View style={[s.cardHeader, s.bgPrimary]}>
          <Text style={[s.textLight]}>Golden Retrieve</Text>
        </View>
        <View style={[s.body]}>
          <View style={[s.containerFluid]}>
            <View style={[s.row]}>
              <View style={[s.col4, s.p1]}>
                <Image
                  source={require('../assets/dog.png')}
                  style={{ width: 100, height: 100}}
                />
              </View>
              <View style={[s.col8]}>
                <View style={[s.border, s.mb2, s.mt2]}>
                  <Text>Tobby</Text>
                </View>
                <View style={[s.border]}>
                  <Text>es adorable</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

