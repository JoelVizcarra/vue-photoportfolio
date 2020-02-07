<template>
  <div class="public-container">
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/public/Sidebar'

export default {
  name: 'Public',
  components:{
    Sidebar
  },
  props: {
  }
}
</script>

<style scoped>
.public-container{
  display:flex;
  flex-direction:row;
}
</style>
