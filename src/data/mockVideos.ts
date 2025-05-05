export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channel: string;
  views: string;
  duration: string;
  educationLevel: 'school' | 'college' | 'professional';
  tags: string[];
  aiRelevanceScore: number;
  relatedTopics: string[];
  careerRelevance: {
    softwareEngineering: number;
    dataScience: number;
    medicine: number;
    business: number;
  };
  category: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Data Structures',
    description: 'Learn the fundamentals of data structures including arrays, linked lists, and trees.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Data+Structures',
    channel: 'Programming Tutorials',
    views: '100K',
    duration: '15:45',
    educationLevel: 'college',
    tags: ['programming', 'data structures', 'computer science', 'algorithms'],
    aiRelevanceScore: 0.9,
    relatedTopics: ['algorithms', 'programming concepts', 'computer science fundamentals'],
    careerRelevance: {
      softwareEngineering: 0.95,
      dataScience: 0.8,
      medicine: 0.2,
      business: 0.3
    },
    category: 'programming'
  },
  {
    id: '2',
    title: 'Medical Ethics and Professionalism',
    description: 'Explore the ethical considerations in medical practice and patient care.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Medical+Ethics',
    channel: 'Medical Education',
    views: '50K',
    duration: '22:30',
    educationLevel: 'professional',
    tags: ['medicine', 'ethics', 'healthcare', 'professional development'],
    aiRelevanceScore: 0.85,
    relatedTopics: ['clinical practice', 'patient care', 'medical law'],
    careerRelevance: {
      softwareEngineering: 0.2,
      dataScience: 0.3,
      medicine: 0.95,
      business: 0.4
    },
    category: 'medicine'
  },
  {
    id: '3',
    title: 'Introduction to Machine Learning',
    description: 'Get started with machine learning concepts and algorithms.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Machine+Learning',
    channel: 'AI Academy',
    views: '200K',
    duration: '30:00',
    educationLevel: 'college',
    tags: ['machine learning', 'data science', 'python', 'ai'],
    aiRelevanceScore: 0.92,
    relatedTopics: ['deep learning', 'neural networks', 'data analysis'],
    careerRelevance: {
      softwareEngineering: 0.85,
      dataScience: 0.95,
      medicine: 0.3,
      business: 0.4
    },
    category: 'data science'
  },
  {
    id: '4',
    title: 'High School Physics - Newtons Laws',
    description: 'Learn about Newtons three laws of motion and their applications.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Physics',
    channel: 'Science Education',
    views: '150K',
    duration: '25:00',
    educationLevel: 'school',
    tags: ['physics', 'science', 'newtons laws', 'motion'],
    aiRelevanceScore: 0.8,
    relatedTopics: ['classical mechanics', 'forces', 'kinematics'],
    careerRelevance: {
      softwareEngineering: 0.4,
      dataScience: 0.5,
      medicine: 0.6,
      business: 0.3
    },
    category: 'science'
  },
  {
    id: '5',
    title: 'Business Strategy and Planning',
    description: 'Learn the fundamentals of business strategy and planning.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Business+Strategy',
    channel: 'Business School',
    views: '80K',
    duration: '45:00',
    educationLevel: 'college',
    tags: ['business', 'strategy', 'management', 'planning'],
    aiRelevanceScore: 0.88,
    relatedTopics: ['market analysis', 'competitive strategy', 'business models'],
    careerRelevance: {
      softwareEngineering: 0.3,
      dataScience: 0.4,
      medicine: 0.2,
      business: 0.95
    },
    category: 'business'
  },
  
  {
    id: '6',
    title: 'Advanced Python for Data Science',
    description: 'Master advanced Python techniques for data science projects.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Python',
    channel: 'Data Science Tutorials',
    views: '120K',
    duration: '50:00',
    educationLevel: 'professional',
    tags: ['python', 'data science', 'pandas', 'numpy'],
    aiRelevanceScore: 0.9,
    relatedTopics: ['data manipulation', 'data visualization', 'python libraries'],
    careerRelevance: {
      softwareEngineering: 0.7,
      dataScience: 0.95,
      medicine: 0.3,
      business: 0.5
    },
    category: 'programming'
  },
  // School Level Videos
  {
    id: '7',
    title: 'Mathematics for Grade 9',
    description: 'Comprehensive math course covering algebra, geometry, and statistics.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Math+9',
    duration: '45:00',
    channel: 'School Education',
    views: '300K',
    tags: ['math', 'algebra', 'geometry', 'statistics'],
    educationLevel: 'school',
    aiRelevanceScore: 0.85,
    relatedTopics: ['number theory', 'calculus', 'trigonometry'],
    careerRelevance: {
      softwareEngineering: 0.7,
      dataScience: 0.8,
      medicine: 0.6,
      business: 0.4
    },
    category: 'math'
  },
  {
    id: '8',
    title: 'English Literature - Classic Novels',
    description: 'Study classic English literature and improve comprehension skills.',
    thumbnail: 'https://via.placeholder.com/320x180?text=English+Literature',
    duration: '35:00',
    channel: 'English Academy',
    views: '200K',
    tags: ['english', 'literature', 'reading', 'writing'],
    educationLevel: 'school',
    aiRelevanceScore: 0.8,
    relatedTopics: ['creative writing', 'literary analysis', 'composition'],
    careerRelevance: {
      softwareEngineering: 0.3,
      dataScience: 0.4,
      medicine: 0.3,
      business: 0.7
    },
    category: 'english'
  },
  {
    id: '9',
    title: 'Biology - Cell Structure and Function',
    description: 'Learn about cell biology and its importance in living organisms.',
    thumbnail: 'https://via.placeholder.com/320x180?text=Biology',
    duration: '40:00',
    channel: 'Science Education',
    views: '250K',
    tags: ['biology', 'cells', 'science', 'education'],
    educationLevel: 'school',
    aiRelevanceScore: 0.82,
    relatedTopics: ['genetics', 'microbiology', 'cell processes'],
    careerRelevance: {
      softwareEngineering: 0.4,
      dataScience: 0.5,
      medicine: 0.8,
      business: 0.3
    },
    category: 'science'
  },
  {
    id: '1',
    title: 'Mathematics for Class 10 - Complete Course',
    description: 'Comprehensive guide to Class 10 Mathematics curriculum',
    thumbnail: 'https://via.placeholder.com/320x180?text=Mathematics+Class+10',
    duration: '1:30:00',
    channel: 'EduTutor',
    views: '1.2M',
    tags: ['math', 'class10', 'cbse', 'icse'],
    educationLevel: 'school',
    aiRelevanceScore: 0.85,
    relatedTopics: ['algebra', 'geometry', 'trigonometry'],
    careerRelevance: {
      softwareEngineering: 0.7,
      dataScience: 0.8,
      medicine: 0.6,
      business: 0.4
    },
    category: 'education'
  },
  {
    id: '2',
    title: 'Science Experiment - Newtons Laws',
    description: 'Practical demonstration of Newtons Laws of Motion',
    thumbnail: 'https://via.placeholder.com/320x180?text=Science+Experiment',
    duration: '25:30',
    channel: 'ScienceLab',
    views: '850K',
    tags: ['physics', 'science', 'experiments'],
    educationLevel: 'school',
    aiRelevanceScore: 0.8,
    relatedTopics: ['classical mechanics', 'forces', 'kinematics'],
    careerRelevance: {
      softwareEngineering: 0.4,
      dataScience: 0.5,
      medicine: 0.6,
      business: 0.3
    },
    category: 'education'
  },

  // College Level Videos
  {
    id: '3',
    title: 'Introduction to Computer Science - Full Course',
    description: 'Complete Computer Science fundamentals for beginners',
    thumbnail: 'https://via.placeholder.com/320x180?text=Computer+Science',
    duration: '2:45:00',
    channel: 'CodeAcademy',
    views: '2.5M',
    tags: ['computer science', 'programming', 'algorithms'],
    educationLevel: 'college',
    aiRelevanceScore: 0.9,
    relatedTopics: ['data structures', 'software engineering', 'computer systems'],
    careerRelevance: {
      softwareEngineering: 0.95,
      dataScience: 0.8,
      medicine: 0.2,
      business: 0.3
    },
    category: 'education'
  },
  {
    id: '4',
    title: 'Calculus 1 - Complete Course',
    description: 'Master Calculus concepts with practical examples',
    thumbnail: 'https://via.placeholder.com/320x180?text=Calculus',
    duration: '3:15:00',
    channel: 'MathPro',
    views: '1.8M',
    tags: ['calculus', 'mathematics', 'engineering'],
    educationLevel: 'college',
    aiRelevanceScore: 0.85,
    relatedTopics: ['algebra', 'trigonometry', 'analysis'],
    careerRelevance: {
      softwareEngineering: 0.7,
      dataScience: 0.8,
      medicine: 0.4,
      business: 0.4
    },
    category: 'education'
  },

  // Professional Development Videos
  {
    id: '5',
    title: 'Full Stack Web Development Roadmap 2025',
    description: 'Complete guide to becoming a full stack developer',
    thumbnail: 'https://via.placeholder.com/320x180?text=Web+Development',
    duration: '45:30',
    channel: 'DevRoad',
    views: '1.2M',
    tags: ['web development', 'full stack', 'career'],
    educationLevel: 'professional',
    aiRelevanceScore: 0.9,
    relatedTopics: ['frontend', 'backend', 'deployment'],
    careerRelevance: {
      softwareEngineering: 0.95,
      dataScience: 0.7,
      medicine: 0.2,
      business: 0.6
    },
    category: 'career'
  },
  {
    id: '6',
    title: 'Data Science Career Path - Complete Guide',
    description: 'How to become a data scientist in 2025',
    thumbnail: 'https://via.placeholder.com/320x180?text=Data+Science',
    duration: '1:15:00',
    channel: 'DataPro',
    views: '950K',
    tags: ['data science', 'career', 'ml'],
    educationLevel: 'professional',
    aiRelevanceScore: 0.92,
    relatedTopics: ['machine learning', 'statistics', 'data engineering'],
    careerRelevance: {
      softwareEngineering: 0.7,
      dataScience: 0.95,
      medicine: 0.3,
      business: 0.5
    },
    category: 'career'
  },

  // Career Roadmap Videos
  {
    id: '7',
    title: 'Software Engineer Career Path - 2025',
    description: 'Complete roadmap from beginner to senior engineer',
    thumbnail: 'https://via.placeholder.com/320x180?text=Software+Engineer',
    duration: '1:20:00',
    channel: 'TechCareer',
    views: '2.1M',
    tags: ['software engineer', 'career path', 'roadmap'],
    educationLevel: 'professional',
    aiRelevanceScore: 0.9,
    relatedTopics: ['programming', 'software architecture', 'system design'],
    careerRelevance: {
      softwareEngineering: 0.95,
      dataScience: 0.7,
      medicine: 0.2,
      business: 0.5
    },
    category: 'career'
  },
  {
    id: '8',
    title: 'Product Manager Career Guide',
    description: 'How to become a successful product manager',
    thumbnail: 'https://via.placeholder.com/320x180?text=Product+Manager',
    duration: '55:00',
    channel: 'PMInsider',
    views: '1.5M',
    tags: ['product manager', 'career', 'management'],
    educationLevel: 'professional',
    aiRelevanceScore: 0.88,
    relatedTopics: ['product development', 'team management', 'strategy'],
    careerRelevance: {
      softwareEngineering: 0.6,
      dataScience: 0.4,
      medicine: 0.2,
      business: 0.95
    },
    category: 'career'
  }
];
