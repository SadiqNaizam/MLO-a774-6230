import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends Omit<ButtonProps, 'children'> {
  isLoading?: boolean;
  buttonText?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  isLoading = false,
  className,
  disabled = false,
  buttonText = "Login",
  type = "submit",
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick} // onClick will be called even if type="submit"
      disabled={isLoading || disabled}
      className={cn(
        "w-full", // Default variant is primary with correct bg-primary and text-primary-foreground
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {buttonText}
    </Button>
  );
};

export default LoginButton;
