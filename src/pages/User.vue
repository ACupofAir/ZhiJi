<template>
    <div class="profile">
        <div class="avatar" v-if="!isloggedIn" @click="showModal">
            <!-- <img :src="require('../assets/logo.png')"" /> -->
            <img class="avatar-img" src='../assets/logo.png' />
        </div>
        <div class="info-card">
            <div class="info-item">
                Username: {{user.username}}
            </div>
            <div class="info-item">
                Nickname: {{user.nickname}}
            </div>
            <div class="info-item">
                Email: {{user.email}}
            </div>
        </div>
        <div class="info-detail">
            {{infoDetail}}
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
            let user = ref({
                username: '去登陆',
                password: '',
                nickname: '请登录',
                email: ''
            });

            const infoDetail = ref("是一个很牛逼的人啊");

            const showModal = () => {
                showLogin.value = !showLogin.value;
            };

            const updateUser = (userInput) => {
                user.value = userInput.value;
                console.log(user);
                showLogin.value = false;
            };

            // 登录成功后调用
            const loginSuccess = () => {
                isloggedIn.value = true;
            };

            return {
                //Data:
                user,
                isloggedIn,
                showLogin,
                infoDetail,

                //Function:
                showModal,
                updateUser
            };
        }

    }
</script>

<style>
    .profile {
        display: flex;
        align-items: center;
        height: 15vh;
        width: 100%;
        margin-top: 2vh;
        /* margin-inline: 2vw; */
        padding-top: 2vw;
        padding-bottom: 2vw;
        background-color: rgb(235, 235, 255);
        box-shadow: 2px 2px 2px 0 rgba(63, 63, 65, 0.501);
        border-radius: 2vw;
    }

    .avatar {
        /* background-color: rgb(235, 235, 255); */
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgb(255, 255, 255);
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
        width: 15vh;
        height: 15vh;
        line-height: 15vh;
        margin-left: 4%;
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

    .info-card {
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;

        height: 100%;
        width: 20%;

        /* 为了info-item中最后一个底下的margin-bottom:2vh对齐 */
        padding-top: 2vh;

        margin-left: 4vw;
        /* padding: 2vw; */
    }

    .info-item {
        display: inline-flex;
        padding: 1vh;
        margin-bottom: 2vh;

        border-radius: 1vw;
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    }

    .info-detail {
        display: inline-flex;

        height: 80%;
        width: 45%;

        margin-left: 4%;
        margin-right: 4%;
        margin-top: 2vh;
        margin-bottom: 2vh;

        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-top: 2vh;
        padding-inline: 1vw;

        border-radius: 1vw;
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    }
</style>