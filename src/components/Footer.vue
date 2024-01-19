<template>
    <footer class="footer mt-auto py-3 bg-body-tertiary">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>
                    <span class="text-body-secondary">Place sticky footer content here.</span>
                </div>
                <div>
                    <select class="form-select" @change="changeLanguage" :value="store.language">
                        <option selected>Change Language</option>
                        <option value="en">English</option>
                        <option value="kn">Kannada</option>
                        <option value="hn">Hindi</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <div>
                    <span>Language: {{ store.language }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { appStore } from '../store/app.store';

const store = appStore();

const changeLanguage = (e: any) => {
    store.changeLanguage(e.target.value);
}
</script>