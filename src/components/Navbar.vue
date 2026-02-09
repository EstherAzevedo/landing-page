<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
    isOpen.value = !isOpen.value;
}

function closeMenu() {
    isOpen.value = false;
}

</script>

<template>
    <header class="navbar">
        <div class="nav-container">
            <router-link to="/" class="logo">
                <img src="/logo.svg" alt="EA Dev Logo" class="logo-img" />
            </router-link>
            <nav class="nav-links">
                <router-link to="/" class="nav-item">Home</router-link>
                <router-link to="/projects" class="nav-item">Projects</router-link>
                <router-link to="/aboutme" class="nav-item">About</router-link>
                <router-link to="/contact" class="nav-item">Contact</router-link>
                <a href="/curriculo.pdf" target="_blank" class="nav-btn">
                    Resume
                </a>
            </nav>

            <!-- Botão mobile -->
            <button class="menu-toggle" @click="toggleMenu">
                ☰
            </button>
        </div>

        <!-- Menu mobile -->
        <nav v-if="isOpen" class="mobile-menu">
            <router-link @click="closeMenu" to="/">Home</router-link>
            <router-link @click="closeMenu" to="/projects">Projects</router-link>
            <router-link @click="closeMenu" to="/aboutme">About</router-link>
            <router-link @click="closeMenu" to="/contact">Contact</router-link>
            <a href="/curriculo.pdf" target="_blank" class="mobile-btn" @click="closeMenu">
                Resume
            </a>
        </nav>
    </header>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(12px);
    background: rgba(18, 18, 18, 0.6);
    border-bottom: 1px solid rgba(188, 84, 233, 0.15);
    z-index: 1000;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-item {
    color: #d0d0d0;
    text-decoration: none;
    font-weight: 500;
    position: relative;
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: #BC54E9;
    transition: width 0.3s ease;
}

.nav-item:hover::after,
.router-link-active::after {
    width: 100%;
}

.nav-btn {
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
    background: #BC54E9;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #f5f6f7;
    cursor: pointer;
}

.logo-img {
    height: 28px;
    width: auto;
}

/* Mobile */
@media (max-width: 768px) {
    .home {
        padding-top: 1000px;
    }

    .nav-links {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        padding: 1.5rem;
        background: rgba(18, 18, 18, 0.95);
    }

    .mobile-menu a {
        color: #f5f6f7;
        text-decoration: none;
        font-size: 1.1rem;
    }

    .mobile-btn {
        margin-top: 1rem;
        background: #BC54E9;
        padding: 0.75rem;
        text-align: center;
        border-radius: 10px;
        font-weight: 600;
    }
}
</style>