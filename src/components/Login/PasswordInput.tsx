import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

interface PasswordInputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id = "password",
  value,
  onChange,
  className,
  placeholder = "Password",
  disabled = false,
}) => {
  return (
    <div className={cn("w-full space-y-1", className)}>
      {/* Example of using a Label if needed
      <Label htmlFor={id} className="text-sm font-medium text-primaryText">
        Password
      </Label>
      */}
      <Input
        type="password"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full text-primaryText placeholder:text-muted-foreground border-border focus:border-ring"
      />
    </div>
  );
};

export default PasswordInput;
