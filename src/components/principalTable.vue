<template>
 <el-table 
  class="principal-table"  
  :data="pagedData"
  :default-sort="{ prop: 'calendar_dt', order: 'descending' }"
  :fit=true
  v-loading="loading"
  empty-text="Aún no encontramos datos">
    <el-table-column prop="calendar_dt" label="Fecha" sortable>
        <template #default="scope">
        <el-icon><timer /></el-icon>
        {{ scope.row.calendar_dt }}
        </template>
    </el-table-column>
    <el-table-column prop="name" label="Nombre"/>
    <el-table-column prop="price" label="Precio" align="center">
    <template #default="scope">
    {{ toCLP(scope.row.price) }}
      </template>
    </el-table-column>
    <el-table-column prop="origin" label="Falabella" />
    <el-table-column prop="key" label="Código" />
    <el-table-column prop="src" label="Link">
    <template #default="scope">
        <el-link type="primary" :underline="false" :href="scope.row.src" target="_blank">Ver</el-link>
    </template>
</el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next" 
    :total="this.products.length" 
    :hide-on-single-page=true
    @current-change="setPage">
  </el-pagination>
</template>

<script>
import {Timer} from '@element-plus/icons-vue'

export default {
components: {Timer},
data () {
  return {
    products: [],
    api_url: "/api/products",
    page: 1,
    pageSize: 15,
    loading: true
  }
},
computed: {
  pagedData () {
    return this.products.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
  }
},
async created() {
    const response = await fetch(this.api_url);
    const data = await response.json();
    this.products = data
    this.loading = false

  },
  methods: {
    toCLP(price){
      let formated = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)
      return formated
    },
    setPage(val){
      this.page = val
      console.log(val)
    }
}
}
</script>

<style scoped>
.el-table{
    width:100%
}
.pagination {
  padding-top:30px;
  width:50%;
  margin:auto;
}
</style>
