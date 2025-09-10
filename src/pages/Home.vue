<template>
    <section class="home">
        <div class="content">
            <div class="info">
                <h1>Esther Azevedo</h1>
                <h2>Information Systems Student - UFC</h2>
                <p>
                    Passionate about technology and focused on software development. Currently advancing in web
                    application development, always seeking to combine theory with practice.
                </p>

                <div class="button">
                    <router-link to="/projects">
                        <button>Projects</button>
                    </router-link>
                </div>
            </div>

            <div class="foto">
                <a href="/aboutMe"><img src="/esther.jpeg" alt="Foto de Esther" /></a>
                <div class="social-links">
                    <a href="https://github.com/EstherAzevedo" target="_blank" rel="noopener noreferrer"
                        class="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path
                                d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1 2.7 2.7 0 0 1 .8-1.7c-2.6-.3-5.4-1.3-5.4-6a4.7 4.7 0 0 1 1.2-3.2 4.4 4.4 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.6-5.4 5.9a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .3" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/esther-azevedo-aguiar/" target="_blank"
                        rel="noopener noreferrer" class="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path
                                d="M20.45 20.45h-3.55v-5.4c0-1.28 0-2.92-1.77-2.92s-2.05 1.39-2.05 2.83v5.49h-3.55V9h3.4v1.56h.05a3.73 3.73 0 0 1 3.36-1.85c3.6 0 4.26 2.37 4.26 5.44zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.home {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    padding: 0.5rem;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
}

.content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10rem;
    max-width: 1000px;
}

.foto {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.foto img {
    width: 380px;
    height: 380px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #2563eb;
}

.info h1 {
    font-size: 42pt;
    margin-bottom: 1rem;
    margin-top: 0;
    color: #f5f6f7;
}

.info h2 {
    font-size: 15pt;
    color: #f5f6f7;
    margin-bottom: 3rem;
}

.info p {
    font-size: 14pt;
    color: #f5f6f7;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    padding-right: 2rem;
}

.social-links {
    display: flex;
    gap: 12px;
}

.icon-btn {
    padding: 7px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

.icon-btn:hover {
    background: #444;
}

.button button {
    margin-top: 1.5rem;
    font-size: 15pt;
    text-transform: uppercase;
    width: 273px;
    height: 60px;
    color: #f5f6f7;
    background: #BC54E9;
    border-radius: 12px;
}

.button button:hover {
    background: #d4a1c3;
}

@media (max-width: 768px) {
    .content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
</style>
