const filterForm = document.getElementById('filterForm');
const subjecSelect = document.getElementById('subjec');
const yearSelect = document.getElementById('year');
const periodSelect = document.getElementById('period');
const gradesTable = document.getElementById('gradesTable');

function filterTable() {
    const selectedSubjec = subjecSelect.value;
    const selectedYear = yearSelect.value;
    const selectedPeriod = periodSelect.value;

    for (let i = 1; i < gradesTable.rows.length; i++) {
        const row = gradesTable.rows[i];
        const subjecCell = row.cells[2];
        const yearCell = row.cells[3];
        const periodCell = row.cells[4];

        let showRow = true;
        if (selectedSubjec !== '' && subjecCell.textContent !== selectedSubjec) {
            showRow = false;
        }
        if (selectedYear !== '' && yearCell.textContent !== selectedYear) {
            showRow = false;
        }
        if (selectedPeriod !== '' && periodCell.textContent !== selectedPeriod) {
            showRow = false;
        }

        if (showRow) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    filterTable();
});