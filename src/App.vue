<template>
   <v-app>
      <!-- <v-app-bar app color="primary" dark>
         <div class="d-flex align-center">
            <v-img
               alt="Vuetify Logo"
               class="shrink mr-2"
               contain
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
               transition="scale-transition"
               width="40"
            />

            <v-img
               alt="Vuetify Name"
               class="shrink mt-1 hidden-sm-and-down"
               contain
               min-width="100"
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
               width="100"
            />
         </div>

         <v-spacer></v-spacer>

         <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
         >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
         </v-btn>
      </v-app-bar> -->
      
         <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            app
            color="#000B25"
            dark
         >
         <div class="tw-py-4">

            <v-list-item class="px-2">
               <v-list-item-logo>
                  <v-img
                     src="./assets/Logo/HyperzodLogo.svg"
                     height="20"
                     contain
                  ></v-img>
               </v-list-item-logo>

               <v-list-item-title ><h1 class="tw-text-xl tw-font-semibold">Hyperzod</h1></v-list-item-title>

               <v-btn icon @click.stop="mini = !mini">
                  <v-icon>mdi-chevron-left</v-icon>
               </v-btn>
            </v-list-item>

            <div class="tw-my-12">
            <v-list >
               <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
                  <v-list-item-icon>
                     <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                     <v-list-item-title><h2 class="tw-font-medium">{{ item.title }}</h2></v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
            </v-list>

            </div>

         </div>
         </v-navigation-drawer>
      

      <v-main>
         <router-view />
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",
   watch: {
      $route: {
         immediate: true,
         handler(to) {
            document.title = to.meta.title || "Some Default Title";
         },
      },
   },
   data: () => ({
      // drawer: true,
      items: [
         { title: "Microservice", icon: "mdi-home-city" ,path:"/microservice-dashboard"},
         { title: "Reachability Analyser", icon: "mdi-account",path:"/reachability-analyzer" },
      ],
      mini: false,
   }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
   font-family: 'Poppins', sans-serif;
}
.v-list-item--active {
   background-color: #FEBBB2;
   color: #45578C !important;
   /* border-radius: 0.6rem; */
}
</style>
