<template>
  <div>
    <SearchHeader />
    <ConttentList :title="title" />
  </div>
</template>

<script>
import SearchHeader from '@/components/SearchHeader'
import ConttentList from '@/components/ContentList'
import { getRegionAPI } from '@/api/node'
export default {
  components: {
    SearchHeader,
    ConttentList
  },
  data() {
    return {
      title: ['序号', '工单编号', '设备编号', '工单类型', '工单方式', '工单状态', '运营人员', '创建日期', '操作']
    }
  },
  async created() {
    const res = await getRegionAPI()
    console.log(res)
  }

}
</script>

<style>

</style>
