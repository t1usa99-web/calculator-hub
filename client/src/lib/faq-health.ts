// FAQ content for health calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.

import type { FAQ } from "./calculator-registry";

export const BAC_FAQS: FAQ[] = [
  {
    question: "How long does it take to sober up from alcohol?",
    answer:
      "The body metabolizes alcohol at a relatively fixed rate of approximately 0.015% BAC per hour, regardless of body size, food, or activity level. This means if your BAC is 0.12%, it will take roughly 8 hours to reach 0.0%. The process cannot be accelerated by coffee, cold showers, exercise, or food — only time works. Factors like gender, weight, and food intake affect peak BAC, not the rate of elimination. Plan ahead: use a designated driver, taxi, rideshare, or public transportation. Never drive after consuming alcohol, even if you feel fine. If someone shows signs of alcohol poisoning (unresponsiveness, slow breathing), call emergency services immediately.",
  },
  {
    question: "What does a BAC of 0.08% mean for driving?",
    answer:
      "A BAC of 0.08% is the legal limit for driving in most US states for adults (21+). At this level, impairment is significant: reaction time is slowed, judgment is substantially impaired, and coordination is noticeably affected. However, impairment begins much earlier — at 0.02–0.06%, subtle changes in mood and driving ability occur. The safest choice is 0.0% BAC if you will drive. If you've consumed any alcohol, use a designated driver or rideshare. Even 'one drink' can impair judgment and increase crash risk. Commercial drivers, underage drinkers, and repeat offenders face stricter legal limits (0.04% and 0.02%, respectively).",
  },
  {
    question: "How does gender affect blood alcohol concentration?",
    answer:
      "Women reach higher BAC levels than men when consuming the same amount of alcohol because women typically have less body water and lower levels of an enzyme (alcohol dehydrogenase) that breaks down alcohol. This biological difference, combined with lower average body weight, means women's peak BAC is roughly 10–15% higher. The calculator uses distribution ratios of 0.73 for men and 0.66 for women, reflecting these physiological differences. Hormonal fluctuations during the menstrual cycle can also affect how quickly alcohol is metabolized. Individual variation is substantial — metabolism, liver health, medication, and food all influence absorption and elimination rates beyond gender alone.",
  },
  {
    question: "What are the signs of alcohol impairment at different BAC levels?",
    answer:
      "At <strong>0.02–0.06%</strong>, subtle effects appear: warmth, slight mood elevation, minor attention loss. At <strong>0.06–0.15%</strong>, judgment becomes noticeably impaired, reaction time slows, and fine motor control decreases — this is the range where driving is dangerous. At <strong>0.15–0.25%</strong>, speech slurs, balance is affected, and complex tasks become difficult. At <strong>0.25–0.35%</strong>, severe impairment occurs with potential loss of consciousness. Above 0.35%, vital functions (breathing, heart rate) are at serious risk. Alcohol depresses the central nervous system, impairing judgment before physical clumsiness becomes obvious. Many people feel fine at 0.05–0.08% but are measurably impaired and unsafe to drive.",
  },
  {
    question: "Can eating food slow down alcohol absorption?",
    answer:
      "Yes, eating before or while drinking significantly slows alcohol absorption, delaying peak BAC by 30–60 minutes and reducing the maximum BAC by 20–30%. Food (especially protein, fat, and carbs) slows gastric emptying, giving the stomach more time to absorb alcohol gradually. However, food does <strong>not</strong> reduce total alcohol metabolism — it only delays when peak impairment occurs. This is why 'eating before drinking' is wise (safer to start at lower BAC) but doesn't mean you can drink more safely. Staying hydrated and eating balanced meals helps you make better decisions while drinking. Never skip eating to 'make alcohol hit harder,' and avoid binge drinking regardless of food intake.",
  },
];

export const BMR_FAQS: FAQ[] = [
  {
    question: "What is my Basal Metabolic Rate and why does it matter?",
    answer:
      "Your Basal Metabolic Rate (BMR) is the number of calories your body burns at rest just to maintain basic functions (breathing, heart rate, cell production, body temperature). Your BMR accounts for roughly 60–75% of your total daily calorie burn. Knowing your BMR helps you understand how many calories you need to maintain, lose, or gain weight. The Mifflin-St Jeor equation (used by this calculator) estimates BMR based on age, gender, weight, and height. A 30-year-old woman weighing 150 lbs and 5'6\" tall might have a BMR of ~1,500 calories, meaning she burns at least that much daily before exercise or activity. Understanding your BMR is the foundation for any realistic nutrition or weight management plan.",
  },
  {
    question: "How is BMR different from TDEE (Total Daily Energy Expenditure)?",
    answer:
      "BMR is the calories burned at complete rest, while TDEE is your total daily burn including activity, exercise, and digestion. TDEE is estimated by multiplying BMR by an activity factor: sedentary (1.2), lightly active (1.375), moderately active (1.55), very active (1.725), or extremely active (1.9). For example, if your BMR is 1,500 calories and you're moderately active, your TDEE is ~2,325 calories. To lose weight, you'd eat below TDEE; to gain, above it. TDEE accounts for real-world life, while BMR is a controlled-rest baseline. Our TDEE calculator multiplies your BMR by activity level; use that for nutrition planning rather than BMR alone.",
  },
  {
    question: "Does BMR change as I age or lose weight?",
    answer:
      "Yes, BMR typically decreases with age — roughly 2% per decade after age 30 — because you naturally lose muscle mass over time and metabolic rate slows. Weight loss also lowers BMR: losing muscle reduces your resting metabolism. This is why it's harder to maintain weight loss over time without maintaining muscle through strength training. The reverse is true for muscle gain: building muscle increases BMR. Hormones, genetics, medical conditions (thyroid disorders), and medications also affect BMR. After significant weight loss, recalculate your BMR to ensure your calorie targets reflect your new body. Prioritize resistance training to preserve muscle and metabolic rate during any diet.",
  },
  {
    question: "Is the Mifflin-St Jeor equation accurate for everyone?",
    answer:
      "The Mifflin-St Jeor equation is one of the most validated models and works well for most adults, but it's an estimate with a margin of error of ±10–20% for individuals. It's less accurate for very muscular people (overestimates their BMR), very obese people (overestimates), and those with metabolic disorders. The equation uses only height, weight, age, and gender — it doesn't account for genetics, hormones, medications, or lifestyle. Individual metabolic rates vary by 15–30% even among similar people. The best approach is to use this calculator as a starting point, track your real-world results (calories eaten vs. weight change), and adjust based on your personal response. If you're not seeing expected results, consult a registered dietitian.",
  },
  {
    question: "Can I increase my BMR to burn more calories at rest?",
    answer:
      "Your BMR is largely determined by genetics and age, but you can increase it modestly through muscle building and hormonal health. <strong>Build muscle:</strong> Resistance training and adequate protein increase lean muscle mass, which burns more calories at rest than fat. Adding 5 lbs of muscle boosts BMR by ~100–125 calories daily. <strong>Optimize hormones:</strong> Adequate sleep, stress management, and thyroid health support metabolic rate. <strong>Eat enough protein:</strong> High-protein diets have a higher thermic effect (you burn calories digesting them). <strong>Stay active:</strong> Regular cardio and strength training improve metabolic efficiency. However, extreme calorie restriction actually <strong>lowers</strong> BMR as your body conserves energy. Sustainable weight management requires reasonable calorie deficits, not starvation.",
  },
];

export const BODY_FAT_FAQS: FAQ[] = [
  {
    question: "What is a healthy body fat percentage for my age and gender?",
    answer:
      "Body fat percentage varies by age and gender. For women: 20–24% is considered essential-to-fit, 25–31% is average, and 32%+ is obese. For men: 8–15% is lean-to-fit, 16–24% is average, and 25%+ is obese. Essential body fat (10–13% for women, 2–5% for men) is necessary for organ function and survival. Athletes often maintain lower percentages (10–15% for women, 6–13% for men). Older adults generally have higher percentages due to age-related muscle loss. Body fat percentage is more informative than BMI because it distinguishes muscle from fat. Two people with the same BMI can have very different body compositions. For optimal health, aim for the average or lean ranges and prioritize muscle maintenance through strength training.",
  },
  {
    question: "How accurate are body fat calculators using only measurements?",
    answer:
      "Prediction formulas using measurements (like the US Navy calculator used here) typically have a margin of error of ±3–5% for individuals. These equations work reasonably well for sedentary-to-moderately active adults but are less accurate for very muscular or obese individuals. The Navy formula relies on circumference measurements, which is easier than other methods but less precise than gold-standard methods like DEXA scanning (±1–2% error) or hydrostatic weighing (±1.5% error). Bioelectrical impedance analyzers (BIA) and calipers vary widely in accuracy. For reliable tracking, use the same method consistently; the absolute number matters less than trends over time. If you're building muscle, your scale weight might not change even as your body composition improves.",
  },
  {
    question: "Why do I need to know my body fat percentage?",
    answer:
      "Body fat percentage reveals your actual body composition better than weight or BMI alone. Two people can weigh the same but look completely different depending on muscle vs. fat ratio. Knowing your body fat helps you: <strong>set realistic goals</strong> (aiming for a healthy range), <strong>assess fitness</strong> (more informative than scale weight), <strong>evaluate health risk</strong> (high visceral fat correlates with metabolic disease), and <strong>track progress</strong> during diet or exercise programs. Even if your weight doesn't change, losing fat while gaining muscle is a positive outcome reflected in body fat percentage. Healthcare providers increasingly use body fat percentage alongside BMI for health assessments, especially for metabolic disease risk.",
  },
  {
    question: "How can I reduce my body fat percentage?",
    answer:
      "Body fat reduction requires a calorie deficit and muscle preservation: <strong>Create a modest deficit:</strong> Eat 300–500 calories below your TDEE. Large deficits cause muscle loss and metabolic adaptation. <strong>Prioritize protein:</strong> Consume 0.8–1g per pound of body weight to preserve muscle during the deficit. <strong>Strength train:</strong> 3–4 sessions per week signals your body to retain muscle. <strong>Cardio:</strong> 150–300 minutes of moderate cardio supports a deficit without excessive muscle loss. <strong>Sleep:</strong> 7–9 hours nightly improves hormonal balance and fat loss. <strong>Manage stress:</strong> High cortisol promotes fat storage, especially visceral fat. Expect 1–2 lbs of fat loss per week; faster loss usually includes muscle loss. Sustainable fat loss takes time; crash diets and extreme exercise cause muscle loss and metabolic damage.",
  },
  {
    question: "Is body fat percentage related to cardiovascular health?",
    answer:
      "Body fat percentage correlates with cardiovascular risk, but <strong>where</strong> fat is stored matters most. Visceral fat (around organs) is metabolically active and strongly linked to heart disease, stroke, and type 2 diabetes. Subcutaneous fat (under skin) is less harmful. A person with 25% body fat concentrated around the belly faces higher risk than someone with 30% distributed more evenly. Fitness also modifies risk: a fit person with higher body fat has better cardiovascular health than a sedentary person with lower body fat. Factors beyond body fat — cholesterol, blood pressure, blood sugar, fitness level, and smoking — all affect cardiac health. Regular exercise and healthy eating reduce visceral fat even without significant weight loss.",
  },
];

export const IDEAL_WEIGHT_FAQS: FAQ[] = [
  {
    question: "What is 'ideal weight' and is it realistic?",
    answer:
      "'Ideal weight' is a range estimated from formulas like Devine, Robinson, or Miller. These formulas provide population-average targets based on height, gender, and age — useful benchmarks but not universal standards. Ideal weight varies by frame size, muscle mass, genetics, and bone density. Two people with the same height and gender can have healthy body compositions at 10–20 lbs apart. The term 'ideal' can be misleading because health is multifactorial: a person at 170 lbs with low body fat and high fitness is healthier than someone at 145 lbs who is sedentary. Focus more on body composition, fitness level, and metabolic health than a specific number on the scale. Your ideal weight is the range where you feel good, have energy, fit your clothes, and maintain your metrics long-term.",
  },
  {
    question: "Which formula for ideal weight is most accurate?",
    answer:
      "The most commonly used formulas are: <strong>Devine:</strong> Men 50 kg + 2.3 kg per inch over 5', women 45.5 kg + 2.3 kg per inch over 5'. <strong>Robinson:</strong> Men 52 kg + 1.9 kg per inch, women 49 kg + 1.7 kg per inch. <strong>Miller:</strong> Men 56.2 kg + 1.41 kg per inch, women 53.1 kg + 1.36 kg per inch. Each formula gives slightly different results. None is definitively 'most accurate' for individuals because ideal weight varies by frame size, muscle mass, and genetics. These formulas work best as starting estimates, not prescriptions. Body composition matters far more than hitting an exact weight. A person with a healthy BMI (18.5–24.9), low body fat percentage, strong fitness, and stable metrics is likely at their ideal weight regardless of the formula.",
  },
  {
    question: "How do genetics affect my ideal weight?",
    answer:
      "Genetics strongly influence your natural weight set-point, metabolism, body shape, and where you carry fat. Twin studies show that genetics account for 40–70% of weight variation. Some people naturally maintain lower weights with less effort; others find their body resists dropping below a certain threshold (set-point theory). Genetic factors also affect: <strong>Metabolic rate:</strong> Some people have naturally faster or slower metabolism. <strong>Hunger signals:</strong> Hormones like leptin regulate appetite differently in different people. <strong>Fat distribution:</strong> Genetics determine if you're apple- or pear-shaped. <strong>Muscle capacity:</strong> Some gain muscle easily; others struggle. Rather than fighting your genetics, find your own healthy range (where you feel good, perform well) which may differ from average formulas.",
  },
  {
    question: "Should I aim for the low or high end of the ideal weight range?",
    answer:
      "Choose the end of the range that aligns with your body composition, fitness, and how you feel. <strong>Aim for the lower end if:</strong> You naturally lean toward lower body fat, you have a small frame, you want visible muscle definition, or you prefer lighter activity. <strong>Aim for the higher end if:</strong> You're muscular (muscle weighs more than fat), you have a larger frame, you prefer to feel strong and full, or that weight feels sustainable long-term. The healthiest weight is one you can maintain consistently while feeling energetic, fitting your clothes, and maintaining good health markers. Obsessing over an exact number increases stress and often backfires. Use the range as a guide, but prioritize body composition, fitness, and how you feel above all else.",
  },
  {
    question: "What happens if I'm significantly above or below ideal weight?",
    answer:
      "Significant weight deviations (10%+ above or below the range) warrant attention, though context matters. <strong>Above ideal weight:</strong> Excess weight, especially visceral fat, increases risk of type 2 diabetes, cardiovascular disease, hypertension, sleep apnea, and joint stress. A modest calorie deficit (300–500 calories/day), strength training, and 150+ minutes of cardio can safely reduce weight. <strong>Below ideal weight:</strong> Underweight (BMI below 18.5) increases infection risk, bone loss, anemia, and fertility issues. Eating nutrient-dense foods and strength training help build healthy weight. Important: sudden large changes or difficulty maintaining weight can signal medical issues (thyroid, metabolic, psychological). Consult a healthcare provider if weight dramatically shifts without intentional change.",
  },
];

export const MACRO_FAQS: FAQ[] = [
  {
    question: "What are macronutrients and how much do I need daily?",
    answer:
      "Macronutrients are carbohydrates, protein, and fat — your body's primary energy sources. <strong>Protein:</strong> 0.8–1g per pound of body weight; supports muscle, immune function, hormones. <strong>Fat:</strong> 0.3–0.4g per pound; essential for hormones, brain, nutrient absorption (aim for 20–35% of calories). <strong>Carbs:</strong> Fill the remaining calories; fuel for brain and muscle. Example: a 160 lb person eating 2,400 calories (fat loss) needs ~160g protein, 50–60g fat, ~260g carbs. Ratios vary by goal: athletes may prioritize higher protein (1.2–2g/lb), low-carb dieters reduce carbs, endurance athletes increase carbs. The 'best' ratio depends on your activity, preferences, and goals. Consistency matters more than perfection — track for 2–4 weeks to see real results.",
  },
  {
    question: "Why is protein so important and can I eat too much?",
    answer:
      "Protein supports muscle maintenance and growth, immune function, enzyme production, and satiety (feeling full longer). Higher protein intake (0.8–1g per lb of body weight) is especially important during weight loss or strength training to preserve muscle. <strong>Can you eat too much?</strong> For healthy people, excess protein is rare — your body simply burns it or excretes excess amino acids. The 'too much protein damages kidneys' claim is a myth for people with healthy kidney function. People with kidney disease should limit protein per their doctor's guidance. Excess protein adds calories, so consuming 2g per lb when 0.8–1g suffices may contribute to weight gain. Focus on hitting your target range rather than excessive amounts; quality sources (meat, fish, eggs, dairy, legumes) matter more than quantity alone.",
  },
  {
    question: "How do macros change for different fitness goals?",
    answer:
      "Macronutrient ratios should shift based on goals: <strong>Weight loss:</strong> Higher protein (1g+ per lb) preserves muscle in a deficit; reduce carbs or fats by 300–500 calories. <strong>Muscle gain:</strong> Higher protein (0.8–1g per lb), calorie surplus of 300–500, adequate carbs for training energy. <strong>Endurance:</strong> Higher carbs (5–10g per kg of body weight) fuel long efforts, adequate protein, moderate fat. <strong>General fitness:</strong> Balanced ratio — 30% protein, 40% carbs, 30% fat. Calorie balance is always fundamental: you can't gain muscle in a large deficit or lose fat in a large surplus, regardless of macros. Experiment: track macros for 4 weeks, assess changes, adjust based on results. Everyone responds slightly differently.",
  },
  {
    question: "Is there a best time to eat carbs or protein during the day?",
    answer:
      "The research is nuanced: nutrient timing matters less than total daily intake. <strong>Post-workout:</strong> Consuming protein and carbs within 1–2 hours after training supports recovery, but total daily protein is more important than exact timing. <strong>Throughout the day:</strong> Spreading protein across meals (vs. one large meal) may slightly improve muscle protein synthesis, though the effect is modest. <strong>Carbs:</strong> Eating carbs around training (before or after) provides energy; for weight loss, timing is less critical than staying in a calorie deficit. <strong>Bottom line:</strong> Consistent daily totals matter far more than precise timing. If intermittent fasting works for you, fine. If you prefer 5 small meals, also fine. Focus on hitting your daily macro targets and calories, eating mostly whole foods, and staying consistent for 4+ weeks.",
  },
  {
    question: "How do I adjust macros if I'm not seeing results?",
    answer:
      "After 3–4 weeks of consistent tracking, if progress stalls: <strong>For fat loss:</strong> Reduce calories by 100–200 (usually via carbs or fats, not protein). Ensure you're weighing food accurately — many underestimate portions. Increase activity or reduce calorie target by 5–10%. <strong>For muscle gain:</strong> Add 100–200 calories (usually carbs) and ensure surplus is consistent. Increase training volume and protein is adequate. <strong>General stall:</strong> Your body adapts; periodically vary macros (e.g., alternate higher-carb and lower-carb days). Stress, sleep, and hormones affect results despite perfect macros. <strong>Always verify tracking:</strong> Use a food scale, not eyeballing. Apps like MyFitnessPal can contain errors; double-check entries. If you're genuinely stuck despite accurate tracking, consult a registered dietitian.",
  },
];

export const PACE_FAQS: FAQ[] = [
  {
    question: "How is running pace calculated and what does it mean?",
    answer:
      "Pace is the time required to cover one unit of distance. For running, it's typically minutes per mile (or kilometers). Formula: <strong>Pace (min/mile) = Time (minutes) ÷ Distance (miles)</strong>. If you run 5 miles in 40 minutes, your pace is 8 minutes per mile. Pace is the inverse of speed: a pace of 8 min/mi equals a speed of 7.5 mph. Pace matters more than speed for runners because it accounts for different distances. A 6:00 min/mi pace is elite; 7:30 min/mi is competitive amateur; 10:00 min/mi is beginner-to-intermediate; 12:00+ is recreational/weight loss running. Your goal pace depends on fitness level, training, age, and experience. Beginners should prioritize consistency over speed; pace improvements come naturally with training.",
  },
  {
    question: "What factors affect my running pace?",
    answer:
      "<strong>Fitness level:</strong> Aerobic capacity (VO2 max) is the largest determinant; training improves it. <strong>Age:</strong> Peak running performance is typically 25–35; pace declines ~0.5% annually after 35. <strong>Body weight:</strong> Lighter runners are generally faster; 10 lb weight loss improves pace. <strong>Terrain:</strong> Hills, trails, and sand slow pace significantly versus flat roads. <strong>Weather:</strong> Heat, humidity, wind, and cold all impair pace. <strong>Effort level:</strong> Easy runs are slower (50–70% max heart rate); tempo runs faster (80–85%); speed work fastest. <strong>Experience:</strong> Running economy (efficiency) improves with training. <strong>Genetics:</strong> Some people are naturally faster despite similar training. Don't compare your pace to others; track your own improvements. Your PR (personal record) at a given distance is a better measure of fitness than absolute pace.",
  },
  {
    question: "How do I improve my running pace?",
    answer:
      "<strong>Build aerobic base:</strong> 80% of running should be easy, conversational pace. This develops aerobic capacity and fat adaptation. <strong>Add speed work:</strong> 1–2 times per week, do tempo runs, interval training, or fartlek (unstructured speed play). These stress the aerobic system and improve running economy. <strong>Strength training:</strong> 2–3 sessions per week strengthen legs, improve power, and reduce injury risk. <strong>Reduce weight:</strong> Each pound lost improves pace; prioritize this if overweight. <strong>Race specificity:</strong> Train at paces near your goal. A 10K goal pace of 7:00 min/mi requires regular training at or near that intensity. <strong>Recovery:</strong> Adequate sleep, nutrition, and rest days are essential; injury or burnout ruins progress. Expect 1–2% pace improvement per month with consistent training; larger jumps usually require addressing fitness, weight, or effort imbalance.",
  },
  {
    question: "How do pace and heart rate relate to running effort?",
    answer:
      "Heart rate is a better measure of effort than pace because pace doesn't account for fatigue, weather, or fitness changes. <strong>Easy pace:</strong> 50–70% max HR (conversational). <strong>Steady/tempo pace:</strong> 75–85% max HR (challenging but sustainable). <strong>VO2 max/interval pace:</strong> 85–95% max HR (hard, sustainable for 3–8 minutes). <strong>Sprint pace:</strong> 95–100% max HR (short efforts only). As you become fitter, your pace at a given heart rate improves (you run faster at the same effort). This is why beginners struggling to hold 8:00 min/mi may eventually hold 6:00 min/mi at the same heart rate. Using heart rate zones ensures you're training at the correct intensity regardless of pace, terrain, or conditions. Consider a heart rate monitor or sports watch for zone training.",
  },
  {
    question: "What's a reasonable goal pace for my distance?",
    answer:
      "Goal pace depends on your current fitness and race distance: <strong>5K:</strong> Beginners: 10–12 min/mi; intermediate: 8–9 min/mi; competitive: sub-7 min/mi. <strong>10K:</strong> Beginners: 11–13 min/mi; intermediate: 9–10 min/mi; competitive: sub-7:30 min/mi. <strong>Half marathon:</strong> Beginners: 12–14 min/mi; intermediate: 10–11 min/mi; competitive: sub-8 min/mi. <strong>Marathon:</strong> Beginners: 13–15 min/mi; intermediate: 11–12 min/mi; competitive: sub-8:30 min/mi. Set a goal pace 30–60 seconds slower than your current best for that distance. Run the race at goal pace, not faster, to avoid hitting a wall mid-race. Train at goal pace and slightly faster for 6–8 weeks before race day. Adjust goals upward as fitness improves; setting realistic, achievable goals prevents burnout and injury.",
  },
];

export const PREGNANCY_FAQS: FAQ[] = [
  {
    question: "How accurate is the estimated due date and when is it calculated?",
    answer:
      "The estimated due date (EDD) is calculated as 280 days (40 weeks) from the last menstrual period (LMP), assuming a 28-day cycle with ovulation on day 14. Most babies arrive within 2 weeks of the EDD (38–42 weeks gestation). The EDD is most accurate when determined by early ultrasound (8–13 weeks), which has ±3–5 days error. LMP-based calculation has ±3–4 weeks error, especially for irregular cycles. <strong>Important:</strong> Only ~5% of babies arrive exactly on the EDD; the EDD is a best estimate, not a guarantee. Your healthcare provider will monitor you through pregnancy and may induce labor or recommend delivery if you go significantly past 42 weeks due to placental aging. Always consult your provider for your specific due date, not a calculator.",
  },
  {
    question: "What is gestational age and how does it differ from fetal age?",
    answer:
      "<strong>Gestational age</strong> is measured from the first day of the last menstrual period (LMP) — the standard clinical measure. <strong>Fetal (or conception) age</strong> is the actual age of the fetus since conception, typically 2 weeks less than gestational age (because ovulation occurs ~14 days after LMP). Medical providers use gestational age for all milestones, ultrasound dating, and prenatal testing because it's easier to track. When a pregnancy is '10 weeks gestation,' the fetus is ~8 weeks old from conception. This can confuse parents: many assume 'weeks pregnant' means weeks since conception. Always clarify with your healthcare provider which age they're referring to. Tests like amniocentesis are timed by gestational age, not conception age.",
  },
  {
    question: "What happens during each trimester of pregnancy?",
    answer:
      "<strong>First trimester (weeks 1–13):</strong> The fetus develops from a single cell; critical organ formation occurs. Major miscarriage risk is this period. Morning sickness, fatigue, and breast tenderness are common. <strong>Second trimester (weeks 14–26):</strong> The fetus grows rapidly; gender is visible on ultrasound; you may feel movement. Nausea often subsides; energy returns. <strong>Third trimester (weeks 27–40):</strong> The fetus gains weight; your body prepares for birth. Backache, swelling, and sleep difficulty are common. Braxton-Hicks (practice contractions) may occur. Each trimester brings different physical and emotional changes. Your healthcare provider monitors you for complications throughout. Prenatal care, nutrition, exercise, and stress management during all trimesters support a healthy pregnancy.",
  },
  {
    question: "What is the difference between LMP and conception date?",
    answer:
      "The <strong>last menstrual period (LMP)</strong> is the first day of your last period before pregnancy. The <strong>conception date</strong> is when sperm fertilized the egg, typically 10–14 days after LMP (assuming ovulation ~14 days after a 28-day cycle). The gap exists because healthcare providers can't pinpoint conception exactly without ultrasound but can usually identify LMP from memory. Ultrasound (especially early ultrasound) is more accurate than LMP calculation, especially for irregular cycles. If your cycle is longer than 28 days, your conception date is later than the standard 14-day assumption; if shorter, earlier. <strong>For dating:</strong> Always share your LMP with your healthcare provider; they'll adjust dates based on early ultrasound findings.",
  },
  {
    question: "What are some early signs of pregnancy?",
    answer:
      "<strong>Common early signs (weeks 1–8):</strong> Missed period, breast tenderness, fatigue, nausea or vomiting (morning sickness), mood swings, food cravings or aversions, frequent urination, and cramping (similar to period cramps, but lighter). <strong>Less common:</strong> Heightened sense of smell, dizziness, constipation, or headaches. Symptoms vary widely: some women report significant nausea and fatigue; others feel fine early on. Symptoms alone are not reliable for pregnancy confirmation — a positive urine or blood test (measuring human chorionic gonadotropin, hCG) confirms pregnancy. Tests are most accurate after a missed period. If you suspect pregnancy, take a test or contact your healthcare provider for confirmation and prenatal care guidance.",
  },
];

export const TDEE_FAQS: FAQ[] = [
  {
    question: "What is TDEE and how does it differ from BMR?",
    answer:
      "Your Total Daily Energy Expenditure (TDEE) is the total calories you burn in a day, including rest, digestion, and all activity. BMR (Basal Metabolic Rate) is calories burned at rest only. TDEE is calculated as BMR × activity factor: sedentary (1.2), lightly active (1.375), moderately active (1.55), very active (1.725), extremely active (1.9). Example: a 160 lb person with a BMR of 1,600 calories and moderate activity (exercise 3–5 days per week) has a TDEE of ~2,480 calories. To lose weight, eat below TDEE (typically 300–500 calories under). To gain weight or muscle, eat above TDEE. To maintain, eat at TDEE. TDEE is your starting point for any nutrition plan and should be recalculated after major weight changes.",
  },
  {
    question: "How do I know which activity level to use for my TDEE?",
    answer:
      "<strong>Sedentary (1.2):</strong> Little or no structured exercise; mostly sitting (office jobs, limited activity). <strong>Lightly active (1.375):</strong> Light exercise 1–3 days/week or daily light activity (casual walking, light gardening). <strong>Moderately active (1.55):</strong> Moderate exercise 3–5 days/week or active job (fitness enthusiast, moderate job physical demands). <strong>Very active (1.725):</strong> Hard exercise 6–7 days/week or physically demanding job (athlete, laborer). <strong>Extremely active (1.9):</strong> Intense daily training or extremely demanding job. Most people fall into 'lightly' or 'moderately' active. When in doubt, err conservative (use lower multiplier); you can always adjust based on real-world results. Track your weight weekly for 3–4 weeks; if no change at your estimated TDEE, adjust by ±100–200 calories.",
  },
  {
    question: "How many calories should I eat per day to lose weight?",
    answer:
      "A safe and sustainable deficit is 300–500 calories below TDEE, resulting in 0.5–1 lb weight loss per week. Example: if your TDEE is 2,400 calories, eating 1,900–2,100 supports gradual fat loss while preserving muscle. Larger deficits (800+ calories below TDEE) cause muscle loss, metabolic slowdown, and increased hunger — generally unsustainable. <strong>Minimum intakes:</strong> Women shouldn't drop below 1,200 calories; men below 1,500 (without medical supervision) because meeting nutrient needs becomes difficult. Very obese individuals may support larger deficits initially; consult a dietitian. Prioritize protein (0.8–1g per lb), moderate exercise, and 7–9 hours sleep to preserve muscle. Expect 1–2 lbs loss per week; faster loss is usually water and muscle, not fat.",
  },
  {
    question: "Why should I care about TDEE instead of just eating less?",
    answer:
      "Eating 'less' without knowing your TDEE often leads to unsustainable extremes or unexpected weight gain. <strong>Without baseline:</strong> Restrictive eating (e.g., 1,200 calories for a person with a 2,400 TDEE) causes constant hunger, fatigue, and muscle loss. People eventually quit and overeat. <strong>With TDEE knowledge:</strong> You understand how much is 'reasonable' for your body. A modest deficit is sustainable long-term because it's not extreme. You can adjust intelligently (eat 100 calories less vs. guessing). <strong>Prevents plateaus:</strong> As you lose weight, your TDEE drops; recalculating prevents stalled progress. <strong>Data-driven:</strong> Tracking TDEE and results lets you see what actually works for you, not guesswork. Knowing your baseline removes the psychological stress of 'dieting' because it's rational, not restrictive.",
  },
  {
    question: "How often should I recalculate my TDEE?",
    answer:
      "Recalculate your TDEE after significant weight changes (10+ lbs) or activity level changes. As you lose weight, your BMR (and thus TDEE) decreases slightly — roughly 1% per 10 lbs lost. Example: a person who loses 20 lbs sees a ~2% TDEE reduction (~50 calories at 2,500 TDEE). This is why weight loss plateaus around month 2–3; your body's calorie burn has adjusted. Increasing muscle mass raises TDEE; decreasing activity lowers it. Check in monthly: if your weight loss has stalled for 2–3 weeks despite a consistent deficit, recalculate BMR and adjust your intake. For muscle gain, as your weight increases, your TDEE rises — eventually, eating at your old surplus may only maintain. Quarterly recalculation during significant body changes is reasonable.",
  },
];

export const PREGNANCY_CONCEPTION_FAQS: FAQ[] = [
  {
    question: "How is the conception date calculated and how accurate is it?",
    answer:
      "The conception date is estimated as 266 days (38 weeks) before the due date, or roughly 14 days after the start of the last menstrual period (LMP), assuming a 28-day cycle and ovulation on day 14. <strong>Accuracy varies:</strong> If LMP is known precisely and cycles are regular, the estimate is fairly reliable. If cycles are irregular or LMP date is uncertain, the estimate has a ±7–14 day range. <strong>Early ultrasound (8–13 weeks) is most accurate</strong> for dating and may shift the estimated conception date. Sperm can survive 5 days, so conception can occur 5 days before or after ovulation. For most couples, conception occurs within a few days of estimated ovulation. Always confirm conception dating with your healthcare provider, especially if it affects prenatal screening timelines.",
  },
  {
    question: "What is the relationship between LMP and conception date?",
    answer:
      "The <strong>last menstrual period (LMP)</strong> is the first day of your last period before pregnancy. The <strong>conception date</strong> is when fertilization occurred, typically 10–14 days after LMP (accounting for ovulation ~day 14 in a typical 28-day cycle). Medical dating starts from LMP because it's easy to remember; the ~2-week difference accounts for the follicular phase before ovulation. Example: if LMP is January 1, conception likely occurred around January 12–15. This 2-week lag means 'weeks of pregnancy' starting from LMP are dated differently than actual fetal age from conception. Your healthcare provider dates pregnancy from LMP for consistency, but early ultrasound refines the estimate. Understanding this distinction prevents confusion when providers refer to weeks of pregnancy.",
  },
  {
    question: "What is the optimal time to conceive and what affects fertility windows?",
    answer:
      "The <strong>fertile window</strong> is the 5 days before ovulation and the day of ovulation — roughly days 12–16 of a 28-day cycle (though this varies). Sperm survive up to 5 days; the egg survives ~12 hours. Sexual intercourse during the fertile window maximizes conception chances. <strong>Ovulation timing varies by:</strong> Cycle length (irregular cycles make prediction harder), hormones, stress, illness, and fitness level. <strong>Predicting ovulation:</strong> Track basal body temperature (rises 0.4–0.8°F after ovulation), cervical mucus (stretchy, egg-white consistency near ovulation), or use ovulation predictor kits (detect LH surge 24–36 hours before ovulation). For regular 28-day cycles, ovulation is ~day 14, but individual variation is substantial. Ovulation can shift 2–3 days with stress or illness. If trying to conceive, intercourse every 2–3 days throughout your cycle ensures sperm are present when ovulation occurs.",
  },
  {
    question: "How does age affect fertility and conception timing?",
    answer:
      "Female fertility declines with age due to egg supply and quality. <strong>Age 20–30:</strong> Peak fertility; ~20–25% conceive per cycle with regular intercourse. <strong>Age 30–35:</strong> Fertility begins declining noticeably; ~15–20% per cycle. <strong>Age 35–40:</strong> Steeper decline; ~10% per cycle; miscarriage risk rises. <strong>Age 40+:</strong> Significant decline; ~5% per cycle; chromosome abnormalities increase. Male fertility also declines with age, though less dramatically. <strong>For couples:</strong> If under 35, consult a fertility specialist after 1 year of trying; if 35+, after 6 months. Age does not prevent conception, but natural conception may take longer. Fertility treatments (IVF, IUI) can help; overall health (exercise, nutrition, stress management) supports natural conception.",
  },
  {
    question: "What environmental or lifestyle factors affect conception?",
    answer:
      "<strong>Female factors:</strong> Maintain healthy weight (BMI 18.5–24.9; extreme leanness or obesity reduces fertility), manage stress, avoid smoking and excess alcohol, ensure adequate micronutrients (folate, iron, vitamin B12), and exercise moderately (intense overtraining can suppress ovulation). <strong>Male factors:</strong> Heat exposure (avoid hot baths/tight underwear), smoking, excessive alcohol, marijuana, and anabolic steroids all impair sperm production. Stress, poor sleep, and obesity lower testosterone. <strong>For both:</strong> 3+ months of healthy habits optimize fertility (sperm production takes ~74 days; egg quality is harder to shift but improves with time). Timing intercourse around ovulation matters. Prenatal vitamins (with folate) reduce neural tube defect risk for women. If conception hasn't occurred after reasonable attempts, both partners should consult a fertility specialist for evaluation.",
  },
];
