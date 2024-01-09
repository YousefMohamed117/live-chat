import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const signout = async (email, password) => {
  error.value = null;
  try {
    let res = await projectAuth.signOut()
    error.value = null;
    return res
  } catch(err) {
    error.value = err;
  }
};

const useSignout = ()=>{
    return {error , signout}
}

export default useSignout