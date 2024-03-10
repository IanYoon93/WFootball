import { useSetRecoilState } from 'recoil';
import { userState } from '../store/userState';
import { useEffect } from 'react';
import { auth } from '../service/firebase';

const useUser = () => {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const getUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user.displayName || user.uid);
        }
      });
    };

    getUser();
  }, [setUser]);
};

export default useUser;
