<template>
    <button v-if="!isloggedIn" @click="showModal">去登录</button>
    <!-- 登陆弹窗 -->
    <Login :show="showLogin"></Login>
</template>

<script>
    import Login from "../components/Login.vue";
    import { ref } from 'vue';

    export default {
        components: {
            Login
        },

        setup() {
            const isloggedIn = ref(false);
            const showLogin = ref(false);

            const showModal = () => {
                showLogin.value = !showLogin.value;
            };

            return {
                isloggedIn,
                showLogin,

                showModal
            };
        }

    }
</script>