window.siteContent = {
  profile: {
    name: "Zheheng Fan",
    initials: "Z",
    subtitle: "BSc Biomedical Sciences/ MSc Integrated Immunology",
    keywords: "Immunology · Cancer Biology · Translational Studies",
    title: "Zheheng Fan",
    description: "Academic webpage for Zheheng Fan: profile, research interests, written works, posters, and contact information.",
    heroImage: "assets/immunology-hero.svg",
    footerNote: "Personal and academic profiles."
  },

  hero: {
    eyebrow: "Profile",
    tagline: "Driven by the challenge of translating cancer immunology into therapies that make a measurable difference for patients.",
    actions: [
      { label: "Research projects", href: "research-projects.html", style: "primary" },
      { label: "Contact", href: "#cv", style: "secondary" }
    ]
  },

  about: {
    kicker: "MSc Student",
    heading: "Zheheng Fan",
    photo: "assets/Profile_photo.jpg",
    photoAlt: "Profile photo of Zheheng Fan",
    paragraphs: [
      "I obtained my Bachelor of Science degree from University College London in 2025 and am currently pursuing a master’s in Integrated Immunology at the University of Oxford. My research interests centre on how cellular interactions shape tissue function, particularly within the immune system and in disease contexts. For my undergraduate project, I investigated metabolic communication between germline and somatic cells in the Drosophila testis, focusing on identifying the monocarboxylate transporter involved in metabolite exchange. This work introduced me to the importance of cell-cell interactions in maintaining tissue homeostasis.",
      "My current research focuses on the role of tumour-infiltrating B cells and tertiary lymphoid structures in colorectal cancer, an area that remains underexplored compared to T cell-mediated immunity. Emerging evidence suggests that B cells contribute to anti-tumour responses, particularly in patients with favourable outcomes following immunotherapy. My project aims to characterise the binding specificity and affinity of tumour-derived antibodies and to evaluate their capacity to mediate anti-tumour responses. It will improve our understanding of how humoral immunity contributes to tumour control, complements T cell-mediated responses, and sheds light on new strategies of immunotherapies."
    ]
  },

  education: {
    kicker: "Education",
    heading: "Education",
    items: [
      {
        degree: "MSc Integrated Immunology",
        institution: "University of Oxford",
        location: "Oxford, United Kingdom",
        years: "2025–present",
        status: "Current",
        summary: "Advanced training in both basic and clinical immunology with a research focus on the role of tumour-infiltrating B cells and tertiary lymphoid structures in colorectal cancer.",
        highlights: ["Cancer immunology", "Humoral immunity", "Translational research"]
      },
      {
        degree: "BSc Biomedical Sciences",
        institution: "University College London",
        location: "London, United Kingdom",
        years: "2022–2025",
        status: "Completed",
        summary: "Undergraduate training in biomedical sciences, including a research project on metabolic communication between germline and somatic cells in the Drosophila testis.",
        highlights: ["Cell biology", "Metabolism", "Tissue homeostasis"]
      }
    ]
  },

  focus: {
    kicker: "Research",
    heading: "Research projects",
    items: [
      {
        slug: "tumour-infiltrating-b-cells",
        title: "Tumour-infiltrating B cells and antibodies in colorectal cancer",
        text: "Investigated how B cells and tertiary lymphoid structures may contribute to anti-tumour immunity and patient outcomes.",
        href: "project-tumour-infiltrating-b-cells.html",
        logo: "assets/cio-logo.png",
        logoAlt: "CIO logo",
        lab: "Functional Immunology Lab",
        labHref: "https://www.immonc.ox.ac.uk/research-groups/pedrozapacheco-group",
        pi: "Dr Isabela Pedroza-Pacheco",
        piHref: "https://www.camsoxford.ox.ac.uk/Team/isabela-pedroza-pacheco",
        detail: [
          "This project investigates whether antibodies derived from colorectal cancer patients can recognise tumour cells and mediate anti-tumour immune mechanisms. Using patient serum samples, IgG, IgM and IgA binding to colorectal cancer cells were assessed by spectral flow cytometry under live and fixed/permeabilised conditions, allowing discrimination between antibody recognition cell-surface and intracellular antigens. Antibody binding to peripheral blood nucleated cells were also measured to assess potential off-tumour reactivity.",
          "In addition to binding assays, this project examines whether antibody-coated tumour cells can support Fc-dependent effector mechanisms, including antibody-dependent cellular cytotoxicity and antibody-dependent cellular phagocytosis, by co-coculturing NK/macrophages with tumour cells and patient serum."
        ],
        workflow: {
          image: "assets/Project1 workflow.png",
          alt: "Workflow diagram for antibody binding and functional ADCC ADCP assays in colorectal cancer",
          caption: "Project workflow: patient-derived antibodies are assessed for colorectal cancer cell binding by spectral flow cytometry, followed by functional ADCC and ADCP assays."
        }
      },
      {
        slug: "monocarboxylate-transporter-drosophila-testis",
        title: "Monocarboxylate transporter in germ cell survival in Drosophila testis",
        text: "Investigated how somatic cells support germ cell survival by shuffling metabolites through monocarboxylate transporters.",
        href: "project-monocarboxylate-transporter-drosophila-testis.html",
        logo: "assets/ucl_logo.jpg",
        logoAlt: "UCL logo",
        lab: "Amoyel Lab",
        labHref: "https://www.amoyellab.com/",
        pi: "Dr Marc Amoyel",
        piHref: "https://profiles.ucl.ac.uk/23086-marc-amoyel",
        detail: [
          "Cell-cell communication is essential for tissue homeostasis and differentiation. In Drosophila testis, the metabolic interplay between somatic cyst cells and germline cells remains largely unexplored. Recent findings suggest that cyst cells provide metabolic support to germ cells, particularly through the transport of lactate via monocarboxylate transporters (MCT). While CG8034 has been identified as the MCT responsible for lactate export from cyst cells, the transporter mediating lactate import into germ cells remains unknown.",
          "This study employs the Bam-Gal4/UAS-RNAi system to knock down candidate MCTs in differentiating germ cells and assess their role in germline survival. Immunohistochemistry and lysotracker staining were used to quantify germ cell death across experimental groups. Among the MCTs screened, knockdown of Hermes and Karmoisin significantly increased germ cell death, indicating their potential roles in lactate transport. Further validation using a second RNAi line and mutant clones is necessary to confirm these findings.",
          "Additionally, to elucidate the metabolic fate of lactate in germ cells, preliminary findings in the lab have demonstrated that lactate is converted into malate for downstream metabolism. These findings highlight a critical metabolic coupling between somatic cysts and germ cells, where lactate transport via Hermes and Karmoisin supports germline survival. This study provides novel insights into the metabolic dependencies of germ cells and contributes to our understanding of inter-lineage metabolic communication."
        ],
        workflow: {
          image: "assets/Project 2.png",
          alt: "Representative confocal images of Drosophila testes across monocarboxylate transporter RNAi knockdown conditions",
          caption: "Representative confocal images of Drosophila testes following RNAi knockdown of candidate monocarboxylate transporters."
        }
      },
      {
        slug: "translational-cancer-immunology",
        title: "Combinatorial targeted therapies and resistant mechanisms in breast cancer",
        text: "Investigated PI3K pathway-targeted combination strategies, drug synergy, and resistance mechanisms in HER2-positive breast cancer models.",
        href: "project-translational-cancer-immunology.html",
        logo: "assets/Regor_logo.webp",
        logoAlt: "Regor Therapeutics logo",
        company: "Regor Therapeutics",
        companyHref: "https://regor.com/",
        pi: "Dr Jing Han & Dr Wenge Zhong",
        detail: [
          "At Regor Therapeutics, this project examined targeted therapy strategies for HER2-positive breast cancer, with a focus on PI3K pathway inhibition and rational drug combinations. A comparative study was conducted to evaluate the combinatorial effects of an in-house mutant-selective PI3Kα inhibitor with tucatinib, benchmarked against alpelisib and tucatinib in the HER2-positive HCC-1954 breast cancer cell line.",
          "Cell anti-proliferation assays and western blotting were used to assess PI3K pathway activity and apoptosis induction across multiple drug concentrations. Key biomarkers included pAkt as a readout of PI3K pathway activity and cleaved PARP as a marker of apoptosis. The work demonstrated stronger synergy between the in-house compound QR-8490 and tucatinib, suggesting potential therapeutic advantages.",
          "A second phase of the project investigated potential resistance mechanisms following long-term treatment, based on altered downstream pAkt biomarker levels. Literature review and experimental design were used to evaluate hypotheses including upstream RTK-mediated resistance and delayed PI3K pathway activation through PI3Kβ. Co-treatment with the in-house molecule and the EGFR inhibitor gefitinib showed greater efficacy than PI3Kβ inhibition, supporting an RTK-mediated resistance mechanism.",
          "P.S. Experimental data are not shown due to confidentiality agreements."
        ],
        figures: [
          {
            image: "assets/Project3_1.png",
            alt: "HER2 and PI3K pathway diagram showing tucatinib and PI3K alpha inhibitor combination strategy",
            caption: "Combination strategy targeting HER2 and PI3Kα signalling in HER2-positive breast cancer cells."
          },
          {
            image: "assets/Project3_2.png",
            alt: "EGFR RTK PI3K pathway diagram showing gefitinib, PI3K alpha inhibitor, and PI3K beta inhibitor resistance testing strategy",
            caption: "Resistance-mechanism testing strategy comparing EGFR and PI3Kβ-targeted co-treatment approaches."
          }
        ]
      }
    ]
  },

  methods: {
    kicker: "Skills",
    heading: "Laboratory and analytical skills",
    items: [
      {
        title: "Molecular Biology Techniques",
        skills: [
          "Western blot",
          "SDS-PAGE",
          "BCA assay",
          "Immunohistochemistry",
          "Immunofluorescence",
          "ELISA",
          "DNA/RNA gel electrophoresis",
          "qPCR"
        ]
      },
      {
        title: "Fly Lab Techniques",
        skills: [
          "Fly husbandry",
          "Stock maintenance",
          "Anesthetization",
          "Virgin collection",
          "Fly sorting",
          "Genetic crosses",
          "GAL4/UAS system",
          "Balancer chromosomes",
          "RNAi"
        ]
      },
      {
        title: "Cell Lab Techniques",
        skills: [
          "Cell culture",
          "Spectral flow cytometry",
          "Anti-proliferation assays",
          "Sterile techniques"
        ]
      },
      {
        title: "Microscopy and Data Analysis",
        skills: [
          "Fluorescence confocal microscopy",
          "GraphPad Prism",
          "ImageJ",
          "Image Lab",
          "FlowJo",
          "R"
        ]
      }
    ]
  },

  works: {
    kicker: "Works",
    heading: "Selected works",
    groups: [
      {
        title: "Written work",
        items: [
          {
            type: "Written work",
            title: "Targeting tumor-infiltrating myeloid cells to alleviate T cell exhaustion",
            meta: "Written work · December 2025",
            text: "An analysis of how tumor-associated macrophages and myeloid-derived suppressor cells shape T cell exhaustion in the tumor microenvironment.",
            label: "Read PDF",
            href: "Written%20work/Can%20T%20cell%20exhaustion%20be%20alleviated%20by%20targeting%20tumor-infiltrating%20myeloid%20cells%20in%20the%20tumor%20microenvironment%3F.pdf"
          },
          {
            type: "Opinion piece",
            title: "Awakening the enemy or silencing them forever: innovative approaches to combat dormant cancer cells and prevent metastatic relapse",
            meta: "Opinion piece · April 2025",
            text: "An opinion piece discussing therapeutic strategies for dormant cancer cells, metastatic relapse, and precision oncology approaches.",
            label: "Read PDF",
            href: "Written%20work/Awakening%20the%20enemy%20or%20silencing%20them%20forever.pdf"
          },
          {
            type: "Written work",
            title: "Monocarboxylate transporters in Drosophila germ cell survival",
            meta: "Written work · March 2025",
            text: "A research report on metabolic communication between somatic cyst cells and germ cells in the Drosophila testis.",
            label: "Read PDF",
            href: "Written%20work/NSGF7_ANAT0015_Amoyel.pdf"
          },
          {
            type: "Written work",
            title: "Cystic fibrosis: molecular basis and pharmacotherapy",
            meta: "Written work · March 2024",
            text: "A review of CFTR dysfunction, cystic fibrosis pathophysiology, and therapeutic approaches targeting the molecular basis of disease.",
            label: "Read PDF",
            href: "Written%20work/CFTR%20review.pdf"
          }
        ]
      },
      {
        title: "Posters and presentations",
        items: [
          {
            type: "Poster",
            title: "Targeting tumor-infiltrating myeloid cells to alleviate T cell exhaustion",
            meta: "Poster · January 2026",
            text: "A visual summary of how tumor-infiltrating myeloid cells contribute to T cell exhaustion and how they may be therapeutically targeted.",
            label: "View PDF",
            href: "Posters%20and%20presentations/Poster.pdf"
          },
          {
            type: "Presentation",
            title: "The role of monocarboxylate transporters in germ cell survival in Drosophila testis",
            meta: "Presentation · May 2025",
            text: "Presentation slides summarising the Drosophila testis project on candidate monocarboxylate transporters and germ cell survival.",
            label: "View PDF",
            href: "Posters%20and%20presentations/The%20role%20of%20monocarboxylate%20transporters%20in%20germ%20cell%20survival%20in%20Drosophila%20testis.pdf"
          },
          {
            type: "Presentation",
            title: "Deciphering the molecular basis and pharmacotherapy of cystic fibrosis",
            meta: "Presentation · March 2024",
            text: "Presentation slides covering CFTR biology, cystic fibrosis mechanisms, and pharmacological approaches to disease management.",
            label: "View PDF",
            href: "Posters%20and%20presentations/Deciphering%20the%20molecular%20basis%20and%20pharmacotherapy%20of%20cystic%20fibrosis.pdf"
          }
        ]
      }
    ]
  },

  contact: {
    kicker: "Contact",
    heading: "Contact",
    text: "Get in touch by email, LinkedIn, or download my CV.",
    links: [
      { label: "Email", href: "mailto:zheheng04@outlook.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/zheheng-fan-06236b304/" },
      { label: "CV", href: "assets/Zheheng Fan_CV.pdf" }
    ]
  }
};
