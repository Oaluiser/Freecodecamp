import * as d3 from "https://cdn.skypack.dev/d3@7.8.1";

const w = 900;
const h = 500;
const p = 40;
const timeFormat = d3.timeFormat("%M:%S");
const doppingColor = "steelblue";
const noDoppingColor = "tomato";

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json").then(data => {
  data.forEach(d => {
    let parsedTime = d.Time.split(":");
    d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
  });
  const dataset = data;

  let xScale = d3.scaleLinear().
  domain([d3.min(dataset, (d, i) => d.Year - 1), d3.max(dataset, (d, i) => d.Year + 1)]).
  range([p, w - p]);

  let yScale = d3.scaleTime().
  domain(d3.extent(dataset, d => d.Time)).
  range([p, h - p]);

  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));

  const yAxis = d3.axisLeft(yScale).tickFormat(timeFormat);

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

  svg.selectAll("dot").
  data(dataset).
  enter().
  append("circle").
  attr("class", "dot").
  attr("r", 5).
  attr("cx", (d, i) => xScale(d.Year)).
  attr("cy", (d, i) => yScale(d.Time)).
  attr("data-xvalue", (d, i) => d.Year).
  attr("data-yvalue", (d, i) => d.Time).
  style("fill", d => {
    if (d.Doping === "") {
      return noDoppingColor;
    } else {
      return doppingColor;
    }
  }).
  style("opacity", 0.9).
  style("stroke", "black");

  const legendContainer = svg.append("g").attr("id", "legend");

  legendContainer.append("circle").
  attr("cx", w - p).
  attr("cy", 130).
  attr("r", 10).
  style("fill", noDoppingColor).
  style("stroke", "black");

  legendContainer.append("circle").
  attr("cx", w - p).
  attr("cy", 160).
  attr("r", 10).
  style("fill", doppingColor).
  style("stroke", "black");

  legendContainer.append("text").
  attr("x", 710).
  attr("y", 133).
  text("No doping allegations").
  style("font-size", "15px");

  legendContainer.append("text").
  attr("x", 658).
  attr("y", 164).
  text("Riders with doping allegations").
  style("font-size", "15px");

  const tooltipContainer = svg.select("#tooltipContainer").attr("id", "tooltip");

  tooltipContainer.append("rect").
  attr("x", 100).
  attr("y", 100).
  attr("width", 100).
  attr("height", 100).
  style("fill", doppingColor);


});