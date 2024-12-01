<template>
  <div class="open-source">
    <Categories :content="translations.openSource" :translations="{ all: translations.openSource.viewMode.all }" />
  </div>
</template>

<script>
import Categories from '../components/Categories.vue';

export default {
  name: 'OpenSource',
  components: { Categories },
  props: {
    translations: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
