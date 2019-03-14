<template>
    <div id="app">
        <div class="left">
            {{desc}}
        </div>
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
