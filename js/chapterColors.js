const sections = Array.from(document.getElementsByTagName("section"));

sections.forEach((section) => {

    // Get the color of the current chapter
    const color1 = getComputedStyle(section).getPropertyValue('--sectionColor1');

    // Get the corresponding footnotes
    const footnotes = document.querySelectorAll(`.footnote[data-section="${section.id}"]`);

    // Apply the color to each footnote
    footnotes.forEach((footnote) => {
        footnote.style.setProperty('--sectionColor1', color1);
    });

});