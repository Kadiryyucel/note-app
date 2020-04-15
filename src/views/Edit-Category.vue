<template>
  <md-card>
    <md-card-content>
      <md-field>
        <label>Başlık</label>
        <md-input v-model="model.title" />
      </md-field>
      <md-button style="float:right" @click="save()">Kaydet</md-button>
      <div style="clear:both;"></div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  data() {
    return {
    model:{
      title: ""
    }
    };
  },
  async created(){
      this.model = (await this.$di.categories.get()).find(x=>x.id == parseInt(this.$route.params.id));
  },
  methods: {
    save() {
      this.$di.categories.update(parseInt(this.$route.params.id),this.model);
      this.$router.back();
    }
  }
};
</script>