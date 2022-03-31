<template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <div class="modal-main">
                <div class="input-box">
                    Username:
                    <input type="text" v-model="usernameInput" placeholder="请输入用户名" />
                </div>
                <div class="input-box">
                    Password:
                    <input type="text" v-model="passwordInput" placeholder="请输入密码" />
                </div>
            </div>
            <div id="btn-login" @click="login">
                <div id="btn-login-text" >
                    Login
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },

        emits: [
            'update-user'
        ],

        setup(props, { emit }) {
            let user = ref({
                username: 'hello',
                password: '',
                nickname: 'hi',
                email: ''
            });
            const usernameInput = ref('');
            const passwordInput = ref('');

            let login = () => {
                fetch('http://localhost:8081/user/'+usernameInput.value, {
                }).then(res => res.json()).then(res => {
                    console.log(res);
                    user.value = res;
                    emit('update-user', user);
                });
            };


            return {
                //Data:
                user,
                usernameInput,
                passwordInput,

                //Function:
                login
            }
        },

    }
</script>

<style>
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }

    .modal-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30vw;
        height: 20vw;
        background-color: rgb(235, 235, 255);
        box-shadow: 0.5vw 0.5vw 0.5vw 0 rgba(63, 63, 65, 0.501);
        border-radius: 3vw;
    }

    .modal-main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* padding-top: 10vh;
        padding-bottom: 10vh; */
        /* padding-inline: 2vw; */
        top: 50%;
        left: 50%;
        position: relative;
        /* flex-basis: 2em; */
        /* position: absolute; */
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }

    .input-box {
        /* border: red solid 2px; */
        font-size: 1vw; font-weight: bold;
        margin-bottom: 2em;
    }

    #btn-login {
        /* border: red solid 2px; */
        margin-bottom: 10%;
        margin-inline: 12vw;
        border-radius: 2vw;
        position: relative;
        width: 6vw;
        height: 4vh;
        /* box-shadow: 0.5vw 0.5vw 0.5vw 0 rgba(63, 63, 65, 0.501); */

        box-shadow: 2px 2px 2px 0 rgba(63, 63, 65, 0.501);
    }
    #btn-login-text {
        /* border: red solid 2px; */
        position: relative;
        width: 6vw;
        height: 4vh;
        border-radius: 2vw;
        font-size: 1vw; font-weight: bold;
        /* 将字体垂直居中,设置行高为div高度即可 */
        line-height: 4vh;
        text-align: center;
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    }
</style>