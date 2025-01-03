export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Protein-Protein Interaction Prediction",
    year: 2023,
    description: "Working on the prediction of protein-protein interactions (PPI) involving cancer-driving genes using advanced AI models.",
    url: "https://github.com/alirezaomidi",
  },
  {
    title: "Voltage-gated Calcium Channel Binders",
    year: 2022,
    description: "Designing high-affinity binders for voltage-gated calcium channels using protein diffusion models (RFdiffusion) and a pipeline of AlphaFold-Multimer and ProteinMPNN.",
    url: "https://github.com/alirezaomidi",
  },
  {
    title: "Negar ASR System",
    year: 2021,
    description: "Developed Negar, a novel Deep Neural Network based Automatic Speech Recognition service to recognize Persian speech at Cafe Bazaar AI.",
    url: "https://github.com/alirezaomidi",
  },
  {
    title: "Chatterbox TTS",
    year: 2020,
    description: "Developed Chatterbox, a Deep Learning based Text-to-Speech service for converting Persian text into natural-sounding speech.",
    url: "https://github.com/alirezaomidi",
  },
];
