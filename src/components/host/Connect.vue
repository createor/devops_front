<!-- 远程连接主机页面 -->
<template>
  <div ref="terminalContainer" class="terminal-container"></div>
</template>

<script>
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { AttachAddon } from 'xterm-addon-attach'

export default {
  name: 'Connect',
  props: {},
  data () {
    socket: null,
    terminal: null,
    attachAddon: null,
    fitAddon: null
  },
  computed: {
    url () {
      let protocol = window.location.protocol === 'https' : 'wss' ? 'ws'
      return protocol + '://' + window.location.host + '/api/ws/ssh?host=' + this.$router.query.host + '&name' + this$router.query.name
    }
  },
  mounted () {
    this.initSocket()
  },
  beofreDestory() {
    this.socket.close()
    this.terminal.dispose()
  },
  methods: {
    initSocket () {
      this.socket = new WebSocket(this.url)
      this.scoketOnOpen()
      this.socketOnClose()
      this.socketOnError()
      // this.socketOnMessage()
    },
    scoketOnOpen (){
      this.socket.onopen = () => {
        console.log('打开连接')
        this.initTerminal()
        // this.socketOnSend('{"cmd":"pwd"}')
      }
    },
    socketOnClose () {
      this.socket.onclose = () => {
        console.log('关闭连接')
        this.$router.go(-1)
      }
    },
    socketOnError () {
      this.socket.onerror = () => {
        console.log('出现错误')
      }
    },
    // socketOnSend (data) {
    //   console.log('发送信息')
    //   this.socket.send(JSON.stringify(data))
    // },
    // socketOnMessage () {
    //   this.socket.onmessage = (e) => {
    //     // 获取服务端发送的信息
    //     console.log('获取信息')
    //     let recData = JSON.parse(e.data)
    //   }
    // },
    initTerminal () {
      this.terminal = new Terminal({
        fontSize: 14
      })
      this.fitAddon = new FitAddon()
      this.attachAddon = new AttachAddon(this.socket)

      this.terminal.open(this.$ref.terminalContainer)
      
      this.terminal.loadAddon(this.attachAddon)
      this.terminal.loadAddon(this.fitAddon)
      this.fitAddon.fit()
      this.terminal.focus()
      window.addEventListener('resize', ()=>{
        this.fitAddon.fit()
      })
    }
  }
}
</script>

<style scoped>
.terminal-container {
  width: 100%;
  height: 100%;
}
</style>
