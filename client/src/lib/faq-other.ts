// FAQ content for Other/Everyday calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.
//
// Writing guidelines:
// - Question phrasing should mirror "People Also Ask" queries
// - Answers are 80-150 words, direct and factual
// - Avoid marketing fluff; prioritize accuracy and practical value
// - HTML formatting permitted in answers (used with dangerouslySetInnerHTML)

import type { FAQ } from "./calculator-registry";

export const AGE_FAQS: FAQ[] = [
  {
    question: "How is age calculated in years, months, and days?",
    answer:
      "Age calculation counts the complete time between your birth date and today. Start by subtracting your birth year from the current year to get years. Then subtract your birth month from the current month for months — if the result is negative, subtract 1 from years and add 12 to months. Finally, subtract your birth day from the current day for days — if negative, subtract 1 from months and add the number of days in the previous month. This accounts for varying month lengths and leap years, giving a precise age rather than a simple year count.",
  },
  {
    question: "What's the difference between actual age and age rounded up?",
    answer:
      "Actual age (or exact age) counts years, months, and days since birth, so you're only a certain age until your next birthday. Age rounded up (age at your next birthday) anticipates your upcoming birthday. For example, if you're 25 years, 11 months, and 20 days old, your exact age is 25, but in about 10 days you'll be 26. Most official systems use exact age. Some cultures or traditions may use age rounding, but legal documents and official records always use exact age from your birth date.",
  },
  {
    question: "Why is knowing your exact age in days useful?",
    answer:
      "Knowing your age in days provides perspective on life duration and is useful in medical research, actuarial calculations, and demographic studies. Scientists use precise age-in-days when studying childhood development or aging processes. Insurance companies use it to calculate premiums accurately. Athletes and coaches track age in days for youth sports classifications. Additionally, milestones like 10,000 days lived become personally meaningful reflections. Understanding your total days lived can motivate health and life planning by showing how much time you've already experienced.",
  },
  {
    question: "How accurate are zodiac signs based on birth date?",
    answer:
      "Zodiac signs are determined by the sun's position during your birth date, with each of the 12 signs spanning approximately 30 days. However, the exact date boundaries vary slightly each year (typically ±1 day) due to the precession of Earth's axis. If you're born on a zodiac cusp (boundary between signs), your exact birth time and location matter. Astrology is not scientifically validated, but zodiac signs are culturally and historically significant. Modern astrology also considers your birth time and location for more detailed astrological profiles called natal charts.",
  },
  {
    question: "What day of the week was I born on?",
    answer:
      "The day of the week you were born on is mathematically determined by your birth date. Zeller's congruence and Doomsday algorithm are two methods used to calculate it. The day of the week repeats every 7 days, so if you know one date was a Monday, any date exactly 7, 14, or 21 days later is also a Monday. Some people track their birth day of the week for sentimental reasons or cultural traditions, as different cultures assign various meanings to birth days of the week.",
  },
];

export const CONCRETE_FAQS: FAQ[] = [
  {
    question: "How much concrete do I need for a slab?",
    answer:
      "Calculate concrete volume by multiplying length × width × depth (all in the same unit). Convert to cubic yards or cubic meters as needed. Example: a slab 10 feet long, 8 feet wide, and 4 inches deep = 10 × 8 × (4/12) = 26.67 cubic feet, or about 1 cubic yard. Always round up slightly (add 10%) to account for waste, spillage, and settling. Ready-mix concrete comes in bags (typically 60–80 lbs each for small projects) or from trucks delivering cubic yards. A standard 80-lb bag yields roughly 0.6 cubic feet when mixed.",
  },
  {
    question: "What's the difference between concrete and cement?",
    answer:
      "Cement is a fine powder binding ingredient, while concrete is the finished material. Concrete is made from cement (10–15%), sand (aggregates), gravel (coarse aggregates), and water mixed together. Cement hydrates and binds the aggregates into a strong, durable solid. Portland cement is the most common type. Other additives (air entrainment, plasticizers, retarders) can improve workability, freeze-thaw resistance, or cure time. When pouring a slab or foundation, you're installing concrete, not pure cement.",
  },
  {
    question: "How long does concrete take to cure?",
    answer:
      "Concrete typically reaches 50% strength in 3–7 days, 75% in 14 days, and full strength (100%) in 28 days. Fast-setting concrete (high-early-strength) can reach 75% in 3 days. Cure time depends on temperature, humidity, concrete mix design, and thickness. Cold temperatures slow curing; hot temperatures speed it up. During curing, concrete should stay moist (not dried out) and protected from traffic and loading. Even after 28 days, concrete continues to gain strength very slowly over months, but 28-day strength is the engineering standard for design.",
  },
  {
    question: "Can I pour concrete in cold or hot weather?",
    answer:
      "Pouring concrete in extreme temperatures requires precautions. <strong>Cold weather (below 50°F):</strong> concrete cures much more slowly and risks frost damage if it freezes before hardening. Use heated water, accelerators, or thermal blankets. <strong>Hot weather (above 85°F):</strong> rapid evaporation causes weak concrete and high shrinkage cracking. Use cool water, shade, and keep concrete moist. Ideal pouring conditions are 50–85°F with moderate humidity. Always check local weather forecasts; avoid pouring if rain is expected within 12 hours or freezing within 48 hours.",
  },
  {
    question: "What's the proper thickness for a concrete slab?",
    answer:
      "Standard concrete slab thickness varies by use. <strong>Residential driveways:</strong> 4 inches. <strong>Patios and walkways:</strong> 3–4 inches. <strong>Garage floors:</strong> 4–6 inches. <strong>Warehouse/commercial floors:</strong> 5–8 inches depending on load. <strong>Footings and foundations:</strong> 12–48 inches depending on soil conditions and structure weight. A 4-inch slab is typical for light residential use. Thicker slabs handle heavier loads and last longer. Thinner slabs crack more easily under freeze-thaw cycles or heavy use. Consult local building codes and engineer recommendations for your specific application.",
  },
];

export const DATE_FAQS: FAQ[] = [
  {
    question: "How many days between two dates?",
    answer:
      "To calculate days between dates, subtract the earlier date from the later date. Most calculators and programming languages can do this directly. For manual calculation, count complete days and account for leap years (years divisible by 4, except centuries not divisible by 400). Example: January 15 to January 22 is 7 days. For longer periods, break into months and years, then sum. A year has 365 days (366 in leap years), a month averages 30.4 days. Online date calculators handle the complexity automatically and are highly reliable.",
  },
  {
    question: "What's the difference between inclusive and exclusive date ranges?",
    answer:
      "<strong>Inclusive:</strong> includes both the start and end dates in the count. Example: January 1–3 is 3 days (1st, 2nd, 3rd). <strong>Exclusive:</strong> includes the start but not the end. Example: January 1–3 is 2 days (1st and 2nd). The inclusive method is common in everyday language ('how many days until Christmas?' counts Christmas). The exclusive method is common in programming ranges. Always clarify which definition is used when counting project days, work hours, or deadline calculations. Many business contexts use inclusive counting for clearer communication.",
  },
  {
    question: "Why do leap years exist?",
    answer:
      "A solar year (time for Earth to orbit the sun) is approximately 365.2425 days, not exactly 365 days. Without leap years, the calendar would drift by about 24 days per century, eventually shifting seasons. A leap year (366 days) corrects this drift. A leap year occurs every 4 years, except century years (1900, 2000) are leap years only if divisible by 400. So 1900 was not a leap year, but 2000 was. This keeps the calendar aligned with Earth's position in its orbit and ensures seasons occur on predictable dates year after year.",
  },
  {
    question: "How do I calculate the day of the week for any date?",
    answer:
      "Several algorithms exist: <strong>Zeller's congruence</strong> uses a formula involving the date components. <strong>Doomsday algorithm</strong> finds a reference day and counts from there. <strong>Perpetual calendar tables</strong> use lookup methods. For practical purposes, use a calendar app, spreadsheet formula (Excel: =WEEKDAY()), or online calculator — they're accurate and instant. To verify manually: any date 7 days apart falls on the same day of the week. If January 1, 2024 is a Monday, then January 8 is also a Monday. This property helps rough calculations.",
  },
  {
    question: "What's the longest and shortest day of the year?",
    answer:
      "The <strong>longest day (summer solstice)</strong> occurs around June 20–21 in the Northern Hemisphere and December 20–21 in the Southern Hemisphere. This is when the sun is highest in the sky. The <strong>shortest day (winter solstice)</strong> occurs around December 20–21 in the Northern Hemisphere and June 20–21 in the Southern Hemisphere. At the solstices, Earth's axial tilt is most extreme relative to the sun. Day length varies by latitude: near the equator, days are always ~12 hours; near the poles, days range from 24 hours of daylight (summer) to 24 hours of darkness (winter).",
  },
];

export const DISCOUNT_FAQS: FAQ[] = [
  {
    question: "How do I calculate a percentage discount?",
    answer:
      "Multiply the original price by the discount percentage, then subtract from the original. Formula: <strong>Discount = Original Price × (Discount % / 100)</strong>. Example: $100 item with a 20% discount = $100 × 0.20 = $20 off, final price $80. Alternatively, multiply the original price by (1 − discount %): $100 × 0.80 = $80. Both methods give the same result. For multi-item discounts, apply the percentage to the subtotal before tax. Some retailers show final price directly; others show discount amount separately. Always verify which is being displayed to ensure you're getting the deal you expect.",
  },
  {
    question: "What's the difference between percentage off and percentage markup?",
    answer:
      "A <strong>percentage discount (off)</strong> reduces the price: 20% off means pay 80% of the original price. A <strong>percentage markup</strong> increases the price: 20% markup means the new price is 120% of the original. Example: $100 item with 20% discount costs $80. The same $100 item with 20% markup costs $120. Discounts and markups are not symmetrical: a 50% discount followed by a 50% markup does not restore the original price (50% off $100 = $50; 50% markup on $50 = $75, not $100). Understanding the difference prevents confusion when comparing sales or cost calculations.",
  },
  {
    question: "How do I calculate total savings with multiple discounts?",
    answer:
      "Apply discounts sequentially (multiply), not additively. Example: $100 item with 20% off, then 10% off. First discount: $100 × 0.80 = $80. Second discount: $80 × 0.90 = $72. Total savings: $28 (28% off). <strong>NOT</strong> 30% off ($70). Use the formula: <strong>Final Price = Original × (1 − D1%) × (1 − D2%)</strong>. Retailers often advertise stacked discounts — layering a store coupon, manufacturer coupon, and seasonal sale. Always calculate the total percentage saved by multiplying the decimal factors, which gives a lower final price than adding percentages.",
  },
  {
    question: "What's the best way to compare deals from different stores?",
    answer:
      "Convert all prices to the same basis: final price after all discounts and taxes. Example: Store A offers $100 item at 20% off ($80) plus tax at 8% ($86.40). Store B offers the same item at $75 with no additional discount, plus tax at 10% ($82.50). Store B is cheaper despite a higher tax rate. Account for shipping, return policies, and loyalty rewards when comparing online to in-store. Calculate the true per-unit cost for bulk discounts (e.g., 'Buy 3, Get 1 Free' = 25% savings). Create a simple spreadsheet to compare multi-item purchases and ensure you're comparing the final out-of-pocket cost.",
  },
  {
    question: "How do I reverse-calculate the original price from a discounted price?",
    answer:
      "If you know the discounted price and discount percentage, use: <strong>Original Price = Discounted Price / (1 − Discount %)</strong>. Example: you paid $80 after a 20% discount. Original = $80 / 0.80 = $100. If a receipt shows 'Save $20' and the final price is $80, the discount was 20% ($20 / $100). This calculation is useful for evaluating price history, understanding how much markup retailers apply, and determining whether a 'sale' price is genuinely cheaper than your typical shopping price. Always verify the original price before deciding if a discount is worthwhile.",
  },
];

export const ELECTRICITY_COST_FAQS: FAQ[] = [
  {
    question: "How is electricity cost calculated?",
    answer:
      "Electricity cost = Power (in kilowatts) × Time (in hours) × Electricity Rate (per kWh). Formula: <strong>Cost = (Watts / 1000) × Hours × Rate</strong>. Example: a 100W bulb running 10 hours per day at $0.12 per kWh costs: (100/1000) × 10 × 0.12 = $0.12 per day or $3.60 per month (30 days). Utilities charge per kilowatt-hour (kWh), a unit of energy. Your electricity bill sums all devices' usage. Many utilities offer tiered rates (lower per-unit cost for higher usage) or time-of-use rates (cheaper during off-peak hours). Check your utility bill for your exact rate per kWh in your area and time of day.",
  },
  {
    question: "What uses the most electricity in a typical home?",
    answer:
      "<strong>Heating and cooling (40–50%)</strong> dominate electricity use, especially in extreme climates. <strong>Water heating (15–20%)</strong>, <strong>lighting and appliances (10–15%)</strong>, and <strong>refrigeration (5–10%)</strong> are significant. Individual appliances: electric ovens (~5 kW), clothes dryers (~5 kW), electric heaters (~1–2 kW), air conditioners (~3–5 kW), refrigerators (~0.15 kW continuous but 30–40% duty cycle). Modern LED bulbs (~10W) use far less than incandescent (60W) or halogen bulbs. Upgrading to ENERGY STAR certified appliances, proper insulation, and smart thermostats can reduce usage by 10–30%. Your specific mix depends on climate, home size, and appliance efficiency.",
  },
  {
    question: "How can I reduce my electricity bill?",
    answer:
      "Focus on the high-usage items: <strong>HVAC:</strong> use a programmable thermostat, seal air leaks, maintain filters. <strong>Water heating:</strong> lower temperature to 120°F, insulate pipes, fix leaks. <strong>Lighting:</strong> switch to LED bulbs (75% less energy than incandescent). <strong>Appliances:</strong> run full loads, use eco modes, replace old units. <strong>Phantom loads:</strong> unplug chargers and devices in standby mode (they draw 5–10W each). <strong>Rate optimization:</strong> if your utility offers time-of-use rates, shift usage to off-peak hours. Studies show an average household can reduce consumption by 20–30% through these measures, saving hundreds annually.",
  },
  {
    question: "What's the difference between kilowatts and kilowatt-hours?",
    answer:
      "A <strong>kilowatt (kW)</strong> is a unit of power (rate of energy flow), like miles per hour. A <strong>kilowatt-hour (kWh)</strong> is energy consumed over time, like total miles driven. A 100W bulb uses 0.1 kW of power. Running for 10 hours consumes 1 kWh of energy (0.1 kW × 10 hours). Your utility meter tracks kWh, and your bill charges per kWh. Understanding this distinction helps you identify which appliances cost the most to run. High-power appliances (ovens, heaters, AC units) consume significant kWh, while low-power devices (LED bulbs, phone chargers) consume minimal kWh even if run continuously.",
  },
  {
    question: "Why does my electricity bill vary month to month?",
    answer:
      "Seasonal temperature swings cause the largest variation: summer air conditioning and winter heating drive peaks. Usage patterns also matter: working from home increases daytime consumption. Some utilities charge higher rates during peak demand hours (typically 4 PM–9 PM on hot days). Weather extremes intensify this. Additionally, billing cycles vary by date, so a bill might cover 28–35 days depending on meter reading schedule. Some utilities add seasonal surcharges. Check your utility bill for the kWh total and compare to previous months. Smart meters let you see daily or hourly usage to identify spikes. Unusual increases might indicate appliance failure or efficiency drops.",
  },
];

export const FUEL_COST_FAQS: FAQ[] = [
  {
    question: "How do I calculate fuel cost per mile driven?",
    answer:
      "Formula: <strong>Cost per Mile = Fuel Price (per gallon) / Fuel Efficiency (miles per gallon)</strong>. Example: at $3.50/gallon and 25 mpg: $3.50 / 25 = $0.14 per mile. To estimate trip cost: multiply cost per mile by total distance. A 500-mile trip at $0.14/mile costs $70 in fuel. This calculation helps you budget for road trips and compare vehicle efficiency. Fuel prices fluctuate daily, so update your rate regularly. Modern vehicles often display estimated fuel economy on the dashboard. Keep records of fill-ups and miles driven to calculate your true efficiency; EPA estimates can differ from real-world performance due to driving style, traffic, weather, and road conditions.",
  },
  {
    question: "Does idling or short trips waste fuel?",
    answer:
      "<strong>Idling:</strong> uses 0.1–0.3 gallons per hour, a small waste for short waits (under 1 minute). Idling longer than 10 seconds burns more fuel than engine restart, so it's usually better to turn off if you'll wait more than 10 seconds. <strong>Short trips:</strong> a cold engine consumes extra fuel and produces emissions because the catalytic converter hasn't warmed up. Short trips (under 3 miles) can consume 2–3 times normal fuel per mile. Combining trips and avoiding unnecessary cold starts saves fuel. City driving (frequent stops, lower speeds) reduces efficiency compared to highway driving. Walking or biking for trips under a mile saves the most fuel and emission per mile.",
  },
  {
    question: "What factors affect fuel economy?",
    answer:
      "<strong>Driver behavior:</strong> aggressive acceleration and speeding reduce mpg by 15–30%. <strong>Vehicle maintenance:</strong> dirty air filters, low tire pressure, and worn spark plugs reduce efficiency. <strong>Load:</strong> every 100 lbs reduces mpg by ~1–2%. <strong>Terrain:</strong> hills and rough roads decrease efficiency. <strong>Weather:</strong> cold temperatures increase fuel use (thicker oil, extra engine warm-up). <strong>Vehicle design:</strong> aerodynamics, weight, and engine efficiency matter most. <strong>Driving conditions:</strong> highway driving at 55 mph uses less fuel than city stop-and-go at the same speed. Smooth acceleration, steady speed, and regular maintenance are the easiest ways to improve fuel economy.",
  },
  {
    question: "How do I calculate total fuel cost for a vehicle per year?",
    answer:
      "Estimate annual miles driven, then multiply by cost per mile. Formula: <strong>Annual Fuel Cost = Annual Miles / Fuel Efficiency (mpg) × Fuel Price (per gallon)</strong>. Example: 12,000 miles/year at 25 mpg and $3.50/gallon = (12,000 / 25) × $3.50 = 480 × $3.50 = $1,680/year. This helps evaluate vehicle affordability. A 20 mpg vehicle costs $2,100/year on the same driving. Upgrading from 20 mpg to 30 mpg saves $700/year. Electric vehicles shift this to electricity costs (typically $300–600/year for equivalent driving). Hybrid vehicles reduce fuel cost by 30–50%. Track fuel spending over several months to verify estimates; variations in fuel price and driving patterns are common.",
  },
  {
    question: "What's the environmental and financial impact of fuel consumption?",
    answer:
      "Each gallon of gasoline burned emits approximately 20 lbs of CO₂, a greenhouse gas contributing to climate change. A typical car emitting 5 tons of CO₂ annually compounds the problem across millions of vehicles. Financially, fuel costs have increased significantly; a $0.50/gallon increase adds $600/year to a vehicle consuming 1,200 gallons (typical for 12,000-mile/year driving). Reducing fuel consumption lowers both your costs and emissions. Carpooling, public transit, biking, walking, and electric vehicles all reduce environmental impact. At current fuel prices, switching to an electric vehicle often pays back through fuel and maintenance savings within 5–7 years.",
  },
];

export const PASSWORD_GENERATOR_FAQS: FAQ[] = [
  {
    question: "What makes a strong password?",
    answer:
      "A strong password has at least 12–16 characters and includes uppercase letters, lowercase letters, numbers, and special characters (!@#$%^&*). Avoid dictionary words, common patterns (12345, qwerty), and personal info (names, birthdays). <strong>Entropy</strong> matters most — randomness makes passwords harder to crack. A random 12-character password with all character types is effectively unbreakable by brute force. Examples: 'xK9$mP2@wL5!' is strong; 'Password123' is weak because it's predictable. Use a password manager to generate and store complex passwords — you can't reasonably remember dozens of strong unique passwords. Change passwords only if there's been a breach; regularly changing 'good' passwords doesn't improve security.",
  },
  {
    question: "How long does it take to crack a password?",
    answer:
      "Time to crack depends on password strength and computing power. A 6-character password (letters only) takes seconds. An 8-character mixed password takes hours. A 12-character mixed password takes centuries. Modern GPUs and distributed computing make cracking faster, but well-designed systems add friction: rate limiting (max 3 attempts per minute), account lockout (after 10 failed attempts), and salted hashing (adds randomness to each password's hash). Most breaches succeed through phishing, weak sites, or reused passwords, not brute force. A unique 12+ character password for each site protects against account takeover even if one site is breached.",
  },
  {
    question: "Should I use a password manager?",
    answer:
      "Yes, strongly recommended. Password managers (1Password, Bitwarden, LastPass) generate and securely store strong unique passwords for every site. You remember one master password; the manager autofills others. Benefits: impossible-to-guess passwords, protection if a site is breached (your password is unique there), reduction of phishing risk (password only works on correct site). Risks are minimal if the manager is well-designed and your master password is strong. Managing dozens of strong unique passwords manually is impractical and leads to password reuse, the primary vulnerability. Even IT professionals use password managers. The convenience and security trade-off strongly favors using a manager.",
  },
  {
    question: "What's the difference between password length and complexity?",
    answer:
      "<strong>Length</strong> (number of characters) is more important than <strong>complexity</strong> (mix of character types). A 20-character password of just lowercase letters ('abcdefghijklmnopqrst') is stronger than a 10-character complex password ('xK9$mP2@wL'). Length exponentially increases crack time (each additional character multiplies possibilities). However, combining length and complexity is ideal: 16 characters with mixed types is vastly stronger than either alone. Many password strength meters misleadingly emphasize complexity; 'length is strength' is the core principle. Aim for 12+ characters; if forced to choose, prioritize length.",
  },
  {
    question: "Is it safe to share passwords or reuse them?",
    answer:
      "Never share passwords — assume anyone with your password can impersonate you. If you must grant access, use a password manager's sharing feature (temporary, revokable access) or reset the password after the person is done. <strong>Never reuse passwords.</strong> If one site is breached, attackers try that email/password combo on others (credential stuffing). This is the #1 source of account takeover. A unique password per site means a breach affects only that one account. Use a password manager to generate and track unique passwords. The only exception: accounts you don't care about (temporary email, one-time signup) can safely use throwaway passwords or the same weak password, since compromise is low-consequence.",
  },
];

export const RANDOM_NUMBER_FAQS: FAQ[] = [
  {
    question: "How are random numbers generated on computers?",
    answer:
      "Computers use two methods: <strong>pseudorandom</strong> (deterministic algorithms that appear random but repeat after a long cycle) and <strong>true random</strong> (based on physical randomness like atmospheric noise, radioactive decay). Most apps use pseudorandom generators (Mersenne Twister, xorshift) seeded with a value (often system time). These are fast, reproducible, and sufficient for games and simulations. Cryptographic applications need true random generators or hardware random sources because pseudorandom is predictable if the seed is known. For casual use (dice rolls, raffles), pseudorandom is fine. For security (encryption keys, password salts), true random is required.",
  },
  {
    question: "What's the difference between truly random and pseudorandom?",
    answer:
      "<strong>Truly random:</strong> completely unpredictable, based on natural phenomena (radioactive decay, thermal noise). <strong>Pseudorandom:</strong> deterministic algorithm starting from a seed that produces an apparently random sequence but will repeat. Example: seed 42 in a pseudorandom generator always produces the same sequence. Truly random cannot be reproduced; pseudorandom can. For lotteries and secure applications, truly random is required legally and cryptographically. For games and simulations, pseudorandom suffices and is faster. Most online random generators are pseudorandom seeded by system time or user input (mouse movements), sufficient for non-critical use.",
  },
  {
    question: "Can I predict a random number?",
    answer:
      "If you know the algorithm and seed, pseudorandom numbers are completely predictable. Without the seed, a long sequence of pseudorandom numbers reveals the seed through statistical analysis (given enough samples). True random numbers are unpredictable by definition. In practice, most 'random' generators (JavaScript Math.random(), Python random module) are pseudorandom but using a constantly-changing system seed, making prediction very difficult without reverse-engineering the implementation. For security-critical applications, cryptographic random generators (Java SecureRandom, OpenSSL) add extra unpredictability. For casual use, the built-in random generator is fine; predictability doesn't matter for games.",
  },
  {
    question: "What does 'seed' mean in random number generation?",
    answer:
      "A <strong>seed</strong> is the initial value fed into a pseudorandom algorithm. The same seed always produces the same sequence, making the process reproducible. Example: seed 100 might generate [47, 82, 31, 56, ...], and seed 100 again generates the same sequence. Seeds are often set from system time or user input; a different time gives a different seed and different sequence. Cryptographic applications use unpredictable seeds (hardware random sources). For testing software, using a fixed seed reproduces bugs consistently. Some games use a seed based on world generation so the same 'world' appears if you replay with the same seed.",
  },
  {
    question: "How do random number generators ensure fairness in games or lotteries?",
    answer:
      "Gaming and lottery randomness must be cryptographically secure and independently audited. Online casinos use certified random number generators (RNGs) tested by third parties. Lottery drawings use mechanical randomness (ball machines) or hardware random generators and are overseen by regulators. Blockchain-based systems use decentralized randomness (consensus mechanisms preventing manipulation). Fair gaming requires: <strong>unpredictability</strong> (no one can guess next number), <strong>independence</strong> (past numbers don't influence future), <strong>uniform distribution</strong> (all outcomes equally likely), and <strong>transparency</strong> (public audit or certification). Reputable platforms are audited regularly; rigged systems are detectable statistically and prosecuted as fraud.",
  },
];

export const TIME_FAQS: FAQ[] = [
  {
    question: "How do I convert between different time zones?",
    answer:
      "Determine the time difference (offset) between zones. Example: New York (EST) is UTC-5, Tokyo is UTC+9, difference is 14 hours. If it's 3 PM in New York, add 14 hours: 3 + 14 = 17 (5 PM next day in Tokyo). <strong>Formula: Target Time = Source Time + (Target Offset − Source Offset)</strong>. Daylight Saving Time (DST) complicates this: when the US switches, the offset changes by 1 hour. Online converters handle DST automatically. For scheduling across zones, use 24-hour time and explicitly state the zone (e.g., '3 PM EST' not '3 PM'). Many calendar apps auto-convert and warn about time zone differences.",
  },
  {
    question: "What's the difference between UTC and GMT?",
    answer:
      "UTC (Coordinated Universal Time) and GMT (Greenwich Mean Time) are often used interchangeably in everyday language, but technically differ slightly. GMT is a timezone based on Earth's solar position at the Prime Meridian, adjusted for orbit variations. UTC is a standard time scale based on atomic clocks and is more precise. The difference is usually negligible (under 1 second). UTC is the modern standard used for scientific work, computing, and aviation. All other time zones are defined as offsets from UTC (e.g., EST is UTC-5). For practical purposes, you can treat them as the same, but official standards prefer UTC.",
  },
  {
    question: "How do I calculate time differences across days?",
    answer:
      "When times cross midnight, convert to a 24-hour format and add/subtract hours. Example: from 10 PM (22:00) to 2 AM next day is 4 hours (22 to 24 is 2 hours, 0 to 2 is 2 hours, total 4). <strong>Formula: Elapsed = End Time − Start Time; if negative, add 24 hours</strong>. For longer spans (multiple days), break into days and remainder hours. Example: 36 hours = 1 day + 12 hours. This matters for work shifts, project timelines, and sleep tracking. Digital tools (calculators, spreadsheets) handle this automatically; manual calculation requires careful attention to the midnight transition.",
  },
  {
    question: "What are the different calendar systems and how do they differ?",
    answer:
      "The <strong>Gregorian calendar</strong> (365.2425 days/year with leap years) is the international standard. <strong>Julian calendar</strong> (365.25 days) is older and drifts 1 day per 128 years; used by Orthodox churches. <strong>Islamic calendar</strong> (354 days) is lunar-based and cycles through seasons every ~33 years. <strong>Hebrew calendar</strong> (354–355 days) is lunisolar, adding leap months. <strong>Buddhist and Hindu calendars</strong> vary by region and tradition. Conversions between calendars are complex. Most software uses Gregorian; websites convert between systems if needed. Important: when scheduling across cultures, specify both date and calendar system.",
  },
  {
    question: "How do I calculate ages in months or weeks?",
    answer:
      "For <strong>months:</strong> count calendar months between birth and today. Example: born June 15, today is August 20 = 2 months and 5 days. If the day is earlier in the current month than birth day, subtract 1 month and add days in the previous month. For <strong>weeks:</strong> divide total days by 7. Total days = (Date2 − Date1). Example: 365 days ÷ 7 ≈ 52 weeks and 1 day. <strong>Decimal weeks:</strong> 365 ÷ 7 = 52.14 weeks. These are useful for tracking baby development (age in weeks is common 0–2 years), project timelines, or event anniversaries. Our calculator handles these conversions for you.",
  },
];

export const UNIT_CONVERTER_FAQS: FAQ[] = [
  {
    question: "How do metric and imperial units relate to each other?",
    answer:
      "The metric system (meters, kilograms, liters) is based on powers of 10, making conversions simple. The imperial system (feet, pounds, gallons) uses arbitrary conversions. Key conversions: 1 inch = 2.54 cm, 1 pound = 0.453592 kg, 1 mile = 1.60934 km, 1 gallon = 3.78541 liters. Metric is used worldwide in science, medicine, and most countries. The US primarily uses imperial, though scientists and medical professionals use metric. The metric system's base-10 design makes it easier to learn and use. Conversions between the two require memorizing key ratios or using a converter. Modern devices often allow toggling between units in settings.",
  },
  {
    question: "Why are conversion factors sometimes approximate?",
    answer:
      "Many conversions are irrational numbers that can't be expressed exactly as decimals. Example: 1 inch = 2.54 cm exactly (by definition), but 1 pound = 0.453592376 kg (approximately). The more decimal places you include, the more precise the conversion, but for practical purposes, 4–6 decimal places suffice. Rounding introduces small errors that compound in chained conversions. For critical applications (engineering, pharmaceuticals), use more precise factors. For everyday use (cooking, casual measurement), 2–3 decimal places is fine. Calculators handle precision automatically; manual conversion requires choosing an appropriate rounding level.",
  },
  {
    question: "How do I convert between temperature scales?",
    answer:
      "<strong>Celsius to Fahrenheit:</strong> F = (C × 9/5) + 32. <strong>Fahrenheit to Celsius:</strong> C = (F − 32) × 5/9. <strong>Celsius to Kelvin:</strong> K = C + 273.15. Examples: 0°C = 32°F, 100°C = 212°F, 20°C = 68°F. Kelvin is used in science (no negative temperatures; absolute zero is 0 K). Celsius is used internationally and in science. Fahrenheit is used in the US and weather. The conversion formulas are fixed and precise — no approximation needed. Remember: Fahrenheit has a 32-degree offset and a 9/5 scale factor, making it less intuitive than Celsius.",
  },
  {
    question: "How do I convert between units in different categories (e.g., length to area)?",
    answer:
      "You cannot directly convert between different physical quantities. Example: you can't convert meters (length) to square meters (area) without additional information. However, you can: <strong>Convert within categories:</strong> length to length (meters to feet), area to area (square meters to square feet). <strong>Combine units:</strong> to find area, multiply length × width, then convert the result. To convert square meters to square feet: 1 m² = 10.764 ft². Unit prefixes (kilo-, centi-, milli-) apply to any unit (kilometer, centimeter, kilogram). Always ensure your conversion is within the same category or that you have the additional information needed.",
  },
  {
    question: "What's the difference between mass and weight?",
    answer:
      "<strong>Mass</strong> is the amount of matter in an object (constant everywhere). <strong>Weight</strong> is the force exerted by gravity on that mass (varies by location). On Earth's surface, weight ≈ mass × 9.8 m/s². On the Moon, the same mass weighs 1/6 as much. In everyday language, 'weight' usually means mass. Scientific contexts distinguish carefully. Kilogram (kg) measures mass; Newton (N) measures force/weight. For practical conversions: 1 kg ≈ 2.2 lbs (both commonly used for 'weight' colloquially). Scales measure mass (displayed as lbs or kg), not true weight in Newtons. In conversion, note whether you're converting mass or force — they use different factors.",
  },
];

export const HOURS_FAQS: FAQ[] = [
  {
    question: "How do I calculate total hours worked with breaks deducted?",
    answer:
      "Subtract break time from total elapsed time. Formula: <strong>Hours Worked = (End Time − Start Time) − Break Duration</strong>. Example: 9 AM to 5 PM (8 hours) minus 1 hour lunch break = 7 hours worked. Convert minutes to decimal hours (60 minutes = 1 hour). For multiple breaks, sum them first. Example: 9 AM to 5 PM (8 hours) minus 30-min lunch and 15-min breaks twice = 8 − 1.25 = 6.75 hours. Time clock systems automatically calculate this. For payroll, always verify that breaks are correctly deducted — some employers count unpaid breaks, others don't.",
  },
  {
    question: "How do I track overtime hours?",
    answer:
      "<strong>Overtime</strong> typically begins after 40 hours/week (US) or varies by country and industry. Employees track total hours, then subtract 40 to find overtime. Example: worked 43 hours total = 3 hours overtime. Some jurisdictions count daily overtime (hours over 8 per day) separately. Double-check your employer's overtime policy and relevant labor laws. Overtime is often compensated at 1.5× (time-and-a-half) or 2× (double time) the regular rate. Managers must maintain accurate time records for payroll and legal compliance. Misclassifying or undercounting overtime can violate wage laws.",
  },
  {
    question: "What's the difference between gross and net pay?",
    answer:
      "<strong>Gross pay</strong> = hours × hourly rate (before deductions). <strong>Net pay</strong> = gross pay − taxes − benefits − other deductions. Example: 40 hours at $15/hour = $600 gross. Minus $72 federal tax, $46 Social Security, $11 Medicare, $20 health insurance = $451 net (take-home). Your pay stub shows both. Gross is what you owe taxes on; net is what you deposit. For budgeting, use net pay. For credit applications, lenders often ask for gross income. Understanding your gross helps identify incorrect tax withholding — you can adjust W-4 if too much or too little is withheld.",
  },
  {
    question: "How do I calculate hourly rate from salary?",
    answer:
      "<strong>Hourly Rate = Annual Salary / (Hours per Week × Weeks per Year)</strong>. Standard US work is 40 hours/week, 52 weeks/year (2,080 hours annually). Example: $50,000 salary ÷ 2,080 hours = $24.04/hour. Adjust for unpaid holidays and vacation time. If you get 10 holidays + 15 vacation days (25 days total), work 2,055 hours: $50,000 ÷ 2,055 = $24.33/hour. This helps compare job offers (salary vs. hourly) and understand true hourly value. Remember: this is straight time; overtime multipliers apply on top.",
  },
  {
    question: "Why might hours worked not match time clocked in and out?",
    answer:
      "Reasons include: <strong>unpaid breaks</strong> (meal breaks typically 30–60 min are not paid), <strong>rounding</strong> (some systems round to nearest quarter-hour), <strong>clock-in errors</strong> (forgetting to clock out, clocking in early), <strong>paid time off</strong> (vacation, sick leave count as hours worked but not 'clocked'), <strong>travel time</strong> (some jobs pay for travel time, others don't). Always review your pay stub against time records. If discrepancies exist, contact HR or payroll immediately. Wage theft (underpaying for hours worked) is a legal violation; employees have the right to all earned wages.",
  },
];

export const SUBNET_FAQS: FAQ[] = [
  {
    question: "What is a subnet and why do we use subnetting?",
    answer:
      "A subnet (subnetwork) divides a large IP address range into smaller, manageable segments. Without subnetting, all devices on the same network broadcast to each other, creating congestion. Subnetting isolates traffic, improves efficiency, and allows better organization. Example: a company with 500 devices in one /24 network becomes congested; splitting into multiple /25 networks (128 devices each) reduces congestion and improves security by isolating departments. Routers forward traffic between subnets; devices within a subnet communicate directly. Subnetting is essential for network planning, VLANs, and preventing broadcast storms. Network admins use subnet calculators to plan IP allocation efficiently.",
  },
  {
    question: "How do I calculate a subnet mask from CIDR notation?",
    answer:
      "CIDR notation shows the number of network bits. Example: /24 means 24 network bits, 8 host bits (32 − 24). Subnet mask in binary: 24 ones, then 8 zeros. Convert to decimal: 11111111.11111111.11111111.00000000 = 255.255.255.0. <strong>/16</strong> = 255.255.0.0, <strong>/8</strong> = 255.0.0.0, <strong>/30</strong> = 255.255.255.252. Each binary '1' represents a network bit; each '0' represents a host bit. A /32 is a single IP (no host bits). A /31 is 2 IPs (1 host bit, special case for point-to-point links). Memorizing common masks (/24, /25, /16, /8) helps; calculators automate the conversion.",
  },
  {
    question: "How many usable IP addresses are in a subnet?",
    answer:
      "<strong>Usable = 2^(host bits) − 2</strong>. The −2 accounts for the network address and broadcast address, which are reserved. Example: /24 subnet (8 host bits) = 2^8 − 2 = 254 usable addresses. /25 (7 host bits) = 2^7 − 2 = 126 usable. /30 (2 host bits) = 2^2 − 2 = 2 usable (for point-to-point links like router connections). A /32 has 2^0 = 1 address with no host bits (single IP, not really a subnet). For large networks, /16 provides 65,534 usable addresses; /8 provides 16.7 million. Network engineers choose subnet size based on expected device count, leaving room for growth.",
  },
  {
    question: "What are private and public IP address ranges?",
    answer:
      "<strong>Private IP ranges (RFC 1918):</strong> not routable on the internet, reserved for internal networks. <strong>10.0.0.0/8</strong> (10.0.0.0 – 10.255.255.255), <strong>172.16.0.0/12</strong> (172.16.0.0 – 172.31.255.255), <strong>192.168.0.0/16</strong> (192.168.0.0 – 192.168.255.255). <strong>Public IP ranges:</strong> unique, routable on the internet, owned by ISPs or organizations. Private IPs are used for home networks, office LANs, and cloud private subnets. Devices on different private networks can't communicate directly without a gateway/NAT. Every device on the internet has a public IP visible to servers. VPNs and proxies mask your public IP. Understanding IP ranges helps with network design and security.",
  },
  {
    question: "How do I find the network address and broadcast address?",
    answer:
      "Apply the subnet mask to the IP address. Example: 192.168.1.130 /25 (mask 255.255.255.128). <strong>Network address:</strong> AND the IP with the mask: 192.168.1.130 AND 255.255.255.128 = 192.168.1.128. <strong>Broadcast address:</strong> set all host bits to 1: 192.168.1.128 + (2^(host bits) − 1) = 192.168.1.128 + 127 = 192.168.1.255. Usable IPs: 192.168.1.129 to 192.168.1.254 (126 addresses). Network and broadcast addresses are reserved and can't be assigned to devices. Routers use the network address for routing; broadcast address sends to all devices in the subnet. Subnet calculators compute these instantly, preventing manual errors.",
  },
];

export const ACRES_TO_HECTARES_FAQS: FAQ[] = [
  {
    question: "What is the conversion factor from acres to hectares?",
    answer:
      "1 acre equals approximately 0.4047 hectares. This standard conversion comes from the metric system definition: 1 hectare = 10,000 square meters, while 1 acre = 4,047 square meters. To convert acres to hectares, multiply the number of acres by 0.4047. Example: 10 acres × 0.4047 = 4.047 hectares. The conversion is consistent worldwide for land measurement in agriculture, real estate, and forestry.",
  },
  {
    question: "Why do different countries use different land measurements?",
    answer:
      "Historical development in each region led to different measurement systems. The United States uses acres (inherited from imperial units), while most of the world adopted hectares as part of the metric system. Acres are still common in the US, UK, Australia, and Canada. Hectares dominate in Europe, Asia, and most metric countries. This creates a need for conversion when comparing land sizes internationally or in cross-border transactions. Understanding both systems is important for global real estate and agriculture discussions.",
  },
  {
    question: "What land size is typically measured in acres vs. hectares?",
    answer:
      "Small residential properties are often listed in acres (US/UK), while agricultural and large commercial land is listed in hectares (metric countries). A typical US single-family home lot might be 0.25 acres (about 0.1 hectares), while a small farm might span 40 acres (16 hectares). Large projects like national parks or forest reserves use hectares to handle bigger numbers conveniently. Professional real estate agents and agricultural buyers should be comfortable with both units.",
  },
  {
    question: "How many acres are in a hectare?",
    answer:
      "1 hectare equals approximately 2.471 acres. This is the inverse of the 1 acre = 0.4047 hectares conversion. To convert hectares to acres, multiply by 2.471. Example: 5 hectares × 2.471 = 12.355 acres. This conversion is useful when reading property listings or agricultural reports from different countries, ensuring accurate comparisons of land size.",
  },
];

export const BANDWIDTH_FAQS: FAQ[] = [
  {
    question: "What is bandwidth and how is it different from speed?",
    answer:
      "Bandwidth is the maximum data transfer capacity of a connection (measured in Mbps or Gbps), while speed refers to how fast data actually travels. High bandwidth (e.g., 1 Gbps fiber) allows more data per second, but actual speed also depends on server performance, network congestion, and device hardware. Think of bandwidth as a highway width; speed is how fast cars travel. ISPs advertise bandwidth (e.g., 'up to 100 Mbps'), but actual download speeds vary by time of day and network load. For streaming, gaming, and downloads, higher bandwidth enables faster, more reliable performance.",
  },
  {
    question: "How much bandwidth do I need for streaming video?",
    answer:
      "<strong>HD video (720p):</strong> 2.5–4 Mbps. <strong>Full HD (1080p):</strong> 5–8 Mbps. <strong>4K ultra HD:</strong> 15–25 Mbps. These are minimum recommendations; actual needs depend on the streaming service, codec, and network conditions. Netflix, YouTube, and Disney+ adjust quality automatically if bandwidth drops. For a household with multiple users, add 3–5 Mbps per simultaneous stream. A 100 Mbps internet plan easily supports 4K streaming plus simultaneous web browsing, while 25 Mbps works for HD on one or two devices. Upload bandwidth (less commonly available) is relevant for video conferencing and content creation.",
  },
  {
    question: "What is the difference between download and upload bandwidth?",
    answer:
      "Download bandwidth is the speed at which data comes to your device; upload bandwidth is the speed at which data leaves your device. Most internet plans offer much higher download (e.g., 100 Mbps) than upload (e.g., 10 Mbps). Downloading is common (streaming, browsing), while uploading is needed for video conferencing, backing up files to the cloud, or live streaming. Content creators and remote workers benefit from symmetric (equal) bandwidth plans. Standard residential plans prioritize download; business fiber connections often offer better upload speeds.",
  },
  {
    question: "How do I calculate how long a file download will take?",
    answer:
      "<strong>Download Time = File Size (bits) / Bandwidth (bits per second)</strong>. Example: 500 MB file on a 50 Mbps connection = 500 × 8 Mbits / 50 Mbps = 80 seconds (~1.3 minutes). Note: 1 MB = 8 Mbits (mega-bytes to mega-bits). Real-world speeds are usually 10–30% slower than advertised due to overhead and network congestion. A 1 GB file on 100 Mbps takes theoretically 80 seconds but realistically 90–110 seconds. Multiple simultaneous downloads or network interference reduce effective bandwidth per file.",
  },
];

export const CELSIUS_TO_FAHRENHEIT_FAQS: FAQ[] = [
  {
    question: "What is the formula to convert Celsius to Fahrenheit?",
    answer:
      "<strong>°F = (°C × 9/5) + 32</strong>. Example: 25°C = (25 × 9/5) + 32 = 45 + 32 = 77°F. This formula accounts for two differences: Celsius has a different zero point (water freezes at 0°C, which is 32°F), and the scales have different step sizes (Celsius uses 0–100 for water's freezing to boiling; Fahrenheit uses 32–212). The 9/5 ratio (or 1.8) converts the temperature difference. Online calculators and most devices can instantly convert, but understanding the formula helps with manual verification.",
  },
  {
    question: "Why do Celsius and Fahrenheit have different zero points?",
    answer:
      "Celsius (centigrade) defines 0 as the freezing point of water and 100 as the boiling point, making it intuitive for water-based science. Fahrenheit, created in 1724, has its zero near the freezing point of a specific salt-water brine, chosen somewhat arbitrarily. Water freezes at 32°F and boils at 212°F. Celsius became the scientific standard globally because it's more logical (100-degree range for water's phase change, easier metric alignment). Fahrenheit persists in the US, Bahamas, Belize, Cayman Islands, Palau, and some territories for historical reasons. Understanding both is essential in scientific, medical, and international contexts.",
  },
  {
    question: "At what temperature are Celsius and Fahrenheit equal?",
    answer:
      "<strong>−40°C = −40°F</strong>. This is the only temperature where the two scales intersect. You can verify: °F = (−40 × 9/5) + 32 = −72 + 32 = −40. This happens because the ratio and offset balance out at exactly −40. This fact is useful in quick verification: if a conversion claims a negative temperature in both scales is identical, it must be −40 (or close to it). The intersection has no practical significance but is a common trivia point.",
  },
  {
    question: "How accurate do Celsius to Fahrenheit conversions need to be?",
    answer:
      "For cooking and weather, 1–2 degree Fahrenheit precision is sufficient. For medical (body temperature) and scientific work, 0.1°F precision is expected. Body temperature 37°C = 98.6°F (clinically significant). Cooking often uses rough conversions: 200°C ≈ 400°F (9/5 ratio gives 392°F; 400 is close enough). In labs and industrial settings, precise thermometers directly measure in the needed scale rather than converting. Online calculators provide exact conversions; manual math with rounded values (9/5 ≈ 1.8) is sufficient for everyday purposes.",
  },
];

export const CM_TO_INCHES_FAQS: FAQ[] = [
  {
    question: "How many inches are in a centimeter?",
    answer:
      "1 centimeter equals approximately 0.3937 inches, or about 0.39 inches for rough estimates. To convert centimeters to inches, multiply by 0.3937. Example: 10 cm × 0.3937 = 3.937 inches. Conversely, 1 inch = 2.54 centimeters (a standard that's easier to remember). This conversion is used constantly in tailoring, photography, display sizing, and international product specifications. Most tape measures and rulers now show both units for convenience.",
  },
  {
    question: "What are the most common centimeter-to-inch measurements?",
    answer:
      "<strong>2.54 cm = 1 inch, 5.08 cm = 2 inches, 7.62 cm = 3 inches, 10.16 cm = 4 inches, 15.24 cm = 6 inches, 30.48 cm = 12 inches (1 foot).</strong> These key conversions help with quick mental math. Clothing sizes, monitor widths, and screen dimensions often use these benchmarks. A typical credit card is 8.56 cm (3.37 inches) wide. Knowing common conversions speeds up DIY projects, shopping internationally, and understanding specifications without a calculator.",
  },
  {
    question: "Why do some countries use cm and others use inches?",
    answer:
      "Metric countries (most of the world, including Europe, Asia, Latin America) adopted centimeters as part of the metric system for consistency and ease of calculation (base 10). The US, UK, Canada, and a few others retained inches from imperial/customary units for historical reasons. In practice, both are used simultaneously in many contexts: a person's height is often stated in feet/inches (US) or centimeters (metric); screen sizes use inches worldwide (a legacy from US electronics manufacturing).",
  },
  {
    question: "How do I convert between centimeters and inches for clothing sizes?",
    answer:
      "Clothing measurements like bust, waist, and inseam are provided in centimeters (metric countries) or inches (US/UK). To convert, use the 2.54 cm = 1 inch rule. A 91 cm bust = 91 / 2.54 ≈ 35.8 inches. A 30-inch inseam = 30 × 2.54 = 76.2 cm. Online clothing retailers often show both measurements. Understanding the conversion prevents ordering ill-fitting garments from international sellers. Alterations and tailoring rely heavily on precise centimeter or inch measurements.",
  },
];

export const CUPS_TO_ML_FAQS: FAQ[] = [
  {
    question: "How many milliliters are in a cup?",
    answer:
      "1 US cup equals 236.588 milliliters, commonly rounded to 240 ml for practical cooking. 1 metric cup (used in some countries) equals exactly 250 ml. To convert cups to ml, multiply by 236.588 (or 240 for convenience). Example: 2 cups × 240 = 480 ml. Baking requires more precision; using 240 ml for US cups is slightly inaccurate but acceptable for most recipes. Professional bakers often measure by weight (grams) rather than volume for better consistency.",
  },
  {
    question: "What is the difference between US cups and metric cups?",
    answer:
      "<strong>US cup = 236.588 ml (commonly 240 ml).</strong> <strong>Metric cup = 250 ml.</strong> The difference is about 5%, negligible for cooking but important for precise baking. Metric cups are standard in Australia, Canada (sometimes), New Zealand, and other metric countries. US cups are standard in the United States. UK recipes sometimes use 284 ml (imperial cup). Always check a recipe's origin; a US recipe in metric cups will yield slightly different volumes than a metric recipe.",
  },
  {
    question: "How do I measure cups without a measuring cup?",
    answer:
      "Use a kitchen scale to weigh ingredients (most accurate), or use common household approximations: 1 cup ≈ a small coffee mug (varies), or measure by spoons: 16 tablespoons = 1 cup, 1 tablespoon = 3 teaspoons. For liquids, a standard drinking glass is roughly 8 oz (about 237 ml, nearly 1 US cup). These methods lack precision, so for critical baking, invest in a simple measuring cup or scale. Digital kitchen scales under $20 are more reliable than eyeballing with mugs.",
  },
  {
    question: "Why are volume measurements inconsistent across recipes?",
    answer:
      "Volume measurements (cups, tablespoons) vary by country due to historical standardization differences. US, UK, and metric systems each define cups differently. Volume also depends on how tightly you pack an ingredient: a loosely packed cup of flour weighs less than a compressed cup, affecting results. Professional bakers use weight (grams) for consistency. When following recipes, match the measurement system to the recipe's origin country. Using ml instead of cups (by converting or using a scale) eliminates packing variables and improves consistency.",
  },
];

export const FAHRENHEIT_TO_CELSIUS_FAQS: FAQ[] = [
  {
    question: "What is the formula to convert Fahrenheit to Celsius?",
    answer:
      "<strong>°C = (°F − 32) × 5/9</strong>. Example: 77°F = (77 − 32) × 5/9 = 45 × 5/9 = 25°C. First, subtract 32 to account for the zero-point difference, then multiply by 5/9 (approximately 0.556) to scale to Celsius's smaller degree size. The reverse of this formula converts Celsius to Fahrenheit: °F = (°C × 9/5) + 32. Both formulas are essential in cooking, weather reporting, and scientific work.",
  },
  {
    question: "What is normal body temperature in Fahrenheit and Celsius?",
    answer:
      "<strong>Normal body temperature: 98.6°F = 37°C.</strong> Fever is generally considered 100.4°F (38°C) or higher. Hypothermia is below 95°F (35°C). Healthcare systems worldwide use both scales: US hospitals use Fahrenheit; European and most international hospitals use Celsius. A quick conversion memory: 98.6°F is the healthy baseline; if reading a Celsius thermometer showing 36.5–37.5°C, that's normal body temperature.",
  },
  {
    question: "What temperatures should I use for cooking and baking?",
    answer:
      "Recipes often mix Fahrenheit (US) and Celsius (metric): <strong>350°F = 175°C (standard baking)</strong>, <strong>400°F = 200°C (roasting)</strong>, <strong>450°F = 230°C (high-heat baking)</strong>. Most ovens have both scales on the dial. Meat cooking temperatures: <strong>165°F = 74°C (poultry, safe minimum)</strong>, <strong>160°F = 71°C (ground meat)</strong>, <strong>145°F = 63°C (beef medium-rare)</strong>. Using a meat thermometer (digital or dial) removes guesswork. Oven calibration varies; check temperature accuracy with an oven thermometer.",
  },
  {
    question: "How do weather forecasts differ between Fahrenheit and Celsius?",
    answer:
      "US weather reports use Fahrenheit; most of the world uses Celsius. Key reference points: 32°F (0°C) is freezing, 68°F (20°C) is comfortable room temperature, 86°F (30°C) is hot, 104°F (40°C) is very hot/dangerous. Weather apps often allow toggling between scales. Understanding both helps when traveling internationally or reading global weather news. Mentally converting: roughly, subtract 30 from Fahrenheit and divide by 2 for a Celsius estimate (e.g., 86°F: 86 − 30 = 56, 56 / 2 = 28°C, actual is 30°C, close enough).",
  },
];

export const FEET_TO_CM_FAQS: FAQ[] = [
  {
    question: "How many centimeters are in a foot?",
    answer:
      "1 foot equals exactly 30.48 centimeters. To convert feet to centimeters, multiply by 30.48. Example: 6 feet × 30.48 = 182.88 cm. This is a standard conversion used in height measurements, building dimensions, and cross-border projects. Many countries list heights in feet/inches (US/UK) or centimeters (metric), so familiarity with both is essential.",
  },
  {
    question: "How is human height typically expressed?",
    answer:
      "<strong>US/UK:</strong> feet and inches (e.g., 5'10\", meaning 5 feet 10 inches). <strong>Metric countries:</strong> centimeters (e.g., 178 cm). 5 feet 10 inches = (5 × 30.48) + (10 × 2.54) = 152.4 + 25.4 = 177.8 cm. Online height conversions are instant, but knowing that 5'10\" ≈ 178 cm helps with quick mental math. Medical records, passport photos, and legal documents may use either system depending on the country.",
  },
  {
    question: "What are common heights in feet and centimeters?",
    answer:
      "<strong>5'0\" = 152 cm, 5'6\" = 168 cm, 5'10\" = 178 cm, 6'0\" = 183 cm, 6'2\" = 188 cm.</strong> These benchmarks are useful for gauging height without calculation. A 6-foot-tall person is typically considered tall in many Western countries; 180+ cm is similar in metric regions. Clothing size charts often use height ranges in both units.",
  },
  {
    question: "How do I convert feet and inches to centimeters?",
    answer:
      "<strong>Total cm = (feet × 30.48) + (inches × 2.54)</strong>. Example: 5'9\" = (5 × 30.48) + (9 × 2.54) = 152.4 + 22.86 = 175.26 cm. Breaking it into two steps (feet first, then add inches) reduces errors. Many apps and calculators automate this, but the formula helps with verification or manual calculation.",
  },
];

export const FEET_TO_METERS_FAQS: FAQ[] = [
  {
    question: "How many meters are in a foot?",
    answer:
      "1 foot equals 0.3048 meters (or about 0.305 meters for rough estimates). To convert feet to meters, multiply by 0.3048. Example: 100 feet × 0.3048 = 30.48 meters. This conversion is common in construction, aviation, diving, and surveying. 1 meter = 3.28084 feet (its inverse), making 1 meter slightly longer than 3 feet.",
  },
  {
    question: "What is the difference between feet, meters, and yards?",
    answer:
      "<strong>Feet:</strong> imperial unit (US, UK, Canada). <strong>Meters:</strong> metric unit (rest of world). <strong>Yards:</strong> imperial, equal to 3 feet or 0.9144 meters. 1 meter ≈ 1.094 yards. For land measurement: 100 feet ≈ 30.5 meters. For height: 6 feet ≈ 1.83 meters. For distances: 1 mile = 5,280 feet = 1,609 meters (roughly 1.6 km). Understanding these relationships helps with international projects and specification sheets.",
  },
  {
    question: "How tall is a 6-foot person in meters?",
    answer:
      "6 feet × 0.3048 = 1.8288 meters, commonly rounded to 1.83 meters or 183 cm. In metric countries, a person who is 6 feet tall is often described as 183 cm or just under 1.83 meters. This is a quick benchmark: 6 feet ≈ 1.83 meters.",
  },
  {
    question: "What are typical room and building dimensions in feet vs. meters?",
    answer:
      "<strong>Bedroom:</strong> 12' × 14' (3.7m × 4.3m). <strong>Living room:</strong> 20' × 24' (6.1m × 7.3m). <strong>Standard ceiling height:</strong> 8–10 feet (2.4–3 m). <strong>Commercial building floor:</strong> 100' × 100' (30.5m × 30.5m). Architects and builders use both systems depending on the project's location. Metric plans are easier to scale and calculate; imperial plans are traditional in the US.",
  },
];

export const GALLONS_TO_LITERS_FAQS: FAQ[] = [
  {
    question: "How many liters are in a gallon?",
    answer:
      "<strong>1 US gallon = 3.78541 liters</strong> (commonly 3.785 or rounded to 3.8). <strong>1 UK gallon (imperial) = 4.54609 liters</strong> (about 4.5). To convert US gallons to liters, multiply by 3.785. Example: 5 US gallons × 3.785 = 18.925 liters. Always verify which gallon type is referenced; US and UK gallons differ significantly. Fuel efficiency is often reported in gallons per mile (US) or liters per 100 km (metric), so conversions are common when comparing vehicles internationally.",
  },
  {
    question: "Why are US and UK gallons different?",
    answer:
      "The US gallon is based on the wine gallon (~3.785 liters), while the imperial gallon (UK, Canada historically, Australia) is based on the imperial system and is larger (~4.546 liters). This historical difference persists: the US uses US gallons for fuel and milk, while UK uses liters (adopted metric). Canada and Australia switched to metric liters decades ago. When reading fuel efficiency or container sizes from different countries, confirm which gallon is used to avoid errors.",
  },
  {
    question: "How many gallons do I need for a swimming pool?",
    answer:
      "<strong>Volume = length × width × average depth (all in feet) × 7.48 cubic feet to gallons.</strong> Example: a 20' × 10' pool with 5' average depth = 20 × 10 × 5 × 7.48 = 7,480 US gallons. For metric: multiply by 1,000 to get liters directly from cubic meters. This helps with pool chemical dosing (chlorine, pH adjusters), which is dosed per gallon or liter. Knowing pool volume is essential for proper water treatment.",
  },
  {
    question: "What is gas mileage in miles per gallon vs. liters per 100 km?",
    answer:
      "<strong>US cars:</strong> miles per gallon (MPG). <strong>Metric countries:</strong> liters per 100 km (L/100km). These are inversely related: higher MPG is better (more distance per gallon), while lower L/100km is better (less fuel per distance). Rough conversion: 235 / MPG = L/100km. Example: 25 MPG ≈ 235 / 25 = 9.4 L/100km. A 50 MPG hybrid is roughly 4.7 L/100km. Knowing both helps compare fuel efficiency when buying vehicles internationally.",
  },
];

export const GRAMS_TO_OUNCES_FAQS: FAQ[] = [
  {
    question: "How many ounces are in a gram?",
    answer:
      "1 gram equals approximately 0.03527 ounces, or about 0.035 oz for rough estimates. To convert grams to ounces, multiply by 0.03527. Example: 100 grams × 0.03527 = 3.527 ounces. Conversely, 1 ounce = 28.3495 grams (easier to remember: 1 oz ≈ 28 grams). This conversion is essential in cooking, jewelry, pharmaceuticals, and shipping. Most kitchen scales can switch between units.",
  },
  {
    question: "What are common ingredient weights in grams and ounces?",
    answer:
      "<strong>1 oz = 28g, 2 oz = 57g, 4 oz = 113g (1/4 pound), 8 oz = 227g (1/2 pound), 16 oz = 454g (1 pound).</strong> In cooking: <strong>1 cup flour ≈ 125–150g</strong>, <strong>1 cup sugar ≈ 200g</strong>, <strong>1 cup butter ≈ 225g</strong>. Baking recipes increasingly use weight (grams) instead of volume for consistency. US recipes typically use ounces or cups; metric recipes use grams.",
  },
  {
    question: "Why do chefs prefer grams over ounces for baking?",
    answer:
      "Grams are more precise and consistent. Volume (cups, tablespoons) varies based on how tightly you pack ingredients; weight doesn't. A cup of flour loosely packed weighs less than compressed, causing inconsistent results. Grams eliminate this variable, ensuring recipes work reliably every time. Professional bakeries weigh all ingredients in grams. Home cooks benefit from a $20 digital kitchen scale. Metric recipes (grams) are inherently more repeatable than imperial recipes (ounces, cups).",
  },
  {
    question: "How do I convert a recipe from ounces to grams?",
    answer:
      "Multiply ounces by 28.35 (or approximately 28 for simplicity). Example: 8 oz of flour = 8 × 28.35 = 226.8 grams, round to 227g. Most online recipe converters handle this instantly. When scaling recipes, using grams (instead of cups/ounces) makes proportions easier: if a recipe serves 4 (uses 500g flour) and you want to serve 8, simply double to 1000g flour.",
  },
];

export const INCHES_TO_CM_FAQS: FAQ[] = [
  {
    question: "How many centimeters are in an inch?",
    answer:
      "1 inch equals 2.54 centimeters (by definition, since the inch was redefined to be exactly 2.54 cm). To convert inches to centimeters, multiply by 2.54. Example: 12 inches × 2.54 = 30.48 cm. This is one of the most commonly used conversions in international trade, fashion, and design. The 2.54 cm standard is exact and uniform worldwide.",
  },
  {
    question: "How are screen sizes measured in inches?",
    answer:
      "Screen size (monitors, TVs, phones) is measured diagonally in inches. A 24-inch monitor has a 24-inch diagonal, which equals 60.96 cm. A 55-inch TV ≈ 140 cm diagonal. Screen specifications always list inches (a legacy from US electronics manufacturing), so converting to centimeters helps understand physical size, especially when shopping internationally. Width and height depend on aspect ratio; knowing the diagonal lets you estimate overall dimensions.",
  },
  {
    question: "What are common measurements in inches and centimeters?",
    answer:
      "<strong>1\" = 2.54cm, 4\" = 10.16cm, 6\" = 15.24cm, 12\" = 30.48cm (1 foot), 24\" = 60.96cm, 36\" = 91.44cm (1 yard).</strong> These benchmarks help with quick mental conversion. A 10-inch object is roughly 25 cm; a 30-inch waist is roughly 76 cm. Rulers, tape measures, and sizing charts now often show both units for convenience.",
  },
  {
    question: "How do I measure clothing sizes in inches vs. centimeters?",
    answer:
      "Clothing sizes listed in inches (waist 32\", inseam 30\") are common in US/UK. Metric countries use centimeters (waist 81cm, inseam 76cm). Multiply inches by 2.54 to convert. A 32-inch waist = 81.28 cm. Online retailers typically show both; understanding the conversion prevents ordering the wrong size from international vendors. Tailors often use centimeters for precision.",
  },
];

export const KELVIN_TO_CELSIUS_FAQS: FAQ[] = [
  {
    question: "What is the formula to convert Kelvin to Celsius?",
    answer:
      "<strong>°C = K − 273.15</strong>. Example: 300 K = 300 − 273.15 = 26.85°C. Kelvin is the SI unit of temperature (absolute scale), starting at absolute zero (−273.15°C or 0 K). Celsius shifts Kelvin by exactly 273.15 degrees. The conversion is straightforward: subtract 273.15. This is used primarily in science, physics, and chemistry. Room temperature (~20°C) is about 293 K.",
  },
  {
    question: "Why is Kelvin used in science instead of Celsius?",
    answer:
      "Kelvin is an absolute temperature scale: 0 K is absolute zero (the lowest possible temperature), while Celsius's zero is arbitrary (water's freezing point). For scientific calculations, ratios and proportions require absolute scales. Example: doubling temperature in Celsius (10°C to 20°C) doesn't double energy, but doubling in Kelvin (283 K to 566 K) does. Kelvin avoids negative numbers and makes thermodynamic calculations cleaner. Physics and chemistry universally use Kelvin.",
  },
  {
    question: "What is absolute zero and why is it important?",
    answer:
      "Absolute zero (0 K or −273.15°C) is the lowest possible temperature, where all molecular motion stops. It's unattainable in practice but is the theoretical limit. Understanding absolute zero is fundamental to physics and thermodynamics. The Kelvin scale defines 0 K as absolute zero, making Kelvin the natural choice for scientific work. Real-world temperatures in space are around 2.7 K (near absolute zero); laboratory experiments can reach fractions of a Kelvin.",
  },
  {
    question: "What are common temperatures in Kelvin and Celsius?",
    answer:
      "<strong>0 K = −273.15°C (absolute zero), 273.15 K = 0°C (water freezes), 298.15 K = 25°C (room temperature), 373.15 K = 100°C (water boils).</strong> Laboratory temperatures: liquid nitrogen ≈ 77 K (−196°C), liquid helium ≈ 4 K (−269°C). Quick estimate: K ≈ °C + 273.",
  },
];

export const KG_TO_LBS_FAQS: FAQ[] = [
  {
    question: "How many pounds are in a kilogram?",
    answer:
      "1 kilogram equals approximately 2.20462 pounds, commonly rounded to 2.2 lbs. To convert kg to pounds, multiply by 2.20462. Example: 100 kg × 2.20462 = 220.462 lbs. Conversely, 1 pound = 0.453592 kg (about 0.454 kg). This conversion is essential for body weight (doctor visits, fitness), shipping, and international commerce. Most scales now display both units.",
  },
  {
    question: "What is a typical adult weight in kilograms and pounds?",
    answer:
      "<strong>50 kg = 110 lbs, 60 kg = 132 lbs, 70 kg = 154 lbs, 80 kg = 176 lbs, 90 kg = 198 lbs, 100 kg = 220 lbs.</strong> Adult weights vary widely; these are approximate benchmarks. A 5'10\" adult typically weighs 70–80 kg (154–176 lbs). Body mass index (BMI) uses weight in kg and height in meters; converting between systems requires attention to avoid errors.",
  },
  {
    question: "How do I find my ideal weight in kg vs. lbs?",
    answer:
      "Ideal weight depends on height, age, sex, and body composition. BMI guidelines (18.5–24.9 is 'normal' weight) apply regardless of unit. Use your height in meters and weight in kg: BMI = weight / height². A 1.75m tall person at 70 kg: BMI = 70 / (1.75²) = 22.9 (healthy). For comparative reference: a 154-lbs person at 5'9\" has a similar BMI. Fitness professionals typically reference kg; medical records vary by country.",
  },
  {
    question: "How are food ingredients listed in kilograms vs. pounds?",
    answer:
      "<strong>1 kg = 2.2 lbs</strong> is a quick reference. A 2-kg bag of flour = about 4.4 lbs. Recipes from metric countries use kg/grams; US recipes use pounds/ounces. Bulk ingredients (flour, sugar, rice) are often sold by weight, listed in either unit depending on the retailer. When scaling recipes, using metric makes proportions easier (divide by 1,000 for grams to kg instead of by 16 for pounds to ounces).",
  },
];

export const KILOMETERS_TO_MILES_FAQS: FAQ[] = [
  {
    question: "How many miles are in a kilometer?",
    answer:
      "1 kilometer equals approximately 0.621371 miles, commonly rounded to 0.62 miles. To convert km to miles, multiply by 0.621371. Example: 100 km × 0.621371 = 62.1371 miles. Conversely, 1 mile = 1.60934 km (about 1.6 km). This conversion is essential for driving, running, hiking, and international travel. Navigation apps typically display both units.",
  },
  {
    question: "What is the speed limit conversion from km/h to mph?",
    answer:
      "Use the same ratio: <strong>km/h × 0.621371 = mph</strong>, or <strong>mph × 1.60934 = km/h</strong>. <strong>50 km/h ≈ 31 mph, 100 km/h ≈ 62 mph, 130 km/h ≈ 81 mph.</strong> A common quick estimate: km/h ÷ 1.6 ≈ mph. Speeding violations depend on posted limits; converting ensures accurate understanding of legal speeds when driving internationally.",
  },
  {
    question: "What are common distances in kilometers and miles?",
    answer:
      "<strong>1 km = 0.62 miles, 5 km = 3.1 miles (common 5K race), 10 km = 6.2 miles, 42.2 km = 26.2 miles (marathon), 100 km = 62 miles.</strong> A 10-minute mile ≈ 6-minute km. For road trips: 300 miles ≈ 483 km. Quick mental math: miles ≈ km ÷ 1.6.",
  },
  {
    question: "How do marathon and race distances compare?",
    answer:
      "<strong>5K = 5 km (3.1 miles), 10K = 10 km (6.2 miles), half-marathon = 21.1 km (13.1 miles), marathon = 42.2 km (26.2 miles), ultramarathon = 50+ km.</strong> The 26.2-mile marathon distance comes from a historical race; when standardized metrically, it's 42.195 km (rounded to 42.2 km for most purposes). Runners in metric countries train in kilometers; US runners often use miles.",
  },
];

export const LBS_TO_KG_FAQS: FAQ[] = [
  {
    question: "How many kilograms are in a pound?",
    answer:
      "1 pound equals 0.453592 kilograms, commonly rounded to 0.454 kg or 0.45 kg. To convert pounds to kg, multiply by 0.453592. Example: 150 lbs × 0.453592 = 68.04 kg. Conversely, 1 kg = 2.20462 lbs (approximately 2.2 lbs). This is the inverse of the kg-to-lbs conversion and is equally essential in fitness, health, and commerce.",
  },
  {
    question: "What is the conversion for body weight in lbs to kg?",
    answer:
      "Divide pounds by 2.2 for a quick estimate. Example: 200 lbs ÷ 2.2 ≈ 91 kg. More precisely: 200 × 0.453592 = 90.7 kg. Medical records, fitness apps, and health discussions often require converting between units. A person weighing 150 lbs weighs approximately 68 kg.",
  },
  {
    question: "How are maximum weight limits listed in pounds vs. kilograms?",
    answer:
      "Elevators, scales, and equipment often display both limits. <strong>1,000 lbs ≈ 454 kg, 2,000 lbs ≈ 907 kg (1 ton).</strong> Airports allow checked bags up to 50 lbs (about 23 kg) per bag. Weight limits in machinery, furniture, and transportation are critical for safety; converting ensures compliance with specifications.",
  },
  {
    question: "How do I calculate weight capacity in pounds vs. kilograms?",
    answer:
      "Weight capacity is simply a limit; use the conversion directly. A shelf rated for 50 kg can hold 50 × 2.2 = 110 lbs. A scale rated for 300 lbs = 300 × 0.454 ≈ 136 kg. Understanding both units prevents overloading and ensures safe use of equipment. Manufacturers increasingly list both for clarity.",
  },
];

export const LITERS_TO_GALLONS_FAQS: FAQ[] = [
  {
    question: "How many gallons are in a liter?",
    answer:
      "<strong>1 liter = 0.264172 US gallons</strong> (or about 0.26 gallons). <strong>1 liter = 0.219969 UK gallons</strong> (about 0.22 gallons). To convert liters to gallons, multiply by 0.264172 (US) or 0.219969 (UK). Example: 10 liters × 0.264172 = 2.64 US gallons. This is the inverse of the gallon-to-liter conversion. Always verify which gallon type applies.",
  },
  {
    question: "How do I convert between liters and gallons for fuel?",
    answer:
      "Fuel consumption is often reported as <strong>liters per 100 km (metric)</strong> or <strong>miles per gallon (US)</strong>. These are not directly comparable: MPG is distance per volume, while L/100km is volume per distance (inverse). Use the formula: <strong>235 / MPG = L/100km</strong> (or its inverse). Example: 25 MPG ≈ 235 / 25 = 9.4 L/100km. Fuel tank sizes: a 50-liter tank ≈ 13.2 US gallons.",
  },
  {
    question: "What are common beverage container sizes in liters and gallons?",
    answer:
      "<strong>1 liter ≈ 0.26 US gallons, 2 liters ≈ 0.53 gallons, 3.8 liters ≈ 1 gallon.</strong> A gallon of milk ≈ 3.8 liters. A 2-liter bottle of soda ≈ half a gallon. Bulk water containers: 5 gallons ≈ 19 liters, 55 gallons ≈ 208 liters. Knowing these benchmarks helps estimate quantities when shopping internationally.",
  },
  {
    question: "How do I calculate the volume of a swimming pool in liters vs. gallons?",
    answer:
      "Volume in cubic meters × 1,000 = liters. Volume in cubic feet × 28.3168 = liters, or × 7.48052 = US gallons. Example: a 20' × 10' × 5' pool = 1,000 cubic feet = 1,000 × 28.3168 ≈ 28,317 liters ≈ 7,480 gallons. Chemical dosing (chlorine, algaecide) is labeled per gallon or liter; knowing pool volume accurately ensures proper water treatment.",
  },
];

export const METER_TO_FEET_FAQS: FAQ[] = [
  {
    question: "How many feet are in a meter?",
    answer:
      "1 meter equals 3.28084 feet, commonly rounded to 3.28 feet or simply 'a little over 3 feet'. To convert meters to feet, multiply by 3.28084. Example: 10 meters × 3.28084 = 32.8084 feet. This is the inverse of the feet-to-meters conversion. A meter is slightly longer than a yard (which is 3 feet); the difference is about 3.4 inches per meter.",
  },
  {
    question: "How tall is a 6-meter building or wall in feet?",
    answer:
      "6 meters × 3.28084 = 19.69 feet (approximately 20 feet). A 10-meter wall = about 33 feet. A 100-meter structure = about 328 feet. For quick mental math: meters × 3.3 ≈ feet (slightly high but close). Ceiling heights, building dimensions, and construction sites use these conversions regularly.",
  },
  {
    question: "What are typical building dimensions in meters vs. feet?",
    answer:
      "<strong>Standard room:</strong> 4m × 5m (13' × 16'). <strong>Ceiling height:</strong> 2.7–3m (9–10 feet). <strong>Commercial floor:</strong> 30m × 30m (100' × 100'). <strong>Highway lane:</strong> 3.65m (12 feet). Metric countries use meters; US projects use feet. Conversion is essential when working with international blueprints or specifications.",
  },
  {
    question: "How do I convert heights measured in meters to feet and inches?",
    answer:
      "Convert the meter value to total feet, then extract the integer part as feet and multiply the decimal by 12 to get inches. Example: 1.8 meters = 1.8 × 3.28084 = 5.906 feet = 5 feet + 0.906 × 12 inches = 5 feet 10.9 inches (≈5'11\"). Quick reference: 1.75m ≈ 5'9\", 1.83m ≈ 6'0\".",
  },
];

export const MILES_TO_KILOMETERS_FAQS: FAQ[] = [
  {
    question: "How many kilometers are in a mile?",
    answer:
      "1 mile equals 1.60934 kilometers, commonly rounded to 1.6 km. To convert miles to km, multiply by 1.60934. Example: 100 miles × 1.60934 = 160.934 km. This is the inverse of km-to-miles conversion. The mile is defined as exactly 1.60934 km for international standardization.",
  },
  {
    question: "What is the speed conversion from mph to km/h?",
    answer:
      "Multiply mph by 1.60934 to get km/h. <strong>30 mph = 48 km/h, 60 mph = 97 km/h, 70 mph = 113 km/h.</strong> Quick estimate: mph × 1.6 ≈ km/h. Speed limits and vehicle speedometers in metric countries use km/h; US uses mph. Rental cars often display both. Converting ensures you don't exceed posted speed limits when driving internationally.",
  },
  {
    question: "What are common distances in miles and kilometers?",
    answer:
      "<strong>1 mile = 1.6 km, 5 miles = 8 km, 10 miles = 16 km, 50 miles = 80 km, 100 miles = 161 km, 500 miles = 805 km.</strong> A cross-country trip (3,000 miles) ≈ 4,828 km. For running and cycling: a 5-mile run ≈ 8 km, a 50-mile bike ride ≈ 80 km.",
  },
  {
    question: "How do I estimate miles to kilometers mentally?",
    answer:
      "Use the Fibonacci sequence for a surprising approximation: 1 mile ≈ 1.6 km, 2 miles ≈ 3.2 km, 3 miles ≈ 5 km, 5 miles ≈ 8 km, 8 miles ≈ 13 km, 13 miles ≈ 21 km. Alternatively, multiply by 1.6 or divide km by 0.6 (or multiply by 10/6). Example: 50 miles ÷ 0.6 ≈ 83 km (actual: 80 km).",
  },
];

export const ML_TO_CUPS_FAQS: FAQ[] = [
  {
    question: "How many cups are in a milliliter?",
    answer:
      "1 milliliter equals approximately 0.00423 US cups, or about 0.004 cups. To convert ml to cups, multiply by 0.00423. Conversely, <strong>1 US cup = 236.588 ml</strong> (commonly 240 ml). Most cooking uses the reverse (cups to ml), but knowing this helps when recipes list ingredients in ml and you only have cup measures. Example: 240 ml ≈ 1 cup.",
  },
  {
    question: "What are common milliliter amounts in cups and tablespoons?",
    answer:
      "<strong>15 ml = 1 tablespoon, 30 ml = 2 tablespoons, 60 ml = 1/4 cup, 120 ml = 1/2 cup, 240 ml = 1 cup.</strong> These conversions are essential for recipe scaling and ingredient measurement. Metric recipes list ml; US recipes use cups/tablespoons. Understanding the relationships prevents errors when converting between systems.",
  },
  {
    question: "How do I measure small amounts in ml without a measuring cup?",
    answer:
      "Use kitchen spoons: 1 teaspoon ≈ 5 ml, 1 tablespoon ≈ 15 ml. A standard drinking glass holds about 250 ml. A coffee mug holds 240–300 ml (varies by mug). For precision, a digital kitchen scale (measuring grams) is more accurate than volume. Pharmaceutical/medical dosing uses ml; use a syringe or graduated dropper for accuracy.",
  },
  {
    question: "How are liquid medications and supplements dosed in ml and teaspoons?",
    answer:
      "<strong>1 teaspoon = 5 ml (standard in US medicine).</strong> Dosing instructions often say '1 teaspoon' (5 ml) or '10 ml' for clarity. A 250 ml bottle of liquid medication is roughly 50 teaspoons (50 × 5 ml). Never eyeball medication doses; use a provided syringe, dropper, or measuring spoon to ensure accuracy. Over-the-counter and prescription dosing instructions specify ml or teaspoons explicitly.",
  },
];

export const MM_TO_INCHES_FAQS: FAQ[] = [
  {
    question: "How many inches are in a millimeter?",
    answer:
      "1 millimeter equals approximately 0.0393701 inches, or about 0.039 inches. To convert mm to inches, multiply by 0.0393701. Conversely, <strong>1 inch = 25.4 mm</strong> (by definition, exact). Example: 25.4 mm × 0.0393701 = 1 inch. This conversion is critical in precision work, manufacturing, jewelry, and electronics.",
  },
  {
    question: "What are common small measurements in millimeters and inches?",
    answer:
      "<strong>1 mm = 0.039\", 5 mm = 0.197\", 10 mm = 0.394\", 25.4 mm = 1\", 50 mm = 1.97\", 100 mm = 3.94\".</strong> In jewelry: a 5 mm gemstone ≈ 0.2 inches; a 3-carat diamond ≈ 9.5 mm diameter. In manufacturing: tolerances of ±0.5 mm (±0.02 inches) are typical for precision parts.",
  },
  {
    question: "How are watch bands and ring sizes specified in mm vs. inches?",
    answer:
      "Watch bands are typically measured in millimeters (mm) for width and length. A standard watch band might be 22 mm wide. Ring sizes use different systems: US ring sizes don't correspond directly to millimeters, but diameter (mm) = (ring size + 8.5) × 2 (approximate). When ordering from different countries, always check dimensions in both units to ensure proper fit.",
  },
  {
    question: "How do I convert engineering drawings between mm and inches?",
    answer:
      "Multiply mm by 0.0393701 for inches, or divide inches by 25.4 for mm. Engineering tolerances: ±0.1 mm = ±0.004 inches. A 50 mm part = 1.97 inches; a 2-inch dimension = 50.8 mm. CAD software can switch between unit systems instantly, but manual drawings and specifications require careful conversion to avoid costly errors.",
  },
];

export const MPH_TO_KPH_FAQS: FAQ[] = [
  {
    question: "How do I convert miles per hour to kilometers per hour?",
    answer:
      "Multiply mph by 1.60934 to get km/h. Example: 65 mph × 1.60934 = 104.6 km/h. Conversely, km/h ÷ 1.60934 (or × 0.621371) = mph. Quick mental math: mph × 1.6 ≈ km/h. This is essential for speed limits, vehicle speedometers, and driving internationally. A 55 mph speed limit ≈ 88 km/h.",
  },
  {
    question: "What are common speed conversions for driving?",
    answer:
      "<strong>25 mph = 40 km/h, 35 mph = 56 km/h, 55 mph = 88 km/h, 65 mph = 105 km/h, 75 mph = 121 km/h.</strong> Residential speed limits (25 mph in US) ≈ 40 km/h in metric countries. Highway speeds (65 mph in US) ≈ 105 km/h in metric countries. These benchmarks help drivers adjust to posted limits when traveling internationally.",
  },
  {
    question: "How do I read a speedometer that shows both mph and km/h?",
    answer:
      "Most modern speedometers (especially rental cars) display both scales: an inner mph ring and an outer km/h ring, or dual digital displays. The higher number is always km/h. Example: if the needle points to 60, it means 60 mph (outer scale) or about 96 km/h (inner scale). Knowing the conversion helps verify which scale you're reading.",
  },
  {
    question: "How do vehicle performance metrics like 0-60 time compare?",
    answer:
      "Acceleration is often stated as '0 to 60 mph in X seconds.' In metric countries, '0 to 100 km/h' is the benchmark (about 62 mph). Converting: 60 mph = 96.5 km/h, so a '0-60 mph in 6 seconds' car is slower than a '0-100 km/h in 6 seconds' car. Marketing uses different benchmarks in different regions. For fair comparison, convert to a common unit (e.g., 0-100 km/h).",
  },
];

export const OUNCES_TO_GRAMS_FAQS: FAQ[] = [
  {
    question: "How many grams are in an ounce?",
    answer:
      "1 ounce equals 28.3495 grams, commonly rounded to 28.35 grams or simply 28 grams. To convert ounces to grams, multiply by 28.3495. Example: 5 ounces × 28.3495 = 141.75 grams. This is the inverse of the grams-to-ounces conversion and is essential in cooking, baking, and nutrition labeling.",
  },
  {
    question: "What are common ingredient weights in ounces and grams?",
    answer:
      "<strong>1 oz = 28g, 2 oz = 57g, 4 oz = 113g, 8 oz = 227g, 16 oz = 454g.</strong> In cooking: flour (1 cup ≈ 5 oz ≈ 140g), butter (4 oz ≈ 113g), chocolate (6 oz ≈ 170g). US recipes use ounces; metric recipes use grams. Professional bakers often use grams for consistency because weight is more precise than volume.",
  },
  {
    question: "How do I convert recipe measurements from ounces to grams?",
    answer:
      "Multiply ounces by 28.35. A recipe calling for 2 oz of chocolate = 2 × 28.35 = 56.7 grams (round to 57g). Many online recipe converters handle this instantly. Using grams makes scaling recipes easier: double the grams instead of multiplying fractions (which is error-prone with ounces/cups).",
  },
  {
    question: "How are food labels listed in ounces vs. grams?",
    answer:
      "US food labels list weight in ounces and grams; metric countries use only grams. A 10-ounce box of cereal ≈ 283 grams. Nutrition facts are listed per serving weight (e.g., 30g per serving). Understanding the conversion helps estimate serving sizes and track dietary intake. Digital kitchen scales that switch between ounces and grams streamline meal prep.",
  },
];

export const OUNCES_TO_ML_FAQS: FAQ[] = [
  {
    question: "How many milliliters are in a fluid ounce?",
    answer:
      "<strong>1 US fluid ounce = 29.5735 ml</strong> (commonly 30 ml). <strong>1 UK (imperial) fluid ounce = 28.4131 ml.</strong> To convert US fl oz to ml, multiply by 29.5735. Example: 8 fl oz × 29.5735 = 236.59 ml (nearly 1 cup). Always clarify whether you mean fluid ounces (volume) or weight ounces; they are different. Nutrition labels often list both.",
  },
  {
    question: "What is the difference between fluid ounces and weight ounces?",
    answer:
      "<strong>Fluid ounces (fl oz):</strong> measure volume (how much space liquid takes up). <strong>Ounces (oz):</strong> measure weight (how heavy something is). Water is the exception: 1 fl oz of water ≈ 1 oz in weight. Other liquids differ: 1 fl oz of honey ≈ 1.4 oz; 1 fl oz of alcohol ≈ 0.79 oz. Recipes must specify 'fl oz' for liquids or 'oz' for solids to avoid confusion. Nutrition labels list both volume and weight.",
  },
  {
    question: "How are beverage sizes listed in fluid ounces vs. milliliters?",
    answer:
      "<strong>8 fl oz = 237 ml (1 cup), 12 fl oz = 355 ml (soda can), 16 fl oz = 473 ml (pint), 20 fl oz = 591 ml, 32 fl oz = 946 ml (quart).</strong> US drinks are typically labeled in fl oz; metric countries use ml. A standard shot glass is 1.5 fl oz (44 ml). Understanding these benchmarks helps with portion control and recipe conversions.",
  },
  {
    question: "How do I measure liquid medications in fl oz vs. ml?",
    answer:
      "Medical dosing typically uses ml for precision. A dose of 5 ml = about 0.17 fl oz (not a standard measurement). Conversely, a dose in fl oz (less common) = fl oz × 29.57 = ml. For liquids: 1 tablespoon ≈ 15 ml ≈ 0.5 fl oz. Always use provided measuring devices (syringes, cups) for medications; never eyeball doses.",
  },
];

export const SQFT_TO_SQM_FAQS: FAQ[] = [
  {
    question: "How many square meters are in a square foot?",
    answer:
      "1 square foot equals 0.092903 square meters, commonly rounded to 0.093 sq m or about 0.09 sq m. To convert sq ft to sq m, multiply by 0.092903. Example: 100 sq ft × 0.092903 = 9.29 sq m. Conversely, 1 sq m = 10.7639 sq ft (approximately 10.76 sq ft). This conversion is essential in real estate, construction, and interior design.",
  },
  {
    question: "How are apartment or house sizes listed in square feet vs. square meters?",
    answer:
      "<strong>500 sq ft ≈ 46 sq m (small studio), 1,000 sq ft ≈ 93 sq m (small 1-bed apartment), 2,000 sq ft ≈ 186 sq m (3-bed house).</strong> A typical 3-bedroom house in the US is 1,800–2,500 sq ft (167–232 sq m). When comparing real estate internationally, converting area helps gauge property size. US real estate uses sq ft; most other countries use sq m.",
  },
  {
    question: "How do I calculate room area in square feet vs. square meters?",
    answer:
      "<strong>Area = length × width.</strong> Example: a 12' × 14' room = 168 sq ft. Converting: 168 × 0.092903 = 15.6 sq m. Alternatively, convert dimensions first: 12 feet = 3.66 m, 14 feet = 4.27 m; 3.66 × 4.27 = 15.6 sq m (same result). Understanding room area helps with flooring, paint, and furniture placement.",
  },
  {
    question: "How are land plot sizes listed in acres and square meters?",
    answer:
      "<strong>1 acre = 4,047 sq m.</strong> A 0.25-acre lot = 1,012 sq m. A 1-hectare plot = 10,000 sq m = 2.47 acres. For large land measurements, hectares are more convenient; for small residential lots, sq m or sq ft are typical. Real estate listings vary by country: US uses acres; metric countries use sq m or hectares.",
  },
];

export const SQM_TO_SQFT_FAQS: FAQ[] = [
  {
    question: "How many square feet are in a square meter?",
    answer:
      "1 square meter equals 10.7639 square feet, commonly rounded to 10.76 sq ft or approximately 11 sq ft. To convert sq m to sq ft, multiply by 10.7639. Example: 50 sq m × 10.7639 = 538.2 sq ft. This is the inverse of the sq ft to sq m conversion. The conversion is essential when comparing property sizes or construction specifications across unit systems.",
  },
  {
    question: "How do I estimate apartment size in square meters vs. square feet?",
    answer:
      "Quick mental math: sq m × 10 ≈ sq ft (slightly low but close). <strong>30 sq m ≈ 320 sq ft (small studio), 60 sq m ≈ 645 sq ft (1-bed), 100 sq m ≈ 1,076 sq ft (2-bed).</strong> Metric countries list apartment sizes in sq m; US lists in sq ft. A '100 sq m apartment' is roughly the size of a '1,000 sq ft apartment' (slightly larger in metric).",
  },
  {
    question: "How are floor area regulations listed in square meters vs. square feet?",
    answer:
      "Building codes specify minimum floor areas. <strong>Minimum bedroom: 9 sq m (97 sq ft).</strong> <strong>Minimum apartment habitable area: 40 sq m (430 sq ft).</strong> Regulations vary by jurisdiction; some use sq m, others use sq ft. Architects and builders must convert when working across systems to ensure compliance with local codes.",
  },
  {
    question: "How do I calculate paint or flooring quantity using square meters?",
    answer:
      "Paint: typically 1 liter covers 8–10 sq m (86–107 sq ft). A 100 sq m space needs about 10 liters of paint. Flooring: ordered by sq m in metric countries or sq ft in US. Waste factor: add 10% to the calculated area for cuts and overlap. Understanding area in sq m (metric) or sq ft (US) ensures you order correct quantities.",
  },
];

export const TIP_CALCULATOR_ADVANCED_FAQS: FAQ[] = [
  {
    question: "How do I calculate a tip at different percentages?",
    answer:
      "<strong>Tip = Bill Amount × (Tip Percentage / 100).</strong> Example: $50 bill with 20% tip = $50 × 0.20 = $10. Total: $60. Common tipping rates in the US: 15% (acceptable), 18% (standard), 20%+ (excellent). Tip calculations should be on the pre-tax bill unless local custom dictates otherwise. Advanced calculators handle split bills, tax-inclusive calculations, and rounding.",
  },
  {
    question: "What are standard tipping percentages in different countries?",
    answer:
      "<strong>US restaurants:</strong> 15–20% (expected). <strong>US taxis/delivery:</strong> 10–15%. <strong>Europe:</strong> 5–10% (optional, tip jar only). <strong>Asia:</strong> 0–5% (tipping uncommon, sometimes unwelcome). <strong>Australia:</strong> optional, no set amount. <strong>Middle East:</strong> 5–10% (discretionary). Understanding local customs prevents awkward situations and ensures fair compensation.",
  },
  {
    question: "How do I split a bill with tip among multiple people?",
    answer:
      "<strong>Per-person cost = (Bill Amount + Tip) / Number of People.</strong> Example: $100 bill, $20 tip, 4 people = ($100 + $20) / 4 = $30 per person. Or: calculate individual shares before tipping, then add appropriate tips per person. Advanced tip calculators handle unequal splits (some ate more) by itemizing portions first.",
  },
  {
    question: "Should I calculate tip on the bill before or after tax?",
    answer:
      "In most US restaurants, tip the pre-tax bill amount. If the bill is $50 before tax and $54 after 8% tax, calculate tip on $50, not $54 (a difference of less than $0.40 at 18%). However, some apps default to post-tax, and tipping slightly higher is always acceptable. Always clarify with your calculator or the service provider. European and many international systems include tax in the bill price.",
  },
];

export const COLOR_CONVERTER_FAQS: FAQ[] = [
  {
    question: "What are the main color formats and how do they differ?",
    answer:
      "<strong>HEX (#RRGGBB):</strong> used in web design (e.g., #FF5733 is red-orange). <strong>RGB (0–255):</strong> additive color (combines red, green, blue light). <strong>HSL (hue, saturation, lightness):</strong> intuitive for adjusting color appearance. <strong>CMYK:</strong> for print (cyan, magenta, yellow, key/black). Each format has use cases: HEX for web, RGB for digital displays, CMYK for print, HSL for design adjustments.",
  },
  {
    question: "How do I convert HEX colors to RGB?",
    answer:
      "Each two-character segment in HEX represents a color channel in 0–255 scale. Example: #FF5733 breaks down as FF (255 red), 57 (87 green), 33 (51 blue) = RGB(255, 87, 51). Convert HEX to decimal: FF in hex = 15 × 16 + 15 = 255 in decimal. Online converters handle this instantly; understanding the pattern helps with color theory.",
  },
  {
    question: "What is the difference between additive (RGB) and subtractive (CMYK) color?",
    answer:
      "<strong>RGB (additive):</strong> used in digital displays (screens, phones). Starts with black, adds light. <strong>CMYK (subtractive):</strong> used in print. Starts with white, adds pigment. Pure red is RGB(255, 0, 0) on screens; in CMYK for print, it's approximately C=0, M=100, Y=100, K=0. Converting between systems is not perfectly reversible due to different color gamuts; professional designers proof colors on both media.",
  },
  {
    question: "How do I use HSL to adjust color brightness and saturation?",
    answer:
      "<strong>Hue (0–360°):</strong> the color wheel position. <strong>Saturation (0–100%):</strong> color intensity (0% is gray, 100% is pure color). <strong>Lightness (0–100%):</strong> brightness (0% is black, 100% is white). To lighten a color, increase lightness; to desaturate (make less vibrant), decrease saturation. HSL is intuitive for designers: adjust one parameter without affecting others.",
  },
];

export const TYPING_SPEED_FAQS: FAQ[] = [
  {
    question: "How is typing speed measured?",
    answer:
      "<strong>Words per minute (WPM):</strong> the standard metric. A 'word' equals 5 characters on average. Example: typing 250 characters in 1 minute = 50 WPM (250 / 5 = 50). <strong>Accuracy:</strong> the percentage of characters typed correctly. <strong>Adjusted WPM:</strong> accounts for errors (deducts incorrect characters). Speed tests typically measure WPM and accuracy percentage. Professional typists aim for 60+ WPM with 98%+ accuracy.",
  },
  {
    question: "What is considered a good typing speed?",
    answer:
      "<strong>Average office worker:</strong> 40–60 WPM. <strong>Professional secretary/transcriber:</strong> 70–100 WPM. <strong>Elite typists/programmers:</strong> 100+ WPM. Accuracy is as important as speed: a faster typist with low accuracy is inefficient. Consistent practice improves both metrics. Age, typing training, and keyboard familiarity affect speed.",
  },
  {
    question: "How do I improve typing speed?",
    answer:
      "Practice on typing websites (TypingMaster, Keybr, TypeRacer), which provide exercises targeting weak keys and increasing speed gradually. Use proper posture: feet flat, wrists straight, fingers on home row (ASDFGH). Focus on accuracy first; speed follows. Daily practice (15–30 minutes) yields improvements within weeks. Touch typing (not looking at the keyboard) is faster and reduces strain.",
  },
  {
    question: "Why does typing speed vary between typing tests?",
    answer:
      "Different tests use different word lists, difficulty levels, and text topics. Familiar content (common words) is faster than technical jargon. Test duration varies (1 minute vs. 5 minutes); longer tests often show lower but more consistent WPM. Fatigue, distractions, and keyboard type (mechanical vs. laptop) affect results. Use the same test regularly to track improvement accurately.",
  },
];

export const HASH_GENERATOR_FAQS: FAQ[] = [
  {
    question: "What is a hash and why is it used?",
    answer:
      "A hash is a fixed-length string generated from input data using a mathematical algorithm. It serves multiple purposes: <strong>integrity verification</strong> (ensuring files haven't changed), <strong>security</strong> (storing passwords securely), <strong>fingerprinting</strong> (unique identifier for data). Common algorithms: MD5 (legacy, insecure), SHA-1 (deprecated), SHA-256 (standard, secure), BLAKE2 (fast, modern). Hash functions are one-way: you cannot reverse a hash to get the original input.",
  },
  {
    question: "How do I verify a file's integrity using hash values?",
    answer:
      "Software distributions often provide a hash (e.g., SHA-256) of the download. After downloading, generate the file's hash locally and compare it to the provided hash. If they match, the file is intact and hasn't been tampered with. Mismatch indicates corruption or a security compromise. Hash verification is essential for downloads from untrusted networks. Command-line: <strong>sha256sum filename</strong> (Linux) or <strong>certUtil -hashfile filename SHA256</strong> (Windows).",
  },
  {
    question: "Why shouldn't I use MD5 hashes for security?",
    answer:
      "MD5 is cryptographically broken; collisions (two different inputs with the same MD5 hash) have been found and exploited. For passwords and security-critical applications, use SHA-256, SHA-3, or bcrypt (password-specific). MD5 is acceptable for non-security purposes like file deduplication or checksums. Modern systems have moved away from MD5 entirely for security contexts.",
  },
  {
    question: "How are password hashes different from general-purpose hashes?",
    answer:
      "Password hashes use <strong>slow algorithms</strong> (bcrypt, Argon2, PBKDF2) to resist brute-force attacks. A single hash takes 0.1+ seconds, making attackers' jobs infeasible. General-purpose hashes (SHA-256) are fast, making them unsuitable for passwords; attackers can try billions of hashes per second. Passwords should never be hashed with SHA-256 directly. Always use password-specific algorithms; adding 'salt' (random data) prevents rainbow-table attacks.",
  },
];

export const SCREEN_RESOLUTION_FAQS: FAQ[] = [
  {
    question: "What does screen resolution mean?",
    answer:
      "<strong>Resolution:</strong> the number of pixels displayed horizontally × vertically. Example: <strong>1920×1080</strong> means 1,920 pixels wide by 1,080 pixels tall (1080p, Full HD). Higher resolution = more pixels = sharper image (if screen size is constant) or more space to display content. Resolution depends on the monitor/screen hardware, not the content. A 4K display shows four times as many pixels as 1080p.",
  },
  {
    question: "What are common screen resolutions for different devices?",
    answer:
      "<strong>Phones:</strong> 1080×2400 (high-end), 720×1560 (mid-range). <strong>Tablets:</strong> 1024×768 (basic), 2048×1536 (iPad Pro-class). <strong>Laptops:</strong> 1366×768 (basic), 1920×1080 (standard), 2560×1440 (high-res). <strong>Desktops:</strong> 1920×1080 (entry), 2560×1440 (QHD, common), 3840×2160 (4K, high-end). <strong>TVs:</strong> 1920×1080 (1080p), 3840×2160 (4K). Resolution affects text clarity, game performance, and productivity (more space for windows).",
  },
  {
    question: "How do I choose the right resolution for my monitor?",
    answer:
      "Consider <strong>screen size</strong> (larger screens benefit from higher resolution), <strong>GPU capability</strong> (higher resolutions demand more processing power), and <strong>use case</strong> (gaming, office work, design). A 27-inch monitor at 1920×1080 may look pixelated; 1440p or 4K is better. For laptops, 1920×1080 is adequate for 13–14 inches; 1440p or higher suits 15–16 inch displays. Pixel density (pixels per inch, PPI) affects perceived sharpness.",
  },
  {
    question: "What is the difference between resolution and refresh rate?",
    answer:
      "<strong>Resolution:</strong> number of pixels. <strong>Refresh rate:</strong> how many times per second the screen redraws (measured in Hertz, Hz). A 1920×1080 @144Hz monitor displays 1,920×1,080 pixels 144 times per second (smooth for gaming). Resolution affects visual detail; refresh rate affects smoothness. Gaming benefits from both high resolution and high refresh rate; office work prioritizes resolution.",
  },
];

export const BMI_IMPERIAL_FAQS: FAQ[] = [
  {
    question: "How do I calculate BMI using pounds and inches?",
    answer:
      "<strong>BMI = (weight in pounds / (height in inches)²) × 703.</strong> Example: 180 lbs, 5'10\" (70 inches) = (180 / 70²) × 703 = (180 / 4,900) × 703 ≈ 25.8. <strong>Categories:</strong> underweight (<18.5), normal (18.5–24.9), overweight (25–29.9), obese (30+). BMI is a screening tool, not a diagnostic tool; muscle, bone density, and age affect interpretation.",
  },
  {
    question: "What is a healthy BMI range?",
    answer:
      "<strong>18.5–24.9 is 'normal' BMI.</strong> For a 5'10\" person, this corresponds to roughly 118–159 lbs. For a 5'6\" person, 105–145 lbs. However, BMI doesn't account for muscle mass; athletic individuals may have 'overweight' BMI despite being healthy. Consult a healthcare provider for personalized guidance. BMI is one metric among many (waist circumference, fitness level) for health assessment.",
  },
  {
    question: "Why is BMI criticized as a health metric?",
    answer:
      "BMI doesn't distinguish between muscle and fat. A bodybuilder might be 'obese' by BMI despite low body fat. Age, ethnicity, and bone structure aren't accounted for. Waist circumference and body composition (via DXA scans or measurements) are more nuanced. BMI is useful for population statistics and screening but shouldn't be the sole health metric. Modern healthcare emphasizes fitness, diet, and lifestyle alongside BMI.",
  },
  {
    question: "How do I use BMI to set a target weight?",
    answer:
      "Target BMI range: 18.5–24.9 (normal). <strong>Target weight = (Target BMI × height in inches²) / 703.</strong> Example: 5'10\" person targeting BMI 22 = (22 × 70²) / 703 ≈ 154 lbs. This is a healthy weight for that height. Realistic goals: losing 1–2 lbs per week is sustainable. Consult a healthcare provider or dietitian for personalized targets based on your age, sex, and fitness level.",
  },
];

export const TEXT_ANALYZER_FAQS: FAQ[] = [
  {
    question: "What metrics does text analysis typically provide?",
    answer:
      "<strong>Character count:</strong> total letters, numbers, symbols. <strong>Word count:</strong> number of words. <strong>Paragraph count:</strong> number of line breaks/sections. <strong>Sentence count:</strong> detected by periods, question marks. <strong>Average word length:</strong> characters per word. <strong>Reading time:</strong> estimated time to read (based on 200–250 WPM average). <strong>Unique words:</strong> vocabulary diversity. These metrics help assess text complexity and readability.",
  },
  {
    question: "How is reading time calculated?",
    answer:
      "<strong>Reading Time = Word Count / Average Reading Speed.</strong> Average reading speed is 200–250 WPM. Example: 1,000 words ÷ 225 WPM ≈ 4.4 minutes. Factors affecting reading speed: text complexity, reader familiarity, and focus. Academic texts are slower; blog posts faster. Estimating reading time helps content creators and readers manage time.",
  },
  {
    question: "What does reading difficulty or readability score mean?",
    answer:
      "Readability formulas (Flesch-Kincaid, Gunning Fog) estimate the education level needed to understand text. <strong>Flesch Reading Ease:</strong> 90–100 is very easy (5th-grade level), 60–70 is standard (8th-grade), 0–30 is very difficult (college+). Shorter sentences, common words, and active voice improve readability. Content creators aim for readability matching their audience's education level.",
  },
  {
    question: "How can I improve text readability?",
    answer:
      "Use shorter sentences (average 15–20 words). Choose simple, common words over jargon. Break text into shorter paragraphs. Use lists and headers for structure. Use active voice: 'Jane wrote' instead of 'was written by Jane.' Read aloud to catch awkward phrasing. Tools like Grammarly highlight readability issues. Clear, concise writing serves broader audiences and improves engagement.",
  },
];

export const PERCENTAGE_CHANGE_FAQS: FAQ[] = [
  {
    question: "How do I calculate percentage change?",
    answer:
      "<strong>Percentage Change = ((New Value − Old Value) / Old Value) × 100.</strong> Example: price rises from $50 to $60 = ((60 − 50) / 50) × 100 = 20% increase. For decreases: price drops from $100 to $80 = ((80 − 100) / 100) × 100 = −20% (a 20% decrease). Percentage change is directional; negative indicates decrease, positive indicates increase.",
  },
  {
    question: "What is the difference between percentage change and percentage point change?",
    answer:
      "<strong>Percentage change:</strong> relative change compared to the original (the formula above). <strong>Percentage point change:</strong> absolute difference. Example: interest rate rises from 2% to 5%. Percentage point change: 5 − 2 = 3 percentage points. Percentage change: ((5 − 2) / 2) × 100 = 150%. The percentage point difference is clearer for discussing small changes; percentage change emphasizes relative magnitude.",
  },
  {
    question: "How do I calculate the original value if I know the percentage change?",
    answer:
      "<strong>Original Value = New Value / (1 + Percentage Change / 100).</strong> Example: a $60 price represents a 20% increase. Original = 60 / 1.20 = $50. Or rearrange: Original = New Value / (1 + (Percentage Change / 100)). This is useful for working backward from a final price to understand the starting point.",
  },
  {
    question: "Why is percentage change useful for financial analysis?",
    answer:
      "Percentage change allows comparison between values of different magnitudes. A $10 price increase on a $50 item (20%) is more significant than a $10 increase on a $500 item (2%). Investors use percentage change to compare stock performance (a 10% gain on a $100 stock is the same as a 10% gain on a $1,000 stock). Percentage change normalizes comparisons across different scales.",
  },
];

export const DOWNLOAD_TIME_FAQS: FAQ[] = [
  {
    question: "How do I calculate download time?",
    answer:
      "<strong>Download Time = File Size (bits) / Bandwidth (bits per second).</strong> First, convert to the same units: 500 MB = 500 × 8 = 4,000 Megabits. On a 50 Mbps connection: 4,000 Mbits / 50 Mbps = 80 seconds. Example: a 1 GB file on 100 Mbps = (1 × 8,000 Mbits) / 100 Mbps = 80 seconds. Real-world speeds are usually 10–30% slower due to overhead and network congestion.",
  },
  {
    question: "Why is download speed slower than advertised bandwidth?",
    answer:
      "Advertised bandwidth is the theoretical maximum under ideal conditions. Real-world factors reduce speed: <strong>network congestion</strong> (peak hours), <strong>overhead</strong> (routing, protocol headers), <strong>distance</strong> (signal degrades over long lines), <strong>interference</strong> (WiFi, electromagnetic). Getting 70–90% of advertised speed is normal. ISPs measure speed at the modem; your actual device speed may be lower due to WiFi range or hardware limitations.",
  },
  {
    question: "How do I speed up downloads?",
    answer:
      "Close background apps consuming bandwidth. Use wired Ethernet instead of WiFi. Download during off-peak hours (late night, early morning). Check for network interference or obstacles. Upgrade to a faster internet plan if consistently slow. Use download managers that support parallel connections (downloading parts simultaneously). Some servers allow resume on interrupted downloads, saving time on retries.",
  },
  {
    question: "How does file size relate to download time?",
    answer:
      "Larger files take longer proportionally. Doubling file size doubles download time (on the same bandwidth). A 1 GB video on 50 Mbps takes 2.7 minutes; a 2 GB video takes 5.4 minutes. Streaming avoids downloading entire files; you watch as data arrives. For large files (documentaries, games, software), faster bandwidth saves significant time: 50 Mbps takes 2.7 minutes, 500 Mbps takes 16 seconds.",
  },
];

export const GAS_MILEAGE_FAQS: FAQ[] = [
  {
    question: "How do I calculate miles per gallon (MPG)?",
    answer:
      "<strong>MPG = Miles Driven / Gallons Used.</strong> Example: drove 300 miles on 10 gallons = 300 / 10 = 30 MPG. To track: fill the tank (note the odometer), drive normally, refill and note the odometer again. Calculate miles between fill-ups and gallons used at the second fill-up. Most modern cars display MPG in the dashboard; tracking manually confirms accuracy.",
  },
  {
    question: "What factors affect fuel efficiency and MPG?",
    answer:
      "<strong>Driving habits:</strong> aggressive acceleration and braking reduce MPG. <strong>Speed:</strong> highway driving (steady speed) is more efficient than city (stop-and-go). <strong>Vehicle condition:</strong> properly inflated tires, clean air filter, good engine maintenance improve MPG. <strong>Weight:</strong> heavier loads (cargo, passengers) reduce efficiency. <strong>Weather:</strong> cold engines use more fuel; air conditioning reduces MPG. <strong>Route:</strong> hilly terrain is less efficient than flat. Improving MPG saves money and reduces emissions.",
  },
  {
    question: "How do I improve fuel economy?",
    answer:
      "Accelerate smoothly and gradually. Maintain steady speeds on highways. Remove unnecessary cargo. Keep tires properly inflated (underinflation reduces MPG significantly). Combine trips to minimize cold starts. Use cruise control on highways. Reduce idling. Avoid using air conditioning if possible. Keep up with maintenance (oil changes, filter replacements). Hypermiling (extreme efficiency techniques) can improve MPG by 10–20% but may sacrifice safety or comfort.",
  },
  {
    question: "How do I compare fuel efficiency between vehicles?",
    answer:
      "Use EPA-estimated MPG (displayed on new car stickers and fueleconomy.gov). For manual tracking: calculate actual MPG over a few fill-ups. Convert between units: <strong>235 / MPG = L/100km</strong> (metric standard). A 30 MPG car = 7.8 L/100km; a 50 MPG hybrid = 4.7 L/100km. Compare vehicles of similar size/class; a sedan's 40 MPG is good, but an SUV's 40 MPG is exceptional.",
  },
];

export const DATA_STORAGE_FAQS: FAQ[] = [
  {
    question: "How are data storage units related: bits, bytes, kilobytes, gigabytes?",
    answer:
      "<strong>1 byte = 8 bits, 1 kilobyte (KB) = 1,024 bytes, 1 megabyte (MB) = 1,024 KB, 1 gigabyte (GB) = 1,024 MB, 1 terabyte (TB) = 1,024 GB.</strong> (Note: decimal system uses 1,000; binary uses 1,024.) Example: a 1 GB file = 1,024 MB ≈ 1 billion bytes. Understanding these relationships helps estimate storage needs. A 500 GB hard drive holds roughly 500 billion bytes.",
  },
  {
    question: "How much storage do I need for different types of files?",
    answer:
      "<strong>Photos:</strong> 2–5 MB each (higher resolution = larger). <strong>HD video:</strong> 100–500 MB per minute (depends on quality). <strong>4K video:</strong> 1–3 GB per minute. <strong>Music:</strong> 3–10 MB per song. <strong>Apps:</strong> 50 MB–2 GB. <strong>Operating system:</strong> 20–50 GB. A 1 TB drive holds roughly 200,000 photos, 200 hours of HD video, or 200,000 songs. Needs vary; calculate based on your content.",
  },
  {
    question: "What is the difference between storage capacity and available storage?",
    answer:
      "Stated capacity (e.g., 500 GB hard drive) is the theoretical maximum. Actual usable capacity is lower: <strong>operating system uses 30–50 GB, file system overhead takes 5–10%.</strong> A 500 GB drive might have only 420–450 GB usable. Cloud storage is often metered by purchase (e.g., 100 GB storage plan). Check 'available' space in device settings to see actual free space. When buying external drives, account for this reduction.",
  },
  {
    question: "Should I use cloud storage or local storage?",
    answer:
      "<strong>Cloud storage:</strong> accessible anywhere, backed up automatically, limited by subscription. <strong>Local storage:</strong> faster, private, limited to device capacity, requires manual backup. Ideal setup: use both—local for speed and privacy, cloud for backup and access. Essential files should be in both locations. Cloud costs $10–20/month for 200 GB–1 TB; external drives cost $50–100 one-time for similar capacity.",
  },
];

export const TIME_ZONE_FAQS: FAQ[] = [
  {
    question: "How do time zones work?",
    answer:
      "Earth rotates 360° in 24 hours, so 15° of rotation per hour. Time zones divide the world into 24 one-hour zones based on longitude. <strong>UTC (Coordinated Universal Time)</strong> is the reference; other zones are offset (UTC−8 for US Pacific, UTC+8 for China). Daylight Saving Time (DST) shifts clocks forward 1 hour in summer (in some regions). The International Date Line roughly follows the 180° meridian; areas east are a day behind areas west.",
  },
  {
    question: "How do I calculate time differences between zones?",
    answer:
      "Subtract the UTC offsets. Example: New York (UTC−5 EST) to Tokyo (UTC+9) = 9 − (−5) = 14 hours ahead. When it's 10 AM Tuesday in New York, it's 12 AM (midnight) Wednesday in Tokyo. Online tools and phone apps handle this instantly; manually: find each zone's UTC offset, calculate the difference, and adjust the time. Account for DST changes; offsets vary seasonally.",
  },
  {
    question: "Why does Daylight Saving Time exist?",
    answer:
      "DST shifts clocks forward 1 hour in spring to extend evening daylight, theoretically saving energy. Historically, it was meant to reduce electricity use. Modern evidence suggests minimal energy savings; disruptions to sleep, health, and schedules are measurable. Many countries or regions have abandoned DST. The US observes it (with exceptions: Hawaii, Arizona, US territories don't). DST transitions occur on specific dates (second Sunday in March, first Sunday in November in the US).",
  },
  {
    question: "How do I schedule meetings across multiple time zones?",
    answer:
      "Find a time convenient for all zones. Use timezone converters (worldtimebuddy.com, timezone.io) to visualize overlapping working hours. Schedule during daytime hours (9 AM–5 PM) for all participants if possible. Document the meeting time in UTC or each participant's local time to avoid confusion. Set phone/calendar reminders, accounting for DST changes if the meeting is weeks away. Time zone apps send notifications adjusted to each participant's zone.",
  },
];

export const COUNTDOWN_FAQS: FAQ[] = [
  {
    question: "How do I calculate days remaining to a future date?",
    answer:
      "<strong>Days Remaining = Future Date − Today's Date.</strong> Example: today is March 15, event is April 10 = 26 days remaining. To calculate manually: count days remaining in the current month (31 − 15 = 16 days in March), plus days in subsequent months until the event. Online calculators compute this instantly. Knowing days remaining helps with event planning, deadlines, and travel preparation.",
  },
  {
    question: "What is the difference between days, business days, and working days?",
    answer:
      "<strong>Days:</strong> all 7 days (includes weekends). <strong>Business days / working days:</strong> Monday–Friday (excludes weekends). <strong>Project deadlines:</strong> often specify 'business days' (e.g., 5 business days = typically 1 week). A 10-business-day deadline = 2 calendar weeks (excluding weekends). Understanding the distinction prevents missing deadlines. Many organizations exclude holidays from 'business days' as well.",
  },
  {
    question: "How do I use countdowns for event planning?",
    answer:
      "Break goals into milestones. 60 days before an event: book venues, send invites. 30 days: finalize catering, accommodations. 14 days: confirm RSVPs, prepare materials. 7 days: final preparations, reminders. 1 day: setup, last-minute items. Countdown timers (physical clocks, app widgets) provide motivation and visual progress. Some events use 'days until' displays for external visibility (fundraisers, product launches, holidays).",
  },
  {
    question: "How do I account for leap years and varying month lengths?",
    answer:
      "Months vary: 28–31 days. Leap years (divisible by 4, except centuries not divisible by 400) have 366 days (February has 29 days). When calculating days manually, count actual month lengths: 31 (Jan, Mar, May, Jul, Aug, Oct, Dec), 30 (Apr, Jun, Sep, Nov), 28/29 (Feb). Online calculators handle this automatically. A countdown to a February date in a leap year spans 29 days in February, not 28.",
  },
];

export const LOAN_TO_VALUE_FAQS: FAQ[] = [
  {
    question: "What is Loan-to-Value (LTV) ratio?",
    answer:
      "<strong>LTV = (Loan Amount / Property Value) × 100.</strong> Example: borrowing $180,000 on a $200,000 property = (180,000 / 200,000) × 100 = 90% LTV. LTV indicates loan risk: higher LTV = lender takes more risk. <strong>Below 80% LTV:</strong> generally favorable (borrower has 20%+ equity). <strong>Above 80% LTV:</strong> lender may require PMI (private mortgage insurance) to protect against default. <strong>Below 50% LTV:</strong> strongest position (half the property value as equity).",
  },
  {
    question: "How does LTV affect mortgage terms and interest rates?",
    answer:
      "Lower LTV = better mortgage terms and interest rates. A 60% LTV borrower qualifies for rates 0.5–1% lower than a 90% LTV borrower. LTV below 80% avoids PMI, saving hundreds monthly. Lenders prefer lower LTV because it means you have substantial equity; if you default, the lender has a better chance of recovering losses via sale. Making a larger down payment (increasing equity, lowering LTV) improves your mortgage offer significantly.",
  },
  {
    question: "How can I reduce my LTV?",
    answer:
      "<strong>Make a larger down payment.</strong> A 20% down payment = 80% LTV (no PMI). <strong>Pay down the loan principal</strong> (extra payments reduce loan amount). <strong>Wait for property appreciation</strong> (property value increases lower LTV). Example: bought a $200,000 property at 90% LTV ($180,000 loan), property appreciates to $220,000. New LTV = (180,000 / 220,000) × 100 = 81.8% (potentially qualifying you to drop PMI).",
  },
  {
    question: "What is the difference between LTV and CLTV (Combined LTV)?",
    answer:
      "<strong>LTV:</strong> ratio of a single loan to the property value. <strong>CLTV:</strong> total of all loans (first mortgage, second mortgage, home equity loans) divided by property value. Example: $200,000 property, $160,000 first mortgage, $20,000 HELOC = CLTV = (160,000 + 20,000) / 200,000 = 90%. Lenders evaluate CLTV to determine total leverage on a property. High CLTV increases default risk.",
  },
];

export const VOLTAGE_DROP_FAQS: FAQ[] = [
  {
    question: "What is voltage drop and why does it matter?",
    answer:
      "Voltage drop is the loss of electrical potential as current flows through a conductor (wire). Long wires or small gauges cause higher voltage drop. Example: a 12V circuit loses 1V over 100 feet, delivering 11V to the device. This reduces equipment efficiency and can cause malfunction (motors run slow, lights dim). Acceptable voltage drop is typically <3% for branch circuits, <5% combined. Proper wire gauge (thickness) minimizes voltage drop.",
  },
  {
    question: "How do I calculate voltage drop?",
    answer:
      "<strong>Voltage Drop (V) = (2 × Resistance × Current) / 1,000, where Resistance = (Resistivity × Distance) / Wire Cross-Section.</strong> Alternatively, use the formula: <strong>VD = (2 × ρ × I × L) / A</strong> (where ρ is resistivity, I is current in amps, L is distance in feet, A is wire cross-section in circular mils). For practical use, electricians use charts and calculators specifying wire gauge and amperage. Example: 20 amps at 100 feet with #10 wire ≈ 2% voltage drop (acceptable).",
  },
  {
    question: "How do I reduce voltage drop?",
    answer:
      "<strong>Use larger wire gauge</strong> (thicker wire has less resistance). <strong>Shorten the distance</strong> (fewer feet = less drop). <strong>Increase voltage</strong> (high-voltage systems naturally have lower percent drop). Example: 12V at 100 feet with #10 wire has ~2% drop; the same circuit at 240V has ~0.1% drop (8× better). Electricians select wire gauge based on circuit length, amperage, and acceptable voltage drop percentage.",
  },
  {
    question: "Why is voltage drop important in solar and remote power systems?",
    answer:
      "Off-grid systems (solar, batteries) operate at lower voltages (12V, 24V, 48V), making voltage drop proportionally significant. A 1V drop on 12V is 8.3%; on 240V it's 0.4%. Solar installations require careful wire sizing over long distances. Using a lower voltage from the battery to an inverter (which boosts voltage) requires thicker wires. Higher-voltage systems (48V or inverter output to house) tolerate longer distances before significant drop. Proper design ensures full power delivery.",
  },
];

