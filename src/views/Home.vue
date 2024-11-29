<template>
  <div class="home">
    <h1>{{ translations.home.title }}</h1>
    <h2>{{ translations.home.welcome }}</h2>
    <p>{{ translations.home.intro }}</p>
    <p>{{ translations.home.about }}</p>
    <p>{{ translations.home.purpose }}</p>
    <p>{{ translations.home.contact }} <a href="https://github.com/Bl4omArchie">GitHub</a> •
      <a href="https://discord.com/invite/D2wGP62">Discord</a></p>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
