// setup
const data = {
    datasets: [{
        label: 'Essen auf dem Teller',
        data: [
            [0, 100],
            [1, 75],
            [2, 50],
            [3, 25],
            [4, 0],
        ],
        backgroundColor: [
            '#1c76c5',
        ],
        borderColor: [
            '#0e87ef',
        ],

        borderWidth: 3
    },
    {
        label: 'Essen im Magen',
        data: [
            [0, 0],
            [1, 25],
            [2, 50],
            [3, 75],
            [4, 100],
        ],
        backgroundColor: [
            'rgb(203,140,80)',
        ],
        borderColor: [
            'rgb(255,141,2)',
        ],
        borderWidth: 3
    }],
};

// config
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            x: {
                type: 'linear',
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;