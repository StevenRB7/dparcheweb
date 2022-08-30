<template>
    <div class="dashboard">
        <Sidebar />
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'dashboard',
  components: {
    Sidebar
  }

}
</script>

<style>

.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(89, 165, 252) ;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>
