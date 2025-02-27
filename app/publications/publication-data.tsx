export interface Publication {
  title: string;
  year: number;
  authors: string;
  journal: string;
  url: string;
  doi?: string;
  abstract?: string;
  codebase?: {
    url: string;
    platform: "github" | "gitlab" | "bitbucket" | "other";
  };
  figure?: {
    url: string;
    isLocal?: boolean;
  };
  xPost?: string;  // Full X (Twitter) post URL
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Integration and querying of multimodal single-cell data with PoE-VAE",
    year: 2025,
    authors: "Anastasia Litinetskaya, Maiia Schulman, Fabiola Curion, Artur Szalata, Alireza Omidi, Mohammad Lotfollahi, Fabian Theis",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2022.03.16.484643v2",
    doi: "10.1101/2022.03.16.484643",
    abstract: "Constructing joint representations from multimodal single-cell datasets is crucial for understanding cellular heterogeneity and function. Traditional methods, such as factor analysis and kNN-based approaches, face computational limitations with scalability across large datasets and multiple modalities. In this work, we demonstrate the product-of-experts VAE-based model, which offers a flexible, scalable solution for integrating multimodal data, allowing for the seamless mapping of both unimodal and multimodal queries onto a reference atlas. We evaluate how different strategies for combining modalities in the VAE framework impact query-to-reference mapping across diverse datasets, including CITE-seq and spatial metabolomics. Our benchmarks assess batch effect correction, biological signal preservation, and imputation of missing modalities. We showcase our approach in a mosaic setting, integrating CITE-seq and multiome data to accurately map unimodal and multimodal queries into the joint latent space. We extend this to spatial data by integrating gene expression and metabolomics from paired Visium and MALDI-MSI slides, achieving a high correlation in metabolite predictions from spatial gene expression. Our results demonstrate that this VAE-based framework is scalable, robust, and easily applicable across multiple modalities, providing a powerful tool for data imputation, querying, and biological discovery.",
    figure: {
      url: "https://www.biorxiv.org/content/biorxiv/early/2025/02/15/2022.03.16.484643/F2.large.jpg",
    },
    xPost: "https://x.com/mo_lotfollahi/status/1596202841735139328",
    selected: false,
    codebase: {
      url: "https://github.com/theislab/multigrate",
      platform: "github"
    }
  },
  {
    title: "AlphaFold-Multimer accurately captures interactions and dynamics of intrinsically disordered protein regions",
    year: 2024,
    authors: "Alireza Omidi, Mads Harder Møller, Nawar Malhis, Jennifer M. Bui, Jörg Gsponer",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    url: "https://doi.org/10.1073/pnas.2406407121",
    doi: "10.1073/pnas.2406407121",
    abstract: "Interactions mediated by intrinsically disordered protein regions (IDRs) pose formidable challenges in structural characterization. IDRs are highly versatile, capable of adopting diverse structures and engagement modes. Motivated by recent strides in protein structure prediction, we embarked on exploring the extent to which AlphaFold-Multimer can faithfully reproduce the intricacies of interactions involving IDRs. To this end, we gathered multiple datasets covering the versatile spectrum of IDR binding modes and used them to probe AlphaFold-Multimer's prediction of IDR interactions and their dynamics. Our analyses revealed that AlphaFold-Multimer is not only capable of predicting various types of bound IDR structures with high success rate, but that distinguishing true interactions from decoys, and unreliable predictions from accurate ones is achievable by appropriate use of AlphaFold-Multimer's intrinsic scores. We found that the quality of predictions drops for more heterogeneous, fuzzy interaction types, most likely due to lower interface hydrophobicity and higher coil content. Notably though, certain AlphaFold-Multimer scores, such as the Predicted Aligned Error and residue-ipTM, are highly correlated with structural heterogeneity of the bound IDR, enabling clear distinctions between predictions of fuzzy and more homogeneous binding modes. Finally, our benchmarking revealed that predictions of IDR interactions can also be successful when using full-length proteins, but not as accurate as with cognate IDRs. To facilitate identification of the cognate IDR of a given partner, we established \"minD,\" which pinpoints potential interaction sites in a full-length protein. Our study demonstrates that AlphaFold-Multimer can correctly identify interacting IDRs and predict their mode of engagement with a given partner.",
    figure: {
      url: "/photos/publications/pnas.2406407121fig02.jpg",
      isLocal: true
    },
    xPost: "https://x.com/BiologyAIDaily/status/1849646408816844942",
    selected: true,
    codebase: {
      url: "https://github.com/alirezaomidi/AFMinD",
      platform: "github"
    }
  },
  {
    title: "Multimodal weakly supervised learning to identify disease-specific changes in single-cell atlases",
    year: 2024,
    authors: "Anastasia Litinetskaya, Maiia Shulman, Soroor Hediyeh-zadeh, Amir Ali Moinfar, Fabiola Curion, Artur Szałata, Alireza Omidi, Mohammad Lotfollahi, Fabian J. Theis",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2024.07.29.605625v1",
    doi: "10.1101/2024.07.29.605625",
    abstract: "Multimodal analysis of single-cell samples from healthy and diseased tissues at various stages provides a comprehensive view that identifies disease-specific cells, their molecular features and aids in patient stratification. Here, we present MultiMIL, a novel weakly-supervised multimodal model designed to construct multimodal single-cell references and prioritize phenotype-specific cells via patient classification. MultiMIL effectively integrates single-cell modalities, even when they only partially overlap, providing robust representations for downstream analyses such as phenotypic prediction and cell prioritization. Using a multiple-instance learning approach, MultiMIL aggregates cell-level measurements into sample-level representations and identifies disease-specific cell states through attention-based scoring. We demonstrate that MultiMIL accurately identifies disease-specific cell states in blood and lung samples, identifying novel disease-associated genes and achieving superior patient classification accuracy compared to existing methods. We anticipate MultiMIL will become an essential tool for querying single-cell multiomic atlases, enhancing our understanding of disease mechanisms and informing targeted treatments.",
    figure: {
      url: "https://www.biorxiv.org/content/biorxiv/early/2024/07/29/2024.07.29.605625/F1.large.jpg"
    },
    xPost: "https://x.com/mo_lotfollahi/status/1818341687481319804",
    selected: true,
    codebase: {
      url: "https://github.com/theislab/MultiMIL",
      platform: "github"
    }
  },
  {
    title: "Learning Cancer Progression Network from Mutation Allele Frequencies",
    year: 2020,
    authors: "Mohammad Sadegh Akhondzadeh, Alireza Omidi, Zeinab Maleki, Kevin Coombes, Amanda E. Toland, Amir Asiaee",
    journal: "ICML Workshop on Computational Biology",
    url: "https://icml-compbio.github.io/2020/papers/WCBICML2020_paper_36.pdf",
    abstract: "We model the partial order of accumulation of mutations during tumorigenesis by linear structural equations. In this framework, the cancer progression network is modeled as a weighted directed acyclic graph (DAG), which minimizes a suitable continuous loss function. The goal is to learn the DAG from cross-sectional mutation allele frequency data. As a case study, we infer the order of mutations in melanoma. The recovered network of melanoma matches the known biological facts about the subtypes and progression of melanoma while discovers mutual exclusivity patterns among mutations by negative edges.",
    figure: {
      url: "/photos/publications/icml-2020-fig1.png",
      isLocal: true
    },
    codebase: {
      url: "https://github.com/alirezaomidi/cancerdag",
      platform: "github"
    }
  },
]; 