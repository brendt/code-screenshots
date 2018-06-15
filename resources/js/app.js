hljs.initHighlightingOnLoad();

const buttons = document.querySelectorAll('.actions > button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        const parent = document.querySelector(button.getAttribute('data-selector'));

        const filename = button.getAttribute('data-filename');

        const element = parent.querySelector('pre');

        if (button.getAttribute('data-class')) {
            parent.classList.add(button.getAttribute('data-class'));
        }

        html2canvas(element).then(canvas => {
            const link = document.createElement('a');

            link.download = filename + '.png';
            link.href = canvas.toDataURL();

            link.click();

            if (button.getAttribute('data-class')) {
                parent.classList.remove(button.getAttribute('data-class'));
            }
        });
    });
}
