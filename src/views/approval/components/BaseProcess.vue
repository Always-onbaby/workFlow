<template>
  <div class="base-process">
    <div class="fd-nav-content">
      <section class="dingflow-design">
        <div class="zoom">
          <el-input-number v-model="nowVal" :step="10"></el-input-number>
        </div>
        <div
          class="box-scale"
          id="box-scale"
          :style="'transform: scale('+nowVal/100+'); transform-origin: 50% 0px 0px;'"
        >
          <nodeWrap
            :nodeConfig.sync="nodeConfig"
            :flowPermission.sync="flowPermission"
            :isTried.sync="isTried"
            :directorMaxLevel="directorMaxLevel"
            :tableId="tableId"
          ></nodeWrap>
          <div class="end-node">
            <div class="end-node-circle"></div>
            <div class="end-node-text">流程结束</div>
          </div>
        </div>
      </section>
    </div>
    <el-dialog title="提示" :visible.sync="tipVisible">
      <div class="ant-confirm-body">
        <i class="anticon anticon-close-circle" style="color: #f00;"></i>
        <span class="ant-confirm-title">当前无法发布</span>
        <div class="ant-confirm-content">
          <div>
            <p class="error-modal-desc">以下内容不完善，需进行修改</p>
            <div class="error-modal-list">
              <div class="error-modal-item" v-for="(item,index) in tipList" :key="index">
                <div class="error-modal-item-label">流程设计</div>
                <div class="error-modal-item-content">{{item.name}} 未选择{{item.type}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="tipVisible = false">我知道了</el-button>
        <el-button type="primary" @click="tipVisible = false">前往修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 100,
      isTried: false,
      tipList: [],
      tipVisible: false,
      nowVal: 100,
      processConfig: {},
      nodeConfig: {},
      workFlowDef: {},
      flowPermission: [],
      directorMaxLevel: 0,
      dialogVisible: true,
      tableId: '',
    }
  },
  created() {
    this.$axios
      .get('/data.json', {
        workFlowDefId: this.$route.params.workFlowDefId,
      })
      .then((res) => {
        this.processConfig = res.data
        this.nodeConfig = this.processConfig.nodeConfig
        this.flowPermission = this.processConfig.flowPermission
        this.directorMaxLevel = this.processConfig.directorMaxLevel
        this.workFlowDef = this.processConfig.workFlowDef
        this.tableId = this.processConfig.tableId
      })
  },
  methods: {
    // reErr(data) {
    //   if (data.childNode) {
    //     if (data.childNode.type == 1) {
    //       //审批人
    //       if (data.childNode.error) {
    //         this.tipList.push({ name: data.childNode.nodeName, type: '审核人' })
    //       }
    //       this.reErr(data.childNode)
    //     } else if (data.childNode.type == 2) {
    //       //抄送人
    //       if (data.childNode.error) {
    //         this.tipList.push({ name: data.childNode.nodeName, type: '抄送人' })
    //       }
    //       this.reErr(data.childNode)
    //     } else if (data.childNode.type == 3) {
    //       //条件
    //       this.reErr(data.childNode.childNode)
    //     } else if (data.childNode.type == 4) {
    //       this.reErr(data.childNode)
    //       for (var i = 0; i < data.childNode.conditionNodes.length; i++) {
    //         if (data.childNode.conditionNodes[i].error) {
    //           this.tipList.push({
    //             name: data.childNode.conditionNodes[i].nodeName,
    //             type: '条件',
    //           })
    //         }
    //         this.reErr(data.childNode.conditionNodes[i])
    //       }
    //     }
    //   } else {
    //     data.childNode = null
    //   }
    // },
    // saveSet() {
    //   this.isTried = true
    //   this.tipList = []
    //   this.reErr(this.nodeConfig)
    //   if (this.tipList.length != 0) {
    //     this.tipVisible = true
    //     return
    //   }
    //   this.processConfig.flowPermission = this.flowPermission
    //   console.log(JSON.stringify(this.processConfig))
    //   // this.$axios.post("", this.processConfig).then(res => {
    //   //     if (res.code == 200) {
    //   //         this.$message.success("设置成功");
    //   //         setTimeout(function () {
    //   //             window.location.href = ""
    //   //         }, 200)
    //   //     }
    //   // })
    // },
    // zoomSize(type) {
    //   if (type == 1) {
    //     if (this.nowVal == 50) {
    //       return
    //     }
    //     this.nowVal -= 10
    //   } else {
    //     if (this.nowVal == 300) {
    //       return
    //     }
    //     this.nowVal += 10
    //   }
    // },
  },
}
</script>
<style lang="less" scoped>
@import './workflow.css';.base-process {
	position: relative;
	height: 100vh;
	.zoom {
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		width: 125px;
		right: 40px;
		margin-top: 30px;
		z-index: 10;
	}
	.dingflow-design {
		width: 100%;
		background-color: #f5f5f7;
		overflow: auto;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}
}
.error-modal-list {
	width: 455px;
}
</style>