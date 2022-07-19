<template>
   <v-data-table
      :headers="headers"
      :items="items"
      items-per-page=-1
      fixed-header
      hide-default-footer
      height="460"
      disable-sort
      
   >
      <div></div>

     
      <template
         v-for="(col, i) in headers"
         v-slot:[`item.${col.value}`]="{ item }"
      >
         <div :key="i" v-if="i != 0" class=" center tw-rounded">
            <v-tooltip bottom>
               <template v-slot:activator="{ on, attrs }">
                  <v-icon
                     :color="getIcon(item, col.value).color"
                     v-bind="attrs"
                     v-on="on"
                     dark
                     >{{ getIcon(item, col.value).icon }}</v-icon
                  >
               </template>
               <span>{{ item.name }}-{{ col.value }}</span>
            </v-tooltip>
         </div>
         <div class="red noPadding pa-n12" v-else :key="i">
            <h2 class="white--text pa-n12">{{ item.name }}</h2>
         </div>
      </template>
   </v-data-table>
</template>
<script>
export default {
   methods: {
      getIcon(value, col) {
         // console.log(value);
         // console.log(col);
         // console.log(value.services.name);
         if (value[col] == true) {
            return {
               icon:"mdi-check",
               color:"green",
            };
         } else {
            return {
               icon:"mdi-close",
               color:"red",
            };
            }
         

         // console.log(`value.${col.value}`);
         // let abc=`value.${col.value}`;
         // console.log(abc);
         // Object.keys(value).forEach((val)=>{
         //     console.log(val);
         //     if(val==col){
         //         console.log(123);

         //     }
         // })
         //  if (`value.${col.value}`==true) {
         //     return `mdi-check`;
         //  }
         //  return `mdi-close`;
      },
      getHeaderColor(type) {
         if (type == "microservice") return "#F10086";
         if (type == "database") return "#F10036";
         if (type == "server") return "#F10016";
      },
      getColor(value, col) {
         console.log(value[col.value]);

         if (value) return "green";
         // else if (vaule) return 'orange'
         else return "red";
      },
   },
   data: () => ({
      headers: [
         //  {
         //     text: "Name",
         //     align:'center',
         //     value: "name",
         //     width: "150",
         //  },
         {
            text: "Service",
            value: "auth",
            type: "microservice",
            class: "black white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Catalog",
            value: "catalog",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Address",
            value: "address",
            type: "database",
            class: "purple darken-1 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Appbuild",
            value: "appbuild",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Openstatus",
            value: "openstatus",
            type: "microservice",
            class: "red white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Placesearch",
            value: "placesearch",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Stats",
            value: "stats",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Webhook",
            value: "webhook",
            type: "database",
            class: "purple darken-1 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Saga",
            value: "saga",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Serviceablearea",
            value: "serviceablearea",
            type: "microservice",
            class: "red white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Upload",
            value: "upload",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Helper",
            value: "helper",
            type: "microservice",
            class: "red white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Notification",
            value: "notification",
            type: "database",
            class: "purple darken-1 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Merchant",
            value: "merchant",
            type: "microservice",
            class: "red white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Cart",
            value: "cart",
            type: "microservice",
            class: "red white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Calories",
            value: "calories",
            type: "server",
            class: "blue accent-3 white--text",
            width: "100",
            align: "center",
         },
         {
            text: "Tenant",
            value: "tenant",
            type: "database",
            class: "purple darken-1 white--text",
            width: "100",
            align: "center",
         },
      ],
      items: [
         {
            name: "Auth",
            type: "microservice",
            auth: true,
            catalog: false,
            address: true,
            appbuild: false,
            openstatus: false,
            placesearch: true,
         },
         {
            name: "Catalog",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Address",
            type: "microservice",
            auth: true,
            catalog: true,
            address: false,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Appbuild",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Openstatus",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Placesearch",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            type: "microservice",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
         {
            name: "Auth",
            auth: true,
            catalog: true,
            address: true,
            appbuild: true,
            openstatus: true,
            placesearch: true,
         },
      ],
   }),
};
</script>
<style scoped>
.transbggreen {
   background-color: rgba(0, 255, 71, 0.3);
}
.noPadding {
   padding: 0 !important;
}
.text-start {
   padding: 0 !important;
}
</style>
