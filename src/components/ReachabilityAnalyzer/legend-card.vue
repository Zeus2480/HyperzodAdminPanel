<template>
    <div class="tw-flex tw-mx-2">
        <div class="tw-h-5 tw-w-5 tw-my-auto" :style="{ backgroundColor: activeColor }"></div>
        <h3 class="tw-mx-2 tw-my-auto tw-font-medium"> Database</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeColor: '#F10086'
        }
    }
}
</script>