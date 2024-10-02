// JavaScript code to filter the grades table based on user input

// Get references to the form, select elements, and table
const filterForm = document.getElementById('filterForm');
const subjecSelect = document.getElementById('subjec');
const yearSelect = document.getElementById('year');
const periodSelect = document.getElementById('period');
const gradesTable = document.getElementById('gradesTable');

// Function to filter the table based on selected criteria
function filterTable() {
    // Get selected values from the form
    const selectedSubjec = subjecSelect.value;
    const selectedYear = yearSelect.value;
    const selectedPeriod = periodSelect.value;

    // Loop through each row of the table
    for (let i = 1; i < gradesTable.rows.length; i++) {
        const row = gradesTable.rows[i];
        const subjecCell = row.cells[2];
        const yearCell = row.cells[3];
        const periodCell = row.cells[4];

        // Check if the row matches the selected criteria
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

        // Show or hide the row based on the matching criteria
        if (showRow) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Add event listener to the form to trigger the filter function when submitted
filterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    filterTable();
});