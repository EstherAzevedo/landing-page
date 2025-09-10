<template>
    <section class="projects">
        <h1>My Projects</h1>
        <p class="desc">
            Nothing here yet!
        </p>
        <router-link to="/" class="back-button">
            Back Home
        </router-link>
    </section>

</template>

<style scoped>
.projects {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    color: #f5f6f7;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    color: #010002;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}

.back-button:hover {
    background: #d4a1c3;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: #BC54E9;
}

.desc {
    margin-bottom: 2rem;
    color: black;
}
</style>