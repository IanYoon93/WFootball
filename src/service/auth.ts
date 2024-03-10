import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { toast } from 'sonner';
import { FirebaseError } from 'firebase/app';

export const signUp = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    toast.success(`${response.user?.displayName || response.user?.uid}님 환영합니다!`);
    return response.user;
  } catch (error: unknown) {
    let message;
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/user-not-found':
          message = '해당하는 이메일이 존재하지 않습니다.';
          break;
        case 'auth/email-already-in-use':
          message = '이미 사용 중인 이메일입니다.';
          break;
        case 'auth/weak-password':
          message = '비밀번호는 8글자 이상, 16글자 미만이어야 합니다.';
          break;
        case 'auth/network-request-failed':
          message = '네트워크에 연결 실패하였습니다.';
          break;
        case 'auth/invalid-email':
          message = '잘못된 이메일 형식입니다.';
          break;
        case 'auth/internal-error':
          message = '잘못된 요청입니다.';
          break;
        default:
          message = '로그인에 실패하였습니다.';
          break;
      }
      toast.error(message);
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    toast.success(`${response.user?.displayName || response.user?.uid}님 어서오세요.`);
    return response;
  } catch (error) {
    let message;
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-credential':
          message = '입력된 정보가 올바르지 않습니다.';
          break;
        case 'auth/invalid-email':
          message = '올바르지 않은 이메일 형식입니다.';
          break;
        case 'auth/user-disabled':
          message = '이 사용자 계정이 비활성화되었습니다.';
          break;
        case 'auth/user-not-found':
          message = '사용자를 찾을 수 없습니다.';
          break;
        case 'auth/wrong-password':
          message = '비밀번호가 일치하지 않습니다.';
          break;
        default:
          message = '로그인에 실패하였습니다.';
          break;
      }
      toast.error(message);
      throw error;
    }
  }
};

export const signInWithGoogle = async () => {
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  try {
    const response = await signInWithPopup(auth, googleProvider);
    toast.success(`${response?.user?.displayName || response?.user?.uid}님 반갑습니다.`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success('로그아웃 되었습니다.');
  } catch (error) {
    console.log(error);
  }
};
