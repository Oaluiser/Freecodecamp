import * as d3 from "https://cdn.skypack.dev/d3@7.8.2";

const w = 960;
const h = 600;
const p = 50;
const countyURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
const dataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
let countyData;
let educationData;

const svg = d3.select("#container").
append("svg").
attr("width", w).
attr("height", h);

d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json").
then(data => {
  countyData = topojson.feature(data, data.objects.counties).features;
  d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json").
  then(data => {
    educationData = data;

    const color = d3.scaleThreshold().
    domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8)).
    range(d3.schemeGreens[9]);

    const legendContainer = svg.append("g").
    attr("class", "key").
    attr("id", "legend").
    attr("transform", "translate(0,50)");

    const legendScale = d3.scaleLinear().
    domain([2.6, 75.1]).
    range([600, 840]);

    const legendAxis = d3.axisBottom(legendScale).tickSize(13).tickFormat(function (x) {
      return Math.round(x) + "%";
    }).tickValues(color.domain());

    legendContainer.selectAll("rect").
    data(d3.range(2.6, 75.1, (75.1 - 2.6) / 7)).
    enter().
    append("rect").
    attr("width", "30").
    attr("height", "10").
    attr("x", (d, i) => 600 + i * 30).
    attr("fill", d => color(d));

    legendContainer.append("g").
    call(legendAxis).
    select(".domain").
    remove();

    svg.selectAll("path").
    data(countyData).
    enter().
    append("path").
    attr("d", d3.geoPath()).
    attr("class", "county").
    attr("fill", d => {
      let result = educationData.filter(obj => obj.fips === d.id);
      if (result[0]) {
        return color(result[0].bachelorsOrHigher);
      }
    }).
    attr("data-fips", d => d.id).
    attr("data-education", d => {
      let result = educationData.filter(obj => obj.fips === d.id);
      if (result[0]) {
        return result[0].bachelorsOrHigher;
      }
    }).
    on("mouseover", (event, d) => {
      let areaName;
      let state;
      let bachelorsOrHigher;
      let result = educationData.filter(obj => obj.fips === d.id);
      if (result[0]) {
        areaName = result[0].area_name;
        state = result[0].state;
        bachelorsOrHigher = result[0].bachelorsOrHigher;
      }

      tooltipContainer.style("opacity", 0.8).
      html(`${areaName}, ${state}: ${bachelorsOrHigher}%`).
      style("top", event.pageY - 40 + "px").
      style("left", event.pageX + "px").
      style("text-align", "center").
      attr("data-education", bachelorsOrHigher);
    }).
    on("mousemove", (event, d) => {
      tooltipContainer.style("opacity", 0.8).
      style("top", event.pageY - 40 + "px").
      style("left", event.pageX + "px");
    }).
    on("mouseout", (event, d) => {
      tooltipContainer.style("opacity", 0);
    });

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
});