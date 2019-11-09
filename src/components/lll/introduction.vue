<template>
  <div id="intro">
    <ul>
      <router-link to="/">主页</router-link>
      <br>
      <router-link to="./introduction">班级简介</router-link>
      <br>
      <router-link to="./activities">班级活动</router-link>
      <br>
      <router-link to="./award">获奖情况</router-link>
      <br>
      <router-link to="./study">研究项目</router-link>
      <br>
      <router-link to="./member">成员信息</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#intro {
  background-image: url("../../assets/introduction.png");
  /* background-position: center top; */
  width: 100%;
  height: 100%;
  background-size: 100%;
  position: absolute;
  top: 0%;
  left: 0px;
}
ul {
  color: white;
  text-decoration: none;
}
</style>
