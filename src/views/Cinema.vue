<template>
  <div>
    cinema
  </div>
</template>
<script>
import { getCinema } from '@/network/cinema'
export default {
  mounted () {
    getCinema().then(res => {
      console.log(res)
    }
    )
  }
}
</script>
