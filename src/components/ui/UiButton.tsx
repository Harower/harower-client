import React, { lazy, useTransition } from 'react';
import { tv } from 'tailwind-variants';
import { Size } from '../../types/Sizes.ts';

const Loader = lazy(() => import('../../layouts/Loader.tsx'));

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'iconNeutral' | 'primaryText' | 'danger';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  size?: Size;
  type?: 'submit' | 'button';
  textCasing?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal';

  /** This prop decides if we want the button to fit the content or be full width */

  isFullWidth?: boolean;

  // eslint-disable-next-line
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function UiButton({
  children,
  onClick,
  disabled = false,
  loading = true,
  variant = 'primary',
  type = 'submit',
  textCasing = 'uppercase',
  size = 'md',
  isFullWidth = false,
  ...props
}: ButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => {
    startTransition(() => {
      if (onClick) {
        onClick(event);
      }
    });
  };

  return (
    <button
      className={Button({ variant, textCasing, disabled, loading, size, isFullWidth })}
      onClick={handleClick}
      disabled={disabled || isPending}
      type={type}
      {...props}
    >
      {loading ? (
        <div className={LoaderWrapper()}>
          <Loader variant="primary" size="s" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

const Button = tv({
  base: 'flex items-center justify-center text-center rounded-lg tracking-wide border-none whitespace-nowrap transition-all duration-200 font-medium no-underline gap-2.5',
  variants: {
    variant: {
      primary: 'bg-primary hover:bg-primary50 shadow-primary fill-white text-white ',
      secondary: 'bg-primary10 text-primary hover:bg-primary20  shadow-primary',
      iconNeutral: 'bg-gray20 hover:bg-gray30',
      tertiary: 'bg-white text-primary hover:text-primary50',
      neutral: 'bg-gray50 hover:bg-gray70 hover:text-gray20 text-gray80',
      primaryText: 'transparent border-transparent text-primary',
      danger: 'text-white bg-danger hover:bg-danger40',
    },
    size: {
      s: 'p-[8px] min-w-[100px] min-h-[40px] text-[12px] leading-6',
      md: 'p-[12]  min-w-[100px] h-11 text-[12px] leading-10',
      large: 'p-[16]  min-w-[100px] py-3 h-12 text-[14px] leading-14',
    },
    isFullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    textCasing: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },

    disabled: {
      true: 'opacity-50 hover:none',
      false: 'cursor-pointer',
    },
    loading: {
      true: 'bg-primary50',
      false: 'cursor-pointer',
    },
  },
});

const LoaderWrapper = tv({
  base: 'flex items-center justify-center px-8 w-full h-full',
});
