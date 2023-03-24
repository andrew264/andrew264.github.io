const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    // Toggle dark mode for iframes
    const iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        const iframeDoc = iframes[i].contentWindow.document;
        iframeDoc.body.classList.toggle('dark');
    }
});