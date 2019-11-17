<template>
<div id="add">
    <h1><router-link to="/">返回</router-link></h1>
<div>
  <h4 style="color:white">活动信息</h4>
</div>

<form v-on:submit="addactivities"></form>

<div>
  <label class="" style="color:white">活动名称</label>
  <input type="text" placeholder="name" v-model="activities.name">
</div>
<div>
  <label style="color:white">活动时间</label>
  <input type="text" placeholder="time" v-model="activities.time">
</div>
<div>
  <label style="color:white">活动人员</label>
  <input type="text" placeholder="crew" v-model="activities.crew">
</div>
<div>
  <label style="color:white">活动地点</label>
  <input type="text" placeholder="address" v-model="activities.address">
</div>

<button @click="add"><router-link to="/">添加</router-link></button>
</div>

</template>

<script>
export default {

  data() {
    return {
      activities:{}
    }
  },
  methods:{
    addactivities(){
      var newtabledata = {
        name:this.addactivities.name,
        time:this.addactivities.time,
        crew:this.addactivities.crew,
        address:this.addactivities.address,
      }
      this.activities.push()
    },
    add(){
      console.log('ok')
    }
  }
 
};
</script>

<style>
#add{
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(../assets/background.png);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
}
*{
  margin: 0px;
  padding: 0px;
}
</style>