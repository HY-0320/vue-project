<template>
  <div class=container>
    <div class="interface">
      <img src="../../assets/logo.png" alt="">
      <el-form label-position="right" label-width="60px">
        <el-form-item>
          <el-input style=" width: 250px; " placeholder="请输入账号" v-model="username" @change="checkUsername()" clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style=" width: 250px; " type="password" placeholder="请输入密码" @change="checkPassword()"
            v-model="password" show-password>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button style="color:＃409EFF" @click="login" class="loginbutton1" type="primary">登陆</el-button>
      <el-button style="color:＃409EFF" @click="goRegister" type="primary">注册</el-button>

    </div>
    <div class='hy'>Power by <a href="tencent://message/?uin=418817150&Site=Sambow&Menu=yes">黄越</a> @SWUST IOTAT
    </div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      username: '',
      password: '',
      minlength: '6',
      maxlength: '20',
      mark: false
    }
  },
  methods:
  {
    login () {
      var that = this
      if (this.mark == true) {
        that.$message({
          showClose: true,
          message: '请检查账号和密码的输入',
          type: 'warning'
        });
      }
      else {        this.$axios({
          method: 'post',
          url: 'http://10.10.5.130:18887/login?userName=' + that.username + '&password=' + that.password
        }).then(res => {
          console.log(res)
          if (res.data.status == 200) {
            that.$alert('登陆成功', { confirmButtonText: '确定' })

          }
          else {
            that.$alert('登陆失败', { confirmButtonText: '确定' })
          }
        })      }

    },
    goRegister () {
      this.$router.push("/register")
    },
    checkUsername () {
      var that = this
      this.mark = false
      if (this.username.length > that.maxlength || this.username.length < that.minlength) {
        this.mark = true
        that.$message({
          showClose: true,
          message: '用户名输入不合法',
          type: 'warning'
        });
      }
    },
    checkPassword () {
      var that = this
      this.mark = false
      if (this.password.length > that.maxlength || this.password.length < that.minlength) {
        this.mark = true
        that.$message({
          showClose: true,
          message: '密码输入不合法',
          type: 'warning'
        });
      }

    }

  }
}

</script>
<style scoped>
a {
  text-decoration: none;
}
.hy {
  text-align: center;
  color: aliceblue;
  font-size: 14px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  bottom: 5%;
}
.interface {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -211px;
  margin-top: -107.8px;
  border-radius: 5px;
  /* margin: auto; */
  width: 350px;
  padding: 10px 35px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(../../assets/img/1.png);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
}
.loginbutton1 {
  margin-left: 100px;
}
img {
  width: 50px;
  height: 50px;
  margin-left: 150px;
}
button.el-button.el-button--primary {
  background-color: black;
}
</style>