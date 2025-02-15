const ScrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return null;
}

export default ScrollToSection;