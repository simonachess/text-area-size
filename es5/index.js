'use strict';

function textAreaSize(minRows, maxRows) {
    var textArea = document.getElementById('textarea');
    if (textArea.value === '') {
        textArea.setAttribute("rows", minRows);
    }
    textArea.addEventListener('input', function () {
        var currentRows = textArea.value.split("\n").length;
        if (currentRows <= minRows) {
            textArea.setAttribute("rows", minRows);
        } else if (currentRows < maxRows) {
            textArea.setAttribute("rows", currentRows);
            currentRows++;
        }
    });
}

textAreaSize(4, 12);