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
import { COMPLETED_DAYS, SKILLS, STATS, WEEK_DAYS } from '../data/progress-review';
import { router } from 'expo-router';

const ProgressBar: React.FC<{ progress: number; delay: number }> = ({ progress, delay }) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 800,
      delay,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={barStyles.track}>
      <Animated.View
        style={[
          barStyles.fill,
          {
            width: widthAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const barStyles = StyleSheet.create({
  track: {
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 10,
  },
  fill: {
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 4,
  },
});

export default function ProgressScreen() {
  const headerAnim = useRef(new Animated.Value(0)).current;
  const statsAnim = useRef(new Animated.Value(0)).current;
  const skillsAnim = useRef(new Animated.Value(0)).current;
  const weekAnim = useRef(new Animated.Value(0)).current;
  const btnAnim = useRef(new Animated.Value(0)).current;

  const hourProgress = Math.min((STATS.totalHours / STATS.targetHours) * 100, 100);

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(headerAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(statsAnim,  { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(skillsAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(weekAnim,   { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(btnAnim,    { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const fadeSlide = (anim: Animated.Value) => ({
    opacity: anim,
    transform: [
      {
        translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F0" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Title ─────────────────────────────────────────────── */}
        <Animated.Text style={[styles.pageTitle, fadeSlide(headerAnim)]}>
          Quá trình học tập
        </Animated.Text>

        {/* ── Stats Row ─────────────────────────────────────────── */}
        <Animated.View style={[styles.statsRow, fadeSlide(statsAnim)]}>
          {/* Total Hours */}
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{STATS.totalHours}</Text>
            <Text style={styles.statLabel}>Tổng số giờ</Text>
            <ProgressBar progress={hourProgress} delay={300} />
            <Text style={styles.statMeta}>Mục tiêu: {STATS.targetHours} giờ</Text>
          </View>

          {/* Streak */}
          <View style={styles.statCard}>
            <View style={styles.streakRow}>
              <Text style={styles.statValue}>{STATS.streak}</Text>
              <Text style={styles.fireEmoji}>🔥</Text>
            </View>
            <Text style={styles.statLabel}>Ngày giữ chuỗi</Text>
            <Text style={styles.streakMeta}>Chuỗi dài nhất: {STATS.longestStreak}</Text>
          </View>
        </Animated.View>

        {/* ── Skill Analysis ────────────────────────────────────── */}
        <Animated.View style={fadeSlide(skillsAnim)}>
          <Text style={styles.sectionTitle}>Phân tích kỹ năng</Text>

          {SKILLS.map((skill, i) => (
            <View key={skill.name} style={styles.skillCard}>
              <View style={styles.skillHeader}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillLevel}>{skill.level}</Text>
              </View>
              <Text style={styles.skillDesc}>{skill.description}</Text>
              <ProgressBar progress={skill.progress} delay={450 + i * 100} />
              <Text style={styles.skillPercent}>Hoàn thành {skill.progress}%</Text>
            </View>
          ))}
        </Animated.View>

        {/* ── Weekly Tracker ────────────────────────────────────── */}
        <Animated.View style={[styles.weekCard, fadeSlide(weekAnim)]}>
          <Text style={styles.weekTitle}>Tuần này</Text>
          <View style={styles.weekGrid}>
            {WEEK_DAYS.map((day, i) => {
              const done = COMPLETED_DAYS[i];
              const isToday = i === 4;
              return (
                <View key={day} style={styles.dayCol}>
                  <Text style={styles.dayLabel}>{day}</Text>
                  <View
                    style={[
                      styles.dayCircle,
                      done && !isToday && styles.dayCircleDone,
                      isToday && styles.dayCircleToday,
                      !done && !isToday && styles.dayCircleEmpty,
                    ]}
                  >
                    {(done || isToday) && (
                      <Text style={[styles.checkMark, isToday && styles.checkMarkToday]}>
                        ✓
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </Animated.View>

        {/* ── Button ────────────────────────────────────────────── */}
        <Animated.View style={[styles.btnWrap, fadeSlide(btnAnim)]}>
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
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 36,
  },

  // Title
  pageTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: -0.5,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
    marginTop: 2,
  },
  statMeta: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 6,
    fontWeight: '500',
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  fireEmoji: {
    fontSize: 22,
    marginTop: -2,
  },
  streakMeta: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 12,
    fontWeight: '500',
  },

  // Section title
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: 14,
    letterSpacing: -0.3,
  },

  // Skill cards
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  skillLevel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  skillDesc: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
    fontWeight: '500',
  },
  skillPercent: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 6,
  },

  // Weekly card
  weekCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  weekTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 14,
  },
  weekGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayCol: {
    alignItems: 'center',
    gap: 6,
  },
  dayLabel: {
    fontSize: 10,
    color: '#999',
    fontWeight: '600',
    textAlign: 'center',
  },
  dayCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleDone: {
    backgroundColor: '#D6F5E0',
  },
  dayCircleToday: {
    backgroundColor: '#1a1a1a',
  },
  dayCircleEmpty: {
    backgroundColor: '#EDEDED',
  },
  checkMark: {
    fontSize: 15,
    color: '#34C759',
    fontWeight: '700',
  },
  checkMarkToday: {
    color: '#fff',
  },

  // Button
  btnWrap: {
    width: '100%',
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
    color: '#fff',
    letterSpacing: -0.2,
  },
});
