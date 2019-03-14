<template>
    <div id="app">
        <p>{{des}}</p>
        <p>{{store.state.name}}</p>
        <p>{{routers.params.id}}</p>
        <a href="javascript:;" @click="changeName('哈哈哈哈哈')">点击改变store的name的值</a>
        <a href="javascript:;" @click="goBack">返回</a>
        <router-link to='/mess_son'>访问子路由</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
   name:'message',
   data(){
       return{
            des:'我是个大盗贼什么也不怕',
            store:this.$store,
            routers:this.$route
       }
   },
   methods: {
       changeName:function(val){
           this.$store.commit('changeName',val)
       },
       goBack:function(){
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
       }
   }, 
}
</script>
<style lang="scss" scoped>
    $baseFontSize:75px;

    @function pxToRem($px) {
        @return $px / $baseFontSize * 1rem;
    }
    p{
        font-size: pxToRem(75px);
    }
</style>
