<template>
  <div class="search" :class="searchClass">
    <input type="search" autofocus v-model="value" class="search-box" :placeholder="placeholder" v-if="isOpen" @blur="handleBlur" @keyup.enter="handleClick" />
    <span class="search-button" @click="handleClick">
      <i class="iconfont" :class="iconClass"></i>
    </span>
  </div>
</template>

<script>

export default {
  name: 'Select',
  data () {
    return {
      isOpen: false,
      placeholder: 'search for ...',
      value: ''
    }
  },
  computed: {
    searchClass () {
      return {
        'open': this.isOpen
      }
    },
    iconClass () {
      return {
        'icon-search': !this.isOpen,
        'icon-right': this.isOpen
      }
    }
  },
  methods: {
    handleClick () {
      if (!this.isOpen) {
        this.isOpen = true
      } else {
        if (this.value) {
          this.$emit('search', this.value)
        } else {
          this.isOpen = false
        }
      }
    },
    handleBlur () {
      this.value = ''
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
$icon-color: #6cf;
$transition: all .5s ease;

.search {
  width: 40px;
  height: 30px;
  margin: -10px;
  position: relative;
  overflow: hidden;
  transition: $transition;
  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 20px;
    position: relative;
    top: 5px;
    background-color: #6cf;
    transition: $transition;
  }
  &.open {
    width: 160px;
    &:before {
      height: 20px;
      left: 10px;
      top: 5px;
      position: absolute;
    }
  }
}

.search-box {
  width: 100%;
  height: 100%;
  line-height: 30px;
  box-shadow: none;
  border: none;
  background: transparent;
  padding: 0 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
}

.search-button {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
}
</style>

