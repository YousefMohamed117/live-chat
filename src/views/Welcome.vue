<template>
  <div class="welcome container">
    <div class="pic">
      <div class="chat">
        <img src="../assets/icons8-chat-48.png" alt="" />
        <p class="info">Digital Chat</p>
      </div>
      <p class="mid">Share Your Smile With this World and Find Friends</p>
      <div class="chat">
        <img src="../assets/coffee-cup.png" alt="" />
        <p class="info light">Enjoy..!</p>
      </div>
    </div>
    <div class="login">
      <div v-if="showLogin">
        <h3>LOGIN HERE</h3>
        <LoginForm @login="enterChat" />
        <p>
          not registered yet? <span @click="showLogin = false">Signup</span> now
        </p>
      </div>
      <div v-else>
        <h3>SIGN UP HERE</h3>
        <SignupForm @signup="enterChat" />
        <p>
          already have an account
          <span @click="showLogin = true">Login</span> now
        </p>
      </div>
      <div class="anony" @click="signAnonymously">
        continue without an account
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInAnonymously } from "firebase/auth";

// Create a reactive reference outside of the setup function

export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup(context) {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

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
    };

    return { showLogin, enterChat, signAnonymously };
  },
};
</script>
<style>
.pic {
  background: linear-gradient(to bottom, #2dbab8, #57a2c7, #937edc);
  flex: 2;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
@media (max-width: 767px) {
  .pic {
    display: none;
  }
}
.info {
  font-weight: 600;
  color: white;
  font-size: 24px;
  margin-top: 10px;
}
.light {
  font-weight: normal;
  margin-top: 5px;
}
.mid {
  color: white;
  font-size: 24px;
  font-weight: lighter;
  line-height: 1.7;
  margin: 30px 24px;
}
.login {
  padding: 100px 0;
  padding: 20px 0;
  flex: 3;
}
.welcome {
  text-align: center;
  align-items: center;
  display: flex;
  position: relative;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

@media (max-width: 420px) {
  .welcome form {
    width: 100%;
  }
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;

  padding-left: 5px;
  border: none;
  outline: none;
  color: #747474;
  margin: 10px auto;
}
.welcome span,
.anony {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin-top: 30px;
  cursor: pointer;
  background: linear-gradient(to right, #2dbab8, #57a2c7, #937edc);
  display: block;
  font-size: 20px;
  width: 100%;
}
h3 {
  background: linear-gradient(to bottom, #2dbab8, #57a2c7, #937edc);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 30px;
}

</style>
