<template>
  <div>
    <h1 class="passage-header" style="color:white">{{name}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: "hello"
    }
  },


  created () {
    this.getDetails()
  },
  methods: {



  }
}
</script>
<style>
</style>