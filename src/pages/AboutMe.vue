<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';

interface Skill {
    name: string
    level: number
}

interface Education {
    degree: string
    institution: string
    period: string
}

const skills = ref<Skill[]>([
    { name: 'Vue.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Android', level: 60 },
    { name: 'Python', level: 65 }
])

const education = ref<Education[]>([
    {
        degree: 'Information Systems',
        institution: 'Universidade Federal do Ceará (UFC)',
        period: '2020 - Present'
    },
    {
        degree: 'Computer Technician',
        institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)',
        period: '2018 - 2022'
    }
])

const interests = ref<string[]>([
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Open Source',
    'Reading',
    'Writing',
    'Education'
])
</script>

<template>
    <Navbar />
    <section class="about">
        <div class="container">
            <div class="hero-section">
                <div class="about-photo">
                    <img src="/Esther_AboutMe.jpeg" alt="Esther Azevedo" />
                </div>
                <div class="hero-text">
                    <h1>About Me</h1>
                    <p class="intro">
                        Hi! I'm Esther Azevedo, an Information Systems student at UFC and passionate about technology.
                        I'm especially focused on web development and currently learning modern frameworks like Vue,
                        while also exploring mobile development with a special interest in Android.
                    </p>
                    <p class="intro">
                        My goal is to combine creativity and logic to build impactful applications while constantly
                        improving my skills. Beyond coding, I enjoy reading and writing in my free time, which helps me
                        bring new perspectives and creativity into my work.
                    </p>
                </div>
            </div>

            <div class="sections">
                <div class="section">
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                        </svg>
                        Skills & Technologies
                    </h2>
                    <div class="skills-grid">
                        <div v-for="skill in skills" :key="skill.name" class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">{{ skill.name }}</span>
                                <span class="skill-percentage">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                        </svg>
                        Education
                    </h2>
                    <div class="education-list">
                        <div v-for="(edu, index) in education" :key="index" class="education-item">
                            <h3>{{ edu.degree }}</h3>
                            <p class="institution">{{ edu.institution }}</p>
                            <p class="period">{{ edu.period }}</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        Interests
                    </h2>
                    <div class="interests-grid">
                        <span v-for="interest in interests" :key="interest" class="interest-tag">
                            {{ interest }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    min-height: 100vh;
    padding: 3rem 2rem 2rem;
    color: #f5f6f7;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 5rem;
}

.back-button-top {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    padding: 0.75rem 1.5rem;
    color: #f5f6f7;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    background: rgba(188, 84, 233, 0.1);
    border: 1px solid rgba(188, 84, 233, 0.3);
    transition: all 0.3s;
}

.back-button-top:hover {
    background: rgba(188, 84, 233, 0.2);
    border-color: #BC54E9;
}

.hero-section {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.about-photo img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    object-fit: cover;
    border: 3px solid #BC54E9;
}

.hero-text h1 {
    font-size: 3rem;
    margin: 0 0 1.5rem 0;
    color: #BC54E9;
}

.intro {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #d0d0d0;
    margin-bottom: 1rem;
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.section {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.section h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.8rem;
    margin: 0 0 1.5rem 0;
    color: #BC54E9;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.skill-item {
    padding: 1rem;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    font-weight: 600;
    color: #f5f6f7;
}

.skill-percentage {
    color: #BC54E9;
    font-weight: 600;
}

.skill-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #BC54E9, #d4a1c3);
    border-radius: 10px;
    transition: width 1s ease;
}

.education-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.education-item {
    padding: 1.5rem;
    background: rgba(188, 84, 233, 0.05);
    border-left: 4px solid #BC54E9;
    border-radius: 8px;
}

.education-item h3 {
    font-size: 1.4rem;
    margin: 0 0 0.5rem 0;
    color: #f5f6f7;
}

.institution {
    font-size: 1.1rem;
    color: #d0d0d0;
    margin: 0.25rem 0;
}

.period {
    color: #BC54E9;
    font-weight: 600;
    margin: 0.5rem 0 0 0;
}

.interests-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.interest-tag {
    padding: 0.75rem 1.5rem;
    background: rgba(188, 84, 233, 0.2);
    border: 1px solid rgba(188, 84, 233, 0.4);
    border-radius: 25px;
    font-size: 1rem;
    color: #e0b3f5;
    transition: all 0.3s;
}

.interest-tag:hover {
    background: rgba(188, 84, 233, 0.3);
    border-color: #BC54E9;
    transform: translateY(-2px);
}

@media (max-width: 968px) {
    .hero-section {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .about-photo img {
        margin: 0 auto;
        max-width: 300px;
    }

    .hero-text h1 {
        font-size: 2.2rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .about {
        padding: 1rem;
    }

    .hero-section,
    .section {
        padding: 1.5rem;
    }

    .section h2 {
        font-size: 1.5rem;
    }

    .interests-grid {
        justify-content: center;
    }
}
</style>
