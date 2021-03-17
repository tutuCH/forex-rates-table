<template>
  <div class="container">
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div style="font-size: 6vh">Foreign Currency Table</div>
    </v-card-text>
    <div class="table__container">
        <table id="customers">
            <tr>
                <th>Country Code</th>
                <th>Currency</th>
            </tr>
            <tr 
                v-for="(data, index) in originRate"
                :key="index"
                v-bind:class="{ redBorder: isEven(data[1]) || isHK(data[0])}"
                @click="checkEven(data[1])"
            >
                    <td
                        v-for="(dataCol, colIndex) in data"
                        :key="colIndex"
                    >{{dataCol}}</td>
            </tr>
        </table>
    </div>

    <v-card-text>
      <div style="font-size: 6vh">Modified Foreign Currency Table</div>
    </v-card-text>
    <div class="table__container">
        <table id="customers">
            <tr>
                <th>Country Code</th>
                <th>Currency</th>
            </tr>
            <tr 
                v-for="(calData, calIndex) in  Object.entries(calculatedRate)"
                :key="calIndex"
                v-bind:class="{ redBorder: isEven(calData[1]) || isHK(calData[0])}"
                @click="checkEven(data[1])"

            >
                    <td
                        v-for="(calDataCol, calColIndex) in calData"
                        :key="calColIndex"
                    >{{calDataCol}}</td>
            </tr>
        </table>
    </div>
  </v-card>
  </div>
</template>

<script>
    export default {
        name: "index",
        data: () =>({
            items: ['Foreign Currency', 'Modified Currency'],
            loading: false,
            calulatedData: []
        }),
        mounted() {
            this.$store.dispatch('fetchRateData')

        },
        computed: {
            calculatedRate(){
                return this.$store.getters["getCalculatedRate"]
            },
            originRate(){
                return Object.entries(this.$store.getters["getOriginRate"])
            },


        },
        methods: {
            isEven(value){
                if(Math.round(value) % 2 == 0){
                    return true
                } else {
                    return false
                }
            },
            isHK(val){
                if(val === 'HKD'){
                    return true
                } else {
                    return false
                }
            },
            checkEven(value){
                if(Math.round(value) % 2 == 0){
                    alert("This is an even number")
                } else {
                    alert("This is an odd number")
                }
            }
        },

    }
</script>

<style lang="scss" scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:nth-child(odd){background-color: #f2f2f2d5;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1a7fc2;
  color: white;
}

.container{
    padding: 16px;
    // background-image: url('../../assets/2481629.jpg');

    background: linear-gradient(80deg, rgba(0,92,168,1) 0%, rgba(115,153,234,1) 100%);
}
.table__container{
    box-shadow: 0px 2px 2px 2px #80808038;
    margin: 12px;
}
.redBorder{
    border:2px solid red;
}
</style>
