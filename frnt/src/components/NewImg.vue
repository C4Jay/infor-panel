<template>
   <div>
      <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
   </div>
</template>

<script>
    export default {
        name:'NewImg',
        data(){
            return{
               previewImage:null
            }
        },
methods: {

  uploadImage(event) {

    const URL = 'http://foobar.com/upload'; 

    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', event.target.files[0]); 

    let config = {
      header : {
        'Content-Type' : 'image/png'
      }
    }

    this.axios.put(
      URL, 
      data,
      config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
  }
}
     }  // missing closure added
</script>



<style>
   .uploading-image{
     display:flex;
   }
 </style>