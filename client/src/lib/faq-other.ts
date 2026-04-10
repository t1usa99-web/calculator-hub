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
