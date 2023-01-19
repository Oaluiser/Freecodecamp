import * as d3 from "https://cdn.skypack.dev/d3@7.8.1";

const w = 900;
const h = 500;
const p = 40;
const timeFormat = d3.timeFormat("%M:%S");
const doppingColor = "steelblue";
const noDoppingColor = "tomato";
const tooltipContainer = d3.select("body").
append("div").
attr("id", "tooltip").
style("background-color", "lightsteelblue").
style("border-radius", "10px").
style("padding", "10px").
style("position", "absolute").
style("font-size", "0.9em").
style("opacity", 0);

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
  style("stroke", "black").
  on("mouseover", (event, d) => {
    tooltipContainer.style("opacity", 0.9).
    html(`${d.Name}: ${d.Nationality} <br> Year: ${d.Year}, Time: ${d.Time.getMinutes()}:${d.Time.getSeconds() < 10 ? d.Time.getSeconds() + "0" : d.Time.getSeconds()} ${d.Doping === "" ? "" : "<br><br>" + d.Doping}`).
    style("top", event.pageY - 30 + "px").
    style("left", event.pageX + "px").
    attr("data-year", d.Year);
  }).
  on("mouseout", (event, d) => {
    tooltipContainer.style("opacity", 0).
    style("top", "0px").
    style("left", "0px");
  });

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


});