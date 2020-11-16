const data = {
  "code": "200",
  "msg": "success",
  "data": {
    "tableId": 1,
    //流程ID
    "workFlowVersionId": "",
    //方案信息
    "workFlowDef": {
      "name": "合同审批-审批方案名称",
      "publicFlag": 1,
      "sortNo": 5,
      "duplicateRemovelFlag": 1,
      "optionTip": "",
      "optionNotNull": 0,
      "status": 1
    },
    //审批主管层级
    "directorMaxLevel": 4,
    //节点发起人列表
    "flowPermission": [],
    "nodeConfig": {
      "pkId": "sid-start-node",
      //节点名称
      "nodeName": "发起人-节点",
      //节点类型 0 起始节点 1审核节点 2抄送人节点 4分支节点
      "type": 0,
      //条件优先级别
      "priorityLevel": "",
      //1 指定成员 2 主管 4 发起人自选 5 发起人自己 7连续多级主管
      "settype": "", 
      // 1单人审批 2 多人审批
      "selectMode": "",
      //指定范围 1 全公司 2 指定成员 3 指定角色
      "selectRange": "",
      "examineRoleId": "",
      //指定主管时的主管层级数
      "directorLevel": "",
      "replaceByUp": "",
      // 1依次审批 2 多人会签
      "examineMode": "",
      //审核人为空时  1自动审批通过/不发起审批 2转交给审核管理员
      "noHanderAction": "",
      "examineEndType": "",
      "examineEndRoleId": "",
      //终点审批主管层级
      "examineEndDirectorLevel": "",
      //抄送人 是否发起人自选 1 是 0 否
      "ccSelfSelectFlag": "",
      //审批条件列表
      "conditionList": [],
      //节点选择人列表
      "nodeUserList": [],
      //下一个节点
      "childNode": {
        "nodeName": "审核人-节点",
        "error": false,
        "type": 1,
        "settype": 2,
        "selectMode": 0,
        "selectRange": 0,
        "directorLevel": 1,
        "replaceByUp": 0,
        "examineMode": 1,
        "noHanderAction": 2,
        "examineEndDirectorLevel": 0,
        //分支节点
        "childNode": {
          "nodeName": "路由",
          "type": 4,
          "childNode": null,
          "conditionNodes": [
            {
              "nodeName": "条件1",
              "error": false,
              "type": 3,
              "priorityLevel": 1,
              "conditionList": [
                {
                  "type": 1,
                  "columnId": 0,
                  "showName": "发起人"
                }
              ],
              "nodeUserList": [
                {
                  "type": 3,
                  "targetId": "324",
                  "name": "法务部"
                }
              ],
              "childNode": {
                "nodeName": "路由中间件",
                "type": 4,
                "priorityLevel": 1,
                "settype": 1,
                "selectMode": 0,
                "selectRange": 0,
                "examineRoleId": 0,
                "directorLevel": 1,
                "replaceByUp": 0,
                "examineMode": 1,
                "noHanderAction": 2,
                "examineEndType": 0,
                "examineEndRoleId": 0,
                "examineEndDirectorLevel": 1,
                "ccSelfSelectFlag": 1,
                "conditionList": [],
                "nodeUserList": [],
                "childNode": {
                  "nodeName": "抄送人",
                  "type": 2,
                  "ccSelfSelectFlag": 1,
                  "childNode": null,
                  "nodeUserList": [],
                  "error": false
                },
                "conditionNodes": [
                  {
                    "nodeName": "条件1",
                    "type": 3,
                    "priorityLevel": 1,
                    "settype": 1,
                    "selectMode": 0,
                    "selectRange": 0,
                    "examineRoleId": 0,
                    "directorLevel": 1,
                    "replaceByUp": 0,
                    "examineMode": 1,
                    "noHanderAction": 2,
                    "examineEndType": 0,
                    "examineEndRoleId": 0,
                    "examineEndDirectorLevel": 1,
                    "ccSelfSelectFlag": 1,
                    "conditionList": [
                      {
                        "columnId": 0,
                        "type": 1,
                        "conditionEn": "",
                        "conditionCn": "",
                        "optType": "",
                        "zdy1": "",
                        "zdy2": "",
                        "opt1": "",
                        "opt2": "",
                        "columnDbname": "",
                        "columnType": "",
                        "showType": "",
                        "showName": "",
                        "fixedDownBoxValue": ""
                      }
                    ],
                    "nodeUserList": [
                      {
                        "targetId": 85,
                        "type": 1,
                        "name": "天旭"
                      }
                    ],
                    "childNode": {
                      "nodeName": "审核人",
                      "type": 1,
                      "priorityLevel": 1,
                      "settype": 1,
                      "selectMode": 0,
                      "selectRange": 0,
                      "examineRoleId": 0,
                      "directorLevel": 1,
                      "replaceByUp": 0,
                      "examineMode": 1,
                      "noHanderAction": 2,
                      "examineEndType": 0,
                      "examineEndRoleId": 0,
                      "examineEndDirectorLevel": 1,
                      "ccSelfSelectFlag": 1,
                      "conditionList": [],
                      "nodeUserList": [
                        {
                          "targetId": 2515744,
                          "type": 1,
                          "name": "哈哈哈哈"
                        }
                      ],
                      "childNode": null,
                      "conditionNodes": [],
                      "error": false
                    },
                    "conditionNodes": [],
                    "error": false
                  },
                  {
                    "nodeName": "条件2",
                    "type": 3,
                    "priorityLevel": 2,
                    "settype": 1,
                    "selectMode": 0,
                    "selectRange": 0,
                    "examineRoleId": 0,
                    "directorLevel": 1,
                    "replaceByUp": 0,
                    "examineMode": 1,
                    "noHanderAction": 2,
                    "examineEndType": 0,
                    "examineEndRoleId": 0,
                    "examineEndDirectorLevel": 1,
                    "ccSelfSelectFlag": 1,
                    "conditionList": [],
                    "nodeUserList": [],
                    "childNode": null,
                    "conditionNodes": [],
                    "error": false
                  }
                ]
              }
            },
            {
              "nodeName": "条件2",
              "type": 3,
              "priorityLevel": 2,
              "conditionList": [],
              "nodeUserList": [],
              "childNode": null,
              "error": false
            }
          ]
        },
        "nodeUserList": []
      },
      "conditionNodes": []
    }
  }
}