<template>
  <div class="news">
    <Categories :content="translations.news" :translations="{ all: translations.news.viewMode.all }"/>
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
};
</script>

<style scoped lang="scss">

</style>
