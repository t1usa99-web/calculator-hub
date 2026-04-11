// FAQ content for Construction calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.
//
// Writing guidelines:
// - Question phrasing should mirror "People Also Ask" queries
// - Answers are 80-150 words, direct and factual
// - Avoid marketing fluff; prioritize accuracy and practical value
// - HTML formatting permitted in answers (used with dangerouslySetInnerHTML)

import type { FAQ } from "./calculator-registry";

export const BTU_FAQS: FAQ[] = [
  {
    question: "What is a BTU and how much heating does it provide?",
    answer:
      "BTU (British Thermal Unit) is a measure of heat energy. <strong>1 BTU = heat needed to raise 1 pound of water by 1°F.</strong> Heating and cooling systems are rated in BTU per hour. A 10,000 BTU air conditioner removes 10,000 BTU of heat per hour. Furnaces are rated in BTU output; a 60,000 BTU furnace provides that much heating per hour. BTU requirements depend on room size, insulation, climate, and outside temperature. Properly sizing equipment prevents inefficiency and ensures comfort.",
  },
  {
    question: "How do I calculate BTU needs for a room?",
    answer:
      "<strong>Rough estimate: 20 BTU per square foot.</strong> A 300 sq ft room = 6,000 BTU. For more accuracy: <strong>BTU = (Room sq ft × 25) + (Number of windows × 4,000) + (Number of doors × 2,000) + (Number of occupants × 400).</strong> Adjust for insulation (−10 to +20%), climate zone, and sun exposure. A well-insulated, cool climate may need only 10 BTU/sq ft; a poorly insulated, hot climate may need 30+ BTU/sq ft. Professional HVAC assessments account for all variables.",
  },
  {
    question: "What is the difference between BTU input and BTU output?",
    answer:
      "<strong>BTU input:</strong> fuel energy consumed (gas furnace burns natural gas). <strong>BTU output:</strong> useful heat delivered to the space. Efficiency = (Output / Input) × 100. A 95% efficient furnace with 100,000 BTU input delivers 95,000 BTU output; the remaining 5% is lost up the chimney or through inefficiency. Higher efficiency (90%+) saves fuel costs over time. AFUE (Annual Fuel Utilization Efficiency) indicates furnace efficiency.",
  },
  {
    question: "How do I choose the right air conditioner size in BTU?",
    answer:
      "Undersized AC doesn't cool adequately, overworking and failing prematurely. Oversized AC cycles on/off frequently, wasting energy and not dehumidifying well. Calculate room square footage and multiply by 20 for mild climates, 25 for hot climates, or 30 for very hot climates. Example: 400 sq ft room in a hot climate = 400 × 25 = 10,000 BTU. Add 2,000 BTU per window, 2,000 per door. HVAC professionals use Manual J calculations for precise sizing.",
  },
  {
    question: "How does insulation affect BTU requirements?",
    answer:
      "Better insulation reduces BTU needs significantly. An uninsulated room may need 30+ BTU/sq ft; a well-insulated room needs 15–20 BTU/sq ft (50% less). Insulation (R-value), air sealing, and window quality are critical. Improving insulation before installing HVAC allows you to purchase smaller, cheaper, more efficient equipment. Conversely, adding insulation after installing oversized equipment wastes the efficiency gains. Energy-efficient buildings require 30–50% less heating/cooling capacity.",
  },
];

export const DECK_FAQS: FAQ[] = [
  {
    question: "How much does a deck cost to build?",
    answer:
      "<strong>Average cost: $15–35 per square foot (material + labor).</strong> A 200 sq ft deck costs $3,000–7,000. Budget depends on materials: pressure-treated lumber ($15–25/sq ft), composite ($25–40/sq ft), hardwood ($30–50/sq ft). Labor is typically 50% of total cost. Additional costs: railing, stairs (+$100–500 per set), complex designs, and permits. Professional installers charge $50–100+ per hour. DIY reduces labor but requires tools and skills. Get multiple quotes from local contractors for accurate pricing.",
  },
  {
    question: "What is the proper deck size and height for my home?",
    answer:
      "Deck size should be 25–33% of the home's footprint. A 2,000 sq ft home suits a 500–650 sq ft deck. Height depends on topography: ground-level decks don't require railings (but check local codes), 24–30 inches requires railings in most jurisdictions, 36+ inches is a standard 2nd-floor height. Building codes specify railing height (typically 36–42 inches), baluster spacing (<4 inches, preventing head entrapment), and stair dimensions (7 inch max rise, 11 inch min run). Always check local building codes before designing.",
  },
  {
    question: "What materials are best for deck construction?",
    answer:
      "<strong>Pressure-treated lumber:</strong> affordable, requires maintenance (staining every 2–3 years). <strong>Composite:</strong> lower maintenance, more expensive upfront, longer lifespan. <strong>Tropical hardwoods:</strong> durability and beauty, premium price. <strong>PVC:</strong> lowest maintenance, most expensive, excellent for wet areas. <strong>Cedar/redwood:</strong> aesthetically pleasing, less durable than pressure-treated. Most builders recommend composite for new decks despite higher cost; total cost of ownership (including maintenance) is lower over 20 years. Climate affects material choice: coastal areas need rot-resistant materials.",
  },
  {
    question: "How deep should deck posts be set in concrete?",
    answer:
      "<strong>Posts must be set below the frost line.</strong> Frost depth varies by location: northern climates require 3–5 feet, southern climates 1–2 feet, coastal areas often <12 inches. Posts set too shallow heave (rise) in winter as ground freezes, damaging the structure. Use concrete footings (4–6 inches above ground) and bury the post pier <frost line depth> in the ground. Post spacing depends on load: 4×4 posts typically 8–12 feet apart on residential decks. Local building codes specify requirements.",
  },
  {
    question: "How do I ensure a deck is structurally sound?",
    answer:
      "Use proper post spacing (<12 feet for 4×4), adequate beam support, and correct fasteners (corrosion-resistant). Decking boards should be spaced 1/8–1/4 inch apart for drainage. Ledger board (attaching to house) is critical: bolt to house rim band with flashing to prevent water intrusion and rot (a leading failure point). Railings must support 200 lbs of horizontal force. Annual inspection checks for rotting posts, loose fasteners, and cracked boards. Maintenance extends lifespan: cleaning, sealing, and addressing damage promptly.",
  },
];

export const DRYWALL_FAQS: FAQ[] = [
  {
    question: "How much drywall do I need for a room?",
    answer:
      "Calculate the total wall and ceiling area: walls = (perimeter × height), ceiling = length × width. Example: a 12' × 14' room with 8' ceilings = (2(12+14) × 8) + (12 × 14) = 416 + 168 = 584 sq ft. Drywall sheets are 4' × 8' = 32 sq ft per sheet. 584 / 32 = 18.25 sheets (round up to 19). Add 10% for waste/cuts, so order 21 sheets. Drywall thickness: 1/2 inch is standard for residential (soundproofing uses 5/8 inch). Account for openings (windows, doors) to reduce needed sheets slightly.",
  },
  {
    question: "What is the proper drywall thickness and fire rating?",
    answer:
      "<strong>1/2 inch:</strong> standard residential, adequate for most walls/ceilings. <strong>5/8 inch:</strong> improved sound insulation, fire rating, used in commercial or between units. <strong>Type X drywall:</strong> 1 hour fire rating (5/8 inch Type X), required by code in some areas (garage walls, furnace rooms, party walls). <strong>Moisture-resistant ('green board'):</strong> resistant to mildew, used in kitchens/bathrooms, not waterproof. Check local building codes for requirements. Type X adds ~$2–3 per sheet but is mandatory in some jurisdictions.",
  },
  {
    question: "How do I tape and mud drywall properly?",
    answer:
      "After hanging, apply joint compound (mud) in thin coats: first coat fills seams and tape, second coat feathers edges wider, third coat (optional) feathers further for a seamless finish. Let each coat dry fully (24 hours) before sanding and applying the next. Tape seams with paper tape or mesh tape (mesh faster but leaves more paste bubbles). Sand between coats with 120–150 grit sandpaper. Proper technique takes 3–5 coats depending on joint visibility and desired smoothness. Priming before painting is essential for even appearance.",
  },
  {
    question: "How many screws or nails does drywall require?",
    answer:
      "Drywall screws are preferable to nails (less popping). <strong>Spacing: 12 inches on walls (studs typically 16 inches apart), 12 inches on ceilings for heavy drywall.</strong> Use <strong>1 1/4 inch screws for 1/2 inch drywall, 1 5/8 inch for 5/8 inch.</strong> Screws should be spaced 12–16 inches around perimeter, 16 inches in the field. A 4'×8' sheet needs approximately 30–40 fasteners (12 on perimeter every 16 inches + field fasteners). Over-fastening (too many) causes pops; under-fastening causes sagging and cracks. Use a power drill with drywall screw bit for consistency.",
  },
  {
    question: "How do I repair drywall damage?",
    answer:
      "<strong>Small holes (<6 inches):</strong> use spackle (joint compound), apply in layers, sand smooth. <strong>Medium damage (6–18 inches):</strong> cut a rectangular patch, install a backing board, tape and mud. <strong>Large damage (>18 inches):</strong> cut out the damaged section, install a full-sheet patch with backing, tape and mud all seams. Always repair moisture damage immediately; identify and fix the water source or it will recur. For cosmetic damage, texture matching may be necessary. Professional drywall repair is quick and inexpensive; DIY requires practice for a seamless finish.",
  },
];

export const FENCE_FAQS: FAQ[] = [
  {
    question: "How much fencing material do I need?",
    answer:
      "Measure the perimeter of the area to be fenced (add 10% for waste). <strong>Linear footage = 2 × (length + width).</strong> A 100' × 50' property = 2 × 150 = 300 linear feet. Material quantity depends on board spacing: 6-foot boards with 1/4-inch gaps need 1 board per 6 feet + post spacing. Typically, a 300-foot fence needs 50–60 boards (8' sections). Posts are spaced 6–8 feet apart; a 300-foot fence needs 40–50 posts (one every 6–8 feet, plus corners). Calculate total linear feet and divide by section width for accurate counts.",
  },
  {
    question: "What is the best material for a fence?",
    answer:
      "<strong>Wood:</strong> attractive, moderate cost ($8–15/linear foot installed), requires maintenance (staining every 2–3 years). <strong>Vinyl:</strong> low maintenance, premium price ($15–25/linear foot), durable 20+ years. <strong>Metal (aluminum/steel):</strong> durability, modern look ($10–20/linear foot). <strong>Chain-link:</strong> affordable, less attractive ($5–10/linear foot), requires maintenance. <strong>Composite:</strong> combines durability and aesthetics ($12–18/linear foot). Material choice depends on budget, maintenance tolerance, aesthetic preference, and climate. Hot climates degrade wood/vinyl faster; coastal areas need corrosion-resistant materials.",
  },
  {
    question: "How deep should fence posts be set?",
    answer:
      "<strong>Post depth = 1/3 of above-ground height + 6 inches.</strong> Example: a 6-foot fence = (6/3) + 0.5 = 2.5 feet deep, typically 3 feet minimum. In frost zones, posts must be set <frost line depth> (3–5 feet northern climates) to prevent heaving. Use concrete (4–6 inches around post base) for stability; gravel alone is insufficient. Posts set too shallow shift over time; posts set too deep waste material and may be unnecessary. Local building codes specify post depth requirements.",
  },
  {
    question: "What is the proper post spacing for a fence?",
    answer:
      "<strong>Standard spacing: 6–8 feet apart.</strong> Common spacing: 6 feet for aesthetic appeal, 8 feet for cost savings. Closer spacing (4–6 feet) adds strength and looks better but uses more material. Wider spacing (10+ feet) reduces material but may sag under wind load. Wood or vinyl panels determine spacing: panel width of 6 feet = posts 6 feet apart (one post per panel plus one at each end). Terrain affects spacing: on slopes, closer spacing is recommended. Check local code minimums.",
  },
  {
    question: "How do I maintain and extend fence lifespan?",
    answer:
      "Inspect annually for rot, leaning, or damage. <strong>Wood:</strong> stain/seal every 2–3 years, address rot immediately. <strong>Metal:</strong> check for rust, repaint if needed. <strong>Vinyl:</strong> wash annually, no sealing needed. Ensure drainage around posts (standing water causes rot). Trim vegetation touching fence (moisture and pests). Replace damaged boards promptly. Repair leaning posts with bracing or concrete reinforcement. Proper maintenance (every 2–3 years) extends fence life by 20+ years. Neglected fences last 15–20 years; well-maintained fences can last 30+ years.",
  },
];

export const GRAVEL_FAQS: FAQ[] = [
  {
    question: "How much gravel do I need for a driveway?",
    answer:
      "<strong>Volume (cubic yards) = (Length × Width × Depth) / 27.</strong> Example: 20' × 10' driveway with 4 inches depth = (20 × 10 × 0.33) / 27 ≈ 2.5 cubic yards. Typical driveways use 2–4 inches of gravel. A cubic yard of gravel weighs 1.2–1.5 tons and covers ~100 sq ft at 3-inch depth. Account for settling: apply 1.5× the calculated amount initially, compact, then add more as it settles. Restock annually: compact gravel settles 10–20% yearly; add 0.5–1 cubic yard per 100 sq ft driveway annually.",
  },
  {
    question: "What types of gravel are best for different uses?",
    answer:
      "<strong>Crushed granite:</strong> durable, excellent for driveways (sharp edges bind). <strong>Pea gravel:</strong> smooth, comfortable to walk on, poor for driveways (rolls). <strong>Crushed limestone:</strong> affordable, hardens when compacted, good for base layers. <strong>Jersey Shore gravel:</strong> mixed aggregate, compacts well. <strong>River rock:</strong> aesthetic, poor for stability (rolls easily). <strong>Marble chips:</strong> decorative, expensive. Driveways benefit from crushed material (edges interlock); landscaping and pathways use pea gravel or river rock for comfort. A proper driveway uses 4 inches of crushed stone base + 2 inches of crushed granite top layer.",
  },
  {
    question: "How do I compact and maintain a gravel driveway?",
    answer:
      "Spread gravel in 2–3-inch layers and compact each layer with a plate compactor or roller. Water slightly during compaction to help binding. After installation, the driveway will settle over a few weeks; add more gravel to maintain 3–4 inches total depth. Rake monthly to redistribute loose gravel; fill ruts as they form. Spread a dust suppressant (water or commercial product) in dry climates to reduce dust and gravel scatter. Regrade the driveway annually; poorly maintained driveways become full of potholes and ruts within 2–3 years.",
  },
  {
    question: "How do I prevent gravel from scattering?",
    answer:
      "Use edge borders (wood, plastic, metal) along driveway edges to contain gravel. Compact thoroughly (loose gravel scatters easily). Use larger gravel sizes at edges (transition zone). Apply dust suppressant or tackifier (liquid binder) to reduce loose material. Avoid sharp turns or high-speed driving (tosses gravel). Regular raking redistributes scattered material. Recycled asphalt (millings) binds better than virgin gravel; some areas mandate it. Heavy use (high-traffic driveways) scatters more gravel; low-use driveways hold material longer.",
  },
  {
    question: "How much does gravel cost and how long does it last?",
    answer:
      "Gravel costs $15–50 per cubic yard (varies by region and type). A 500 sq ft driveway (2 inches deep) costs $75–200 initially, then $30–50 annually for replenishment. Lifespan depends on use and maintenance: high-traffic, poorly maintained driveways need reworking every 3–5 years; low-traffic, well-maintained driveways last 5–10 years before needing fresh gravel. Asphalt or concrete is more expensive upfront but lasts 15–20 years, making them more cost-effective long-term for driveways.",
  },
];

export const GUTTER_FAQS: FAQ[] = [
  {
    question: "What is the correct gutter size for my roof?",
    answer:
      "Gutter size depends on <strong>roof pitch, drainage area (sq ft), and rainfall rate.</strong> <strong>5-inch gutters:</strong> suitable for most residential roofs up to 1,000 sq ft per gutter run. <strong>6-inch gutters:</strong> for larger roofs (>1,000 sq ft) or high-rainfall areas. <strong>7-8 inch gutters:</strong> commercial or steep roofs. Rule of thumb: allow 1 square inch of drainage area per 1 sq ft of roof area. A 1,500 sq ft roof needs 1,500 square inches of gutter capacity (one 5-inch gutter handles ~1,000 sq ft; thus 1.5 gutters or use 6-inch). Undersized gutters overflow; oversized are visually prominent.",
  },
  {
    question: "How often should gutters be cleaned?",
    answer:
      "<strong>Minimum twice yearly:</strong> fall (after leaves drop) and spring (before heavy rain season). More frequent cleaning (4+ times/year) is recommended if trees overhang the roof. Clogged gutters cause water to overflow, damaging fascia, soffit, and foundation. Standing water in gutters promotes algae growth, rust, and deterioration. Gutter guards reduce debris but don't eliminate cleaning. Professional gutter cleaning costs $100–300 per visit; DIY requires a ladder and care. Debris removal takes 2–4 hours for a typical home.",
  },
  {
    question: "What is gutter pitch and why is it important?",
    answer:
      "<strong>Gutter pitch (slope) should be 1/4 inch drop per 10 linear feet</strong> to ensure water flows toward downspouts. Without pitch, water pools, causing rust and algae. Excessive pitch (>1/4 inch per 10 feet) looks noticeably sloped. Install gutters level or with proper slope; check with a level after installation. Improper pitch is a common DIY mistake. Professional installers ensure correct pitch; improper installation leads to pooling and premature gutter failure.",
  },
  {
    question: "How many downspouts do I need?",
    answer:
      "<strong>One downspout per 600–800 linear feet of gutter.</strong> A typical house (160 linear feet of gutter) needs 1 downspout minimum; 2 is better. Downspouts should be 3×4 inches (standard residential) or 4×4 inches for larger roofs. Downspouts should discharge 10+ feet from the foundation (or into a drainage system). Fewer downspouts = overflow risk; too many is unnecessary. Ensure each downspout handles its section: a 40-foot gutter section with one downspout at the end must drain all water, causing overflow risk at the far end.",
  },
  {
    question: "What materials are best for gutters?",
    answer:
      "<strong>Aluminum:</strong> popular, affordable ($3–7/linear foot), lightweight, low maintenance, lasts 20–25 years. <strong>Steel:</strong> durable, prone to rust, costs $4–8/linear foot. <strong>Copper:</strong> beautiful, lasts 50+ years, expensive ($8–20/linear foot), requires special fasteners. <strong>Vinyl:</strong> affordable ($2–4/linear foot), lower durability (15–20 years), can crack in cold climates. Most homeowners choose aluminum for balance of cost and durability. Gutter style (K-style, half-round) affects aesthetics and cost.",
  },
];

export const INSULATION_FAQS: FAQ[] = [
  {
    question: "What does R-value mean for insulation?",
    answer:
      "<strong>R-value measures thermal resistance:</strong> higher R-value = better insulation. <strong>R-value per inch varies by material:</strong> fiberglass (3.2–3.8), mineral wool (3.6–4), cellulose (3.2–3.8), spray foam (6–7), rigid foam (5–8). Example: 1-inch of spray foam (R-7) insulates as well as 2 inches of fiberglass (R-6.4). Total R-value depends on thickness: 6 inches of R-3.8 fiberglass = R-23. Building codes specify minimum R-values by climate zone and application: attics (R-30 to R-60), walls (R-13 to R-21), basements (R-10 to R-21). Higher R-values in cold climates, lower in mild climates.",
  },
  {
    question: "What is the best insulation for walls, attics, and basements?",
    answer:
      "<strong>Attics (most heat loss):</strong> fiberglass batts, cellulose, or mineral wool (loose-fill or rolled). <strong>Walls:</strong> blown fiberglass, cellulose, or rigid foam (during construction); difficult to retrofit. <strong>Basements:</strong> rigid foam (moisture-resistant), mineral wool, or fiberglass with proper vapor barrier. <strong>Crawl spaces:</strong> batt insulation between joists or rigid foam on ground. Material choice depends on climate, moisture levels, and budget. Spray foam is premium ($1.5–3.5/sq ft) but air-seals simultaneously. Fiberglass batts are affordable ($0.25–0.50/sq ft). Avoid insulation touching roof (proper venting needed) or penetrating conduits without sealing.",
  },
  {
    question: "How do I calculate insulation needs?",
    answer:
      "Calculate area to insulate: walls (linear feet × height), ceilings (length × width), basement (wall linear feet × height, or floor area). Multiply by desired R-value. Example: 400 sq ft attic with R-30 target = 400 × 30 = 12,000 R per sq ft. Fiberglass (R-3.8/inch) needs 12,000 / 3.8 = 3,160 inches total, or 3,160 / 400 = 7.9 inches (roughly 8 inches). Spreadable (loose-fill) material covers more easily; batting requires precise cutting.",
  },
  {
    question: "How much does insulation cost?",
    answer:
      "<strong>Fiberglass batts:</strong> $0.25–0.50/sq ft. <strong>Blown fiberglass/cellulose:</strong> $0.50–1.50/sq ft. <strong>Spray foam:</strong> $1.50–3.50/sq ft. <strong>Rigid foam boards:</strong> $1.00–2.50/sq ft. Total project cost includes materials, labor, and potential removal of old insulation. A 1,200 sq ft attic with fiberglass batts costs $300–600 DIY; professional blown-in costs $800–1,500. Energy savings (10–15% utility reduction) offset cost over 5–10 years in many climates. ROI depends on local energy costs and climate severity.",
  },
  {
    question: "How does insulation affect heating and cooling costs?",
    answer:
      "Inadequate insulation (R-0 to R-5) causes significant energy loss; upgrading to R-20+ saves 20–40% on heating/cooling. Attic insulation yields the highest return (heat rises; proper attic insulation prevents 25–30% of loss). Wall insulation prevents 15–20% loss; basement 10–15%. Climate affects ROI: cold climates see faster payback (5–7 years); mild climates take longer (10–15 years). Modern, properly insulated homes (R-40 attic, R-21 walls, R-10 basement) use 50% less energy for climate control than poorly insulated homes.",
  },
];

export const MULCH_FAQS: FAQ[] = [
  {
    question: "How much mulch do I need for a garden bed?",
    answer:
      "<strong>Volume (cubic yards) = (Area in sq ft × Depth in inches) / 324.</strong> Example: a 100 sq ft bed with 3 inches of mulch = (100 × 3) / 324 ≈ 0.93 cubic yards (round up to 1). A cubic yard of mulch covers approximately 100 sq ft at 3-inch depth, 150 sq ft at 2-inch depth. 1-inch depth (minimal) covers 300 sq ft. Most landscaping uses 2–4 inches for adequate weed suppression and moisture retention. Deeper mulch (4+ inches) risks disease on plant bases; keep mulch 6 inches away from tree trunks.",
  },
  {
    question: "What are the benefits of mulch?",
    answer:
      "<strong>Weed suppression:</strong> blocks sunlight, preventing weeds. <strong>Moisture retention:</strong> reduces water evaporation by 50%+. <strong>Temperature regulation:</strong> keeps soil cooler in summer, warmer in winter (via insulation). <strong>Soil improvement:</strong> organic mulch (wood chips, bark) decomposes, enriching soil with organic matter. <strong>Erosion control:</strong> prevents soil washout on slopes. <strong>Aesthetics:</strong> improves landscape appearance, defines planting beds. Organic mulch provides ongoing benefits; synthetic mulch (rubber, plastic) offers weed suppression without soil improvement.",
  },
  {
    question: "What types of mulch are best for different purposes?",
    answer:
      "<strong>Wood chips/bark:</strong> best for general landscaping, ornamental beds, good aesthetics, decomposes in 3–5 years. <strong>Shredded hardwood:</strong> stays in place, slower decomposition (4–7 years). <strong>Pine needles:</strong> acidifies soil, good for acid-loving plants (blueberries, rhododendrons), less weed suppression. <strong>Straw:</strong> affordable, decomposes quickly (1–2 years), useful for vegetable gardens, allows easy seasonal replanting. <strong>Rubber mulch:</strong> long-lasting (10+ years), non-biodegradable, better for playgrounds than gardens. <strong>Compost:</strong> enriches soil but decomposes quickly (1 year).",
  },
  {
    question: "How often should I replace mulch?",
    answer:
      "Organic mulch breaks down over 2–5 years (wood chips last 3–5 years, bark 4–6 years). As mulch decomposes, weed suppression and moisture retention decrease. Annual top-off (0.5–1 inch) maintains effectiveness. Complete replacement every 3–5 years is typical. In hot climates or high-traffic areas, replacement may be needed every 2 years. Rubber or plastic mulch lasts 10+ years but doesn't improve soil. Cost of replacement ($50–200 per 100 sq ft annually) must be weighed against benefits.",
  },
  {
    question: "How do I apply mulch correctly?",
    answer:
      "Remove weeds and debris from the bed first. Loosen the soil (optional, improves plant growth). Spread mulch evenly, 2–4 inches deep. <strong>Critical:</strong> keep mulch 6 inches away from tree/shrub trunks (prevents rot and disease). Avoid piling mulch against stems. Water the bed thoroughly after applying mulch (helps settle material). Annual maintenance: rake and break up compacted mulch, add top-off layer, remove weeds as they emerge. Proper application ensures effectiveness; improper application (mulch against trunks, too deep) causes plant problems.",
  },
];

export const PAINT_FAQS: FAQ[] = [
  {
    question: "How much paint do I need to paint a room?",
    answer:
      "<strong>Calculate wall area: 2(Length + Width) × Height.</strong> Example: 14' × 12' room, 8' ceiling = 2(14+12) × 8 = 416 sq ft. <strong>Add ceiling: 14 × 12 = 168 sq ft.</strong> Total: 584 sq ft. Most paint covers 350–400 sq ft per gallon. 584 / 375 = 1.56 gallons needed (buy 2 gallons for two coats). Subtract openings (doors ~10 sq ft, windows ~5 sq ft each) for more accuracy. Prime first (especially over stains/repairs); primer and paint may require multiple coats (2 coats typical).",
  },
  {
    question: "What is the difference between primer and paint?",
    answer:
      "<strong>Primer:</strong> prepares surface for paint, improves adhesion, blocks stains/markers, evens color absorption, reduces paint needed. <strong>Paint:</strong> provides color and finish (matte, satin, semi-gloss, gloss). Primer is essential over new drywall, repairs, stains, dark colors, or glossy surfaces. Using paint without primer wastes paint (requires 3+ coats) and yields poor results. <strong>Primer + 2 coats of paint</strong> is the standard for quality. <strong>Primer-in-one products</strong> exist but don't perform as well as separate primer and paint for demanding applications.",
  },
  {
    question: "What paint finish (matte, satin, gloss) should I choose?",
    answer:
      "<strong>Matte:</strong> hides imperfections, no shine, difficult to clean (not for kitchens/baths). <strong>Satin:</strong> slight shine, easier to clean, forgiving, popular for walls and trim. <strong>Semi-gloss:</strong> shiny, durable, wipeable, ideal for trim, doors, kitchens, bathrooms. <strong>Gloss:</strong> highest shine, most durable, reflective, less common except trim/doors. <strong>Eggshell:</strong> between matte and satin, subtle sheen, good balance. Kitchens/bathrooms need semi-gloss or satin (moisture-resistant). Bedrooms/living areas use matte or eggshell. Trim typically uses semi-gloss for durability.",
  },
  {
    question: "How do I prepare walls for painting?",
    answer:
      "Fill holes/cracks with spackle, sand smooth. Wash walls (removes dust/grime that prevents adhesion). Tape edges (baseboards, trim, ceiling) with painter's tape for clean lines. Lay drop cloths. Prime any stains, repairs, or new drywall. The prep work takes 50% of painting time but yields professional results. Skipping prep leads to visible imperfections, poor adhesion, and peeling paint. Taking 2–3 hours to prep ensures a quality finish.",
  },
  {
    question: "How many coats of paint are needed?",
    answer:
      "<strong>Primer: 1 coat (essential for new drywall, stains, color changes).</strong> <strong>Paint: 2 coats typical (3 coats for dark colors over light, or light colors over dark).</strong> Coverage per coat is ~350–400 sq ft per gallon; paint coverage is usually less than primer (paint is thicker). Interior walls rarely need 3 paint coats if properly primed. Exterior paint needs 2 coats for durability. Skipping primer or second coat results in visible imperfections, fading, and poor durability.",
  },
];

export const ROOFING_FAQS: FAQ[] = [
  {
    question: "How many shingles do I need for a roof?",
    answer:
      "<strong>Roof area (sq ft) / 100 = roofing squares.</strong> <strong>Shingles per square: 3 bundles (typically 29–32 shingles per bundle, covering 33.3 sq ft).</strong> Example: 2,000 sq ft roof = 20 squares × 3 bundles = 60 bundles. Account for 10% waste. Each square covers 100 sq ft (10' × 10'). For accurate calculation, measure roof length × width × 1.15 (accounts for overhang and waste). A typical 2,000 sq ft house roof is 2,000–2,400 sq ft total with overhang.",
  },
  {
    question: "How long do asphalt shingles last?",
    answer:
      "<strong>3-tab shingles: 15–20 years.</strong> <strong>Architectural (dimensional) shingles: 20–30 years.</strong> <strong>Premium shingles: 25–50+ years (some have lifetime warranties).</strong> Lifespan depends on climate, ventilation, installation quality, and maintenance. Hot climates degrade shingles faster; cold climates with good ventilation extend life. Proper roof ventilation is critical: poor ventilation causes premature aging (10–15 years life). Annual inspection (check for missing/curled shingles, leaks, debris) extends lifespan. Routine maintenance is cheaper than replacement.",
  },
  {
    question: "What is the difference between 3-tab and architectural shingles?",
    answer:
      "<strong>3-tab shingles:</strong> flat, uniform appearance, 15–20 year lifespan, most affordable ($100–200/sq installed). <strong>Architectural shingles:</strong> layered, textured appearance, deeper shadows, 20–30 year lifespan, better durability, $200–400/sq installed. Architectural shingles are heavier, more wind-resistant, longer-lasting, and more attractive. Most modern roofs use architectural shingles. Premium architectural (designer colors, extended warranties) cost $300–500/sq. For a 2,000 sq ft roof, total cost ranges $2,000–8,000 installed depending on shingle type.",
  },
  {
    question: "How do I know if my roof needs replacement?",
    answer:
      "Signs: <strong>missing/curled shingles, visible cracks, bald spots (granules worn away), moss/algae growth, leaks, daylight through attic, sagging</strong>. Age over 20 years (for 3-tab) or 30 years (for architectural) suggests replacement is approaching. Have a professional inspect if you notice any issues or the roof is near end-of-life. Partial repairs work if damage is limited; replacement is needed if >20–30% of roof is damaged. Early detection of leaks prevents extensive water damage; ignoring roof problems is costly.",
  },
  {
    question: "What is proper roof ventilation and why does it matter?",
    answer:
      "<strong>Proper ventilation:</strong> air flows through soffit vents (intake), attic, and ridge vents (exhaust), preventing moisture buildup and heat accumulation. <strong>Recommended:</strong> 1 sq ft of ventilation per 150 sq ft of attic area (or 1:300 with balanced intake/exhaust). Poor ventilation causes premature shingle aging, ice dams in winter (on cold side of roof), moisture and rot in attic. Energy loss is higher. Installing roof vents and soffit vents during re-roofing is essential. Unventilated attics deteriorate rapidly; proper venting extends roof life 10+ years.",
  },
];

export const STAIRS_FAQS: FAQ[] = [
  {
    question: "What are the building code requirements for stairs?",
    answer:
      "<strong>Riser height:</strong> 7 inches maximum (minimum 4 inches), uniform throughout. <strong>Tread depth:</strong> 11 inches minimum (measured from nose to nose), uniform. <strong>Stair width:</strong> 36 inches minimum. <strong>Handrails:</strong> required if stairs have 4+ risers, height 34–38 inches, graspable (1.25–2 inches diameter), extending 12 inches beyond first/last step. <strong>Guardrails:</strong> required on open sides, 36–42 inches high, <4 inch sphere rule (prevents head entrapment). <strong>Lighting:</strong> illuminated, with switches at top and bottom for multiple floors. Local codes vary; always check before building.",
  },
  {
    question: "How do I calculate stair dimensions?",
    answer:
      "<strong>Total rise (floor-to-floor height) = Number of risers × 7 inches (ideal).</strong> <strong>Number of risers = Total rise / 7 (round up).</strong> Example: 8-foot rise (96 inches) / 7 = 13.7, round up to 14 risers. Actual riser = 96 / 14 = 6.86 inches (within code). <strong>Tread depth + Riser height ≈ 17–18 inches (comfort rule).</strong> If risers are 7 inches, treads should be ~11 inches. <strong>Total run = (Number of risers − 1) × Tread depth.</strong> 14 risers, 11-inch treads = 13 × 11 = 143 inches horizontal distance.",
  },
  {
    question: "What materials are best for stair construction?",
    answer:
      "<strong>Wood:</strong> traditional, warm aesthetics, moderate cost ($1,500–5,000 installed for basic stairs), requires sealing/finish. <strong>Hardwood:</strong> durable, attractive, expensive ($3,000–8,000+). <strong>Concrete:</strong> durable, versatile (can be stained/polished), industrial appearance, $2,000–6,000. <strong>Metal (steel, iron):</strong> modern, durable, cold feel, $2,000–7,000. <strong>Prefabricated:</strong> standard dimensions, affordable ($1,000–3,000), fewer customization options. Stair selection depends on home style, budget, and durability needs.",
  },
  {
    question: "How do I install or repair stairs?",
    answer:
      "Stair installation is complex, requiring precise calculations, building code compliance, and carpentry/masonry skills. Professional installation ($2,000–5,000+) ensures safety and code compliance. <strong>Repairs:</strong> squeaky stairs (tighten fasteners, add shims), sagging (reinforce from below), loose treads/risers (re-fasten). Minor repairs are DIY-friendly; structural issues need professionals. Proper installation includes secure attachment to stringers (side boards), blocking between treads/risers, and secure handrails. Poorly built stairs are safety hazards.",
  },
  {
    question: "How much do stairs cost?",
    answer:
      "<strong>Basic pre-made stairs:</strong> $1,000–3,000 installed. <strong>Custom wood stairs:</strong> $3,000–8,000+. <strong>High-end hardwood/design stairs:</strong> $8,000–15,000+. Costs depend on materials, customization, height, and complexity. Straight stairs are cheapest; curved/winding stairs are premium. Landing, handrails, and finishing add cost. Custom stairs take 4–8 weeks; pre-made can be ready in days. Replacement stairs (over existing structure) are cheaper than new construction requiring structural changes.",
  },
];

export const TILE_FAQS: FAQ[] = [
  {
    question: "How much tile do I need for a floor or wall?",
    answer:
      "Measure area: <strong>Floor/wall area = length × width (sq ft).</strong> Example: 10' × 12' kitchen = 120 sq ft. Tile sizes: <strong>4×4 inch = 9 sq ft per box (typically 6–8 tiles/box).</strong> <strong>12×12 inch = 10 sq ft per box (typically 9–12 tiles/box).</strong> 120 sq ft ÷ 10 = 12 boxes needed. <strong>Add 10% for waste and future repairs.</strong> 12 × 1.1 = 13.2 boxes (round up to 14). Always buy extra; tile colors and batches vary; future repairs need matching tiles. Calculate grout separately (typically 1–2 lbs per sq ft).",
  },
  {
    question: "What is the difference between wall and floor tile?",
    answer:
      "<strong>Floor tile:</strong> harder, thicker, more durable (PEI rating 3–4 for residential, 4–5 for commercial), textured surface (slip-resistant), supports weight. <strong>Wall tile:</strong> lighter, thinner, less durable (PEI 0–1), smooth finish (aesthetics), no weight requirements. Using wall tile on floors fails quickly; using floor tile on walls is overkill (unnecessary cost, weight). <strong>PEI (Porcelain Enamel Institute) rating</strong> indicates durability: 0 = walls only, 5 = heavy commercial. For kitchens/bathrooms, use at least PEI 3.",
  },
  {
    question: "How do I choose the right grout?",
    answer:
      "<strong>Non-sanded grout:</strong> thin grout joints (<1/8 inch), smooth finish, less staining. <strong>Sanded grout:</strong> wider joints (>1/8 inch), durable, hides imperfections. <strong>Unsanded:</strong> polished marble/delicate tiles. <strong>Epoxy grout:</strong> stain/water-resistant, harder to apply, expensive, ideal for kitchens/baths. <strong>Urethane grout:</strong> flexible, stain-resistant, mid-range cost. Most residential uses sanded cement grout. Color affects appearance: match tiles or contrast. Grout width: 1/8–1/2 inch typical (wider joints hide imperfections but use more grout).",
  },
  {
    question: "How do I prepare and install tile?",
    answer:
      "Prepare surface: clean, level, and dry. Apply thin-set mortar (cement-based adhesive) using a notched trowel. Place tiles with spacers for uniform grout joints. Allow 24 hours curing before grouting. Apply grout with a grout float, pressing into joints. Wipe excess with a damp sponge. Seal grout (especially for natural stone) after 72 hours to prevent staining. Caulk expansion joints (corners, transitions) rather than grout. Professional installation ensures level tiles and uniform spacing; poor installation is visible and leads to cracking.",
  },
  {
    question: "How much does tile installation cost?",
    answer:
      "<strong>Material cost:</strong> $1–15 per sq ft (basic ceramic to premium natural stone). <strong>Labor:</strong> $5–15+ per sq ft. Total installed cost: $6–30+ per sq ft. A 100 sq ft kitchen backsplash costs $600–3,000; a 300 sq ft bathroom remodel costs $1,800–9,000. Complexity (patterns, custom cuts, difficult geometry) increases labor. Tile removal and disposal add $2–5/sq ft if replacing existing. High-end finishes (large-format tiles, natural stone, specialty patterns) cost more. Budget for unexpected subfloor repairs (can add $1,000+).",
  },
];
