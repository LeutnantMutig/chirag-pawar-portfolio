export interface LeadershipAchievement {
  title: string;
  role: string;
  organization: string;
  event: string;
  date: string;
  description: string;
  image: string;
}

// Moved out of certifications.ts — this is a leadership/recognition credential,
// not a course certification, so it gets its own section and data shape.
export const leadership: LeadershipAchievement = {
  title: 'Artifax AI',
  role: 'Student Coordinator',
  organization: 'P. P. Savani University',
  event: 'Engineer\u2019s Day Celebration',
  date: 'September 16, 2025',
  description:
    'Recognized with a Certificate of Appreciation for stellar service and leadership as Student Coordinator for Artifax AI \u2014 organizing the event, coordinating fellow students, and representing the Institute of Computer Science & Application throughout the celebration.',
  image: '/certificates/artifax.jpg',
};
