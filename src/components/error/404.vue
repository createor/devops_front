<!-- 404页面 -->
<template>
    <div class="notFound">
      <h1>{{ message }}</h1>
    </div>
</template>
<script>
export default {
  name: 'Page404',
  data () {
    return {
      message: 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>
<style scoped>
.notFound {
  width:100px;
  height:20px;
}
</style>
