// FAQ content for Physics Mechanics calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.
//
// Writing guidelines:
// - Question phrasing should mirror "People Also Ask" queries
// - Answers are 80-150 words, direct and factual
// - Include formulas and worked numeric examples for physics concepts
// - Use SI units and standard notation
// - HTML formatting permitted in answers (used with dangerouslySetInnerHTML)

import type { FAQ } from "./calculator-registry";

export const CENTRIPETAL_FORCE_FAQS: FAQ[] = [
  {
    question: "What is centripetal force and how is it calculated?",
    answer:
      "Centripetal force is the inward force required to keep an object moving in a circle. Formula: <strong>Fc = mv²/r</strong>, where m is mass (kg), v is velocity (m/s), and r is radius (m). Example: a 1.5 kg ball rotating at 4 m/s in a circle of radius 0.5 m experiences Fc = (1.5 × 4²) / 0.5 = (1.5 × 16) / 0.5 = 48 N. The force always points toward the center. Common sources include tension (rope), gravity (orbits), friction (car cornering), and normal force. Without centripetal force, the object continues straight; with it, the object's direction continuously changes, creating circular motion. The force is perpendicular to velocity and does no work.",
  },
  {
    question: "Why do objects need centripetal force to move in circles?",
    answer:
      "Newton's first law states objects move in straight lines unless a force acts. To change direction continuously (circular motion), a net force toward the center (centripetal force) must be applied. Without it, the object's inertia causes it to fly off tangentially. Example: a satellite orbiting Earth needs gravity's centripetal force; without it, the satellite would move straight into space. A car turning needs friction or banking angle to provide centripetal force; insufficient force causes skidding. The faster the speed or tighter the radius, the more centripetal force required. At high speeds or tight curves, friction may be insufficient, causing loss of control.",
  },
  {
    question: "What's the relationship between centripetal acceleration and centripetal force?",
    answer:
      "Newton's second law: <strong>F = ma</strong>. Centripetal acceleration is <strong>ac = v²/r</strong>. Therefore, centripetal force is <strong>Fc = m × v²/r = mv²/r</strong>. Example: a 2 kg object at 5 m/s in a 1 m radius circle has acceleration ac = 25/1 = 25 m/s² and force Fc = 2 × 25 = 50 N. Doubling velocity quadruples the force (since v² appears). Doubling mass doubles the force. Doubling radius halves the force. Understanding these relationships helps predict how changes in mass, speed, or path radius affect the required force. In real applications, insufficient centripetal force causes loss of circular motion (skidding, crashing, or orbital decay).",
  },
  {
    question: "How is centripetal force different from centrifugal force?",
    answer:
      "Centripetal force is <strong>real</strong> (applied force pointing toward center, causes circular motion). Centrifugal force is <strong>fictitious</strong> (apparent outward force felt in rotating reference frames). In an inertial (non-rotating) frame, only centripetal force acts. Example: in a car turning left, the road friction is centripetal (inward); you feel pushed outward due to your inertia wanting to continue straight. In the car's rotating frame, centrifugal force appears to push you outward. Engineers account for centrifugal effects in rotating machinery and orbits. For problem-solving, use inertial frames (real forces only) unless specified otherwise. Centrifugal force is a pedagogical tool to simplify rotating reference frame analysis.",
  },
  {
    question: "What are real-world applications of centripetal force?",
    answer:
      "<strong>Satellites and orbits:</strong> gravity provides centripetal force. <strong>Cars cornering:</strong> friction and banking provide centripetal force. <strong>Spinning objects:</strong> tension in the rope or structural forces hold the object in circular path. <strong>Amusement rides:</strong> normal force and geometry create centripetal acceleration. <strong>Centrifuges:</strong> spinning samples at high speeds separates components by density. <strong>Planetary motion:</strong> gravity keeps planets orbiting the sun. <strong>Atomic structure:</strong> electric force keeps electrons orbiting nuclei (simplified model). Understanding centripetal force helps design safe road curves, predict orbital mechanics, and engineer rotating machinery. Insufficient centripetal force causes accidents; excess force causes structural failure.",
  },
];

export const FORCE_FAQS: FAQ[] = [
  {
    question: "What is Newton's Second Law and how do I calculate force?",
    answer:
      "Newton's Second Law: <strong>F = ma</strong> (force equals mass times acceleration). Force is measured in Newtons (N); 1 N accelerates 1 kg at 1 m/s². Example: a 50 kg person accelerating at 2 m/s² experiences F = 50 × 2 = 100 N. If the person pushes with 100 N of force and there's 20 N of friction, net force = 80 N, resulting in a = 80/50 = 1.6 m/s². To find acceleration from force: a = F/m. This law is fundamental to classical mechanics and applies everywhere from household objects to vehicles. Understanding F = ma helps predict motion from applied forces and vice versa.",
  },
  {
    question: "What's the difference between force, weight, and mass?",
    answer:
      "<strong>Mass</strong> is the amount of matter (kg, constant everywhere). <strong>Weight</strong> is the gravitational force on mass: <strong>W = mg</strong>, where g ≈ 9.81 m/s² on Earth. Example: a 10 kg object weighs 10 × 9.81 = 98.1 N. On the Moon (g ≈ 1.6 m/s²), the same object weighs 16 N but has the same 10 kg mass. <strong>Force</strong> is any push/pull that changes motion (measured in Newtons). Weight is one type of force. A spring, friction, or motor also exerts force. Confusing mass and weight leads to errors; always use mass (kg) in F = ma and weight (N) when calculating gravitational effects.",
  },
  {
    question: "How do I find net force when multiple forces act?",
    answer:
      "Add all forces vectorially (accounting for direction). In 1D: <strong>Fnet = F1 + F2 + ... (with signs)</strong>. Example: a 50 kg box with 100 N push (forward) and 30 N friction (backward) has Fnet = 100 − 30 = 70 N. Acceleration = 70/50 = 1.4 m/s² forward. In 2D, use Pythagorean theorem: if one force is 30 N up and another is 40 N right, Fnet = √(30² + 40²) = 50 N at an angle. Forces at angles require vector decomposition (breaking into components). Most problems involve forces along one axis; isolate that axis and sum algebraically. Free-body diagrams help visualize all forces acting on an object.",
  },
  {
    question: "What forces act on an object moving in everyday situations?",
    answer:
      "<strong>Gravity:</strong> pulls downward at W = mg. <strong>Normal force:</strong> surface pushes upward, typically equals weight on horizontal surfaces. <strong>Friction:</strong> opposes motion, <strong>f = μN</strong>, where μ is friction coefficient. <strong>Applied forces:</strong> pushing, pulling, engine thrust. <strong>Air resistance:</strong> opposes motion, increases with speed. At rest on the ground: gravity (down) and normal force (up) balance. Walking: friction propels you forward, air resistance is minimal. Driving: engine force propels forward, air resistance and rolling friction oppose. Running downhill: gravity component along slope aids motion; friction opposes. Identifying all forces helps predict motion and design for safety.",
  },
  {
    question: "How does friction relate to the normal force?",
    answer:
      "<strong>Kinetic friction (sliding):</strong> f = μk × N. <strong>Static friction (not sliding):</strong> f ≤ μs × N. Example: a 50 kg box on a horizontal surface has N = 50 × 9.81 ≈ 490 N. If μk = 0.3, kinetic friction = 0.3 × 490 = 147 N when sliding. To start sliding, applied force must exceed static friction (often μs > μk). On an inclined plane, normal force decreases as the angle increases: N = mg cos(θ). Friction is proportional to normal force, not weight directly. Lubricating surfaces or reducing normal force both reduce friction, which is why spacecraft use low-friction bearings and why skateboard wheels spin freely.",
  },
];

export const FREE_FALL_FAQS: FAQ[] = [
  {
    question: "What is free fall and how is velocity calculated?",
    answer:
      "Free fall is motion under gravity alone (no air resistance). Acceleration is constant: <strong>a = g ≈ 9.81 m/s²</strong>. Formula for velocity: <strong>v = gt</strong>, where t is time (seconds). Example: an object falls for 3 seconds; v = 9.81 × 3 ≈ 29.4 m/s. Distance fallen: <strong>d = 0.5gt²</strong>. In 3 seconds: d = 0.5 × 9.81 × 9 ≈ 44.1 meters. At terminal velocity (real world with air), drag force equals weight, and acceleration ceases. Free fall assumes no air resistance — valid for dense objects falling short distances, but breaks down for parachutes, feathers, or extended falls. The constant acceleration makes free fall predictable and fundamental to physics education.",
  },
  {
    question: "How do I find the time to fall from a certain height?",
    answer:
      "Rearrange the distance formula: <strong>d = 0.5gt²</strong> → <strong>t = √(2d/g)</strong>. Example: falling 100 meters: t = √(2 × 100 / 9.81) = √(20.4) ≈ 4.52 seconds. Velocity at impact: v = 9.81 × 4.52 ≈ 44.3 m/s. Doubling height increases time by √2 (about 1.4×), not 2×. This matters for safety calculations: a 10-meter fall takes about 1.43 seconds; a 40-meter fall takes about 2.86 seconds (not twice as long). Skydiving uses these calculations to estimate jump altitude and freefall duration before parachute deployment. Falling objects approach but never exceed terminal velocity in the real world.",
  },
  {
    question: "What's the difference between free fall and falling with air resistance?",
    answer:
      "<strong>Free fall (no air resistance):</strong> constant acceleration a = 9.81 m/s², velocity increases linearly, reaches any speed given enough time. <strong>Real fall (with air resistance):</strong> acceleration decreases as velocity increases (drag increases), eventually reaches terminal velocity where drag equals weight and acceleration = 0. Terminal velocity depends on shape, mass, and air density. Example: a feather (low terminal velocity, ~5 m/s) and a bowling ball (high terminal velocity, ~50 m/s) in air. In a vacuum, all objects fall at the same rate (free fall). For practical scenarios (jumping, dropping objects), air resistance is often negligible below 30–50 m/s. Parachutes intentionally create drag to reduce terminal velocity to safe levels.",
  },
  {
    question: "How do I calculate the velocity of an object just before impact?",
    answer:
      "Given height, use: <strong>v² = 2gd</strong> → <strong>v = √(2gd)</strong>. Example: 20-meter fall: v = √(2 × 9.81 × 20) = √(392.4) ≈ 19.8 m/s. Given time, use: <strong>v = gt</strong>. Example: falling for 2 seconds: v = 9.81 × 2 ≈ 19.6 m/s. Both methods match (slight rounding differences). This is crucial for: <strong>safety design</strong> (impact testing, fall protection), <strong>accident investigation</strong> (determining fall heights from injury patterns), <strong>sports</strong> (cliff diving, skydiving). Higher falls result in much higher impact velocities (velocity increases with the square root of height), dramatically increasing injury risk.",
  },
  {
    question: "Can objects fall faster than terminal velocity?",
    answer:
      "No, terminal velocity is the maximum speed for an object falling through a fluid (air, water). At terminal velocity, drag force equals weight, and net force = 0, so acceleration = 0. Example: a skydiver reaches terminal velocity (about 53 m/s or 120 mph) in about 15 seconds; beyond that, speed doesn't increase despite continuing to fall. Air density increases at lower altitudes; terminal velocity increases slightly as air thins at higher altitudes. Different shapes have different terminal velocities: a streamlined skydiver (35–60 m/s) falls faster than someone in a flat position (90 m/s). A space shuttle re-entering atmosphere briefly exceeds terminal velocity due to initial cosmic velocity, then slows. In summary: in normal conditions, you cannot fall faster than terminal velocity.",
  },
];

export const GRAVITATIONAL_FORCE_FAQS: FAQ[] = [
  {
    question: "How is gravitational force calculated between two objects?",
    answer:
      "Newton's Law of Universal Gravitation: <strong>F = G(m1 × m2)/r²</strong>, where G = 6.674 × 10⁻¹¹ N⋅m²/kg², m1 and m2 are masses (kg), r is distance between centers (m). Example: two 1000 kg objects 1 meter apart: F = 6.674 × 10⁻¹¹ × (1000 × 1000) / 1² = 6.674 × 10⁻⁵ N (tiny, illustrating gravity's weakness). Earth (6 × 10²⁴ kg) and you (70 kg) at 6.371 × 10⁶ m radius: F ≈ 686 N ≈ your weight. Force is always attractive, pointing along the line connecting centers. Doubling distance reduces force to 1/4; doubling mass doubles force. Gravity is the weakest fundamental force but dominates at large scales.",
  },
  {
    question: "Why is Earth's gravitational acceleration 9.81 m/s²?",
    answer:
      "Earth's surface gravity results from its mass (5.972 × 10²⁴ kg) and radius (6.371 × 10⁶ m). Using <strong>g = GM/r²</strong>: g = (6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.371 × 10⁶)² ≈ 9.81 m/s². This is the acceleration experienced by any object near Earth's surface (mass-independent). Higher altitudes have slightly lower g: at 400 km altitude (ISS), g ≈ 8.7 m/s². Other planets have different g: Moon (1.62 m/s²), Mars (3.71 m/s²), Jupiter (24.79 m/s²). The value 9.81 m/s² is standard; 9.8 is often used for simplicity. Weight = mg, so a 70 kg person weighs 686 N on Earth, 113 N on the Moon.",
  },
  {
    question: "How does gravity change with distance from Earth?",
    answer:
      "Gravity follows the inverse-square law: <strong>g = GM/r²</strong>. Doubling distance reduces g to 1/4. At Earth's surface (r = 6,371 km): g ≈ 9.81 m/s². At 6,371 km altitude (2× Earth's radius): g ≈ 2.45 m/s² (1/4 strength). At geostationary orbit (42,164 km): g ≈ 0.03 m/s². The ISS at 400 km altitude experiences g ≈ 8.7 m/s² — nearly Earth's surface value, so astronauts fall together (free fall) rather than 'floating.' Understanding gravity's distance dependence explains orbital mechanics: closer orbits require higher velocities; farther orbits are slower and more stable.",
  },
  {
    question: "How do tidal forces arise from gravitational gradients?",
    answer:
      "Tidal forces result from gravity varying with distance. The Moon pulls harder on Earth's near side than far side, stretching Earth and creating tides. The gradient (difference in g) is <strong>dg/dr = 2GM/r³</strong>. Example: the Moon's gravity at Earth's near surface (356,500 km) is stronger than at the far surface (406,700 km). This 50,200 km difference causes a tidal gradient of about 2 × 10⁻⁷ m/s² — small but sufficient to move entire oceans. Nearer bodies cause stronger tidal effects (the Sun's tidal effect is smaller despite greater mass, due to distance). Extreme tidal forces near black holes can spaghettify objects. Tides are crucial for orbital mechanics and geology.",
  },
  {
    question: "What role does gravity play in planetary and satellite orbits?",
    answer:
      "Gravity provides the centripetal force keeping objects in orbit. For circular orbits: <strong>GM/r² = v²/r</strong> → <strong>v = √(GM/r)</strong>. Orbital period: <strong>T = 2π√(r³/GM)</strong> (Kepler's third law). Example: Earth (M = 5.972 × 10²⁴ kg) and the ISS (r = 6.778 × 10⁶ m): v ≈ 7.67 km/s, T ≈ 92 minutes. Geostationary satellites (T = 24 hours) are at r ≈ 42,164 km. Closer orbits are faster and shorter-period; farther orbits are slower and longer-period. Gravity is always attractive, so objects cannot 'escape' gravity (though escape velocity ≈ 11.2 km/s means the object never returns). Understanding gravity and orbits is essential for spaceflight and satellite operations.",
  },
];

export const KINETIC_ENERGY_FAQS: FAQ[] = [
  {
    question: "How is kinetic energy calculated and what does it represent?",
    answer:
      "Kinetic energy is energy of motion: <strong>KE = 0.5 × m × v²</strong>, where m is mass (kg) and v is velocity (m/s). Energy is measured in Joules (J). Example: a 1000 kg car at 20 m/s has KE = 0.5 × 1000 × 400 = 200,000 J = 200 kJ. Doubling velocity quadruples kinetic energy (v² dependence). Kinetic energy increases with mass and velocity; stopping requires removing this energy via friction or brakes. Kinetic energy is always positive (speed is squared) and depends on reference frame (observer). At rest, KE = 0. When an object falls, gravitational potential energy converts to kinetic energy. Impact damage correlates with kinetic energy; even light objects at high velocity are dangerous.",
  },
  {
    question: "Why does kinetic energy depend on the square of velocity?",
    answer:
      "From work-energy theorem: <strong>Work = Force × Distance = ΔKE</strong>. To accelerate from 0 to v: <strong>F × d = m × a × d = m × (v²/2d) × d = 0.5mv²</strong>. The v² arises from kinematics: <strong>v² = 2ad</strong>, so distance needed to reach velocity v doubles when doubling v (actually quadruples at constant force). Therefore, kinetic energy quadruples when doubling velocity. Example: doubling from 10 m/s to 20 m/s quadruples KE; requires 4× the work or braking distance. This explains why speed limits exist — doubling speed makes collisions 4× more energetic. The quadratic relationship is why seatbelts and airbags are critical at high speeds.",
  },
  {
    question: "How much work is needed to accelerate an object to a certain velocity?",
    answer:
      "Work equals change in kinetic energy: <strong>W = ΔKE = 0.5m(v_f² − v_i²)</strong>. Example: accelerating a 50 kg person from rest (v_i = 0) to 10 m/s: W = 0.5 × 50 × (100 − 0) = 2500 J. Accelerating from 5 m/s to 10 m/s (same 50 kg person): W = 0.5 × 50 × (100 − 25) = 1875 J. The second acceleration requires less work because starting velocity is already high. Constant force over distance: <strong>W = F × d = m × a × d</strong>. Power (rate of work): <strong>P = W/t</strong>. Higher power means faster acceleration (doing work in less time). Understanding work and kinetic energy helps engineers design engines, brakes, and safety systems.",
  },
  {
    question: "How does kinetic energy relate to stopping distance?",
    answer:
      "Braking force removes kinetic energy: <strong>F_brake × d = 0.5mv²</strong> → <strong>d = mv² / (2F_brake)</strong>. Example: a 1500 kg car at 20 m/s with 5000 N braking force: d = 1500 × 400 / (2 × 5000) = 60 meters. Doubling velocity quadruples stopping distance (due to v²). Doubling braking force halves distance. This is why speed limits are critical for safety: a 10 m/s (22 mph) car stops in 15 meters; a 20 m/s (45 mph) car stops in 60 meters. Wet roads reduce braking force (lower friction), increasing stopping distance. Modern cars have anti-lock brakes and traction control to maximize braking force, reducing stopping distance. Reaction time adds additional distance before braking begins.",
  },
  {
    question: "What's the difference between kinetic and potential energy?",
    answer:
      "<strong>Kinetic energy (KE):</strong> energy of motion, <strong>KE = 0.5mv²</strong>. <strong>Potential energy (PE):</strong> stored energy due to position or configuration, <strong>PE = mgh</strong> (gravitational) or others. Example: a 2 kg ball at 10 m height has PE = 2 × 9.81 × 10 ≈ 196 J. When dropped, PE converts to KE. Just before impact: KE ≈ 196 J, v ≈ 14 m/s. At any height during fall, KE + PE = total mechanical energy (conserved). Understanding the interplay between KE and PE explains pendulums, roller coasters, and projectiles. Energy conservation simplifies problems: rather than tracking forces throughout motion, sum kinetic and potential to find final velocity.",
  },
];

export const MOMENTUM_FAQS: FAQ[] = [
  {
    question: "How is momentum calculated and why is it important?",
    answer:
      "Momentum is the 'oomph' of motion: <strong>p = m × v</strong>, where m is mass (kg) and v is velocity (m/s). Momentum is measured in kg⋅m/s. Example: a 1500 kg car at 20 m/s has p = 30,000 kg⋅m/s. A 100 kg person at 20 m/s has p = 2000 kg⋅m/s (less momentum despite same speed, due to lower mass). Momentum is a vector (direction matters). Changing momentum requires force: <strong>F = Δp/Δt</strong>. Momentum is conserved in collisions (no external forces). Understanding momentum predicts collision outcomes, explains why heavier vehicles cause more damage, and helps engineers design crumple zones. Airbags extend collision time, reducing force on occupants despite the same momentum change.",
  },
  {
    question: "What is conservation of momentum in collisions?",
    answer:
      "In an isolated collision, total momentum before equals total momentum after: <strong>p_before = p_after</strong>. Example: two 1000 kg cars, one at 10 m/s and one at rest. Before: p = 1000 × 10 + 1000 × 0 = 10,000 kg⋅m/s. After collision (assuming they stick): (2000) × v_final = 10,000 → v_final = 5 m/s. Kinetic energy is NOT conserved in inelastic collisions; some is converted to heat, sound, and deformation. In elastic collisions (ideal, rare), both momentum and kinetic energy are conserved. Momentum conservation applies regardless of collision severity, complexity, or materials. It's a fundamental law used to analyze everything from traffic accidents to particle physics.",
  },
  {
    question: "How do I calculate the final velocity after a collision?",
    answer:
      "Use conservation of momentum: <strong>(m1 × v1_initial) + (m2 × v2_initial) = (m1 × v1_final) + (m2 × v2_final)</strong>. For inelastic collisions (objects stick): <strong>(m1 × v1) + (m2 × v2) = (m1 + m2) × v_final</strong>. Example: a 1200 kg car at 15 m/s hits a 1800 kg car at rest. Final velocity: (1200 × 15) + (1800 × 0) = 3000 × v → v = 6 m/s. For elastic collisions (objects bounce), additional constraint (kinetic energy conservation) applies. Real collisions are partially inelastic (some energy lost, partial rebound). Police use momentum conservation to reconstruct accidents from final positions. Insurance adjusters use it to determine liability. Momentum conservation is one of physics' most reliable principles.",
  },
  {
    question: "What's the difference between momentum and force?",
    answer:
      "<strong>Momentum (p):</strong> product of mass and velocity (kg⋅m/s), describes how much 'motion' an object has. <strong>Force (F):</strong> push or pull (Newtons), causes change in momentum. Newton's second law connects them: <strong>F = dp/dt</strong> (force is the rate of momentum change). Example: a 100 kg person jumping off a 1 m ledge has velocity ≈ 4.4 m/s and momentum ≈ 440 kg⋅m/s. Landing on a concrete surface (collision time ≈ 0.01 s) requires force = 440 / 0.01 = 44,000 N (severe injury). Landing on a trampoline (collision time ≈ 0.5 s) requires force = 440 / 0.5 = 880 N (survivable). Same momentum change; vastly different forces due to collision time.",
  },
  {
    question: "How is impulse related to momentum change?",
    answer:
      "Impulse is force applied over time: <strong>Impulse = F × Δt = Δp</strong>. Example: a 0.5 kg baseball at 40 m/s (p = 20 kg⋅m/s) is caught in 0.1 seconds. Average force = 20 / 0.1 = 200 N. The same ball caught over 1 second (mitt extends collision) requires only 20 N average force. Applications: <strong>sports</strong> (bats, rackets extend contact time to accelerate objects), <strong>safety</strong> (airbags, crumple zones extend collision time to reduce injury-causing forces), <strong>rocketry</strong> (rockets apply impulse continuously to accelerate). Understanding impulse explains why extending collision time reduces peak force, a key principle in injury prevention and impact engineering.",
  },
];

export const POTENTIAL_ENERGY_FAQS: FAQ[] = [
  {
    question: "How is gravitational potential energy calculated?",
    answer:
      "Gravitational potential energy is energy due to height: <strong>PE = m × g × h</strong>, where m is mass (kg), g ≈ 9.81 m/s², and h is height (m) above a reference level. Energy is measured in Joules (J). Example: a 70 kg person at 10 m height has PE = 70 × 9.81 × 10 ≈ 6867 J. The reference level is arbitrary (often ground level, but can be chosen for convenience). Doubling height doubles PE; doubling mass doubles PE. When an object falls, PE converts to kinetic energy. At the reference height, PE = 0 (by definition). Potential energy is relative and depends on reference frame, unlike kinetic energy which is independent of reference frame.",
  },
  {
    question: "How does potential energy convert to kinetic energy during a fall?",
    answer:
      "As an object falls, PE decreases and KE increases; total mechanical energy is conserved: <strong>KE + PE = constant</strong>. Example: dropping a 2 kg ball from 20 m. Initial: PE = 2 × 9.81 × 20 ≈ 392 J, KE = 0, total = 392 J. At 10 m: PE = 196 J, KE = 196 J (velocity ≈ 14 m/s). At ground level: PE = 0, KE = 392 J (velocity ≈ 19.8 m/s). Using energy conservation avoids tracking forces and accelerations. The rate of conversion (speed of fall) depends on gravity and height, not mass (all objects fall at the same rate in a vacuum). This energy principle applies to all conservative forces (gravity, springs, electric).",
  },
  {
    question: "What is elastic potential energy in springs?",
    answer:
      "A compressed or stretched spring stores elastic potential energy: <strong>PE = 0.5 × k × x²</strong>, where k is spring constant (N/m) and x is displacement (m). Example: a spring with k = 100 N/m stretched 0.2 m has PE = 0.5 × 100 × 0.04 = 2 J. Doubling displacement quadruples PE (x² dependence). When released, this PE converts to kinetic energy of the attached mass. Applications: spring-loaded devices, shock absorbers, rubber bands, trampoline. Hooke's law relates force to displacement: <strong>F = kx</strong>. Stiffer springs (higher k) store more energy at the same displacement. Understanding elastic PE helps design cushioning systems, analyze oscillations, and predict energy transfer in collisions.",
  },
  {
    question: "What's the difference between potential and kinetic energy?",
    answer:
      "<strong>Potential energy (PE):</strong> stored energy due to position or configuration, <strong>PE = mgh</strong> (gravitational) or <strong>PE = 0.5kx²</strong> (elastic). <strong>Kinetic energy (KE):</strong> energy of motion, <strong>KE = 0.5mv²</strong>. Example: a ball held at height has PE but no KE. When dropped, PE converts to KE. At any point during free fall, the sum KE + PE remains constant (energy conservation). At the highest point of a bouncing ball, all energy is PE (v = 0). At the lowest point, all is KE (h = 0). Pendulums continuously interchange PE and KE. Understanding both and their interchange explains much of everyday physics from rollercoasters to planetary orbits.",
  },
  {
    question: "How much work is needed to lift an object to a certain height?",
    answer:
      "Work equals change in potential energy: <strong>W = ΔPE = m × g × h</strong>. Example: lifting a 50 kg box 2 m requires W = 50 × 9.81 × 2 ≈ 981 J. Work is independent of the path taken (only start and end heights matter). Lifting vertically, ramps, stairs, or elevators all require the same work (neglecting friction). Work depends on mass and height, not speed of lifting. Power (rate of work): <strong>P = W / t</strong>. Lifting the same box in 1 second requires 981 W of power; lifting in 10 seconds requires 98.1 W. Understanding work helps analyze exercise, transportation, and machinery efficiency. Mechanical advantage (ramps, pulleys) reduces required force at the cost of increased distance, but work remains constant.",
  },
];

export const PRESSURE_FAQS: FAQ[] = [
  {
    question: "How is pressure calculated and what units are used?",
    answer:
      "Pressure is force per unit area: <strong>P = F / A</strong>, where force is in Newtons (N) and area is in square meters (m²). Pressure is measured in Pascals (Pa): 1 Pa = 1 N/m². Example: a 1000 N force over 0.5 m² = 2000 Pa. Common units: 1 bar ≈ 100,000 Pa, 1 atm ≈ 101,325 Pa (sea-level air pressure), 1 psi ≈ 6895 Pa. Smaller area increases pressure (same force): a thin needle creates high pressure, distributing force over large area reduces pressure. Pressure always acts perpendicular to surfaces (never parallel). Understanding pressure explains why a person lying down exerts less pressure than standing (force distributed over larger area), and why high heels are uncomfortable (force concentrated on small heel area).",
  },
  {
    question: "How does pressure change with depth in a fluid?",
    answer:
      "Pressure increases linearly with depth: <strong>P = P_atmospheric + ρ × g × h</strong>, where ρ is fluid density (kg/m³), g ≈ 9.81 m/s², and h is depth (m). Example: water (ρ ≈ 1000 kg/m³) at 10 m depth: P = 101,325 + 1000 × 9.81 × 10 ≈ 199,425 Pa ≈ 2 atm. Pressure increases rapidly underwater (approximately 1 atm per 10 m). This explains why deep-sea creatures have thick skins and why diving to depth requires decompression. Submarines must withstand enormous crushing pressures. Fluid pressure acts equally in all directions, a principle used in hydraulics (incompressible fluids transmit force). Air pressure at sea level is about 101,325 Pa; this decreases exponentially with altitude.",
  },
  {
    question: "What's the relationship between pressure, force, and area?",
    answer:
      "Pressure is force distributed over area: <strong>P = F / A</strong> or <strong>F = P × A</strong>. Doubling force doubles pressure (same area). Halving area doubles pressure (same force). Example: hydraulic jack with 0.01 m² piston and 1000 Pa pressure exerts F = 1000 × 0.01 = 10 N. With 0.1 m² piston, same pressure exerts 100 N (10× more force from same pressure). Hydraulic systems exploit this: small input force on small area creates high pressure; high pressure on large output area produces large force, achieving mechanical advantage. This principle powers brakes, jacks, and heavy machinery. Understanding P = F/A helps design pressure vessels, safety equipment, and mechanical systems.",
  },
  {
    question: "What is atmospheric pressure and how does it affect us?",
    answer:
      "Atmospheric pressure at sea level is approximately 101,325 Pa or 1 atm, caused by the weight of air above pressing down. Example: an average person has ~2 m² of surface area; atmospheric pressure exerts about 200,000 N (~20 tons) of force, but we don't feel crushed because internal air pressure balances it. As altitude increases, atmospheric pressure decreases exponentially: at 10,000 m, pressure is ~0.26 atm. Low air pressure causes altitude sickness (insufficient oxygen). Barometers measure atmospheric pressure; rising pressure indicates good weather; falling pressure indicates storms. Pressure suits maintain internal pressure at high altitudes. Understanding atmospheric pressure explains why boiling points decrease with altitude (lower air pressure allows liquids to evaporate more easily).",
  },
  {
    question: "How do pressure gauges work and what do they measure?",
    answer:
      "Pressure gauges measure the difference between two pressures (absolute, gauge, or differential). <strong>Gauge pressure:</strong> difference from atmospheric pressure (common on car tires, 0 gauge pressure = 1 atm absolute). <strong>Absolute pressure:</strong> pressure above zero (vacuum); includes atmospheric. <strong>Differential pressure:</strong> difference between two pressures. Example: a tire gauge showing 32 psi is gauge pressure; absolute pressure = 32 + 14.7 ≈ 46.7 psi. Most everyday gauges measure gauge pressure. Understanding the type matters: a gauge pressure of 0 means atmospheric pressure (tire is flat), not zero absolute pressure. Manometers (liquid-filled tubes) measure pressure via fluid height. Digital gauges use sensors (strain gauges) that deform under pressure. Proper interpretation prevents misunderstandings in tire pressure, blood pressure, and hydraulic systems.",
  },
];

export const PROJECTILE_MOTION_FAQS: FAQ[] = [
  {
    question: "How does projectile motion work and what are its key components?",
    answer:
      "Projectile motion combines horizontal motion (constant velocity, no force) and vertical motion (constant acceleration due to gravity). Horizontal: <strong>x = v_x × t</strong>. Vertical: <strong>y = v_y × t + 0.5 × g × t²</strong>, where v_x and v_y are initial velocity components, g ≈ 9.81 m/s². Example: launching at 20 m/s at 45° (v_x = v_y ≈ 14.1 m/s). At t = 1 s: x ≈ 14.1 m, y ≈ 14.1 − 4.9 ≈ 9.2 m. The trajectory is parabolic. Time to maximum height: <strong>t_peak = v_y / g</strong>. Range: <strong>R = v² sin(2θ) / g</strong>. Maximum range occurs at 45°. Understanding projectile motion explains sports (basketball, baseball), ballistics, and fireworks.",
  },
  {
    question: "What's the maximum range and height for projectile motion?",
    answer:
      "For a projectile launched at angle θ with speed v: <strong>Max Height = v² sin²(θ) / (2g)</strong>, <strong>Range = v² sin(2θ) / g</strong>. Example: v = 20 m/s, θ = 45°: height = 400 × 0.5 / 19.62 ≈ 10.2 m, range = 400 × 1 / 9.81 ≈ 40.8 m. Maximum range occurs at 45°; 30° and 60° give the same range. Doubling initial velocity quadruples range and height (v² dependence). Longer maximum height and range are achieved at 45° (balancing horizontal and vertical components). Lower angles (flatter trajectory) increase range but reduce height; higher angles increase height but reduce range. Understanding these relationships helps predict projectile behavior in sports and engineering.",
  },
  {
    question: "How does air resistance affect projectile motion?",
    answer:
      "Air resistance is a force opposing motion that increases with velocity. <strong>Without air resistance:</strong> symmetric trajectory, longer range, higher maximum height, constant horizontal velocity. <strong>With air resistance:</strong> trajectory is asymmetric (steeper descending), shorter range, lower height, decelerating horizontal velocity. Example: a baseball in vacuum would travel ~180 meters; with air resistance, it travels ~130 meters. Air resistance depends on velocity (linear at low speeds, quadratic at high speeds), object shape, and air density. Baseballs, golf balls, and shuttlecocks are designed to minimize drag through surface texture. For calculations, air resistance is often neglected if speeds are low (<10 m/s) or distances are short. Real-world ballistics must account for air resistance, wind, and Coriolis effects.",
  },
  {
    question: "What angle produces the longest range in projectile motion?",
    answer:
      "For a level surface (launch and landing height equal), <strong>maximum range occurs at 45°</strong>. Formula: <strong>Range = v² sin(2θ) / g</strong>. At 45°, sin(90°) = 1 (maximum). Example: launching at 30 m/s: range is 30² / 9.81 ≈ 91.7 m at 45°. At 30°: range = 900 × sin(60°) / 9.81 ≈ 79.4 m. At 60°: range = 900 × sin(120°) / 9.81 ≈ 79.4 m (same as 30°; complementary angles give equal ranges). For maximum height, use steeper angles (closer to 90°). For maximum range on level ground, always use 45° (assuming no air resistance). In sports, projectiles are often launched above head height, slightly changing optimal angles. Artillery and firearms optimize angles for range and hitting specific targets.",
  },
  {
    question: "How do I calculate the time of flight for a projectile?",
    answer:
      "Time of flight depends on landing height relative to launch. For level ground (landing at same height as launch): <strong>t = 2 × v_y / g = 2 × v × sin(θ) / g</strong>. Example: launching at 20 m/s at 45° (v_y ≈ 14.1 m/s): t = 2 × 14.1 / 9.81 ≈ 2.88 seconds. For landing at different heights: use <strong>y = v_y × t + 0.5 × g × t²</strong> and solve for t using the quadratic formula. A projectile reaches maximum height at <strong>t_peak = v_y / g</strong> (half of total flight time for level ground). Flight time increases with initial vertical velocity and launch angle (vertical component). Doubling launch height approximately increases flight time by factor of √2 (not double), due to the quadratic acceleration term.",
  },
];

export const TORQUE_FAQS: FAQ[] = [
  {
    question: "How is torque calculated and what does it represent?",
    answer:
      "Torque is rotational force: <strong>τ = r × F × sin(θ)</strong>, where r is distance from pivot (m), F is force (N), and θ is angle between r and F. Torque is measured in Newton-meters (N⋅m). For perpendicular force (θ = 90°): <strong>τ = r × F</strong>. Example: applying 50 N perpendicular to a 0.3 m wrench: τ = 0.3 × 50 = 15 N⋅m. Torque is a vector (direction given by right-hand rule). Increasing distance or force increases torque. Torque is what causes rotation; greater torque produces faster angular acceleration. Similar to how force (F = ma) causes linear acceleration, torque (τ = Iα) causes angular acceleration, where I is moment of inertia.",
  },
  {
    question: "What's the relationship between torque and angular acceleration?",
    answer:
      "Newton's second law for rotation: <strong>τ = I × α</strong>, where I is moment of inertia (kg⋅m²) and α is angular acceleration (rad/s²). Example: a disk with I = 2 kg⋅m² and τ = 10 N⋅m experiences α = 10/2 = 5 rad/s². Doubling torque doubles angular acceleration (same moment of inertia). Moment of inertia is like mass for rotation — greater I requires more torque to achieve same angular acceleration. For a point mass at distance r from axis: <strong>I = m × r²</strong>. Extended objects have larger I than point masses (mass distributed farther from axis). Understanding τ = Iα helps analyze spinning machinery, vehicle wheels, and rotating machinery design.",
  },
  {
    question: "How do I use the lever principle to gain mechanical advantage?",
    answer:
      "A lever multiplies force via torque balance. At equilibrium: <strong>F_in × d_in = F_out × d_out</strong>, where d is distance from pivot. Example: a 1 m lever with pivot at 0.2 m from the load end: input at 0.8 m from pivot, load at 0.2 m. Mechanical advantage = 0.8 / 0.2 = 4. A 100 N input force produces 400 N output force. Trade-off: greater distance moved at input than output. All levers, pry bars, seesaws, and crowbars operate on this principle. First-class levers (pivot in middle, like seesaws) multiply force. Second-class levers (load in middle, like wheelbarrows) multiply force even more. Third-class levers (effort in middle, like tweezers) reduce force but increase speed. Understanding lever principle helps design tools, machinery, and understand animal biomechanics.",
  },
  {
    question: "What is the difference between torque and force?",
    answer:
      "<strong>Force (F):</strong> push or pull (Newtons), causes linear acceleration (F = ma). <strong>Torque (τ):</strong> rotational effect (Newton-meters), causes angular acceleration (τ = Iα). Force alone doesn't cause rotation; torque does. Example: pushing at the edge of a door (large r, creates torque and opens it) versus pushing at the pivot hinge (small r, little torque, door barely opens). Same force, different torque. Both are vectors; direction matters. Force direction and position relative to pivot determine torque. Many systems involve both: car wheels experience force (acceleration) and torque (spinning). Engine produces torque; wheels convert that to force on the road. Understanding both force and torque is essential for mechanics, engineering, and physics.",
  },
  {
    question: "How do moment of inertia and torque relate to rotational dynamics?",
    answer:
      "Moment of inertia (I) is rotational mass — the resistance to angular acceleration. <strong>τ = Iα</strong> is the rotational analog of <strong>F = ma</strong>. Large I requires large torque for same acceleration. For a point mass: <strong>I = m × r²</strong>; doubling distance quadruples I (r² dependence). For extended objects, I depends on mass distribution: concentrated near the axis (small I) spins easily; distributed far from axis (large I) resists spinning. Example: spinning a baton end (large I) versus center (small I) — requires different torques. In machinery, flywheels have large I to store rotational energy and stabilize speed. Angular momentum is <strong>L = I × ω</strong>; conserved when torque = 0. Understanding I and torque helps analyze everything from ice skaters (changing I by arm position) to vehicle dynamics (wheel balance and moment of inertia).",
  },
];
