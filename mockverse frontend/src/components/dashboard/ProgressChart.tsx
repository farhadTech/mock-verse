import {
  useEffect,
  useRef,
} from "react";

import * as d3 from "d3";

interface ProgressData {
  test: string;
  score: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

const ProgressChart = ({
  data,
}: ProgressChartProps) => {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container =
      containerRef.current;

    // Remove previous SVG
    d3.select(container)
      .selectAll("*")
      .remove();

    const width =
      container.clientWidth;

    const height = 230;

    const margin = {
      top: 20,
      right: 20,
      bottom: 35,
      left: 35,
    };

    const innerWidth =
      width -
      margin.left -
      margin.right;

    const innerHeight =
      height -
      margin.top -
      margin.bottom;

    // =====================================================
    // SVG
    // =====================================================

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr(
        "viewBox",
        `0 0 ${width} ${height}`
      )
      .style("overflow", "visible");

    const chart = svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left},${margin.top})`
      );

    // =====================================================
    // Scales
    // =====================================================

    const x = d3
      .scalePoint<string>()
      .domain(
        data.map((item) => item.test)
      )
      .range([0, innerWidth])
      .padding(0.5);

    const y = d3
      .scaleLinear()
      .domain([5, 8])
      .range([innerHeight, 0]);

    // =====================================================
    // Grid lines
    // =====================================================

    const yTicks = [
      5,
      6,
      7,
      8,
    ];

    chart
      .selectAll(".grid-line")
      .data(yTicks)
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr(
        "y1",
        (d) => y(d)
      )
      .attr(
        "y2",
        (d) => y(d)
      )
      .attr(
        "stroke",
        "#e2e8f0"
      )
      .attr(
        "stroke-width",
        1
      );

    // =====================================================
    // Y Axis
    // =====================================================

    const yAxis =
      d3.axisLeft(y)
        .tickValues(yTicks)
        .tickSize(0)
        .tickPadding(10)
        .tickFormat(
          d3.format(".1f")
        );

    chart
      .append("g")
      .call(yAxis)
      .call((g) =>
        g
          .select(".domain")
          .remove()
      )
      .call((g) =>
        g
          .selectAll("text")
          .attr(
            "fill",
            "#94a3b8"
          )
          .attr(
            "font-size",
            "10px"
          )
      );

    // =====================================================
    // X Axis
    // =====================================================

    const xAxis =
      d3.axisBottom(x)
        .tickSize(0)
        .tickPadding(12);

    chart
      .append("g")
      .attr(
        "transform",
        `translate(0,${innerHeight})`
      )
      .call(xAxis)
      .call((g) =>
        g
          .select(".domain")
          .remove()
      )
      .call((g) =>
        g
          .selectAll("text")
          .attr(
            "fill",
            "#94a3b8"
          )
          .attr(
            "font-size",
            "10px"
          )
      );

    // =====================================================
    // Line generator
    // =====================================================

    const line =
      d3
        .line<ProgressData>()
        .x(
          (d) =>
            x(d.test) ?? 0
        )
        .y(
          (d) => y(d.score)
        )
        .curve(
          d3.curveMonotoneX
        );

    // =====================================================
    // Line
    // =====================================================

    const path = chart
      .append("path")
      .datum(data)
      .attr(
        "fill",
        "none"
      )
      .attr(
        "stroke",
        "#10b981"
      )
      .attr(
        "stroke-width",
        3
      )
      .attr(
        "stroke-linecap",
        "round"
      )
      .attr(
        "stroke-linejoin",
        "round"
      )
      .attr(
        "d",
        line
      );

    // =====================================================
    // Line animation
    // =====================================================

    const totalLength =
      (
        path.node() as SVGPathElement
      ).getTotalLength();

    path
      .attr(
        "stroke-dasharray",
        `${totalLength} ${totalLength}`
      )
      .attr(
        "stroke-dashoffset",
        totalLength
      )
      .transition()
      .duration(1200)
      .ease(d3.easeCubicOut)
      .attr(
        "stroke-dashoffset",
        0
      );

    // =====================================================
    // Points
    // =====================================================

    const points =
      chart
        .selectAll(".point")
        .data(data)
        .enter()
        .append("circle")
        .attr(
          "class",
          "point"
        )
        .attr(
          "cx",
          (d) =>
            x(d.test) ?? 0
        )
        .attr(
          "cy",
          (d) =>
            y(d.score)
        )
        .attr(
          "r",
          0
        )
        .attr(
          "fill",
          "#ffffff"
        )
        .attr(
          "stroke",
          "#10b981"
        )
        .attr(
          "stroke-width",
          3
        );

    points
      .transition()
      .delay(
        (_, index) =>
          500 + index * 100
      )
      .duration(400)
      .attr("r", 5);

    // =====================================================
    // Tooltip
    // =====================================================

    const tooltip =
      d3
        .select(container)
        .append("div")
        .style(
          "position",
          "absolute"
        )
        .style(
          "pointer-events",
          "none"
        )
        .style(
          "opacity",
          "0"
        )
        .style(
          "background",
          "#0f172a"
        )
        .style(
          "color",
          "#ffffff"
        )
        .style(
          "padding",
          "8px 10px"
        )
        .style(
          "border-radius",
          "8px"
        )
        .style(
          "font-size",
          "11px"
        )
        .style(
          "font-weight",
          "600"
        )
        .style(
          "box-shadow",
          "0 10px 25px rgba(15,23,42,0.15)"
        );

    points
      .on(
        "mouseenter",
        function (
          event,
          d
        ) {
          d3.select(this)
            .transition()
            .duration(150)
            .attr("r", 7);

          tooltip
            .html(
              `${d.test}: Band ${d.score.toFixed(1)}`
            )
            .style(
              "opacity",
              "1"
            );

          const rect =
            container.getBoundingClientRect();

          tooltip
            .style(
              "left",
              `${event.clientX - rect.left + 10}px`
            )
            .style(
              "top",
              `${event.clientY - rect.top - 40}px`
            );
        }
      )
      .on(
        "mousemove",
        function (event) {
          const rect =
            container.getBoundingClientRect();

          tooltip
            .style(
              "left",
              `${event.clientX - rect.left + 10}px`
            )
            .style(
              "top",
              `${event.clientY - rect.top - 40}px`
            );
        }
      )
      .on(
        "mouseleave",
        function () {
          d3.select(this)
            .transition()
            .duration(150)
            .attr("r", 5);

          tooltip.style(
            "opacity",
            "0"
          );
        }
      );

    // =====================================================
    // Responsive resize
    // =====================================================

    const resizeObserver =
      new ResizeObserver(() => {
        // Re-run D3 effect
        // by dispatching a resize event.
        window.dispatchEvent(
          new Event("resize")
        );
      });

    resizeObserver.observe(
      container
    );

    return () => {
      resizeObserver.disconnect();

      d3.select(container)
        .selectAll("*")
        .remove();
    };
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[230px]
        w-full
      "
    />
  );
};

export default ProgressChart;