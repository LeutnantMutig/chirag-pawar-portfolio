export interface SkillBlock {
  title: string;
  badge: string;
  stat: string;
  description: string;
  items: string[];
  colSpan: string;
}

export const skillBlocks: SkillBlock[] = [
  {
    title: 'AI / MACHINE LEARNING',
    badge: 'CORE FOCUS',
    stat: '6 PROJECTS SHIPPED',
    description:
      'Applied machine learning, deep learning, NLP, computer vision, and generative AI across production-style projects \u2014 from ensemble text classifiers to real-time vision pipelines.',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'Prompt Engineering', 'Transfer Learning', 'CNNs'],
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'PYTHON ENGINEERING',
    badge: 'FULL STACK',
    stat: 'FLASK / DJANGO / FASTAPI',
    description:
      'Building and shipping Python web services \u2014 REST APIs, authentication, and data pipelines \u2014 behind the models to make them usable products.',
    items: ['Python', 'Django', 'Flask', 'FastAPI', 'REST APIs', 'Pandas', 'NumPy', 'SQLAlchemy'],
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'COMPUTER VISION',
    badge: 'REAL-TIME',
    stat: 'FACE / GAZE / GESTURE',
    description:
      'Real-time vision pipelines for detection, tracking, and classification \u2014 from dermatology image classifiers to exam-monitoring anomaly detection.',
    items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Dlib', 'PIL'],
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI / DATA TOOLING',
    badge: 'MODEL LAYER',
    stat: 'TENSORFLOW / PYTORCH',
    description:
      'Training, evaluating, and deploying models with the standard modern ML toolchain, plus integrating hosted LLM APIs where they fit better than a custom model.',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenAI API', 'Gemini API'],
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DATABASES',
    badge: 'PERSISTENCE',
    stat: 'SQL & NOSQL',
    description: 'Comfortable across relational and document stores for everything from query logging to patient records.',
    items: ['MySQL', 'SQLite', 'MongoDB', 'SQLAlchemy'],
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'OTHER DEVELOPMENT',
    badge: 'FOUNDATIONS',
    stat: 'WEB & VERSION CONTROL',
    description: 'The frontend and tooling layer that ties projects together \u2014 from dashboards to source control.',
    items: ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'],
    colSpan: 'lg:col-span-7',
  },
];

export interface LearningSkill {
  name: string;
  note: string;
}

export const learningSkills: LearningSkill[] = [
  { name: 'RAG', note: 'Learning' },
  { name: 'LangChain', note: 'Learning' },
  { name: 'Docker', note: 'Learning' },
];
