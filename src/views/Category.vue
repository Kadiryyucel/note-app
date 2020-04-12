<template>
  <md-card>
      <md-card-header>
          <md-card-actions md-alignment="space-between">
              <div class="md-title">Kategoriler</div>
              <md-button  to="categories/new" class="md-primary">Yeni</md-button>
          </md-card-actions>
      </md-card-header>
    <md-list>
      <md-list-item v-for="item of items" :key="item.id">{{item.title}}</md-list-item>
    </md-list>
  </md-card>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.items = await this.$di.categories.get();
    }
  }
};
</script>