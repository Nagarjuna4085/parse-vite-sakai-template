<!-- <script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
import { getParse } from '@/parseConfig';
import { onMounted } from 'vue';
onMounted(async () => {
    try {
        const Parse = await getParse();
        console.log('Parse:', Parse);
    } catch (e) {
        console.error(e);
    }
});
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <StatsWidget />

        <div class="col-span-12 xl:col-span-6">
            <RecentSalesWidget />
            <BestSellingWidget />
        </div>
        <div class="col-span-12 xl:col-span-6">
            <RevenueStreamWidget />
            <NotificationsWidget />
        </div>
    </div>
</template> -->

<script setup>
import { getParse } from '@/parseConfig';
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const message = ref('');

const signUp = async () => {
    try {
        const Parse = await getParse();
        const user = new Parse.User();
        user.set('username', username.value);
        user.set('email', email.value);
        user.set('password', password.value);

        await user.signUp();
        message.value = 'User created: ' + user.get('username');
    } catch (err) {
        message.value = 'Error: ' + err.message;
    }
};
</script>

<template>
    <input v-model="username" placeholder="Username" />
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signUp">Sign Up</button>
    <p>{{ message }}</p>
</template>
