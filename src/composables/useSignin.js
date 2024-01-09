import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const signin = async (email, password) => {
  error.value = null;
  try {
    let res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    if (!res) {
      throw new Error("wrong email or password");
    }
    return res;
  } catch (err) {
    error.value = 'Email or Password you entered maybe incorrect'
  }
};

const useSignin = () => {
  return { error, signin };
};

export default useSignin;
