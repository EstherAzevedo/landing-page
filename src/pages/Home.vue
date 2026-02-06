<template>
    <section class="home">
        <div class="background-decoration">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
        </div>

        <div class="container">
            <div class="content">
                <div class="info">
                    <div class="greeting">Hello, I'm</div>
                    <h1 class="name">Esther Azevedo</h1>
                    <h2 class="title">Information Systems</h2>
                    <p class="institution">Universidade Federal do Ceará (UFC)</p>

                    <p class="description">
                        Passionate about technology and focused on software development. Currently advancing in web
                        application development, always seeking to combine theory with practice.
                    </p>

                    <div class="cta-buttons">
                        <router-link to="/projects" class="btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg>
                            View Projects
                        </router-link>
                        <router-link to="/aboutme" class="btn-secondary">
                            About Me
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" />
                            </svg>
                        </router-link>
                    </div>

                    <div class="social-links">
                        <a href="https://github.com/EstherAzevedo" target="_blank" rel="noopener noreferrer"
                            class="social-btn" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1 2.7 2.7 0 0 1 .8-1.7c-2.6-.3-5.4-1.3-5.4-6a4.7 4.7 0 0 1 1.2-3.2 4.4 4.4 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.6-5.4 5.9a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .3" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/esther-azevedo-aguiar/" target="_blank"
                            rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M20.45 20.45h-3.55v-5.4c0-1.28 0-2.92-1.77-2.92s-2.05 1.39-2.05 2.83v5.49h-3.55V9h3.4v1.56h.05a3.73 3.73 0 0 1 3.36-1.85c3.6 0 4.26 2.37 4.26 5.44zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="photo-section">
                    <div class="photo-wrapper">
                        <router-link to="/aboutme">
                            <img src="/esther.jpeg" alt="Esther Azevedo" class="profile-photo" />
                        </router-link>
                        <div class="photo-glow"></div>
                    </div>

                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-value">UFC</div>
                            <div class="stat-label">University</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <div class="stat-value">2020</div>
                            <div class="stat-label">Started</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <div class="stat-value">Web</div>
                            <div class="stat-label">Focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem 3rem;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
    overflow: hidden;
}

.background-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

.circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(188, 84, 233, 0.15) 0%, transparent 70%);
    filter: blur(60px);
    animation: float 20s infinite ease-in-out;
}

.circle-1 {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -100px;
    animation-delay: 0s;
}

.circle-2 {
    width: 400px;
    height: 400px;
    bottom: -200px;
    left: -150px;
    animation-delay: 10s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-30px) scale(1.05);
    }
}

.container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.content {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 5rem;
    align-items: center;
}

.info {
    animation: fadeInLeft 0.8s ease-out;
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.greeting {
    font-size: 1.2rem;
    color: #BC54E9;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.name {
    font-size: 4rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    color: #f5f6f7;
    line-height: 1.1;
    background: linear-gradient(135deg, #f5f6f7 0%, #d0d0d0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.title {
    font-size: 1.8rem;
    color: #d0d0d0;
    margin: 0 0 0.3rem 0;
    font-weight: 600;
}

.institution {
    font-size: 1.1rem;
    color: #BC54E9;
    margin: 0 0 2rem 0;
    font-weight: 500;
}

.description {
    font-size: 1.15rem;
    color: #b0b0b0;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 600px;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    max-width: 100%;
}

.btn-primary,
.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    box-sizing: border-box;
}

.btn-primary {
    background: #BC54E9;
    color: #fff;
    box-shadow: 0 4px 20px rgba(188, 84, 233, 0.3);
}

.btn-primary:hover {
    background: #d4a1c3;
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(188, 84, 233, 0.4);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: #f5f6f7;
    border-color: rgba(188, 84, 233, 0.3);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(188, 84, 233, 0.15);
    border-color: #BC54E9;
    transform: translateY(-2px);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #f5f6f7;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-btn:hover {
    background: rgba(188, 84, 233, 0.2);
    border-color: #BC54E9;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(188, 84, 233, 0.3);
}

.photo-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    animation: fadeInRight 0.8s ease-out 0.2s backwards;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.photo-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
}

.photo-wrapper a {
    display: block;
    position: relative;
}

.profile-photo {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(188, 84, 233, 0.4);
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
}

.profile-photo:hover {
    border-color: #BC54E9;
    transform: scale(1.02);
}

.photo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    background: radial-gradient(circle, rgba(188, 84, 233, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
    z-index: 1;
    animation: pulse 3s infinite ease-in-out;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.1);
    }
}

.stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.stat-item {
    text-align: center;
    flex: 1;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #BC54E9;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.85rem;
    color: #b0b0b0;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(188, 84, 233, 0.2);
}

@media (max-width: 1200px) {
    .content {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        font-size: 3.5rem;
    }

    .description {
        max-width: 100%;
    }

    .cta-buttons {
        justify-content: center;
    }

    .social-links {
        justify-content: center;
    }

    .photo-section {
        max-width: 450px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .home {
        padding: 1rem 0.5rem;
    }

    .content {
        gap: 3rem;
        padding: 0 0.5rem;
    }

    .name {
        font-size: 2.5rem;
    }

    .title {
        font-size: 1.4rem;
    }

    .description {
        font-size: 1rem;
        padding: 0 0.5rem;
    }

    .cta-buttons {
        flex-direction: column;
        width: 100%;
        padding: 0;
        gap: 0.75rem;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        max-width: 100%;
        justify-content: center;
        padding: 0.85rem 1rem;
        font-size: 0.9rem;
        box-sizing: border-box;
    }

    .social-links {
        padding: 0 1rem;
    }

    .circle-1,
    .circle-2 {
        display: none;
    }

    .stats {
        flex-direction: column;
        gap: 1rem;
    }

    .stat-divider {
        width: 100%;
        height: 1px;
    }
}

@media (max-width: 400px) {
    .greeting {
        font-size: 1rem;
    }

    .name {
        font-size: 2rem;
    }

    .title {
        font-size: 1.2rem;
    }

    .institution {
        font-size: 1rem;
    }

    .cta-buttons {
        padding: 0;
        gap: 0.5rem;
    }

    .btn-primary,
    .btn-secondary {
        padding: 0.75rem 0.75rem;
        font-size: 0.85rem;
        gap: 0.4rem;
    }

    .btn-primary svg,
    .btn-secondary svg {
        width: 18px;
        height: 18px;
    }

    .social-links {
        padding: 0 0.5rem;
    }

    .photo-section {
        padding: 0 0.5rem;
    }
}
</style>
