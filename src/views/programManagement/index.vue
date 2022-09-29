<!--
 * @Author: your name
 * @Date: 2022-09-29 11:53:15
 * @LastEditTime: 2022-09-29 15:39:12
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \vben-admin\src\views\programManagement\index.vue
-->
<template>
  <div class="p-4"> 项目集管理 </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
