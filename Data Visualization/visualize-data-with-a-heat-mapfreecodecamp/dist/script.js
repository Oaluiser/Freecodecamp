import * as d3 from "https://cdn.skypack.dev/d3@7.8.2";

const w = 1200;
const h = 450;
const p = 60;

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json").then(data => {
  const baseTemperature = data.baseTemperature;
  const dataset = data.monthlyVariance;

  const colorScale = d3.scaleQuantize().
  domain([d3.min(dataset, d => baseTemperature + d.variance), d3.max(dataset, d => baseTemperature + d.variance)]).
  range(['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']);

  const xScale = d3.scaleLinear().
  domain([d3.min(dataset, d => d.year), d3.max(dataset, d => d.year)]).
  range([p, w - p]);

  const yScale = d3.scaleLinear().
  domain([d3.min(dataset, d => d.month), d3.max(dataset, d => d.month)]).
  range([p, h - p - 16.5]);


  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')).tickValues([1760, 1775, 1790, 1805, 1820, 1835, 1850, 1865, 1880, 1895, 1910, 1925, 1940, 1955, 1970, 1985, 2000, 2015]);

  const yAxis = d3.axisLeft(yScale).tickFormat((d, i) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i]);


  const svg = d3.select("#container").
  append("svg").
  attr("width", w).
  attr("height", h);

  svg.append("g").
  attr("transform", `translate(0, ${h - p})`).
  attr("id", "x-axis").
  call(xAxis);

  svg.append("g").
  attr("transform", `translate(${p}, 0)`).
  attr("id", "y-axis").
  call(yAxis);

  svg.selectAll("rect").
  data(dataset).
  enter().
  append("rect").
  attr("class", "cell").
  attr("data-month", (d, i) => dataset[i].month - 1).
  attr("data-year", (d, i) => dataset[i].year).
  attr("data-temp", (d, i) => baseTemperature + dataset[i].variance).
  attr("x", (d, i) => xScale(dataset[i].year)).
  attr("y", (d, i) => yScale(dataset[i].month) - 12.5).
  attr("width", 4.8).
  attr("height", 29).
  attr("fill", (d, i) => colorScale(baseTemperature + dataset[i].variance)).
  on("mouseover", (event, d) => {
    tooltipContainer.style("opacity", 0.8).
    html(`${d.year} - ${getMonthName(d.month)} <br> ${d3.format('.1f')(baseTemperature + d.variance)}℃ <br> ${d3.format('.1f')(d.variance)}℃`).
    style("top", event.pageY - 30 + "px").
    style("left", event.pageX + "px").
    style("text-align", "center").
    attr("data-year", d.year);
    console.log(d.year);
  }).
  on("mousemove", (event, d) => {
    tooltipContainer.style("opacity", 0.8).
    style("top", event.pageY - 75 + "px").
    style("left", event.pageX + "px");
  }).
  on("mouseout", (event, d) => {
    tooltipContainer.style("opacity", 0);
  });

  const legendData = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const temperatureScale = d3.scaleLinear().
  domain([d3.min(dataset, d => d.variance + baseTemperature), d3.max(dataset, d => d.variance + baseTemperature)]).
  range([85, p + 350]);

  const temperatureAxis = d3.axisBottom(temperatureScale);


  const legend = d3.select("#container").
  append("svg").
  attr("id", "legend").
  style("width", 1250).
  style("height", 50).
  style("background-color", "white");

  legend.append("g").
  attr("transform", `translate(0, 30)`).
  attr("id", "temperature-axis").
  call(temperatureAxis);

  legend.selectAll("rect").
  data(legendData).
  enter().
  append("rect").
  attr("x", (d, i) => 94 + 26.6 * i).
  attr("y", 0).
  attr("width", 26.6).
  attr("height", 30).
  attr("fill", (d, i) => colorScale(legendData[i]));

  const tooltipContainer = d3.select("body").
  append("div").
  attr("id", "tooltip").
  style("background-color", "black").
  style("border-radius", "10px").
  style("padding", "10px").
  style("position", "absolute").
  style("font-size", "0.9em").
  style("color", "white").
  style("opacity", 0);

});