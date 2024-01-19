<template>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Home Component</h1>
            <h4>Current Theme: {{ store.theme }} <button class="btn btn-secondary btn-sm" @click="store.toggleTheme">Toggle
                    Theme</button>
            </h4>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
                previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
                liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { appStore } from '../store/app.store';

const store = appStore();
</script>