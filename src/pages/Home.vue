<template>

  <!-- 左右两侧点击切换帖子的按钮？为啥一定要用按钮呢 -->
  <!-- <div style="width: 18%; height: 2048px;margin: 0 auto; cursor: pointer; float: left;">
      <button style="width: 100%; height: 100%; margin: 0; cursor: pointer; background-color: unset; border: white"
        @click="last"></button>
    </div>
    <div style="width: 18%; height: 2048px;margin: 0 auto; cursor: pointer; float: right;">
      <button style="width: 100%; height: 100%; margin: 0; cursor: pointer; background-color: unset; border: white"
        @click="next"></button>
    </div> -->

  <div class="main-container">
    <div class="post">
      <div class="post-bar">
        <!-- 头像用户名 -->
        <image class="post-avatar" src="src/assets/images/photo_2022-03-22_18-21-29.jpg"></image>
        <div class="post-username">用户名</div>
      </div>

      <div class="post-card">

        <!--短文-->
        <div class="post-content">
          <div v-show="isflag===1">
            <p class="post-preview">
              {{msg.substring(0,160)}}
            </p>
            <button style="margin: 0px 20px 20px 20px; cursor: pointer" v-show="msg.length>160" @click="unfold">展开</button>
          </div>
          <div v-show="isflag===2">
            <p class="post-preview">
              {{msg}}
            </p>
            <button style="margin: 0px 20px 20px 20px; cursor: pointer" v-show="msg.length>160" @click="unfold">收起</button>
          </div>
        </div>

        <!-- 点赞评论可以考虑放在用户名后面，那条栏太空了，如果有张开功能，你放底下张开后它不被挤走了吗 -->
      </div>
<!--      <div style="margin-left: 10px;margin-bottom: 10px">-->
<!--        <button style="margin-left: 10px;margin-bottom: 10px; cursor: pointer" @click="like">点赞</button>-->
<!--        <span class="icon-active" icon="icon-link" style="margin-left: 10px;margin-bottom: 10px">{{ likes }}</span>-->
<!--        <button style="margin-left: 10px;margin-bottom: 10px; cursor: pointer" @click="comment">评论</button>-->
<!--        <span class="icon-active" icon="icon-link" style="margin-left: 10px;margin-bottom: 10px">9</span>-->
<!--      </div>-->
    </div>

    <!-- 分割线 -->
    <div class="parting-line"></div>
    <!--评论区-->
    <div class="comments">
      <div v-for="i in 9">

        <!-- 这里调用comment模块 -->
        <Comment></Comment>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  data() {
    return {
      msg: "今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？",
      isfold: true,
      isflag: 1,
    };
  },
  created() {
  },
  methods: {
    unfold() {
      this.isfold = !this.isfold;
      this.isfold === true?(this.isflag = 1):(this.isflag = 2);
    },
  },
  components:{},
};
</script>
<script setup>
  import Comment from '../components/Comment.vue';
  import {ref} from "vue";
  // const msg = ref("今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？今天小红和小明一起走路，小红发现小明档开了，为了维护小明自尊心，小红不想提醒小明，可又想到这样小明会被大家嘲笑的，小红心中了有了一丝犹豫，请问小红该怎么办呢？")
  // const isfold = ref(true);
  // const isflag = ref(1);
  // function unfold(){
  //   this.isfold = !this.isfold;
  //   this.isfold === true?(this.isflag = 1):(this.isflag = 2);
  // }
</script>


<style>
  .main-container {
    box-shadow: 2px 2px 2px 0 rgba(63, 63, 65, 0.501);
    border-radius: 2vw;
    margin-top: 2vh;
    width: 100%;
    /*min-width: 150vh;*/
    display: flex;
    flex-direction: column;

    /* 水平居中 */
    align-items: center;

    background-color: rgb(235, 235, 255);
  }

  .post {
    margin-top: 2em;
    margin-inline: 4%;
    min-width: 90%;
  }

  .post img {
    transform: scale(1);
    transition: transform 1s ease 0s;
  }

  .post:hover img {
    transform: scale(1.1);
  }

  .face-pic:hover img {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    /* Internet Explorer */
    -moz-transform: rotate(360deg);
    /* Firefox */
    -webkit-transform: rotate(360deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(360deg);
    /* Opera */
    transition: transform 0.6s ease 0s;
  }

  .post-bar {
    box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    border-radius: 2em;
    height: 4em;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .post-avatar {
    /* border: red solid 2px; */
    height: 150%;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    float: left;
  }

  .post-username {
    margin-left: 1.5em;
    font-size: 150%;
    color: #000000;
    cursor: pointer;
    float: left;
  }

  .icon-active:hover {
    color: #585858;
  }


  .post-card {
    /* border: red solid 2px; */
    margin-top: 2em;
    border-radius: 3px;
    background-color: white;
    box-shadow: -3px -3px 3px rgb(255, 255, 255), 5px 5px 5px rgb(210 210 240);
    border-radius: 2em;
  }

  .post-content {
    /* border: red solid 2px; */
    padding: 0.5em;
  }

  .post-preview {
    font-size: 130%;
    text-align: left;
  }

  .calendar-day {
    height: 30px !important;
    text-align: center !important;
  }

  .parting-line {
    width: 98%;
    margin-top: 3em;
    border: solid transparent;
    background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0/4em 4em;
  }

  .comments {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    width: 100%;
  }
</style>

<!--<script>-->
<!--  import Comment from '../components/Comment.vue'-->

<!--  export default {-->
<!--    components: {-->
<!--      Comment-->
<!--    },-->

<!--    setup() {-->
<!--      function handleSizeChange(val) {-->
<!--        console.log(`每页 ${val} 条`);-->
<!--      };-->
<!--      function handleCurrentChange(val) {-->
<!--        console.log(`当前页: ${val}`);-->
<!--      };-->
<!--      function handleClick(tab, event) {-->
<!--        console.log(tab, event);-->
<!--      };-->
<!--      function last() {-->
<!--        //上一条-->
<!--      };-->
<!--      function next() {-->
<!--        //下一条-->
<!--      };-->
<!--      function unfold() {-->
<!--        //展开-->

<!--      };-->
<!--      function like() {-->
<!--        //实现点赞功能-->
<!--        this.likes++-->

<!--      };-->
<!--      function comment() {-->
<!--        //实现评论功能-->

<!--      };-->

<!--      // 所以变量不返回则无法被template调用，只可用于以上函数作用域内-->
<!--      return {-->
<!--        img: "src/assets/images/photo_2022-03-22_18-21-29.jpg",-->
<!--        msg: "aaa",-->
<!--        likes: 0,-->
<!--        iflike:0,-->
<!--        value: new Date(),-->
<!--        currentPage: 4,-->
<!--        activeName: 'second',-->
<!--      }-->
<!--    }-->
<!--  };-->



<!--</script>-->