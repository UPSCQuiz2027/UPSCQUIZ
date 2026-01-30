const questions = [
  { question: "History is primarily the study of?", options: ["Future events", "Past human activities", "Natural phenomena", "Scientific laws"], answer: 1 },
  { question: "The word 'History' comes from a Greek word meaning?", options: ["Time", "Inquiry", "Memory", "Past"], answer: 1 },
  { question: "Which best defines the scope of history?", options: ["Only rulers", "Only wars", "Human life in the past", "Religious texts"], answer: 2 },
  { question: "Archaeology deals with the study of?", options: ["Languages", "Material remains", "Religions", "Chronicles"], answer: 1 },
  { question: "Which source is most important for prehistoric history?", options: ["Manuscripts", "Coins", "Archaeological remains", "Inscriptions"], answer: 2 },
  { question: "Manuscripts were generally written on?", options: ["Stone", "Palm leaf and birch bark", "Metal", "Cloth"], answer: 1 },
  { question: "Inscriptions were usually written on?", options: ["Paper", "Palm leaves", "Hard surfaces like stone", "Wood"], answer: 2 },
  { question: "Which of the following is NOT a historical source?", options: ["Coins", "Tools", "Future predictions", "Buildings"], answer: 2 },
  { question: "Why have inscriptions survived longer than manuscripts?", options: ["Better language", "Durable material", "Royal orders", "Religious value"], answer: 1 },
  { question: "Which development led to leisure time in early societies?", options: ["Hunting", "Food production", "Migration", "Tool making"], answer: 1 },

  { question: "The shift to agriculture resulted in?", options: ["Nomadic life", "Permanent settlements", "End of tools", "Decline of culture"], answer: 1 },
  { question: "Early humans lived mainly as?", options: ["Farmers", "Hunters and gatherers", "Traders", "Artisans"], answer: 1 },
  { question: "Which is one of the earliest scripts of India?", options: ["Persian", "Brahmi", "Arabic", "Roman"], answer: 1 },
  { question: "Why are scripts important for historians?", options: ["Grammar study", "Decoding inscriptions", "Religious learning", "Art analysis"], answer: 1 },
  { question: "Coins help historians understand?", options: ["Climate", "Economy and chronology", "Religion", "Language"], answer: 1 },
  { question: "Buildings help historians understand?", options: ["Architecture and lifestyle", "Script evolution", "Trade only", "Language"], answer: 0 },
  { question: "Which material was least durable?", options: ["Stone", "Copper", "Palm leaf", "Rock"], answer: 2 },
  { question: "NCERT history focuses on?", options: ["Rote learning", "Understanding change over time", "Kings only", "Dates only"], answer: 1 },
  { question: "Early tools were mostly made of?", options: ["Iron", "Bronze", "Stone", "Copper"], answer: 2 },
  { question: "Tools help historians understand?", options: ["Religion", "Technology and survival", "Politics", "Language"], answer: 1 },

  { question: "The literal meaning of manuscript is?", options: ["Printed text", "Handwritten text", "Sacred text", "Engraved text"], answer: 1 },
  { question: "Why are manuscripts fewer today?", options: ["Illegal writing", "Fragile materials", "Foreign origin", "Low importance"], answer: 1 },
  { question: "Which is an indirect source of history?", options: ["Coins", "Tools", "Modern interpretation", "Inscriptions"], answer: 2 },
  { question: "Earliest evidence of humans comes from?", options: ["Texts", "Coins", "Archaeology", "Myths"], answer: 2 },
  { question: "History involves?", options: ["Guesswork", "Interpretation of evidence", "Memorisation", "Storytelling"], answer: 1 },
  { question: "Why is archaeology crucial for early history?", options: ["Bias correction", "Lack of written records", "Foreign views", "Religion"], answer: 1 },
  { question: "Which factor affects manuscript preservation most?", options: ["Language", "Climate", "Script", "Religion"], answer: 1 },
  { question: "Humans began recording ideas after?", options: ["Fire discovery", "Tool making", "Food production", "Migration"], answer: 2 },
  { question: "Which is material culture?", options: ["Ideas", "Beliefs", "Tools", "Language"], answer: 2 },
  { question: "History changes because?", options: ["Rulers change", "New evidence emerges", "Texts decay", "Languages evolve"], answer: 1 },

  { question: "Which source best reflects economic conditions?", options: ["Coins", "Caves", "Pottery", "Clothes"], answer: 0 },
  { question: "Fundamental activity for early humans was?", options: ["Writing", "Trade", "Hunting and gathering", "Farming"], answer: 2 },
  { question: "Multiple scripts indicate?", options: ["Uniformity", "Regional diversity", "Foreign rule", "Religious control"], answer: 1 },
  { question: "Step-by-step history study implies?", options: ["Guessing", "Scientific reconstruction", "Memorising", "Chronology only"], answer: 1 },
  { question: "Which source shows everyday life best?", options: ["Royal records", "Excavated tools", "Legends", "Foreign texts"], answer: 1 },
  { question: "Pottery helps understand?", options: ["Politics", "Lifestyle and technology", "Religion", "Scripts"], answer: 1 },
  { question: "Most durable source is?", options: ["Paper", "Palm leaf", "Stone inscription", "Birch bark"], answer: 2 },
  { question: "Which is NOT studied by archaeology?", options: ["Tools", "Buildings", "Coins", "Future events"], answer: 3 },
  { question: "Early humans depended on?", options: ["Trade", "Nature", "Agriculture", "Writing"], answer: 1 },
  { question: "Central theme of chapter is?", options: ["Kings", "Studying history", "Religion", "Chronology"], answer: 1 },

  // 60–100 (conceptual reinforcement)
  { question: "Which source is written evidence?", options: ["Tools", "Coins", "Manuscripts", "Pottery"], answer: 2 },
  { question: "Which source is material evidence?", options: ["Texts", "Coins", "Tools", "Legends"], answer: 2 },
  { question: "Why do scripts change?", options: ["Climate", "Language evolution", "Religion", "Trade"], answer: 1 },
  { question: "Which period lacks written records?", options: ["Medieval", "Modern", "Prehistoric", "Ancient"], answer: 2 },
  { question: "Who studies material remains?", options: ["Historians", "Archaeologists", "Anthropologists", "Geographers"], answer: 1 },
  { question: "Which is NOT material culture?", options: ["Tools", "Houses", "Beliefs", "Pottery"], answer: 2 },
  { question: "Which helped humans settle permanently?", options: ["Trade", "Agriculture", "Writing", "Art"], answer: 1 },
  { question: "Why is history interdisciplinary?", options: ["Uses many sciences", "Political nature", "Religious bias", "Colonial influence"], answer: 0 },
  { question: "Which source helps date history?", options: ["Coins", "Caves", "Clothes", "Myths"], answer: 0 },
  { question: "Which is the best definition of history?", options: ["Past events", "Study of kings", "Study of past human life", "Study of wars"], answer: 2 },
  { question: "Which of the following best explains why history is not static?", options: ["Events repeat", "Sources decay", "New evidence is discovered", "Languages disappear"], answer: 2 },
  { question: "Which activity marks the beginning of cultural development?", options: ["Tool making", "Recording ideas", "Hunting", "Migration"], answer: 1 },
  { question: "Which source provides direct evidence of administrative orders?", options: ["Coins", "Inscriptions", "Tools", "Pottery"], answer: 1 },
  { question: "Which material was commonly used for inscriptions?", options: ["Palm leaf", "Birch bark", "Stone and metal", "Cloth"], answer: 2 },
  { question: "The study of ancient scripts is essential mainly to?", options: ["Improve handwriting", "Understand literature", "Read inscriptions", "Learn grammar"], answer: 2 },

  { question: "Which of the following best indicates social organisation?", options: ["Weapons", "Houses", "Coins", "Paintings"], answer: 1 },
  { question: "Why are early settlements often found near rivers?", options: ["Defense", "Trade", "Water availability", "Religious reasons"], answer: 2 },
  { question: "Which of the following is evidence of early human technology?", options: ["Myths", "Stone tools", "Manuscripts", "Legends"], answer: 1 },
  { question: "Which factor most influenced early human lifestyle?", options: ["Politics", "Environment", "Religion", "Writing"], answer: 1 },
  { question: "Which source best helps understand prehistoric diet?", options: ["Coins", "Tools and bones", "Manuscripts", "Inscriptions"], answer: 1 },

  { question: "Which of the following is NOT written evidence?", options: ["Manuscripts", "Inscriptions", "Coins", "Tools"], answer: 3 },
  { question: "Why do historians cross-check multiple sources?", options: ["To reduce syllabus", "To avoid bias", "To memorise facts", "To follow tradition"], answer: 1 },
  { question: "Which of the following shows continuity in history?", options: ["Sudden change", "Gradual tool improvement", "Wars", "Invasions"], answer: 1 },
  { question: "Which activity required cooperation among early humans?", options: ["Writing", "Hunting large animals", "Painting", "Sleeping"], answer: 1 },
  { question: "Which of the following best reflects material culture?", options: ["Customs", "Tools", "Beliefs", "Language"], answer: 1 },

  { question: "Which source is most vulnerable to climatic damage?", options: ["Stone inscriptions", "Copper plates", "Palm leaf manuscripts", "Rock shelters"], answer: 2 },
  { question: "Which activity led to the formation of villages?", options: ["Trade", "Agriculture", "Hunting", "Tool making"], answer: 1 },
  { question: "Which of the following best indicates economic exchange?", options: ["Coins", "Paintings", "Caves", "Clothes"], answer: 0 },
  { question: "Which of the following would archaeologists study?", options: ["Future plans", "Material remains", "Predictions", "Philosophy"], answer: 1 },
  { question: "Why are early historical records limited?", options: ["Lack of historians", "Limited writing systems", "Political control", "Religious bans"], answer: 1 },

  { question: "Which source helps identify technological advancement over time?", options: ["Improved tools", "Legends", "Religious texts", "Chronicles"], answer: 0 },
  { question: "Which of the following reflects adaptation to environment?", options: ["Clothing type", "Coin design", "Script style", "Inscriptions"], answer: 0 },
  { question: "Which is the primary concern of history as per NCERT?", options: ["Dates", "Human activities", "Rulers", "Battles"], answer: 1 },
  { question: "Which of the following is an example of archaeological site?", options: ["Library", "Excavated settlement", "Archive", "Museum"], answer: 1 },
  { question: "Why is pottery important to historians?", options: ["Artistic beauty", "Dating and daily life", "Religious meaning", "Political authority"], answer: 1 },

  { question: "Which development made record-keeping possible?", options: ["Tool making", "Writing", "Hunting", "Migration"], answer: 1 },
  { question: "Which of the following best represents subsistence activity?", options: ["Trade", "Hunting", "Writing", "Administration"], answer: 1 },
  { question: "Which source best helps understand settlement patterns?", options: ["Coins", "Excavated houses", "Manuscripts", "Paintings"], answer: 1 },
  { question: "Which of the following is NOT an archaeological remain?", options: ["Tools", "Bones", "Manuscripts", "Pottery"], answer: 2 },
  { question: "Why do historians study food habits of early humans?", options: ["Cultural curiosity", "Understanding survival strategies", "Religious practices", "Political systems"], answer: 1 },

  { question: "Which factor led to population growth in early societies?", options: ["Writing", "Agriculture", "Trade", "Art"], answer: 1 },
  { question: "Which source provides evidence of craft activities?", options: ["Pottery", "Coins", "Inscriptions", "Texts"], answer: 0 },
  { question: "Which of the following best shows human innovation?", options: ["Stone tools", "Natural caves", "Rivers", "Forests"], answer: 0 },
  { question: "Which of the following is a non-material source?", options: ["Tools", "Houses", "Ideas", "Pottery"], answer: 2 },
  { question: "Which source is most useful for understanding social hierarchy?", options: ["Burials", "Clothes", "Caves", "Paintings"], answer: 0 },

  { question: "Which activity signifies control over nature?", options: ["Fire use", "Migration", "Writing", "Trade"], answer: 0 },
  { question: "Which source reflects artistic expression of early humans?", options: ["Cave paintings", "Coins", "Manuscripts", "Inscriptions"], answer: 0 },
  { question: "Why do early historical studies rely more on archaeology?", options: ["More accuracy", "Absence of texts", "Political bias", "Religious influence"], answer: 1 },
  { question: "Which of the following best indicates organised life?", options: ["Temporary shelters", "Permanent houses", "Random tools", "Natural caves"], answer: 1 },
  { question: "Which source best helps trace change over long periods?", options: ["Tool sequences", "Single inscription", "One manuscript", "Legend"], answer: 0 }
];



const form = document.getElementById("quizForm");

questions.forEach((q, i) => {
  form.innerHTML += `<p>${i+1}. ${q.question}</p>`;
  q.options.forEach((opt, j) => {
    form.innerHTML += `
      <label>
        <input type="radio" name="q${i}" value="${j}">
        ${opt}
      </label><br>`;
  });
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === q.answer) score++;
  });
  document.getElementById("result").innerText =
    `Score: ${score}/${questions.length}`;
}
