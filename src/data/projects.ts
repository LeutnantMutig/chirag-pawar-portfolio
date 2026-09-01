export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl?: string;
  status?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'AI-Generated vs Human-Written Text Detection',
    category: 'NLP / MACHINE LEARNING',
    description:
      'End-to-end NLP pipeline that classifies AI-generated vs. human-written text. Combines TF-IDF, stylometric analysis, POS tagging, and SBERT embeddings into hybrid features, then trains Logistic Regression, XGBoost, and RoBERTa in an ensemble, deployed as an interactive Streamlit app with confidence scoring.',
    githubUrl: 'https://github.com/LeutnantMutig/AI-vs-Human-Text-Detection',
    tech: ['Python', 'RoBERTa', 'Sentence-BERT', 'XGBoost', 'Logistic Regression', 'TF-IDF', 'Streamlit'],
    metrics: [
      { label: 'DATASET', value: '~50,000 samples' },
      { label: 'ACCURACY', value: '89\u201390% (ensemble)' },
      { label: 'INTERFACE', value: 'Streamlit App' },
    ],
  },
  {
    number: '02',
    title: 'Derma Skin AI',
    category: 'COMPUTER VISION / DEEP LEARNING',
    description:
      'AI-assisted skin-condition classification system covering 10 dermatological conditions from medical images. Trains an EfficientNet-B1 model with preprocessing and augmentation, served through a FastAPI backend with patient registration, authentication, and automated report generation.',
    githubUrl: 'https://github.com/LeutnantMutig/Derma-Skin-AI',
    tech: ['TensorFlow', 'EfficientNet-B1', 'OpenCV', 'FastAPI', 'Python', 'SQLite'],
    metrics: [
      { label: 'DATASET', value: '8,400+ images' },
      { label: 'CONDITIONS', value: '10 classified' },
      { label: 'BACKEND', value: 'FastAPI + SQLite' },
    ],
  },
  {
    number: '03',
    title: 'AI Placement Portal',
    category: 'AI / WEB APPLICATION',
    description:
      'Django-based campus recruitment platform with role-based access for students, recruiters, and admins. Uses NLP-based similarity matching to recommend suitable candidates, backed by JWT authentication and Google OAuth for secure sign-in.',
    githubUrl: 'https://github.com/LeutnantMutig/Ai-placement-portal',
    tech: ['Django', 'Python', 'NLP', 'JWT', 'Google OAuth', 'SQLite'],
    metrics: [
      { label: 'ROLES', value: 'Student / Recruiter / Admin' },
      { label: 'MATCHING', value: 'NLP Similarity' },
      { label: 'AUTH', value: 'JWT + Google OAuth' },
    ],
  },
  {
    number: '04',
    title: 'OfflineExamGuard',
    category: 'COMPUTER VISION / REAL-TIME AI',
    description:
      'Real-time exam surveillance system that detects suspicious behavior \u2014 face-orientation changes, hand gestures, and phone use \u2014 using MediaPipe, YOLOv8, and Dlib for face verification, gaze tracking, and anomaly detection. Flask interface handles live monitoring, alerts, and offline reporting.',
    status: 'PRIVATE / DEMO AVAILABLE ON REQUEST',
    tech: ['OpenCV', 'MediaPipe', 'YOLOv8', 'Dlib', 'TensorFlow', 'Flask', 'SQLite'],
    metrics: [
      { label: 'DETECTION', value: 'Face, Gaze, Gesture' },
      { label: 'MODE', value: 'Real-Time / Offline' },
      { label: 'ALERTS', value: 'Live Session Monitoring' },
    ],
  },
  {
    number: '05',
    title: 'ROBI \u2014 Smart Companion AI Chatbot',
    category: 'AI CHATBOT / PYTHON',
    description:
      'Intelligent chatbot with natural language understanding and real-time response generation, built on Flask. Integrates third-party AI services via REST APIs with SQLite-backed query logging for personalized responses.',
    githubUrl: 'https://github.com/LeutnantMutig/ROBI-CHATBOT',
    tech: ['Python', 'Flask', 'REST APIs', 'SQLite', 'JSON'],
    metrics: [
      { label: 'ENGINE', value: 'External AI Services' },
      { label: 'STORAGE', value: 'SQLite Query Log' },
      { label: 'INTERFACE', value: 'Flask + Tkinter' },
    ],
  },
  {
    number: '06',
    title: 'Trekking Club Application',
    category: 'FULL-STACK / COMPUTER VISION',
    description:
      'Trekking companion app with GPS tracking, user management, and emergency SOS alerts via the Fast2SMS API. Adds image-based plant/health detection with OpenCV alongside a wearable emergency-belt concept for remote-area safety.',
    githubUrl: 'https://github.com/LeutnantMutig/Trekking-Club-Application',
    tech: ['Flask', 'SQLAlchemy', 'OpenCV', 'JavaScript', 'Fast2SMS API'],
    metrics: [
      { label: 'SAFETY', value: 'GPS + SOS Alerts' },
      { label: 'VISION', value: 'Plant/Health Detection' },
      { label: 'CONCEPT', value: 'Wearable Emergency Belt' },
    ],
  },
];
