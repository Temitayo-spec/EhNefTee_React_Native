import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { COLORS, SIZES, SHADOWS, assets } from '../../constants';
import { CircleButton, RectButton } from './Button';
import { ETHPrice, NFTTile, SubInfo } from '../home/SubInfo';

const NFTCard = (props) => {
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        position: 'relative',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
          position: 'relative',
        }}
      >
        <Image
          source={props.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}
      >
        <NFTTile
          title={props.name}
          subtitle={props.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ETHPrice price={props.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => router.push(`/details/${props.id}`)}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
