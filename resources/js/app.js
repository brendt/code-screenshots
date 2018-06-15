hljs.initHighlightingOnLoad();

const buttons = document.querySelectorAll('.actions > button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        const element = document.querySelector(button.getAttribute('data-selector'));

        const filename = button.getAttribute('data-filename');

        html2canvas(element).then(canvas => {
            const link = document.createElement('a');

            link.download = filename + '.png';
            link.href = canvas.toDataURL();

            link.click();
        });
    });
}
