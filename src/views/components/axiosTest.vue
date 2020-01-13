<template>
    <div>
        <input type="button" value="axiosTest" @click="getAxiosData"/>
        <br>
        <div>
            {{info}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "axiosTest",
        data(){
            return {
                info : {}
            }
        },
        methods:{
            getAxiosData(){
                axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                            this.info = response.data;
                            console.log(response)
                            console.log("info==",this.info)
                    })
            }
        }

    }
</script>

<style scoped>

</style>