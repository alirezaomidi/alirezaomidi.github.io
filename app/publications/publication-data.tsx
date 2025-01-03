export interface Publication {
  title: string;
  year: number;
  authors: string;
  journal: string;
  url: string;
  doi?: string;
  figure?: {
    url: string;
    isLocal?: boolean;
  };
}

export const publications: Publication[] = [
  {
    title: "AlphaFold-Multimer accurately captures interactions and dynamics of intrinsically disordered protein regions",
    year: 2024,
    authors: "Alireza Omidi, Mads Harder Møller, Nawar Malhis, Jennifer M. Bui, Jörg Gsponer",
    journal: "Proceedings of the National Academy of Sciences",
    url: "https://doi.org/10.1073/pnas.2406407121",
    doi: "10.1073/pnas.2406407121",
    figure: {
      url: "/photos/publications/pnas.2406407121fig02.jpg",
      isLocal: true
    }
  },
  {
    title: "Multimodal weakly supervised learning to identify disease-specific changes in single-cell atlases",
    year: 2024,
    authors: "Anastasia Litinetskaya, Maiia Shulman, Soroor Hediyeh-zadeh, Amir Ali Moinfar, Fabiola Curion, Artur Szałata, Alireza Omidi, Mohammad Lotfollahi, Fabian J. Theis",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2024.07.29.605625v1",
    doi: "10.1101/2024.07.29.605625",
    figure: {
      url: "https://www.biorxiv.org/content/biorxiv/early/2024/07/29/2024.07.29.605625/F1.large.jpg"
    }
  },
  {
    title: "Learning Cancer Progression Network from Mutation Allele Frequencies",
    year: 2020,
    authors: "Mohammad Sadegh Akhondzadeh, Alireza Omidi, Zeinab Maleki, Kevin Coombes, Amanda E. Toland, Amir Asiaee",
    journal: "ICML Workshop on Computational Biology",
    url: "https://icml-compbio.github.io/2020/papers/WCBICML2020_paper_36.pdf",
    figure: {
      url: "/photos/publications/icml-2020-fig1.png",
      isLocal: true
    }
  }
]; 