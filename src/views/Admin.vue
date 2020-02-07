<template>
  <div class="admin-container">
    <AdminSidebar/>
    <router-view/>
  </div>
</template>

<script>
import AdminSidebar from '@/components/admin/AdminSidebar'

export default {
  name: 'Admin',
  components:{
    AdminSidebar
  },
  props: {
  }
}
</script>

<style scoped>
.admin-container{
  display:flex;
  flex-direction:row;
}
</style>
