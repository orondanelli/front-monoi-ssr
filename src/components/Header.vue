<template>
    <div class="header">
        <span class="center-text">Monoi barato </span>
        <span class="updated-text">(Actualizado {{ textTimeAgo }})</span>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            lastUpdated: "",
            textTimeAgo: "",
            loading: true,
            api_url: "https://api-monoi.herokuapp.com/products/lastUpdate",
        }
    },
    created() {
        axios
            .get(this.api_url)
            .then(response => { 
                this.lastUpdated = response.data[0].collected_dt
                this.textTimeAgo = response.data[0].time_ago
                })
    },
    computed:{
        justTime: function(){
            let time = new Date(this.lastUpdated)
            return time.toLocaleTimeString()
        }
    }

}
</script>
<style scope>
.header {
    margin-top: 20px;
    text-align: center;
}
.center-text {
    color: #333333;
    font-size: xx-large;
}
.updated-text{
    margin:0;
    position:relative;
    color:#5c5858;
    font-size: small;
}
</style>