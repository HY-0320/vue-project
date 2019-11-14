<template>
  <div class=container>
    <div class="interface">
      <img src="../../assets/logo.png" alt="">
      <el-form label-position="right" label-width="60px">
        <el-form-item>
          <el-input style=" width: 250px; " v-model="userName" placeholder='请输入6~20位的用户名' @change="checkUsername()"
            clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" type="password" v-model="passWord" placeholder='请输入6~20位的密码'
            @change="checkPassword()" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" type="password" v-model="rePassWord" placeholder='请再次输入密码'
            @change="checkRepassword()" show-password>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" v-model="realName" placeholder='请输入您的真实姓名' @change="checkRealName()"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" v-model="stuId" placeholder='请输入您的学号' @change="checkStuid()" clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" v-model="userMail" placeholder='请输入您的邮箱' @change="checkUserMail()" clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 250px;" v-model="Mac" placeholder='请输入您的mac地址' @change="checkMac()" clearable>
          </el-input>
        </el-form-item>

      </el-form>
      <el-button class="loginbutton2" style="color:＃409EFF" @click="gologin" type="primary">登陆</el-button>
      <el-button style="color:＃409EFF" @click="register" type="primary">注册</el-button>
      <div class='hy'>Power by <a href="tencent://message/?uin=418817150&Site=Sambow&Menu=yes">黄越</a> @SWUST IOTAT
      </div>
    </div>

  </div>
</template>

<script>
export default {
  created () {
    document.title = 'iotSIS注册（公测版）'
  },
  data () {
    return {
      userName: '',
      passWord: '',
      rePassWord: '',
      realName: '',
      stuId: '',
      userMail: '',
      Mac: '',
      minlength: '6',
      maxlength: '20',
      mark: false  //标志位   当标志为true时，输入框有不合法的；为false时，输入框合法

    }
  },
  methods: {

    register () {
      var that = this
      if (this.mark == true) {
        this.$message({
          showClose: true,
          message: '请检查输入',
          type: 'warning'
        });
      }
      else {
        this.$axios({
          method: 'post',
          url: 'http://10.10.5.130:18887/register?userName=' + that.userName + '&password=' + that.passWord + '&mac=' + that.Mac + '&realName=' + that.realName + '&stuId=' + that.stuId + '&userMail=' + that.userMail
        }).then(res => {
          console.log(res)
          if (res.data.status == 200) {
            that.$alert('注册成功', { confirmButtonText: '确定' })

          }
          else if (res.data.status == 403) {
            that.$alert('用户存在', { confirmButtonText: '确定' })
          }
          else {
            that.$alert('注册失败', { confirmButtonText: '确定' })
          }
        })      }
    },
    checkUsername () {
      var that = this
      this.mark = false
      var username = /^\w{6,20}$/  //6~20个数字|英文、下划线的正则表达式
      if (!username.test(this.userName)) {  //检查用户名,用户名需要以 6~20个数字|英文、下划线
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '账号输入不合法',
          type: 'warning'
        });
      }

    },
    checkPassword () {
      var that = this
      var password = /^\w{6,20}$/ //6~20个数字|英文、下划线的正则表达式
      this.mark = false
      if (!password.test(this.passWord)) { //检查密码，规则和用户名相同
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '密码输入不合法',
          type: 'warning'
        });
      }
    },
    checkRepassword () {
      var that = this
      var password = /^\w{6,20}$/ //6~20个数字|英文、下划线的正则表达式
      this.mark = false
      if (!password.test(this.rePassWord)) { //检查再次输入的密码，是否合法
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '密码输入不合法',
          type: 'warning'
        });
      }
      if (this.rePassWord != this.passWord) { //检查是否和上一个密码相同
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '密码输入不一致',
          type: 'warning'
        });
      }
    },
    checkRealName () {
      this.mark = false
      var realname = /^[\u4E00-\u9FA5]{2,4}$/ //为中文汉字
      if (!realname.test(this.realName)) { //检查真实姓名是否合法
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '真实姓名输入不合法',
          type: 'warning'
        });
      }

    },
    checkStuid () {
      var stuid = /5120[0-9]{6}/  //以5120开头的十位学号
      this.mark = false
      if (!stuid.test(this.stuId)) { //检查学号输入是否合法
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '学号输入不合法',
          type: 'warning'
        });
      }
    },
    checkUserMail () {
      this.mark = false
      console.log(this.userMail)
      var usermail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱的正则表达
      console.log(usermail.test(this.userMail))
      if (!usermail.test(this.userMail)) { //检查输入邮箱是否合法
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: '邮箱输入不合法',
          type: 'warning'
        });
      }
    },
    checkMac () {
      this.mark = false
      var mac = /^([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}$/ //mac地址的正则表达
      if (!mac.test(this.Mac)) { //检查mac地址是否合法
        this.mark = true
        //在上面的弹出框弹出 来自element的样式
        this.$message({
          showClose: true,
          message: 'MAC地址输入不合法',
          type: 'warning'
        });
      }

    },
    gologin () {
      this.$router.push("/") //跳转到登陆界面
    }
  }



}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  margin-left: 150px;
}
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
.interface {
  border-radius: 5px;
  margin: 100px auto;
  width: 350px;
  padding: 10px 35px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginbutton2 {
  margin-left: 100px;
}
button.el-button.el-button--primary {
  background-color: black;
}
</style>