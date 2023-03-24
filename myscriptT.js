
const ctx = document.getElementById('myChartTessa');

const data = {
    labels: ['blood groups'],
    datasets: [
        {
            label: 'A+',
            barThickness: 400,
            data: [37],
            backgroundColor: "#420210",
            borderRadius: {
                bottomLeft: 50,
                bottomRight: 50,
            },
            borderSkipped: false,
        },
        {
            label: '0+',
            barThickness: 400,
            data: [35],
            backgroundColor: "#85071d",
        },
        {
            label: 'B+',
            barThickness: 400,
            data: [9],
            backgroundColor: "#bd223d",
        },
        {
            label: 'A-',
            barThickness: 400,
            data: [6],
            backgroundColor: "#bd223d",
        },
        {
            label: '0-',
            barThickness: 400,
            data: [6],
            backgroundColor: "#bd223d",
        },
        {
            label: 'AB',
            barThickness: 400,
            data: [4],
            backgroundColor: "#ee657e",
        },
        {
            label: 'B-',
            barThickness: 400,
            data: [2],
            backgroundColor: "#ee657e",
        },
        {
            label: 'AB-',
            barThickness: 400,
            data: [1],
            backgroundColor: "#ee657e",
        },

    ],

};

new Chart(ctx, {
    type: 'bar',
    data: data,
    plugins: [ChartDataLabels],
    options: {
        plugins: {

            legend:{
                display: false,
            },

            title: {
                display: true,
                text: 'Blood Statistics',
                //align: 'start',
                padding: {
                    top: 10,
                    bottom: 30,
                },
                color: 'white',
                font: {
                    family: 'Poppins',
                    weight: 200,
                    size: 36,
                }
            },

            datalabels: {
                color: 'white',
                font: 'Poppins',
                fontweight: 200,
            },

        },
        responsive: true,
        scales: {
            x: {
                display: false,
                stacked: true,
            },
            y: {
                display: false,
                stacked: true
            }
        },
        maintainAspectRatio: false,
    },
});
