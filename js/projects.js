export function setupProjects() {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Structural Analysis Library in Python',
      category: 'automation',
      description: 'A Python library for automated structural analysis with advanced algorithms for beam and frame structures.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'This library implements advanced numerical methods for structural analysis, providing engineers with tools to automate calculations for beams, frames, and trusses. It includes features for linear and non-linear analysis, dynamic response, and code-compliance checking.',
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Seismic Response Study',
      category: 'structural',
      description: 'Comprehensive analysis of multi-story building responses to seismic loads using ETABS and custom scripts.',
      image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'This project involved the detailed modeling and analysis of a 12-story reinforced concrete structure subjected to various earthquake scenarios. The study included time history analysis, response spectrum analysis, and pushover analysis to evaluate structural performance and safety.',
      technologies: ['ETABS', 'Python', 'Excel', 'AutoCAD'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'BIM Workflow Automation',
      category: 'automation',
      description: 'Revit API scripts to automate structural design workflows and improve productivity.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'Developed a suite of tools using the Revit API and Python to automate repetitive tasks in structural BIM modeling. The toolset includes automated rebar detailing, structural element scheduling, and design validation checks that have reduced modeling time by 40%.',
      technologies: ['Revit API', 'Python', 'C#', 'Dynamo'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: '3D Structural Visualization Tool',
      category: 'modeling',
      description: 'Interactive web-based tool for visualizing structural analysis results using Three.js.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'Created an interactive web application that converts structural analysis outputs from ETABS and SAP2000 into visually intuitive 3D models. Engineers can view deformations, stress distributions, and other analysis results in real-time with various visualization options.',
      technologies: ['JavaScript', 'Three.js', 'HTML/CSS', 'Python'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Foundation Design Optimization',
      category: 'structural',
      description: 'Research on optimizing foundation designs for various soil conditions using machine learning.',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'This research project explored the application of machine learning algorithms to predict optimal foundation designs based on soil parameters, structural loads, and site conditions. The resulting model achieved 87% accuracy in recommending cost-effective foundation solutions.',
      technologies: ['Python', 'TensorFlow', 'SAP2000', 'Excel'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Structural Health Monitoring System',
      category: 'automation',
      description: 'IoT-based system for real-time monitoring of structural health and performance.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'Designed and implemented a network of sensors to monitor structural health indicators in real-time. The system collects data on vibrations, displacements, and environmental conditions, using edge computing for initial processing and cloud services for storage and analysis.',
      technologies: ['Arduino', 'Python', 'IoT', 'Cloud Computing'],
      link: '#',
      github: '#'
    }
  ];

  // Render projects
  const projectsGrid = document.getElementById('projects-grid');
  
  function renderProjects(category = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
      ? projects 
      : projects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card reveal';
      projectCard.setAttribute('data-category', project.category);
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-category">${getCategoryName(project.category)}</div>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
            <a href="#" class="project-link view-details" data-id="${project.id}">
              <i class="fas fa-eye"></i> View Details
            </a>
            <a href="${project.github}" class="project-link" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = parseInt(button.getAttribute('data-id'));
        openProjectModal(projectId);
      });
    });
  }
  
  // Helper function to get readable category names
  function getCategoryName(category) {
    const categories = {
      'structural': 'Structural Analysis',
      'automation': 'Automation',
      'modeling': '3D Modeling'
    };
    
    return categories[category] || category;
  }
  
  // Filter projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      renderProjects(category);
      
      // Re-init animations
      setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
          card.classList.add('active');
        });
      }, 100);
    });
  });
  
  // Project modal
  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="modal-body">
          <h2 class="modal-title">${project.title}</h2>
          <div class="modal-category">${getCategoryName(project.category)}</div>
          <div class="modal-details">
            <p>${project.details}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
          </div>
          <div class="modal-footer">
            <a href="${project.link}" class="btn btn-primary" target="_blank">View Live Project</a>
            <a href="${project.github}" class="btn btn-outline" target="_blank">View Source Code</a>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
      modal.classList.add('open');
    }, 10);
    
    // Close modal on button click
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
      modal.classList.remove('open');
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 300);
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      }
    });
  }
  
  // Initial render
  renderProjects();
}