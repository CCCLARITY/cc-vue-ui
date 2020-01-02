<template>
    <svg v-if="name" class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg';
    export default {
        name: 'GuluIcon',
        props: ['name'],
        data: function () {
            return{

            }
        },
        mounted() {

        }
    }
</script>
<style>
    .icon{
        width: 1em;
        height: 1em;
    }
</style>