import React from 'react';
import { View, Text, Image } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const Header = (props) => {
  return (
    <View style={[s.p1, s.alignSelfCenter]}>
      <Image
        source={require('../assets/dog.png')}
        style={{ width: 50, height: 50}}
      />
    </View>
  );
};

export default Header;
