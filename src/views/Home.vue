<script setup>
import principalTable from "../components/principalTable.vue"
import topHeader from "../components/Header.vue"
import botFooter from "../components/Footer.vue"
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><topHeader/></el-header>
      <el-main>
      <principalTable />
      </el-main>
      <el-footer><botFooter /></el-footer>
    </el-container>
  </div>
</template>

<style>
@import "../assets/base.css";

body {
  background-color: #ffffff;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
