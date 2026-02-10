<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
<template>
    <Navbar />
    <section class="contact">
        <div class="container">
            <div class="contact-card">
                <div class="contact-text">
                    <h1>Contact</h1>
                    <p class="subtitle">
                        Feel free to send me a message.
                        I’ll respond as soon as possible.
                    </p>

                    <form action="https://formsubmit.co/0459f374ca63b416fb4baf017a21b45d" method="POST">
                        <input type="text" name="name" placeholder="Your name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea name="message" placeholder="Message"></textarea>
                        <input type="hidden" name="_next" value="https://estherazevedo.github.io/portfolio/#/thanks">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_subject" value="New contact from portfolio">
                        <button type="submit">Send Message</button>

                    </form>
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
        </div>
    </section>
</template>

<style scoped>
.contact {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
    color: #f5f6f7;
    min-height: 100vh;
    padding: 6rem 2rem 2rem;
}

.container {
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.contact-card {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.contact-text h1 {
    font-size: 3rem;
    margin: 0 0 1.5rem 0;
    color: #BC54E9;
}

.contact-text {
    align-items: center;
}

.subtitle {
    font-size: 1.1rem;
    color: #d0d0d0;
    margin-bottom: 2rem;
    line-height: 1.6;
}


form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

input,
textarea {
    padding: 0.9rem 1rem;
    border-radius: 10px;
    border: 1px solid rgba(188, 84, 233, 0.3);
    background: rgba(18, 18, 18, 0.6);
    color: #f5f6f7;
    font-size: 1rem;
    outline: none;
}

textarea {
    min-height: 95px;
    resize: vertical;
}

input::placeholder,
textarea::placeholder {
    color: #a0a0a0;
}

input:focus,
textarea:focus {
    border-color: #BC54E9;
    box-shadow: 0 0 0 2px rgba(188, 84, 233, 0.2);
}

button {
    margin-top: 1rem;
    padding: 0.9rem;
    border-radius: 12px;
    background: #BC54E9;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background: #a743d1;
    transform: translateY(-2px);
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
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

@media (max-width: 768px) {
    .contact-card {
        padding: 2rem 1.5rem;
    }

    .contact-text h1 {
        font-size: 2.2rem;
    }
}
</style>