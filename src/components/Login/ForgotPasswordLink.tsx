import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ForgotPasswordLinkProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ onClick, className, href }) => {
  const linkClasses = cn(
    "text-sm font-normal text-muted-foreground hover:text-primary focus:text-primary",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
    "p-0 h-auto", // Reset padding for link-style button
    className
  );

  if (href) {
    return (
      <a href={href} className={linkClasses} onClick={onClick}>
        Forgot Password
      </a>
    );
  }

  return (
    <Button variant="link" onClick={onClick} className={linkClasses}>
      Forgot Password
    </Button>
  );
};

export default ForgotPasswordLink;
