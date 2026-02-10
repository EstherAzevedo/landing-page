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
                        <input type="hidden" name="_next" value="https://estherazevedo.github.io/portfolio/thanks">
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
                    <a href="https://wa.me/5585991781234?text=Hello%20Esther!%20I%20found%20your%20portfolio."
                        target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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