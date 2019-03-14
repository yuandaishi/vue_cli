<template>
    <div id="app">
        <p class="name">这是message组件的子组件</p>
        <p class="name">{{love}}</p>
    </div>
</template>
<script>
export default {
    name:'mess_son',
    data() {
        return {
            love:'write'
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>
<style scoped>
    .name{
        color: bisque;
        font-size: 30px;
    }
</style>
