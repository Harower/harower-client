import { useState } from 'react';
import AppLogo from '../components/ui/AppLogo.tsx';
import UiButton from '../components/ui/UiButton.tsx';
import Loader from './Loader.tsx';

export default function AuthLayout() {
  const [loadingState1, setLoadingState1] = useState(false);

  const toggleLoadingState1 = () => {
    setLoadingState1(prevState => !prevState);
  };

  return (
    <div className="bg-white h-screen">
      <AppLogo />
      <div className="flex flex-col space-y-4 w-1/2 bg-gray50 px-10 py-10 items-center justify-center">
        <UiButton
          variant="primary"
          onClick={toggleLoadingState1}
          size="s"
          loading={loadingState1}
          isFullWidth
          textCasing="uppercase"
        >
          hello
        </UiButton>
        <UiButton variant="secondary" size="s" textCasing="lowercase">
          hello
        </UiButton>
        <UiButton variant="tertiary" size="md" loading={true} textCasing="capitalize">
          hello
        </UiButton>
        <UiButton variant="danger" size="md" loading={false} textCasing="uppercase">
          hello
        </UiButton>
        <UiButton variant="neutral" size="large" loading={true} textCasing="uppercase">
          hello
        </UiButton>
        <UiButton variant="iconNeutral" size="large" loading={false} textCasing="uppercase">
          hello
        </UiButton>
        <UiButton variant="primaryText" size="md" loading={false} textCasing="lowercase">
          hello
        </UiButton>
        <Loader size="large" variant="primary" />
      </div>
    </div>
  );
}
