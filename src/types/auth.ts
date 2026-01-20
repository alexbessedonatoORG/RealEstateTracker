export interface LoginFormProps {
  onClose: () => void;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpFormProps {
  onClose: () => void;
}

export interface SignUpForm {
  email: string;
  password: string;
  username: string;
}

