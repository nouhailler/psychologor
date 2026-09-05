import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { PageLoader } from './components/ui/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Explorer = lazy(() => import('./pages/Explorer'));
const PsychologistDetail = lazy(() => import('./pages/PsychologistDetail'));
const TheoryDetail = lazy(() => import('./pages/TheoryDetail'));
const SchoolDetail = lazy(() => import('./pages/SchoolDetail'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Glossary = lazy(() => import('./pages/Glossary'));
const ConceptDetail = lazy(() => import('./pages/ConceptDetail'));
const Timeline = lazy(() => import('./pages/Timeline'));
const KnowledgeMap = lazy(() => import('./pages/KnowledgeMap'));
const Comparison = lazy(() => import('./pages/Comparison'));
const Paths = lazy(() => import('./pages/Paths'));
const PathPlayer = lazy(() => import('./pages/PathPlayer'));
const ExperimentDetail = lazy(() => import('./pages/ExperimentDetail'));
const MethodDetail = lazy(() => import('./pages/MethodDetail'));
const ApproachDetail = lazy(() => import('./pages/ApproachDetail'));
const FieldDetail = lazy(() => import('./pages/FieldDetail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/psychologues" element={<Explorer initialTab="psychologues" />} />
          <Route path="/psychologues/:id" element={<PsychologistDetail />} />
          <Route path="/theories" element={<Explorer initialTab="theories" />} />
          <Route path="/theories/:id" element={<TheoryDetail />} />
          <Route path="/courants" element={<Explorer initialTab="courants" />} />
          <Route path="/courants/:id" element={<SchoolDetail />} />
          <Route path="/concepts" element={<Glossary />} />
          <Route path="/concepts/:id" element={<ConceptDetail />} />
          <Route path="/oeuvres" element={<Explorer initialTab="oeuvres" />} />
          <Route path="/oeuvres/:id" element={<WorkDetail />} />
          <Route path="/evenements/:id" element={<EventDetail />} />
          <Route path="/chronologie" element={<Timeline />} />
          <Route path="/carte" element={<KnowledgeMap />} />
          <Route path="/comparaison" element={<Comparison />} />
          <Route path="/parcours" element={<Paths />} />
          <Route path="/parcours/:id" element={<PathPlayer />} />
          <Route path="/experiences" element={<Explorer initialTab="experiences" />} />
          <Route path="/experiences/:id" element={<ExperimentDetail />} />
          <Route path="/methodes" element={<Explorer initialTab="methodes" />} />
          <Route path="/methodes/:id" element={<MethodDetail />} />
          <Route path="/approches" element={<Explorer initialTab="approches" />} />
          <Route path="/approches/:id" element={<ApproachDetail />} />
          <Route path="/domaines" element={<Explorer initialTab="domaines" />} />
          <Route path="/domaines/:id" element={<FieldDetail />} />
          <Route path="/favoris" element={<Favorites />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/accueil" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
