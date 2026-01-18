const navList = document.querySelector(".nav-list");
const mobileToggle = document.querySelector(".mobile-toggle");

const showMenu = () => {
  navList.classList.toggle("active");
};

/*SKILLS SECTION */

const skillsArray = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "OpenAI",
  "AWS",
  "AZURE",
  "Vercel",
  "Scrum",
  "Kanban",
  "Agile",
];
const skillsSection = document.getElementById("skills");

const renderSkills = () => {
  skillsSection.classList.toggle("active");

  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  const rowGrid = document.createElement("div");
  rowGrid.className = "skills-grid";
  rowGrid.style.marginBottom = "5px";
  container.appendChild(rowGrid);

  skillsArray.forEach((skill) => {
    const span = document.createElement("span");
    span.className = "skill-tag";
    span.innerText = skill;
    container.appendChild(span);
  });
  skillsSection.scrollIntoView({ behavior: "smooth" });
};

document.querySelector('a[href="#skills"]').addEventListener("click", (e) => {
  e.preventDefault();
  renderSkills();
});

/*Experience SECTION */
const experienceSection = document.getElementById("experience");
const experienceData = [
  {
    role: "Fullstack Developer | Historical Parts AB | Stockholm",
    year: "March25 - August25",
    workarray: [
      " Architected and built scalable, high-performance e-commerce platforms using Django,Next.js, Prisma, and AWS services (EC2, S3, RDS)",
      " Designed and implemented RESTful APIs and serverless functions for dynamic product listings, order management, and secure user authentication.",
      " Developed and integrated AI-based modules for intelligent product recommendations and image recognition using Python Django, TensorFlow, and OpenCV.",
      " Managed the full software development lifecycle—from requirement analysis and database schema design to deployment and monitoring.",
      " Optimized system performance and scalability through caching strategies, lazy loading,and database query optimizations.",
      " Collaborated closely with UI/UX designers and product managers to deliver user-centric,responsive front-end features using TailwindCSS and ShadCN/UI",
      " Lead and mentored a cross-functional development team, including junior developers and KTH Unersity students, providing technical guidance and code reviews",
      " Enforced agile practices, including sprint planning, daily stand-ups, and retrospective meetings.",
      " Tech Stack: Python-Django, Next.js, Prisma, AWS (EC2, S3, RDS), Supabase,TailwindCSS, ShadCN/UI, TensorFlow, OpenCV, GitHub, Agile (Scrum)",
    ],
  },
  {
    role: "Python Developer Intern | Infinity IT Consulting | Stockholm",
    year: "September24 - November25",
    workarray: [
      " Contributed to the development of an Employee Intranet Workplace Portal using Python and Django.",
      " Designed and implemented custom user authentication and role-based access control.",
      " Developed and optimized RESTful APIs to integrate various services and enhance portal functionality.",
      "Collaborated with frontend developers using React for seamless integration.",
      " Utilized SQLite3 for database management and optimized complex queries.",
      " Implemented secure password reset functionality, including email notification.",
      " Actively participated in code reviews and improved project efficiency through CI/CD pipelines.",
      " Used Git for version control, maintaining proper branch management and resolving merge conflicts efficiently.",
      " Tech Stack: Django, Python, JavaScript, HTML/CSS, SQLite, Heroku, PostgreSQL",
    ],
  },
  {
    role: "Python Developer | Lexicon Interactive | Stockholm (Inhouse Project)",
    year: "June 2024",
    workarray: [
      " Built a responsive and interactive OpenAI chatbot application using Python and Django,designed for seamless iFrame embedding.",
      " Implemented Real-Time Communication and Thread Management.",
      " Worked on cross-domain embedding, security, and integration with customer care tools for automation",
      " Tech Stack: Django, Python, JavaScript, HTML/CSS",
    ],
  },
  {
    role: "Android Developer | Viaplay | Stockholm",
    year: "October 2022 – February 2023",
    workarray: [
      " Contributed to developing and testing the streaming app for the leading Nordic entertainment provider.",
      " Used Kotlin and Jetpack Compose to create engaging and responsive user interfaces.",
      " Integrated REST APIs from internal and external sources",
      " Applied common design patterns such as MVC and MVVM",
      " Implemented continuous integration build processes for mobile development.",
      " Worked with Agile/Scrum methodologies and tools such as Git and JIRA.",
      " Tech Stack: Kotlin, Android, Jetpack Compose, Java, REST API",
    ],
  },
  {
    role: "Android Developer | MyReload | Stockholm",
    year: "February 2022 – June 2022",
    workarray: [
      " Contributed to the design and development of the Reload Android app",
      " Integrated REST APIs from internal and external resources.",
      " Familiar with Agile/Scrum rituals.",
      " Experienced in defining continuous integration build processes for mobile development",
      " Tech Stack: Kotlin, Android, Jetpack Compose, Java, REST API",
    ],
  },
];
const renderExperience = () => {
  experienceSection.classList.toggle("active");
  const container = document.getElementById("experience-container");

  if (experienceSection.classList.contains("active")) {
    container.innerHTML = "";
    experienceData.forEach((exp) => {
      const worklist = exp.workarray.map((task) => `<li>${task}</li>`).join("");
      const div = document.createElement("div");
      div.className = "experience-card";
      div.innerHTML = `
     
      <h3>${exp.role}</h3>
      <span class="date-tag">${exp.year}</span>
      <ul>${worklist}</ul>
      `;
      container.appendChild(div);
    });
    experienceSection.scrollIntoView({ behavior: "smooth" });
  }
  experienceSection.scrollIntoView({ behavior: "smooth" });
};
document
  .querySelector('a[href="#experience"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    renderExperience();
  });

/*Education Section */
const educationSection = document.getElementById("education");
const educationData = [
  {
    eduName: `Frontend Development | Futuregames | Stockholm`,
    status: `Ongoing`,
    curriculum: `HTML/CSS, JavaScript (ES6+), React, Next.js, TypeScript, Headless CMS
                  integration, State Management (e.g., Redux, Context API), API Consumption
                  (REST/GraphQL), Version Control (Git), Agile Methodologies, and UI/UX
                  Principles.`,
  },
  {
    eduName: `Diploma in Python Developer | Lexicon IT Proffs, Stockholm`,
    status: `Completed`,
    curriculum: `Web development with Python Django/Flask/REST ,IT-Security: Penetration testing, Ethical Hacking, Skill injections, Encryptions,
                  Social Engineering, Virtual Machines, Kali-Linux, Firewalls, OWASP `,
  },
  {
    eduName: `Bachelor of Engineering (Computer Science) | K.K. Wagh COE, Pune, India`,
    status: `Completed`,
    curriculum: `Computer Science `,
  },
  {
    eduName: `Diploma In Computer Science | Govt. Polytechnic Jalgaon, India`,
    status: `Completed`,
    curriculum: `Computer Science `,
  },
];
const renderEducation = () => {
  educationSection.classList.toggle("active");

  const container = document.getElementById("education-container");
  container.innerHTML = "";

  if (educationSection.classList.contains("active")) {
    educationData.forEach((edu) => {
      const edudiv = document.createElement("div");
      edudiv.className = "education-card";

      edudiv.innerHTML = `
      <div class="edu-header">
                    <h3>${edu.eduName}</h3>
                    <span class="status-badge ${edu.status.toLowerCase()}">${
        edu.status
      }</span>
                </div>
                <div class="edu-curriculum-box">
                    <p>${edu.curriculum}</p>
                </div>
      `;
      container.appendChild(edudiv);
    });
  }
  educationSection.scrollIntoView({ behavior: "smooth" });
};
document
  .querySelector('a[href="#education"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    renderEducation();
  });

/*Git Fetch  */
const fetchGitRepos = async () => {
  const GIT_USERNAME = "Chaitali786";
  const projectSection = document.getElementById("projects");
  const container = document.getElementById("projects-container");

  // Toggle visibility
  projectSection.classList.toggle("active");

  // 2. Logic Fix: Only fetch if the section is active AND it's empty.
  // If it's active but ALREADY has repos, we don't need to do anything!
  if (projectSection.classList.contains("active")) {
    // Only fetch if we haven't loaded them yet
    if (container.innerHTML.trim() === "") {
      container.innerHTML = `<p>Loading Projects ......</p>`;

      try {
        const response = await fetch(
          `https://api.github.com/users/${GIT_USERNAME}/repos?sort=updated&per_page=6`
        );
        const repos = await response.json();

        container.innerHTML = ""; // Clear loading message

        repos.forEach((repo) => {
          if (repo.name === "BMS_Dashboard") {
            return; // This skips this specific repo and moves to the next one
          }
          const card = document.createElement("div");
          card.className = "experience-card project-item";
          card.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p style="font-size: 0.85rem">
                            ${
                              repo.description ||
                              "Project exploring modern web technologies."
                            }
                        </p>
                        <div >
                            
                            <span class="language-tag">Languages : ${
                              repo.language || "Software"
                            }</span>
                        </div>
                        <a href="${
                          repo.html_url
                        }" target="_blank" class="hero-button btn-outline" 
                           style="font-size: 0.75rem; padding: 5px 15px; display: inline-block;">
                           Source Code
                        </a>
                    `;
          container.appendChild(card);
        });
      } catch (error) {
        container.innerHTML =
          "<p>Error loading projects. Please try again later.</p>";
        console.error("GitHub API Error:", error);
      }
    }
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
};
document.querySelector("#viewworkbtn").addEventListener("click", (e) => {
  e.preventDefault();
  fetchGitRepos();
});

/*Hire Me Form  */
document.addEventListener("DOMContentLoaded", () => {
  const hireBtn = document.querySelector(".hero-button.btn-filled");
  const contactSection = document.getElementById("contact-section");

  if (hireBtn && contactSection) {
    hireBtn.addEventListener("click", (e) => {
      e.preventDefault();
      contactSection.style.display = "block";
      setTimeout(() => {
        contactSection.classList.add("show");
        contactSection.scrollIntoView({ behavior: "smooth" });
      }, 10);
    });
  }

  const hireForm = document.getElementById("hire-form");
  if (hireForm) {
    hireForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out .");
      hireForm.reset();
    });
  }
});
