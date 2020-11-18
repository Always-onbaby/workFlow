<template>
  <div class="base-form">
    <div class="base-editor">
      <div class="editor-bd">
        <div class="editor-left">
          <div class="widget-pane">
            <div class="tab-wrap">
              <div class="radio-menu">
                <div
                  :class="['radio-item', currentRadio === item.value ? 'radio-active' : '']"
                  v-for="item of radioList"
                  :key="item.value"
                >{{item.label}}</div>
              </div>
              <div class="radio-content">
                <div class="content-item">
                  <div class="widget-box-wrap">
                    <div class="widget-box">
                      <div class="widget-item-wrap" v-for="item of 27" :key="item">
                        <div class="widge">
                          <span class="anticon">
                            <i class="el-icon-video-camera"></i>
                          </span>
                          <span>日期区间</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="editor-content">
          <div class="toolbar">1</div>
          <div class="simulator-wrap">1</div>
        </div>
        <div class="editor-right">
          <div class="setter-pane">
            <div class="set-header">12</div>
            <div class="set-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRadio: '1',
      radioList: [
        {
          value: '1',
          label: '控件库',
        },
        {
          value: '2',
          label: '套件',
        },
        {
          value: '3',
          label: '关联表单',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.base-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  .editor-bd {
    flex: 1;
    display: flex;
    // height: 100vh;
    .editor-left {
      border-right: 1px solid #ecedef;
      background: #fafafa;
      * {
        user-select: none;
      }
      .widget-pane {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 280px;
        height: 100vh;
        background: #f5f6f6;
        .tab-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .radio-content {
          position: absolute;
          left: 0;
          display: flex;
          transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          will-change: left;
          .content-item {
            width: 280px;
            opacity: 1;
            transition: opacity 0.45s;
            .widget-box-wrap {
              overflow-y: overlay;
              width: 100%;
              height: calc(100vh - 44px);
              padding: 0 12px 60px;
              @scrollbar();
              .widget-box {
                margin-top: 20px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                .widget-item-wrap {
                  &:nth-child(odd) {
                    margin-right: 8px;
                  }
                  .widge {
                    display: inline-flex;
                    align-items: center;
                    width: 124px;
                    height: 40px;
                    margin-bottom: 12px;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    cursor: grab;
                    background-color: #fff;
                    > span {
                      &:last-child {
                        font-size: 12px;
                        color: rgba(17, 31, 44, 0.85);
                      }
                    }
                    .anticon {
                      margin: 0 10px;
                      color: #111f2c;
                      font-size: 16px;
                      display: inline-block;
                      // color: inherit;
                      font-style: normal;
                      line-height: 0;
                      text-align: center;
                      text-transform: none;
                      vertical-align: -0.125em;
                      text-rendering: optimizeLegibility;
                    }
                  }
                }
              }
            }
          }
        }
        .radio-menu {
          box-sizing: content-box;
          display: flex;
          align-items: center;
          margin: 12px 12px 0;
          height: 28px;
          box-shadow: 0 2px 4px 0 rgba(17, 31, 44, 0.04);
          border: 1px solid #ecedef;
          border-radius: 16px;
          background-color: #fff;
          .radio-item {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 12px;
            color: rgba(17, 31, 44, 0.72);
            cursor: pointer;
            &.radio-active {
              color: #0089ff;
              font-family: PingFangSC-Medium;
            }
            &:nth-child(2),
            &:nth-child(3) {
              border-left: 1px solid #ecedef;
            }
          }
        }
      }
    }
    .editor-right {
      width: 300px;
      background: #fff;
      border-left: 1px solid #ecedef;
      .setter-pane {
        height: 100vh;
        overflow-y: auto;
        overflow-y: overlay;
        padding-bottom: 100px;
        .set-header {
          height: 32px;
          min-height: 32px;
          font-size: 14px;
          padding: 0 12px;
          background-color: #fafafa;
          // min-height: 48px;
          // margin-bottom: -1px;
          // padding: 0 24px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          // font-size: 16px;
          // background: rgba(0,0,0,0);
          border-bottom: 1px solid #e8e8e8;
          border-radius: 2px 2px 0 0;
          zoom: 1;
          display: flex;
          align-items: center;
        }
      }
    }
    .editor-content {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f2f4f5;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 32px;
      padding: 0 20px;
      background: #fafafb;
      border-bottom: 1px solid #ebecee;
    }
    .simulator-wrap {
      display: flex;
      justify-content: center;
      background: #fff;
      width: 100%;
      height: 100vh;
    }
  }
}
</style>