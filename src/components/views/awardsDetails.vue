<template>
  <div>
    <h1 class="passage-header" style="color:white"></h1>
    <input type="text" :value="this.$store.state.tableData[0].name">
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