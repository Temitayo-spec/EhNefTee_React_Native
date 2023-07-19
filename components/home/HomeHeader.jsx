import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, SIZES, assets } from '../../constants';

const HomeHeader = ({ handleSearch }) => {
  return (
    <View
      style={{
        height: 'auto',
        backgroundColor: COLORS.primary,
      }}
    >
      <View
        style={{
          marginVertical: SIZES.large,
          marginHorizontal: SIZES.font,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.regular,
            marginVertical: SIZES.font / 2,
          }}
        >
          Hello, Temitayo 👋
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.large,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece for you
        </Text>
      </View>
      <View>
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
