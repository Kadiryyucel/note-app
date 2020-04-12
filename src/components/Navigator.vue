<template>
  <div class="page-container md-layout-column">
    <md-toolbar v-if="state" class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{title}}</span>
    </md-toolbar>

    <md-drawer v-if="state" :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar md-elevation="0">
        <span class="md-title">Note-App</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Kategoriler</span>
        </md-list-item>

      </md-list>
    </md-drawer>


    <md-content class="main-box" >
        <slot></slot>
    </md-content>
  </div>
</template>

<script>
export default {
    props:['title'],
    data(){
        return {
            showNavigation:false,
        }
    },
    computed:{
       state :{
         get(){
           return this.$store.state.menu.active;
         }
       }
    }
}
</script>

<style scoped>
  .main-box{
    padding-top:10px;
    max-width:1024px;
    left:0;
    right:0;
    margin:0 auto;
  }
</style>