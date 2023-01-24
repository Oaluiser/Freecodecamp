import * as d3 from "https://cdn.skypack.dev/d3@7.8.2";

const w = 1000;
const h = 600;

const svg = d3.select("#container")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json").then(data => {
  
  const hierarchy = d3.hierarchy(data, node => node.children)
                      .sum(node => node.value)
                      .sort((node1, node2) => node2.value - node1.value);
  
  const treeMap = d3.treemap().size([w, h]).paddingInner(1);
  
  treeMap(hierarchy);
  
  const tiles = hierarchy.leaves();
  
  const color = d3.scaleOrdinal().range(
    [
      '#1f77b4',
      '#aec7e8',
      '#ff7f0e',
      '#ffbb78',
      '#2ca02c',
      '#98df8a',
      '#d62728',
      '#ff9896',
      '#9467bd',
      '#c5b0d5',
      '#8c564b',
      '#c49c94',
      '#e377c2',
      '#f7b6d2',
      '#7f7f7f',
      '#c7c7c7',
      '#bcbd22',
      '#dbdb8d',
      '#17becf',
      '#9edae5'
    ]
  )
  
  const legendContainer = d3.select("#container")
                            .append("svg")
                            .attr("width", w)
                            .attr("height", 30)
                            .attr("id", "legend");
  
  let categories = tiles.map(d => d.data.category);
  categories = categories.filter((item, pos, self) => self.indexOf(item) === pos)
  
  const legendGroups = legendContainer.selectAll("g")
                                      .data(categories)
                                      .enter()
                                      .append("g");
              
  legendGroups.append("text")
              .text((d) => d)
              .attr("x", (d, i) => 17 + i * 55.7)
              .attr("y", 22.5)
              .style("font-size", "15px");
  
  legendGroups.append("rect")
              .attr("x", (d, i) => i * 55.7)
              .attr("y", 10)
              .attr("width", 15)
              .attr("height", 15)
              .attr("fill", (d) => color(d))
              .attr("class", "legend-item");
  
  
  const rectContainer = svg.selectAll("g")
                           .data(tiles)
                           .enter()
                           .append("g");
  
  rectContainer.append("rect")
               .attr("class", "tile")
               .attr("x", (d) => d.x0)
               .attr("y", (d) => d.y0)
               .attr("width", (d) => d.x1 - d.x0)
               .attr("height", (d) => d.y1 - d.y0)
               .attr("fill", (d) => color(d.data.category))
               .attr("data-name", (d) => d.data.name)
               .attr("data-category", (d) => d.data.category)
               .attr("data-value", (d) => d.data.value)
               .on("mouseover", (event, d) => {
                 tooltipContainer.style("opacity", 0.8)
                                 .html(`Name: ${d.data.name} <br> Category: ${d.data.category} <br> Value: ${d.data.value}`)
                                 .style("top", event.pageY - 40 + "px")
                                 .style("left", event.pageX + "px")
                                 .style("text-align", "center")
                                 .attr("data-value", d.data.value)
               })
               .on("mousemove", (event, d) => { 
                 tooltipContainer.style("opacity", 0.8)
                                 .style("top", event.pageY - 40 + "px")
                                 .style("left", event.pageX + 15 + "px"); 
               })                      
               .on("mouseout", (event, d) => {
                  tooltipContainer.style("opacity", 0)
               });
  
  rectContainer.append("text")
               .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')')
               .selectAll("tspan")
               .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
               .enter()
               .append("tspan")
               .attr("x", 3)
               .attr("y", (d, i) => 10 + i * 9)
               .style("font-size", "10px")
               .text((d) => d)
  
  const tooltipContainer = d3.select("body")
                                   .append("div")
                                   .attr("id", "tooltip")
                                   .style("background-color", "black")
                                   .style("border-radius", "10px")
                                   .style("padding", "10px")
                                   .style("position", "absolute")
                                   .style("font-size", "0.9em")
                                   .style("color", "white")
                                   .style("opacity", 0);
});