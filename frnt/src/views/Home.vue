<template>
  <span>
    <admin-panel></admin-panel>
  </span>
</template>

<script>
// @ is an alias to /src
import AdminPanel from '@/components/AdminPanel.vue'

export default {
  name: 'home',
  components: {
    AdminPanel
  }
}
</script>
