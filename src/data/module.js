import DataProvider from './data-provider';
export default {
    install(Vue){
        Vue.mixin({
            created(){
                this.$di =  new DataProvider();
            }
        })
    }
}