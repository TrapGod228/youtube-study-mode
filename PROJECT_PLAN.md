# YouTube + Study Mode Hackathon Project

## Project Overview
A YouTube clone with enhanced Study Mode features designed to help students focus while learning.

## Tech Stack
- Frontend: React.js (for modern UI and component-based architecture)
- UI Framework: Material-UI (for YouTube-like design)
- State Management: React Context (for managing study mode state)
- Styling: CSS Modules (for component-specific styling)
- Additional Libraries:
  - react-pomodoro (for Pomodoro timer)
  - react-markdown (for note-taking)

## Project Structure
```
src/
├── components/
│   ├── VideoPlayer/            # YouTube video player
│   ├── StudyModeControls/      # Study mode toggle and controls
│   ├── NotesPanel/            # Note-taking sidebar
│   ├── PomodoroTimer/         # Pomodoro timer overlay
│   ├── SearchBar/             # YouTube search functionality
│   └── Sidebar/               # YouTube sidebar
├── context/
│   └── StudyModeContext.js    # Study mode state management
├── pages/
│   └── WatchPage.js           # Main video watching page
├── utils/
│   └── youtubeAPI.js          # Fake YouTube API utilities
└── App.js                     # Main application component
```

## Features Implementation Roadmap

### Phase 1: Basic YouTube Clone (Day 1)
1. **Setup Project**
   - Create React project
   - Set up basic YouTube layout
   - Implement video player
   - Add search bar
   - Create basic sidebar

2. **UI Components**
   - Video player with controls
   - Sidebar with recommendations
   - Comment section
   - Like/Subscribe buttons

### Phase 2: Study Mode Core Features (Day 2)
1. **Study Mode Toggle**
   - Add study mode button
   - Implement state management
   - Add blur effect to recommendations

2. **Pomodoro Timer**
   - Create timer overlay
   - Add start/pause controls
   - Implement break intervals

3. **Note-taking System**
   - Add notes panel
   - Implement markdown support
   - Add timestamp linking

### Phase 3: Advanced Features (Day 3)
1. **Enhanced Study Mode**
   - Add video speed control
   - Implement timestamp bookmarks
   - Add distraction-free mode

2. **UI Polish**
   - Add animations
   - Improve responsiveness
   - Add loading states

## Key Features Implementation Details

### Study Mode Toggle
```javascript
// StudyModeContext.js
const StudyModeContext = createContext();

export function StudyModeProvider({ children }) {
  const [isStudyMode, setIsStudyMode] = useState(false);
  
  const toggleStudyMode = () => {
    setIsStudyMode(!isStudyMode);
    // Apply blur effect to recommendations
    // Disable autoplay
  };

  return (
    <StudyModeContext.Provider value={{ isStudyMode, toggleStudyMode }}>
      {children}
    </StudyModeContext.Provider>
  );
}
```

### Pomodoro Timer
```javascript
// PomodoroTimer.js
const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="pomodoro">
      <h3>{formatTime(time)}</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};
```

### Notes Panel
```javascript
// NotesPanel.js
const NotesPanel = () => {
  const [notes, setNotes] = useState('');
  const [timestamps, setTimestamps] = useState([]);

  const handleNoteChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="notes-panel">
      <textarea 
        value={notes} 
        onChange={handleNoteChange}
        placeholder="Take notes here..."
      />
      <div className="timestamp-list">
        {timestamps.map((timestamp, index) => (
          <div key={index}>
            {timestamp.time}: {timestamp.note}
          </div>
        ))}
      </div>
    </div>
  );
};
```

## Additional Tips
1. Use Material-UI components for YouTube-like design
2. Implement CSS animations for smooth transitions
3. Use React Context for state management
4. Add loading states and error handling
5. Make the UI responsive for mobile devices

## Timeline
- Day 1: Basic YouTube clone setup
- Day 2: Study Mode core features
- Day 3: Advanced features and UI polish
- Day 4: Testing and final touches

## Important Notes
- Focus on UI accuracy and functionality
- Use fake data for backend
- Emphasize the new Study Mode features
- Ensure all interactive elements work as expected
- Maintain YouTube's visual design while adding new features

## Submission Checklist
- Live demo link (Vercel/GitHub Pages)
- GitHub repository
- README with setup instructions
- All features working
- Responsive design
- Clean code structure
- Documentation of new features

## Windsurf Usage Tips
- Use "Explain this code" for understanding complex components
- Use "Write this code" for implementing features
- Use "Debug this code" for fixing issues
- Use "Optimize this code" for performance improvements
- Use "Add comments" for better code documentation
