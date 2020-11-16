<template>
  <div class="designer">
    <div class="create-page-header">
      <div class="name">
        <el-image class="img-wrap" :src="url" fit="cover"></el-image>
        <span>健康承诺书</span>
      </div>
      <div class="tab">
        <div class="tabs">
          <div
            :class="['tab-item', currentTab === item.value ? 'active' : '']"
            v-for="item of tabs"
            :key="item.value"
            @click.self="changeTab(item.value)"
          >{{item.label}}</div>
        </div>
      </div>
      <div class="action">
        <el-button plain @click="calcelEdit">取 消</el-button>
        <el-button type="primary">发 布</el-button>
      </div>
    </div>
    <div class="page-content">
      <BaseSetting
        v-if="currentTab === 'baseSetting'"
        :configData.sync="configData"
        :dirList="dirList"
      ></BaseSetting>
      <BaseForm v-if="currentTab === 'form'"></BaseForm>
      <BaseProcess v-if="currentTab === 'process'"></BaseProcess>
      <FillSetting v-if="currentTab === 'fillSetting'"></FillSetting>
    </div>
  </div>
</template>
<script>
import { getFormAndProcessConfig } from '@/api/approve'
import BaseSetting from '../components/BaseSetting'
import BaseForm from '../components/BaseForm'
import BaseProcess from '../components/BaseProcess'
import FillSetting from '../components/FillSetting'
export default {
  components: {
    BaseSetting,
    BaseForm,
    BaseProcess,
    FillSetting,
  },
  data() {
    return {
      tabs: [
        {
          label: '基础设置',
          value: 'baseSetting',
        },
        {
          label: '表单设计',
          value: 'form',
        },
        {
          label: '流程设计',
          value: 'process',
        },
        {
          label: '高级设计',
          value: 'fillSetting',
        },
      ],
      currentTab: '',
      url: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png',
      passComponentList: [],
      iconUrlMap: [],
      dirList: [],
      configData: {},
    }
  },
  created() {
    this.getFormAndProcessConfig()
  },
  mounted() {
    this.currentTab = this.$route.query.tab || 'BaseSetting'
  },
  methods: {
    getFormAndProcessConfig() {
      let params = {
        processCode: 'PROC-0D4F4CD1-9FCB-4706-9D87-F39045B801BB',
        tag: '',
        appType: 0,
      }
      getFormAndProcessConfig(params).then((res) => {
        const data = res.result
        this.configData = data
        // console.log(res.result)
      })
    },
    changeTab(val) {
      // console.log(this.currentTab)
      if (val == this.currentTab) {
        return false
      }
      this.currentTab = val
      this.$router.replace({
        path: this.$route.fullPath,
        query: {
          tab: val,
        },
      })
    },
    // 取消编辑
    calcelEdit() {
      this.$router.replace('/approval/list')
    },
  },
  watch: {
    $route(val) {
      this.currentTab = val.query.tab
    },
  },
}
</script>
<style lang="less" scoped>
@import './setting.less';
</style>