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

export const AVERAGE_FAQS: FAQ[] = [
  {
    question: "What is the difference between mean, median, and mode?",
    answer:
      "<strong>Mean:</strong> Sum all values, divide by count. Example: 2, 4, 6, 8. Sum = 20, count = 4. Mean = 20/4 = 5. <strong>Median:</strong> Middle value when sorted. Example: 2, 4, 6, 8. Median = (4+6)/2 = 5 (even count: average the two middle). <strong>Mode:</strong> Most frequent value. Example: 2, 4, 4, 6. Mode = 4. <strong>Which to use?</strong> Mean for typical values (no extreme outliers). Median for skewed data (outliers don't skew it). Mode for categorical data (favorite color). <strong>Example:</strong> Salaries $30k, $35k, $40k, $200k. Mean = $76.25k (inflated by outlier). Median = $37.5k (more realistic). Mode = none (all unique).",
  },
  {
    question: "How do I calculate a weighted average?",
    answer:
      "<strong>Weighted average:</strong> Multiply each value by its weight, sum, divide by sum of weights. <strong>Formula:</strong> (v₁×w₁ + v₂×w₂ + ... + vₙ×wₙ) / (w₁ + w₂ + ... + wₙ). <strong>Example:</strong> Test scores: 85 (weight 2), 90 (weight 3), 78 (weight 1). Weighted = (85×2 + 90×3 + 78×1) / (2+3+1) = (170 + 270 + 78) / 6 = 518/6 ≈ 86.3. <strong>Real-world use:</strong> Grade calculation (homework 20%, exam 80%), portfolio performance (stocks weighted by % invested). <strong>Key:</strong> Weights represent importance or frequency; they don't need to sum to 1 (calculator handles normalization).",
  },
  {
    question: "Why is the mean sensitive to outliers?",
    answer:
      "<strong>Outliers:</strong> Extreme values far from the typical range. <strong>Example:</strong> 2, 3, 4, 5, 100. Mean = 114/5 = 22.8 (skewed high by 100). Median = 4 (unaffected). <strong>Why?</strong> Mean uses every value; one extreme shifts the sum significantly. Median uses position; extremes at the ends don't change the middle. <strong>Impact:</strong> Misleading average. Dataset 2, 3, 4, 5 (mean = 3.5) vs. 2, 3, 4, 100 (mean = 27.25). <strong>Solution:</strong> Check both mean and median. If they differ greatly, investigate outliers. Remove outliers if erroneous; report both if legitimate.",
  },
  {
    question: "How do I calculate the average of negative numbers?",
    answer:
      "<strong>Same as positive:</strong> Sum (including negatives), divide by count. <strong>Example:</strong> −5, −3, 0, 4. Sum = −5−3+0+4 = −4. Count = 4. Average = −4/4 = −1. <strong>Key:</strong> Negative values reduce the sum; average can be negative. <strong>Temperature example:</strong> −10°C, −5°C, 0°C, 5°C. Average = −10/4 = −2.5°C. <strong>Financial example:</strong> Profits/losses: −$100, −$50, $200, $150. Average = $200/4 = $50/unit (positive on average). <strong>Sign rule:</strong> Sum of negatives is negative; sum of mixed can be positive, negative, or zero depending on magnitudes.",
  },
];

export const BINARY_FAQS: FAQ[] = [
  {
    question: "How do I convert binary to decimal?",
    answer:
      "<strong>Method:</strong> Multiply each bit by 2 raised to its position (right = 0), sum. <strong>Example:</strong> 1101₂. Position 3: 1×2³=8. Position 2: 1×2²=4. Position 1: 0×2¹=0. Position 0: 1×2⁰=1. Sum = 8+4+0+1 = 13₁₀. <strong>Quick check:</strong> Binary 10₂ = 1×2¹ + 0×2⁰ = 2₁₀. <strong>Powers of 2:</strong> 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32. Memorize to speed up. <strong>Why?</strong> Computers use binary (0/1 = off/on). Humans use decimal (base 10). Understanding conversion bridges both systems.",
  },
  {
    question: "How do I convert decimal to binary?",
    answer:
      "<strong>Method 1 (divide by 2):</strong> Repeatedly divide by 2, track remainders. Read remainders bottom-to-top. <strong>Example:</strong> 13₁₀. 13÷2=6 R 1, 6÷2=3 R 0, 3÷2=1 R 1, 1÷2=0 R 1. Read: 1101₂. <strong>Method 2 (subtraction):</strong> Subtract largest power of 2, mark 1, continue. 13: 13−8=5 (2³), 5−4=1 (2²), 1−1=0 (2⁰). Positions: 3,2,0 → 1101₂. <strong>Verification:</strong> Convert result back: 1101₂ = 8+4+0+1 = 13₁₀. ✓ <strong>Tip:</strong> Method 1 is algorithmic (easier to automate); Method 2 is intuitive for understanding.",
  },
  {
    question: "What are binary operations (AND, OR, XOR)?",
    answer:
      "<strong>AND:</strong> Both bits 1 → result 1. Otherwise 0. Example: 1101 AND 1011 = 1001. <strong>OR:</strong> At least one bit 1 → result 1. Example: 1101 OR 1011 = 1111. <strong>XOR (exclusive OR):</strong> Bits differ → 1. Same → 0. Example: 1101 XOR 1011 = 0110. <strong>Truth table:</strong> Bit₁ | Bit₂ | AND | OR | XOR. 0|0|0|0|0. 0|1|0|1|1. 1|0|0|1|1. 1|1|1|1|0. <strong>Use:</strong> Logical comparisons, masking bits, encryption, computer logic gates.",
  },
  {
    question: "Why do computers use binary instead of decimal?",
    answer:
      "<strong>Hardware:</strong> Electronic switches are ON (1) or OFF (0). Binary maps naturally to two states. <strong>Reliability:</strong> Decimal (10 levels) harder to distinguish electronically; noise/interference easier to misread. Binary (2 levels) has large margin: clearly high (1) or low (0). <strong>Efficiency:</strong> Operations simpler in binary (AND, OR, XOR fast in circuits). <strong>Scaling:</strong> Multiple switches (bits) create larger numbers: 8 bits = 256 values. <strong>Standard:</strong> All digital devices (phones, computers, servers) use binary at the core. Higher-level abstractions (decimal, text) are software layers converting to/from binary.",
  },
];

export const CIRCLE_FAQS: FAQ[] = [
  {
    question: "What is the formula for circle circumference and area?",
    answer:
      "<strong>Circumference:</strong> C = 2πr = πd (r = radius, d = diameter). <strong>Example:</strong> r = 5. C = 2π(5) = 10π ≈ 31.42. <strong>Area:</strong> A = πr² (r = radius). <strong>Example:</strong> r = 5. A = π(5²) = 25π ≈ 78.54. <strong>Key constants:</strong> π ≈ 3.14159. Radius = half diameter. <strong>Relationship:</strong> Area = (C × r) / 2 (circumference times radius divided by 2). <strong>Units:</strong> Circumference in units (cm, m, inches). Area in square units (cm², m², in²).",
  },
  {
    question: "How do I find the radius or diameter from circumference or area?",
    answer:
      "<strong>From circumference:</strong> C = 2πr → r = C/(2π). Example: C = 20. r = 20/(2π) ≈ 3.18. <strong>From area:</strong> A = πr² → r = √(A/π). Example: A = 50. r = √(50/π) ≈ 3.99. <strong>Diameter:</strong> d = 2r. <strong>Inverse formula:</strong> If given diameter and need radius: r = d/2. Always rearrange first, then substitute values. Use a calculator for π and square roots.",
  },
  {
    question: "What are arc length and sector area?",
    answer:
      "<strong>Arc length:</strong> Part of circumference. Formula: L = (θ/360°) × 2πr (θ in degrees) or L = θr (θ in radians). <strong>Example:</strong> r = 5, θ = 60°. L = (60/360) × 2π(5) = (1/6) × 10π ≈ 5.24. <strong>Sector area:</strong> Pie-slice area. Formula: A = (θ/360°) × πr² (degrees) or A = (θ/2) × r² (radians). <strong>Example:</strong> r = 5, θ = 60°. A = (60/360) × π(25) = (1/6) × 25π ≈ 13.09. <strong>Key:</strong> θ must be in consistent units (degrees or radians). Sector = (angle proportion) × full circle.",
  },
];

export const CONFIDENCE_INTERVAL_FAQS: FAQ[] = [
  {
    question: "What is a confidence interval and what does the confidence level mean?",
    answer:
      "<strong>Confidence interval:</strong> A range [lower, upper] estimated from sample data where a parameter (e.g., population mean) likely falls. <strong>Example:</strong> Mean income survey: CI = [$50k, $55k] with 95% confidence. <strong>95% confidence level:</strong> If repeated many times, ~95% of intervals would contain the true parameter. NOT 95% chance this specific interval is correct (it either does or doesn't). <strong>Common levels:</strong> 90%, 95%, 99%. Higher confidence = wider interval (trade-off: precision vs. certainty). <strong>Formula (approx):</strong> CI = sample_mean ± (critical_value × standard_error). Critical value depends on confidence level and distribution (z-score for normal, t-score for small samples).",
  },
  {
    question: "How do I interpret a confidence interval correctly?",
    answer:
      "<strong>CORRECT:</strong> 'We are 95% confident the true mean lies in this interval.' <strong>INCORRECT:</strong> 'There is a 95% probability the true mean is in this interval' (the true mean is fixed; either it's in or it's not). <strong>Practical:</strong> Narrower interval = more precise estimate (good). Wider interval = less precise but higher confidence of capturing the parameter. <strong>Example:</strong> Margin of approval 52±3% is [$50k, $55k] — tighter than 52±10%. <strong>Context:</strong> 95% CI is standard in most fields; 99% for critical safety decisions (medical); 90% for exploratory analysis.",
  },
  {
    question: "How does sample size affect confidence intervals?",
    answer:
      "<strong>Relationship:</strong> Larger samples = narrower CI (more precision). <strong>Why?</strong> Standard error = σ / √n. As n increases, denominator grows, standard error shrinks. <strong>Example:</strong> n=100: SE ≈ 10/√100 = 1. n=400: SE = 10/√400 = 0.5. CI halved by quadrupling sample size. <strong>Rule:</strong> To reduce interval width by half, increase sample size by 4×. <strong>Practical:</strong> Larger studies more expensive but give more reliable estimates. Sample size calculators help determine n for desired precision.",
  },
];

export const DISTANCE_FAQS: FAQ[] = [
  {
    question: "What is the distance formula and how do I use it?",
    answer:
      "<strong>Formula:</strong> d = √[(x₂−x₁)² + (y₂−y₁)²] (2D). <strong>Example:</strong> Points (1, 2) and (4, 6). d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5. <strong>3D version:</strong> d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]. <strong>Derive from Pythagoras:</strong> Δx = 4−1 = 3 (horizontal leg). Δy = 6−2 = 4 (vertical leg). Hypotenuse = √(3² + 4²) = 5. <strong>Always:</strong> Square differences, sum, take square root. Order of points doesn't matter (|4−1| = |1−4|).",
  },
  {
    question: "How do I calculate distance between two cities or coordinates?",
    answer:
      "<strong>Straight-line (Euclidean):</strong> Use distance formula with coordinates. Most accurate for short distances on flat maps. <strong>Haversine formula:</strong> For actual Earth distances (curved surface). Accounts for latitude/longitude on a sphere. More complex; online calculators available. <strong>Example:</strong> NYC (40.7°N, 74.0°W) to LA (34.1°N, 118.2°W). Haversine ≈ 2,450 miles. Euclidean (if treated as flat) ≈ 2,244 miles (underestimate). <strong>Practical:</strong> GPS/maps use Haversine or more precise geodetic models. For homework: use Euclidean unless specified.",
  },
  {
    question: "What is the difference between distance and displacement?",
    answer:
      "<strong>Distance:</strong> Total path length traveled (always positive). <strong>Displacement:</strong> Straight-line distance from start to end (can be zero). <strong>Example:</strong> Walk 5 m north, 5 m south. Distance = 10 m. Displacement = 0 m (back at start). <strong>Formula:</strong> Distance = sum of segment lengths. Displacement = √[(final−initial)²] = magnitude of displacement vector. <strong>Physics:</strong> Speed (distance/time) vs. Velocity (displacement/time). Car drives 50 mi in circle. Distance = 50 mi. Displacement = 0 mi. Average speed = 50 mi / time. Average velocity = 0 (no net movement).",
  },
];

export const EXPONENT_FAQS: FAQ[] = [
  {
    question: "What are the basic exponent rules?",
    answer:
      "<strong>Product rule:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ. Example: 2³ × 2⁵ = 2⁸ = 256. <strong>Quotient rule:</strong> aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Example: 2⁸ ÷ 2³ = 2⁵ = 32. <strong>Power rule:</strong> (aᵐ)ⁿ = aᵐⁿ. Example: (2³)² = 2⁶ = 64. <strong>Product to power:</strong> (ab)ⁿ = aⁿbⁿ. Example: (2×3)² = 4 × 9 = 36. <strong>Quotient to power:</strong> (a/b)ⁿ = aⁿ/bⁿ. Example: (2/3)² = 4/9. <strong>Zero exponent:</strong> a⁰ = 1 (any nonzero a). <strong>Negative exponent:</strong> a⁻ⁿ = 1/aⁿ. Example: 2⁻³ = 1/8.",
  },
  {
    question: "How do I evaluate expressions with fractional exponents?",
    answer:
      "<strong>Fractional exponent:</strong> aᵐ/ⁿ = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. <strong>Example:</strong> 8²/³ = ³√(8²) = ³√64 = 4. OR (³√8)² = 2² = 4. <strong>Numerator:</strong> Power. Denominator: Root. <strong>Simplify:</strong> 8 = 2³, so ³√8 = 2. Then 2² = 4. <strong>Negative fractional:</strong> a⁻ᵐ/ⁿ = 1/aᵐ/ⁿ. Example: 4⁻¹/² = 1/√4 = 1/2. <strong>Order:</strong> You can root first then power, or power then root; choose easier path.",
  },
  {
    question: "How do I solve exponential equations like 2^x = 16?",
    answer:
      "<strong>Method 1 (same base):</strong> Express both sides as same base. 2ˣ = 16 → 2ˣ = 2⁴ → x = 4. <strong>Method 2 (logarithm):</strong> Take log both sides. 2ˣ = 16 → log(2ˣ) = log(16) → x·log(2) = log(16) → x = log(16)/log(2) ≈ 4. <strong>Check:</strong> 2⁴ = 16. ✓ <strong>When bases don't match:</strong> Use logarithms. Example: 3ˣ = 50 → x·log(3) = log(50) → x = log(50)/log(3) ≈ 3.56.",
  },
];

export const FACTORIAL_FAQS: FAQ[] = [
  {
    question: "What is a factorial and how do I calculate it?",
    answer:
      "<strong>Factorial (n!):</strong> Product of all positive integers ≤ n. <strong>Definition:</strong> n! = n × (n−1) × (n−2) × ... × 2 × 1. <strong>Examples:</strong> 5! = 5×4×3×2×1 = 120. 3! = 3×2×1 = 6. 1! = 1. 0! = 1 (by definition). <strong>Growth:</strong> Factorials grow very fast. 10! = 3,628,800. 20! ≈ 2.4 × 10¹⁸. <strong>Use:</strong> Combinatorics (permutations, combinations), probability, statistics. <strong>Calculator:</strong> Most have factorial (!) button. Larger factorials computed via Stirling's approximation or lookup tables.",
  },
  {
    question: "How do I use factorials in permutations and combinations?",
    answer:
      "<strong>Permutations (order matters):</strong> P(n,k) = n! / (n−k)!. Choose k from n, order counts. <strong>Example:</strong> Arrange 3 books from 5. P(5,3) = 5! / (5−3)! = 120 / 2 = 60. <strong>Combinations (order doesn't matter):</strong> C(n,k) = n! / [k!(n−k)!]. Choose k from n, order irrelevant. <strong>Example:</strong> Choose 3 books from 5 (ignore order). C(5,3) = 120 / (6 × 2) = 10. <strong>Key difference:</strong> Permutation: {A,B,C} ≠ {C,B,A}. Combination: {A,B,C} = {C,B,A}. Use permutation for: arrangements, passwords, rank orderings. Use combination for: committees, selections, teams.",
  },
  {
    question: "What is the relationship between n! and (n+1)!?",
    answer:
      "<strong>Relationship:</strong> (n+1)! = (n+1) × n!. <strong>Example:</strong> 5! = 120. 6! = 6 × 120 = 720. <strong>Proof:</strong> 6! = 6 × 5 × 4 × 3 × 2 × 1 = 6 × (5!). <strong>Recursive definition:</strong> n! = n × (n−1)!. Allows computing iteratively: 5! from 4!, which from 3!, etc. <strong>Implication:</strong> To divide factorials: 10! / 8! = (10 × 9 × 8!) / 8! = 10 × 9 = 90. Cancel common terms to avoid huge intermediate values.",
  },
];

export const GCD_LCM_FAQS: FAQ[] = [
  {
    question: "What is the greatest common divisor (GCD) and how do I find it?",
    answer:
      "<strong>GCD:</strong> Largest number dividing both a and b evenly. <strong>Example:</strong> GCD(12, 18). Divisors of 12: 1,2,3,4,6,12. Divisors of 18: 1,2,3,6,9,18. Common: 1,2,3,6. GCD = 6. <strong>Method 1 (Euclidean algorithm):</strong> GCD(a,b) = GCD(b, a mod b) until remainder 0. <strong>Example:</strong> GCD(18,12): 18=12×1+6, 12=6×2+0. GCD=6. <strong>Method 2 (prime factorization):</strong> 12=2²×3, 18=2×3². Common primes with min power: 2¹×3¹=6. <strong>Use:</strong> Simplify fractions, reduce ratios.",
  },
  {
    question: "What is the least common multiple (LCM) and how do I find it?",
    answer:
      "<strong>LCM:</strong> Smallest number divisible by both a and b. <strong>Example:</strong> LCM(12, 18). Multiples of 12: 12,24,36,48,... Multiples of 18: 18,36,54,... LCM = 36. <strong>Method 1 (prime factorization):</strong> 12=2²×3, 18=2×3². LCM = 2² × 3² = 4 × 9 = 36. <strong>Method 2 (formula):</strong> LCM(a,b) = (a × b) / GCD(a,b). Example: LCM(12,18) = (12×18) / 6 = 216/6 = 36. <strong>Use:</strong> Find common denominators for fractions, schedule problems (when events sync).",
  },
  {
    question: "What is the relationship between GCD and LCM?",
    answer:
      "<strong>Product rule:</strong> GCD(a,b) × LCM(a,b) = a × b. <strong>Example:</strong> 12, 18. GCD = 6, LCM = 36. 6 × 36 = 216 = 12 × 18. ✓ <strong>Proof (via prime factorization):</strong> Let a = p₁ᵃ¹ × p₂ᵃ² × ... and b = p₁ᵇ¹ × p₂ᵇ² × ... Then GCD = p₁^min(a₁,b₁) × ... and LCM = p₁^max(a₁,b₁) × ... Product = p₁^(min+max) × ... = p₁^(a₁+b₁) × ... = a × b. <strong>Implication:</strong> If you know GCD, compute LCM via formula (faster than finding multiples).",
  },
];

export const HEX_FAQS: FAQ[] = [
  {
    question: "How do I convert hexadecimal to decimal?",
    answer:
      "<strong>Hexadecimal (base 16):</strong> Uses digits 0−9 and A−F (A=10, B=11, ..., F=15). <strong>Method:</strong> Multiply each digit by 16 raised to its position, sum. <strong>Example:</strong> 1A3₁₆. Position 2: 1×16²=256. Position 1: A(10)×16¹=160. Position 0: 3×16⁰=3. Sum = 256+160+3 = 419₁₀. <strong>Powers of 16:</strong> 16⁰=1, 16¹=16, 16²=256, 16³=4096. <strong>Quick check:</strong> F₁₆ = 15₁₀. FF₁₆ = 15×16 + 15 = 255₁₀. <strong>Why hex?</strong> Compact representation for binary (1 hex digit = 4 binary bits).",
  },
  {
    question: "How do I convert decimal to hexadecimal?",
    answer:
      "<strong>Method:</strong> Repeatedly divide by 16, track remainders. Read remainders bottom-to-top. <strong>Example:</strong> 419₁₀. 419÷16=26 R 3, 26÷16=1 R 10(A), 1÷16=0 R 1. Read: 1A3₁₆. <strong>Verification:</strong> 1×256 + 10×16 + 3 = 419. ✓ <strong>Large numbers:</strong> Divide step-by-step; convert remainder to hex (10→A, 11→B, etc.). <strong>Tip:</strong> Online converters available; understand the process for small numbers.",
  },
  {
    question: "What is the relationship between binary and hexadecimal?",
    answer:
      "<strong>Key:</strong> 1 hex digit = 4 binary bits (nibble). <strong>Example:</strong> 1A3₁₆ = 0001 1010 0011₂. Breakdown: 1=0001, A=1010, 3=0011. <strong>Why useful?</strong> Programmers use hex as shorthand for binary. 11110101₂ (hard to read) = F5₁₆ (compact). <strong>Conversion:</strong> Group binary into 4-bit chunks, convert each to hex. 11110101 → 1111(F) 0101(5) → F5₁₆. <strong>Reverse:</strong> Each hex digit → 4 binary digits. A3 → 1010(A) 0011(3) → 10100011₂.",
  },
];

export const HYPOTHESIS_TEST_FAQS: FAQ[] = [
  {
    question: "What is a hypothesis test and how does the p-value work?",
    answer:
      "<strong>Hypothesis test:</strong> Determine if sample data provides evidence for/against a claim (null hypothesis H₀). <strong>Null hypothesis (H₀):</strong> No effect/difference. <strong>Alternative hypothesis (H₁):</strong> Effect/difference exists. <strong>P-value:</strong> Probability of observing sample data if H₀ is true. <strong>Interpretation:</strong> p < 0.05 typically → reject H₀ (evidence against claim). p ≥ 0.05 → fail to reject H₀ (insufficient evidence). <strong>Example:</strong> Is coin fair? H₀: p=0.5. Flip 100 times, get 70 heads. p-value ≈ 0.00001 (very unlikely if fair) → reject H₀. <strong>Important:</strong> p-value is NOT probability H₀ is false; it's probability of data given H₀ is true.",
  },
  {
    question: "What are Type I and Type II errors?",
    answer:
      "<strong>Type I error (α):</strong> Reject H₀ when it's true (false positive). <strong>Example:</strong> Conclude coin biased when it's actually fair. <strong>Type II error (β):</strong> Fail to reject H₀ when it's false (false negative). <strong>Example:</strong> Conclude coin fair when it's actually biased. <strong>Significance level (α):</strong> Chosen before test; typically 0.05 (5% chance of Type I). <strong>Trade-off:</strong> Decreasing α increases β. Reducing both requires larger sample. <strong>Power (1−β):</strong> Probability of detecting true effect. Higher power = better test.",
  },
  {
    question: "What is a one-tailed vs. two-tailed test?",
    answer:
      "<strong>One-tailed:</strong> Test if parameter > or < specific value. <strong>Example:</strong> Is mean income > $50k? H₁: μ > 50. <strong>Two-tailed:</strong> Test if parameter ≠ specific value. <strong>Example:</strong> Is mean income different from $50k? H₁: μ ≠ 50. <strong>Difference:</strong> One-tailed concentrates α in one tail (more power to detect direction). Two-tailed splits α into both tails (tests both directions). <strong>P-value:</strong> One-tailed p ≈ half two-tailed p. <strong>Choose based on hypothesis:</strong> Directional claim → one-tailed. No direction → two-tailed.",
  },
];

export const LINEAR_EQUATION_FAQS: FAQ[] = [
  {
    question: "What is a linear equation and how do I solve ax + b = c?",
    answer:
      "<strong>Linear equation:</strong> One variable to first power. Form: ax + b = c. <strong>Solve by isolating x:</strong> (1) Subtract b from both sides: ax = c − b. (2) Divide by a: x = (c − b) / a. <strong>Example:</strong> 2x + 5 = 13. Subtract 5: 2x = 8. Divide by 2: x = 4. <strong>Check:</strong> 2(4) + 5 = 13. ✓ <strong>Key:</strong> Whatever operation you do to one side, do to the other (balance principle). <strong>Special cases:</strong> If a = 0, equation is not linear (becomes b = c, either always true or never).",
  },
  {
    question: "How do I solve systems of two linear equations (substitution/elimination)?",
    answer:
      "<strong>Substitution method:</strong> (1) Solve one equation for a variable. (2) Substitute into other equation. <strong>Example:</strong> x + y = 5, 2x − y = 4. From first: y = 5 − x. Substitute: 2x − (5 − x) = 4 → 3x − 5 = 4 → x = 3. Then y = 2. <strong>Elimination method:</strong> (1) Multiply equations so a variable's coefficients cancel. (2) Add/subtract equations. <strong>Example:</strong> x + y = 5, 2x − y = 4. Add: (x + 2x) + (y − y) = 9 → 3x = 9 → x = 3. <strong>Choose:</strong> Substitution if one variable easily isolated. Elimination if coefficients already set up nicely.",
  },
  {
    question: "What is the slope-intercept form and how do I use it?",
    answer:
      "<strong>Slope-intercept form:</strong> y = mx + b. m = slope, b = y-intercept. <strong>Example:</strong> y = 2x + 3. Slope = 2 (rise 2 for every 1 right). Y-intercept = 3 (line crosses y-axis at (0,3)). <strong>Find from two points:</strong> Slope m = (y₂ − y₁) / (x₂ − x₁). <strong>Example:</strong> Points (1,5) and (3,9). m = (9−5)/(3−1) = 4/2 = 2. Then y = 2x + b. Plug point (1,5): 5 = 2(1) + b → b = 3. <strong>Equation:</strong> y = 2x + 3. <strong>Graph:</strong> Plot y-intercept (0,3), use slope to find another point (1,5), draw line.",
  },
];

export const LOG_FAQS: FAQ[] = [
  {
    question: "What is a logarithm and how does it relate to exponents?",
    answer:
      "<strong>Logarithm:</strong> Inverse of exponent. logₐ(x) = y means aʸ = x. <strong>Example:</strong> log₂(8) = 3 because 2³ = 8. <strong>Common bases:</strong> log₁₀ (common log), ln = log_e (natural log, base e ≈ 2.718). <strong>Key property:</strong> logₐ(aˣ) = x and a^(logₐ(x)) = x. <strong>Why useful?</strong> Convert multiplication to addition: log(xy) = log(x) + log(y). Solve exponential equations: 2ˣ = 50 → x = log₂(50) = log(50)/log(2) ≈ 5.64. <strong>Inverse:</strong> If log(x) = y, then x = 10ʸ (for base 10).",
  },
  {
    question: "What are the logarithm rules (product, quotient, power)?",
    answer:
      "<strong>Product rule:</strong> logₐ(xy) = logₐ(x) + logₐ(y). <strong>Example:</strong> log₁₀(100) = log₁₀(10 × 10) = log₁₀(10) + log₁₀(10) = 1 + 1 = 2. <strong>Quotient rule:</strong> logₐ(x/y) = logₐ(x) − logₐ(y). <strong>Power rule:</strong> logₐ(xⁿ) = n·logₐ(x). <strong>Example:</strong> log₁₀(10³) = 3·log₁₀(10) = 3·1 = 3. <strong>Change of base:</strong> logₐ(x) = log_b(x) / log_b(a). Converts between bases. <strong>Use:</strong> Simplify complex logs, solve equations.",
  },
  {
    question: "How do I solve logarithmic equations like log(x) = 2?",
    answer:
      "<strong>Convert to exponential:</strong> logₐ(x) = b → x = aᵇ. <strong>Example:</strong> log₁₀(x) = 2 → x = 10² = 100. <strong>Verify:</strong> log₁₀(100) = 2. ✓ <strong>Complex example:</strong> log(x) + log(2) = 3 (base 10). Combine: log(2x) = 3. Convert: 2x = 10³ = 1000. x = 500. <strong>Check:</strong> log(500) + log(2) = log(1000) = 3. ✓",
  },
];

export const LONG_DIVISION_FAQS: FAQ[] = [
  {
    question: "What are the steps for long division?",
    answer:
      "<strong>Steps (divide, multiply, subtract, bring down, repeat):</strong> (1) Divide: How many times does divisor fit into first few digits? (2) Multiply: Multiply divisor by quotient digit, write below. (3) Subtract: Subtract to find remainder. (4) Bring down: Bring next digit. (5) Repeat until all digits processed. <strong>Example:</strong> 456 ÷ 12. 12 fits into 45 three times (3×12=36). Subtract: 45−36=9. Bring 6 down: 96. 12 fits into 96 eight times (8×12=96). Subtract: 96−96=0. Answer: 38. <strong>Remainder:</strong> If not exact, final remainder written as fraction or decimal.",
  },
  {
    question: "How do I handle remainders and convert to decimals?",
    answer:
      "<strong>Integer remainder:</strong> 17 ÷ 5 = 3 R 2 (quotient 3, remainder 2). <strong>Fraction:</strong> 3 2/5 (mixed number). <strong>Decimal:</strong> Continue dividing: add decimal point, append zeros. 17÷5: 3 (R 2). 20÷5 = 4. Answer: 3.4. <strong>Repeating decimal:</strong> 10÷3 = 3.333... (3 repeats). Long division shows the pattern. <strong>Key:</strong> Remainder becomes dividend for next step (×10 after decimal). Stop when remainder is 0 or pattern repeats.",
  },
  {
    question: "How do I divide by multi-digit divisors?",
    answer:
      "<strong>Process same as single-digit but more estimation:</strong> (1) Identify how many digits needed in dividend (divisor must fit into them). <strong>Example:</strong> 5832 ÷ 18. 18 fits into 58 (first two digits) three times (3×18=54). Subtract: 58−54=4. Bring 3 down: 43. 18 fits into 43 twice (2×18=36). Continue. (2) If estimating hard, try different digits (18 fits into 43? Yes, 2 times). <strong>Check:</strong> Multiply quotient × divisor; should equal dividend (plus any remainder). Practice builds speed.",
  },
];

export const MEAN_ABSOLUTE_DEVIATION_FAQS: FAQ[] = [
  {
    question: "What is mean absolute deviation (MAD) and how do I calculate it?",
    answer:
      "<strong>MAD:</strong> Average distance of data points from the mean (ignores direction). <strong>Formula:</strong> MAD = Σ|xᵢ − mean| / n. <strong>Steps:</strong> (1) Find mean. (2) Calculate distance from mean for each value (absolute value). (3) Average the distances. <strong>Example:</strong> Data: 2, 4, 6, 8. Mean = 5. Distances: |2−5|=3, |4−5|=1, |6−5|=1, |8−5|=3. Sum = 8. MAD = 8/4 = 2. <strong>Interpretation:</strong> On average, values deviate by 2 from the mean. <strong>Use:</strong> Measure spread; easier to interpret than standard deviation (same units as data, not squared).",
  },
  {
    question: "How does MAD compare to standard deviation?",
    answer:
      "<strong>MAD:</strong> Absolute deviation. Simple, same units as data. Example: Data in cm → MAD in cm. <strong>Standard deviation:</strong> Square root of average squared deviations. More complex, mathematically convenient. <strong>Example dataset:</strong> 2, 4, 6, 8. MAD = 2 (as calculated). Std dev ≈ 2.37. <strong>Why both exist?</strong> MAD is intuitive and robust to outliers. Std dev is mathematically useful (easier for statistical tests). <strong>Rule:</strong> For normal distribution, std dev ≈ 1.25 × MAD.",
  },
  {
    question: "What does a large or small MAD tell you?",
    answer:
      "<strong>Large MAD:</strong> Data spread widely from mean (high variability). <strong>Example:</strong> Test scores 10, 50, 90 (mean=50). Distances: 40, 0, 40. MAD=26.7 (large spread). <strong>Small MAD:</strong> Data clustered near mean (low variability). <strong>Example:</strong> Test scores 48, 50, 52 (mean=50). Distances: 2, 0, 2. MAD=1.3 (tight cluster). <strong>Compare datasets:</strong> MAD helps compare consistency. Two classes with same mean but different MADs have different spreadiness. Class A (MAD=5) more consistent than Class B (MAD=15).",
  },
];

export const PERMUTATION_COMBINATION_FAQS: FAQ[] = [
  {
    question: "What is the difference between permutations and combinations?",
    answer:
      "<strong>Permutations:</strong> Order matters. Different arrangements = different outcomes. <strong>Formula:</strong> P(n,k) = n! / (n−k)!. <strong>Example:</strong> Arrange 3 books from 5. P(5,3) = 5!/(5−3)! = 120/2 = 60. Choosing {A,B,C} differs from {C,B,A}. <strong>Combinations:</strong> Order doesn't matter. Different arrangements = same outcome. <strong>Formula:</strong> C(n,k) = n! / [k!(n−k)!]. <strong>Example:</strong> Choose 3 books from 5 (ignore order). C(5,3) = 120/(6×2) = 10. Choosing {A,B,C} same as {C,B,A}. <strong>When to use:</strong> Permutation: passwords, rank orderings, line arrangements. Combination: committees, teams, selections.",
  },
  {
    question: "How do I calculate permutations with repetition?",
    answer:
      "<strong>Without repetition (standard):</strong> P(n,k) = n!/(n−k)!. Each element used once. <strong>With repetition:</strong> P(n,k) = nᵏ. Each element can repeat. <strong>Example:</strong> Create 3-letter passwords from 26 letters. With repetition: 26³ = 17,576 (AAA, AAB, ... ZZZ allowed). Without repetition: P(26,3) = 26×25×24 = 15,600 (no repeats, e.g., AAA not allowed). <strong>Key:</strong> With repetition, first choice = n options, second = n (not n−1), third = n. Product = nᵏ.",
  },
  {
    question: "How do I calculate combinations with repetition?",
    answer:
      "<strong>Without repetition (standard):</strong> C(n,k) = n! / [k!(n−k)!]. <strong>With repetition:</strong> C(n+k−1, k). Choose k items from n types, repetition allowed. <strong>Example:</strong> Choose 3 toppings from 5 available, repeats allowed (e.g., double pepperoni). C(5+3−1, 3) = C(7,3) = 35. <strong>Intuition:</strong> Equivalent to distributing k identical items into n bins. <strong>Formula derivation:</strong> Stars and bars method (combinatorics). <strong>Difference:</strong> Standard C(5,3) = 10 (no repeats). Repetition C(7,3) = 35 (repeats allowed).",
  },
];

export const PRIME_FACTOR_FAQS: FAQ[] = [
  {
    question: "What is prime factorization and how do I find it?",
    answer:
      "<strong>Prime factorization:</strong> Express number as product of prime numbers. <strong>Example:</strong> 60 = 2² × 3 × 5. <strong>Method (divide by smallest primes):</strong> (1) Divide by 2 until odd. (2) Divide by 3 if divisible. (3) Continue with 5, 7, 11, ... until quotient = 1. <strong>Example:</strong> 60. 60÷2=30. 30÷2=15. 15÷3=5. 5÷5=1. Factors: 2,2,3,5. Written: 2²×3×5. <strong>Uniqueness:</strong> Every number has exactly one prime factorization (Fundamental Theorem of Arithmetic). <strong>Use:</strong> Simplify fractions, find GCD/LCM, test primality.",
  },
  {
    question: "How is prime factorization used to find GCD and LCM?",
    answer:
      "<strong>GCD:</strong> Product of common primes with lowest power. <strong>Example:</strong> 12 = 2²×3, 18 = 2×3². Common: 2¹×3¹ = 6. <strong>LCM:</strong> Product of all primes with highest power. <strong>Example:</strong> 12 = 2²×3, 18 = 2×3². All: 2²×3² = 4×9 = 36. <strong>Why works:</strong> Prime factorization reveals shared factors and unique factors. GCD = intersection of prime sets. LCM = union with max powers. <strong>Compare:</strong> P(12,18) = 12×18 / GCD = 216 / 6 = 36 = LCM. ✓",
  },
  {
    question: "What is a prime number and how do I test if a number is prime?",
    answer:
      "<strong>Prime:</strong> Natural number > 1, divisible only by 1 and itself. <strong>Examples:</strong> 2, 3, 5, 7, 11, 13, ... (2 is only even prime). <strong>Test (trial division):</strong> Check if divisible by any number up to √n. <strong>Example:</strong> Is 17 prime? √17 ≈ 4.1. Check divisibility by 2, 3, 4 (only need 2, 3). 17 not divisible by 2 or 3 → prime. <strong>Why √n?</strong> If n = a×b and a ≤ √n, then b ≥ √n. So checking up to √n suffices. <strong>Composite:</strong> Number with factors besides 1 and itself (e.g., 12 = 2²×3). <strong>1:</strong> Neither prime nor composite (by convention).",
  },
];

export const PYTHAGOREAN_FAQS: FAQ[] = [
  {
    question: "What is the Pythagorean theorem and when do I use it?",
    answer:
      "<strong>Theorem:</strong> In right triangle, a² + b² = c² (c = hypotenuse, longest side). <strong>Example:</strong> Legs 3, 4. Hypotenuse = √(9+16) = √25 = 5. <strong>Use:</strong> Find missing side in right triangle. Verify if triangle is right (check if a²+b²=c²). Solve distance/geometry problems. <strong>Derivation:</strong> Area of square on hypotenuse = sum of areas on other sides. <strong>Common Pythagorean triples:</strong> (3,4,5), (5,12,13), (8,15,17), (7,24,25). Multiples also work: (6,8,10) = 2×(3,4,5).",
  },
  {
    question: "How do I find missing sides in a right triangle?",
    answer:
      "<strong>Given two sides, find third:</strong> <strong>If a, b known (legs):</strong> c = √(a²+b²). <strong>Example:</strong> a=5, b=12. c = √(25+144) = √169 = 13. <strong>If c, a known (hypotenuse and one leg):</strong> b = √(c²−a²). <strong>Example:</strong> c=13, a=5. b = √(169−25) = √144 = 12. <strong>Always:</strong> Hypotenuse is longest side. Don't confuse which is which. <strong>Check:</strong> Plug back into a²+b²=c².",
  },
  {
    question: "What are 3-4-5 and other Pythagorean triples?",
    answer:
      "<strong>Pythagorean triple:</strong> Three integers (a,b,c) satisfying a²+b²=c². <strong>Primitive triple:</strong> GCD(a,b,c)=1 (no common factor). <strong>Examples (primitive):</strong> (3,4,5), (5,12,13), (8,15,17), (7,24,25), (20,21,29). <strong>Non-primitive:</strong> Multiples of primitives. (6,8,10)=2×(3,4,5), (9,12,15)=3×(3,4,5). <strong>Generate:</strong> Use formulas: a=m²−n², b=2mn, c=m²+n² (m>n>0). Example: m=2, n=1 → a=3, b=4, c=5. <strong>Why useful?</strong> Quick mental calculation; no square roots needed.",
  },
];

export const QUADRATIC_FAQS: FAQ[] = [
  {
    question: "What is a quadratic equation and how do I solve it?",
    answer:
      "<strong>Quadratic:</strong> Degree-2 polynomial equation: ax²+bx+c=0 (a≠0). <strong>Solutions (roots):</strong> Values of x satisfying equation. Up to 2 real roots. <strong>Quadratic formula:</strong> x = (−b ± √(b²−4ac)) / (2a). <strong>Example:</strong> x²−5x+6=0 (a=1, b=−5, c=6). Discriminant: b²−4ac = 25−24 = 1. x = (5±1)/2 = 3 or 2. <strong>Check:</strong> 3²−5(3)+6 = 0. ✓ <strong>Discriminant:</strong> > 0 (two real roots), = 0 (one root), < 0 (no real roots, complex).",
  },
  {
    question: "How do I factor quadratic expressions like x² + 5x + 6?",
    answer:
      "<strong>Factoring:</strong> Express as (x+p)(x+q) where p+q=b and p×q=c. <strong>Example:</strong> x²+5x+6. Find p, q: p+q=5, p×q=6. p=2, q=3. Factor: (x+2)(x+3). <strong>Check:</strong> (x+2)(x+3) = x²+3x+2x+6 = x²+5x+6. ✓ <strong>When impossible:</strong> Use quadratic formula or complete the square. <strong>Leading coefficient≠1:</strong> 2x²+5x+3. Multiply a×c=6. Find factors of 6 summing to b=5: 2,3. Split: 2x²+2x+3x+3. Factor pairs: 2x(x+1)+3(x+1) = (2x+3)(x+1).",
  },
  {
    question: "What does the discriminant tell you about solutions?",
    answer:
      "<strong>Discriminant:</strong> Δ = b²−4ac (expression under square root in quadratic formula). <strong>Δ > 0:</strong> Two distinct real roots (parabola crosses x-axis twice). <strong>Δ = 0:</strong> One repeated real root (parabola touches x-axis once). <strong>Δ < 0:</strong> No real roots, two complex conjugate roots (parabola doesn't cross x-axis). <strong>Examples:</strong> x²−5x+6: Δ=1>0 (two roots: 2, 3). x²−4x+4: Δ=0 (one root: 2 double). x²+1: Δ=−4<0 (no real roots). <strong>Quick check:</strong> Compute Δ before solving to know what to expect.",
  },
];

export const RATIO_FAQS: FAQ[] = [
  {
    question: "What is a ratio and how do I simplify it?",
    answer:
      "<strong>Ratio:</strong> Comparison of two quantities (a:b or a/b). <strong>Example:</strong> 3:5 (read 'three to five'). <strong>Simplify:</strong> Divide both by GCD. <strong>Example:</strong> 12:18. GCD=6. Simplified: 2:3. <strong>Equivalent ratios:</strong> 2:3 = 4:6 = 6:9 = 12:18 (all same ratio). <strong>Scale:</strong> Multiply both by same number. 2:3 × 4 = 8:12. <strong>Use:</strong> Compare quantities, recipes, maps, probability. <strong>Forms:</strong> a:b or a/b or 'a to b' (all mean the same).",
  },
  {
    question: "How do I solve problems involving ratios and proportions?",
    answer:
      "<strong>Proportion:</strong> Two ratios equal. a/b = c/d. <strong>Solve:</strong> Cross-multiply: ad = bc. <strong>Example:</strong> 2/3 = x/12. Cross: 2×12 = 3×x → 24 = 3x → x=8. <strong>Verify:</strong> 2/3 = 8/12 → 2×12=24, 3×8=24. ✓ <strong>Real-world:</strong> Recipe scaling. Recipe: 2 cups flour, 1 cup sugar (ratio 2:1). Scale to 6 cups flour. 2/1 = 6/x → x=3 cups sugar. <strong>Speed/distance:</strong> 60 miles per 2 hours. How far in 5 hours? 60/2 = x/5 → x = 150 miles.",
  },
  {
    question: "What is the difference between ratio, rate, and proportion?",
    answer:
      "<strong>Ratio:</strong> Comparison of quantities (same units or not). Example: 3 boys to 5 girls (3:5). <strong>Rate:</strong> Ratio of quantities with different units. Example: 60 miles per 2 hours (60 mi/2 hrs = 30 mi/hr). <strong>Proportion:</strong> Statement that two ratios are equal. Example: 3/5 = 6/10. <strong>Key distinctions:</strong> Ratio (dimensionless). Rate (has units). Proportion (equation). <strong>Example:</strong> Recipe ratio 2:1 (flour:sugar). Rate: 2 cups flour per 1 cup sugar. Proportion: If 4 cups flour, then 2 cups sugar (4/2 = 2/1).",
  },
];

export const SAMPLE_SIZE_FAQS: FAQ[] = [
  {
    question: "Why does sample size matter in statistics?",
    answer:
      "<strong>Larger samples:</strong> More reliable estimates, narrower confidence intervals, higher statistical power. <strong>Example:</strong> Poll 100 people vs. 1,000. The 1,000-person poll has tighter CI and higher confidence in true population proportion. <strong>Why?</strong> Standard error = σ/√n. As n ↑, SE ↓. Uncertainty decreases. <strong>Rule of thumb:</strong> To reduce error by half, quadruple sample size (√4 = 2). <strong>Trade-off:</strong> Larger samples cost more (time, money) but give better precision. <strong>Minimum:</strong> n ≥ 30 often recommended for normal approximation.",
  },
  {
    question: "How do I calculate the sample size needed for a study?",
    answer:
      "<strong>Formula (approximate):</strong> n = (z² × σ²) / e². z = critical value (1.96 for 95% confidence), σ = std dev, e = margin of error. <strong>Example:</strong> Poll proportion to ±3% margin, 95% confidence. Use p=0.5 (worst case). n = (1.96² × 0.5 × 0.5) / (0.03²) ≈ 1,068. <strong>Factors affecting n:</strong> Confidence level (higher → larger n). Margin of error (smaller → larger n). Population variability (higher → larger n). <strong>Tools:</strong> Online calculators available. Formula varies by scenario (proportion, mean, survival, etc.).",
  },
  {
    question: "What is statistical power and how is it related to sample size?",
    answer:
      "<strong>Statistical power:</strong> Probability of detecting true effect (1−β). <strong>Example:</strong> 80% power = 80% chance of rejecting H₀ if it's false. <strong>Relationship to n:</strong> Power ↑ as n ↑. Larger sample detects smaller effects. <strong>Trade-off:</strong> Type I error (α), Type II error (β), sample size, effect size interrelated. Choose 3, n determined. Typical targets: α=0.05, power=0.80. <strong>Example:</strong> Detect 10% improvement with 80% power, α=0.05. Requires sample of ~200. Detect 5% improvement? Need ~800. <strong>Design studies:</strong> Compute n to achieve desired power before data collection.",
  },
];

export const SURFACE_AREA_FAQS: FAQ[] = [
  {
    question: "What is the formula for surface area of common shapes?",
    answer:
      "<strong>Cube (side s):</strong> SA = 6s². Example: s=2 → SA = 6(4) = 24. <strong>Rectangular prism (l, w, h):</strong> SA = 2(lw + lh + wh). Example: 2×3×4 → SA = 2(6+8+12) = 52. <strong>Sphere (radius r):</strong> SA = 4πr². Example: r=3 → SA = 4π(9) = 36π ≈ 113. <strong>Cylinder (radius r, height h):</strong> SA = 2πr² + 2πrh (two circles + lateral). Example: r=2, h=5 → SA = 2π(4) + 2π(2)(5) = 8π + 20π = 28π ≈ 88. <strong>Cone (radius r, slant height l):</strong> SA = πr² + πrl. <strong>Key:</strong> Surface area = sum of all face areas.",
  },
  {
    question: "How do I calculate surface area of a composite shape?",
    answer:
      "<strong>Composite:</strong> Combination of simple shapes. <strong>Method:</strong> (1) Break into simple parts. (2) Calculate each surface area. (3) Add together (accounting for shared faces). <strong>Example:</strong> Cylinder with cone on top. Cylinder: SA = 2πr² + 2πrh (but top circle hidden). Cone: SA = πrl. Together: πr² (cylinder bottom) + 2πrh (cylinder side) + πrl (cone). <strong>Watch:</strong> Don't double-count shared surfaces. If cylinder top and cone base coincide, exclude that face from count.",
  },
  {
    question: "How do I find surface area if given volume or one dimension?",
    answer:
      "<strong>Relationship:</strong> Surface area and volume related but distinct. Different formulas. <strong>Example:</strong> Volume of cube = s³. Surface area = 6s². If V=27 → s=3 → SA = 54. <strong>Reverse:</strong> Given SA, find s. 6s²=54 → s²=9 → s=3. <strong>Scaling:</strong> If all dimensions scale by factor k: SA scales by k². V scales by k³. Example: Scale 2×. SA × 4, V × 8. <strong>Optimization:</strong> For fixed volume, sphere minimizes surface area (why bubbles are round). For fixed surface area, sphere maximizes volume.",
  },
];

export const TRIG_FAQS: FAQ[] = [
  {
    question: "What are sine, cosine, and tangent in a right triangle?",
    answer:
      "<strong>SOH-CAH-TOA mnemonic:</strong> <strong>sin(θ) = opposite/hypotenuse</strong> (Sine = Opposite/Hypotenuse). <strong>cos(θ) = adjacent/hypotenuse</strong> (Cosine = Adjacent/Hypotenuse). <strong>tan(θ) = opposite/adjacent</strong> (Tangent = Opposite/Adjacent). <strong>Example:</strong> Right triangle, θ=30°, opposite=5, hypotenuse=10. sin(30°) = 5/10 = 0.5. <strong>Common values:</strong> sin(30°)=0.5, cos(30°)≈0.866, tan(30°)≈0.577. sin(45°)≈0.707, cos(45°)≈0.707, tan(45°)=1. sin(60°)≈0.866, cos(60°)=0.5, tan(60°)≈1.732. <strong>Use:</strong> Find missing sides/angles, navigation, engineering.",
  },
  {
    question: "How do I solve for missing sides or angles?",
    answer:
      "<strong>Known two sides, find angle:</strong> Use inverse trig. Example: opposite=3, hypotenuse=5. sin(θ) = 3/5 = 0.6 → θ = arcsin(0.6) ≈ 36.87°. <strong>Known one side and angle, find another:</strong> Use appropriate trig ratio. Example: angle=40°, hypotenuse=10, find opposite. sin(40°) = opposite/10 → opposite = 10×sin(40°) ≈ 6.43. <strong>Check:</strong> Verify with Pythagorean theorem or other trig function. <strong>Units:</strong> Angle in degrees or radians (ensure calculator mode matches).",
  },
  {
    question: "What is the unit circle and why is it important?",
    answer:
      "<strong>Unit circle:</strong> Circle radius 1 centered at origin. Any angle θ maps to point (cos(θ), sin(θ)). <strong>Why?</strong> Simplifies trig. At θ=0°: (1, 0). θ=90°: (0, 1). θ=180°: (−1, 0). θ=270°: (0, −1). <strong>Angles in quadrants:</strong> Q1 (0°−90°): sin, cos both positive. Q2 (90°−180°): sin positive, cos negative. Q3 (180°−270°): sin, cos both negative. Q4 (270°−360°): sin negative, cos positive. <strong>Radians:</strong> π radians = 180°. Unit circle shows radian values. <strong>Extends:</strong> Beyond 0°−360° using periodicity (sin, cos repeat every 360° or 2π radians).",
  },
];

export const VARIANCE_FAQS: FAQ[] = [
  {
    question: "What is variance and how do I calculate it?",
    answer:
      "<strong>Variance:</strong> Average squared deviation from mean. Measures spread. <strong>Formula:</strong> σ² = Σ(xᵢ − mean)² / n (population) or s² = Σ(xᵢ − mean)² / (n−1) (sample). <strong>Example:</strong> Data: 2, 4, 6, 8. Mean=5. Squared deviations: (2−5)²=9, (4−5)²=1, (6−5)²=1, (8−5)²=9. Sum=20. Variance = 20/4 = 5 (population). <strong>Sample (n−1):</strong> Used when estimating from sample; accounts for freedom lost in computing mean. Variance = 20/3 ≈ 6.67. <strong>Units:</strong> Variance squared (e.g., if data in cm, variance in cm²). <strong>Interpretation:</strong> Larger variance = more spread.",
  },
  {
    question: "How is variance related to standard deviation?",
    answer:
      "<strong>Standard deviation:</strong> Square root of variance. σ = √σ². <strong>Example:</strong> Variance = 5 → Std dev = √5 ≈ 2.24. <strong>Why?</strong> Std dev in original units (easier interpretation). Variance in squared units (mathematically convenient for calculations). <strong>Properties:</strong> Std dev always ≥ 0. Wider distribution → larger std dev. <strong>Example:</strong> Dataset 48,49,50,51,52 (tight, mean=50, std dev≈1.4). Dataset 10,30,50,70,90 (wide, mean=50, std dev≈31.6). <strong>Use:</strong> Report std dev for readability; compute variance for statistical formulas.",
  },
  {
    question: "What is the difference between population and sample variance?",
    answer:
      "<strong>Population variance (σ²):</strong> All data available. Divide by n. <strong>Sample variance (s²):</strong> Estimating from sample. Divide by n−1 (Bessel's correction). <strong>Why n−1?</strong> Sample mean inherently closer to sample than to population mean. Using n underestimates variance. (n−1) corrects for this bias. <strong>Example:</strong> Population: 2,4,6,8 (known all). Variance = 5 (÷4). Sample from population: 2,6 (estimate). Variance = (−1)² + (3)² / (2−1) = 10 (÷1). <strong>Rule:</strong> If you compute mean from same data, use sample variance (n−1). If mean is external, use population variance (n).",
  },
];

export const Z_SCORE_FAQS: FAQ[] = [
  {
    question: "What is a z-score and how do I calculate it?",
    answer:
      "<strong>Z-score:</strong> Standard score. Measures how many standard deviations a value is from mean. <strong>Formula:</strong> z = (x − mean) / std_dev. <strong>Example:</strong> Data mean=100, std_dev=15. x=130. z = (130−100)/15 = 2. Value 130 is 2 std devs above mean. <strong>Interpretation:</strong> z=0 (at mean). z>0 (above mean). z<0 (below mean). z=2 (top ~2.3%). z=−1 (bottom ~15.9%). <strong>Use:</strong> Standardize scores (different units/scales). Compare values across datasets. Identify outliers (|z| > 3 rare).",
  },
  {
    question: "How do I use z-scores to find probabilities?",
    answer:
      "Use a standard normal table (z-table) or calculator to convert z-scores to probabilities. For example, z=1.5 gives P(Z less than 1.5) of about 0.933, meaning 93.3% of data falls below. To find P(Z greater than 1.5), calculate 1 minus 0.933 = 0.067 (6.7% above). For probabilities between two z-scores, subtract: P(0 to 1.5) = 0.933 minus 0.5 = 0.433 (43.3%). For inverse lookups, P=0.975 corresponds to z of about 1.96 (used for 95% confidence intervals). This assumes data is normally distributed."
  },
  {
    question: "How do I identify outliers using z-scores?",
    answer:
      "<strong>Outlier threshold:</strong> Typically |z| > 2 or |z| > 3. <strong>|z| > 2:</strong> Value 2+ std devs from mean (~2.3% of data in normal distribution, so unusually far). <strong>|z| > 3:</strong> Stronger threshold (~0.13% of data). <strong>Example:</strong> Mean=50, std_dev=10. x=80 → z=(80−50)/10 = 3. Outlier (|z|>3). x=75 → z=2.5. Borderline (2<|z|<3). <strong>Visual:</strong> Plot z-scores; anything beyond ±3 on horizontal axis stands out. <strong>Context:</strong> Some fields use |z|>2.5 or relax to |z|>2.5. Choose threshold based on tolerance for false positives.",
  },
];

export const MATRIX_FAQS: FAQ[] = [
  {
    question: "What is a matrix and how do I add or subtract matrices?",
    answer:
      "<strong>Matrix:</strong> Rectangular array of numbers (rows × columns). <strong>Example:</strong> 2×3 matrix: [[1,2,3], [4,5,6]]. <strong>Addition:</strong> Add corresponding elements. Matrices must be same size. [[1,2], [3,4]] + [[5,6], [7,8]] = [[6,8], [10,12]]. <strong>Subtraction:</strong> Subtract corresponding elements. [[5,6], [7,8]] − [[1,2], [3,4]] = [[4,4], [4,4]]. <strong>Properties:</strong> Order doesn't matter (commutative). Can combine multiple additions. <strong>Use:</strong> System of equations, transformations, data tables.",
  },
  {
    question: "How do I multiply matrices?",
    answer:
      "<strong>Matrix multiplication:</strong> (rows of A) × (columns of B). Dot product of rows and columns. <strong>Example:</strong> A is 2×3, B is 3×2. Result is 2×2. A = [[1,2,3], [4,5,6]], B = [[7,8], [9,10], [11,12]]. A×B[0][0] = 1(7)+2(9)+3(11) = 7+18+33 = 58. <strong>Key:</strong> A×B ≠ B×A (not commutative). (A×B)×C = A×(B×C) (associative). Inner dimensions must match (A: m×n, B: n×p → result: m×p). <strong>Identity matrix (I):</strong> A×I = A. I has 1s on diagonal, 0s elsewhere.",
  },
  {
    question: "What is matrix inverse and determinant?",
    answer:
      "<strong>Determinant (det or |A|):</strong> Scalar value. For 2×2: det([[a,b], [c,d]]) = ad−bc. <strong>Example:</strong> [[3,2], [1,4]]. det = 3(4)−2(1) = 10. <strong>Use:</strong> Non-singular (invertible) if det ≠ 0. det=0 → singular (no inverse). <strong>Inverse (A⁻¹):</strong> Matrix such that A×A⁻¹ = I. Exists only if det ≠ 0. 2×2 inverse: A⁻¹ = (1/det) × [[d,−b], [−c,a]]. <strong>Example:</strong> A = [[3,2], [1,4]], det=10. A⁻¹ = (1/10) × [[4,−2], [−1,3]]. <strong>Use:</strong> Solve matrix equations Ax=b → x=A⁻¹b.",
  },
];

export const RANDOM_NUMBER_FAQS: FAQ[] = [
  {
    question: "What is a random number and how are they generated?",
    answer:
      "<strong>Random number:</strong> Value unpredictable (within a range). <strong>True randomness:</strong> Physical processes (radioactive decay, atmospheric noise). <strong>Pseudo-random:</strong> Algorithm-generated, deterministic but appears random. <strong>Seed:</strong> Initial value determining sequence. Same seed → same sequence. Different seed → different sequence. <strong>Example:</strong> Linear congruential generator: x_{n+1} = (a×x_n + c) mod m. Simple but used historically. <strong>Modern:</strong> Mersenne Twister (used in most programming languages). Cryptographic: ChaCha20 (stronger randomness). <strong>Use:</strong> Simulations, games, cryptography, statistical sampling.",
  },
    {
    question: "How do I generate random numbers in a specific range?",
    answer:
      "<strong>Random integer a to b:</strong> rand() × (b−a+1) + a (then floor). <strong>Example:</strong> Range 1−6 (dice): rand()×6+1, floor to get 1−6. <strong>Random decimal 0 to 1:</strong> Most generators default to [0,1). <strong>Decimal a to b:</strong> rand()×(b−a)+a. <strong>Example:</strong> Range 5.5 to 10.5: rand()×5+5.5. <strong>Sampling:</strong> Pick n random from list. Shuffle (Fisher-Yates) or weighted selection. <strong>Weighted:</strong> Higher probability for some outcomes. Example: Probability 0.7 for heads, 0.3 for tails. Use cumulative distribution.",
  },
  {
    question: "What is the difference between random and pseudo-random?",
    answer:
      "<strong>True random:</strong> Truly unpredictable. Based on physical phenomena. Example: atmospheric noise, quantum events. <strong>Properties:</strong> Each number independent, uniform distribution. <strong>Pseudo-random:</strong> Deterministic algorithm mimicking randomness. Repeats after period (predictable if seed known). <strong>Advantage:</strong> Reproducible (same seed = same sequence, useful for debugging). <strong>Disadvantage:</strong> Predictable with enough data and knowing algorithm. <strong>Security:</strong> Cryptographic RNGs (slow but unpredictable). Pseudo-RNGs (fast, non-cryptographic). <strong>Use:</strong> Simulations/games: pseudo-random. Cryptography/gambling: true random or cryptographic RNG.",
  },
];
