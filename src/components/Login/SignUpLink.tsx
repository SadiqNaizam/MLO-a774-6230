import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SignUpLinkProps {
  onSignUpClick?: () => void;
  className?: string;
  signUpHref?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ onSignUpClick, className, signUpHref }) => {
  const linkSegmentClasses = cn(
    "font-medium text-primary hover:text-primary/90",
    "focus:outline-none focus:underline focus:text-primary/90",
    "p-0 h-auto align-baseline"
  );

  const signUpInteractiveElement = signUpHref ? (
    <a 
      href={signUpHref} 
      className={linkSegmentClasses}
      onClick={(e) => { 
        if (onSignUpClick) { 
          e.preventDefault(); // Prevent navigation if onClick is also handled
          onSignUpClick(); 
        }
      }}
    >
      SignUp
    </a>
  ) : (
    <Button 
      variant="link" 
      onClick={onSignUpClick} 
      className={linkSegmentClasses}
    >
      SignUp
    </Button>
  );

  return (
    <p className={cn("text-sm text-center text-secondaryText", className)}>
      Don&apos;t have an account?{' '}
      {signUpInteractiveElement}
    </p>
  );
};

export default SignUpLink;
