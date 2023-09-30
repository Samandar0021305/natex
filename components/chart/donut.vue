<template>
  <div class="charts-item">
    <charts :options="chartOptions"></charts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
          backgroundColor: "transparent",
        },
        title: {
          text: "",
          align: "left",
        },

        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 35,
            dataLabels: {
              enabled: true,
              format: "{point.percentage:.1f}%",
              distance: -30,
              style: {
                fontWeight: "bold",
                fontSize: "12px",
              },
            },
            showInLegend: true,
            center: ["50%", "50%"],
            size: "100%",
            innerSize: "60%",
          },
        },
        series: [
          {
            type: "pie",
            name: "Share",
            data: [
              {
                name: "Travel expenses",
                y: 15,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Platform development",
                y: 18,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Marketing*",
                y: 9,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Legal",
                y: 8,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Management Team",
                y: 10,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Initial liquidity",
                y: 20,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Resources",
                y: 10,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
              {
                name: "Resources Team",
                y: 10,
                dataLabels: {
                  style: {
                    fontFamily: "Feature Mono",
                  },
                },
              },
            ],
            colors: [
              "#5BFE84",
              "#46CD6E",
              "#C1FF72",
              "#A280EC",
              "#52E5F6",
              "#42B9EE",
              "#2D8BBA",
            ],
          },
        ],
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "horizontal",
          itemMarginTop: 5,
          itemMarginBottom: 5,
          itemStyle: {
            fontWeight: "normal",
            fontSize: "20px",
            color: "white",
          },
          itemHoverStyle: {
            color: "#5BFE84",
            cursor: "pointer",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.highcharts-legend-item {
  font-family: "Feature Mono" !important;
}
.charts-item {
  background: transparent;
}

@media only screen and (max-width: 575px) {
  .charts-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .highcharts-container {
    width: 100%;
  }

  .highcharts-legend {
    justify-content: center;
    margin-top: 20px;
  }
  

  .highcharts-legend-item {
    padding-right: 20px;
  }

  .highcharts-legend-item:last-child {
    padding-right: 0;
  }
}
</style>
