import React, { lazy } from 'react';
import { tv } from 'tailwind-variants';

import SignUpImage from '../../assets/sign-up.svg';

const AppLogo = lazy(() => import('../ui/AppLogo.tsx'));

interface AuthLayoutStylingProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  infoContent: React.ReactNode;
  /** The img prop says we want to set an image as background on the infoContent */
  img?: boolean;
  /** The invert prop takes the info content to the right and the main content which houses the forms to the left e.g LoginPage */
  isInverted?: boolean;
  isInvertedForm?: boolean;
}
const AuthLayoutStyling = ({
  children,
  infoContent,
  img,
  isInverted,
  //   isInvertedForm,
  ...props
}: AuthLayoutStylingProps) => {
  return (
    <div className={LayoutStyling()} {...props}>
      <div className={InfoContent()}>
        <div className={InfoContentInner()}>
          {!isInverted ? (
            <div className={Logo()}>
              <AppLogo />
            </div>
          ) : null}
          {img && <img src={SignUpImage} alt="harower authentication" />}
          {infoContent}
        </div>
      </div>

      <div className={MainContentContainer()}>
        <div className={MainContent()}>
          {!isInverted ? (
            <div className={Logo()}>
              <AppLogo />
            </div>
          ) : null}
          <div className={MainContentInner()}>
            <div className={MainContentInnerNotInverted()}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LayoutStyling = tv({});
const InfoContent = tv({});
const InfoContentInner = tv({});
const Logo = tv({});

const MainContentContainer = tv({});
const MainContent = tv({});
const MainContentInner = tv({});
const MainContentInnerNotInverted = tv({});

export default AuthLayoutStyling;
