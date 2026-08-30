export interface Publication {
  title: string;
  /**
   * Slug of the companion post in content/. Stored explicitly rather than
   * derived from the title, so retitling a paper cannot silently break its link.
   */
  slug: string;
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
    /** 256px square crop, used where the figure renders as a 128px thumbnail. */
    thumb?: string;
    isLocal?: boolean;
    /** Describes what the figure shows. Empty string marks it decorative. */
    alt: string;
  };
  xPost?: string;  // Full X (Twitter) post URL
  linkedinPost?: string;  // Full LinkedIn post URL
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    title: "De Novo Design of Protein Switches with Diffusion-Based Ensemble Sampling",
    slug: "de-novo-design-of-protein-switches-with-diffusion-based-ensemble-sampling",
    year: 2026,
    authors: "Alireza Omidi, Jiajun He, Jennifer M. Bui, Jörg Gsponer, Saifuddin Syed",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.64898/2026.07.20.739027v1",
    doi: "10.64898/2026.07.20.739027",
    abstract: "Protein switches are proteins that can respond to biochemical stimuli by rearranging their structural elements, essential for cells to transduce signals. The de novo design of such proteins requires amino acid sequences whose energy landscapes support multiple stimulus-dependent conformations, yet most current de novo protein design pipelines are optimized for single stable structures. Existing multi-state inverse-folding methods can design sequences compatible with multiple backbones, but they assume that suitable backbone ensembles are already available, often requiring expert knowledge. We introduce Diff-Switch, a framework for sampling switch-like backbone ensembles from pretrained protein diffusion models. Given a reference backbone structure and domain decomposition, our method preserves local domain geometry while encouraging diversity in global domain arrangements along user-specified collective variables, inspired by metadynamics. We implement this objective through a controlled diffusion sampler with reward-tilting for local similarity between the ensemble members and history-dependent bias in collective-variable space to avoid repeated sampling of the same global arrangement. The resulting ensembles provide candidate conformational states for downstream multi-state inverse folding. Across our evaluation set of 20 diverse proteins, using conformations from these generated ensembles improves the success rate of finding switch-compatible sequences over baseline sampling. We further apply the method to a real-world protein switch design task and characterize the resulting designs.",
    figure: {
      url: "/photos/publications/diff-switch-2026-fig1.jpg",
      thumb: "/photos/publications/thumbs/diff-switch-2026-fig1.jpg",
      isLocal: true,
      alt: "Three panels: a closed-to-open protein switch schematic, a phosphorylation-induced switch shown as two ribbon structures, and the Diff-Switch design pipeline running from backbone generation through inverse folding to AlphaFold3 evaluation."
    },
    xPost: "https://x.com/BiologyAIDaily/status/2080070137601036473",
    selected: true
  },
  {
    title: "Predicting protein interfaces in the age of AlphaFold: Why dynamics and disorder remain a challenge",
    slug: "predicting-protein-interfaces-in-the-age-of-alphafold-why-dynamics-and-disorder-remain-a-challenge",
    year: 2026,
    authors: "Alireza Omidi, Jennifer M. Bui, Jörg Gsponer",
    journal: "Cell Systems",
    url: "https://www.cell.com/cell-systems/fulltext/S2405-4712(25)00341-2",
    doi: "10.1016/j.cels.2025.101508",
    abstract: "Two recent studies in Cell Systems show why protein dynamics matter for prediction. By moving beyond static structures and embracing the dynamic \"jigglings and wigglings\" that Richard Feynman famously described, these approaches improve accuracy in binding site predictions for flexible systems despite challenges such as sparse training data. Together, they signal a shift toward models that try to capture the full energy landscape, paving the way for deeper insights into protein function.",
    figure: {
      url: "/photos/publications/cell-systems-2026-alphafold-interfaces-fig1.jpg",
      thumb: "/photos/publications/thumbs/cell-systems-2026-alphafold-interfaces-fig1.jpg",
      isLocal: true,
      alt: "Four rows of predicted protein complexes, ordered by increasing structural dynamics: a rigid globular pair at the top through progressively more disordered, multi-conformation ensembles at the bottom."
    },
    selected: true
  },
  {
    title: "Insulin receptor trafficking and interactions in muscle cells",
    slug: "insulin-receptor-trafficking-and-interactions-in-muscle-cells",
    year: 2026,
    authors: "Haoning Howard Cen, Aurora J. Mattison, Alireza Omidi, Jason Rogalski, Libin Abraham, Guang Gao, Michael R. Gold, Leonard J. Foster, Jörg Gsponer, James D. Johnson",
    journal: "Journal of the Endocrine Society",
    url: "https://doi.org/10.1210/jendso/bvag020",
    doi: "10.1210/jendso/bvag020",
    abstract: "Insulin resistance contributes to type 2 diabetes and can be driven by hyperinsulinemia. Insulin receptor (INSR) internalization and cell-surface dynamics at rest and during insulin exposure are incompletely understood in muscle cells. Using surface labelling and live-cell imaging, we observed robust basal internalization of INSR in C2C12 myoblasts, without an effect of added insulin. Mass-spectrometry using INSR knockout cells as controls, identified high-confidence binding partners, including proteins associated with internalization. We confirmed known interactors, including IGF1R, but also identified underappreciated INSR-binding factors such as ANXA2. AlphaFold-Multimer analysis of these INSR-binding proteins predicted potential INSR binding sites of these proteins. Protein-protein interaction network mapping suggested links between INSR and caveolin-mediated endocytosis. INSR interacted with both caveolin and clathrin heavy chain (CLTC) in mouse skeletal muscle and C2C12 myoblasts. Whole cell 2D super-resolution imaging revealed that high levels of insulin (20 nM) increased INSR colocalization with CAV1 but decreased its colocalization with CLTC. Single particle tracking confirmed the colocalization of cell-surface INSR with both over-expressed CAV1-mRFP and CLTC-mRFP. INSR tracks that colocalized with CAV1 exhibited longer radii and lifetimes, regardless of insulin exposure, compared to non-colocalized tracks, whereas insulin further increased the lifetime of INSR/CLTC colocalized tracks. Overall, these data suggest that muscle cells utilize both CAV1 and CLTC-dependent pathways for INSR dynamics and internalization.",
    figure: {
      url: "/photos/publications/insulin-receptor-trafficking-2025-fig3.jpg",
      thumb: "/photos/publications/thumbs/insulin-receptor-trafficking-2025-fig3.jpg",
      isLocal: true,
      alt: "Super-resolution imaging panels showing insulin receptor colocalization with CAV1 and CLTC in C2C12 myoblasts, with accompanying single-particle tracking plots."
    },
  },
  {
    title: "Challenging AlphaFold in predicting proteins with large-scale allosteric transitions",
    slug: "challenging-alphafold-in-predicting-proteins-with-large-scale-allosteric-transitions",
    year: 2025,
    authors: "Brooks H. Perkins-Jechow, Juan Pablo Iglesias Ahualli, Huyen Thuc Nhu, Alireza Omidi, Chunchao Li, Jorge A. Holguin-Cruz, Daeahn Cho, Dokyun Na, Nawar Malhis, Jennifer M. Bui, Jörg Gsponer",
    journal: "Communications Chemistry",
    url: "https://www.nature.com/articles/s42004-025-01763-0",
    doi: "10.1038/s42004-025-01763-0",
    abstract: "Many proteins function by toggling between distinct conformations, yet most structure predictors have been trained on data that do not capture this conformational diversity. Here, we benchmarked AlphaFold2, AlphaFold3, and recent variants on autoinhibited proteins, a class of allosterically regulated, often multi-domain proteins that exist in equilibrium between active and autoinhibited states. Our analyses show that AlphaFold2 fails to reproduce the experimental structures of many autoinhibited proteins, which is reflected in reduced confidence scores. This contrasts sharply with its high-accuracy, high-confidence predictions of non-autoinhibited multi-domain proteins. When tested for its ability to capture conformational diversity, we found that AlphaFold2 performs better when combined with uniform subsampling of sequence alignments rather than local subsampling. BioEmu and AlphaFold3 improve upon these results, yet still struggle to accurately reproduce details of experimental structures. Together, our study underscores the persistent challenges of predicting protein structures shaped by complex energy landscapes.",
    figure: {
      url: "/photos/publications/challenging-alphafold-2025-fig1.png",
      thumb: "/photos/publications/thumbs/challenging-alphafold-2025-fig1.jpg",
      isLocal: true,
      alt: "Diagram of an autoinhibited protein's equilibrium between its active and autoinhibited conformations, used as the benchmark set for AlphaFold2, AlphaFold3, and BioEmu."
    },
    linkedinPost: "https://www.linkedin.com/posts/jennifer-m-bui-phd-73065116a_challenging-alphafold-in-predicting-proteins-activity-7399595388925575168-KOhO",
    selected: true
  },
  {
    title: "Integration and Querying of Multimodal Single-Cell Data with PoE-VAE",
    slug: "integration-and-querying-of-multimodal-single-cell-data-with-poe-vae",
    year: 2025,
    authors: "Anastasia Litinetskaya, Maiia Shulman, Fabiola Curion, Artur Szałata, Alireza Omidi, Mohammad Lotfollahi, Fabian J. Theis",
    journal: "Research in Computational Molecular Biology (RECOMB)",
    url: "https://doi.org/10.1007/978-3-031-90252-9_36",
    doi: "10.1007/978-3-031-90252-9_36",
    abstract: "Constructing joint representations from multimodal single-cell datasets is crucial for understanding cellular heterogeneity and function. In this work, we demonstrate the product-of-experts VAE-based model, which offers a flexible, scalable solution for integrating multimodal data, allowing for the seamless mapping of both unimodal and multimodal queries onto a reference atlas. We evaluate how different strategies for combining modalities in the VAE framework impact query-to-reference mapping across diverse datasets, including CITE-seq and spatial metabolomics. We showcase our approach in a mosaic setting, integrating CITE-seq and multiome data to accurately map unimodal and multimodal queries into the joint latent space. We extend this to spatial data by integrating gene expression and metabolomics from paired Visium and MALDI-MSI slides, achieving a high correlation in metabolite predictions from spatial gene expression. Our results demonstrate that this VAE-based framework is scalable, robust, and easily applicable across multiple modalities, providing a powerful tool for data imputation, querying, and biological discovery.",
    figure: {
      url: "/photos/publications/poe-vae-recomb-2025-fig2.jpg",
      thumb: "/photos/publications/thumbs/poe-vae-recomb-2025-fig2.jpg",
      isLocal: true,
      alt: "UMAP embeddings of a multimodal reference atlas with unimodal and multimodal queries mapped into the shared latent space, alongside spatial metabolite predictions from paired Visium and MALDI-MSI slides."
    },
    selected: true,
    codebase: {
      url: "https://github.com/theislab/multigrate",
      platform: "github"
    }
  },
  {
    title: "AlphaFold-Multimer accurately captures interactions and dynamics of intrinsically disordered protein regions",
    slug: "alphafold-multimer-accurately-captures-interactions-and-dynamics-of-intrinsically-disordered-protein-regions",
    year: 2024,
    authors: "Alireza Omidi, Mads Harder Møller, Nawar Malhis, Jennifer M. Bui, Jörg Gsponer",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    url: "https://doi.org/10.1073/pnas.2406407121",
    doi: "10.1073/pnas.2406407121",
    abstract: "Interactions mediated by intrinsically disordered protein regions (IDRs) pose formidable challenges in structural characterization. IDRs are highly versatile, capable of adopting diverse structures and engagement modes. Motivated by recent strides in protein structure prediction, we embarked on exploring the extent to which AlphaFold-Multimer can faithfully reproduce the intricacies of interactions involving IDRs. To this end, we gathered multiple datasets covering the versatile spectrum of IDR binding modes and used them to probe AlphaFold-Multimer's prediction of IDR interactions and their dynamics. Our analyses revealed that AlphaFold-Multimer is not only capable of predicting various types of bound IDR structures with high success rate, but that distinguishing true interactions from decoys, and unreliable predictions from accurate ones is achievable by appropriate use of AlphaFold-Multimer's intrinsic scores. We found that the quality of predictions drops for more heterogeneous, fuzzy interaction types, most likely due to lower interface hydrophobicity and higher coil content. Notably though, certain AlphaFold-Multimer scores, such as the Predicted Aligned Error and residue-ipTM, are highly correlated with structural heterogeneity of the bound IDR, enabling clear distinctions between predictions of fuzzy and more homogeneous binding modes. Finally, our benchmarking revealed that predictions of IDR interactions can also be successful when using full-length proteins, but not as accurate as with cognate IDRs. To facilitate identification of the cognate IDR of a given partner, we established \"minD,\" which pinpoints potential interaction sites in a full-length protein. Our study demonstrates that AlphaFold-Multimer can correctly identify interacting IDRs and predict their mode of engagement with a given partner.",
    figure: {
      url: "/photos/publications/pnas.2406407121fig02.jpg",
      thumb: "/photos/publications/thumbs/pnas.2406407121fig02.jpg",
      isLocal: true,
      alt: "AlphaFold-Multimer predictions of intrinsically disordered regions bound to their partners, spanning ordered single-conformation complexes through fuzzy, heterogeneous ensembles."
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
    slug: "multimodal-weakly-supervised-learning-to-identify-disease-specific-changes-in-single-cell-atlases",
    year: 2024,
    authors: "Anastasia Litinetskaya, Maiia Shulman, Soroor Hediyeh-zadeh, Amir Ali Moinfar, Fabiola Curion, Artur Szałata, Alireza Omidi, Mohammad Lotfollahi, Fabian J. Theis",
    journal: "bioRxiv",
    // Pinned to v1 deliberately. The unversioned DOI (10.1101/2024.07.29.605625)
    // now resolves to v2, which was retitled and no longer lists this author.
    url: "https://www.biorxiv.org/content/10.1101/2024.07.29.605625v1",
    abstract: "Multimodal analysis of single-cell samples from healthy and diseased tissues at various stages provides a comprehensive view that identifies disease-specific cells, their molecular features and aids in patient stratification. Here, we present MultiMIL, a novel weakly-supervised multimodal model designed to construct multimodal single-cell references and prioritize phenotype-specific cells via patient classification. MultiMIL effectively integrates single-cell modalities, even when they only partially overlap, providing robust representations for downstream analyses such as phenotypic prediction and cell prioritization. Using a multiple-instance learning approach, MultiMIL aggregates cell-level measurements into sample-level representations and identifies disease-specific cell states through attention-based scoring. We demonstrate that MultiMIL accurately identifies disease-specific cell states in blood and lung samples, identifying novel disease-associated genes and achieving superior patient classification accuracy compared to existing methods. We anticipate MultiMIL will become an essential tool for querying single-cell multiomic atlases, enhancing our understanding of disease mechanisms and informing targeted treatments.",
    figure: {
      url: "/photos/publications/multimil-weakly-supervised-2024-fig1.jpg",
      thumb: "/photos/publications/thumbs/multimil-weakly-supervised-2024-fig1.jpg",
      isLocal: true,
      alt: "The MultiMIL architecture: per-cell multimodal encoders feeding a multiple-instance learning layer that aggregates cells into a sample-level representation for patient classification and attention-based cell prioritization."
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
    slug: "learning-cancer-progression-network-from-mutation-allele-frequencies",
    year: 2020,
    authors: "Mohammad Sadegh Akhondzadeh, Alireza Omidi, Zeinab Maleki, Kevin Coombes, Amanda E. Toland, Amir Asiaee",
    journal: "ICML Workshop on Computational Biology",
    url: "https://icml-compbio.github.io/2020/papers/WCBICML2020_paper_36.pdf",
    abstract: "We model the partial order of accumulation of mutations during tumorigenesis by linear structural equations. In this framework, the cancer progression network is modeled as a weighted directed acyclic graph (DAG), which minimizes a suitable continuous loss function. The goal is to learn the DAG from cross-sectional mutation allele frequency data. As a case study, we infer the order of mutations in melanoma. The recovered network of melanoma matches the known biological facts about the subtypes and progression of melanoma while discovers mutual exclusivity patterns among mutations by negative edges.",
    figure: {
      url: "/photos/publications/icml-2020-fig1.png",
      thumb: "/photos/publications/thumbs/icml-2020-fig1.jpg",
      isLocal: true,
      alt: "The inferred melanoma progression network as a weighted directed acyclic graph over driver mutations, with negative edges marking mutually exclusive pairs."
    },
    codebase: {
      url: "https://github.com/alirezaomidi/cancerdag",
      platform: "github"
    }
  },
]; 