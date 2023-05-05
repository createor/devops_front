<!-- 文章列表 -->
<template>
  <div>
    <div v-if="this.$route.name === 'Article'">
      <el-table :data="articleData">
        <el-table-column label="ID" prop="id" v-if="false"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="更新日期" prop="updateTime"></el-table-column>
        <el-table-column label="作者" prop="author"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="catArticle(scope.row.id)"
              type="text"
              size="small"
            >
            <i class="el-icon-document"></i>
            查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      articleData: [{
        id: '1',
        author: 'admin',
        title: '标题1',
        updateTime: '2023-05-04 12:00:00'
      }]
    }
  },
  methods: {
    catArticle (articleId) {
      this.$router.push({
        name: 'ShowArticle',
        query: {id: articleId}
      }).catch(err => err)
    }
  }
}
</script>

<style scoped>

</style>
