<template>
  <div class="page-content">
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>

    <div class="view-mode-buttons">
      <button :class="{ active: viewMode === 'all' }" @click="viewMode = 'all'">
        {{ translations.all }}
      </button>
      <button v-for="(category, key) in content.categories" :key="key" :class="{ active: viewMode === key }" @click="viewMode = key">
        {{ category.title }}
      </button>
    </div>

    <div class="content">
      <template v-if="viewMode === 'all'">
        <div v-for="(category, catKey) in content.categories" :key="catKey" class="category-section">
          <h2>{{ category.title }}</h2>
          <template v-if="category.subtitles">
            <div v-for="(subtitle, subKey) in category.subtitles" :key="subKey">
              <h3>{{ subtitle }}</h3>
            </div>
          </template>
          <div v-for="(item, itemKey) in category.items" :key="itemKey" class="item">
            <h3 v-if="item.title"><a :href="item.link" target="_blank">{{ item.title }}</a></h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="category-section">
          <h2>{{ content.categories[viewMode].title }}</h2>
          <div v-for="(item, itemKey) in content.categories[viewMode].items" :key="itemKey" class="item">
            <h3 v-if="item.title"><a :href="item.link" target="_blank">{{ item.title }}</a></h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
  props: {
    content: {
      type: Object,
      required: true
    },
    translations: {
      type: Object,
      required: false,
      default: () => ({ all: 'All' }) // Provide a default value if not passed
    }
  },
  data() {
    return {
      viewMode: 'all'
    };
  }
};
</script>

<style scoped lang="scss">
.open-source {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.view-mode-buttons, .category-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

button {
  padding: 8px 16px;
  border: 2px solid #42b983;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #42b983;
  color: white;
}

button.active {
  background: #42b983;
  color: white;
}

.category-section {
  margin: 30px 0;
  text-align: left;
}

.item {
  margin: 20px 0;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

h3 {
  color: #34495e;
  margin: 15px 0;
}
</style>