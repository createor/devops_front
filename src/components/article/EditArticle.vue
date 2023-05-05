<!-- 使用富文本编辑器编辑文章 -->
<template>
  <div>
    <div>
      <el-button type="primary" @click="save">保持文件</el-button>
    </div>
    <div>
      <editor id="tinymce" v-model="pageContent" :init="init" />
    </div>
  </div>
</template>

<script>
import tinymce from 'tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'
import plugins from './plugins'
import toolbar from './toolbar'
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/code'
import 'tinymce/plugins/link'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/template'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/autoresize'

export default {
  name: 'EditArticle',
  components: {
    Editor
  },
  props: {
    // 文章内容
    content: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      pageContent: '',
      init: {
        selector: '#tinymce',
        height: 700,
        language_url: './static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: './static/tinymce/skins/ui/oxide',
        content_css: './static/tinymce/skins/content/default/content.css',
        plugins: plugins,
        // plugins: 'image link code table lists wordcount',
        toolbar: toolbar,
        branding: false,
        fontsize_formats: '14px 16px 18px 20px 24px',
        // 图片上传
        images_upload_handler: (blobInfo, success, failure) => {
          // const formData = new FormData()
        }
      }
    }
  },
  mounted () {
    tinymce.init({})
    this.pageContent = this.content
  },
  watch: {
    content (nv) {
      this.pageContent = nv
    },
    pageContent (nv) {
      //
    }
  },
  methods: {
    save () {
      // 获取内容
      let context = tinymce.activeEditor.getContent()
      console.log(context)
      // 提交到服务器
    }
  }
}
</script>

<style scoped>

</style>
