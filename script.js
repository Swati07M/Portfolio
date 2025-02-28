function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById("download-btn").addEventListener("click", function(event) 
  {
  window.open("./assets/SwatiMahajan-WebEngineer-Emp_681.pdf", "_blank");
  const anchor = document.createElement("a");
  anchor.href = "./assets/SwatiMahajan-WebEngineer-Emp_681.pdf";
  anchor.download ="SwatiMahajan-Resume.pdf";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  });
  document.getElementById("download-cv-btn").addEventListener("click", function() {
    const fileUrl = "./assets/SwatiMahajan-WebEngineer-Emp_681.pdf";
    window.open(fileUrl, "_blank");
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "SwatiMahajan-CV.pdf"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  });