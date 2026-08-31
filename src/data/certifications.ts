export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  category: string;
  image: string;
  verifyUrl?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [  {
    id: 'genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    platform: 'Coursera',
    date: 'Aug 18, 2025',
    category: 'Generative AI',
    image: '/certificates/genai.jpg',
    verifyUrl: 'https://coursera.org/verify/RKVEKUGBW656',
  },
  {
    id: 'cv-ibm',
    title: 'Introduction to Computer Vision and Image Processing',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'Oct 16, 2024',
    category: 'Computer Vision',
    image: '/certificates/cv-ibm.jpg',
    verifyUrl: 'https://coursera.org/verify/ZXOU237XA2SJ',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Specialization (4 Courses)',
    issuer: 'University at Buffalo',
    platform: 'Coursera',
    date: 'Feb 18, 2026',
    category: 'Blockchain',
    image: '/certificates/blockchain.jpg',
    verifyUrl: 'https://coursera.org/verify/specialization/QPB8MFXGNTNR',
  },
  {
    id: 'bigdata',
    title: 'Big Data Emerging Technologies',
    issuer: 'Yonsei University',
    platform: 'Coursera',
    date: 'Aug 18, 2025',
    category: 'Big Data',
    image: '/certificates/bigdata.jpg',
    verifyUrl: 'https://coursera.org/verify/U2JZ66G11GIG',
  },
  {
    id: 'pycapstone',
    title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    date: 'Oct 13, 2023',
    category: 'Python',
    image: '/certificates/pycapstone.jpg',
    verifyUrl: 'https://coursera.org/verify/ZUU8R5ZZAVP3',
  },
  {
    id: 'pystruct',
    title: 'Python Data Structures',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    date: 'Oct 14, 2023',
    category: 'Python',
    image: '/certificates/pystruct.jpg',
    verifyUrl: 'https://coursera.org/verify/UEKPVM76YHE3',
  },
  {
    id: 'pyeverybody',
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    date: 'Oct 14, 2023',
    category: 'Python',
    image: '/certificates/pyeverybody.jpg',
    verifyUrl: 'https://coursera.org/verify/6ENX279QZECH',
  },
  {
    id: 'bitsbytes',
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Oct 15, 2023',
    category: 'Networking',
    image: '/certificates/bitsbytes.jpg',
    verifyUrl: 'https://coursera.org/verify/DL629YBZQVTT',
  },
  {
    id: 'be10x',
    title: 'AI Tools and ChatGPT Workshop',
    issuer: 'be10x',
    date: 'Jul 19, 2026',
    category: 'AI Tools',
    image: '/certificates/be10x.jpg',
  },
  {
    id: 'ybi',
    title: 'Data Science and Machine Learning Internship',
    issuer: 'YBI Foundation',
    date: 'Jun 14, 2024',
    category: 'Internship',
    image: '/certificates/ybi.jpg',
    credentialId: 'C17AFUV9TBXAY',
  },
];
