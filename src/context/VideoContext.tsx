import { createContext, useContext, useState, useCallback } from 'react';

interface VideoContextType {
  currentTime: number;
  setCurrentTime: (time: number) => void;
  addBookmark: (time: number) => void;
  bookmarks: { time: number; label: string }[];
  jumpToBookmark: (time: number) => void;
  clearBookmarks: () => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [bookmarks, setBookmarks] = useState<{ time: number; label: string }[]>([]);

  const addBookmark = useCallback((time: number) => {
    const label = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
    setBookmarks(prev => [...prev, { time, label }]);
  }, []);

  const jumpToBookmark = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const clearBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  return (
    <VideoContext.Provider value={{
      currentTime,
      setCurrentTime,
      addBookmark,
      bookmarks,
      jumpToBookmark,
      clearBookmarks,
    }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};

export default VideoContext;
