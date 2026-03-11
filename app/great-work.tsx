import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { stats } from '../data/great-work';
import { router } from 'expo-router';

export default function GreatWork(){
  // Animated values
  const iconScale = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(16)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleTranslateY = useRef(new Animated.Value(16)).current;
  const cardAnims = useRef(stats.map(() => ({
    opacity: new Animated.Value(0),
    translateX: new Animated.Value(-20),
  }))).current;
  const buttonsOpacity = useRef(new Animated.Value(0)).current;
  const buttonsTranslateY = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    // Icon pop-in
    Animated.spring(iconScale, {
      toValue: 1,
      tension: 50,
      friction: 5,
      useNativeDriver: true,
    }).start();

    // Title fade up
    Animated.parallel([
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 400,
        delay: 150,
        useNativeDriver: true,
      }),
      Animated.timing(titleTranslateY, {
        toValue: 0,
        duration: 400,
        delay: 150,
        useNativeDriver: true,
      }),
    ]).start();

    // Subtitle fade up
    Animated.parallel([
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 400,
        delay: 250,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleTranslateY, {
        toValue: 0,
        duration: 400,
        delay: 250,
        useNativeDriver: true,
      }),
    ]).start();

    // Cards staggered slide in
    cardAnims.forEach((anim, i) => {
      Animated.parallel([
        Animated.timing(anim.opacity, {
          toValue: 1,
          duration: 400,
          delay: 350 + i * 80,
          useNativeDriver: true,
        }),
        Animated.timing(anim.translateX, {
          toValue: 0,
          duration: 400,
          delay: 350 + i * 80,
          useNativeDriver: true,
        }),
      ]).start();
    });

    // Buttons fade up
    Animated.parallel([
      Animated.timing(buttonsOpacity, {
        toValue: 1,
        duration: 400,
        delay: 600,
        useNativeDriver: true,
      }),
      Animated.timing(buttonsTranslateY, {
        toValue: 0,
        duration: 400,
        delay: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F0" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* App Icon */}
        <Animated.View style={[styles.iconWrap, { transform: [{ scale: iconScale }] }]}>
          <Text style={styles.iconEmoji}>🎆</Text>
        </Animated.View>

        {/* Title */}
        <Animated.Text
          style={[
            styles.title,
            { opacity: titleOpacity, transform: [{ translateY: titleTranslateY }] },
          ]}
        >
          Great work!
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          style={[
            styles.subtitle,
            { opacity: subtitleOpacity, transform: [{ translateY: subtitleTranslateY }] },
          ]}
        >
          Bạn đã hoàn thành nhiệm vụ ngày hôm nay
        </Animated.Text>

        {/* Stat Cards */}
        <View style={styles.cardsWrap}>
          {stats.map((stat, i) => (
            <Animated.View
              key={i}
              style={[
                styles.card,
                {
                  opacity: cardAnims[i].opacity,
                  transform: [{ translateX: cardAnims[i].translateX }],
                },
              ]}
            >
              <View style={[styles.iconCircle, { backgroundColor: stat.bg }]}>
                <Text style={styles.statIcon}>{stat.icon}</Text>
              </View>
              <View style={styles.cardTextWrap}>
                <Text style={styles.cardValue}>{stat.value}</Text>
                <Text style={styles.cardLabel}>{stat.label}</Text>
              </View>
            </Animated.View>
          ))}
        </View>

        {/* Buttons */}
        <Animated.View
          style={[
            styles.buttonsWrap,
            { opacity: buttonsOpacity, transform: [{ translateY: buttonsTranslateY }] },
          ]}
        >
          <TouchableOpacity
            style={styles.btnOutline}
            activeOpacity={0.7}
            onPress={() => { router.replace('/progress-review')}}
          >
            <Text style={styles.btnOutlineText}>Xem lại quá trình học tập</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnFilled}
            activeOpacity={0.8}
            onPress={() => { router.replace("/(tabs)") }}
          >
            <Text style={styles.btnFilledText}>Quay về trang chủ</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F0',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
  },

  // Icon
  iconWrap: {
    width: 80,
    height: 80,
    borderRadius: 22,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  iconEmoji: {
    fontSize: 40,
  },

  // Title & Subtitle
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '900',
    color: '#1a1a1a',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#888888',
    textAlign: 'center',
  },

  // Cards
  cardsWrap: {
    width: '100%',
    marginTop: 28,
    gap: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
    fontSize: 22,
  },
  cardTextWrap: {
    flexDirection: 'column',
    gap: 2,
  },
  cardValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#999999',
  },

  // Buttons
  buttonsWrap: {
    width: '100%',
    marginTop: 32,
    gap: 12,
  },
  btnOutline: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  btnOutlineText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: -0.2,
  },
  btnFilled: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 50,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFilledText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.2,
  },
});
