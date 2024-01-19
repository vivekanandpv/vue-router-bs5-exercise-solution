<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Fixed navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" to="/home">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" to="/news">News</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" to="/form">Form</router-link>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <span class="badge text-bg-secondary me-2">{{
                            store.language }}</span>
                        <button type="button" class="btn btn-light" @click="handleLoginToggle">
                            {{ store.loggedIn ? 'Welcome!' : 'Login' }}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { appStore } from '../store/app.store';

const store = appStore();

const handleLoginToggle = () => {
    if (store.loggedIn) {
        store.logout();
    } else {
        store.login();
    }
}
</script>