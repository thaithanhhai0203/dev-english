export const STATS = {
  totalHours: 12,
  targetHours: 200,
  streak: 7,
  longestStreak: 14,
};

interface SkillItem {
  name: string;
  level: string;
  description: string;
  progress: number;
}

export const SKILLS: SkillItem[] = [
  { name: 'Listening', level: 'Intermediate', description: 'Hiểu các tech talks', progress: 0 },
  { name: 'Speaking', level: 'Intermediate', description: 'Tự tin nói trong meeting', progress: 0 },
  { name: 'Writing', level: 'Intermediate', description: 'Thông điệp rõ ràng và chuyên nghiệp', progress: 0 },
];

export const WEEK_DAYS = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
export const COMPLETED_DAYS = [true, true, true, true, true, false, false];