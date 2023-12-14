import {Image, View} from 'react-native';

const OnBoard = () => {
  return (
    <View style={{backgroundColor: 'pink'}}>
      <Image source={require('../../assets/delivery.png')} />
      <Image source={require('../../assets/Blobs.png')} />
    </View>
  );
};

export default OnBoard;
