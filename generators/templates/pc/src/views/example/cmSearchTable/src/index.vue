<!--
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/views/example/cmSearchTable/src/index.vue
 * @Date: 2022-04-26 18:35:47
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 11:39:12
 * @Description:
-->
<template>
  <cm-searchTable
    :formModel="model"
    :fieldForm="fieldSchema"
    :data="tableData"
    :totals="totals"
    :fieldTable="columns"
    @search="search"
    @paginationChance="search"
  />
</template>
<script>
export default {
  name: 'TestS',
  data() {
    return {
      totals: 4,
      model: {
        id: '2323',
        id1: '',
        id2: '',
        slot: '',
        name: '',
        eventDataType: '',
        radio: 1,
        checkbox: [1],
        switch: true,
        lastUpdateTimer: []
      },
      fieldSchema: [
        {
          label: '姓名',
          xType: 'input',
          prop: 'id',
          clearable: true,
          focus: () => {},
          on: {
            change: () => {}
          }
        },
        {
          label: '姓名1',
          xType: 'input',
          prop: 'id1',
          clearable: true
        },
        {
          label: '姓名2',
          xType: 'input',
          prop: 'id2',
          clearable: true
        },
        {
          label: '职业',
          xType: 'select',
          prop: 'name',
          clearable: true,
          labelKey: 'label',
          // valueKey: 'name',
          xStore: () => {
            return this.xStore
          },
          on: {
            change: () => {
              this.$nextTick(() => {})
            }
          }
        },
        {
          label: '一期二期',
          prop: 'eventDataType',
          xType: 'select',
          placeholder: '请选择一期二期',
          // eslint-disable-next-line space-before-function-paren
          xStore: function () {
            return this.list.eventDataList
          },
          build: {
            url: '/cityscapeAi/eventCenter/enum/getEnumByEnumTypeAddFirst?enumType=EVENT_DATA_TYPE',
            label: 'codeDesc',
            value: 'codeValue',
            xStore: 'eventDataList'
          }
        },
        // {
        //   label: '单选组',
        //   prop: 'radio',
        //   xType: 'radio',
        //   xStore: () => {
        //     return this.xSradio
        //   }
        // },
        {
          label: '办结时间',
          prop: 'lastUpdateTimer',
          placeholder: '请选择最后操作时间',
          xType: 'selectTime.datetimerange'
        },
        {
          xType: 'slot',
          label: 'slot',
          prop: 'slot',
          template: () => {
            return <div>fgfgfg</div>
          }
        }
      ],
      tableData: [{ name: 'eee ddd' }],
      columns: [
        {
          label: '源名称',
          prop: 'name',
          width: 120,
          align: 'center',
          scopedSlots: {
            default: (scope) => (
              <div>
                <c-button
                  type="text"
                  on-click={this.tabOneClick.bind(this, 1, scope)}
                >
                  哈哈{scope.row.name}
                </c-button>
              </div>
            )
          }
        },
        {
          label: '源名称2',
          prop: 'name2',
          align: 'center',
          scopedSlots: {
            header: (scope) => (
              <div>
                <c-button type="text">{scope.column.label}34</c-button>
              </div>
            )
          }
        },
        {
          label: '源名称3',
          prop: 'name3'
        },
        {
          label: '源名称4',
          prop: 'name4'
        }
      ]
    }
  },
  methods: {
    search(key) {
      console.log('key', key)
      this.totals = 0
    },
    tabOneClick(label, item) {
      console.log(label, item)
    }
  }
}
</script>
