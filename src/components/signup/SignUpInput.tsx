import { UseFormRegister } from 'react-hook-form';
import styles from './SignUpInput.module.css';
import { TSignUpSchema } from '../../constants/signUpSchema';
import { FaStarOfLife } from 'react-icons/fa';

interface SignUpInputProps {
  register: UseFormRegister<TSignUpSchema>;
}

// TODO: 주소(우편번호 검색 기능 추가), 정보 입력 잘못했을 때 처리

export default function SignUpInput({ register }: SignUpInputProps) {
  return (
    <div className={styles.signUpArea}>
      <table>
        <caption>회원가입 정보입력</caption>
        <tbody className={styles.tbody}>
          <tr>
            <th className={styles.col}>
              이메일
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <input {...register('email')} type="email" placeholder="이메일" className={styles.signUpInput} />
            </td>
          </tr>
          <tr>
            <th className={styles.col}>
              비밀번호
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <input {...register('password')} type="password" placeholder="비밀번호" className={styles.signUpInput} />
            </td>
          </tr>
          <tr>
            <th className={styles.col}>
              비밀번호 확인
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <input {...register('confirmPassword')} type="password" placeholder="비밀번호를 확인해주세요." className={styles.signUpInput} />
            </td>
          </tr>
          <tr>
            <th className={styles.col}>
              이름
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <input type="text" placeholder="이름" className={styles.signUpInput} />
            </td>
          </tr>
          <tr>
            <th className={styles.col}>
              휴대폰 번호
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <input type="text" placeholder="- 없이 입력해주세요." className={styles.signUpInput} />
            </td>
          </tr>
          <tr>
            <th className={styles.col}>
              주소
              <FaStarOfLife className={styles.icon} />
            </th>
            <td>
              <div className={styles.addressTop}>
                <input type="text" className={styles.signUpInputSmall} />
                <button type="button" className={styles.btnPostcode}>
                  우편번호 검색
                </button>
              </div>
              <div className={styles.addressBottom}>
                <input type="text" readOnly className={styles.signUpInput} />
                <input type="text" placeholder="상세 주소를 입력해주세요." className={styles.signUpInput} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
