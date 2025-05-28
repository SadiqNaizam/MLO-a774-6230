import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FormContainer from '../components/Login/FormContainer';

/**
 * LoginPage serves as the main view for the login interface.
 * It utilizes MainAppLayout for the overall page structure and centering,
 * and FormContainer for the actual login form.
 */
const LoginPage: React.FC = () => {
  /**
   * Handles the login submission event from the FormContainer.
   * @param data - An object containing the email and password.
   */
  const handleLoginSubmit = async (data: { email: string; password: string }): Promise<void> => {
    console.log('Login submitted from LoginPage:', data);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real application, you would typically handle authentication logic here,
    // such as calling an API, setting user context, and navigating to a dashboard.
    alert(`Login attempt: Email: ${data.email}. Check console for details. (This is a demo)`);
  };

  /**
   * Handles the forgot password event.
   */
  const handleForgotPassword = (): void => {
    console.log('Forgot Password action initiated from LoginPage');
    // In a real application, this might navigate to a 'forgot password' page or open a modal.
    alert('Forgot Password link clicked. (This is a demo)');
  };

  /**
   * Handles the sign up event.
   */
  const handleSignUp = (): void => {
    console.log('Sign Up action initiated from LoginPage');
    // In a real application, this might navigate to a 'sign up' page or open a registration modal.
    alert('Sign Up link clicked. (This is a demo)');
  };

  return (
    <MainAppLayout title="Login - Login Screen Interface">
      <FormContainer
        onLoginSubmit={handleLoginSubmit}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
      />
    </MainAppLayout>
  );
};

export default LoginPage;
