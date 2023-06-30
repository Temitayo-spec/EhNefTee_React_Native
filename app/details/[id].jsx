import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../../constants';
import { HomeComponents } from '../../components';
import { Buttons } from '../../components';

const NFTDetails = () => {
  const { NFTTile, SubInfo, ETHPrice } = HomeComponents;
  return (
    <View>
      <Text>NFTDetails</Text>
      
    </View>
  );
};

export default NFTDetails;
