import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-9)' }}>
      <EmptyState
        icon={<Compass size={24} />}
        title="Cette fiche n'existe pas"
        description="La page que vous cherchez a peut-être été déplacée ou n'existe pas encore dans la base."
        action={
          <Link to="/explorer">
            <Button variant="secondary">Retour à l'exploration</Button>
          </Link>
        }
      />
    </div>
  );
}
