<template>
  <form>
    <textarea
      placeholder="Enter a message"
      v-model="message"
      @keydown.enter.prevent="handleSubmit"
    ></textarea>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script>
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";

export default {
  props: ["num2"],
  setup(props) {
    const message = ref("");
    const { user } = getUser();
    const { error, addChat } = useCollection("messages");
    const handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName || `Anonymous${props.num2}`,
        createdAt: timestamp(),
      };
      await addChat(chat);
      if (!error.value) {
        message.value = "";
      }
    };
    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
