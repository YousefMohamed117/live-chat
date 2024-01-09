import { getAuth, signInAnonymously } from "firebase/auth";
import { ref } from "vue";

const signAnonymously = () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      enterChat();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle errors...
    });
  return ;
};

export default signAnonymously;
