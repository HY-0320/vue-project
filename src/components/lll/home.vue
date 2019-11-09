<template>
  <div id="home">
    <h1>物联网应用技术与创新实践班</h1>
    <ul class="ul1">
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
    <ul class="ul2">
      <li>登录</li>
      <li>注册</li>
    </ul>
  </div>
</template>

<script>

export default {


}
</script>

<style >
#home {
  background-image: url("../../assets/homepage.png");
  width: 100%;
  height: 100%;
  background-size: 100%;
  position: absolute;
  top: 0%;
  left: 0px;
}
h1 {
  position: relative;
  top: 300px;
  color: #fff;
}
.ul1 {
  list-style-type: none;
  position: relative;
  top: 100px;
  left: -600px;
  color: #fff;
}
.ul2 {
  list-style-type: none;
  position: relative;
  top: 100px;
  left: 600px;
  color: #fff;
}
li {
  display: block;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
}
</style>
