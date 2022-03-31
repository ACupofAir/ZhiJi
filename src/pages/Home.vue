<template>
  <div style="width: 100%;background-color: #ffffff;font-size: 14px;padding: 20px 0;">
    <div style="width: 18%; height: 2048px;margin: 0 auto; cursor: pointer; float: left;">
      <!--上一条-->
      <button style="width: 100%; height: 100%; margin: 0; cursor: pointer; background-color: unset; border: white" @click="last"></button>
    </div>
    <!--下一条-->
    <div style="width: 18%; height: 2048px;margin: 0 auto; cursor: pointer; float: right;">
      <button style="width: 100%; height: 100%; margin: 0; cursor: pointer; background-color: unset; border: white" @click="next"></button>
    </div>

    <div style="display: flex;width: 60%;margin: 0 auto;border-left: 1px solid #f1f1f1;border-right: 1px solid #f1f1f1;">
      <div style="flex: 1;">

        <div style="margin: 10px 20px;border-bottom: 1px solid #cccccc; min-height: 400px" class="item">
          <div style="margin: 10px 70px; height: 70px"><!--头像用户名-->
            <image src="src/pages/photo_2022-03-22_18-21-29.jpg" style="height: 50px;width: 50px;object-fit: cover;border-radius: 50%; cursor: pointer; float: left"></image>
            <div style="margin: 10px 20px; font-size: 150% ;color: #000000;cursor: pointer; float: left">用户名</div>
          </div>

          <div style="margin: 40px 150px; background: #fcfcfc; border-radius: 3px;"><!--短文-->

            <div style="margin: 20px 20px 20px 20px;">
              <p style="font-size: 130%;">
                李时珍(约1518～1593)明代杰出医药学家。字东璧，晚号濒湖山人。蕲州(今湖北蕲春)人。世业医，父言闻，有医名。幼习儒，三次应乡试不中。师事顾日岩，读书十年。受家庭熏陶，兼好医书，遂精医药。千里就医于门，立活不取值。楚王闻之，聘为奉祠，掌良医所事。世子暴厥，治之即甦。经推荐，赴京师太医院供职一年，或云尝授太医院院判之职。晚年因子建中为官，遂进封文林郎、四川省蓬溪知县。念本草一书历代注解者谬误亦多，遂考古证今，辨疑订误，广采博收群书，奋发编修。自嘉靖三十一年(1552年)至万历六年(1578年)，历时二十七载，三易其稿，著成《本草纲目》五十二卷，初刊于金陵。子建中、建元、建木及诸孙皆参与绘制药图，孙树宗、树声为之校对。甫及刻成，时珍即逝。对脉学亦深有研究，所撰《濒湖脉学》(1564年)能融会先贤脉学之精华，删繁去芜，讲求实用，论述较为通俗简要，以韵体文写成，便于记诵。此书归纳脉象为二十七种，各撰体状诗、相类诗、主病诗。另著有《奇经八脉考》(1572年)，于奇经循行路线及证治规律阐发尤多。已佚医著有《三焦客难》、《命门考》(或以为实系一书)、《五脏图论》《濒湖医案》《濒湖集简方》等。次子建元，从父业医，有医名。父卒，献《本草纲目》于朝廷。四子建方，精医，中年入选太医院医士。弟子庞鹿门，传其医学；瞿九思，传其儒学。
<!--                {{msg}}-->
              </p>
              <button style="margin: 0px 20px 20px 20px; cursor: pointer">展开</button>
            </div>


          </div>
          <div  style="margin-left: 10px;margin-bottom: 10px">
            <button  style="margin-left: 10px;margin-bottom: 10px; cursor: pointer" @click="like">点赞</button>
            <span class="icon-active" icon="icon-link" style="margin-left: 10px;margin-bottom: 10px">{{ likes }}</span>
            <button  style="margin-left: 10px;margin-bottom: 10px; cursor: pointer" @click="comment">评论</button>
            <span class="icon-active" icon="icon-link" style="margin-left: 10px;margin-bottom: 10px">9</span>
          </div>

        </div>
        <!--评论区-->
        <div>
          <div v-for="i in 9" class="comments">
            <div style="margin: 10px 70px; height: 30px"><!--头像用户名-->
              <image src="src/pages/photo_2022-03-22_18-21-29.jpg" style="height: 40px;width: 40px;object-fit: cover;border-radius: 50%; cursor: pointer; float: left"></image>
              <div style="margin: 10px 20px; font-size: 150% ;color: #000000;cursor: pointer; float: left">评论a</div>
            </div>
            <div style="margin: 40px 150px; background: #fcfcfc; border-radius: 3px"><!--评论区-->
              <div style="margin: 20px 20px 20px 20px; font-size: 130%; color: #1c1c1c;cursor: pointer;">
                aaa
                <!--                {{ msg}}-->
              </div>
              <button style="margin: 0px 20px 20px 20px">展开</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      img: "src/pages/photo_2022-03-22_18-21-29.jpg",
      msg: "aaa",
      likes: 0,
      value: new Date(),
      currentPage: 4,
      activeName: 'second',

    };
  },
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    last() {
      //上一条
    },
    next() {
      //下一条
    },
    unfold() {
      //展开
    },
    like() {
      //实现点赞功能
      this.likes++
    },
    comment() {
      //实现评论功能

    },
  }
};
</script>

<style>
.icon-active:hover{
  color: #585858;
}
.item img {
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: transform 1s ease 0s;
}

.item:hover img{
  transform: scale(1.1);
}
.face-pic:hover img{
  transform:rotate(360deg);
  -ms-transform:rotate(360deg); /* Internet Explorer */
  -moz-transform:rotate(360deg); /* Firefox */
  -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
  -o-transform:rotate(360deg); /* Opera */
  transition: transform 0.6s ease 0s;
}
.calendar-day{
  height: 30px!important;
  text-align: center!important;
}
.comments{
  margin: 10px 20px;border-bottom: 1px solid #cccccc; min-height: 200px
}
.comments img{
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: transform 1s ease 0s;
}
.comments:hover img{
  transform: scale(1.1);
}
</style>