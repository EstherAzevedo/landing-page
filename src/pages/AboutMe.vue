<template>
    <section class="about">
        <div class="container">
            <h2>About Me</h2>

            <div class="about-content">
                <div class="about-photo">
                    <img src="/Esther_AboutMe.jpeg" alt="Esther Azevedo" />
                </div>

                <div class="about-text">
                    <p>
                        Hi! I'm Esther Azevedo, an Information Systems student at UFC and passionate about technology.
                        I’m especially focused on web development and currently learning modern frameworks like Vue,
                        while also exploring mobile development with a special interest in Android.
                    </p>
                    <p>
                        My goal is to combine creativity and logic to build impactful applications while constantly
                        improving my skills. Beyond coding, I enjoy reading and writing in my free time, which helps me
                        bring new perspectives and creativity into my work.
                    </p>
                </div>
            </div>

            <router-link to="/" class="back-button">Back Home</router-link>
        </div>
    </section>

</template>

<style scoped>
.about {
    padding: 4rem 2rem;
    color: #f5f6f7;
    min-height: 100vh;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
}

.about .container {
    max-width: 1000px;
    margin: 0 auto;
}

.about h2 {
    font-size: 28pt;
    margin: 0 0 2rem 0;
    text-align: left;
}

.about-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
}

.about-photo img {
    width: 220px;
    height: 220px;
    border-radius: 12px;
    object-fit: cover;
    border: 3px solid #bc54e9;
}

.about-text {
    max-width: calc(100% - 240px);
    font-size: 14pt;
    line-height: 1.6;
}

.back-button {
    display: block;
    margin: 2rem auto 0;
    padding: 0.75rem 1.5rem;
    color: #010002;
    background: #bc54e9;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    width: fit-content;
}

.back-button:hover {
    background: #d4a1c3;
}

@media (max-width: 768px) {
    .about .container {
        padding: 0 1rem;
    }

    .about h2 {
        text-align: center;
    }

    .about-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .about-photo img {
        width: 200px;
        height: 200px;
    }

    .about-text {
        max-width: 100%;
    }

    .back-button {
        margin-top: 1.5rem;
    }
}
</style>