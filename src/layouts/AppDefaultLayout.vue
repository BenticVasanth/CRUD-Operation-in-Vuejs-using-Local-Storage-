<template>
  <div>
    <componentHeader />
    <slot />
	<componentFooter />
  </div>
</template>

<script>
import componentHeader from '@/component/componentHeader'
import componentFooter from '@/component/componentFooter'

export default {
  name: "AppDefaultLayout",
  components: {componentHeader,componentFooter}
}
</script>