export type Publication = {
  title: string; authors: string[]; year?: number; venue?: string;
  status: "published" | "preprint" | "under-review" | "in-preparation" | "conference";
  links?: Record<string, string>; featured?: boolean;
};

export const publications: Publication[] = [
  { title: "The application of the BERTopic model in natural language processing: In-depth text topic modeling", authors: ["Ou, Y.", "Zhang, P.", "Yu, J.", "Li, M.", "Su, S.", "Zhang, M.", "Feng, R.", "Sun, F.", "Wu, J."], year: 2025, venue: "ICCECE · IEEE", status: "published" },
  { title: "Bayesian cue combination best predicts straight-line distance estimation with translated visual landmarks", authors: ["Vishwanath, A.", "Huang, Y.", "Wilson, R. C."], year: 2025, venue: "Neuropsychologia", status: "published", links: { paper: "https://authors.elsevier.com/" }, featured: true },
  { title: "The association between mindfulness, psychological flexibility, and rumination in predicting mental health and well-being among university students using machine learning and structural equation modeling", authors: ["Feng, R.", "Mishra, V.", "Hao, X.", "Verhaeghen, P."], year: 2024, venue: "Machine Learning with Applications", status: "published", featured: true },
  { title: "Adaptation and validation of the Mindful Student Questionnaire in Chinese", authors: ["Wang, Q.", "Wu, Y.", "Feng, R.", "Hao, X.", "Felver, J. C.", "Zhang, Y.", "Razza, R."], year: 2024, venue: "Mindfulness", status: "published" },
  { title: "Leveraging Virtual Reality to Understand Human Spatial Navigation", authors: ["Huang, Y."], year: 2023, venue: "Nature Reviews Psychology", status: "published", links: { paper: "https://rdcu.be/" }, featured: true },
  { title: "Replicability of Two Classic Experiments in Social Psychology: Implicit Association Test and Imagined Contact", authors: ["Huang, Y."], year: 2020, venue: "Inkblot: Undergraduate Journal of Psychology", status: "published", featured: true },
  { title: "The effect of mindfulness and wisdom as intervention to deal with college students’ internet addiction", authors: ["Lee, P.", "Chen, S.", "Yu, Y.", "Chen, Y.", "Feng, R.", "Fan, X."], year: 2019, venue: "International Journal of Psychology & Behavior Analysis", status: "published" },
  { title: "An Experimental Investigation of Implicit Emotional Counter-Regulation and Its Neural Correlates Using a Priming Identity Task", authors: ["Feng, R.", "Yin, S.", "Jahanzad, S.", "Hao, X.", "Apt, L.", "Verhaeghen, P."], venue: "In revision at Cognitive, Affective & Behavioral Neuroscience", status: "under-review" },
  { title: "Mind-body interventions Induced Brain Changes in the Aging Population: A Systematic Review of Structural and Functional Neuroimaging Findings", authors: ["Hao, X.", "Feng, R.", "Verhaeghen, P.", "Turnbull, A."], venue: "In revision at Neuropsychology Review", status: "under-review" },
  { title: "When control slips away: Temporal dynamics of learned helplessness and cognitive flexibility under reward uncertainty", authors: ["Feng, R.", "Hao, X.", "Coronado, B.", "Verhaeghen, P."], venue: "In revision at Motivation and Emotion", status: "under-review" },
  { title: "Control theory model predicts human velocity during multi-sensory navigation in virtual reality", authors: ["Huang, Y.", "Du, Y. K.", "Ekstrom, A.", "Wilson, R."], year: 2024, venue: "Society for Mathematical Psychology Satellite Meeting", status: "conference" },
  { title: "Neural correlates of mismatch detection and integration of visual and body-based cues in virtual reality", authors: ["Huang, Y.", "Du, Y. K.", "Wilson, R.", "Ekstrom, A."], year: 2023, venue: "Society for Neuroscience", status: "conference" },
];
