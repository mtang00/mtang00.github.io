document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    [...projectCards, ...skillItems].forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });
});

function loadProjects() {
    if (typeof projectsData === 'undefined') {
        console.warn('Projects data not loaded');
        return;
    }
    
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize observer for new project cards
    const newProjectCards = document.querySelectorAll('.project-card');
    newProjectCards.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        observer.observe(element);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.projectId = project.id;
    
    const techStack = project.technologies.slice(0, 3).join(' • ');
    const moreCount = project.technologies.length > 3 ? ` +${project.technologies.length - 3} more` : '';
    
    card.innerHTML = `
        <div class="project-header">
            <h3>${project.title}</h3>
            <div class="project-tech">${techStack}${moreCount}</div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-features">
            ${project.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        <div class="project-links">
            ${project.links.live ? `<a href="${project.links.live}" target="_blank" class="btn btn-primary">Live Demo</a>` : ''}
            ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn btn-secondary">View Details</a>` : ''}
            <button class="btn btn-outline" onclick="showProjectDetails('${project.id}')">More Info</button>
        </div>
    `;
    
    return card;
}

function showProjectDetails(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = createProjectModal(project);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Close modal handlers
    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.querySelector('.modal-overlay').onclick = (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            closeModal(modal);
        }
    };
    
    // Escape key handler
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    const testCredentials = project.links.testCredentials ? 
        `<div class="test-credentials">
            <h4>Test Credentials:</h4>
            <p><strong>Username:</strong> ${project.links.testCredentials.username}</p>
            <p><strong>Password:</strong> ${project.links.testCredentials.password}</p>
        </div>` : '';
    
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <div class="project-tech-full">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="project-overview">
                        <h3>Overview</h3>
                        <p>${project.longDescription}</p>
                    </div>
                    
                    <div class="project-features-full">
                        <h3>Key Features</h3>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="project-architecture">
                        <h3>Architecture</h3>
                        <div class="architecture-grid">
                            <div class="arch-item">
                                <strong>Frontend:</strong> ${project.architecture.frontend}
                            </div>
                            <div class="arch-item">
                                <strong>Backend:</strong> ${project.architecture.backend}
                            </div>
                            <div class="arch-item">
                                <strong>Database:</strong> ${project.architecture.database}
                            </div>
                            <div class="arch-item">
                                <strong>Deployment:</strong> ${project.architecture.deployment}
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-highlights">
                        <h3>Technical Highlights</h3>
                        <ul>
                            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="project-workflow">
                        <h3>User Workflow</h3>
                        <ol>
                            ${project.workflow.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    
                    ${testCredentials}
                </div>
                
                <div class="modal-footer">
                    ${project.links.live ? `<a href="${project.links.live}" target="_blank" class="btn btn-primary">Live Demo</a>` : ''}
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn btn-secondary">View Project</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

function closeModal(modal) {
    modal.classList.add('closing');
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}