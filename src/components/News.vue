<template>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">News Component</h1>
            <div class="my-3">
                <button class="btn btn-primary me-3" @click="post">POST</button>
                <button class="btn btn-primary mx-3" @click="put">PUT</button>
                <button class="btn btn-primary mx-3" @click="patch">PATCH</button>
                <button class="btn btn-primary mx-3" @click="deletePost">DELETE</button>
            </div>

            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in posts" :key="p.id">
                        <td>{{ p.id }}</td>
                        <td>{{ p.userId }}</td>
                        <td>{{ p.title }}</td>
                        <td>{{ p.body }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { httpService } from '../http-service.js';
export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
export default {
    data() {
        return {
            posts: [] as Post[]
        }
    },
    mounted() {
        httpService.get<Post[]>('posts').then(r => {
            this.posts = r.data;
        })
    },
    methods: {
        post() {
            httpService.post('posts', {
                id: 34,
                city: 'Bengaluru'
            }).then(r => console.log('POST Response', r));
        },
        put() {
            httpService.put('posts/45', {
                id: 34,
                city: 'Bengaluru'
            }).then(r => console.log('PUT Response', r));
        },
        patch() {
            httpService.patch('posts/78', {
                id: 34,
                city: 'Bengaluru'
            }).then(r => console.log('PATCH Response', r));
        },
        deletePost() {
            httpService.delete('posts/89').then(r => console.log('DELETE Response', r));
        }
    }
}
</script>