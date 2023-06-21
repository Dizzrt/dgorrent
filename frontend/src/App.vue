<template>
    <div class="drag-area"></div>
    <RouterView class="view" />
</template>

<style scoped>
.drag-area {
    --wails-draggable: drag;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 100;
}

.view {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>