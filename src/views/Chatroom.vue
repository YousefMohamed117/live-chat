<template>
  <div class="container">
    <Navbar @num="num" />
    <ChatWindow />
    <NewChatForm  :num2="num2"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "@/composables/getUser";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    const num2 = ref(null)
    const num = (v)=>{
      num2.value = v
    }
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
    return {num , num2}
  },
};
</script>

<style></style>
