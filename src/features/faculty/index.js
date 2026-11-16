/**
 * Faculty Management & Portfolio Feature Module
 * Public entrypoint
 */

// Components
export { default as DbFacultySection } from './components/DbFacultySection';
export { default as FacultyCard } from './components/FacultyCard';
export { default as FacultyGrid } from './components/FacultyGrid';
export { default as FacultyHero } from './components/FacultyHero';
export { default as FacultyMetricCard } from './components/FacultyMetricCard';
export { default as FacultySection } from './components/FacultySection';
export { default as FacultyAccordion } from './components/FacultyAccordion';
export { default as FacultyEmptyState } from './components/FacultyEmptyState';
export { default as FacultyGridSkeleton, FacultyPortfolioSkeleton } from './components/FacultyLoading';

// Pages
export { default as FacultyPortfolioPage } from './pages/FacultyPortfolioPage';

// Services
export * from './services/facultyApi';
export * from './services/facultyDataService';

// Utilities
export * from './utils/facultyDepartmentMap';
export * from './utils/facultyMatching';
export * from './utils/facultyHelper';
export * from './utils/facultyExperience';
export * from './utils/facultyPublicationHelper';
export * from './utils/facultyDataNormaliser';

