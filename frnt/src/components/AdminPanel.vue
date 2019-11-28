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
   
     <v-card width="900" color="yellow">
       <v-card-title> 
         <v-row align="center">
  <h1>User Info</h1>
  </v-row>
       </v-card-title>
   
    <v-layout wrap>
      <table class="table table-hover" id="customers">
            <thead>
            <tr>
                <td>ID</td>
                <td>user-name</td>
                <td>full-name</td>
                <td>mail</td>
                <td>country</td>
                
            </tr>
            </thead>
            <tbody>
               <tr v-for="user in users" :key="user._id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.usrname }}</td>
                    <td>{{ user.fulname }}</td>
                    <td>{{ user.mail }}</td>
                    <td><flag :iso="user.country"/></td>
            <!--        <td><v-img :src="tik.img"></v-img></td>    -->
                    
                </tr>
            </tbody>
        </table>
  </v-layout>
     </v-card>
  </v-container>
</template>






<script>

    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
           fetchItems()
           {
               let uri = 'http://localhost:4001/tiks2/';
               this.axios.get(uri).then((response) => {
                   this.users = response.data;
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






