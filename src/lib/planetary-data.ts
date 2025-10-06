import { OrbitalData } from './types';

// This is the new, specific type for planetary orbital data as suggested.
// It only contains the fields we are actually providing.
export interface PlanetaryOrbitalData {
    semi_major_axis: string;
    eccentricity: string;
    inclination: string;
    ascending_node_longitude: string;
    perihelion_argument: string;
};

export interface PlanetData {
    name: string;
    // We now use our new, correct type.
    orbital_data: PlanetaryOrbitalData;
    visualization: {
        color: string;
        size: number; // Relative size for visualization
    };
}

// Data sourced from NASA's JPL Solar System Dynamics
// https://ssd.jpl.nasa.gov/planets/approx_pos.html
// Values are for the J2000.0 epoch.
export const planets: PlanetData[] = [
    {
        name: "Mercury",
        orbital_data: {
            semi_major_axis: "0.387098",
            eccentricity: "0.205630",
            inclination: "7.00487",
            ascending_node_longitude: "48.33167",
            perihelion_argument: "29.12420",
        },
        visualization: { color: "#A9A9A9", size: 0.025 }
    },
    {
        name: "Venus",
        orbital_data: {
            semi_major_axis: "0.723332",
            eccentricity: "0.006772",
            inclination: "3.39458",
            ascending_node_longitude: "76.68069",
            perihelion_argument: "54.85229",
        },
        visualization: { color: "#FFA500", size: 0.04 }
    },
    {
        name: "Earth",
        orbital_data: {
            semi_major_axis: "1.000000",
            eccentricity: "0.0167086",
            inclination: "0.00005",
            ascending_node_longitude: "-11.26064",
            perihelion_argument: "114.20783",
        },
        visualization: { color: "#4B92DB", size: 0.042 }
    },
    {
        name: "Mars",
        orbital_data: {
            semi_major_axis: "1.523679",
            eccentricity: "0.09340062",
            inclination: "1.849726",
            ascending_node_longitude: "49.558093",
            perihelion_argument: "286.502390",
        },
        visualization: { color: "#FF4500", size: 0.03 }
    },
    {
        name: "Jupiter",
        orbital_data: {
            semi_major_axis: "5.2044",
            eccentricity: "0.0489",
            inclination: "1.303",
            ascending_node_longitude: "100.46",
            perihelion_argument: "273.87",
        },
        visualization: { color: "#D2B48C", size: 0.1 }
    },
    {
        name: "Saturn",
        orbital_data: {
            semi_major_axis: "9.5826",
            eccentricity: "0.0565",
            inclination: "2.485",
            ascending_node_longitude: "113.66",
            perihelion_argument: "339.39",
        },
        visualization: { color: "#F0E68C", size: 0.09 }
    },
    {
        name: "Uranus",
        orbital_data: {
            semi_major_axis: "19.2184",
            eccentricity: "0.0457",
            inclination: "0.772",
            ascending_node_longitude: "74.00",
            perihelion_argument: "96.99",
        },
        visualization: { color: "#ADD8E6", size: 0.07 }
    },
    {
        name: "Neptune",
        orbital_data: {
            semi_major_axis: "30.11",
            eccentricity: "0.0113",
            inclination: "1.770",
            ascending_node_longitude: "131.78",
            perihelion_argument: "276.34",
        },
        visualization: { color: "#4169E1", size: 0.065 }
    }
];

export function adaptPlanetDataToOrbitalData(planetOrbitalData: PlanetaryOrbitalData): OrbitalData {
    return {
        ...planetOrbitalData,
        orbit_id: '0',
        orbit_determination_date: '',
        first_observation_date: '',
        last_observation_date: '',
        data_arc_in_days: 0,
        observations_used: 0,
        orbit_uncertainty: '0',
        minimum_orbit_intersection: '0',
        jupiter_tisserand_invariant: '',
        epoch_osculation: '',
        orbital_period: '0',
        perihelion_distance: '0',
        aphelion_distance: '0',
        perihelion_time: '0',
        mean_anomaly: '0',
        mean_motion: '0',
        equinox: '',
        orbit_class: { orbit_class_type: 'PLA', orbit_class_description: 'Planet', orbit_class_range: '' },
    };
}
