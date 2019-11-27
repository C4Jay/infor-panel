<template>
 <v-container v-if="loading">
  
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>     
    </div>
  </v-container>
<v-container v-else grid-list-xl>
   <v-row align="center"> 
  <h1>User Info</h1>
   </v-row>
    <v-layout wrap>
      <table class="table table-hover" id="customers">
            <thead>
            <tr>
                <td>ID</td>
                <td>Email ID</td>
                <td>country</td>
            </tr>
            </thead>
            <tbody>
               <tr v-for="tik in tiks" :key="tik._id">
                    <td>{{ tik._id }}</td>
                    <td>{{ tik.mail }}</td>
                    <td><v-img :src="tik.img"></v-img></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
  </v-layout>
  </v-container>
</template>






<script>

    export default {
        data(){
            return{
                tiks: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
           fetchItems()
           {
               let uri = 'http://localhost:4000/tiks1';
               this.axios.get(uri).then((response) => {
                   this.tiks = response.data;
               });
           }
        }
    }
</script>

<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers thead {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers thead {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>






