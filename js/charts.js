"use strict";

// Number of "yeahs" per year Chart
new Chart(document.getElementById('yeahsPerYearChart'), {
  type: 'bar',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
          '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
          '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      type: 'bar',
      axis: 'y',
      label: 'Number of yeahs',
      backgroundColor: 'rgba(255, 188, 9, .6)',
      borderColor: '#242424',
      borderWidth: 1,
      data: [2, 0, 14, 0, 25, 39, 6, 29, 114, 101, 20, 36, 67, 25, 25, 8, 10, 41, 26, 5, 0, 17, 1, 0, 12, 0, 1, 9, 14, 0, 0]
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per year'
    },
    tooltips: {
      mode: 'label',
      intersect: false,
    },
    hover: {
      mode: 'single'
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs'
        }
      },
      y: {
        beginAtZero: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        },
        min: 0,
        max: 120,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
});

// Number of "yeahs" per decade Chart
new Chart(document.getElementById('yeahsPerDecadeChart'), {
  type: 'bar',
  data: {
    labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019', '2020 - Present'],
    datasets: [{
      type: 'bar',
      label: 'Number of yeahs',
      backgroundColor: 'rgba(255, 188, 9, .6)',
      borderColor: '#242424',
      borderWidth: 1,
      data: [330, 263, 54, 0]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per decade'
    },
    tooltips: {
      mode: 'label',
      intersect: false,
    },
    hover: {
      mode: 'single'
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Decade period year'
        }
      },
      y: {
        beginAtZero: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs'
        },
        min: 0,
        max: 340,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});

// Number of "yeahs" per label company
new Chart(document.getElementById('yeahsPerLabelCompanyChart'), {
  data: {
    labels: ['Company Labels'],
    datasets: [{
      type: 'bar',
      label: 'Captain Records (1990)',
      backgroundColor: '#ffbc09',
      borderColor: '#242424',
      borderWidth: 2,
      data: [2]
    },
    {
      type: 'bar',
      label: 'Pony Canyon (1991-1993)',
      backgroundColor: '#e70023',
      borderColor: '#e70023',
      borderWidth: 2,
      data: [14]
    },
    {
      type: 'bar',
      label: 'King Records (1994-2006)',
      backgroundColor: '#009944',
      borderColor: '#009944',
      borderWidth: 2,
      data: [505]
    },
    {
      type: 'bar',
      label: 'Avex Trax (2006-2016)',
      backgroundColor: '#004ca3',
      borderColor: '#004ca3',
      borderWidth: 2,
      data: [90]
    },
    {
      type: 'bar',
      label: 'Delicious Label (2016-Present)',
      backgroundColor: '#080808',
      borderColor: '#080808',
      borderWidth: 2,
      data: [36]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per label company'
    },
    tooltips: {
      mode: 'label',
      intersect: false,
    },
    hover: {
      mode: 'single'
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Company Label'
        }
      },
      y: {
        beginAtZero: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs per label company'
        },
        min: 0,
        max: 525,
        ticks: {
          stepSize: 25
        }
      }
    }
  }
});
