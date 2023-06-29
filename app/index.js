import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { COLORS, NFTData, FONTS, SIZES, assets } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary, padding: SIZES.font },
          headerShadowVisible: false,
          headerLeft: () => (
            <View>
              <Image
                source={assets.logo}
                resizeMode="contain"
                style={{
                  width: 90,
                  height: 25,
                }}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                width: 45,
                height: 45,
              }}
            >
              <Image
                source={assets.person01}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Image
                source={assets.badge}
                resizeMode="contain"
                style={{
                  position: 'absolute',
                  width: 15,
                  height: 15,
                  bottom: 0,
                  right: 0,
                }}
              />
            </View>
          ),
          headerTitle: '',
        }}
      />
      <FocusedStatusBar background={COLORS.primary} />

      <HomeHeader />

      <View style={{ flex: 1}}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => (
              <NFTCard {...item} onPress={() => router.push('NFT', { item })} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            top: 0,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              height: 300,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
