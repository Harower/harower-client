import AppLogo from '../components/ui/AppLogo.tsx';
import Loader from './Loader.tsx';

export default function AuthLayout() {
  return (
    <div className="bg-gray20 h-screen">
      <AppLogo />
      <Loader size="s" variant="primary" />
    </div>
  );
}
