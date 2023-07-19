import { View, Text } from 'react-native';
import { useState } from 'react';
import { ETHPrice, NFTTile } from '../home/SubInfo';
import { COLORS, FONTS, SIZES } from '../../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTile
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <ETHPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.secondary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text
              onPress={() => {
                if (readMore) {
                  setText(data.description.slice(0, 100));
                } else {
                  setText(data.description);
                }
                setReadMore(!readMore);
              }}
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
