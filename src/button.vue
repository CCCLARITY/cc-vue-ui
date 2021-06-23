<template>
    <button class="g-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: 'GuluButton',
    // props: ['icon', 'iconPosition'],
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false,
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value){
                return value === 'left' || value === 'right';
            },
        }
    },
    methods: {
        test(){
            console.log('这是master文件的修改')
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button {
        font-size: var(--font-size); height: var(--button-height); padding: 0 1em;
        border-radius: var(--border-radius); border: 1px solid var(--border-color); background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
        > .icon{ order: 1; margin-right: .1em;}
        > .content{ order: 2; }
        &.icon-right{
            > .icon{ order: 2; margin-right: 0; margin-left: .1em;}
            > .content{ order: 1; }
        }
        &:hover { border-color: var(--border-color-hover); }
        &:active { background: var(--button-ative-bg); }
        &:focus { outline: none; }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>