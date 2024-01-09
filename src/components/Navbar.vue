<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName || `Mr Anonymous${num}` }}</p>
      <p class="email">
        Currently logged in as {{ user.email || `Anonymous${num}` }}
      </p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>
<script>
import useSignout from "@/composables/useSignout";
import getUser from "@/composables/getUser";
import { ref } from "vue";
export default {
  setup(props, context) {
    const { error, signout } = useSignout();
    const { user } = getUser();
    const generatedNumbers = new Set();

    const getRandomUniqueInt = (min, max) => {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (generatedNumbers.has(randomNumber));
      generatedNumbers.add(randomNumber);
      return randomNumber
    };
    let num = ref(getRandomUniqueInt(1, 1000));

    context.emit("num", num.value);
    const handleClick = async () => {
      await signout();
    };

    return { handleClick, user, num };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
button {
  cursor: pointer;
}
</style>
