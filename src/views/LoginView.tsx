import { useEffect, useState } from 'react';
import Login from '../components/login/Login';
import { login, signInWithGoogle } from '../service/auth';
import { useRecoilState } from 'recoil';
import { userState } from '../store/userState';
import { useNavigate } from 'react-router-dom';
import styles from './LoginView.module.css';
import LoginButton from '../components/login/LoginButton';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { toast } from 'sonner';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = await login(email, password);
      toast.success('로그인에 성공하였습니다.');
      if (data?.user) {
        setUser(data?.user?.displayName || data.user.uid);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      toast.error('로그인에 실패하였습니다.');
    }
  };

  const handelGoogle = async () => {
    try {
      const data = await signInWithGoogle();
      if (data?.user.uid) {
        setUser(data?.user?.displayName || data.user.uid);
        await setDoc(doc(db, 'users', data?.user?.uid), {
          userName: data?.user?.displayName || data?.user?.uid,
          uid: data?.user?.uid,
        });
      }
      navigate('/');
      console.log('로그인되었습니다.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Login</h2>
      <Login email={email} password={password} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      <LoginButton handleClick={handelGoogle} />
      <button type="submit" className={styles.btnNonMember}>
        비회원 주문조회
      </button>
    </div>
  );
}
