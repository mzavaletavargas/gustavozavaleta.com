<template>
       <div class="">
              <Welcome />
       </div>
    
     </template>
     
     <script setup>
     const title = ref(
       "Gustavo Zavaleta - Personal website, with ideas, projects, blogs and more."
     );
     const description = ref(
       `I'm software engineer, like cooding and learning all the time.`
     );
     
     // This will be reactive even you change title/description above
     useHead({
       title,
       meta: [
         {
           name: "description",
           content: description,
         },
       ],
     });
     </script>
     