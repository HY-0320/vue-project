<template>
  <div>
    <h1 class="passage-header" v-bind:name="tableData.name"></h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: ""
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      const that = this.$route.quary.name
    }



  }
}
</script>
<style>
</style>