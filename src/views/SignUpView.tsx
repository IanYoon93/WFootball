import { useForm } from 'react-hook-form';
import SignUpInput from '../components/signup/SignUpInput';
import styles from './SignUpView.module.css';
import { TSignUpSchema, signUpSchema } from '../constants/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../service/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import SignUpButton from '../components/signup/SignUpButton';
import { FaStarOfLife } from 'react-icons/fa';

export default function SignUpView() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const navigate = useNavigate();

  const onSubmit = async (data: TSignUpSchema) => {
    try {
      const userData = await signUp(data.email, data.password);

      if (userData) {
        await setDoc(doc(db, 'users', userData.uid), {
          userName: userData?.displayName || userData?.uid,
          uid: userData?.uid,
        });
      }
      navigate('/');
      console.log('가입이 완료되었습니다.');
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>회원가입</h2>
      <div className={styles.container}>
        <p className={styles.ess}>
          <FaStarOfLife className={styles.icon} />
          필수입력사항
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>회원가입</legend>
            <SignUpInput register={register} />
            <SignUpButton isSubmit={isSubmitting} />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
