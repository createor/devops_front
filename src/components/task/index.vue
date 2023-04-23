<!-- 展示任务 -->
<template>
  <div>
    <!-- 搜索 -->
  </div>
  <div>
    <el-button @click="newTask">新建任务</el-button>
  </div>
  <div>
    <el-table :data="taskData">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="任务名称" prop="taskName"></el-table-column>
      <el-table-column label="创建者" prop="createor"></el-table-column>
      <el-table-column label="任务执行时间" prop="taskTime"></el-table-column>
      <el-table-column label="倒计时">
        <template slot-scope="scope1">
          <el-statistic
            v-if="compare(scope1.row.taskTime)"
            ref="statistic"
            @finish="getTaskResult"
            format="HH:mm:ss"
            :value="getTime(scope1.row.taskTime)"
            time-indices
          ></el-statistic>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeTask(scope.$index, scope.row)"
          >
          </el-switch>
          <el-button
            type="text"
            size="small"
          >
          编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ShowTask',
  data () {
    return {
      taskData: [{
        id: 1,
        taskName: '任务1',
        createor: 'admin',
        taskTime: '2023-04-23 00:00:00',
        status: true
      },
      {
        id: 2,
        taskName: '任务2',
        createor: 'admin',
        taskTime: '2023-04-24 00:00:00',
        status: false
      }]
    }
  },
  methods: {
    changeTask (index, data) {
      console.log(data)
      this.$refs.statistic.suspend(!data.status)
    },
    compare (time) {
      let start = new Date().getTime()
      let end = new Date(time).getTime()
      return end > start
    },
    getTime (time) {
      return new Date(time).getTime()
    },
    getTaskResult () {
      // 获取任务执行结果
    },
    newTask () {
      //
    }
  }
}
</script>

<style scoped>

</style>
