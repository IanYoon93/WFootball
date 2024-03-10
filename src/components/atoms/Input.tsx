import styles from '../login/Login.module.css';

type InputProps = {
  type: 'text' | 'email' | 'password';
  name?: 'text' | 'email' | 'password';
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  minLength?: number;
  maxLength?: number;
};

export default function Input({ type, name, required, onChange, placeholder, value }: InputProps) {
  return <input type={type} name={name} required={required} onChange={onChange} placeholder={placeholder} value={value} className={styles.input} />;
}
