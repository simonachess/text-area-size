function textAreaSize(minRows, maxRows) {
    const textArea = document.getElementById('textarea');
    if (textArea.value === '') {
        textArea.setAttribute("rows", minRows);
    }
    textArea.addEventListener('input', () => {
        let currentRows = textArea.value.split("\n").length;
        if (currentRows <= minRows) {
            textArea.setAttribute("rows", minRows);
        }
        else if (currentRows < maxRows) {
            textArea.setAttribute("rows", currentRows);
            currentRows++;
        }
    })
}

textAreaSize(4, 8);
