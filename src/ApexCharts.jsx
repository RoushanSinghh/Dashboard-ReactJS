import ReactApexChart from 'react-apexcharts';

const colors = [
  '#00B8D9',
  '#672E3B',
  '#918597',
  '#00A36A',
  '#61C0BF',
  '#C35D63',
  '#284C63',
  '#793447',
];

const ApexChart = () => {
  const options = {
    chart: {
      height: 350,
      width: 200,
      type: 'bar',
      events: {
        click: function () {},
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px',
        },
      },
    },
  };

  const series = [
    {
      data: [2, 10, 11, 8, 6, 7, 13, 30, 4, 8, 3, 5],
    },
  ];

  return (
    <div
      id='chart'
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={350}
      />
    </div>
  );
};

export default ApexChart;
