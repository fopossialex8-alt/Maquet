import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { NewsPage } from './components/NewsPage';
import { InvestigationPage } from './components/InvestigationPage';
import { ArticlePage } from './components/ArticlePage';
import { VideoPage } from './components/VideoPage';
import { ParticipationPage } from './components/ParticipationPage';
import { AboutPage } from './components/AboutPage';
import { AnalysisPage } from './components/AnalysisPage';
import { DocumentaryPage } from './components/DocumentaryPage';
import { PhotoOfTheDayPage } from './components/PhotoOfTheDayPage';
import { ContactPage } from './components/ContactPage';
import { InterviewPage } from './components/InterviewPage';

export type PageType = 'home' | 'news' | 'investigation' | 'article' | 'video' | 'participation' | 'about' | 'analysis' | 'documentary' | 'photo' | 'contact' | 'interview';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [darkMode, setDarkMode] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'news':
        return <NewsPage onNavigate={setCurrentPage} />;
      case 'investigation':
        return <InvestigationPage onNavigate={setCurrentPage} />;
      case 'article':
        return <ArticlePage onNavigate={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'video':
        return <VideoPage onNavigate={setCurrentPage} />;
      case 'participation':
        return <ParticipationPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'analysis':
        return <AnalysisPage onNavigate={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'documentary':
        return <DocumentaryPage onNavigate={setCurrentPage} />;
      case 'photo':
        return <PhotoOfTheDayPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'interview':
        return <InterviewPage onNavigate={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </div>
  );
}