<template>
    <UserInput @email="onEmail" />
    {{ email }}
</template>

<script>
import UserInput from "./components/UserInput.vue";

export default {
    components: {
        UserInput
    },

    data () {
        return {
            email: '',
        }
    },

    methods: {
        onEmail(value) {
            this.email = value;
        },
    },
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>