<template>
  <form @submit.prevent="handleSubmit">
    <div class="user">
      <input
      type="text"
      placeholder=" username"
      required
      v-model="displayName"
    />
    <img src="../assets/user.png" alt="">
    </div>
    <div class="mail">
      <input type="email" placeholder="Email" required v-model="email" />
      <img src="../assets/mail.png" alt="">
    </div>
    <div class="pass">
      <input type="password" placeholder="Password" required v-model="password" />
      <img src="../assets/pass.png" alt="">
    </div>
    <div class="error">{{ error }}</div>
    <button>Signup</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup  from "../composables/useSignup";
export default {
  setup(props,context) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { signup, error } = useSignup ();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if(!error.value){
          context.emit('signup')
        }
    };

    return { displayName, email, password, handleSubmit ,error};
  },
};
</script>

<style></style>
