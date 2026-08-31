export interface JourneyStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

export const journey: JourneyStop[] = [
  {
    id: '01',
    year: '2026',
    title: 'FINAL SEMESTER COMPLETED',
    organization: 'P. P. SAVANI UNIVERSITY',
    description:
      'Final-semester results declared and passed. Formal degree certificate expected in approximately 3\u20134 months. Open to full-time AI/ML and Software Engineering roles.',
  },
  {
    id: '02',
    year: '2025 \u2013 2026',
    title: 'AI/ML PROJECT DEVELOPMENT',
    organization: 'INDEPENDENT / COURSERA',
    description:
      'Built 6 end-to-end AI/ML projects spanning NLP, computer vision, and full-stack development, alongside advanced technical certifications in blockchain and big data.',
  },
  {
    id: '03',
    year: 'SEP 2025',
    title: 'STUDENT COORDINATOR, ARTIFAX AI',
    organization: 'P. P. SAVANI UNIVERSITY',
    description:
      'Recognized for stellar service and leadership as Student Coordinator for Artifax AI, organized during the Engineer\u2019s Day Celebration.',
  },
  {
    id: '04',
    year: 'JUN 2024',
    title: 'DATA SCIENCE & ML INTERN',
    organization: 'YBI FOUNDATION',
    description:
      'Completed end-to-end ML workflows \u2014 data cleaning, feature engineering, model training, and evaluation \u2014 on real-world datasets, comparing classifier performance across supervised learning pipelines.',
  },
  {
    id: '05',
    year: '2023',
    title: 'PYTHON & DATA FOUNDATIONS',
    organization: 'UNIVERSITY OF MICHIGAN / GOOGLE',
    description:
      'Built core Python and data-handling foundations through certified coursework, from programming fundamentals to retrieving, processing, and visualizing real data.',
  },
  {
    id: '06',
    year: '2022',
    title: 'B.TECH CSE (AI/ML) BEGINS',
    organization: 'P. P. SAVANI UNIVERSITY',
    description: 'Started a Bachelor of Technology in Computer Science & Engineering, specializing in Artificial Intelligence and Machine Learning.',
  },
];
