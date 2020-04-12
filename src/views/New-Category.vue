<template>
  <md-card>
    <md-card-content>
      <md-field>
        <label>Başlık</label>
        <md-input v-model="title" />
      </md-field>
      <md-button style="float:right" @click="save()">Ekle</md-button>
      <div style="clear:both;"></div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    save() {
      this.$di.categories.add({
        title: this.title
      });
      this.title = "";
      this.$router.back();
    }
  }
};
</script>