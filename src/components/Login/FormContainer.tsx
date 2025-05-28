import React from 'react';
import { cn } from '@/lib/utils';

import FormHeading from './FormHeading';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ForgotPasswordLink from './ForgotPasswordLink';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

interface FormContainerProps {
  className?: string;
  onLoginSubmit?: (data: { email: string; password: string }) => Promise<void> | void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  className,
  onLoginSubmit,
  onForgotPassword,
  onSignUp,
}) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleEmailChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (onLoginSubmit) {
        await onLoginSubmit({ email, password });
      } else {
        console.log('Login attempt:', { email, password });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        alert(`Simulated login with Email: ${email} (no onLoginSubmit prop provided)`);
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, onLoginSubmit]);

  const handleForgotPasswordClick = React.useCallback(() => {
    if (onForgotPassword) {
      onForgotPassword();
    } else {
      // Default action if no handler provided, using # for href example
      console.log('Forgot Password clicked!');
    }
  }, [onForgotPassword]);

  const handleSignUpClick = React.useCallback(() => {
    if (onSignUp) {
      onSignUp();
    } else {
      // Default action if no handler provided, using # for href example
      console.log('Sign Up clicked!');
    }
  }, [onSignUp]);

  return (
    <div
      className={cn(
        "bg-card text-card-foreground", // As per tailwind.config.ts surface/card and card-foreground
        "rounded-lg shadow-lg",
        "w-full max-w-sm", // From overall.sizing.container for "the white container"
        "px-6 py-8",       // Padding from overall.sizing.container
        className
      )}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4"> {/* From mainContent.layout */}
        <FormHeading title="Welcome" />
        
        <EmailInput
          id="login-email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email Address"
          disabled={isLoading}
        />
        
        <PasswordInput
          id="login-password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          disabled={isLoading}
        />
        
        <div className="flex justify-start">
          <ForgotPasswordLink 
            onClick={handleForgotPasswordClick} 
            href="#" // Example href, can be dynamic
          /> 
        </div>
        
        <LoginButton
          isLoading={isLoading}
          disabled={isLoading} 
          type="submit"
        />
        
        <SignUpLink 
          onSignUpClick={handleSignUpClick} 
          signUpHref="#" // Example href, can be dynamic
        />
      </form>
    </div>
  );
};

export default FormContainer;
