// FAQ content for math calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.

import type { FAQ } from "./calculator-registry";

export const FRACTION_FAQS: FAQ[] = [
  {
    question: "How do I add and subtract fractions with different denominators?",
    answer:
      "To add or subtract fractions, the denominators must be the same. <strong>Find the least common denominator (LCD):</strong> Identify the smallest number divisible by both denominators. <strong>Convert:</strong> Multiply numerator and denominator of each fraction to match the LCD. <strong>Add or subtract:</strong> Combine the numerators; keep the denominator. <strong>Simplify:</strong> Reduce to lowest terms. Example: 1/3 + 1/4. LCD = 12. Convert: 4/12 + 3/12 = 7/12. No further reduction possible. For subtraction: 5/6 − 1/4. LCD = 12. Convert: 10/12 − 3/12 = 7/12. Always simplify your final answer by finding the greatest common factor of numerator and denominator.",
  },
  {
    question: "How do I multiply and divide fractions?",
    answer:
      "<strong>Multiply:</strong> Numerator × numerator; denominator × denominator. Example: 2/3 × 4/5 = 8/15. <strong>Divide:</strong> Flip (reciprocal) the second fraction, then multiply. Example: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. <strong>Simplify before multiplying:</strong> Cancel common factors across numerators and denominators before multiplying — saves time and reduces rounding. Example: 4/6 × 3/8. Notice 4 and 8 share factor 4; 6 and 3 share factor 3. Simplify: 1/2 × 1/2 = 1/4 (much simpler than 12/48 = 1/4). Always reduce your final answer to lowest terms. Mixed numbers: convert to improper fractions before multiplying or dividing.",
  },
  {
    question: "What is a proper, improper, and mixed fraction?",
    answer:
      "A <strong>proper fraction</strong> has a numerator smaller than the denominator (less than 1): 3/5, 7/9. An <strong>improper fraction</strong> has a numerator equal to or greater than the denominator (1 or more): 5/5 (= 1), 9/7 (> 1). A <strong>mixed number</strong> combines a whole number and a fraction: 1 2/5 (one and two-fifths). To <strong>convert improper to mixed:</strong> Divide numerator by denominator. Quotient = whole number, remainder = numerator. Example: 9/4 = 2 1/4 (9 ÷ 4 = 2 remainder 1). To <strong>convert mixed to improper:</strong> (whole × denominator + numerator) / denominator. Example: 2 1/4 = (2 × 4 + 1)/4 = 9/4. Both forms are correct; use whichever is clearer for your problem.",
  },
  {
    question: "How do I compare fractions to find which is larger?",
    answer:
      "Method 1 (cross-multiply): For a/b vs. c/d, multiply a × d and b × c. Larger product = larger fraction. Example: 3/5 vs. 4/7. Cross: 3 × 7 = 21; 5 × 4 = 20. Since 21 > 20, then 3/5 > 4/7. Method 2 (common denominator): Convert to the same denominator and compare numerators. 3/5 = 21/35; 4/7 = 20/35. Since 21 > 20, then 3/5 > 4/7. Method 3 (decimal): Convert to decimals. 3/5 = 0.6; 4/7 ≈ 0.571. Since 0.6 > 0.571, then 3/5 > 4/7. Cross-multiplication is fastest for two fractions. Use common denominators for multiple fractions or when showing work.",
  },
  {
    question: "What is the greatest common factor (GCF) and why simplify fractions?",
    answer:
      "The <strong>greatest common factor (GCF)</strong> is the largest number dividing evenly into both numerator and denominator. <strong>Simplify (reduce) fractions</strong> by dividing both by their GCF, creating an equivalent fraction in lowest terms. Example: 12/18. Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. GCF = 6. So 12/18 ÷ 6/6 = 2/3. <strong>Why simplify?</strong> Simplified fractions are easier to work with, compare, and understand. They're the standard form for answers. <strong>Finding GCF:</strong> List factors, or use prime factorization, or the Euclidean algorithm. Most calculators find GCF automatically. Always present final fraction answers in lowest terms.",
  },
];

export const SCIENTIFIC_FAQS: FAQ[] = [
  {
    question: "How do I use scientific notation and when is it needed?",
    answer:
      "Scientific notation expresses very large or very small numbers compactly: <strong>a × 10^n</strong>, where 'a' is between 1 and 10, and 'n' is an integer. <strong>Examples:</strong> 5,000,000 = 5 × 10^6. 0.000025 = 2.5 × 10^−5. <strong>Converting to scientific:</strong> Move the decimal point until one non-zero digit remains to the left. Count moves: rightward = negative exponent; leftward = positive. <strong>When needed:</strong> Science and engineering use it for very large (astronomical distances, atomic scales) or very small (atomic/subatomic measurements) numbers. Calculators display scientific notation to avoid clutter. <strong>Key rule:</strong> The mantissa (a) is always 1–10 (not 0.5 × 10^7 or 50 × 10^5). This standardization makes comparison and calculation straightforward.",
  },
  {
    question: "How do I calculate powers and roots on a scientific calculator?",
    answer:
      "<strong>Powers (exponents):</strong> Use the '^' or 'x^y' button. Example: 2^5 = 2 × 2 × 2 × 2 × 2 = 32. Negative exponents = reciprocals: 2^−3 = 1/8 = 0.125. Fractional exponents = roots: 8^(1/3) = ∛8 = 2. <strong>Roots:</strong> √ (square root) or ∛ (cube root) buttons, or use fractional exponents: √9 = 3, ∛27 = 3. <strong>Order of operations (PEMDAS):</strong> Exponents are evaluated before multiplication. Example: 2 × 3^2 = 2 × 9 = 18 (not 6^2 = 36). <strong>Parentheses matter:</strong> (2 × 3)^2 = 6^2 = 36; 2 × 3^2 = 2 × 9 = 18. Most scientific calculators follow standard order automatically; verify by testing 2 + 3 × 4 (should be 14, not 20).",
  },
  {
    question: "What are trigonometric functions and when do I use them?",
    answer:
      "Trigonometry deals with angles and triangle sides. <strong>Basic functions:</strong> sine (sin), cosine (cos), tangent (tan), and their reciprocals (csc, sec, cot). <strong>Right triangle context:</strong> sin(θ) = opposite/hypotenuse; cos(θ) = adjacent/hypotenuse; tan(θ) = opposite/adjacent. <strong>Example:</strong> In a right triangle with angle 30° opposite side 5, hypotenuse = 5/sin(30°) = 5/0.5 = 10. <strong>When needed:</strong> Navigation, surveying, architecture, physics (waves, oscillations), engineering. <strong>Calculator tip:</strong> Ensure calculator is in correct mode: degrees (°) or radians. sin(30°) = 0.5; sin(30 rad) ≈ −0.988. Many mistakes stem from mode confusion. Most scientific calculators default to degrees; switch to radians if needed.",
  },
  {
    question: "What are logarithms and how do I use them?",
    answer:
      "A logarithm answers: <strong>To what power must we raise a base to get a number?</strong> If 10^2 = 100, then log₁₀(100) = 2. <strong>Formula:</strong> If b^y = x, then log_b(x) = y. <strong>Common logarithms:</strong> log₁₀(base 10, often just 'log'), and ln (natural log, base e ≈ 2.718). <strong>Properties:</strong> log(a × b) = log(a) + log(b); log(a/b) = log(a) − log(b); log(a^b) = b × log(a). <strong>Example:</strong> Solve 2^x = 32. Apply log: log(2^x) = log(32). Simplify: x × log(2) = log(32). Solve: x = log(32)/log(2) = 5. <strong>Uses:</strong> Exponential growth (bacteria, finance), pH, sound intensity (decibels), data science. Logarithms 'undo' exponents, making complex calculations simpler.",
  },
  {
    question: "How do I calculate factorials and permutations?",
    answer:
      "A <strong>factorial (n!)</strong> is the product of all positive integers up to n. <strong>Example:</strong> 5! = 5 × 4 × 3 × 2 × 1 = 120. By definition, 0! = 1 and 1! = 1. <strong>Factorials appear in:</strong> Permutations (ordered arrangements), combinations (unordered selections), and probability. <strong>Permutation (P):</strong> Arrangements of n items taken r at a time = n!/(n−r)!. <strong>Example:</strong> Order matters for passwords. How many 3-digit codes from digits 0–9 (no repeats)? P(10,3) = 10!/(10−3)! = 10!/7! = 10 × 9 × 8 = 720. <strong>Combination (C):</strong> Selections where order doesn't matter = n!/(r!(n−r)!). <strong>Example:</strong> How many 3-person teams from 10 people? C(10,3) = 10!/(3!7!) = 120. Scientific calculators have nPr and nCr buttons; use them rather than computing factorials manually for large numbers.",
  },
];

export const GRADE_FAQS: FAQ[] = [
  {
    question: "How is GPA calculated and what does it mean?",
    answer:
      "GPA (Grade Point Average) is the average of all grade points earned. <strong>Common scale:</strong> A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0. Plus/minus: A+ = 4.3, A− = 3.7, etc. (varies by school). <strong>Calculation:</strong> Sum(grade points × credit hours) ÷ sum(credit hours). <strong>Example:</strong> A in a 3-credit class (4.0 × 3 = 12) + B in a 4-credit class (3.0 × 4 = 12) = 24 points ÷ 7 credits = 3.43 GPA. <strong>Weighted vs. unweighted:</strong> Weighted accounts for credit hours (harder classes count more); unweighted treats all grades equally. <strong>What it means:</strong> GPA indicates academic performance. Many schools require minimum GPA for standing or scholarships. Graduate school and job applications use GPA as a screening tool. A 3.5+ is typically considered excellent; 3.0 is solid; below 2.0 may trigger academic probation.",
  },
  {
    question: "What grade do I need on the final exam to reach my target grade?",
    answer:
      "Rearrange the weighted average formula: <strong>Final Exam Grade = (Target Grade − Weighted Current Grade) ÷ Final Weight</strong>. <strong>Example:</strong> Current grade 80% (60% of final), target 85%. Final = (85 − (80 × 0.6)) ÷ 0.4 = (85 − 48) ÷ 0.4 = 37 ÷ 0.4 = 92.5%. You need 92.5% on the final. <strong>If impossible:</strong> If the required grade exceeds 100%, your target is unachievable with the final's weight. <strong>Vice versa:</strong> If you want to know your target after the final, use the standard formula. Planning ahead ensures you know what's needed. Many schools post grade calculations; verify the exact weighting before calculating.",
  },
  {
    question: "What's the difference between weighted and unweighted GPA?",
    answer:
      "<strong>Unweighted GPA:</strong> All grades are treated equally; harder classes don't 'count more.' Calculation: sum of grade points ÷ number of classes. <strong>Weighted GPA:</strong> Grades are multiplied by credit hours (or difficulty level) before averaging, so harder classes 'count more.' Weighted GPA rewards students taking challenging courses. <strong>Example:</strong> Student takes Physics (4 credits, A = 4.0) and Art (1 credit, A = 4.0). Unweighted: (4.0 + 4.0) ÷ 2 = 4.0. Weighted: (4.0 × 4 + 4.0 × 1) ÷ (4 + 1) = 20 ÷ 5 = 4.0 (same here, but differs if grades vary). <strong>College admissions:</strong> Use unweighted unless school specifies. Grad schools typically use weighted. Always clarify which GPA institutions require.",
  },
  {
    question: "What is a passing grade and how much do failing grades affect my GPA?",
    answer:
      "A <strong>passing grade</strong> varies by institution but is typically C or above (2.0+). Some schools require C− (1.7); some require B. <strong>Failing grade (F = 0.0):</strong> Counts as 0 points in GPA, significantly dragging down average. <strong>Example:</strong> One F in a 4-credit class (0 × 4 = 0 points) and As in 12 credits (4 × 12 = 48 points) = 48 ÷ 16 = 3.0 GPA. One F drops you from 4.0 to 3.0. Some schools allow grade replacement or course retakes; the new grade replaces the old in GPA. <strong>Note:</strong> Credit for passing grades (D or above) may not count toward degree progress even if passed. Always verify minimum passing grade for your program. Failing grades hurt GPA and may trigger academic probation or financial aid loss.",
  },
  {
    question: "How do plus/minus grades affect GPA calculation?",
    answer:
      "Plus/minus grading refines the traditional scale. <strong>Common scale:</strong> A+ = 4.3 (or 4.0 at some schools), A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, C+ = 2.3, C = 2.0, C− = 1.7, D+ = 1.3, D = 1.0, D− = 0.7, F = 0.0. <strong>Impact:</strong> A− (3.7) slightly lowers GPA versus A (4.0), and B+ (3.3) slightly improves versus B (3.0). <strong>Example:</strong> One A (4.0) and one A− (3.7) = 7.7 ÷ 2 = 3.85 GPA (versus 4.0 if both were A). Plus/minus grading provides finer granularity but slightly reduces average GPAs. Some schools still use the traditional A/B/C scale without modifiers. Always verify your school's scale.",
  },
];

export const SQUARE_ROOT_FAQS: FAQ[] = [
  {
    question: "How do I calculate a square root without a calculator?",
    answer:
      "For perfect squares (1, 4, 9, 16, 25...), recall: √1 = 1, √4 = 2, √9 = 3, ..., √100 = 10, etc. For non-perfect squares, estimate: √15 is between √9 = 3 and √16 = 4, closer to 4. <strong>Newton's method (approximation):</strong> Guess a starting value (g), then repeatedly compute (g + number/g) ÷ 2. After a few iterations, you converge to the square root. <strong>Example:</strong> √10. Start with g = 3. (3 + 10/3) ÷ 2 = (3 + 3.33) ÷ 2 = 3.165. Next: (3.165 + 10/3.165) ÷ 2 ≈ 3.1623. Actual √10 ≈ 3.1623. <strong>Prime factorization:</strong> √18 = √(9 × 2) = 3√2. This simplification is useful algebraically. Calculators are faster for real-world problems; these methods develop intuition and are handy when calculators aren't available.",
  },
  {
    question: "What does a negative square root mean?",
    answer:
      "Mathematically, every positive number has two square roots: positive and negative. √9 technically yields ±3 because 3^2 = 9 and (−3)^2 = 9. <strong>Convention:</strong> The symbol √ (radical sign) denotes the principal (positive) square root only. So √9 = 3, not ±3. <strong>Quadratic equations:</strong> When solving x^2 = 9, both x = 3 and x = −3 are solutions, written ±3. <strong>Real numbers:</strong> You cannot take the square root of a negative number in the real number system (√−4 is undefined). <strong>Complex numbers:</strong> In advanced math, √−4 = 2i (where i is the imaginary unit). For typical problems, remember: the √ symbol means positive square root only.",
  },
  {
    question: "What is the difference between √x and x^(1/2)?",
    answer:
      "They are the same. √x = x^(1/2). Both represent 'the number that, when squared, gives x.' <strong>Why both notations?</strong> √ is intuitive for simple roots; exponent notation generalizes to other roots (x^(1/3) is cube root, x^(1/4) is fourth root). <strong>Fractional exponents:</strong> x^(m/n) = (x^(1/n))^m = (∛√x)^m. <strong>Example:</strong> 8^(2/3) = (8^(1/3))^2 = 2^2 = 4. Or: 8^(2/3) = (8^2)^(1/3) = 64^(1/3) = 4. <strong>Advantage of exponents:</strong> Exponent rules (a^m × a^n = a^(m+n)) apply; root notation requires special handling. Both forms are correct; use whichever is clearer for your context.",
  },
  {
    question: "How do I simplify expressions with square roots?",
    answer:
      "<strong>Rule:</strong> √(a × b) = √a × √b. Use this to extract perfect square factors. <strong>Example:</strong> √72 = √(36 × 2) = √36 × √2 = 6√2. <strong>Steps:</strong> (1) Factor the number under the radical. (2) Identify perfect squares. (3) Extract them from under the radical. <strong>More examples:</strong> √50 = √(25 × 2) = 5√2. √18 = √(9 × 2) = 3√2. √100 = 10 (perfect square, no radical remains). <strong>Adding/subtracting:</strong> Only combine like radicals. 3√2 + 2√2 = 5√2. 3√2 + 2√3 cannot be combined. <strong>Rationalizing denominators:</strong> If you have 1/√2, multiply by √2/√2 to get √2/2. This removes radicals from denominators, which is standard form.",
  },
  {
    question: "What is a perfect square and why do they matter?",
    answer:
      "A <strong>perfect square</strong> is a number equal to some integer squared. <strong>Examples:</strong> 1 = 1^2, 4 = 2^2, 9 = 3^2, 16 = 4^2, 25 = 5^2, 36 = 6^2, 49 = 7^2, 64 = 8^2, 81 = 9^2, 100 = 10^2. Their square roots are integers: √1 = 1, √4 = 2, ..., √100 = 10. <strong>Why they matter:</strong> (1) Perfect square square roots are quick to calculate mentally. (2) They simplify radical expressions. √72 = √(36 × 2) = 6√2 uses the perfect square 36. (3) Pythagorean theorem and distance formulas often yield perfect squares. Memorizing perfect squares up to 144 (12^2) speeds up mental math and simplification.",
  },
];

export const AREA_FAQS: FAQ[] = [
  {
    question: "What are the formulas for calculating area of common shapes?",
    answer:
      "<strong>Rectangle:</strong> A = length × width. <strong>Square:</strong> A = side^2. <strong>Triangle:</strong> A = (base × height) ÷ 2. <strong>Circle:</strong> A = π × radius^2 (π ≈ 3.14159). <strong>Parallelogram:</strong> A = base × height (height is perpendicular to base). <strong>Trapezoid:</strong> A = ((base1 + base2) ÷ 2) × height. <strong>Ellipse:</strong> A = π × a × b (a and b are semi-major and semi-minor axes). <strong>Regular polygon:</strong> A = (perimeter × apothem) ÷ 2 (apothem is distance from center to midpoint of side). <strong>General rule:</strong> Area is measured in square units. Always match units: if dimensions are in meters, area is in square meters (m^2). For composite shapes, break into simpler shapes, calculate each area, and sum.",
  },
  {
    question: "How is the area of a circle calculated?",
    answer:
      "The area of a circle is <strong>A = π × r^2</strong>, where r is the radius. <strong>Derivation concept:</strong> Imagine slicing a circle into many thin triangles from the center. Sum of triangle areas ≈ circle area. As slices become infinitely thin, sum → π × r^2. <strong>Example:</strong> Radius = 5 cm. A = π × 5^2 = π × 25 ≈ 78.54 cm^2. <strong>From diameter:</strong> If you know diameter (d), then r = d/2, so A = π × (d/2)^2 = π × d^2 ÷ 4. <strong>Common mistake:</strong> Using A = π × d^2 (forgetting to divide by 4) doubles the answer. <strong>Pi (π):</strong> Use π ≈ 3.14159 or your calculator's π button for accuracy. Answers involving π can be left as 25π cm^2 (exact) or approximated as 78.54 cm^2 (decimal).",
  },
  {
    question: "What is the difference between area and perimeter?",
    answer:
      "<strong>Area</strong> is the space inside a shape, measured in square units (m^2, ft^2). <strong>Perimeter</strong> is the distance around a shape, measured in linear units (m, ft). <strong>Example:</strong> A rectangle 3 × 5 meters. Area = 3 × 5 = 15 m^2. Perimeter = 2(3 + 5) = 16 m. <strong>Key difference:</strong> Area and perimeter are independent. Shapes with the same perimeter can have different areas. Two rectangles: (2 × 8) and (4 × 4) both have perimeter 20, but areas are 16 and 16 (same here), yet (1 × 9) also has perimeter 20 but area 9 (less). Confusing area and perimeter is a common mistake; always note units to catch errors (square units = area; linear units = perimeter).",
  },
  {
    question: "How do I find the area of an irregular polygon?",
    answer:
      "<strong>Method 1 (Shoelace formula):</strong> List vertices in order (clockwise or counterclockwise), (x₁,y₁), (x₂,y₂), ..., (xₙ,yₙ). A = |∑(xᵢ × yᵢ₊₁ − xᵢ₊₁ × yᵢ)| ÷ 2. <strong>Example:</strong> Triangle vertices (0,0), (3,0), (0,4). A = |(0×0 − 3×0) + (3×4 − 0×0) + (0×0 − 0×4)| ÷ 2 = |0 + 12 + 0| ÷ 2 = 6. <strong>Method 2 (Divide into triangles):</strong> Break the polygon into triangles using a fixed point, calculate each triangle area, sum. <strong>Method 3 (Grid counting):</strong> Plot on grid, count full squares inside, estimate partial squares (useful for rough estimates). For precise calculations, the shoelace formula is most reliable. Most area calculators use this method internally.",
  },
  {
    question: "What is the relationship between radius, diameter, and circumference?",
    answer:
      "<strong>Radius (r):</strong> Distance from center to edge. <strong>Diameter (d):</strong> Distance across the circle through the center. d = 2r; r = d/2. <strong>Circumference (C):</strong> Distance around the circle. C = 2πr = πd. <strong>Examples:</strong> If r = 5, then d = 10, C = 10π ≈ 31.4. If d = 8, then r = 4, C = 8π ≈ 25.1. <strong>Area vs. circumference:</strong> A = πr^2; C = 2πr. Note that C involves r (linear), while A involves r^2 (quadratic). Doubling the radius doubles the circumference but quadruples the area. <strong>Remember:</strong> Radius, diameter, circumference are different measures. Always identify which is given before calculating.",
  },
];

export const VOLUME_FAQS: FAQ[] = [
  {
    question: "What are the formulas for calculating volume of common 3D shapes?",
    answer:
      "<strong>Rectangular prism (box):</strong> V = length × width × height. <strong>Cube:</strong> V = side^3. <strong>Cylinder:</strong> V = π × radius^2 × height. <strong>Sphere:</strong> V = (4/3) × π × radius^3. <strong>Cone:</strong> V = (1/3) × π × radius^2 × height. <strong>Pyramid:</strong> V = (1/3) × base area × height. <strong>Triangular prism:</strong> V = (base area of triangle) × length. <strong>General rule:</strong> For prisms, V = base area × height. Cones/pyramids are 1/3 of their prism equivalent. Volume is measured in cubic units (m^3, ft^3, cm^3). Always match units: if dimensions are in meters, volume is in cubic meters. For composite shapes, break into simpler shapes, calculate volumes, and sum.",
  },
  {
    question: "How is the volume of a cylinder calculated?",
    answer:
      "The volume of a cylinder is <strong>V = π × r^2 × h</strong>, where r is the radius and h is the height (or depth). <strong>Concept:</strong> Cylinder = stack of circular discs. Each disc has area πr^2. Stacking h discs gives volume πr^2 × h. <strong>Example:</strong> Radius = 3 cm, height = 10 cm. V = π × 3^2 × 10 = π × 9 × 10 = 90π ≈ 282.7 cm^3. <strong>From diameter:</strong> If diameter d is given, r = d/2. V = π × (d/2)^2 × h = π × d^2 × h ÷ 4. <strong>Confusion check:</strong> π × d^2 × h (wrong — forgot to divide by 4). Common mistake: using diameter directly without halving. Always verify you're using radius, not diameter, in formulas involving r^2.",
  },
  {
    question: "What is the difference between a cone and a pyramid, and how do volumes compare?",
    answer:
      "A <strong>cone</strong> has a circular base tapering to a point; a <strong>pyramid</strong> has a polygonal base (triangle, square, etc.) tapering to a point. <strong>Volume formulas:</strong> Cone: V = (1/3) × π × r^2 × h. Pyramid: V = (1/3) × base area × h. Both are <strong>1/3 of their cylindrical/prism equivalent:</strong> If a cylinder and cone share radius r and height h, V_cylinder = πr^2 × h; V_cone = (1/3) × πr^2 × h. Cone volume is 1/3 of the cylinder. Similarly, a pyramid is 1/3 of its prism. <strong>Why 1/3?</strong> The tapering shape means volume decreases as you approach the apex. The 1/3 factor comes from calculus integration. <strong>Example:</strong> Cylinder (r=4, h=10): V = 160π. Cone (r=4, h=10): V ≈ 53.3π (1/3 of cylinder).",
  },
  {
    question: "How do I calculate the volume of a sphere?",
    answer:
      "The volume of a sphere is <strong>V = (4/3) × π × r^3</strong>, where r is the radius. <strong>Example:</strong> Radius = 5 cm. V = (4/3) × π × 5^3 = (4/3) × π × 125 = (500/3) × π ≈ 523.6 cm^3. <strong>From diameter:</strong> If diameter d is given, r = d/2. V = (4/3) × π × (d/2)^3 = (4/3) × π × d^3/8 = π × d^3/6. <strong>Surface area relation:</strong> Surface area of sphere A = 4πr^2. Notice volume involves r^3 (cubic) while surface area involves r^2 (quadratic). Doubling radius: V × 8, A × 4. <strong>Derivation (conceptual):</strong> Imagine sphere as many thin concentric shells. Summing shell volumes gives (4/3)πr^3. This formula is fundamental in physics (planetary volumes), engineering, and everyday applications (ball volumes, water tanks).",
  },
  {
    question: "What is the relationship between surface area and volume?",
    answer:
      "<strong>Surface area</strong> is the total area of all outer surfaces; <strong>volume</strong> is the space inside. For a cube with side s: A = 6s^2 (six square faces); V = s^3. For a sphere: A = 4πr^2; V = (4/3)πr^3. <strong>Key insight:</strong> As size increases, volume grows faster than surface area. A cube with side 1: A = 6, V = 1 (ratio A:V = 6). Cube with side 10: A = 600, V = 1,000 (ratio A:V = 0.6). This affects real-world phenomena: small organisms have high surface area-to-volume ratio (efficient for heat exchange); large organisms have low ratio (harder to regulate temperature). Understanding A/V ratios is crucial in biology, thermodynamics, and engineering. Neither formula determines the other; both are needed for complete spatial description.",
  },
];

export const STANDARD_DEVIATION_FAQS: FAQ[] = [
  {
    question: "What is standard deviation and why does it matter?",
    answer:
      "Standard deviation (σ or s) measures how spread out data points are from the average. <strong>Small σ:</strong> Data points cluster tightly around the mean. <strong>Large σ:</strong> Data points scatter widely. <strong>Formula concept:</strong> (1) Find mean. (2) Compute each value's distance from mean. (3) Square distances (to avoid negatives canceling). (4) Average the squared distances (variance). (5) Take the square root → standard deviation. <strong>Example:</strong> Dataset {1, 2, 3, 4, 5}. Mean = 3. Deviations: -2, -1, 0, 1, 2. Squared: 4, 1, 0, 1, 4. Variance = 10/5 = 2. σ = √2 ≈ 1.41. <strong>Why it matters:</strong> Describes data consistency. In finance, σ measures investment risk. In quality control, low σ means consistent products. Two datasets with the same mean differ vastly if one has σ = 0.5 and the other σ = 10.",
  },
  {
    question: "What is the difference between population and sample standard deviation?",
    answer:
      "<strong>Population standard deviation (σ):</strong> Used when data is the entire population. Divide by n. <strong>Sample standard deviation (s):</strong> Used when data is a sample of a larger population. Divide by (n − 1) to account for sampling bias. <strong>Why (n−1)?</strong> A sample underestimates population variability; Bessel's correction (n − 1) adjusts for this bias. <strong>Example:</strong> Dataset {2, 4, 6}. Mean = 4. Squared deviations from mean: 4, 0, 4. Population σ = √(8/3) ≈ 1.63. Sample s = √(8/2) = √4 = 2. Notice s > σ because (n − 1) < n. <strong>Rule of thumb:</strong> If analyzing entire data collection (exam scores of all students), use population σ. If extrapolating from sample to population (survey of 100 people to estimate population), use sample s. Most calculators offer both; select correctly based on your context.",
  },
  {
    question: "How does standard deviation relate to the normal distribution?",
    answer:
      "In a normal (bell-curve) distribution: <strong>68% of data falls within 1σ of mean, 95% within 2σ, 99.7% within 3σ.</strong> <strong>Example:</strong> IQ scores (mean = 100, σ = 15). 68% score between 85–115 (100 ± 15). 95% score between 70–130 (100 ± 30). 99.7% score between 55–145 (100 ± 45). <strong>Z-score:</strong> (value − mean) ÷ σ shows how many standard deviations a value is from the mean. Z = 0 = at mean. Z = 1 = 1σ above mean (top 16%). Z = −2 = 2σ below mean (bottom 2.3%). <strong>Applications:</strong> Quality control (reject products 3σ from target), medical testing (identify unusual results), and academic assessment (standardized tests like SAT/GRE use σ to compare performance). Understanding σ and normal distribution is fundamental to statistics.",
  },
  {
    question: "Can standard deviation be zero or negative?",
    answer:
      "<strong>Standard deviation cannot be negative</strong> because it's a square root of squared differences. Even if all deviations are negative, squaring makes them positive; the average is positive; the square root is positive. σ ≥ 0 always. <strong>σ = 0 occurs only if all data points are identical.</strong> <strong>Example:</strong> {5, 5, 5, 5}. Mean = 5. Deviations: 0, 0, 0, 0. Variance = 0. σ = 0. This is the only case where σ = 0. <strong>If you calculate σ < 0:</strong> There's an error in your calculation. <strong>Practically:</strong> Real-world data almost always has σ > 0 because nothing is perfectly uniform. A calculated σ = 0 indicates no variability — perhaps data was improperly collected or identical by design.",
  },
  {
    question: "How do I interpret and compare standard deviations across datasets?",
    answer:
      "Directly comparing σ values works only for datasets with similar means and units. <strong>Example:</strong> Heights (cm) of two groups: Group A (mean 170, σ = 5) vs. Group B (mean 175, σ = 8). Group B has more variability (5.1% relative vs. 2.9% relative). <strong>For different scales, use coefficient of variation (CV):</strong> CV = (σ ÷ mean) × 100%. <strong>Example:</strong> Income: mean $50,000, σ = $5,000 (CV = 10%). Expenses: mean $1,000, σ = $200 (CV = 20%). Despite σ_income > σ_expense, expenses are relatively more variable. <strong>Interpretation:</strong> Consistent dataset (CV < 10%), moderate variability (CV 10–20%), high variability (CV > 20%). Always visualize data (histogram/box plot) alongside σ because outliers can inflate σ while being rare. σ alone doesn't reveal distribution shape (skewed, multimodal) — use σ plus visual inspection.",
  },
];

export const PROBABILITY_FAQS: FAQ[] = [
  {
    question: "What is probability and how is it calculated?",
    answer:
      "Probability is the likelihood an event occurs, expressed as a fraction between 0 and 1 (or 0–100%). <strong>Formula:</strong> P(event) = (number of favorable outcomes) ÷ (total possible outcomes). <strong>Example:</strong> Fair six-sided die. P(rolling a 3) = 1/6 ≈ 0.167 or 16.7%. <strong>Probability rules:</strong> P(not event) = 1 − P(event). P(rolling not a 3) = 5/6. <strong>Independent events:</strong> P(A and B) = P(A) × P(B). P(rolling 3 twice) = 1/6 × 1/6 = 1/36. <strong>Mutually exclusive:</strong> P(A or B) = P(A) + P(B). P(rolling 3 or 4) = 1/6 + 1/6 = 1/3. <strong>Practical limits:</strong> 0 = impossible, 1 = certain. Most real events fall in between. Understanding probability is foundational for statistics, risk assessment, and decision-making.",
  },
  {
    question: "What is the difference between independent and dependent events?",
    answer:
      "<strong>Independent events:</strong> Outcome of one doesn't affect the other. Examples: coin flips, dice rolls, draws with replacement. <strong>P(A and B) = P(A) × P(B).</strong> Flip coin twice: P(heads both) = 0.5 × 0.5 = 0.25. <strong>Dependent events:</strong> Outcome of one changes the probability of the other. Examples: drawing cards without replacement, selecting people for a group. <strong>P(A and B) = P(A) × P(B|A),</strong> where P(B|A) is 'probability B given A.' Deck: P(draw red) = 26/52 = 0.5. After drawing red, P(draw red again) = 25/51 ≈ 0.49 (one fewer red). <strong>Confusion note:</strong> 'With replacement' keeps events independent; 'without replacement' makes them dependent. Most real-world scenarios are dependent, making calculations harder. Clarifying dependence is crucial for correct probability.",
  },
  {
    question: "What is conditional probability and the Bayes' theorem?",
    answer:
      "<strong>Conditional probability P(A|B):</strong> Probability of A given B already occurred. Example: P(rain tomorrow | cloudy today). <strong>Formula:</strong> P(A|B) = P(A and B) ÷ P(B). <strong>Bayes' theorem:</strong> P(A|B) = [P(B|A) × P(A)] ÷ P(B). Useful for updating beliefs with new evidence. <strong>Example (medical test):</strong> Disease prevalence P(disease) = 0.01 (1%). Test accuracy P(positive|disease) = 0.95, P(positive|no disease) = 0.05. Someone tests positive. What's P(disease|positive)? P(disease|positive) = [0.95 × 0.01] ÷ [0.95 × 0.01 + 0.05 × 0.99] ≈ 0.161 (16.1%, not 95%!). Despite high accuracy, most positive tests are false positives when disease is rare. Bayes' theorem is powerful in medicine, spam filtering, and machine learning.",
  },
  {
    question: "How do I calculate probability of multiple events (AND, OR)?",
    answer:
      "<strong>AND (both events occur):</strong> For independent events, P(A and B) = P(A) × P(B). Example: Flip coin, roll die. P(heads AND roll 3) = 0.5 × 1/6 = 1/12. For dependent events: P(A and B) = P(A) × P(B|A). Example: Draw two cards without replacement. P(both red) = 26/52 × 25/51. <strong>OR (at least one event occurs):</strong> P(A or B) = P(A) + P(B) − P(A and B) [subtract overlap to avoid double-counting]. Example: Roll die. P(roll 3 or roll odd) = 1/6 + 3/6 − 1/6 = 3/6 = 0.5. For mutually exclusive events (can't both happen): P(A or B) = P(A) + P(B). P(roll 3 or 4) = 1/6 + 1/6 = 1/3. <strong>Key insight:</strong> AND usually gives smaller probability; OR usually gives larger.",
  },
  {
    question: "What is expected value and how is it used?",
    answer:
      "<strong>Expected value (EV)</strong> is the average outcome if an event repeats infinitely. <strong>Formula:</strong> EV = Σ(outcome × probability). <strong>Example (coin flip):</strong> Heads = +$1, Tails = −$0.50. EV = 1 × 0.5 + (−0.50) × 0.5 = 0.50 − 0.25 = $0.25 (positive EV — worth playing). <strong>Lottery example:</strong> $2 ticket, 1 in 100 million odds of winning $100 million. EV = 100,000,000 × (1/100,000,000) − 2 = 1 − 2 = −$1 (negative EV — don't play). <strong>Insurance:</strong> Expected payout = (claim probability × claim amount). Fair premium ≈ expected payout. EV guides optimal decisions in gambling, insurance, investing, and negotiations. Understanding EV prevents costly mistakes (negative EV bets, unfair contracts).",
  },
];

export const MEAN_MEDIAN_MODE_FAQS: FAQ[] = [
  {
    question: "What are mean, median, and mode, and when should I use each?",
    answer:
      "<strong>Mean (average):</strong> Sum all values, divide by count. Example: {1, 2, 3, 4, 5} mean = 15/5 = 3. Best for symmetric data without outliers. <strong>Median:</strong> Middle value when sorted. {1, 2, 3, 4, 5} median = 3. For odd count, middle value; for even count, average of two middle. {1, 2, 3, 4} median = 2.5. Best for skewed data (outliers). <strong>Mode:</strong> Most frequent value. {1, 2, 2, 3, 4} mode = 2. Best for categorical data or finding most common value. <strong>When outliers exist:</strong> Mean is pulled toward outliers (biased). {1, 2, 3, 100} mean = 26.5 (skewed by 100), median = 2.5 (robust). <strong>Use mean for:</strong> Statistical analysis, symmetric distributions. <strong>Use median for:</strong> Income (skewed), house prices (outliers). <strong>Use mode for:</strong> Fashion preferences, most common error.",
  },
  {
    question: "How do outliers affect mean, median, and mode?",
    answer:
      "<strong>Outliers severely affect mean:</strong> {2, 3, 4, 5} mean = 3.5. Add outlier 100: {2, 3, 4, 5, 100} mean = 22.8 (huge increase). <strong>Outliers minimally affect median:</strong> {2, 3, 4, 5} median = 3.5. Add 100: {2, 3, 4, 5, 100} median = 4 (slight increase). <strong>Outliers don't affect mode:</strong> {2, 2, 3, 4, 5} mode = 2. Add 100: {2, 2, 3, 4, 5, 100} mode still = 2. <strong>Example (income):</strong> Salaries {30k, 40k, 45k, 50k, 500k}. Mean = 133k (misleading — most earn ~40k). Median = 45k (representative). Mode = none (all appear once). <strong>Implication:</strong> When reporting data, median is more honest if outliers exist. Media often report median household income, not mean, for fairness. Always check for outliers before concluding from mean alone.",
  },
  {
    question: "Can a dataset have multiple modes or no mode?",
    answer:
      "Yes to both. <strong>No mode:</strong> If all values appear equally often. {1, 2, 3, 4, 5} — each appears once, no mode. <strong>Bimodal:</strong> Two values share highest frequency. {1, 1, 2, 2, 3} — modes are 1 and 2 (both appear twice). <strong>Multimodal:</strong> Three or more values tie for highest. {1, 1, 1, 2, 2, 2, 3, 3, 3} — modes are 1, 2, and 3. <strong>When is mode useful?</strong> Categorical data (colors, names) where mean/median don't apply. {red, blue, red, green, blue, red} — mode = red. <strong>For numerical data with no clear mode:</strong> Mode is uninformative; use mean or median instead. Most datasets with continuous data (measurements, times) lack distinct modes unless artificially grouped. Mode is most useful for discrete categorical or count data.",
  },
  {
    question: "How do I find the median for even vs. odd-sized datasets?",
    answer:
      "<strong>Odd count:</strong> Sort values, pick the middle one. {1, 3, 5, 7, 9} has 5 values. Position = (5+1)/2 = 3. Median = 3rd value = 5. <strong>Even count:</strong> Sort, average the two middle values. {1, 3, 5, 7} has 4 values. Positions = 2nd and 3rd (middle two). Values = 3 and 5. Median = (3+5)/2 = 4. <strong>Formula for position:</strong> For n values, odd-position = (n+1)/2. For even, average values at positions n/2 and (n/2)+1. <strong>Example:</strong> 10 values sorted. Positions = 5th and 6th. If 5th = 20, 6th = 22, median = 21. <strong>Always sort first:</strong> Common mistake is picking middle position without sorting. {9, 1, 5, 3, 7} unsorted. Sorted: {1, 3, 5, 7, 9}. Median = 5. If you didn't sort, you'd guess 5 (middle position in unsorted), but only by coincidence.",
  },
  {
    question: "What is skewness and how does it relate to mean and median?",
    answer:
      "<strong>Skewness</strong> describes asymmetry in data distribution. <strong>Symmetric (normal):</strong> Mean ≈ median ≈ mode. {1, 2, 3, 4, 5} mean = 3, median = 3, mode = none (symmetric). <strong>Right-skewed (positive):</strong> Long tail on right. Mean > median > mode. Examples: income (few high earners pull mean up), house prices, age of disease onset. {1, 2, 3, 4, 100} mean = 22, median = 3 (mean pulled right by outlier). <strong>Left-skewed (negative):</strong> Long tail on left. Mode > median > mean. Examples: test scores (few low performers), age at death in developed countries. {−100, 1, 2, 3, 4} mean = −18, median = 2 (mean pulled left). <strong>Practical insight:</strong> In right-skewed data, median is more representative than mean. Understanding skewness prevents misinterpretation of statistics.",
  },
];

export const TRIANGLE_FAQS: FAQ[] = [
  {
    question: "What are the main types of triangles and how do I classify them?",
    answer:
      "<strong>By side length:</strong> <strong>Equilateral:</strong> All 3 sides equal, all angles 60°. <strong>Isosceles:</strong> 2 sides equal, 2 equal angles opposite those sides. <strong>Scalene:</strong> All sides different, all angles different. <strong>By angle:</strong> <strong>Acute:</strong> All angles < 90°. <strong>Right:</strong> One angle = 90°. <strong>Obtuse:</strong> One angle > 90°. <strong>Equiangular:</strong> All angles equal (all 60°, only equilateral). <strong>Key rule:</strong> Sum of all angles = 180°. If you know two angles, third = 180° − angle1 − angle2. <strong>Example:</strong> Triangle with angles 50° and 60°. Third = 180° − 50° − 60° = 70° (acute). A right triangle with one 90° angle and one 45° angle has third angle 45° (isosceles right triangle). Knowing triangle type helps choose appropriate formulas (e.g., Pythagorean theorem for right triangles).",
  },
  {
    question: "What is the Pythagorean theorem and how do I use it?",
    answer:
      "<strong>Pythagorean theorem:</strong> In a right triangle, a^2 + b^2 = c^2, where a and b are legs, c is the hypotenuse (side opposite the right angle). <strong>Example:</strong> Legs 3 and 4. c^2 = 3^2 + 4^2 = 9 + 16 = 25. c = 5. <strong>Finding a missing side:</strong> If c = 10, a = 6, find b. 6^2 + b^2 = 10^2. 36 + b^2 = 100. b^2 = 64. b = 8. <strong>Common Pythagorean triples:</strong> (3,4,5), (5,12,13), (8,15,17), (7,24,25). Multiples work: (6,8,10) is 2 × (3,4,5). <strong>Application:</strong> Finding distances (diagonal of room = √(length^2 + width^2)), construction, navigation. <strong>Note:</strong> Only valid for right triangles. If not a right triangle, use the law of cosines instead.",
  },
  {
    question: "How do I calculate the area and perimeter of a triangle?",
    answer:
      "<strong>Area:</strong> A = (base × height) ÷ 2. Height is perpendicular to base. <strong>Example:</strong> Base = 10, height = 5. A = 50 ÷ 2 = 25. <strong>Alternative (Heron's formula):</strong> If you know all three sides a, b, c: s = (a+b+c)/2 (semi-perimeter). A = √[s(s−a)(s−b)(s−c)]. <strong>Example:</strong> Sides 3, 4, 5. s = 6. A = √[6 × 3 × 2 × 1] = √36 = 6. <strong>Perimeter:</strong> P = a + b + c (sum of all sides). <strong>For equilateral:</strong> P = 3 × side; A = (√3 ÷ 4) × side^2. <strong>For right triangle:</strong> A = (leg1 × leg2) ÷ 2. <strong>Always check units:</strong> Area in square units, perimeter in linear units. Heron's formula is useful when you don't know height.",
  },
  {
    question: "What is the law of sines and law of cosines?",
    answer:
      "<strong>Law of sines:</strong> a/sin(A) = b/sin(B) = c/sin(C), where sides a, b, c are opposite angles A, B, C. <strong>Use when:</strong> You know two angles and a side (AAS, ASA) or two sides and a non-included angle (SSA). <strong>Example:</strong> Angle A = 30°, angle B = 60°, side a = 5. Find side b. 5/sin(30°) = b/sin(60°). 5/0.5 = b/0.866. 10 = b/0.866. b ≈ 8.66. <strong>Law of cosines:</strong> c^2 = a^2 + b^2 − 2ab×cos(C). <strong>Use when:</strong> You know two sides and included angle (SAS) or all three sides (SSS). <strong>Example:</strong> Sides a = 5, b = 7, angle C = 50°. Find c. c^2 = 25 + 49 − 2×5×7×cos(50°) = 74 − 70×0.643 ≈ 29.0. c ≈ 5.4. These generalize the Pythagorean theorem (special case: C = 90°, cos(90°) = 0, so c^2 = a^2 + b^2).",
  },
  {
    question: "How do I find the height of a triangle if it's not given?",
    answer:
      "<strong>For right triangles:</strong> One leg is the height (perpendicular to the base). <strong>For non-right triangles:</strong> If you know area and base: height = (2 × area) ÷ base. <strong>Example:</strong> A = 25, base = 10. Height = 50 ÷ 10 = 5. <strong>If you know all three sides:</strong> Use Heron's formula to find area first. A = √[s(s−a)(s−b)(s−c)] (as before). Then height = (2 × A) ÷ base. <strong>Using trigonometry:</strong> If you know a side and an angle: height = side × sin(angle). <strong>Example:</strong> Side = 8, adjacent angle = 40°. Height = 8 × sin(40°) ≈ 5.14. <strong>Geometric approach:</strong> Drop a perpendicular from the opposite vertex to the base and measure or calculate using Pythagorean theorem. Always verify which measurement is the base (any side works, but choose wisely for easiest calculation).",
  },
];

export const MIXED_NUMBERS_FAQS: FAQ[] = [
  {
    question: "What is a mixed number and how do I convert between mixed and improper fractions?",
    answer:
      "A <strong>mixed number</strong> combines a whole number and a proper fraction. Example: 2 3/5 (two and three-fifths). <strong>Converting improper fraction to mixed:</strong> Divide numerator by denominator. Quotient = whole part, remainder = new numerator. Example: 13/5. 13 ÷ 5 = 2 remainder 3. So 13/5 = 2 3/5. <strong>Converting mixed to improper:</strong> (whole × denominator + numerator) ÷ denominator. Example: 2 3/5 = (2×5 + 3)/5 = 13/5. <strong>Why convert?</strong> Improper fractions are easier for arithmetic (addition, multiplication). Mixed numbers are more intuitive for everyday measurements (2 3/4 cups). Always convert to improper before multiplying or dividing; convert back to mixed for final answers to be clear.",
  },
  {
    question: "How do I add and subtract mixed numbers?",
    answer:
      "<strong>Method 1 (convert to improper):</strong> Convert both to improper fractions, add/subtract, convert back. Example: 2 1/3 + 1 1/3. Convert: 7/3 + 4/3 = 11/3 = 3 2/3. <strong>Method 2 (whole and fraction separately):</strong> Add/subtract whole parts, then fraction parts. Example: 2 1/3 + 1 1/3. Wholes: 2 + 1 = 3. Fractions: 1/3 + 1/3 = 2/3. Result: 3 2/3. <strong>With unlike denominators:</strong> Find LCD first. Example: 2 1/3 + 1 1/4. LCD = 12. Convert: 2 4/12 + 1 3/12. Wholes: 2 + 1 = 3. Fractions: 4/12 + 3/12 = 7/12. Result: 3 7/12. <strong>Borrowing (subtraction):</strong> If fraction part of subtrahend > minuend, borrow. Example: 3 1/4 − 1 3/4. Rewrite: 2 5/4 − 1 3/4 = 1 2/4 = 1 1/2. Method 1 avoids borrowing confusion.",
  },
  {
    question: "How do I multiply and divide mixed numbers?",
    answer:
      "<strong>Always convert to improper fractions first.</strong> <strong>Multiply:</strong> 2 1/2 × 1 1/3 = 5/2 × 4/3 = 20/6 = 10/3 = 3 1/3. <strong>Divide:</strong> 2 1/2 ÷ 1 1/3 = 5/2 ÷ 4/3 = 5/2 × 3/4 = 15/8 = 1 7/8. <strong>Key steps:</strong> (1) Convert each mixed to improper. (2) For multiplication: multiply numerators and denominators. (3) For division: flip (reciprocal) the second fraction, then multiply. (4) Simplify and convert back to mixed. <strong>Why improper?</strong> These operations are undefined for mixed numbers directly (2 1/2 × 1 1/3 doesn't mean multiply individually). Always convert first to avoid errors.",
  },
  {
    question: "How do I compare mixed numbers?",
    answer:
      "<strong>Compare whole parts first:</strong> 3 1/2 > 2 7/8 (because 3 > 2, regardless of fractions). <strong>If whole parts equal:</strong> Compare fractions. 2 3/4 vs. 2 2/3. LCD = 12. 2 9/12 vs. 2 8/12. 9/12 > 8/12, so 2 3/4 > 2 2/3. <strong>Cross-multiply for quick comparison:</strong> a/b vs. c/d: if ad > bc, then a/b > c/d. 3/4 vs. 2/3: 3×3 = 9, 4×2 = 8. 9 > 8, so 3/4 > 2/3. <strong>Convert to decimals:</strong> 2 3/4 = 2.75; 2 2/3 ≈ 2.67. Decimal comparison is intuitive. <strong>To order multiple mixed numbers:</strong> Convert all to improper fractions or decimals, sort, convert back if desired.",
  },
  {
    question: "What are real-world uses for mixed numbers?",
    answer:
      "<strong>Cooking/baking:</strong> 2 1/2 cups flour, 1 3/4 teaspoons baking soda. <strong>Construction:</strong> Boards 8 3/4 inches wide, room 12 1/2 feet long. <strong>Measurements:</strong> Rope 3 2/3 meters, height 5 1/4 feet. <strong>Time:</strong> 2 1/2 hours, 1 3/4 days. <strong>Why mixed numbers?</strong> More intuitive than improper fractions (13/4 cups is less clear than 3 1/4 cups). Easier to estimate (you know ~3 cups with extra). <strong>When calculating:</strong> Convert to improper, do math, convert back for clarity. Mixed numbers are best for communication; improper fractions are best for computation. Understanding both is essential for practical mathematics.",
  },
];

export const SIMPLIFY_FRACTIONS_FAQS: FAQ[] = [
  {
    question: "Why should I simplify fractions and what does it mean?",
    answer:
      "<strong>Simplifying</strong> (or reducing) a fraction means dividing both numerator and denominator by their greatest common factor (GCF) to get an equivalent fraction in lowest terms. <strong>Why?</strong> Simplified fractions are easier to understand, compare, and work with. 12/18 and 2/3 are equivalent, but 2/3 is clearly simpler. <strong>Example:</strong> 12/18. GCF(12, 18) = 6. 12÷6 = 2; 18÷6 = 3. So 12/18 = 2/3. <strong>Check if simplified:</strong> GCF of numerator and denominator = 1. 2/3: GCF(2, 3) = 1 ✓ simplified. 6/9: GCF(6, 9) = 3 ✗ not simplified. <strong>Standard practice:</strong> Always present final answers in simplified form. It's the conventional, clearest representation.",
  },
  {
    question: "How do I find the greatest common factor (GCF)?",
    answer:
      "<strong>Method 1 (list factors):</strong> List all factors of each number. Find the largest common one. <strong>Example:</strong> 24 and 36. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Common: 1, 2, 3, 4, 6, 12. GCF = 12. <strong>Method 2 (prime factorization):</strong> Factor each into primes. GCF is the product of common prime factors (lowest power). <strong>Example:</strong> 24 = 2^3 × 3. 36 = 2^2 × 3^2. Common: 2^2 × 3 = 12. <strong>Method 3 (Euclidean algorithm):</strong> Repeatedly divide. GCF(a, b) = GCF(b, a mod b) until remainder = 0. <strong>Example:</strong> GCF(24, 36). 36 = 24 × 1 + 12. 24 = 12 × 2 + 0. GCF = 12. Method 1 is intuitive; Method 2 is quick for known primes; Method 3 is algorithmic (used in calculators).",
  },
  {
    question: "Can all fractions be simplified?",
    answer:
      "Not all fractions can be simplified (reduced). A fraction is already in simplest form if GCF(numerator, denominator) = 1. These are called <strong>coprime</strong> or <strong>relatively prime</strong> numerators and denominators. <strong>Examples already simplified:</strong> 1/2 (GCF = 1), 3/7 (GCF = 1), 5/9 (GCF = 1). <strong>Examples not simplified:</strong> 4/6 (GCF = 2), 9/12 (GCF = 3). <strong>Rule:</strong> If both numerator and denominator are even, the fraction can be simplified (both divisible by 2). If numerator and denominator are both odd, they might not share a common factor. Check by listing factors or using GCF. <strong>Irreducible fractions:</strong> Already simplified; no further reduction possible. Most exercise answers should be irreducible fractions.",
  },
  {
    question: "What is the relationship between simplifying and equivalence?",
    answer:
      "<strong>Equivalent fractions</strong> represent the same value despite different numerators/denominators. 1/2 = 2/4 = 3/6 = 50/100 (all equal 0.5). <strong>Simplifying:</strong> Dividing numerator and denominator by GCF yields an equivalent, simpler fraction. <strong>Expanding:</strong> Multiplying numerator and denominator by the same number creates an equivalent but more complex fraction. 1/2 × 3/3 = 3/6. <strong>All equivalent fractions reduce to the same simplest form.</strong> 4/8 ÷ 4/4 = 1/2. 6/12 ÷ 6/6 = 1/2. <strong>Implication:</strong> To check if two fractions are equal, simplify both and compare. 18/24 and 15/20. First: GCF(18,24) = 6 → 3/4. Second: GCF(15,20) = 5 → 3/4. Equal! Understanding this prevents errors and clarifies fraction equality.",
  },
  {
    question: "How do I simplify complex fractions?",
    answer:
      "A <strong>complex fraction</strong> has fractions in the numerator, denominator, or both. Example: (1/2) / (3/4) or (1 + 1/2) / (2/3). <strong>Method:</strong> (1) Simplify numerator if needed (single fraction). (2) Simplify denominator if needed (single fraction). (3) Divide numerator by denominator (flip denominator and multiply). <strong>Example:</strong> (1/2 + 1/3) / (2/5). Numerator: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Denominator: 2/5. Divide: (5/6) ÷ (2/5) = (5/6) × (5/2) = 25/12 = 2 1/12. <strong>Shortcut (multiply by LCD):</strong> Find LCD of all fractions. Multiply numerator and denominator by LCD, simplify. <strong>Example:</strong> (1/2) / (3/4). LCD = 4. [(1/2) × 4] / [(3/4) × 4] = 2/3. Complex fractions are common in algebra and advanced math.",
  },
];

export const ROUNDING_FAQS: FAQ[] = [
  {
    question: "What are the basic rounding rules?",
    answer:
      "<strong>Find the rounding digit.</strong> Look at the digit to the right (the test digit). <strong>If test digit < 5:</strong> Round down (keep rounding digit). Example: 3.24 rounded to 1 decimal place: test digit = 4 < 5, round down → 3.2. <strong>If test digit ≥ 5:</strong> Round up (increment rounding digit). Example: 3.25 rounded to 1 decimal place: test digit = 5, round up → 3.3. <strong>Replace digits after rounding digit with zeros (or omit decimals).</strong> Example: 1234 rounded to nearest hundred: test digit = 3 < 5 → 1200. <strong>Special case (banker's rounding):</strong> If test digit = 5 exactly and rounding digit is even, round down; if odd, round up. Example: 3.25 → 3.2; 3.35 → 3.4. Most contexts use simple rounding; banker's rounding reduces bias for many 0.5 cases. Clarify which method your context uses.",
  },
  {
    question: "How do I round to different place values?",
    answer:
      "<strong>Nearest whole number:</strong> Look at tenths digit. 3.7 → 4. 3.2 → 3. <strong>Nearest tenth:</strong> Look at hundredths digit. 3.25 → 3.3 (test = 5, round up). 3.22 → 3.2 (test = 2, round down). <strong>Nearest hundredth:</strong> Look at thousandths digit. 3.456 → 3.46. <strong>Nearest thousand:</strong> Look at hundreds digit. 5,432 → 5,000 (test = 4, round down). 5,632 → 6,000 (test = 6, round up). <strong>Pattern:</strong> The rounding place is determined by what you want; the test digit is always one place to the right. <strong>For very large numbers:</strong> Scientific notation helps. 1,234,567 rounded to nearest million: 1,200,000 (test = 2, round down). <strong>Always note the target precision</strong> to avoid ambiguity.",
  },
  {
    question: "What happens when rounding causes a cascade (e.g., 99.96)?",
    answer:
      "<strong>Cascade:</strong> Rounding forces a carry to the next position. <strong>Example:</strong> 9.96 rounded to nearest tenth. Hundredths digit = 6 ≥ 5, round up tenths from 9 to 10. This 'carries' over: 9.96 → 10.0 (or just 10). <strong>Larger cascade:</strong> 199.96 → 200.0 (hundredths rounds up to tenths 10, which carries to ones place). <strong>Sequence:</strong> 99.95 → 100.0 → 100 (multiple carries). <strong>Why?</strong> Standard positional notation (base 10) requires carrying when a digit reaches 10. <strong>Verification:</strong> After rounding, the result should be 'close' to the original. 9.96 ≈ 10.0 ✓. If a cascade seems wrong, recount positions and check the test digit.",
  },
  {
    question: "How does rounding affect significant figures?",
    answer:
      "<strong>Significant figures (sig figs)</strong> are digits that convey meaningful precision. <strong>Rules:</strong> (1) Non-zero digits always significant. (2) Zeros between non-zero digits significant. (3) Leading zeros not significant. (4) Trailing zeros in decimals significant. (5) Trailing zeros in whole numbers ambiguous (use scientific notation). <strong>Example:</strong> 0.00456 has 3 sig figs (4, 5, 6). 405.0 has 4 sig figs. <strong>Rounding to sig figs:</strong> 3.456 to 2 sig figs: keep 3, 4; test = 5, round up → 3.5. <strong>Scientific notation:</strong> 3.456 × 10^2 (4 sig figs) rounded to 2: 3.5 × 10^2 (unambiguous). <strong>Why sig figs matter:</strong> In science/engineering, precision is important. Reporting 1000 m implies ±0.5 m precision, but 1.000 × 10^3 m is clearer. Rounding to appropriate sig figs prevents false precision.",
  },
  {
    question: "What is the difference between rounding and truncating?",
    answer:
      "<strong>Rounding:</strong> Examine the test digit, adjust up or down. 3.67 → 3.7 (round to 1 decimal). <strong>Truncating (or chopping):</strong> Simply cut off digits after the target position, no adjustment. 3.67 → 3.6 (truncate to 1 decimal). <strong>Difference:</strong> For 3.75: rounding → 3.8, truncating → 3.7. <strong>When to truncate:</strong> In computing/programming, truncation is faster (no test/adjustment logic). In measurement or money, rounding is standard (fairer). <strong>Impact on error:</strong> Rounding error is at most ±0.5 at the truncation point. Truncation error is at most −1 (always low). <strong>Example:</strong> Average of [3.75, 3.75, 3.75]. Rounded: avg = 3.8, sum = 11.4. Truncated: avg = 3.7, sum = 11.1. Rounding is more accurate for statistical work.",
  },
];

export const NUMBERS_TO_WORDS_FAQS: FAQ[] = [
  {
    question: "How do I convert numbers to words in English?",
    answer:
      "<strong>0–19:</strong> zero, one, two, ..., nineteen (memorize). <strong>20–99:</strong> Combine tens word (twenty, thirty, ..., ninety) with ones. Examples: 23 = twenty-three, 50 = fifty. <strong>100–999:</strong> Say hundreds place (e.g., 'three hundred'), then remaining digits. 345 = three hundred forty-five. <strong>1000–999999:</strong> Group by thousands. 5,432 = five thousand four hundred thirty-two. <strong>Millions/Billions:</strong> 1,234,567 = one million two hundred thirty-four thousand five hundred sixty-seven. <strong>Decimals:</strong> 3.45 = three point four five (or three and forty-five hundredths). <strong>Negative:</strong> −5 = negative five. <strong>Fractions:</strong> 3/4 = three-fourths, 1/8 = one-eighth. <strong>Rules:</strong> Hyphenate twentyone through ninety-nine (except multiples of ten). Use 'and' between major groups (optional in US English).",
  },
  {
    question: "How do I handle special cases like zeros in number-to-word conversion?",
    answer:
      "<strong>Leading zeros:</strong> Ignored. 007 = seven (no 'zero zero seven' unless context matters, e.g., spy code name). <strong>Middle zeros:</strong> Say them. 305 = three hundred five. 5,003 = five thousand three. <strong>Trailing zeros after decimal:</strong> Included in pronunciation. 3.50 = three point five zero. <strong>Whole number with trailing zeros:</strong> Don't mention zeros. 300 = three hundred (not 'three hundred zero zero'). <strong>Zero by itself:</strong> zero (not 'oh' in formal writing; 'oh' is common in speech for phone numbers, coordinates). <strong>10, 20, 100, 1000, etc.:</strong> Special names (ten, twenty, one hundred, one thousand). <strong>Ambiguity prevention:</strong> For clarity, use numerals in technical contexts. Words are better for documents (checks, contracts) where 'one thousand five hundred' prevents forgery vs. '1500'.",
  },
  {
    question: "How do I write very large numbers in words?",
    answer:
      "<strong>Powers of 10 names:</strong> thousand (10^3), million (10^6), billion (10^9), trillion (10^12), quadrillion (10^15), quintillion (10^18). <strong>Example:</strong> 1,234,567,890 = one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety. <strong>Grouping:</strong> Break into groups of 3 digits from right to left, name each group (trillions, billions, millions, thousands, ones). <strong>Rule:</strong> If a group is 0 (e.g., 1,000,000,002 = one billion two), skip that group. <strong>Hyphens:</strong> Use within each group (twenty-three, forty-five) and after each group name (billion, million, thousand). <strong>'And':</strong> Use between major groups (optional in US: 'one billion and two' or 'one billion two'). <strong>Technical context:</strong> Use numerals for precision and brevity. Words are mainly for formal written documents (checks, legal papers).",
  },
  {
    question: "How do I write ordinal numbers in words?",
    answer:
      "<strong>Ordinals (positions):</strong> 1st = first, 2nd = second, 3rd = third, 4th = fourth, ..., 10th = tenth, ..., 21st = twenty-first. <strong>Pattern:</strong> For 'teens' (11–19), use 'th': eleventh, twelfth, thirteenth, ..., nineteenth. <strong>For compound (21–99):</strong> Hyphenate, ordinal the last word. 34th = thirty-fourth, 99th = ninety-ninth. <strong>Hundreds/thousands:</strong> Ordinal only the final group. 100th = one hundredth, 345th = three hundred forty-fifth, 1000th = one thousandth. <strong>Special cases:</strong> 12 = twelfth (not 'two-enth'), 20 = twentieth (not 'two-enth'). <strong>Uses:</strong> Dates ('March 15th' or 'the fifteenth of March'), rankings ('first place'), sequences ('the third item'). <strong>Abbreviations:</strong> 1st, 2nd, 3rd, 4th, etc. (common in writing but spelled out in formal documents).",
  },
  {
    question: "How do I convert decimals and fractions to words?",
    answer:
      "<strong>Decimals (Method 1):</strong> Say 'point' for the decimal. 3.456 = three point four five six. <strong>Decimals (Method 2):</strong> Name the place value. 3.456 = three and four hundred fifty-six thousandths. <strong>Fractions:</strong> Numerator in words, denominator as ordinal. 3/4 = three-fourths, 5/8 = five-eighths, 7/12 = seven-twelfths. <strong>Mixed numbers:</strong> Whole part, 'and', fraction. 2 3/4 = two and three-fourths. <strong>When denominator > 10:</strong> Can say 'over': 7/13 = seven thirteenths or seven over thirteen. <strong>Special names:</strong> 1/2 = one-half (not 'one-second'), 1/3 = one-third, 1/4 = one-quarter (or one-fourth). <strong>Percentage:</strong> 45% = forty-five percent. <strong>Context matters:</strong> 'Point' is faster colloquially; place-value naming is clearer formally.",
  },
];
