<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div class="row" v-else>
        <CategoryCreate @created="addCategory" />
        <CategotyEdit v-if="categories.length" :categories="categories" @updated="updateCategory" :key="categories.length+updateCount"/>
        <p v-else class="center">Category not found</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate'
import CategotyEdit from '../components/CategoryEdit'

export default {
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addCategory (category) {
      this.categories.push(category)
    },
    updateCategory (category) {
      const cat = this.categories.findIndex(x => x.id === category.id)
      this.categories[cat].title = category.title
      this.categories[cat].limit = category.limit
      this.updateCount++
    }
  },
  components: {
    CategoryCreate,
    CategotyEdit
  }
}
</script>
