    <script>
        let skills = [
            {skillsTitle: "Frontend", skillsList:[
                {icon: "devicon-html5-plain", name: "HTML5"},
                {icon: "devicon-css3-plain", name: "CSS3"},
                {icon: "devicon-javascript-plain", name: "JavaScript"},
                {icon: "devicon-svelte-plain", name: "Svelte"},
                {icon: "devicon-tailwindcss-plain", name: "Tailwind"}
            ]}, {skillsTitle: "Otras", skillsList:[
                {icon: "devicon-nodejs-plain", name: "Node.js"},
                {icon: "devicon-express-original", name: "Express.js"},
                {icon: "devicon-mongodb-plain", name: "MongoDB"},
                {icon: "devicon-git-plain", name: "Git"}
            ]}
        ]
    </script>
    <section class="skills-section">
        <h3
        class="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
        >
        Mis <span class="poppins text-violet-400">Skills</span>
    </h3>
    <div class="skills-container">
        {#each skills as item }
            <div class="skills-category" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" data-aos-once="true">
                <h3 class="skills-title">{item.skillsTitle}</h3>
                <div class="skills-list">
                    {#each item.skillsList as skill }
                        <div class="skill-item"><i class="{skill.icon}"></i>{skill.name}</div>
                    {/each}
                </div>
            </div>            
        {/each}
            <!--
                <div class="skills-category">
                    <h3>Backend</h3>
                    <div class="skills-list">
                    </div>
                </div>
            <div class="skills-category">
                <h3>Tools</h3>
                <div class="skills-list">
                    <div class="skill-item"><i class="devicon-git-plain"></i><span>Git</span></div>
                    <div class="skill-item"><i class="devicon-github-original"></i><span>GitHub</span></div>
                    <div class="skill-item"><i class="devicon-docker-plain"></i><span>Docker</span></div>
                    <div class="skill-item"><i class="devicon-webpack-plain"></i><span>Webpack</span></div>
                    <div class="skill-item"><i class="devicon-babel-plain"></i><span>Babel</span></div>
                    <div class="skill-item"><i class="devicon-figma-plain"></i><span>Figma</span></div>
                    <div class="skill-item"><i class="devicon-vscode-plain"></i><span>VS Code</span></div>
                </div>
            </div>
            -->
        </div>
    </section>
    <style>
.skills-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin: 75px 0 100px;
}

.skills-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #632fdd;
}

.skills-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-flow: wrap;
}

.skills-category {
    border: 1px solid #632fdd;
    background-color: #1a1a2e;
    padding: 2rem;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.skills-category:hover {
    transform: translateY(-10px);
}

.skills-category h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
    border-bottom: 2px solid #632fdd;
    padding-bottom: 0.5rem;
}

.skills-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.skill-item:hover {
    color: #632fdd;
}

.skill-item i {
    font-size: 2rem;
}
@media (width < 800px){
    .skills-section{
        margin: 50px 0 60px;
    }
    .skills-container{
        gap: 20px;
    }
    .skills-category:hover {
    transform: translateY(0);
}
}
    </style>