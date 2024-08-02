document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const rollNumber = document.getElementById('rollNumber').value;
    const jsonData = document.getElementById('jsonData').value;

    fetch('http://localhost:3001/bfhl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roll_number: rollNumber, json_data: JSON.parse(jsonData) })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error occurred: ' + error.message;
    });
});
