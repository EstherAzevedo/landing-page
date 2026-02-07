<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue'

interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
}

const projects = ref<Project[]>([
    {
        id: 1,
        title: 'Project Example 1',
        description: 'This is a test project description. Replace this with your real project details.',
        technologies: ['Vue.js', 'TypeScript', 'Vite'],
        githubUrl: 'https://github.com'
    },
    {
        id: 2,
        title: 'Project Example 2',
        description: 'Another example project. Add your own project information here.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com'
    },
    {
        id: 3,
        title: 'Project Example 3',
        description: 'A third example showing how the cards look with different content.',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        githubUrl: 'https://github.com'
    }
])
</script>

<template>
    <Navbar />
    <section class="projects">
        <div class="header">
            <h1>My Projects</h1>
            <p class="subtitle">Here are some of my recent works</p>
        </div>

        <div class="projects-grid">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <div class="card-content">
                    <h2>{{ project.title }}</h2>
                    <p class="description">{{ project.description }}</p>

                    <div class="technologies">
                        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                            {{ tech }}
                        </span>
                    </div>

                    <div class="card-links">
                        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                            class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1 2.7 2.7 0 0 1 .8-1.7c-2.6-.3-5.4-1.3-5.4-6a4.7 4.7 0 0 1 1.2-3.2 4.4 4.4 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.6-5.4 5.9a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .3" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    min-height: 100vh;
    padding: 5rem 2rem 2rem;
    background: linear-gradient(to bottom, #1C0B2B 0%, #121212 100%);
}

.header {
    max-width: 1200px;
    margin: 0 auto 2rem;
    text-align: left;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    color: #f5f6f7;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    background: rgba(188, 84, 233, 0.1);
    border: 1px solid rgba(188, 84, 233, 0.3);
    transition: all 0.3s;
}

.back-button:hover {
    background: rgba(188, 84, 233, 0.2);
    border-color: #BC54E9;
}

h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #BC54E9;
}

.subtitle {
    font-size: 1.1rem;
    color: #b0b0b0;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(188, 84, 233, 0.2);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: #BC54E9;
    box-shadow: 0 8px 32px rgba(188, 84, 233, 0.3);
}

.card-content {
    padding: 2rem;
}

.project-card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f5f6f7;
}

.description {
    color: #d0d0d0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    padding: 0.4rem 0.8rem;
    background: rgba(188, 84, 233, 0.2);
    border: 1px solid rgba(188, 84, 233, 0.4);
    border-radius: 20px;
    font-size: 0.85rem;
    color: #e0b3f5;
}

.card-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    color: #f5f6f7;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
}

.project-link:hover {
    background: rgba(188, 84, 233, 0.3);
    border-color: #BC54E9;
}

.project-link.live {
    background: rgba(188, 84, 233, 0.2);
    border-color: rgba(188, 84, 233, 0.4);
}

.project-link.live:hover {
    background: #BC54E9;
    border-color: #BC54E9;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }

    h1 {
        font-size: 2rem;
    }

    .card-links {
        flex-direction: column;
    }
}
</style>