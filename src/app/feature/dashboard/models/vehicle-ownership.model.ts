export interface VehicleOwnershipData {
  "ID Vehicles Available": number;
  "Vehicles Available": string;
  "ID Year": number;
  "Year": string;
  "Commute Means by Gender": number;
  "Geography": string;
  "ID Geography": string;
  "Slug Geography": string;
}

export interface VehicleOwnershipSource {
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

export interface VehicleOwnershipResponse {
  data: VehicleOwnershipData[];
  source: VehicleOwnershipSource[];
}
