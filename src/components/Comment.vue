<script setup>
</script>

<template>
    <div class="comment">

        <div class="comment-bar">
            <!--头像用户名-->
            <image class="comment-bar-avatar" src="src/assets/images/photo_2022-03-22_18-21-29.jpg">
            </image>
            <div class="comment-bar-funcs">评论a, 点赞等功能</div>
        </div>

        <div class="comment-content">
            <!--评论区-->
            <div>
                hello
            </div>
            <!--                {{ msg}}-->
            <button class="comment-fold">展开</button>
        </div>

    </div>
</template>

<style>
    .comment {
        /* border: red solid 2px; */
        padding-bottom: 0.5em;
        box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
        border-radius: 2em;
        margin-bottom: 1em;
        margin-inline: 4%;
    }

    .comment-bar {
        font-weight: bold;
        padding-top: 0.5em;
        padding-left: 1.5em;
        height: 2em;
        display: flex;
        align-items: center;
    }

    .comment-bar-avatar {
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
        float: left,
    }

    .comment-bar-funcs {
        margin-left: 1.5em;
        font-size: 100%;
        cursor: pointer;
        float: left;
    }

    .comment img {
        transform: scale(1);
        transition: transform 1s ease 0s;
    }

    .comment:hover img {
        transform: scale(1.1);
    }

    .comment-content {
        /* 不加padding好像不会顶上去，什么鬼bug */
        font-size: 125%;
        padding-top: 0.1em;
        margin-top: 0.5em;
        margin-inline: 1em;
        margin-bottom: 0.5em;
        background: #fcfcfc;
        box-shadow: 3px 3px 3px rgb(255, 255, 255), -1px -1px 1px rgb(210 210 240);
        border-radius: 1em;
    }

    .comment-fold {
        /* border: red solid 2px; */
        margin-top: 2em;
        margin-inline: 4%;
    }
</style>