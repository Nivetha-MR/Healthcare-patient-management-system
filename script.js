let records = [];

function addPatientRecord() {
    const patientId = document.getElementById("patient-id").value;
    const patientName = document.getElementById("patient-name").value;
    const patientAge = document.getElementById("patient-age").value;
    const medicalHistory = document.getElementById("medical-history").value;
    const prescriptions = document.getElementById("prescriptions").value;
    const testResults = document.getElementById("test-results").value;

    if (patientId && patientName) {
        const record = {
            id: patientId,
            name: patientName,
            age: patientAge,
            history: medicalHistory,
            prescriptions: prescriptions,
            results: testResults,
        };

        records.push(record);
        displayRecords();
        clearForm();
    }
}

function displayRecords() {
    const table = document.getElementById("records-table");
    table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Age</th><th>Medical History</th><th>Prescriptions</th><th>Test Results</th><th>Action</th></tr>";

    records.forEach((record) => {
        const row = table.insertRow();
        row.innerHTML = `<td>${record.id}</td><td>${record.name}</td><td>${record.age}</td><td>${record.history}</td><td>${record.prescriptions}</td><td>${record.results}</td><td><button onclick="deletePatientRecord('${record.id}')">Delete</button></td>`;
    });
}

function clearForm() {
    document.getElementById("patient-id").value = "";
    document.getElementById("patient-name").value = "";
    document.getElementById("patient-age").value = "";
    document.getElementById("medical-history").value = "";
    document.getElementById("prescriptions").value = "";
    document.getElementById("test-results").value = "";
}

function searchPatientRecord() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredRecords = records.filter((record) => record.id.toLowerCase().includes(searchInput) || record.name.toLowerCase().includes(searchInput));
    displayRecords(filteredRecords);
}

function deletePatientRecord(patientId) {
    records = records.filter((record) => record.id !== patientId);
    displayRecords();
}

function deletePatientRecords() {
    records = [];
    displayRecords();
}
