import { createContext, useContext, useState, useCallback } from 'react';

interface Note {
  id: string;
  content: string;
  timestamp: number;
  videoTime: number | null; // Timestamp in video
}

interface NotesContextType {
  notes: Note[];
  addNote: (content: string, videoTime?: number) => void;
  deleteNote: (id: string) => void;
  clearNotes: () => void;
  saveNotes: () => void;
  loadNotes: () => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = useCallback((content: string, videoTime: number | null = null) => {
    const note: Note = {
      id: Date.now().toString(),
      content,
      timestamp: Date.now(),
      videoTime,
    };
    setNotes(prev => [...prev, note]);
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  }, []);

  const clearNotes = useCallback(() => {
    setNotes([]);
  }, []);

  const saveNotes = useCallback(() => {
    localStorage.setItem('studyNotes', JSON.stringify(notes));
  }, [notes]);

  const loadNotes = useCallback(() => {
    const savedNotes = localStorage.getItem('studyNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <NotesContext.Provider value={{
      notes,
      addNote,
      deleteNote,
      clearNotes,
      saveNotes,
      loadNotes,
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};

export default NotesContext;
