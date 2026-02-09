<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <Navbar />

    <section class="thanks">
        <div class="container">
            <div class="card">
                <h1>Thank you for your message ✨</h1>

                <p>
                    Thank you for getting in touch!
                    I’ll get back to you as soon as possible.
                </p>

                <router-link to="/" class="btn">
                    Continue
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.thanks {
    min-height: 100vh;
    padding: 6rem 2rem 2rem;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
    color: #f5f6f7;
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.card {
    margin-top: 5rem;
    padding: 3rem 2rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.card h1 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    color: #BC54E9;
}

.card p {
    font-size: 1.1rem;
    color: #d0d0d0;
    margin-bottom: 2.5rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 10px;
    background: #BC54E9;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
</style>
