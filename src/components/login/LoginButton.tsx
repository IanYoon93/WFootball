import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { FcGoogle } from 'react-icons/fc';

interface LoginButtonProps {
  handleClick: () => Promise<void>;
}

export default function LoginButton({ handleClick }: LoginButtonProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.btnArea}>
      <button type="submit" className={styles.btnGoogle} onClick={handleClick}>
        <FcGoogle className={styles.btnIcon} />
        구글 계정으로 로그인하기
      </button>
      <button type="submit" className={styles.btnJoin} onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </div>
  );
}
