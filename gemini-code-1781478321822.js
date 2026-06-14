const faqs = {
  "date_lieu": "Le séminaire aura lieu cet été à Sousse, Tunisie. Les dates et lieux exacts seront communiqués prochainement.",
  "contenu": "La formation couvre les bases et les applications avancées des vis d'ancrage, incluant la biomécanique et la gestion des cas complexes.",
  "niveau": "Ce séminaire est accessible aux débutants comme aux praticiens confirmés souhaitant se perfectionner.",
  "certificat": "Oui, un certificat de participation sera délivré à la fin de la formation."
};

function getAnswer(key) {
  return faqs[key] || "Je n'ai pas trouvé de réponse à cette question.";
}