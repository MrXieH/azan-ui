<template>
  <section class="wrapper">
    <h3 class="title">Attributes</h3>
    <table class="table">
      <thead class="thead">
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="item in attributes" :key="item.key">
          <td>{{ item.key }}</td>
          <td>{{ item.remark }}</td>
          <th>{{ item.type }}</th>
          <th>{{ item.values.join(' / ') }}</th>
          <th>{{ item.defaultValue }}</th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue'
export default {
  props: {
    attributes: {
      type: Array as PropType<Attributes>,
      default: () => []
    }
  },
  setup() {
    const attributes: Attributes = [
      {
        key: 'value',
        remark: '是否开关',
        type: 'boolean',
        values: ['true', 'false'],
        defaultValue: 'false'
      },
      {
        key: 'disabled',
        remark: '是否禁用',
        type: 'boolean',
        values: ['true', 'false'],
        defaultValue: 'false'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 80px;
  overflow: auto;
}
.title {
  font-size: 24px;
  font-weight: 700;
}
.table {
  margin: 30px 0;
  width: 100%;
  border-collapse: collapse;
  .tbody {
    tr {
      border-top: 1px solid #dcdfe6;
    }
  }
  .thead, .tbody {
    border-bottom: 1px solid #dcdfe6;
    th, td {
      padding: 15px;
      max-width: 25%;
      text-align: center;
      font-weight: normal;
      color: #666;
    }
  }
}
</style>
