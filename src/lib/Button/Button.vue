<template>
  <button
    class="azan-button"
    :class="classes"
    :disabled="disabled">
    <span v-if="loading" class="azan-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { theme, size, level } = props
        const classes = computed(() => {
            return {
                [`azan-theme-${theme}`]: theme,
                [`azan-size-${size}`]: size,
                [`azan-level-${level}`]: level
            }
        })
        return {
            classes
        }
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: rgba(0,0,0,.65);
$blue: #1890ff;
$radius: 4px;
$red: red;
.azan-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  font-size: 14px;
  & + & {
    margin-left: 8px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.azan-theme-default {
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
  }
  &.azan-theme-primary {
    background: $blue;
    border-color: $blue;
    box-shadow: none;
    color: #fff;
  }
  &.azan-theme-danger {
    background: $red;
    border-color: $red;
    box-shadow: none;
    color: #fff;
  }
  &.azan-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.azan-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.azan-size-big {
    font-size: 16px;
    height: 40px;
    padding: 0 15px;
  }
  &.azan-size-small {
    height: 24px;
    padding: 0 7px;
  }
  &[disabled] {
    cursor: not-allowed;
    color: $color;
    background: #f5f5f5;
    border-color: #d9d9d9;
    &:hover {
      color: $color;
      border-color: #d9d9d9;
    }
  }
  > .azan-loadingIndicator{
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: azan-spin 1s infinite linear;
  }
}
@keyframes azan-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
