import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    let res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("couldn't signup ");
    }

    await res.user.updateProfile({
        displayName: displayName,
      });
    error.value = null;
    console.log(res)
    console.log(res.user)
    return res;
  } catch (err) {
   error.value = err.message
  }
};

const useSingup = () => {
  return { signup, error };
};

export default useSingup;
