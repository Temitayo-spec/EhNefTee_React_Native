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
import {
  COLORS,
  SIZES,
  SHADOWS,
  assets,
  FONTS,
  NFTData,
} from '../../constants';
import {
  FocusedStatusBar,
  HomeComponents,
  DetailsBid,
  Buttons,
  DetailsDesc,
} from '../../components';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router';

const { NFTTile, SubInfo, ETHPrice } = HomeComponents;
const { RectButton, CircleButton } = Buttons;

const DetailsHeader = ({ data }) => {
  const router = useRouter();
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => router.back()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const NFTDetails = () => {
  const params = useSearchParams();

  const data = NFTData.find((item) => item.id === params.id);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen options={{ headerShown: false }} />
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default NFTDetails;
