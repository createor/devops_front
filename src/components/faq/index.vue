<!-- faq问题平台 -->
<!-- 提问、回答、点赞 -->
<!-- 搜索，按时间排序，按点赞数排序 -->
<template>
  <div>
    <!-- 搜索组件 -->
    <Search />
    <div>
      <!-- 问题列表 -->
      <question v-for="q in qList" :key="q.id" :articleId="q.articleId" :title="q.title" :content="q.content" />
    </div>
  </div>
</template>

<script>
import Search from './Search'
import Question from './Question'
export default {
  name: 'Faq',
  components: {
    Search,
    Question
  },
  data () {
    return {
      qList: [{
        id: '1',
        articleId: '111',
        title: '问题1',
        questioner: '用户a',
        content: 'xxxxx'
      },
      {
        id: '2',
        articleId: '112',
        title: '问题2',
        questioner: '用户b',
        content: 'xxxxx'
      }]
    }
  },
  methods: {
    // 获取faq列表
    _getArticleList () {
      this.qList = []
    }
  }
}
</script>

<style scoped>

</style>
