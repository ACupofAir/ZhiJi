<script setup>
</script>

<template>
    <p class="navi"></p>
    <div class="navi-bar">
        <div class="navi-circle">
            <router-link class="navi-item" to="/">首页</router-link>
        </div>
        <div class="navi-circle">
            <router-link class="navi-item" to="/blog">长文</router-link>
        </div>
        <div class="navi-circle">
            <router-link class="navi-item" to="/post">发布</router-link>
        </div>
        <div class="navi-circle">
            <router-link class="navi-item" to="/interest">关注</router-link>
        </div>
        <div class="navi-circle">
            <router-link class="navi-item" to="/user">我的</router-link>
        </div>
    </div>
</template>

<style>
.navi-bar {
    background-color: rgb(235, 235, 255);
    /* background-color: #d4faa9; */
    padding: 0.4em;
    display: flex;
    align-content: center;
    justify-content: center;
    box-shadow: 2px 2px 2px 0 rgba(63, 63, 65, 0.501);
    border-radius: 2vw;
    /* border: red solid 2px; */
    margin: 2vw;
}

.navi-circle {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 4em;
    height: 4em;
    margin: 1vw;
    border-radius: 50px;
    box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    /* box-shadow: -3px -3px 3px rgb(216, 243, 221), 5px 5px 5px rgb(208, 240, 211); */
    /* border: red solid 2px; */
}

.navi-item {
    width: 90%;
    padding-top: 30%;
    display: flex;
    align-content: center;
    justify-content: center;
    /* border: red solid 2px; */
}

/* 去除router-link的下划线 */
a {
    text-decoration: none;
    color: black;
}

.router-link-active {
    text-decoration: none;
    color: #7b4483;
}
</style>
