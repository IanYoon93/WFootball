import Input from '../atoms/Input';
import styles from './Login.module.css';

interface LoginProps {
  email: string;
  password: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function Login({ email, password, onInputChange, onSubmit }: LoginProps) {
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>로그인입력창</legend>
          <div className={styles.login}>
            <Input type="email" name="email" placeholder="이메일" value={email} required onChange={onInputChange} maxLength={30} />
            <Input type="password" name="password" placeholder="비밀번호" value={password} required onChange={onInputChange} minLength={8} maxLength={16} />
          </div>
          <button type="submit" className={styles.btnLogin}>
            로그인
          </button>
        </fieldset>
      </form>
    </div>
  );
}
