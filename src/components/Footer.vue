<template>
<div class="footer">
    <span class="footer-text">
    <el-icon><coffee /></el-icon>
    v1.0
    </span>
</div>
</template>
<script>
import {Coffee} from '@element-plus/icons-vue'


export default {
   components: {Coffee},
}
</script>
<style scope>
.footer {
    margin-top: 20px;
    text-align: right;
}
.footer-text {
    color: #999999;
    font-size: small;
}
</style>