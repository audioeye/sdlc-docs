<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #navbar-before>
        <a href="#main" class="skip-to-main">Skip to main content</a>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.skip-to-main {
  opacity: 0;
  z-index: -999;
  position: absolute;
}
.skip-to-main:focus {
  background-color: #fff;
  top: 10px;
  right: 15px;
  padding: 8px 16px;
  border-radius: 8px;
  -webkit-transition: all 150ms;
  transition: all 150ms;
  opacity: 1;
  z-index: 100;
}
</style>

