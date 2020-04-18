<template>
    <div class="add-node-btn-box">
        <div class="add-node-btn">
            <el-popover placement="right-start" v-model="visible">
                <div class="add-node-popover-body">
                    <a class="add-node-popover-item approver" @click="addType(1)">
                        <div class="item-wrapper">
                            <span class="iconfont"></span>
                        </div>
                        <p>审批人</p>
                    </a>
                    <a class="add-node-popover-item notifier" @click="addType(2)">
                        <div class="item-wrapper">
                            <span class="iconfont"></span>
                        </div>
                        <p>抄送人</p>
                    </a>
                    <a class="add-node-popover-item condition" @click="addType(4)">
                        <div class="item-wrapper">
                            <span class="iconfont"></span>
                        </div>
                        <p>条件分支</p>
                    </a>
                </div>
                <button class="btn" type="button" slot="reference">
                    <span class="iconfont"></span>
                </button>
            </el-popover>
        </div>
    </div>
</template>
<script>
export default {
    props: ["childNodeP"],
    data() {
        return {
            visible: false
        }
    },
    methods: {
        addType(type) {
            this.visible = false;
            if (type != 4) {
                var data;
                if (type == 1) {
                    data = {
                        "nodeName": "审核人", //节点名称
                        "error": true,
                        "type": 1, //0 起始节点 1审核节点 2抄送人节点 4分支节点
                        "settype": 1, //1 指定成员 2 主管 4 发起人自选 5 发起人自己 7连续多级主管
                        "selectMode": 0, // 1单人审批 2 多人审批
                        "selectRange": 0, //指定范围 1 全公司 2 指定成员 3 指定角色
                        "directorLevel": 1, //指定主管时的主管层级数
                        "replaceByUp": 0,  //没用到
                        "examineMode": 1, // 1依次审批 2 多人会签
                        "noHanderAction": 1, //审核人为空时  1自动审批通过/不发起审批 2转交给审核管理员
                        "examineEndDirectorLevel": 0, //最终主管层级
                        "childNode": this.childNodeP,
                        "nodeUserList": [] //节点选择人列表
                    }
                } else if (type == 2) {
                    data = {
                        "nodeName": "抄送人",
                        "type": 2,
                        "ccSelfSelectFlag": 1, //抄送人 是否发起人自选 1 是 0 否
                        "childNode": this.childNodeP,
                        "nodeUserList": []
                    }
                }
                this.$emit("update:childNodeP", data)
            } else {
                this.$emit("update:childNodeP", {
                    "nodeName": "路由",
                    "type": 4,
                    "childNode": null,
                    "conditionNodes": [{
                        "nodeName": "条件1",
                        "error": true,
                        "type": 3,
                        "priorityLevel": 1,
                        "conditionList": [],
                        "nodeUserList": [],
                        "childNode": this.childNodeP,
                    }, {
                        "nodeName": "条件2",
                        "type": 3,
                        "priorityLevel": 2,
                        "conditionList": [],
                        "nodeUserList": [],
                        "childNode": null
                    }]
                })
            }
        }
    }
}
</script>