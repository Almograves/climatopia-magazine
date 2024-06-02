const sections = Array.from(document.getElementsByTagName("section"));

sections.forEach((section) => {

    // Get the color of the current chapter
    const color1 = getComputedStyle(section).getPropertyValue('--sectionColor1');

    // Get the corresponding footnote
    const footnote = document.querySelector(`.footnote[data-section="${section.id}"]`);

    // Apply the color to the footnote
    if (footnote) {
        footnote.style.setProperty('--sectionColor1', color1);
    }

});