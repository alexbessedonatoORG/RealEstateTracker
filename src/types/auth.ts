export interface LoginFormProps {
  onClose: () => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignUpFormProps {
  onClose: () => void;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  username: string;
}