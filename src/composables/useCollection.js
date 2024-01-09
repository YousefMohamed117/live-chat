import {  projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection =  (collection) => {
  const error = ref(null);
  const addChat = async (chat) => {
      error.value = null;
    try {
     await projectFirestore.collection(collection).add(chat);
    } catch (err) {
      error.value = "could not type the message ";
    }
  };
  return { error, addChat };
};

export default useCollection;
