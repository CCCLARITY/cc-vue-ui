<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change', $event)"
            @input="$emit('input', $event.target.value)"
        >
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        name: 'GuluInput',
        components: {Icon},
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
            },
            error: {
                type: String,
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
    $red: #f1453D;
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
        &.error{
            >input{
                border-color: $red;
            }
        }
        .icon-error{
            fill: $red;
        }
        .errorMessage{
            color: $red;
        }
    }
</style>