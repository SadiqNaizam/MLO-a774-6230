import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label'; // Label not explicitly shown above input in image

interface EmailInputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
  id = "email",
  value,
  onChange,
  className,
  placeholder = "Email Address",
  disabled = false,
}) => {
  return (
    <div className={cn("w-full space-y-1", className)}> 
      {/* Example of using a Label if needed, but image implies placeholder is the primary label
      <Label htmlFor={id} className="text-sm font-medium text-primaryText">
        Email Address
      </Label>
      */}
      <Input
        type="email"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full text-primaryText placeholder:text-muted-foreground border-border focus:border-ring"
        // Note: Shadcn Input already has styling for border, focus, etc.
        // Explicit border-border and focus:border-ring to ensure consistency if base styles change.
      />
    </div>
  );
};

export default EmailInput;
