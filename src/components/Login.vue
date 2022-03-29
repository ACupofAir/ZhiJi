<template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <div class="modal-main">
                Username:
                <input type="text" v-model="username" placeholder="请输入用户名" />
                Password:
                <input type="text" v-model="password" placeholder="请输入密码" />
            </div>
            <div class="modal-footer">
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    const props = {
        show: {
            type: Boolean,
            default: false
        }
    };

    export default {
        props,

        data() {
            return {
                username: '',
                password: ''
            }
        },

        methods: {
            login() {
                console.log(this.username, this.password),
                this.show = false
            }
        }

    }
// </script>