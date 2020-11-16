<template>
  <div class="base-setting-wrap">
    <div class="base-setting">
      <el-form v-model="formData" ref="baseSetting" :rules="rules" label-position="top">
        <div class="form-info">
          <div class="info-icon">
            <el-image class="icon-wrap" :src="iconUrl"></el-image>
          </div>
          <div class="info-name">
            <el-form-item prop="name">
              <p slot="label" class="label-name">
                名称
                <span class="label-tips">最多50个字</span>
              </p>
              <el-input v-model="formData.formVo.name" maxlength="50" show-word-limit></el-input>
            </el-form-item>
          </div>
        </div>
        <el-form-item prop="name">
          <p slot="label" class="label-name">所在分组</p>
          <el-select v-model="formData.dirId" placeholder="请选择">
            <el-option
              v-for="item in dirList"
              :key="item.dirId"
              :label="item.dirName"
              :value="item.dirId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <p slot="label" class="label-name">
            表单说明
            <span class="label-tips">最多100个字</span>
          </p>
          <el-input
            v-model="formData.formVo.memo"
            type="textarea"
            :rows="4"
            maxlength="100"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <p slot="label" class="label-name">谁可以发起提交</p>
          <div class="el-select el-select--small">
            <div class="el-input el-input--small">
              <span class="self-select">12</span>
              <span class="right-icon">
                <i class="el-icon-arrow-right"></i>
              </span>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <p slot="label" class="label-name">谁可以管理这个模板并导出数据</p>
          <div class="el-select el-select--small">
            <div class="el-input el-input--small">
              <span class="self-select">12</span>
              <span class="right-icon">
                <i class="el-icon-arrow-right"></i>
              </span>
            </div>
          </div>
          <p class="form-item-tips">只有模板管理员可以编辑这个表单和导出数据</p>
        </el-form-item>
        <el-form-item>
          <p slot="label" class="label-name">谁可以查看所有数据</p>
          <div class="el-select el-select--small">
            <div class="el-input el-input--small">
              <span class="self-select">12</span>
              <span class="right-icon">
                <i class="el-icon-arrow-right"></i>
              </span>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseSetting',
  props: {
    configData: {
      type: Object,
      default: () => {},
    },
    dirList: {
      type: Array,
      default: () => [],
    },
  },
  // mounted() {
  //   console.log('a')
  // },
  data() {
    return {
      num: '1',
      iconUrl:
        'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png',
      formData: {
        formVo: {},
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    }
  },
  watch: {
    configData: {
      handler(val) {
        this.formData = val
        // console.log(val)
      },
      deep: true,
    },
  },
}
</script>
<style lang="less" scoped>
.base-setting-wrap {
  position: absolute;
  left: 0;
  top: 54px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: #f2f4f5;
  .base-setting {
    width: 660px;
    padding: 24px;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 12px;
    right: 0;
    bottom: 12px;
    overflow: auto;
    /deep/.el-form {
      .form-info {
        display: flex;
        justify-content: center;
        overflow: hidden;
        .info-icon {
          position: relative;
          margin-right: 16px;
          margin-top: 5px;
          .icon-wrap {
            min-width: 48px;
            min-height: 48px;
            width: 48px;
            height: 48px;
            cursor: pointer;
            border-radius: 20px;
          }
        }
        .info-name {
          flex: auto;
        }
      }
      .el-form-item__label {
        color: rgba(0, 0, 0, 0.85);
        line-height: 1;
        margin-bottom: 8px;
        font-weight: bold;
        padding: 0;
        display: inline-flex;
        .label-tips {
          margin-left: 10px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.45);
          font-style: normal;
          font-weight: normal;
        }
      }
      .el-form-item__content {
        .el-select {
          width: 100%;
        }
        .self-select {
          display: flex;
          background-color: #fff;
          background-image: none;
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          box-sizing: border-box;
          color: #606266;
          font-size: inherit;
          padding-right: 30px;
          height: 32px;
          outline: 0;
          padding-left: 15px;
          width: 100%;
          cursor: pointer;
        }
        .right-icon {
          position: absolute;
          top: 0;
          right: 10px;
          height: 100%;
          color: #c0c4cc;
          text-align: center;
        }
      }
      .form-item-tips {
        color: rgba(0, 0, 0, 0.65);
        font-size: 12px;
        user-select: none;
      }
    }
  }
}
</style>