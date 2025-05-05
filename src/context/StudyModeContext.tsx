import React, { createContext, useContext, useState, useCallback } from 'react';

interface StudyModeContextType {
  isStudyMode: boolean;
  isBlurEnabled: boolean;
  isAutoplay: boolean;
  isNotesVisible: boolean;
  studyModeFilters: {
    topic: string;
    educationLevel: string;
    careerRoadmap: string;
  };
  toggleStudyMode: () => void;
  toggleBlur: () => void;
  toggleAutoplay: () => void;
  toggleNotes: () => void;
  setStudyModeFilters: (filters: {
    topic: string;
    educationLevel: string;
    careerRoadmap: string;
  }) => void;
}

const StudyModeContext = createContext<StudyModeContextType | undefined>(undefined);

export const StudyModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [isBlurEnabled, setIsBlurEnabled] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const [studyModeFilters, setStudyModeFilters] = useState({
    topic: '',
    educationLevel: '',
    careerRoadmap: '',
  });

  const toggleStudyMode = useCallback(() => {
    setIsStudyMode(prev => !prev);
    // When study mode is toggled, we also toggle blur effect
    setIsBlurEnabled(prev => !prev);
  }, []);

  const toggleBlur = useCallback(() => {
    setIsBlurEnabled(prev => !prev);
  }, []);

  const toggleAutoplay = useCallback(() => {
    setIsAutoplay(prev => !prev);
  }, []);

  const toggleNotes = useCallback(() => {
    setIsNotesVisible(prev => !prev);
  }, []);

  const contextValue: StudyModeContextType = {
    isStudyMode,
    isBlurEnabled,
    isAutoplay,
    isNotesVisible,
    studyModeFilters,
    toggleStudyMode,
    toggleBlur,
    toggleAutoplay,
    toggleNotes,
    setStudyModeFilters,
  };

  return (
    <StudyModeContext.Provider value={contextValue}>
      {children}
    </StudyModeContext.Provider>
  );
};

export const useStudyMode = () => {
  const context = useContext(StudyModeContext);
  if (context === undefined) {
    throw new Error('useStudyMode must be used within a StudyModeProvider');
  }
  return context;
};

export default StudyModeContext;