import styles from './SignUpButton.module.css';

interface SignUpButtonProps {
  isSubmit: boolean;
}

export default function SignUpButton({ isSubmit }: SignUpButtonProps) {
  return (
    <button type="submit" className={styles.btnSign} disabled={isSubmit}>
      가입하기
    </button>
  );
}
