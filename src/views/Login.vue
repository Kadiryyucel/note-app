<template>
    <div class="login-page">
        <md-card>
            <md-card-header>
                <h2>Note App</h2>
            </md-card-header>
            <md-card-content>
                <md-field>
                    <label>Kullanıcı Adı</label>
                    <md-input v-model="username" type="text" />
                </md-field>
                <md-field>
                    <label>Şifre</label>
                    <md-input v-model="password" type="password" />
                </md-field>
                <md-button  @click="login()" class="md-primary">Giriş</md-button>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
          this.$store.commit('menu/setActive',true);
          this.$router.push({name:'categories'});
        }
    }
}
</script>

<style scoped>
 .login-page{
     width: 500px;
     position: absolute;
     left:0;
     right: 0;
     margin: 0 auto;
     top:20%;
 }
</style>