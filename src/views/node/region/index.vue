<template>
  <div>
    <SearchHeader />
    <!-- <ConttentList :title="b" :show="false" :table-data="tableData" /> -->
  </div>
</template>

<script>
import SearchHeader from '@/components/SearchHeader'
// import ConttentList from '@/components/ContentList'
import { getRegionAPI } from '@/api/node'
export default {
  components: {
    SearchHeader
    // ConttentList
  },
  data() {
    return {
      title: ['序号', '区域名称', '点位数', '备注说明', '操作'],
      tableData: [],
      b: [],
      a: []
    }
  },
  async created() {
    const res = await getRegionAPI()
    console.log(res)
    this.tableData = res.data.currentPageRecords
    for (const k in this.tableData[0]) {
      this.a.push(k)
    }
    this.a.forEach((item, index) => {
      this.b.push({
        title: this.title[index],
        name: item
      })
    })
    console.log(this.b)
  }

}
</script>

<style>

</style>
