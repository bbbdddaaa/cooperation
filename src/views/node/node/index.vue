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
      title: ['序号', '区域名称', '点位数', '备注说明', '操作']
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
