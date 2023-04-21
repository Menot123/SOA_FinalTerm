$(document).ready(function() {
    $('#download-pdf').click(function() {
        var doc = new jsPDF();

        doc.fromHTML($("#target").html())
    })
})