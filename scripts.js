function toggleSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.toggle('active');
        } else {
            section.classList.remove('active'); // Close other sections
        }
    });
}
