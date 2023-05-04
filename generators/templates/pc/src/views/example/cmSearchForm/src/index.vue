<!--
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/views/example/cmSearchForm/src/index.vue
 * @Date: 2022-04-26 18:05:11
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-28 15:10:35
 * @Description:
-->
<template>
  <div class="cm-search-form page page-demo">
    <cm-search-form
      :model="model"
      :field-schema="fieldSchema"
      @search="search"
    />
  </div>
</template>
<script>
export default {
  name: 'PageHome',
  components: {},
  data() {
    return {
      xSradio: [
        { label: '单选', value: 0 },
        { label: '单选2', value: 1 }
      ],
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
        // {
        //   label: '姓名1',
        //   xType: 'input',
        //   prop: 'id1',
        //   clearable: true
        // },
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
          xStore() {
            return this.list.eventDataList
          },
          build: {
            url: '/cityscapeAi/eventCenter/enum/getEnumByEnumTypeAddFirst?enumType=EVENT_DATA_TYPE',
            label: 'codeDesc',
            value: 'codeValue',
            xStore: 'eventDataList'
          }
        },
        {
          label: '单选组',
          prop: 'radio',
          xType: 'radio',
          xStore: () => {
            return this.xSradio
          }
        },
        {
          label: '办结时间',
          prop: 'lastUpdateTimer',
          placeholder: '请选择最后操作时间',
          xType: 'selectTime.datetimerange'
        },
        // {
        //   label: '多选选组',
        //   prop: 'checkbox',
        //   xType: 'checkbox',
        //   xStore: () => {
        //     return this.xSradio
        //   }
        // },
        // {
        //   label: '开关',
        //   prop: 'switch',
        //   xType: 'switch',
        //   activeText: '成功打开',
        //   inactiveText: '关闭成功',
        //   inactiveColor: '#ff4949'
        // },
        {
          xType: 'slot',
          label: 'slot',
          prop: 'slot',
          template: () => {
            return <div>fgfgfg</div>
          }
        }
      ]
    }
  },
  mounted() {},
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
