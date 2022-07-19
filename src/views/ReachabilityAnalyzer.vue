<template>
   <div class="tw-min-h-screen tw-w-full background-grey">
      <v-container>
         <div class="tw-my-4">
            <div class="heading tw-flex">
               <h1 class="tw-text-2xl tw-font-semibold">
                  Reachability Analyzer
               </h1>
               <div class="tw-my-auto tw-mx-2">
                  <v-img
                     src="../assets/Logo/analyzelogo.svg"
                     height="22"
                     contain
                  ></v-img>
               </div>
            </div>
            <div class="search-filter tw-flex tw-my-6 tw-justify-between">
               <div class="tw-my-auto tw-w-96">
                  <v-text-field
                     dense
                     outlined
                     hide-details=""
                     background-color="white"
                     label="Search"
                     prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
               </div>
               <div class="tw-my-auto">
                  <v-btn color="green" depressed dark>Ok(12)</v-btn>
                  <v-btn color="yellow darken-2" depressed dark class="tw-mx-4"
                     >Warning(12)</v-btn
                  >
                  <v-btn color="red accent-4" depressed dark
                     >Critical(12)</v-btn
                  >
               </div>
            </div>
            <div class="sort-label">
               <v-row>
                  <v-col cols="2">
                     <v-select
                        v-model="selected"
                        :items="items"
                        background-color="white"
                        dense
                        outlined
                     ></v-select>
                  </v-col>
                  <v-col cols="10">
                     <div
                        class="tw-flex tw-flex-wrap tw-my-auto tw-w-full tw-flex-row-reverse"
                     >
                        <LegendCard />
                        <LegendCard />
                        <LegendCard />
                     </div>
                  </v-col>
               </v-row>
            </div>
            <div class="table">
              
                 
                 
                     <grid-text></grid-text>
                 
              
            </div>
         </div>
      </v-container>
   </div>
</template>
<script>
import LegendCard from "../components/ReachabilityAnalyzer/legend-card.vue";
import GridText from "../components/ReachabilityAnalyzer/grid-text.vue";
export default {
   // props:['isDrawerOpen'],
   components: {
      LegendCard,
      GridText,
   },
   data() {
      return {
         items: [
            { text: "All", value: "all" },
            { text: "Warning", value: "warning" },
            { text: "Critical", value: "critical" },
         ],
         selected: "all",
      };
   },
};
</script>
<style scoped>
.background-grey {
   background-color: #f7f7f7;
}
</style>
