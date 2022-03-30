<template>
    <div class="profile">
        <div class="avatar" v-if="!isloggedIn" @click="showModal">
            <!-- <img :src="require('../assets/logo.png')"" /> -->
            <img class="avatar-img" src='../assets/logo.png' />
        </div>
        <div class="info-card">
            <div class="info-item">
                Username: {{username}}
            </div>
            <div class="info-item">
                UserId: {{username}}
            </div>
            <div class="info-item">
                email: {{username}}
            </div>
            <div class="info-item">
                link: {{username}}
            </div>
        </div>
        <!-- 登陆弹窗 -->
        <Login :show="showLogin" @update-user="updateUser"></Login>
    </div>
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
            const username = ref("去登陆");

            const showModal = () => {
                showLogin.value = !showLogin.value;
            };

            const updateUser = (name) => {
                username.value = name;
                showLogin.value = false;
            };

            // 登录成功后调用
            const loginSuccess = () => {
                isloggedIn.value = true;
            };

            return {
                //Data:
                username,
                isloggedIn,
                showLogin,

                //Function:
                showModal,
                updateUser
            };
        }

    }
</script>

<style>
    .profile {
        /* border: red solid 2px; */
        display: flex;
        align-items: center;
        margin: 2vw;
        padding: 2vw;
        background-color: rgb(235, 235, 255);
        box-shadow: 2px 2px 2px 0 rgba(63, 63, 65, 0.501);
        border-radius: 2vw;
    }

    .info-card {
        /* border: red solid 2px; */
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;

        /* 为了info-item中最后一个底下的margin-bottom:2vh对齐 */
        padding-top: 2vh;
        margin-left: 6vw;
        /* padding: 2vw; */
    }

    .info-item {
        display: inline-flex;
        padding: 1vh;
        margin-bottom: 2vh;

        border-radius: 1vw;
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    }

    .avatar {
        /* border: red solid 2px; */
        /* background-color: rgb(235, 235, 255); */
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgb(255, 255, 255);
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
        width: 15vw;
        height: 15vw;
        line-height: 15vw;
        /* padding-top: 15%;
        padding-bottom: 15%; */
        border-radius: 50%;
    }

    /* 将图片完全放进去,一个圆里面套个小正方形 */
    /* .avatar-img {
        width: 70%;
        height: 70%;
    } */

    /* 把原图搞成圆形,边角部分裁掉 */
    .avatar-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>