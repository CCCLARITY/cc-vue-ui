<template>
    <div class="wrapper">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    </div>
</template>

<script>
    export default {
        name: 'GuluInput',
        props: {
            value: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        > input{
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
    }
</style>