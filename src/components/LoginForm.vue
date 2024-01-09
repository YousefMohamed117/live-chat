<template>
  <form @submit.prevent="handleSubmit">
    <div class="mail">
      <input type="email" placeholder="Enter Email" required v-model="email" />
      <img src="../assets/mail.png" alt="" />
    </div>
    <div class="pass">
      <input
        type="password"
        placeholder="Enter Password"
        required
        v-model="password"
      />
      <img src="../assets/pass.png" alt="" />
    </div>
    <div class="error">{{ error }}</div>
    <button>Sign in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignin from "../composables/useSignin";
export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, signin } = useSignin();

    const handleSubmit = async () => {
      await signin(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
.mail,
.pass,
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b0b0b0;
  margin: 20px 0;
}
.mail img,
.pass img,
.user img {
  width: 20px;
  height: 20px;
}
</style>
