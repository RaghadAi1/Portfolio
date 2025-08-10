document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar1");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // احذف كل الكلاسات الخاصة بالألوان
        navbar.classList.remove("light", "dark", "blue");
        // أضف الكلاس اللي يطابق القسم
        if (entry.target.classList.contains("light-section")) {
          navbar.classList.add("light");
        } else if (entry.target.classList.contains("dark-section")) {
          navbar.classList.add("dark");
        } else if (entry.target.classList.contains("blue-section")) {
          navbar.classList.add("blue");
        }
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));
});
