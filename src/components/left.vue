<template>
    <div id="app">
        <div class="left">
            {{desc}}
        </div>
        <!-- <router-link to="message"><p>go to hello message</p></router-link> -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'left',
    data() {
        return {
            desc:'左边栏视图'
        }
    },
}
</script>
<style scoped>
    .left{
        width: 300px;
        height: 300px;
        background: pink;
        float: left;
    }
</style>
