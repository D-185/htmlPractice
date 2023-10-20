function fetchData() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then((res) => res.json())
        .then((apiData) => {
            const tableBody = document.getElementById('fetchTableBodyWrap');
            console.log('apiData', apiData)
            const tableRows = apiData.data.map((item) =>
                `<tr>
            <td>${item.id}</td>
            <td>${item.employee_name}</td>
            <td>${item.employee_salary}</td>
        </tr>`
            ).join(''); //Convert the array of table rows to a single string

            tableBody.innerHTML = tableRows; // Set the table body's HTML
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}

function axiosData() {
    const apiUrl = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';

    axios
        .get(apiUrl)
        .then((response) => {
            const apiResponse = response.data;

            const table = document.getElementById('axiosTableBodyWrap');

            const tableRows = apiResponse.map((item) =>
                `<tr>
            <td>${item.name}</td>
            <td>${item.city}</td>
        </tr>`
            ).join('');
            table.innerHTML = tableRows;
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}