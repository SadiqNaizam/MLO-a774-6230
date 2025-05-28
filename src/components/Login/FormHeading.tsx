import React from 'react';
import { cn } from '@/lib/utils';

interface FormHeadingProps {
  className?: string;
  title?: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({ className, title = "Welcome" }) => {
  return (
    <h2 className={cn(
      "text-2xl font-bold text-center text-primaryText", // primaryText is card-foreground (black)
      className
    )}>
      {title}
    </h2>
  );
};

export default FormHeading;
