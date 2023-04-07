
const ctx = document.getElementById('myChartTessa');

const data = {
    labels: ['blood groups'],
    datasets: [
        {
            label: 'A+',
            barThickness: 400,
            data: [37],
            backgroundColor: "#31010c",
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
            backgroundColor: "#3f020d",
        },
        {
            label: 'B+',
            barThickness: 400,
            data: [9],
            backgroundColor: "#5d0514",
        },
        {
            label: 'A-',
            barThickness: 400,
            data: [6],
            backgroundColor: "#880f25",
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
            backgroundColor: "#c73852",
        },
        {
            label: 'B-',
            barThickness: 400,
            data: [2],
            backgroundColor: "#de516b",
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
    //plugins: [ChartDataLabels],
    options: {
        plugins: {

            legend:{
                display: false,
            },

            title: {
                display: true,
                text: 'Blood Groups',
                //align: 'start',
                padding: {
                    top: 10,
                    bottom: 20,
                },
                color: 'white',
                font: {
                    family: 'Poppins',
                    weight: 300,
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
                color: 'white',
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                color: 'black',
                stacked: true,
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
            }
        },
        maintainAspectRatio: false,
    },
});
