export interface PopulationData {
  "ID State": string;
  "State": string;
  "ID Year": number;
  "Year": string;
  "Population": number;
  "Slug State": string;
}

export interface PopulationSource {
  measures: string[];
  annotations: {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
  };
  name: string;
  substitutions: any[];
}

export interface PopulationResponse {
  data: PopulationData[];
  source: PopulationSource[];
}
