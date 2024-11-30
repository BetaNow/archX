<template>
  <div class="page-content">
    <Categories :content="translations.openSource" :translations="{ all: translations.openSource.viewMode.all }" />
  </div>
</template>

<script>
import Categories from '../components/Categories.vue';

export default {
  name: 'OpenSource',
  components: { Categories },
};
</script>

<style scoped lang="scss">

</style>