<!-- 文章 -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button style="float: right; padding: 3px 0;" type="text" @click="look(articleId)">查看</el-button>
    </div>
    <div class="text item">
    {{ content }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Question',
  props: {
    articleId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    look (articleId) {
      console.log('你正在查看' + articleId)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}
</style>
