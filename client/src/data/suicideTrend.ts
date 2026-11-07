export type RevisionStatus =
  | "Final"
  | "Revised"
  | "Preliminary revised"
  | "Preliminary";

export type SuicideTrendPoint = {
  year: number;
  deaths: number;
  rate: number;
  status: RevisionStatus;
};

export const suicideTrend: SuicideTrendPoint[] = [
  { year: 2016, deaths: 2939, rate: 12.0, status: "Final" },
  { year: 2017, deaths: 3292, rate: 13.2, status: "Final" },
  { year: 2018, deaths: 3205, rate: 12.7, status: "Final" },
  { year: 2019, deaths: 3377, rate: 13.2, status: "Final" },
  { year: 2020, deaths: 3184, rate: 12.2, status: "Final" },
  { year: 2021, deaths: 3220, rate: 12.3, status: "Final" },
  { year: 2022, deaths: 3342, rate: 12.6, status: "Final" },
  { year: 2023, deaths: 3311, rate: 12.2, status: "Revised" },
  { year: 2024, deaths: 3326, rate: 11.9, status: "Preliminary revised" },
  { year: 2025, deaths: 3283, rate: 11.6, status: "Preliminary" },
];

export const absSuicideReleaseUrl =
  "https://www.abs.gov.au/statistics/health/causes-death/intentional-self-harm-suicide-deaths/2025";

export const absSuicideDataCubeUrl =
  "https://www.abs.gov.au/statistics/health/causes-death/causes-death-australia/2025/2025_11%20Intentional%20self-harm%20%28suicide%29%28Australia%29.xlsx";

export const mindframeGuidelinesUrl = "https://www.mindframe.org.au/guidelines";
