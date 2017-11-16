<template>
  <el-row class="section">
    <el-col>
      <hr>
      <slot name="h"></slot>
      <slot name="t"></slot>
      <slot name="c"></slot>
    </el-col>
  </el-row>
</template>
<script>
  export default {
//
  }
</script>
<style>
  .section{
    margin-bottom: 30px;
  }
</style>
