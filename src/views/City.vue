<template>
  <mt-index-list>
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>
    ...
    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>
</template>
<script>
import { getCity } from '@/network/city'
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    getCity().then(res => {
      console.log(res.data.data)
    })
  }
}
</script>
