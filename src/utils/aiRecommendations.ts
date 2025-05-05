import { Video } from '../data/mockVideos';

interface StudyModeFilters {
  topic: string;
  educationLevel: string;
  careerRoadmap: string;
}

export class AIRecommendationEngine {
  private educationLevels = ['school', 'college', 'professional'];
  private careerPaths = {
    'software engineering': ['programming', 'web development', 'data structures', 'algorithms'],
    'data science': ['statistics', 'machine learning', 'python', 'data analysis'],
    'medicine': ['anatomy', 'physiology', 'clinical practice', 'medical ethics'],
    'business': ['entrepreneurship', 'marketing', 'finance', 'management'],
    // Add more career paths as needed
  };

  // Calculate semantic similarity between two strings
  private calculateSimilarity(text1: string, text2: string): number {
    const words1 = text1.toLowerCase().split(/\s+/).filter(Boolean);
    const words2 = text2.toLowerCase().split(/\s+/).filter(Boolean);
    
    const intersection = words1.filter(word => words2.includes(word));
    const union = [...new Set([...words1, ...words2])];
    
    return intersection.length / union.length;
  }

  // Get related topics based on career path
  private getRelatedTopics(careerPath: string): string[] {
    const normalizedPath = careerPath.toLowerCase();
    for (const [key, value] of Object.entries(this.careerPaths)) {
      if (this.calculateSimilarity(key, normalizedPath) > 0.5) {
        return value;
      }
    }
    return [];
  }

  // Get education level weight
  private getEducationLevelWeight(educationLevel: string): number {
    const index = this.educationLevels.indexOf(educationLevel);
    if (index === -1) return 1;
    return (this.educationLevels.length - index) / this.educationLevels.length;
  }

  // Score a video based on filters
  private scoreVideo(video: Video, filters: StudyModeFilters): number {
    let score = 0;
    const maxScore = 3; // Topic, Education Level, Career Roadmap

    // Score based on topic match
    if (filters.topic) {
      const topicScore = Math.max(
        this.calculateSimilarity(video.title, filters.topic),
        this.calculateSimilarity(video.description, filters.topic),
        video.tags.some(tag => this.calculateSimilarity(tag, filters.topic) > 0.5) ? 1 : 0
      );
      score += topicScore;
    }

    // Score based on education level match
    if (filters.educationLevel) {
      const levelScore = this.getEducationLevelWeight(filters.educationLevel) * 
                        (video.educationLevel === filters.educationLevel ? 1 : 0);
      score += levelScore;
    }

    // Score based on career roadmap match
    if (filters.careerRoadmap) {
      const relatedTopics = this.getRelatedTopics(filters.careerRoadmap);
      const careerScore = Math.max(
        this.calculateSimilarity(video.title, filters.careerRoadmap),
        this.calculateSimilarity(video.description, filters.careerRoadmap),
        video.tags.some(tag => relatedTopics.some(related => this.calculateSimilarity(tag, related) > 0.5)) ? 1 : 0
      );
      score += careerScore;
    }

    return score / maxScore;
  }

  // Filter and sort videos using AI recommendations
  public getRecommendedVideos(videos: Video[], filters: StudyModeFilters): Video[] {
    if (!filters.topic && !filters.educationLevel && !filters.careerRoadmap) {
      return [];
    }

    // Score each video
    const scoredVideos = videos.map(video => ({
      video,
      score: this.scoreVideo(video, filters)
    }));

    // Sort videos by score (highest first)
    const sortedVideos = scoredVideos
      .filter(v => v.score > 0) // Remove videos with zero score
      .sort((a, b) => b.score - a.score)
      .map(v => v.video);

    return sortedVideos;
  }
}
