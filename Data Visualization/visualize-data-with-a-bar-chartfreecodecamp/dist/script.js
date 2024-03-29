import * as d3 from "https://cdn.skypack.dev/d3@7.8.1";

const w = 800;
const h = 400;
const padding = 50;

let tooltip = d3.select("#container").
append("div").
attr("id", "tooltip").
style("opacity", 0).
style("height", "auto").
style("width", "auto");

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(data => {
  const dataset = data.data;

  const xScale = d3.scaleTime().
  domain([d3.min(dataset, d => Date.parse(d[0])), d3.max(dataset, d => Date.parse(d[0]))]).
  range([padding, w - padding]);

  const yScale = d3.scaleLinear().
  domain([0, d3.max(dataset, d => d[1])]).
  range([h - padding, 0]);

  const xAxis = d3.axisBottom(xScale);

  const yAxis = d3.axisLeft(yScale);

  const svg = d3.select("#container").
  append("svg").
  attr("width", w).
  attr("height", h);

  svg.append("g").
  attr("transform", `translate(0, ${h - padding})`).
  attr("id", "x-axis").
  call(xAxis);

  svg.append("g").
  attr("transform", `translate(${padding}, 0)`).
  attr("id", "y-axis").
  call(yAxis);

  d3.select("svg").
  selectAll("rect").
  data(dataset).
  enter().
  append("rect").
  attr("class", "bar").
  attr("data-date", (d, i) => dataset[i][0]).
  attr("data-gdp", (d, i) => dataset[i][1]).
  attr("x", (d, i) => xScale(Date.parse(data.data[i][0]))).
  attr("y", (d, i) => yScale(data.data[i][1])).
  attr("width", w / dataset.length).
  attr("height", (d, i) => h - padding - yScale(data.data[i][1])).
  on("mouseover", (e, d, i) => {
    tooltip.transition().
    style("opacity", "1");

    tooltip.text(d[0]).
    attr("data-date", d[0]);
  }).
  on("mouseout", (d, i) => {
    tooltip.transition().
    style("opacity", "0");
  });
});