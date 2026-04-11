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

export const ARMY_BODY_FAT_FAQS: FAQ[] = [
  {
    question: "How does the US Army body fat measurement method work?",
    answer:
      "The US Army body fat method uses circumference measurements (in inches) of specific body areas: abdomen and neck for men, abdomen, hip, and neck for women. These measurements are plugged into the validated regression equation to estimate body fat percentage. The method is quick, non-invasive, and doesn't require special equipment — just a flexible measuring tape. The Army formula has been extensively validated against DEXA scans and hydrostatic weighing, with typical accuracy within ±3–4% for military-age adults. It works well for the general population but is less accurate for very muscular individuals or those with extreme body compositions. Proper measurement technique is critical: measurements should be taken at the same time of day, at consistent anatomical locations, and when the tape is snug but not compressing skin.",
  },
  {
    question: "What are the Army body fat standards for active duty personnel?",
    answer:
      "The US Army enforces maximum body fat percentages based on age and gender. <strong>Men:</strong> Ages 17–20 (20%), 21–25 (22%), 26–30 (24%), 31–35 (26%), 36–40 (28%), 41–45 (30%), 46+ (32%). <strong>Women:</strong> Ages 17–20 (30%), 21–25 (32%), 26–30 (34%), 31–35 (36%), 36–40 (38%), 41–45 (40%), 46+ (42%). These standards are stricter than civilian health recommendations to maintain military fitness and readiness. Personnel exceeding standards can face remedial fitness programs or separation. These percentages reflect military readiness requirements, not necessarily optimal civilian health. For civilians, aim for 16–24% (men) or 20–32% (women); body fat above these ranges increases metabolic disease risk.",
  },
  {
    question: "Why do neck and abdomen measurements matter for body fat?",
    answer:
      "Neck and abdomen circumferences are strong predictors of total body fat because they reflect visceral fat and overall adiposity patterns. The neck circumference correlates with subcutaneous fat distribution, while abdomen measures central/visceral fat accumulation — the most metabolically harmful type. The hip measurement (women's formula) accounts for lower-body fat distribution, which differs between sexes. Together, these three measurements capture the main fat distribution patterns without measuring every body area. The Army formula uses regression analysis showing these three sites explain most of the variance in body fat. This is why spot measurements work reasonably well: they're targeting the areas where fat distribution varies most between individuals.",
  },
  {
    question: "How often should military personnel measure body fat for standards?",
    answer:
      "The US Army requires body fat measurements during Physical Fitness Tests (PFT), typically twice annually. Some commands require quarterly measurements if personnel are close to exceeding standards. Reserve and National Guard units may test less frequently. Failing to meet standards triggers a Body Composition Improvement Program (BCIP), requiring remedial fitness and nutrition counseling for 90 days, with retesting. Repeated failure can result in separation. For civilians using this method, quarterly measurements (every 3 months) are reasonable for tracking progress; monthly measurements are unnecessarily frequent given measurement variability. If tracking fat loss, also monitor other metrics (strength, energy, clothes fit) since scale weight can stay stable as you lose fat and gain muscle.",
  },
];

export const BODY_SURFACE_AREA_FAQS: FAQ[] = [
  {
    question: "What is Body Surface Area and why is it important in medicine?",
    answer:
      "Body Surface Area (BSA) is the total area of skin exposed to the environment, expressed in square meters (m²). It's used in medicine to calculate drug dosages (especially chemotherapy), assess burn severity, estimate calorie needs, and evaluate kidney function. BSA accounts for weight and height together more accurately than weight alone for dosing medications. An 80 kg child and 80 kg adult need very different drug doses; BSA-based dosing corrects for this. BSA also correlates with metabolic rate, cardiac output, and organ function better than body weight. The most common formulas are DuBois (widely used), Mosteller (simpler), and Boyd (more precise for extreme sizes). Most clinicians use BSA for chemotherapy (where small errors cause serious toxicity), solid organ transplant allocation, and metabolic calculations in critically ill patients.",
  },
  {
    question: "What are the different BSA formulas and which is most accurate?",
    answer:
      "Major formulas include: <strong>DuBois:</strong> BSA = (weight in kg)^0.425 × (height in cm)^0.725 × 0.007184 (the most cited). <strong>Mosteller:</strong> BSA = √(height in cm × weight in kg / 3600) (simpler, similar accuracy). <strong>Boyd:</strong> More complex but slightly more accurate at extremes (very obese or very thin). <strong>Haycock:</strong> Uses power factors for pediatric accuracy. No single formula is universally 'most accurate' — DuBois and Mosteller agree within 5–10% for most adults. Mosteller is often preferred for simplicity and reasonable accuracy. For pediatric or extremely obese patients, Boyd may be preferred. Clinically, the formula choice matters less than consistent use within an institution. All formulas assume typical proportions and have ±5–10% error margins for individual patients.",
  },
  {
    question: "How is BSA used to calculate chemotherapy dosing?",
    answer:
      "Chemotherapy doses are often calculated as mg/m² of BSA to account for body size and surface area exposed to toxins. Example: a drug prescribed at 100 mg/m² for a patient with BSA 1.8 m² would dose at 180 mg. BSA-based dosing reduces under/overdosing compared to simple weight-based dosing, especially for children, obese adults, and elderly patients. <strong>Safety:</strong> Chemotherapy has narrow therapeutic windows; miscalculation causes toxicity or treatment failure. Double-checking BSA calculations is standard protocol. Some newer agents use different dosing (flat dose or genetics-based), but BSA remains standard for most classical cytotoxic chemotherapy. Nurses and pharmacists independently verify calculations. Patients should always ask their oncology team to confirm their BSA and dose to ensure accuracy.",
  },
  {
    question: "How does BSA relate to burn injury assessment?",
    answer:
      "In burn medicine, <strong>Total Body Surface Area affected (% TBSA)</strong> determines burn severity and treatment urgency. Burns are classified as: <strong>Minor:</strong> <15% TBSA (outpatient care), <strong>Moderate:</strong> 15–25% TBSA (hospital admission, fluid resuscitation), <strong>Major:</strong> >25% TBSA (burn center transfer). BSA affected guides IV fluid replacement using the Parkland formula: 4 mL × %TBSA × weight (kg) given in first 24 hours. The Rule of Nines (head 9%, each arm 9%, each leg 18%, torso 36%) quickly estimates %TBSA in emergencies. Proper fluid resuscitation is critical to prevent burn shock and organ failure. Smaller burns affect less BSA and require less intervention; larger burns affect more skin and systemic function. Burn depth (partial vs. full thickness) and location also affect outcomes beyond %TBSA.",
  },
];

export const CALORIES_BURNED_FAQS: FAQ[] = [
  {
    question: "How is calories burned during exercise calculated?",
    answer:
      "Calorie burn during exercise depends on activity intensity, duration, body weight, and fitness level. Heavier people burn more calories doing the same activity because more weight requires more energy to move. The calculator uses metabolic equivalent (MET) values: 1 MET = 1 kcal/kg/hour (resting metabolic rate). <strong>Formula:</strong> Calories burned = MET × weight in kg × duration in hours. Example: 30 minutes of jogging (MET 7) for a 70 kg person = 7 × 70 × 0.5 = 245 calories. Fitness level matters: an untrained person burns ~20% more calories doing the same activity than a trained athlete (due to inefficiency). Heart rate monitors and fitness trackers estimate burn more accurately by accounting for individual fitness level. Actual burn varies based on pace, terrain, weather, and metabolism — estimates have ±15–25% error ranges for individuals.",
  },
  {
    question: "Why does weight affect how many calories you burn during exercise?",
    answer:
      "Heavier bodies require more energy to move, accelerate, and decelerate. A 200 lb person jogging burns significantly more calories than a 150 lb person jogging at the same pace because of greater mass and gravitational load. <strong>Physics:</strong> Energy = force × distance; more weight = more force needed. <strong>Physiology:</strong> Larger bodies have more muscle and metabolically active tissue, raising energy demands. A 50 lb difference in weight results in roughly 25–30% more calorie burn for the same activity. This is why weight loss initially slows fat loss: as you lose weight, the same workout burns fewer calories. This is also why heavier people can lose weight faster initially — they burn more calories at any given activity level. However, this advantage diminishes as weight decreases; you must increase intensity or duration to maintain the same deficit.",
  },
  {
    question: "What is a MET and how does it relate to exercise intensity?",
    answer:
      "A MET (Metabolic Equivalent of Task) is a unit expressing exercise intensity relative to resting metabolism. <strong>1 MET</strong> = resting metabolic rate (roughly 1 kcal/kg/hour). <strong>Light activities:</strong> 1.5–3 METs (walking slowly, light stretching). <strong>Moderate:</strong> 3–6 METs (brisk walking, recreational cycling). <strong>Vigorous:</strong> 6–9+ METs (running, competitive sports, HIIT). <strong>Examples:</strong> Sitting = 1 MET, walking 3.5 mph = 3.5 METs, running 10 min/mile = 10 METs. Higher MET activities burn calories faster. Health guidelines recommend 150 minutes/week of moderate activity (3–6 METs) or 75 minutes/week of vigorous (6+ METs). MET values are averages; individuals vary by fitness level, age, and body composition. Fitness trackers estimate calorie burn using MET values and your weight.",
  },
  {
    question: "How does cardio compare to strength training for calorie burn?",
    answer:
      "During exercise, cardio burns more calories per session: 30 minutes of jogging burns ~250–400 calories, while 30 minutes of moderate weightlifting burns ~150–250 calories. <strong>However, strength training builds muscle,</strong> and muscle increases resting metabolic rate (BMR) permanently. Over time (weeks/months), strength training's metabolic effect compounds. Additionally, strength training creates post-exercise oxygen consumption (EPOC), meaning you burn extra calories for hours after strength training. For fat loss, <strong>combine both:</strong> cardio creates an immediate calorie deficit; strength training preserves muscle and raises resting metabolism. The 'best' exercise is the one you'll do consistently. Calorie burn is only one factor; strength, bone density, and cardiovascular health also matter. A balanced program includes both cardio and resistance training.",
  },
];

export const CARB_FAQS: FAQ[] = [
  {
    question: "How many grams of carbs should I eat per day?",
    answer:
      "Carbohydrate needs depend on activity level and goals. <strong>Sedentary/weight loss:</strong> 2–3 g/kg body weight daily (~150–225 g for a 75 kg person). <strong>Moderate activity:</strong> 3–5 g/kg (~225–375 g). <strong>Endurance athletes:</strong> 6–10 g/kg (~450–750 g). <strong>Strength athletes:</strong> 4–7 g/kg (~300–525 g). The range accounts for individual tolerance and goals. Lower carb doesn't mean zero carbs; most people feel better with at least 100–150 g daily. Extremely low-carb (ketogenic) diets (<50 g/day) work for some but aren't necessary for fat loss. Moderate carb intake supports training performance, satiety, and sustainable adherence better than very low carb for most people. Quality matters: complex carbs (oats, rice, potatoes) and fiber-rich carbs (fruits, vegetables) provide nutrients; refined carbs (sugar, white bread) don't. Track total intake and adjust based on energy levels and performance.",
  },
  {
    question: "Do carbs make you gain fat?",
    answer:
      "Carbs themselves don't cause fat gain; <strong>total calories cause fat gain.</strong> The equation is simple: excess calories (whether from carbs, fat, or protein) are stored as fat. A person eating 2,500 calories of chicken and rice at a calorie deficit will lose fat, while someone eating 2,500 calories of carbs above their TDEE will gain fat. <strong>However, carbs affect behavior:</strong> Refined carbs (white bread, sugary foods) are less satiating than protein or fat, making overeating easier. Refined carbs spike blood sugar and insulin, potentially increasing hunger an hour later. Whole-grain carbs and fiber-rich carbs are more satiating and stable. Low-carb diets work for fat loss because cutting carbs automatically reduces calories for many people (fewer 'easy' calories to eat). The advantage is behavioral, not metabolic. Choose carb sources that keep you satisfied, track total intake, and maintain a deficit for fat loss.",
  },
  {
    question: "What is the difference between simple and complex carbs?",
    answer:
      "<strong>Simple carbs</strong> (sugars) are 1–2 molecules (glucose, fructose, lactose, sucrose) and digest quickly. Sources: fruit, milk, sugar, honey, candy. <strong>Complex carbs</strong> are long chains of glucose molecules (starch) and digest slowly. Sources: oats, brown rice, whole wheat, beans, potatoes. <strong>Fiber</strong> (a type of carb) resists digestion and provides bulk without calories — important for satiety and gut health. <strong>Glycemic impact:</strong> Simple carbs cause rapid blood sugar spikes; complex carbs and fiber provide steady energy. Rapid spikes trigger insulin release; insulin promotes fat storage and hunger rebound. <strong>For nutrition:</strong> Aim for mostly complex carbs and whole fruits (which have fiber). Refined simple carbs (white bread, soda, candy) have minimal nutrients. All carbs are 4 calories/gram; quantity and quality both matter for health.",
  },
  {
    question: "Should I time carb intake around workouts?",
    answer:
      "Carb timing around workouts has minimal effect on fat loss but <strong>may improve performance.</strong> <strong>Pre-workout (1–3 hours before):</strong> 1–4 g/kg carbs provides glucose for energy. Example: oatmeal, banana, or rice before a training session. <strong>Post-workout (within 2 hours):</strong> Carbs + protein replenishes glycogen and supports muscle repair. Example: rice with chicken or a banana with Greek yogurt. Timing is minor compared to total daily carbs. An athlete with 5 g/kg total daily carbs will perform fine whether carbs are 'timed' or not; one with only 2 g/kg total will underperform. For fat loss, total daily carbs matter far more than when you eat them. Convenient timing (eating carbs when you naturally prefer them) is fine. If training early morning, eating a small carb snack before helps energy; if training late, post-workout carbs help next-day recovery.",
  },
];

export const FAT_INTAKE_FAQS: FAQ[] = [
  {
    question: "How much dietary fat should I eat per day?",
    answer:
      "Healthy fat intake is typically 20–35% of total daily calories, or roughly 0.5–1.2 g/kg body weight. Example: a 75 kg person might consume 37–90 g fat daily (depending on total calorie intake). Minimum intake is ~0.5 g/kg to maintain hormone production, brain function, and nutrient absorption. Very low fat (<20% calories) can impair hormone production and nutrient absorption. High fat (>40% calories) isn't necessarily harmful if total calories support your goals, but high-fat diets are calorie-dense, making overeating easier (fat = 9 cal/g vs. 4 cal/g for carbs/protein). Fat needs vary by goals: muscle gain may need 0.8–1.2 g/kg; fat loss may use 0.5–0.8 g/kg (lower fat means more room for carbs/protein in a deficit). Quality matters: prioritize unsaturated fats (olive oil, fish, nuts) over saturated and trans fats.",
  },
  {
    question: "Is saturated fat bad for your health?",
    answer:
      "The relationship between saturated fat and health is nuanced. <strong>Saturated fat was historically demonized,</strong> but recent research shows it's not inherently harmful if total calories and diet quality are controlled. <strong>The context matters:</strong> Eating butter in coffee while maintaining a healthy weight and overall diet ≠ eating fast food saturated fat daily while sedentary. <strong>Moderate saturated fat (5–10% calories) is fine;</strong> excessive saturated fat (>15% calories) correlates with higher LDL cholesterol and cardiovascular risk in many people. <strong>Individual variation is substantial:</strong> Some people's cholesterol rises with saturated fat; others' doesn't. <strong>For practical purposes:</strong> Don't obsess over saturated fat — focus on total calories, whole foods, adequate vegetables, and exercise. If your cholesterol is elevated, reduce saturated fat and increase fiber. If your cholesterol is healthy, modest saturated fat is acceptable as part of a balanced diet.",
  },
  {
    question: "What are the different types of dietary fat and which are healthiest?",
    answer:
      "<strong>Saturated fat (solid at room temp):</strong> Butter, coconut oil, fatty meat. Raises LDL cholesterol in many people; limit to <10% daily calories. <strong>Unsaturated fat (liquid at room temp):</strong> Olive oil, avocado, nuts, fish. Lowers LDL, raises HDL (good cholesterol), reduces inflammation. <strong>Monounsaturated:</strong> Olive oil, avocado, almonds. Most heart-healthy. <strong>Polyunsaturated (Omega-3 and Omega-6):</strong> Fish (EPA/DHA), flaxseeds, walnuts. Omega-3s reduce inflammation; Omega-6 (vegetable oils) can promote inflammation in excess. <strong>Trans fat (artificial or from ruminant meat):</strong> Avoid — raises LDL, lowers HDL, increases disease risk. <strong>For health,</strong> prioritize unsaturated fats, especially omega-3s (fatty fish 2–3x/week), use olive oil for cooking, and limit refined/processed foods. Saturated fat is acceptable in moderation within a healthy diet.",
  },
  {
    question: "How does dietary fat affect weight loss?",
    answer:
      "Dietary fat is calorie-dense (9 cal/g) vs. carbs/protein (4 cal/g), so high-fat foods are easy to overeat. A tablespoon of oil (120 cal) is easy to consume and not filling, while 120 cal of broccoli is very filling. <strong>For weight loss,</strong> moderate fat (0.5–0.8 g/kg) can work well because it increases satiety compared to low-fat diets. <strong>Fat slows digestion,</strong> keeping you fuller longer. <strong>However,</strong> if fat intake is very high (>40% calories), total calorie management becomes harder. Low-fat approaches (20–25% calories) can also work if you prioritize protein and fiber for satiety. <strong>Best approach:</strong> Choose your fat level based on satiety and adherence. If you're satisfied at 30% calories from fat, do that. If you prefer lower fat (25%) with more carbs, that's fine too. Total calories and protein matter most; fat flexibility is personal. Don't fear fat, but be aware of calorie density when trying to lose weight.",
  },
];

export const HEART_RATE_FAQS: FAQ[] = [
  {
    question: "What is a normal resting heart rate?",
    answer:
      "A normal resting heart rate (RHR) for adults is 60–100 bpm, measured after 5+ minutes of rest (sitting or lying down). <strong>Fitness level affects RHR:</strong> Sedentary (70–100 bpm), lightly active (60–80 bpm), athletes (40–60 bpm, sometimes lower). <strong>Age matters:</strong> RHR increases slightly with age; children's RHR is naturally higher (70–100 bpm). <strong>Factors affecting RHR:</strong> Fitness (lower with cardiovascular fitness), caffeine (raises RHR), stress/anxiety (raises), sleep (poor sleep raises), illness/fever (raises), medications (varies). <strong>Why RHR matters:</strong> Chronically elevated RHR (>80 bpm at rest) is linked to cardiovascular disease and mortality risk. Lowering RHR through cardio training indicates improved heart efficiency. Track your personal RHR trends rather than comparing to others; a consistent low RHR is healthier than a rising one. Measure RHR in the morning before getting up for the most consistent reading.",
  },
  {
    question: "How does cardiovascular fitness affect heart rate?",
    answer:
      "Improved cardiovascular fitness lowers both resting and exercise heart rates because the heart becomes more efficient at pumping blood. <strong>A trained heart pumps more blood per beat (higher stroke volume),</strong> so it needs fewer beats to deliver oxygen. An untrained person jogging at 6 mph might reach 150 bpm; a trained runner might reach only 120 bpm at the same pace. <strong>RHR decreases with training:</strong> Someone improving from sedentary (80 bpm RHR) to fit (60 bpm RHR) has gained 20% heart efficiency. <strong>Recovery improves:</strong> After stopping exercise, a trained heart returns to resting rate faster. These changes happen within 4–6 weeks of consistent aerobic training. The reverse is true: detraining (stopping exercise) raises RHR within weeks. Regular cardio (150+ min/week moderate intensity) provides cardiovascular benefits measurable in RHR changes.",
  },
  {
    question: "What are heart rate zones and how are they used for training?",
    answer:
      "Heart rate zones divide exercise intensity by percentage of maximum heart rate: <strong>Zone 1 (50–60% max):</strong> Very light, recovery pace. <strong>Zone 2 (60–70% max):</strong> Light, conversational pace (base building). <strong>Zone 3 (70–80% max):</strong> Moderate, slightly harder breathing. <strong>Zone 4 (80–90% max):</strong> Hard, tempo/threshold work, difficult to sustain. <strong>Zone 5 (90–100% max):</strong> Maximum effort, VO2 max work, only sustainable briefly. <strong>Training uses:</strong> Build aerobic base with Zones 2–3; improve speed with Zones 4–5. Most aerobic training should be Zone 2–3; only 10–20% should be hard effort (Zones 4–5). Beginners often train too hard, burning out or risking injury. Polarized training (mostly Zone 1–2, some Zone 5) is often most effective. Use a heart rate monitor to stay in your target zone and train more effectively.",
  },
  {
    question: "Why does heart rate increase during exercise?",
    answer:
      "During exercise, muscles demand more oxygen. The heart increases its pumping rate (and stroke volume) to deliver more oxygenated blood to working muscles. <strong>Physiological response:</strong> Exercise triggers sympathetic nervous system activation, increasing heart rate and cardiac output. Blood vessels supplying muscles dilate to increase flow. Heart rate increases proportionally with exercise intensity; harder work = higher heart rate. <strong>Why this happens:</strong> VO2 demand (oxygen your muscles consume) increases during exercise; heart rate and cardiac output increase to meet this demand. <strong>Factors affecting exercise HR:</strong> Fitness level (trained hearts rise less), environmental temperature (heat raises HR), dehydration (raises HR), caffeine (raises baseline HR), stress/anxiety (raises HR). A 150 bpm exercise heart rate is moderate intensity for most people; 170–180+ is hard/maximal effort. Measuring heart rate during exercise tells you intensity and helps you train in the right zone for your goals.",
  },
];

export const IBW_FAQS: FAQ[] = [
  {
    question: "What is Ideal Body Weight and is it the same as healthy weight?",
    answer:
      "Ideal Body Weight (IBW) is a statistical target estimated from height and gender using formulas like Devine, Robinson, Miller, or Hamwi. <strong>IBW is a reference range,</strong> not a prescription. Healthy weight is actually a range (often ±10% of IBW) because bone density, muscle mass, and frame size vary. Two people with the same height can be healthy at 10–20 lbs apart. <strong>IBW is useful for:</strong> Setting initial weight loss/gain targets, calculating calorie needs, assessing whether someone is significantly underweight or overweight. <strong>IBW limitations:</strong> It doesn't account for muscle mass (athletes may be 'overweight' by IBW), genetics, or frame size. A person 'below' IBW who is sedentary and high body fat is less healthy than someone 'above' IBW who is fit and muscular. Focus on body composition, fitness, and health markers (blood pressure, cholesterol, blood sugar) over hitting an exact weight.",
  },
  {
    question: "Which IBW formula is most accurate?",
    answer:
      "Common formulas: <strong>Devine (1974):</strong> Men 50 kg + 2.3 kg/inch over 5', women 45.5 kg + 2.3 kg/inch. <strong>Robinson (1983):</strong> Men 52 kg + 1.9 kg/inch, women 49 kg + 1.7 kg/inch. <strong>Miller (1983):</strong> Men 56.2 kg + 1.41 kg/inch, women 53.1 kg + 1.36 kg/inch. <strong>Hamwi (1964):</strong> Similar to Devine. <strong>No formula is 'most accurate' for individuals</strong> because IBW varies by genetics and frame size. Devine and Robinson are most cited. Formulas typically agree within 5–10 kg for most people. Differences are often less than measurement error or week-to-week weight fluctuation. Choose one formula and use it consistently rather than switching. If you're within ±10% of calculated IBW and feel good, you're likely at a healthy weight.",
  },
  {
    question: "How is IBW used in medical settings?",
    answer:
      "Healthcare providers use IBW to: <strong>Calculate ideal calorie needs</strong> for nutrition counseling, <strong>assess if someone is underweight or overweight</strong> at a glance (faster than BMI calculations), <strong>set realistic goals</strong> for weight management, <strong>screen for eating disorders</strong> (significant deviation from IBW), and <strong>reference point for medications</strong> in some cases. <strong>Important:</strong> IBW is a rough estimate, not a clinical diagnosis. A person 20% above IBW isn't automatically unhealthy if fit and metabolically well. Conversely, someone at IBW can be sedentary and unhealthy. Clinically, healthcare providers look beyond IBW at body composition, blood work, fitness, and symptoms.",
  },
  {
    question: "Should I try to reach my calculated IBW?",
    answer:
      "Your calculated IBW is a reference, not a requirement. <strong>If you're significantly overweight:</strong> Aiming toward IBW is reasonable for health (weight loss improves metabolic markers). <strong>If you're within ±10% of IBW:</strong> Don't obsess over hitting the exact number. <strong>If you're muscular or athletic:</strong> You may be 10–20 lbs above IBW with excellent body composition; this is healthy. <strong>Better goal:</strong> Aim for a weight where you feel good, have energy, maintain easily, fit your clothes, and have good health markers (blood pressure, cholesterol, blood sugar). Use IBW as one reference point, but prioritize body composition, fitness, and how you feel. If you're struggling to reach calculated IBW despite reasonable effort, you may naturally settle at a slightly higher weight — that's likely your body's ideal, not the formula's.",
  },
];

export const LEAN_BODY_MASS_FAQS: FAQ[] = [
  {
    question: "What is Lean Body Mass and why does it matter?",
    answer:
      "Lean Body Mass (LBM) is your total body weight minus fat weight — it includes muscle, bone, organs, water, and connective tissue. <strong>Why it matters:</strong> LBM is metabolically active; it's the 'engine' that burns calories at rest. <strong>LBM ≈ RMR:</strong> Resting Metabolic Rate (calories burned at rest) correlates strongly with LBM, not total weight. Building LBM through strength training increases your resting calorie burn. <strong>For nutrition:</strong> Protein targets are often based on LBM (1–1.2 g per lb of LBM), which is more accurate than body weight. <strong>For health:</strong> High LBM relative to total weight indicates good body composition and lower metabolic disease risk. <strong>Example:</strong> Two people weighing 200 lbs — one with 30% body fat (140 lb LBM) and one with 20% body fat (160 lb LBM) — have very different metabolic health and strength potential. Tracking LBM over time is more informative than scale weight.",
  },
  {
    question: "How is Lean Body Mass calculated?",
    answer:
      "LBM is calculated as: <strong>LBM = Total Weight − Fat Weight.</strong> Fat weight is estimated from body fat percentage (measured by DEXA, calipers, bioelectrical impedance, or calculated from measurements). Example: A 180 lb person with 20% body fat has 36 lb fat and 144 lb LBM. <strong>Common estimation methods:</strong> <strong>Katch-McArdle formula</strong> uses measured body fat percentage: LBM (lbs) = weight × (1 − body fat %). <strong>US Navy formula</strong> estimates body fat from circumferences, then calculates LBM. <strong>DEXA or BodPod</strong> directly measure LBM. Accuracy depends on body fat measurement method; typical error is ±3–5%. For tracking progress, use the same method consistently; absolute accuracy matters less than trends.",
  },
  {
    question: "How does LBM affect calorie burn and metabolism?",
    answer:
      "LBM is the primary driver of Basal Metabolic Rate (BMR). <strong>More LBM = higher BMR.</strong> Each pound of LBM burns roughly 10–15 calories daily at rest; each pound of fat burns only 2–5 calories daily. Adding 5 lbs of muscle through training increases BMR by ~50–75 calories daily. <strong>Over a year,</strong> this is 18,000–27,000 extra calories burned (roughly 5–8 lbs of fat loss) from the muscle gain alone. <strong>For weight loss:</strong> Preserving LBM during a deficit is critical. Crash dieting loses muscle; resistance training + adequate protein preserves it. <strong>For aging:</strong> Muscle loss (sarcopenia) with age reduces metabolic rate by ~2% per decade. Strength training throughout life preserves LBM and metabolic health. Building and maintaining LBM is one of the most effective long-term metabolic strategies.",
  },
  {
    question: "Should I track Lean Body Mass or total weight?",
    answer:
      "Track both, but <strong>LBM is more informative for body composition.</strong> Scale weight alone misleads: building 5 lbs muscle while losing 8 lbs fat shows a 3 lb weight decrease (good!), but you've actually improved. <strong>For fat loss goals:</strong> Monitor scale weight weekly (average over a week to reduce noise) and body fat percentage monthly. If weight is stable but body fat dropped, you're gaining muscle — excellent progress. <strong>For muscle gain:</strong> Track LBM monthly; steady increases of 0.5–1 lb/month indicate effective muscle building. <strong>Practical approach:</strong> Weigh yourself weekly but don't obsess over daily fluctuations. Measure body fat or circumferences monthly. Use multiple metrics: strength (can you lift more?), appearance, energy, clothes fit. Scale weight is one data point, not the whole story.",
  },
];

export const MACRO_ADVANCED_FAQS: FAQ[] = [
  {
    question: "What are macros and why do they matter for fitness?",
    answer:
      "Macronutrients (macros) are protein, carbohydrates, and fat — the three nutrient categories that provide calories and support body functions. <strong>Protein:</strong> 4 cal/g; builds muscle, repairs tissue, supports hormones. <strong>Carbs:</strong> 4 cal/g; provide energy, support brain function, replenish muscle glycogen. <strong>Fat:</strong> 9 cal/g; supports hormones, nutrient absorption, brain health. <strong>Why macros matter:</strong> <strong>Total calories</strong> determine weight change, but <strong>macro ratios</strong> affect muscle gain/preservation, satiety, energy, and performance. <strong>For muscle gain:</strong> High protein (1–1.2 g/lb LBM) + calorie surplus + strength training. <strong>For fat loss:</strong> High protein (0.8–1 g/lb LBM) + moderate carbs/fat + calorie deficit + cardio + strength training. <strong>For endurance:</strong> Higher carbs (5–10 g/kg), moderate fat and protein. Matching macros to your goal is more effective than random dieting.",
  },
  {
    question: "What is a good macro split (ratio) for my goals?",
    answer:
      "Macro splits vary by goal. <strong>Fat loss:</strong> 30–35% protein, 30–40% carbs, 25–35% fat (high protein preserves muscle, higher fat/lower carbs can increase satiety). <strong>Muscle gain:</strong> 25–35% protein, 40–50% carbs, 20–30% fat (adequate protein and carbs for muscle building). <strong>Maintenance/general health:</strong> 20–30% protein, 45–55% carbs, 25–35% fat (moderate everything). <strong>Ketogenic (low-carb):</strong> 25–30% protein, 5–10% carbs, 60–70% fat. <strong>Flexible approach:</strong> No single split is 'perfect'; find what works for your adherence and results. Some people thrive on higher carbs (athlete mindset); others prefer lower carbs (easier satiety). <strong>Priority:</strong> Hit total calories and total protein; carb/fat split is secondary. Experiment and adjust based on energy, hunger, performance, and results.",
  },
  {
    question: "How do I calculate my target macros for my goals?",
    answer:
      "<strong>Step 1:</strong> Calculate your TDEE (total daily calorie burn). <strong>Step 2:</strong> Adjust for goals: deficit for fat loss (−300–500 cal), surplus for muscle gain (+300–500 cal), maintenance. <strong>Step 3:</strong> Set protein: 0.8–1.2 g/lb LBM (roughly 120–200 g for most people). <strong>Step 4:</strong> Choose carb/fat ratio based on preference and goals. <strong>Example — 180 lb man, 20% body fat, TDEE 2,500 cal, fat loss goal:</strong> Deficit = 2,000 cal. Protein = 144 lb LBM × 1 g = 144 g (576 cal). Remaining 1,424 cal from carbs/fat. Option A: 150 g carbs (600 cal) + 91 g fat (824 cal). Option B: 250 g carbs (1,000 cal) + 47 g fat (424 cal). Both hit targets; choose based on satiety and preference. Refine quarterly; as weight changes, recalculate.",
  },
  {
    question: "Does macro timing (eating carbs before/after workouts) matter?",
    answer:
      "Timing has a minor impact on performance and recovery compared to <strong>total daily macros.</strong> <strong>Pre-workout (1–3 hours before):</strong> Carbs + light protein (banana + Greek yogurt) provides energy and prevents muscle breakdown. <strong>Post-workout (within 2 hours):</strong> Carbs + protein (chicken + rice) replenishes glycogen and supports muscle repair. <strong>Effect size:</strong> Optimal timing improves performance by ~5–10%; hitting total daily macros matters ~10x more. <strong>For fat loss,</strong> total daily macros determine results, not when you eat. <strong>For muscle gain,</strong> total daily protein and calories matter most; timing is a minor optimization. <strong>Practical approach:</strong> Eat carbs/protein when convenient. If training early morning on empty stomach, have a small carb snack. If training evening, eat post-workout meal within 2 hours. Don't stress perfect timing; consistent daily totals are far more important.",
  },
];

export const MAX_HEART_RATE_FAQS: FAQ[] = [
  {
    question: "What is Maximum Heart Rate and why is it important?",
    answer:
      "Maximum Heart Rate (MHR) is the highest number of beats per minute your heart can sustain during maximal physical effort. It's age-dependent and varies by genetics, fitness level, and health. <strong>Why it matters:</strong> MHR defines your upper heart rate ceiling and is used to calculate exercise intensity zones (% of MHR). Training at 70–85% MHR is moderate-hard intensity; 85–95% is very hard; 95%+ is maximal. <strong>Clinically,</strong> MHR testing helps cardiologists assess heart response to stress and detect arrhythmias. <strong>For training,</strong> knowing your MHR allows personalized heart rate zone training. <strong>Note:</strong> MHR is not 'healthier' if lower — that's resting heart rate. A high MHR during maximum effort is normal and expected. Average untrained adults reach ~220 minus age; trained athletes often reach slightly higher.",
  },
  {
    question: "What is the accuracy of the 220-minus-age formula?",
    answer:
      "The formula <strong>MHR = 220 − age</strong> is convenient but has ±10–15 bpm accuracy for individuals. Example: a 40-year-old has estimated MHR of 180, but actual MHR could be 165–195 bpm. <strong>Why the error:</strong> Genetics, fitness, health conditions, and medications all affect MHR independently of age. The formula works as a population average but is unreliable for individuals. <strong>More accurate formulas</strong> include Tanaka (208 − 0.7 × age), Gulati (women: 206 − 0.88 × age), and Karvonen (uses resting HR). <strong>Best approach:</strong> Use field testing (run/cycle to maximal effort with heart rate monitor) to determine actual MHR. Most people can safely estimate MHR from the 220 − age formula unless they have cardiac concerns. If you want precision, get a cardiac stress test (gold standard) or field test under safe conditions.",
  },
  {
    question: "How do I find my actual Maximum Heart Rate?",
    answer:
      "<strong>Field test method (for healthy individuals, no cardiac history):</strong> After 10–15 min warm-up, do a 3–5 minute hard effort (running, cycling, rowing) until you feel you can't go harder. Record max heart rate during that effort. Repeat 2–3 times on separate days; take the highest reading. <strong>Healthcare provider test:</strong> Cardiac stress test with EKG monitoring (gold standard, especially for older adults or those with health concerns). <strong>Safety notes:</strong> Don't test MHR if you have cardiac history, uncontrolled blood pressure, or joint problems without medical clearance. MHR testing involves discomfort and extreme effort — it's not pleasant. Once you have your actual MHR, use it for zone calculations. Retest yearly if you want precision; MHR may shift with age/fitness.",
  },
  {
    question: "How does fitness level affect Maximum Heart Rate?",
    answer:
      "Fitness level has minimal direct effect on MHR; <strong>age is the primary determinant.</strong> Well-trained athletes typically reach similar or slightly higher MHR than sedentary peers of the same age. <strong>However,</strong> fit individuals have lower resting heart rate and recover faster post-exercise. <strong>What improves with fitness:</strong> Heart Rate Reserve (MHR − RHR increases), allowing better training zone discrimination. <strong>Example:</strong> Two 40-year-olds both with MHR ~180. One is sedentary (RHR 80), HRR = 100. One is an athlete (RHR 50), HRR = 130. Same MHR, but the athlete has greater training capacity in zones. This is why cardiovascular training is valuable — it improves your resting and recovery heart rate, not max. The 'goal' isn't a lower max; it's a lower resting rate and better heart efficiency.",
  },
];

export const ONE_REP_MAX_FAQS: FAQ[] = [
  {
    question: "What is One Repetition Maximum and why does it matter?",
    answer:
      "One Repetition Maximum (1RM) is the maximum weight you can lift for a single repetition with good form. <strong>Why it matters:</strong> It's a benchmark of maximum strength. <strong>For training,</strong> 1RM informs exercise loads: lifting at 60–70% 1RM is moderate intensity; 80–90% is heavy; 95%+ is maximal effort. <strong>For powerlifting/weightlifting,</strong> the 1RM is the competition standard. <strong>For strength periodization,</strong> programs include heavy phases (85%+ 1RM) to build strength, moderate phases (70–80%) for hypertrophy, and light phases (50–60%) for recovery. <strong>For fitness athletes,</strong> knowing your 1RM helps ensure progressive overload (gradually increasing weight). <strong>Safety:</strong> Testing true 1RM carries injury risk if form breaks down. Most people estimate 1RM from higher-rep sets rather than max out frequently.",
  },
  {
    question: "What are the common 1RM estimation formulas?",
    answer:
      "<strong>Epley formula:</strong> 1RM = weight × (1 + reps / 30). <strong>Brzycki formula:</strong> 1RM = weight / (1.0278 − 0.0278 × reps). <strong>Lander formula:</strong> 1RM = 100 × weight / (101.3 − 2.67123 × reps). <strong>Lombardi formula:</strong> 1RM = weight × reps^0.1. <strong>Mayhew formula:</strong> Similar to Lander. <strong>Accuracy:</strong> These formulas typically estimate within ±5–10% for moderate reps (3–10). Accuracy decreases at very high reps (15+) or very heavy loads (1–2 reps). <strong>Recommendation:</strong> Use Epley or Brzycki; both are reasonably accurate. Formulas agree most closely for 3–8 reps; use this range for most accurate estimation. All formulas assume good form; poor form invalidates the estimate.",
  },
  {
    question: "How should I progress my lifts and avoid plateaus?",
    answer:
      "<strong>Progressive overload</strong> (gradually increasing weight, reps, or sets) is essential for strength gains. <strong>Monthly progression:</strong> Increase weight by 5–10% when you can complete your target reps cleanly. Example: 5×5 at 185 lbs → add 5 lbs → 5×5 at 190 lbs. <strong>Avoid jumps >10%;</strong> form breaks down and injury risk rises. <strong>If stuck:</strong> Deload (drop to 90% weight, reduce volume) for 1–2 weeks to recover, then resume progression. <strong>Vary rep ranges:</strong> Heavy phases (1–5 reps) build max strength; moderate phases (6–12 reps) build strength + hypertrophy; light phases (12–20 reps) build endurance. <strong>Program design:</strong> Change exercises every 4–6 weeks to avoid plateaus. <strong>Recovery:</strong> Adequate sleep, protein, and rest between sessions allow adaptation. Plateaus are normal; patience and consistency bring breakthrough.",
  },
  {
    question: "Is testing 1RM frequently safe and necessary?",
    answer:
      "Frequent true 1RM testing (maximal attempts weekly) carries injury risk and isn't necessary. <strong>Safe testing approach:</strong> <strong>Every 4–8 weeks,</strong> do a 1RM retest in main lifts (bench, squat, deadlift) under controlled conditions (proper warm-up, spotter, good form). <strong>Between tests,</strong> estimate 1RM from submaximal reps (5-rep max, 10-rep max) using prediction formulas. <strong>During training,</strong> focus on progressive overload (increasing weight/reps at moderate intensity), not maximal efforts. <strong>For raw strength improvement,</strong> heavy-but-not-maximal training (80–90% 1RM for low reps) builds strength safely. <strong>Testing frequency:</strong> Competitive lifters test frequently; fitness enthusiasts benefit from testing quarterly (every 3 months). This allows measurable progress while managing injury risk.",
  },
];

export const OVULATION_FAQS: FAQ[] = [
  {
    question: "When does ovulation occur in the menstrual cycle?",
    answer:
      "Ovulation typically occurs around day 14 of a 28-day menstrual cycle, counting from day 1 (first day of period). <strong>Variation:</strong> Cycle length varies (21–35 days is normal); ovulation occurs ~14 days before the next period starts (not 14 days after the period). <strong>Example:</strong> In a 30-day cycle, ovulation occurs around day 16. Ovulation is triggered by the LH surge (luteinizing hormone spike), detectable 24–36 hours before ovulation with ovulation predictor kits (OPKs). <strong>Fertile window:</strong> The 5 days before ovulation + day of ovulation (roughly days 12–16 in a 28-day cycle). Sperm survive up to 5 days; the egg survives ~12 hours. <strong>Prediction:</strong> Basal body temperature rises 0.4–0.8°F after ovulation (too late to predict); cervical mucus becomes stretchy and clear (fertile sign); OPKs detect the LH surge. Ovulation timing varies; tracking multiple signs improves prediction.",
  },
  {
    question: "What happens during ovulation?",
    answer:
      "Ovulation is the release of a mature egg from the ovary into the fallopian tube. <strong>Process:</strong> The LH surge (LH hormone spike) triggers the ovary to rupture and release the egg. The egg is swept into the fallopian tube by hair-like structures (fimbriae). <strong>Timing:</strong> The LH surge occurs 24–36 hours before ovulation; ovulation itself is a brief event (seconds). <strong>Symptoms some women experience:</strong> Slight cramping/pain (mittelschmerz), light spotting, increased libido, cervical mucus changes, slight basal body temperature rise (after ovulation). <strong>Egg viability:</strong> The egg survives only ~12 hours after ovulation. If not fertilized by sperm within this window, it degenerates. <strong>Sperm meet egg:</strong> If sperm are present, they travel through the cervix, uterus, and fallopian tube, potentially fertilizing the egg within the fertile window.",
  },
  {
    question: "How can I predict ovulation to time intercourse for conception?",
    answer:
      "<strong>Method 1 — Cervical mucus:</strong> Track cervical mucus daily. Near ovulation, mucus becomes stretchy, clear, and egg-white-like (fertile mucus). Intercourse during this period maximizes conception chances. <strong>Method 2 — Ovulation predictor kits (OPKs):</strong> These detect the LH surge, occurring 24–36 hours before ovulation. Use daily starting ~5 days before expected ovulation (based on cycle length). When OPK is positive, ovulation likely occurs within 24–36 hours. <strong>Method 3 — Basal body temperature (BBT):</strong> Measure temperature immediately upon waking. BBT rises 0.4–0.8°F after ovulation (too late to predict, but confirms ovulation occurred). <strong>Method 4 — Calendar tracking:</strong> If cycles are regular, ovulation is predictable as day 14 (or adjusted for your cycle length). <strong>Best approach:</strong> Combine methods. For most couples, regular intercourse every 2–3 days throughout the cycle ensures sperm are present; no timing method is foolproof.",
  },
  {
    question: "What affects ovulation timing and regularity?",
    answer:
      "Several factors influence when (or if) ovulation occurs: <strong>Cycle length variation:</strong> Normal cycles range 21–35 days; ovulation timing shifts accordingly. <strong>Stress:</strong> High stress can delay or suppress ovulation, lengthening cycles. <strong>Illness/fever:</strong> Acute illness can delay ovulation 1–2 days. <strong>Exercise/weight:</strong> Extreme exercise or low body weight can suppress ovulation (hypothalamic amenorrhea). <strong>Hormonal birth control:</strong> Hormonal contraceptives prevent ovulation. <strong>Irregular cycles:</strong> Polycystic ovary syndrome (PCOS), thyroid disorders, and other conditions cause irregular ovulation. <strong>Age:</strong> Cycles are more regular in 20s–30s; become irregular approaching menopause (40s–50s). <strong>Medications:</strong> Some medications affect hormone levels and ovulation. <strong>Tips for regularity:</strong> Maintain healthy weight/BMI, manage stress, exercise moderately (not excessively), and ensure adequate nutrition. If cycles are consistently irregular, consult a healthcare provider to rule out medical conditions.",
  },
];

export const PROTEIN_FAQS: FAQ[] = [
  {
    question: "How much protein should I eat per day?",
    answer:
      "Protein needs depend on goals and activity level. <strong>Sedentary/maintenance:</strong> 0.8 g/kg body weight (~0.36 g/lb). Example: 165 lb person = ~60 g/day. <strong>Fat loss:</strong> 1–1.2 g/kg (~0.45–0.55 g/lb) to preserve muscle in a deficit. Example: 165 lb person = ~75–90 g/day. <strong>Muscle gain:</strong> 1–1.2 g/kg or 0.8–1 g/lb LBM to support muscle building. Example: 165 lb person at 25% body fat (123 lb LBM) = ~100–123 g/day. <strong>Endurance athletes:</strong> 1.2–1.6 g/kg for recovery and muscle repair. <strong>Older adults:</strong> 1–1.2 g/kg to combat age-related muscle loss. Most people eat 40–150 g daily depending on activity. Use these ranges as starting points; track progress and adjust. Higher protein increases satiety, making calorie control easier.",
  },
  {
    question: "Is all protein the same, or do protein sources matter?",
    answer:
      "All protein sources provide amino acids, but <strong>protein quality varies.</strong> <strong>Complete proteins</strong> contain all 9 essential amino acids (meat, fish, eggs, dairy, soy, quinoa). <strong>Incomplete proteins</strong> lack one or more essential amino acids (beans, grains, nuts). <strong>Amino acid profile:</strong> Some proteins are higher in muscle-building amino acids (leucine, which triggers muscle protein synthesis). Whey protein and animal sources are higher in leucine; plant sources are often lower. <strong>Bioavailability:</strong> How easily your body digests and absorbs the protein. Whey and eggs are highly bioavailable; plant proteins often have lower absorption. <strong>For muscle building,</strong> complete proteins with high leucine are optimal; whey, chicken, beef, and eggs are excellent. <strong>For general protein goals,</strong> you can mix sources: chicken + beans = complete amino acids. Hitting total daily protein matters most; source flexibility is acceptable unless optimizing for muscle gain.",
  },
  {
    question: "Should I take protein supplements or eat whole food?",
    answer:
      "<strong>Whole food is ideal</strong> because it provides protein + micronutrients (iron, B vitamins, fiber). <strong>Protein supplements are convenient</strong> for: hitting protein targets quickly (protein shake = 25 g protein in 2 minutes), post-workout recovery, and when whole food is impractical. <strong>Supplements are NOT required;</strong> you can hit targets with whole foods (chicken, fish, eggs, dairy, beans). <strong>Practical approach:</strong> Get 70–80% of protein from whole foods; use supplements for the remainder if convenient. <strong>Quality matters:</strong> Choose supplements with minimal added sugar and fillers. Whey, casein, and plant-based blends are all effective. <strong>Cost:</strong> Whole food is often cheaper (eggs, canned tuna, frozen chicken). <strong>Bottom line:</strong> Consistency and hitting total daily protein target matter most, whether from food or supplements.",
  },
  {
    question: "Does timing of protein intake matter for muscle building?",
    answer:
      "Protein timing (post-workout 'anabolic window') has a minor effect compared to <strong>total daily protein intake.</strong> <strong>Post-workout protein benefit:</strong> Eating protein within 2 hours post-workout may slightly accelerate muscle repair and growth (especially if fasted or severely depleted). <strong>Practical reality:</strong> If you've eaten adequate protein throughout the day (hitting total targets), post-workout timing is irrelevant. <strong>Example:</strong> Someone eating 150 g protein daily in 4 meals has optimized timing; missing a post-workout shake doesn't harm if total daily protein is hit. <strong>For convenience,</strong> a post-workout meal/shake is practical (replenishes glycogen, provides protein, tastes good). <strong>Best approach:</strong> Distribute protein evenly across meals (30–40 g per meal, 3–4 meals). Don't stress precise timing; hitting total daily targets is far more important. Consistency matters infinitely more than 'perfect' timing.",
  },
];

export const SLEEP_FAQS: FAQ[] = [
  {
    question: "How much sleep do I need for optimal health and recovery?",
    answer:
      "Most adults need 7–9 hours of sleep nightly for optimal health, cognitive function, and athletic recovery. <strong>Sleep varies by age:</strong> Teenagers (13–18) need 8–10 hours; older adults (65+) need 7–8 hours but often experience lighter sleep. <strong>Individual variation:</strong> Some people feel great on 7 hours; others need 9. <strong>Sleep debt:</strong> Consistently sleeping <7 hours accumulates sleep debt, impairing cognition, immune function, and metabolism within days. <strong>Recovery effects:</strong> During deep sleep (stages 3–4), growth hormone peaks, supporting muscle repair and recovery. REM sleep supports memory and emotional regulation. <strong>Missing one night:</strong> Temporary impairment (attention, reaction time, mood). <strong>Chronic sleep deprivation</strong> (<6 hours nightly) increases disease risk (obesity, diabetes, cardiovascular disease, depression). Prioritize 7–9 hours nightly for health and athletic performance.",
  },
  {
    question: "How does sleep affect weight loss and muscle gain?",
    answer:
      "<strong>Weight loss:</strong> Poor sleep (≤6 hours) increases hunger hormones (ghrelin) and reduces fullness hormones (leptin), making overeating easier. Studies show sleep-deprived people consume ~300 extra calories daily. Adequate sleep (7–9 hours) supports fat loss and prevents muscle loss during a deficit. <strong>Muscle gain:</strong> Growth hormone peaks during deep sleep; inadequate sleep reduces muscle protein synthesis and impairs recovery. Athletes sleeping well build muscle faster. <strong>Metabolism:</strong> Sleep deprivation lowers metabolic rate ~5–10%, making weight loss harder. <strong>Hormones:</strong> Poor sleep disrupts testosterone, cortisol, and insulin sensitivity, all affecting body composition. <strong>Bottom line:</strong> Adequate sleep is a pillar of fitness; no amount of perfect diet/training compensates for chronic sleep deprivation. Prioritize 7–9 hours before optimizing other factors.",
  },
  {
    question: "How can I improve my sleep quality?",
    answer:
      "<strong>Sleep hygiene tips:</strong> <strong>Consistency:</strong> Sleep and wake at the same time daily (even weekends). <strong>Environment:</strong> Keep bedroom cool (65–68°F), dark, and quiet. Use blackout curtains, earplugs. <strong>Before bed:</strong> Avoid screens 30–60 min before sleep (blue light suppresses melatonin). <strong>Avoid:</strong> Caffeine after 2 PM, heavy meals before bed, intense exercise within 3 hours of sleep. <strong>Exercise:</strong> Regular moderate-to-vigorous exercise improves sleep (but not too close to bedtime). <strong>Stress management:</strong> Practice meditation, deep breathing, or journaling to reduce racing thoughts. <strong>Light exposure:</strong> Get morning sunlight to regulate circadian rhythm. <strong>Supplements:</strong> Melatonin (0.5–3 mg) or magnesium may help some people; consult a healthcare provider. <strong>Medical issues:</strong> Sleep apnea, insomnia, or restless leg syndrome require professional treatment. If sleep issues persist despite good habits, consult a sleep specialist.",
  },
  {
    question: "How long does it take to recover from sleep deprivation?",
    answer:
      "<strong>One night of poor sleep:</strong> Impairment peaks next day; mostly recovers within 24–48 hours with normal sleep. <strong>Chronic sleep debt (1–2 weeks of short sleep):</strong> Takes 3–7 days of adequate sleep (7–9 hours nightly) to fully recover. <strong>Longer-term deprivation (weeks):</strong> Recovery takes 1–2+ weeks of consistent good sleep. <strong>Metabolism recovery:</strong> Metabolic damage from chronic sleep deprivation may take weeks to fully normalize. <strong>Cognitive recovery:</strong> Attention and decision-making recover faster than metabolic effects. <strong>Athletic performance:</strong> Takes 5–10 days of adequate sleep to fully recover strength and endurance after sleep debt. <strong>Prevention is easier:</strong> Prioritize consistent sleep from the start rather than 'catching up' on weekends. Sleeping 10 hours on Saturday doesn't cancel out poor sleep Mon–Fri. Consistent 7–9 hours nightly is optimal.",
  },
];

export const WAIST_TO_HIP_FAQS: FAQ[] = [
  {
    question: "What is Waist-to-Hip Ratio and why does it matter for health?",
    answer:
      "Waist-to-Hip Ratio (WHR) is waist circumference divided by hip circumference, expressed as a decimal (e.g., 0.85). <strong>Why it matters:</strong> WHR indicates fat distribution — specifically, how much fat is stored around the abdomen vs. hips/thighs. <strong>Health significance:</strong> Central/visceral fat (around the abdomen) is metabolically harmful, linked to heart disease, type 2 diabetes, and metabolic syndrome. Hip/thigh fat is less harmful. <strong>Healthy ranges:</strong> <strong>Men:</strong> <0.9 is healthy, 0.9–1.0 is moderate risk, >1.0 is higher risk. <strong>Women:</strong> <0.85 is healthy, 0.85–0.9 is moderate risk, >0.9 is higher risk. A person with a low BMI but high WHR (belly fat) is at higher health risk than someone with higher BMI but low WHR (muscle-based weight). <strong>WHR is more predictive of cardiovascular disease risk than BMI alone.</strong>",
  },
  {
    question: "How is Waist-to-Hip Ratio measured correctly?",
    answer:
      "<strong>Waist measurement:</strong> Measure at the narrowest point of the torso (usually just above the belly button), with a flexible measuring tape snug but not compressing skin. Measure while standing relaxed, breathing normally. <strong>Hip measurement:</strong> Measure at the widest point of the hips/buttocks (usually ~7–8 inches below waist), again with tape snug. <strong>Calculation:</strong> WHR = waist circumference / hip circumference. Example: 32-inch waist ÷ 38-inch hips = 0.84 WHR. <strong>Consistency:</strong> Measure at the same time of day (morning, before eating) for consistent results. <strong>Accuracy:</strong> Using the same measuring technique consistently matters more than one-time precision. Measure monthly for tracking. <strong>Common errors:</strong> Measuring at different heights on the torso, inhaling deeply before measuring, or using a tight measuring tape changes results significantly.",
  },
  {
    question: "How does WHR compare to BMI for assessing health risk?",
    answer:
      "WHR and BMI measure different things. <strong>BMI</strong> is weight/height²; it doesn't distinguish fat from muscle. <strong>WHR</strong> reveals fat distribution, specifically visceral (dangerous) vs. subcutaneous fat. <strong>Example:</strong> Two people with BMI 28 (overweight): Person A has WHR 1.1 (central fat distribution, high visceral fat, high disease risk). Person B has WHR 0.8 (hip-heavy distribution, lower disease risk). BMI says both are 'overweight'; WHR reveals different risk profiles. <strong>Athletic muscular person:</strong> BMI 28, WHR 0.8, normal/low risk. <strong>Sedentary person:</strong> BMI 25, WHR 0.95, higher risk despite lower BMI. <strong>Best approach:</strong> Use both metrics. <strong>WHR is superior for cardiovascular risk assessment;</strong> BMI is convenient for quick screening. Health is determined by multiple factors: WHR, BMI, fitness, blood pressure, cholesterol, blood sugar, and lifestyle. No single metric tells the whole story.",
  },
  {
    question: "How can I reduce my Waist-to-Hip Ratio?",
    answer:
      "Reducing WHR requires losing visceral (belly) fat. <strong>Strategy:</strong> Calorie deficit (lose weight overall) + strength training (preserves hip/leg muscle) = lower WHR. <strong>Cardio + strength:</strong> 150–300 min moderate cardio/week + 3–4 strength sessions targets visceral fat. <strong>Diet:</strong> Whole foods, adequate protein, fiber, and a moderate calorie deficit. <strong>Avoid:</strong> Excess alcohol (linked to visceral fat), added sugars, and refined carbs. <strong>Hormonal factors:</strong> Stress management (high cortisol promotes visceral fat), adequate sleep (7–9 hours), and hormone balance support lower WHR. <strong>Exercise priority:</strong> <strong>Aerobic exercise specifically reduces visceral fat</strong> even without significant weight loss. Regular moderate-intensity cardio improves WHR faster than diet alone. <strong>Timeline:</strong> WHR can improve within 4–8 weeks of consistent exercise and dietary change. As weight decreases, WHR often improves because visceral fat is mobilized first. Track measurements monthly; expect 1–2 cm reduction in waist per month with consistent effort.",
  },
];

export const WATER_INTAKE_FAQS: FAQ[] = [
  {
    question: "How much water should I drink per day?",
    answer:
      "Water needs vary by body weight, activity level, and climate. <strong>General guideline:</strong> 8–10 cups (64–80 oz) daily, but a more personalized approach is better. <strong>Common recommendations:</strong> <strong>Half your body weight in ounces:</strong> 150 lb person = 75 oz water. <strong>30 mL per kg body weight:</strong> 75 kg person = 2,250 mL (75 oz). <strong>Activity adjustment:</strong> Add 12–16 oz per 30 minutes of exercise. <strong>Climate:</strong> Hotter climates increase water loss via sweat; drink more. <strong>Individual variation:</strong> Some people need less; others need more based on metabolism. <strong>Best indicator:</strong> Urine color — pale yellow indicates good hydration; dark yellow indicates dehydration. <strong>Signs of adequate hydration:</strong> Minimal thirst, pale urine, normal energy. <strong>Don't overdo it:</strong> Excessive water intake (>3–4 liters daily) can cause hyponatremia (low sodium), though this is rare. Drink when thirsty and monitor urine color.",
  },
  {
    question: "Does the type of water matter (tap, filtered, mineral, etc.)?",
    answer:
      "<strong>Tap water</strong> is safe and regulated in most developed countries. <strong>Filtered water</strong> removes chlorine and some contaminants; benefits vary by source and filter type. <strong>Mineral water</strong> contains minerals (calcium, magnesium) and is fine, though no special health benefits. <strong>Distilled water</strong> is de-mineralized; not recommended long-term (lacks minerals). <strong>Alkaline water</strong> is marketed as health-promoting, but research doesn't support special benefits. <strong>For most people:</strong> Regular tap or filtered water is adequate. <strong>Water quality concerns:</strong> If you're concerned about local water safety, test it or use a certified filter. <strong>Cost-effective:</strong> Tap water is cheapest; filters add minimal cost. <strong>Environmental:</strong> Tap/filtered water is more sustainable than bottled water. <strong>Bottom line:</strong> The most important thing is drinking enough water; the type is secondary.",
  },
  {
    question: "Does drinking water help with weight loss?",
    answer:
      "<strong>Indirect benefits:</strong> Water supports metabolic function and satiety. Drinking water before meals increases fullness, potentially reducing calorie intake by 75–100 calories per meal (adds up). Water has zero calories. <strong>Thermic effect:</strong> Drinking cold water slightly increases calorie burn as your body warms it (negligible effect, ~10 cal per liter). <strong>Not magic:</strong> Water alone doesn't cause weight loss; calories in vs. out determine fat loss. <strong>Better satiety:</strong> Replacing sugary drinks (soda, juice) with water saves hundreds of calories daily, supporting weight loss. <strong>For athletes:</strong> Proper hydration improves performance and recovery, indirectly supporting muscle building. <strong>For digestive health:</strong> Adequate water + fiber supports digestion and fullness. <strong>Bottom line:</strong> Drinking adequate water supports weight loss through satiety and calorie reduction, but it's not a magic solution. Combine it with a calorie deficit and healthy eating.",
  },
  {
    question: "What are signs of dehydration and overhydration?",
    answer:
      "<strong>Dehydration signs:</strong> Thirst, dark yellow/amber urine, fatigue, dizziness, dry mouth/lips, reduced sweating, muscle cramps. Mild dehydration decreases physical performance and mental focus. <strong>Severe dehydration</strong> (heat stroke) is a medical emergency: confusion, rapid heart rate, no sweating, unconsciousness. <strong>Overhydration signs:</strong> Rare but possible with excessive intake (>3–4 liters in short periods). Symptoms: nausea, vomiting, headache, confusion, seizures (hyponatremia from low sodium). <strong>At-risk groups:</strong> Athletes in endurance events (marathons), very hot/humid environments, and some medical conditions. <strong>Prevention:</strong> Drink to thirst; monitor urine color (pale = hydrated); avoid drinking excessive amounts in short periods. <strong>Exercise hydration:</strong> Drink 17–20 oz fluid ~2 hours before exercise, 7–10 oz every 10–20 minutes during intense exercise (>60 min), and 16–24 oz per lb of body weight lost after exercise. <strong>For most people,</strong> normal thirst cues are reliable.",
  },
];

export const WHR_FAQS: FAQ[] = [
  {
    question: "How is WHR different from other body composition metrics?",
    answer:
      "WHR differs from other metrics by focusing on fat distribution rather than total percentage. <strong>Body Fat Percentage</strong> = total fat as % of weight; doesn't distinguish where fat is stored. <strong>BMI</strong> = weight/height²; ignores both fat distribution and muscle. <strong>WHR</strong> = waist / hip circumference; reveals centralized vs. distributed fat. <strong>Key difference:</strong> WHR captures cardiovascular disease risk better because <strong>visceral fat (belly) is more harmful than hip/leg fat.</strong> <strong>Example:</strong> Two people with 30% body fat: Person A (WHR 1.0) has fat mainly in belly; Person B (WHR 0.80) has fat mainly in hips/legs. Person A has significantly higher disease risk. <strong>Other metrics:</strong> Visceral fat directly measured by CT/MRI (gold standard for cardiovascular assessment but impractical), waist circumference alone (simpler than WHR but less specific). WHR is practical, inexpensive, and clinically validated for disease risk assessment.",
  },
  {
    question: "What WHR values are considered healthy?",
    answer:
      "<strong>Men:</strong> <0.9 = healthy, 0.9–1.0 = moderate risk, >1.0 = high risk. <strong>Women:</strong> <0.85 = healthy, 0.85–0.9 = moderate risk, >0.9 = high risk. <strong>Age variations:</strong> Healthy WHR may increase slightly with age; older adults may have slightly higher thresholds. <strong>Athletic individuals:</strong> Often have low WHR (0.75–0.85) due to low visceral fat. <strong>Importance of ranges:</strong> These are population averages; individual risk depends on overall metabolic health, fitness, genetics, and lifestyle. <strong>Exception:</strong> Someone with high WHR but excellent fitness levels and normal blood work may have lower actual risk than predicted. <strong>Action points:</strong> <0.85 (women) or <0.9 (men) = optimal; 0.85–0.95 (women) or 0.9–1.0 (men) = consider reducing belly fat; >0.95 (women) or >1.0 (men) = elevated risk, prioritize fat loss.",
  },
  {
    question: "Can WHR improve without significant weight loss?",
    answer:
      "<strong>Yes, absolutely.</strong> Aerobic exercise reduces visceral fat (belly) faster than subcutaneous fat (hips/legs), improving WHR even without major weight change. <strong>Example:</strong> Person loses 5 lbs but waist shrinks 1.5 inches and hips shrink 0.5 inches — WHR improves significantly. <strong>Mechanism:</strong> Visceral fat is metabolically active and mobilized first during exercise + calorie deficit. Hip/leg muscle preserves with strength training, offsetting some hip circumference loss. <strong>Timeline:</strong> WHR can improve within 4–6 weeks of consistent cardio (150+ min/week) + strength training + moderate diet, even before significant weight loss. <strong>No weight change scenario:</strong> Someone maintaining weight but replacing belly fat with muscle can improve WHR without scale movement. <strong>Strategy:</strong> If primary goal is reducing cardiovascular risk, focus on aerobic exercise + maintaining/building hip/leg strength + modest calorie deficit. WHR improvement = lower disease risk, even if overall weight doesn't change dramatically.",
  },
  {
    question: "How often should I measure WHR to track progress?",
    answer:
      "Measure WHR monthly for reliable tracking; weekly measurements are noisy due to daily water/food fluctuations. <strong>Measurement consistency:</strong> Measure at the same time of day (morning), with the same technique, wearing minimal clothing. Small technique variations (different measurement heights) change results by 1–2 cm. <strong>Progress threshold:</strong> Changes <0.02 WHR units per month are within measurement error; focus on trends over 3+ months. <strong>Positive signs:</strong> Declining waist with stable/increasing hips = improved WHR (good!). Declining hips disproportionately = WHR may worsen (avoid excessive calorie deficit). <strong>Expectations:</strong> With consistent exercise + diet, expect 0.02–0.04 WHR improvement per month (0.94 → 0.90 in 1–2 months). <strong>Plateaus:</strong> If WHR stalls despite effort, intensity or consistency may need adjustment. <strong>Combine metrics:</strong> Don't obsess over WHR alone; track waist/hip individually, weight, fitness level, and how clothes fit. Holistic progress is more informative than one number.",
  },
];

export const DUE_DATE_FAQS: FAQ[] = [
  {
    question: "How is a due date calculated from the last menstrual period?",
    answer:
      "The due date is estimated as 280 days (40 weeks) from the first day of the last menstrual period (LMP). <strong>Formula:</strong> Take the first day of your LMP, add 9 months and 7 days (or add 280 days). Example: LMP January 1 → EDD October 8. <strong>Why LMP?</strong> It's easy to remember; most women know their LMP. <strong>Accuracy:</strong> Only ~5% of pregnancies deliver exactly on the due date. Most deliver within 2 weeks before or after (37–42 weeks). <strong>Ultrasound dating:</strong> Early ultrasound (8–13 weeks) refines the estimate to within ±3–5 days. <strong>Typical pattern:</strong> About 60% deliver by 40 weeks; 90% by 42 weeks. <strong>Overdue:</strong> Pregnancies past 42 weeks have increased risks and usually require induction. <strong>Early delivery:</strong> Before 37 weeks is preterm and carries special risks. Always follow your healthcare provider's dating assessment, especially if ultrasound differs from LMP calculation.",
  },
  {
    question: "Why does pregnancy date from LMP and not conception date?",
    answer:
      "<strong>Historical reason:</strong> Before ultrasound, LMP was the only reliable reference point women remembered. <strong>Dating convention:</strong> Medical dating starts from LMP (day 1 of last period) for consistency across the world. <strong>The 2-week difference:</strong> LMP to conception is typically 10–14 days (ovulation is ~day 14 of a 28-day cycle). So 'weeks of pregnancy' are measured from LMP, not actual fetal age. <strong>Example:</strong> At your 'due date' (40 weeks from LMP), the fetus is actually ~38 weeks old from conception. <strong>Why this system works:</strong> All healthcare providers use the same reference, eliminating confusion. <strong>Fetal age milestones:</strong> When providers say 'viability' (24 weeks), they mean 24 weeks from LMP (22 weeks actual fetal age). <strong>Understanding:</strong> 'Weeks of pregnancy' (from LMP) ≠ fetal age (from conception). Ultrasound confirms dates by measuring fetal size, which is more accurate than either LMP or conception estimates.",
  },
  {
    question: "What factors can shift my due date?",
    answer:
      "<strong>Cycle length:</strong> If your cycles are longer than 28 days, ovulation happens later; due date shifts later. Example: 35-day cycle (ovulation day 21) means EDD shifts ~7 days later. <strong>Irregular cycles:</strong> If cycle length is uncertain, LMP-based dating has larger error margin (±2 weeks possible). <strong>Ultrasound findings:</strong> If early ultrasound shows different fetal size than expected from LMP dates, due date is adjusted. <strong>Fetal growth variation:</strong> Late-pregnancy ultrasounds (>20 weeks) are less accurate at dating (±3–4 weeks) and rarely change the due date. <strong>Ovulation timing:</strong> If you know ovulation occurred on a specific date (via ovulation tracking), due date is 266 days from ovulation. <strong>IVF:</strong> Due date is calculated from egg retrieval date, not LMP. <strong>Most accurate dating:</strong> First-trimester ultrasound (before 13 weeks). <strong>Bottom line:</strong> Your healthcare provider establishes your due date; if ultrasound shows different dates, the due date is adjusted based on ultrasound findings for accuracy.",
  },
  {
    question: "Is the due date actually when I'll deliver?",
    answer:
      "<strong>No, it's an estimate.</strong> Only ~5% of pregnancies deliver exactly on the due date. <strong>Distribution:</strong> About 40% deliver before the due date, 60% after. <strong>Timeline:</strong> <strong>Preterm (before 37 weeks):</strong> ~10% of pregnancies (increased risks of complications). <strong>Full-term (37–40 weeks):</strong> ~60%. <strong>Post-term (after 42 weeks):</strong> ~2% (increased risks; usually induced). <strong>Factors affecting delivery timing:</strong> Multiple pregnancy (earlier), maternal health conditions (may deliver earlier), genetics (families tend to deliver at similar gestational ages), and spontaneous labor onset (unpredictable). <strong>Why dates vary:</strong> Conception date varies; cycle length varies; fetal growth variations. <strong>Planning perspective:</strong> Your due date is an educated guess within ±2 weeks. Plan to be ready anytime from 37 weeks onward. <strong>Medical approach:</strong> Healthcare providers closely monitor from 42 weeks onward due to increased risk; induction is offered/recommended after that point. Expect your delivery within 2 weeks before or after your estimated due date.",
  },
];

