import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  absSuicideDataCubeUrl,
  absSuicideReleaseUrl,
  mindframeGuidelinesUrl,
  suicideTrend,
} from "../data/suicideTrend";

type Metric = "rate" | "deaths";

const shownYears = new Set([2016, 2020, 2025]);

function yearTick(value: number) {
  return shownYears.has(Number(value)) ? String(value) : "";
}

export default function SuicideTrendChart() {
  const [metric, setMetric] = useState<Metric>("rate");
  const latest = suicideTrend[suicideTrend.length - 1];
  const metricLabel =
    metric === "rate"
      ? "Age-standardised deaths per 100,000 people"
      : "Deaths registered in Australia";

  return (
    <section className="new-statistics" aria-labelledby="suicide-statistics-title">
      <div className="new-statistics-inner">
        <div className="new-statistics-intro">
          <span className="new-kicker">Australia · ABS data · 2016–2025</span>
          <h2 id="suicide-statistics-title">Suicide deaths and rates</h2>
          <p>
            The latest ABS release reports {latest.deaths.toLocaleString()} deaths registered in
            2025 and an age-standardised rate of {latest.rate.toFixed(1)} per 100,000 people.
            Both 2025 figures are preliminary.
          </p>
          <div className="new-statistics-callout" aria-label="2025 age-standardised rate">
            <strong>{latest.rate.toFixed(1)}</strong>
            <span>
              per 100,000 people
              <br />
              2025 · preliminary
            </span>
          </div>
          <p className="new-statistics-support">
            Statistics can be difficult to read. If you need support, call Lifeline on{" "}
            <a href="tel:131114">13 11 14</a>. In an emergency, call{" "}
            <a href="tel:000">000</a>.
          </p>
        </div>

        <div className="new-statistics-card">
          <div className="new-statistics-card-head">
            <div>
              <span className="new-kicker">A national trend</span>
              <h3>Explore the annual data</h3>
            </div>
            <div className="new-chart-toggle" role="group" aria-label="Choose a chart measure">
              <button
                type="button"
                aria-pressed={metric === "rate"}
                onClick={() => setMetric("rate")}
              >
                Rate
              </button>
              <button
                type="button"
                aria-pressed={metric === "deaths"}
                onClick={() => setMetric("deaths")}
              >
                Deaths
              </button>
            </div>
          </div>

          <p className="new-chart-metric-label" aria-live="polite">
            {metricLabel}
          </p>
          <div className="new-chart-plot" role="img" aria-label={`${metricLabel}, 2016 to 2025`}>
            <ResponsiveContainer width="100%" height="100%">
              {metric === "rate" ? (
                <LineChart
                  data={suicideTrend}
                  margin={{ top: 12, right: 18, bottom: 6, left: 0 }}
                >
                  <CartesianGrid stroke="#e1e7dc" strokeDasharray="3 4" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tickFormatter={yearTick}
                    interval={0}
                    tick={{ fill: "#66746b", fontSize: 11 }}
                    tickLine={false}
                    axisLine={{ stroke: "#d3ddd4" }}
                    tickMargin={10}
                    minTickGap={18}
                  />
                  <YAxis
                    domain={[0, 16]}
                    ticks={[0, 4, 8, 12, 16]}
                    tick={{ fill: "#66746b", fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    width={38}
                  />
                  <Tooltip
                    formatter={(value) =>
                      `${Number(value ?? 0).toFixed(1)} deaths per 100,000`
                    }
                    labelFormatter={(label) => `Registration year ${label}`}
                    contentStyle={{
                      border: "1px solid #d3ddd4",
                      borderRadius: 12,
                      background: "#fffdf7",
                      fontFamily: "Manrope, Arial, sans-serif",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    name="Age-standardised rate"
                    stroke="#164b38"
                    strokeWidth={3}
                    isAnimationActive={false}
                    dot={{ r: 4, fill: "#fbf8f0", stroke: "#164b38", strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: "#b9dd8c", stroke: "#164b38", strokeWidth: 2 }}
                  />
                </LineChart>
              ) : (
                <BarChart
                  data={suicideTrend}
                  margin={{ top: 12, right: 18, bottom: 6, left: 0 }}
                >
                  <CartesianGrid stroke="#e1e7dc" strokeDasharray="3 4" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tickFormatter={yearTick}
                    interval={0}
                    tick={{ fill: "#66746b", fontSize: 11 }}
                    tickLine={false}
                    axisLine={{ stroke: "#d3ddd4" }}
                    tickMargin={10}
                    minTickGap={18}
                  />
                  <YAxis
                    domain={[0, 4000]}
                    ticks={[0, 1000, 2000, 3000, 4000]}
                    tickFormatter={(value) => `${Number(value) / 1000}k`}
                    tick={{ fill: "#66746b", fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    width={38}
                  />
                  <Tooltip
                    formatter={(value) => `${Number(value ?? 0).toLocaleString()} deaths`}
                    labelFormatter={(label) => `Registration year ${label}`}
                    contentStyle={{
                      border: "1px solid #d3ddd4",
                      borderRadius: 12,
                      background: "#fffdf7",
                      fontFamily: "Manrope, Arial, sans-serif",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="deaths"
                    name="Deaths registered"
                    radius={[5, 5, 0, 0]}
                    isAnimationActive={false}
                  >
                    {suicideTrend.map((point) => (
                      <Cell
                        key={point.year}
                        fill={point.status === "Final" ? "#164b38" : "#c08a3e"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {metric === "deaths" && (
            <p className="new-chart-status-key">
              <span><i className="new-status-dot new-status-final" /> Final</span>
              <span><i className="new-status-dot new-status-updated" /> Revised or preliminary</span>
            </p>
          )}
          <p className="new-chart-note">
            Counts are by year of registration. Rates are age-standardised per 100,000 estimated
            resident population using the 2001 Australian standard population. Data through 2022
            are final; 2023 is revised, 2024 is preliminary revised, and 2025 is preliminary and
            may change as coronial cases are finalised. Compare recent years with care.
          </p>

          <details className="new-statistics-table">
            <summary>View annual values and data status</summary>
            <div className="new-statistics-table-scroll">
              <table>
                <caption>ABS Australian suicide deaths and age-standardised rates</caption>
                <thead>
                  <tr>
                    <th scope="col">Registration year</th>
                    <th scope="col">Deaths registered</th>
                    <th scope="col">Rate per 100,000</th>
                    <th scope="col">Data status</th>
                  </tr>
                </thead>
                <tbody>
                  {suicideTrend.map((point) => (
                    <tr key={point.year}>
                      <th scope="row">{point.year}</th>
                      <td>{point.deaths.toLocaleString()}</td>
                      <td>{point.rate.toFixed(1)}</td>
                      <td>{point.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <div className="new-statistics-sources" aria-label="Sources and reporting guidance">
            <a href={absSuicideReleaseUrl} target="_blank" rel="noopener noreferrer">
              ABS 2025 release
            </a>
            <a href={absSuicideDataCubeUrl} target="_blank" rel="noopener noreferrer">
              Download ABS Data Cube 11
            </a>
            <a href={mindframeGuidelinesUrl} target="_blank" rel="noopener noreferrer">
              Mindframe reporting guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
