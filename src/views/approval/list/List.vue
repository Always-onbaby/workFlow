<template>
  <div class="aflow-setting-container">
    <div class="aflow-setting-page" v-loading="loading">
      <div class="aflow-page-header">
        <div class="title-c">
          <p class="title">表单管理</p>
        </div>
        <div class="toolbar">
          <el-button round>新建分组</el-button>
          <el-button round>分组排序</el-button>
          <el-button type="primary" icon="el-icon-plus" round>创建新表单</el-button>
        </div>
      </div>
      <div class="aflow-page-body">
        <div class="group-list">
          <div class="group-item" v-for="item of sortedDirProcessList" :key="item.dirId">
            <div class="group-item-title">
              <div class="title-text">
                {{item.dirName}}
                <span class="form-num">({{item.sortedProcessAndFormVoList.length}})</span>
              </div>
              <div class="title-toolbar">
                <!-- <div class="create-aflow-group">
                  <div class="toolbar-btn ant-dropdown-trigger">
                    <i class="el-icon-setting"></i>
                    <span>编辑分组</span>
                  </div>
                </div>
                <div class="toolbar-btn disabled">
                  <i class="el-icon-sort"></i>
                  <span>排序</span>
                </div>-->
              </div>
            </div>
            <div class="group-item-forms">
              <div class="form-row" v-for="(ch,i) of item.sortedProcessAndFormVoList" :key="i">
                <div class="form-title">
                  <div class="form-title-img">
                    <div class="app-icon">
                      <img
                        :src="ch.iconRealUrl"
                        :class="[ch.processStatus == 'INVALID' ? 'greyimg' : '']"
                        alt
                      />
                      <div class="app-icon-mask"></div>
                    </div>
                  </div>
                  <div class="form-title-text">
                    <div class="title-text">{{ch.flowTitle}}</div>
                    <div class="title-subtitle">{{ch.description}}</div>
                  </div>
                </div>
                <div class="form-visible">
                  <div class="edit-form-visible">
                    <div class="visible-key">可见范围：</div>
                    <div class="visible-value">
                      <span class="value">{{ch.visibleSummaryText}}</span>
                      <span class="link">修改</span>
                    </div>
                  </div>
                </div>
                <div class="form-date">
                  <div class="date-key">最后更新：</div>
                  <div class="date-value">{{ch.gmtModified | moment}}</div>
                </div>
                <div class="form-actions">
                  <div class="link">
                    <span @click="editDetail">编辑</span>
                  </div>
                  <div class="splitter"></div>
                  <div class="link">停用</div>
                  <div class="splitter"></div>
                  <div class="move-aflow-group">
                    <div class="link">移动到</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMgrProcessList } from '@/api/approve'
export default {
  data() {
    return {
      loading: false,
      sortedDirProcessList: [],
    }
  },
  created() {
    this.getMgrProcessList()
  },
  methods: {
    getMgrProcessList() {
      this.loading = true
      getMgrProcessList().then((res) => {
        this.loading = false
        let _list = res.result.sortedDirProcessList || []
        let _partTwo = []
        let _partOne = _list.map((item) => {
          if (
            item.sortedProcessAndFormVoList &&
            item.sortedProcessAndFormVoList.length
          ) {
            let filterList = item.sortedProcessAndFormVoList.filter(
              (k) => k.processStatus == 'INVALID'
            )
            _partTwo.push(...filterList)
            item.sortedProcessAndFormVoList = item.sortedProcessAndFormVoList.filter(
              (k) => k.processStatus != 'INVALID'
            )
          }
          return item
        })
        this.sortedDirProcessList = _partOne.concat({
          dirId: 'stop',
          dirName: '已停用',
          sortedProcessAndFormVoList: _partTwo,
        })
      })
    },
    editDetail() {
      this.$router.push('/approval/setting')
    },
  },
}
</script>
<style lang="less" scoped>
@import './list.less';
</style>