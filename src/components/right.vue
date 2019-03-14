<template>
    <div id="app">
        <div class="right">
            {{desc}}
            <router-link to='HelloWorld' replace><p>go to hello world</p></router-link>
            <router-link to="message"><p>go to hello message</p></router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'right',
    data() {
        return {
            desc:' 右边栏栏视图'
        }
    },
}
</script>
<style scoped>
    .right{
        width: 300px;
        height: 300px;
        background: blanchedalmond;
        float: right;
    }
</style>
