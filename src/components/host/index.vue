<!-- 主机表格 -->
<template>
  <div>
    <div v-if="this.$route.name === 'Host'">
      <div>
      <!-- 搜索功能 -->
      </div>
      <el-table :data="hostData">
        <el-table-column label="IP地址" prop="ip"></el-table-column>
        <el-table-column label="主机名" prop="hostname"></el-table-column>
        <el-table-column label="用户" prop="user"></el-table-column>
        <el-table-column label="内存" prop="mem"></el-table-column>
        <el-table-column label="CPU" prop="cpu"></el-table-column>
        <el-table-column lable="操作">
          <template slot-scope="scope">
            <el-button
              @click="showDetail(scope.row.ip)"
              type="text"
              size="small">
            详情
            </el-button>
            <el-button
              @click="toRemote(scope.row.ip,scope.row.user)"
              type="text"
              size="small">
            远程
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAll } from '@/api/host'
export default {
  name: 'Host',
  data () {
    return {
      hostData: []
    }
  },
  methods: {
    showDetail (ip) {
      this.$router.push({name: 'Detail', query: {ip: ip}}).catch(err => err)
    },
    toRemote (ip, user) {
      this.$router.push({name: 'Connect', query: {host: ip, name: user}}).catch(err => err)
    },
    _getAllHost () {
      getAll().then((res) => {
        this.hostData = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this._getAllHost()
  }
}
</script>

<style scoped>

</style>
