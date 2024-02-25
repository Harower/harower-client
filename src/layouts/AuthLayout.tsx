import Loader from './Loader.tsx';

export default function AuthLayout() {
  return (
    <div className="bg-gray20 h-screen">
      <Loader size="s" variant="primary" />
    </div>
  );
}
