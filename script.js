const projectCategories = [
  {
    category: "Telkom University",
    projects: [
      { name: "Dashboard HR", description: "A dashboard for HR." },
      { name: "Jobdesc App", description: "An app for job descriptions." },
      { name: "TEL - U CUP", description: "An app for Sport Eventsplayer management at Telkom University." },
      { name: "Lemari Data", description: "A file management system for HR." },
    ],
  },
  {
    category: "Freelance Projects",
    projects: [
      { name: "Chikuro Landing Page", description: "A landing page for Chikuro." },
      { name: "Dizeto Landing Page", description: "A landing page for Dizeto." },
    ],
  },
];

const projectMenu = document.getElementById("project-menu");

// Function to toggle visibility of project lists
function toggleProjects(event) {
  const projectList = event.currentTarget.nextElementSibling;
  if (projectList.classList.contains("visible")) {
    projectList.classList.remove("visible");
  } else {
    projectList.classList.add("visible");
  }
}

// Add categories and projects dynamically
projectCategories.forEach((category) => {
  // Create category heading
  const categoryHeading = document.createElement("h3");
  categoryHeading.textContent = category.category;
  categoryHeading.addEventListener("click", toggleProjects);

  // Create project list
  const projectList = document.createElement("ul");

  // Add the `visible` class to make it visible by default
  projectList.classList.add("visible");

  // Add individual projects to the list
  category.projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${project.name}</strong> : ${project.description}`;
    projectList.appendChild(listItem);
  });

  // Append the category heading and project list to the menu
  projectMenu.appendChild(categoryHeading);
  projectMenu.appendChild(projectList);
});