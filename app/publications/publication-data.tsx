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
  linkedinPost?: string;  // Full LinkedIn post URL
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Challenging AlphaFold in predicting proteins with large-scale allosteric transitions",
    year: 2025,
    authors: "Brooks H. Perkins-Jechow, Juan Pablo Iglesias Ahualli, Huyen Thuc Nhu, Alireza Omidi, Chunchao Li, Jorge A. Holguin-Cruz, Daeahn Cho, Dokyun Na, Nawar Malhis, Jennifer M. Bui, Jörg Gsponer",
    journal: "Nature Communications Chemistry",
    url: "https://www.nature.com/articles/s42004-025-01763-0",
    doi: "10.1038/s42004-025-01763-0",
    abstract: "Many proteins function by toggling between distinct conformations, yet most structure predictors have been trained on data that do not capture this conformational diversity. Here, we benchmarked AlphaFold2, AlphaFold3, and recent variants on autoinhibited proteins, a class of allosterically regulated, often multi-domain proteins that exist in equilibrium between active and autoinhibited states. Our analyses show that AlphaFold2 fails to reproduce the experimental structures of many autoinhibited proteins, which is reflected in reduced confidence scores. This contrasts sharply with its high-accuracy, high-confidence predictions of non-autoinhibited multi-domain proteins. When tested for its ability to capture conformational diversity, we found that AlphaFold2 performs better when combined with uniform subsampling of sequence alignments rather than local subsampling. BioEmu and AlphaFold3 improve upon these results, yet still struggle to accurately reproduce details of experimental structures. Together, our study underscores the persistent challenges of predicting protein structures shaped by complex energy landscapes.",
    figure: {
      url: "/photos/publications/challenging-alphafold-2025-fig1.png",
      isLocal: true
    },
    linkedinPost: "https://www.linkedin.com/posts/jennifer-m-bui-phd-73065116a_challenging-alphafold-in-predicting-proteins-activity-7399595388925575168-KOhO",
    selected: true
  },
  {
    title: "Integration and Querying of Multimodal Single-Cell Data with PoE-VAE",
    year: 2025,
    authors: "Anastasia Litinetskaya, Maiia Schulman, Fabiola Curion, Artur Szalata, Alireza Omidi, Mohammad Lotfollahi, Fabian Theis",
    journal: "Research in Computational Molecular Biology (RECOMB)",
    url: "https://doi.org/10.1007/978-3-031-90252-9_36",
    doi: "10.1007/978-3-031-90252-9_36",
    abstract: "Constructing joint representations from multimodal single-cell datasets is crucial for understanding cellular heterogeneity and function. In this work, we demonstrate the product-of-experts VAE-based model, which offers a flexible, scalable solution for integrating multimodal data, allowing for the seamless mapping of both unimodal and multimodal queries onto a reference atlas. We evaluate how different strategies for combining modalities in the VAE framework impact query-to-reference mapping across diverse datasets, including CITE-seq and spatial metabolomics. We showcase our approach in a mosaic setting, integrating CITE-seq and multiome data to accurately map unimodal and multimodal queries into the joint latent space. We extend this to spatial data by integrating gene expression and metabolomics from paired Visium and MALDI-MSI slides, achieving a high correlation in metabolite predictions from spatial gene expression. Our results demonstrate that this VAE-based framework is scalable, robust, and easily applicable across multiple modalities, providing a powerful tool for data imputation, querying, and biological discovery.",
    figure: {
      url: "/photos/publications/poe-vae-recomb-2025-fig2.jpg",
      isLocal: true
    },
    xPost: "https://x.com/mo_lotfollahi/status/1596202841735139328",
    selected: true,
    codebase: {
      url: "https://github.com/theislab/multigrate",
      platform: "github"
    }
  },
  {
    title: "Insulin-dependent and -independent dynamics of insulin receptor trafficking in muscle cells",
    year: 2025,
    authors: "Haoning Howard Cen, Aurora J. Mattison, Alireza Omidi, Jason Rogalski, Libin Abraham, Guang Gao, Michael R. Gold, Leonard J. Foster, Jörg Gsponer, James D. Johnson",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2021.06.29.450241v2",
    doi: "10.1101/2021.06.29.450241",
    abstract: "Insulin resistance contributes to type 2 diabetes and can be driven by hyperinsulinemia. Insulin receptor (INSR) internalization and cell-surface dynamics at rest and during insulin exposure are incompletely understood in muscle cells. Using surfacing labelling and live-cell imaging, we observed robust basal internalization of INSR in C2C12 myoblasts, without an effect of added insulin. Mass-spectrometry using INSR knockout cells as controls, identified high-confidence binding partners, including proteins associated with internalization. We confirmed known interactors, including IGF1R, but also identified underappreciated INSR-binding factors such as ANXA2. AlphaFold-Multimer analysis of these INSR-binding proteins predicted potential INSR binding sites of these proteins. Protein-protein interaction network mapping suggested links between INSR and caveolin-mediated endocytosis. INSR interacted with both caveolin and clathrin heavy chain (CLTC) in mouse skeletal muscle and C2C12 myoblasts. Whole cell 2D super-resolution imaging revealed that high levels of insulin (20 nM) increased INSR colocalization with CAV1 but decreased its colocalization with CLTC. Single particle tracking confirmed the colocalization of cell-surface INSR with both over-expressed CAV1-mRFP and CLTC-mRFP. INSR tracks that colocalized with CAV1 exhibited longer radii and lifetimes, regardless of insulin exposure, compared to non-colocalized tracks, whereas insulin further increased the lifetime of INSR/CLTC colocalized tracks. Overall, these data suggest that muscle cells utilize both CAV1 and CLTC-dependent pathways for INSR dynamics and internalization.",
    figure: {
      url: "/photos/publications/insulin-receptor-trafficking-2025-fig3.jpg",
      isLocal: true
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
      url: "/photos/publications/multimil-weakly-supervised-2024-fig1.jpg",
      isLocal: true
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