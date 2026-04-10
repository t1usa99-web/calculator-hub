// Physics advanced calculators FAQ content
// Waves, Electricity & Magnetism, Thermodynamics, Modern Physics
// 20 calculators × 5 FAQs each = 100 FAQs total

import type { FAQ } from "./calculator-registry";

// WAVES (5 calculators)

export const WAVELENGTH_FAQS: FAQ[] = [
  {
    question: "What is the relationship between wavelength, frequency, and wave speed?",
    answer:
      "Wavelength, frequency, and wave speed are related by the fundamental wave equation: <strong>v = λf</strong>, where v is wave speed, λ (lambda) is wavelength, and f is frequency. This means wavelength is inversely proportional to frequency — as frequency increases, wavelength decreases. For example, visible light with frequency 5×10¹⁴ Hz in a vacuum travels at 3×10⁸ m/s, producing a wavelength of 600 nm (red light). The same relationship applies to all wave types: sound, water, electromagnetic, and seismic waves. Understanding this relationship is essential for optics, acoustics, and radio engineering.",
  },
  {
    question: "How do wavelengths differ for visible light, UV, and infrared?",
    answer:
      "The electromagnetic spectrum divides into regions by wavelength. <strong>Visible light</strong> ranges from 380 nm (violet) to 750 nm (red). <strong>Ultraviolet (UV)</strong> light has wavelengths shorter than 380 nm — UVA (315–380 nm) causes tanning, UVB (280–315 nm) causes sunburn, and UVC (below 280 nm) is germicidal but blocked by the ozone layer. <strong>Infrared (IR)</strong> light spans 750 nm to 1 mm, felt as heat. Thermal cameras detect IR around 8–14 μm. Radio waves extend to meters and kilometers. The shorter the wavelength, the higher the energy and the more penetrating the radiation.",
  },
  {
    question: "Can wavelength change when light moves between different materials?",
    answer:
      "Yes. When light enters a denser medium (like glass or water), its speed decreases, causing its wavelength to shorten — but frequency remains constant. This is why light bends (refracts) at material boundaries. For example, light with frequency 5×10¹⁴ Hz has wavelength 600 nm in vacuum but only ~450 nm in water (refractive index 1.33). The frequency never changes; the speed does. This principle explains why objects underwater appear magnified and why prisms separate white light into colors — different wavelengths refract at slightly different angles.",
  },
  {
    question: "How is wavelength measured for different types of waves?",
    answer:
      "For <strong>electromagnetic waves</strong> (light), wavelength is measured directly using spectrometers or diffraction gratings. For <strong>sound waves</strong>, wavelength is calculated from frequency and speed of sound in the medium (e.g., 343 m/s in air at 20°C). For <strong>water waves</strong>, you measure the distance between consecutive crests or troughs. For <strong>seismic waves</strong>, arrays of sensors detect wave arrival times to calculate wavelength and propagation speed. For quantum particles (electrons, photons), wavelength is calculated using de Broglie's relation: λ = h/p, where h is Planck's constant and p is momentum.",
  },
  {
    question: "What causes diffraction and how does wavelength affect it?",
    answer:
      "Diffraction is the bending of waves around obstacles and through openings. When a wave passes through a slit or around an edge, it spreads out because each point becomes a source of secondary wavelets (Huygens' principle). Longer wavelengths diffract more noticeably than shorter ones. This is why you hear low-frequency sounds (long wavelength) around corners better than high-frequency sounds, and why radio antennas for long-wave broadcasts are larger than those for short-wave. Single-slit diffraction creates a diffraction pattern where the central bright spot width is inversely proportional to wavelength.",
  },
];

export const FREQUENCY_FAQS: FAQ[] = [
  {
    question: "What is frequency and how is it measured?",
    answer:
      "Frequency is the number of complete wave cycles per unit time, measured in hertz (Hz), where 1 Hz = 1 cycle per second. For example, a 60 Hz AC power signal completes 60 cycles per second. Audible sound ranges from ~20 Hz (bass) to ~20,000 Hz (treble). Radio frequencies span kilohertz (kHz), megahertz (MHz), and gigahertz (GHz) ranges. Frequency is related to energy — higher frequency waves carry more energy per photon. Visible light has frequencies around 4–8 × 10¹⁴ Hz, while microwave ovens operate at ~2.45 GHz. Frequency is inverse to period (T = 1/f), which is the time for one complete cycle.",
  },
  {
    question: "How do human ears perceive different frequencies?",
    answer:
      "The human ear detects frequencies between ~20 Hz and 20,000 Hz, though this range narrows with age. <strong>Bass frequencies</strong> (20–250 Hz) are felt as vibrations and provide depth to music. <strong>Midrange frequencies</strong> (250 Hz–4 kHz) contain most speech information and are where ears are most sensitive. <strong>Treble frequencies</strong> (4–20 kHz) carry details and brightness. Hearing loss typically starts with high frequencies, which is why elderly people struggle with consonants in speech. Dogs hear up to 40 kHz, and bats use echolocation at 20–200 kHz. Equal loudness curves show that ears don't perceive all frequencies as equally loud at the same sound pressure level.",
  },
  {
    question: "What is the relationship between frequency and energy in waves?",
    answer:
      "The energy of a wave is proportional to its frequency: <strong>E = hf</strong>, where E is energy, h is Planck's constant (6.626 × 10⁻³⁴ J·s), and f is frequency. This relation is fundamental in quantum mechanics. For electromagnetic waves, doubling the frequency doubles the photon energy. Ultraviolet light (high frequency) damages DNA, while radio waves (low frequency) pass through without ionizing. For mechanical waves like sound, intensity (energy per unit area per unit time) is proportional to the square of frequency. This is why ultrasound (high frequency) penetrates tissue differently than infrasound (low frequency).",
  },
  {
    question: "How can frequency be measured practically?",
    answer:
      "Frequency measurement depends on the wave type. For <strong>AC signals</strong>, multimeters measure frequency directly. For <strong>sound</strong>, frequency analyzers or smartphone apps use microphones to measure pitch. For <strong>light</strong>, spectrometers measure wavelength and convert to frequency using c = λf. For <strong>radio signals</strong>, spectrum analyzers measure frequency across a range. For <strong>mechanical vibrations</strong>, accelerometers measure acceleration and Fourier analysis extracts frequency components. Modern digital oscilloscopes can measure frequencies from Hz to GHz. For periodic phenomena, frequency can also be determined by counting events (beats, pulses) over a known time interval.",
  },
  {
    question: "Why do we use frequency instead of just wavelength?",
    answer:
      "Frequency is independent of the medium, while wavelength changes when a wave enters different materials. This makes frequency the fundamental property. In vacuum, light has a fixed speed (c), so wavelength and frequency are linked. But in water or glass, the same frequency light has a different wavelength. Using frequency avoids confusion. Additionally, energy depends directly on frequency (E = hf), not wavelength. For quantum mechanics, frequency is the natural variable. In electrical engineering, AC frequency (50 Hz in Europe, 60 Hz in North America) is universal. Frequency is simply the more fundamental and universal measure across all domains.",
  },
];

export const WAVE_SPEED_FAQS: FAQ[] = [
  {
    question: "How does wave speed depend on the medium?",
    answer:
      "Wave speed varies dramatically between media due to differences in density and elastic properties. <strong>Sound speed</strong> is ~343 m/s in air at 20°C, but ~1,480 m/s in water (4.3× faster) and ~5,960 m/s in steel (17× faster). The denser and more rigid the medium, the faster sound travels because molecules are tightly coupled. <strong>Light speed</strong> is 3×10⁸ m/s in vacuum (constant), but slows in media with refractive index n > 1 — in water (n=1.33), light travels at 2.25×10⁸ m/s; in glass (n≈1.5), it's 2×10⁸ m/s. This is why swimming pools appear shallower than they are. <strong>Water wave speed</strong> depends on depth and wavelength, not the medium change.",
  },
  {
    question: "What is the formula for wave speed and how is it derived?",
    answer:
      "The fundamental wave equation is: <strong>v = λf</strong>, where v is speed, λ is wavelength, and f is frequency. This comes from dimensional analysis: distance per unit time equals distance per cycle times cycles per unit time. For elastic waves in solids, wave speed depends on material properties: <strong>v = √(E/ρ)</strong>, where E is the elastic modulus and ρ is density. For sound in a gas: <strong>v = √(γRT/M)</strong>, where γ is the heat capacity ratio, R is the gas constant, T is temperature, and M is molar mass. For water waves in deep water: <strong>v = √(gλ/2π)</strong>, where g is gravitational acceleration.",
  },
  {
    question: "Why does sound travel faster in solids than in air?",
    answer:
      "Sound propagates by molecular collisions — molecules vibrate and bump into neighbors, transferring energy. In solids, atoms are packed closely and bonded tightly, creating efficient energy transfer. In air, molecules are far apart and move freely, making collisions less effective. Quantitatively, sound speed <strong>v = √(E/ρ)</strong> increases with elastic modulus E (stiffness) and decreases with density ρ. Solids like steel have enormous E (stiffness) that overcomes their density, yielding ~17× faster sound than air. This is why you hear approaching trains through the rails before hearing them through air, and why placing your ear on a wall transmits sound from adjacent rooms better than air alone.",
  },
  {
    question: "How does temperature affect wave speed?",
    answer:
      "Temperature profoundly affects wave speed, especially for sound. In gases, sound speed depends on temperature: <strong>v ∝ √T</strong>. At 0°C, sound travels 331 m/s in air; at 20°C, it's 343 m/s; at 40°C, it's 354 m/s. A 20°C increase raises sound speed by only ~3%, but this affects timing-based applications like echolocation and ultrasound imaging. In water, sound speed increases slightly with temperature but more with salinity. In solids, thermal expansion changes elastic properties, altering speed slightly. For electromagnetic waves in vacuum, speed is always c = 3×10⁸ m/s, independent of temperature. This temperature dependence is exploited in thermometers and thermal gradient detection.",
  },
  {
    question: "What is dispersion and how does it affect wave propagation?",
    answer:
      "Dispersion occurs when different frequencies (or wavelengths) travel at different speeds in a medium, causing a wave packet to spread out over time. In normal dispersion, higher frequencies travel slower; in anomalous dispersion, they travel faster. <strong>Material dispersion</strong> in optics causes white light passing through glass to separate into colors — red light travels slightly faster than blue light. This is why prisms create rainbows and why optical fibers introduce chromatic aberration in telecommunications. In water, wave speed depends on wavelength — long ocean swells travel faster than short ripples. This explains why tsunamis travel thousands of kilometers but storm-generated swells eventually separate by wavelength, with long-period waves arriving first.",
  },
];

export const DOPPLER_EFFECT_FAQS: FAQ[] = [
  {
    question: "What is the Doppler Effect and why do we observe it?",
    answer:
      "The Doppler Effect is the apparent change in frequency (and wavelength) of a wave when the source or observer moves. When a source moves toward an observer, successive wave crests are compressed into a shorter distance, increasing frequency and pitch. When moving away, crests spread out, decreasing frequency and pitch. A siren approaching at high speed sounds higher-pitched until it passes, then lower-pitched receding. The frequency heard is: <strong>f' = f × (v ± v_observer) / (v ∓ v_source)</strong>, where v is wave speed. Mathematically, frequency increases when relative distance decreases and vice versa. This applies to all waves: sound, light (via redshift/blueshift), and water waves.",
  },
  {
    question: "How is the Doppler Effect used in radar and speed detection?",
    answer:
      "Police radar guns exploit the Doppler Effect to measure vehicle speed. A radar emits radio waves (frequency ~35 GHz); when bouncing off a moving car, the reflected frequency shifts. The radar calculates the shift to determine speed. A car approaching at 100 km/h (27.8 m/s) shifts the reflected frequency by ~3.3 kHz. Ultrasonic motion sensors use similar principles for burglar alarms and hand-free faucets. Medical ultrasound uses Doppler to measure blood flow velocity in arteries and veins — faster flow produces larger frequency shifts. Astronomical observations use spectroscopic redshift to measure recession velocities of galaxies, confirming the expanding universe. Weather radar determines wind speeds in storms.",
  },
  {
    question: "How does the Doppler Effect apply to light (redshift and blueshift)?",
    answer:
      "For light, the Doppler Effect produces redshift or blueshift. <strong>Redshift</strong> occurs when a light source moves away, shifting light toward longer wavelengths (red end of spectrum). <strong>Blueshift</strong> occurs when approaching, shifting toward shorter wavelengths (blue end). For non-relativistic speeds, the frequency shift is: <strong>Δf/f = v/c</strong>, where v is relative velocity and c is light speed. Astronomers use this to measure galactic motion — distant galaxies are redshifted, indicating recession. The Andromeda Galaxy is blueshifted because it's approaching the Milky Way. For relativistic speeds (near light speed), the relativistic Doppler formula must be used, which includes time dilation effects.",
  },
  {
    question: "What is the mathematical formula for the Doppler Effect?",
    answer:
      "For sound waves, the <strong>observed frequency</strong> is: <strong>f' = f × (v + v_observer) / (v - v_source)</strong>, where f is emitted frequency, v is sound speed, v_observer is observer velocity (positive if moving toward source), and v_source is source velocity (positive if moving away from observer). For a stationary observer and approaching source: <strong>f' = f × v / (v - v_source)</strong>. For a stationary source and approaching observer: <strong>f' = f × (v + v_observer) / v</strong>. Example: siren at 1,000 Hz approaching at 34 m/s in air (v=343 m/s) produces: f' = 1,000 × 343 / (343 - 34) ≈ 1,111 Hz (11% higher). After passing, source moving away: f' = 1,000 × 343 / (343 + 34) ≈ 910 Hz.",
  },
  {
    question: "Why does the Doppler Effect matter in everyday life?",
    answer:
      "The Doppler Effect appears constantly in everyday experience. Ambulance and police sirens change pitch as they pass. Train whistles lower in pitch as trains depart. This affects how we perceive approaching vs. receding danger, helping our reflexes. In medicine, Doppler ultrasound detects fetal heartbeats through tissue and measures blood flow to diagnose clots or narrowed arteries. In astronomy, spectroscopic redshift revealed the universe's expansion, earning Hubble the understanding that galaxies recede from us. Doppler radar forecasts severe weather by measuring rainfall motion. Sonar in submarines and fishing uses Doppler to detect moving objects. Understanding Doppler is essential for emergency responders, pilots (altitude awareness), and maritime navigation. Even sports radar guns (pitch speeds in baseball) use Doppler principles.",
  },
];

export const SOUND_INTENSITY_FAQS: FAQ[] = [
  {
    question: "What is sound intensity and how is it measured?",
    answer:
      "Sound intensity is the acoustic power per unit area, measured in watts per square meter (W/m²). The <strong>decibel (dB)</strong> scale compresses this enormous range (from 10⁻¹² W/m² — threshold of hearing — to 10 W/m² — hearing damage) into a more manageable logarithmic scale: <strong>L = 10 log₁₀(I/I₀)</strong>, where I₀ = 10⁻¹² W/m² is the reference intensity. A whisper is ~30 dB, normal conversation ~60 dB, a jet engine ~140 dB. The decibel scale is logarithmic: each 10 dB increase represents 10× more power. A 120 dB sound is one trillion times more intense than the hearing threshold. Prolonged exposure above 85 dB causes hearing damage.",
  },
  {
    question: "How does distance affect sound intensity?",
    answer:
      "Sound spreads outward in a sphere, so intensity decreases with the square of distance: <strong>I ∝ 1/r²</strong>. If you double your distance from a speaker, intensity drops to one-quarter. More precisely, the sound pressure level decreases by 6 dB for each doubling of distance (in the far field, free space). For example, a speaker producing 100 dB at 1 meter produces 94 dB at 2 meters, 88 dB at 4 meters, and 82 dB at 8 meters. This inverse-square law applies in outdoor spaces and concert halls. In enclosed rooms, reflections from walls can complicate this relationship. This is why concerts feel louder near the stage and why distance is the most effective hearing protection strategy.",
  },
  {
    question: "What is the difference between sound intensity and loudness?",
    answer:
      "<strong>Intensity</strong> is an objective physical measure (W/m²) of acoustic power. <strong>Loudness</strong> is subjective perception, dependent on ear sensitivity and frequency. Equal-loudness curves show that human ears are most sensitive to mid-range frequencies (2–4 kHz) and less sensitive to very low and very high frequencies. A 1 kHz tone at 60 dB sounds equally loud as an 8 kHz tone at ~65 dB, even though intensity differs. A-weighting adjusts decibel measurements to match human hearing sensitivity, which is why 'dB(A)' is commonly cited in noise regulations. This is relevant for concert venues and industrial hearing protection — a 95 dB tone at 100 Hz might sound quieter than a 95 dB tone at 1 kHz due to frequency-dependent loudness.",
  },
  {
    question: "How is sound intensity related to amplitude and frequency?",
    answer:
      "For a sound wave, intensity is proportional to the square of amplitude and the square of frequency: <strong>I ∝ A² × f²</strong>. Doubling amplitude increases intensity 4-fold; doubling frequency increases it 4-fold. This is why high-frequency sounds feel more intense than low-frequency sounds at the same amplitude. The exact formula for a plane wave is: <strong>I = ½ρvωA²</strong>, where ρ is medium density, v is wave speed, ω is angular frequency, and A is amplitude. Example: a 1 kHz tone with 1 mm amplitude in air has much higher intensity than a 100 Hz tone with 1 mm amplitude. This explains why ultrasound can concentrate energy into small volumes (for imaging and therapy) despite being inaudible.",
  },
  {
    question: "What are safe sound exposure levels and hearing damage thresholds?",
    answer:
      "The human ear is remarkably sensitive but vulnerable. <strong>Safe levels:</strong> Up to 85 dB for continuous exposure; 70 dB is safe indefinitely. <strong>Noise-induced hearing loss (NIHL):</strong> Exposure above 85 dB causes cumulative damage — 8 hours at 90 dB is equivalent to 1 hour at 100 dB. <strong>Immediate damage:</strong> Sounds above 120 dB cause pain; above 140 dB causes permanent damage instantly. <strong>Occupational limits:</strong> OSHA (US) limits workers to 90 dB for 8 hours. Rock concerts (110–120 dB) and nightclubs (100–105 dB) cause hearing damage without ear protection. <strong>Prevention:</strong> Use earplugs (reduce by 15–30 dB), limit duration, and take quiet breaks. Damage is cumulative and permanent — once hair cells in the cochlea are destroyed, they don't regenerate.",
  },
];

// ELECTRICITY & MAGNETISM (6 calculators)

export const OHMS_LAW_FAQS: FAQ[] = [
  {
    question: "What is Ohm's Law and why is it fundamental?",
    answer:
      "Ohm's Law states the relationship between voltage, current, and resistance: <strong>V = IR</strong>, where V is voltage (volts), I is current (amperes), and R is resistance (ohms, Ω). This relationship describes how much current flows through a conductor when a voltage is applied — higher voltage increases current, higher resistance decreases current. Georg Ohm discovered this empirically in 1827; it's foundational in circuit analysis. Most everyday materials are 'ohmic' — they obey this linear relationship over normal ranges. Non-ohmic materials (like light bulb filaments, diodes, transistors) have resistance that changes with voltage or current. Understanding Ohm's Law is essential for circuit design, electrical safety, and troubleshooting power delivery systems.",
  },
  {
    question: "How can Ohm's Law be rearranged to solve different problems?",
    answer:
      "Ohm's Law <strong>V = IR</strong> has three rearrangements. <strong>To find current:</strong> I = V/R. Example: a 12 V battery through a 4 Ω resistor produces I = 12/4 = 3 A. <strong>To find resistance:</strong> R = V/I. Example: measuring 2 A through a component at 10 V means R = 10/2 = 5 Ω. <strong>To find voltage:</strong> V = IR. Example: 5 A through a 3 Ω resistor requires V = 5 × 3 = 15 V. These rearrangements are identical mathematically but organize the calculation depending on which quantity is unknown. Many practical problems (sizing wires, selecting resistors, sizing power supplies) use one of these forms. A memory trick: the 'Ohm's Law triangle' visualizes the three relationships.",
  },
  {
    question: "What are real-world examples of Ohm's Law in action?",
    answer:
      "Household lighting: a 60 W incandescent bulb at 120 V draws 60/120 = 0.5 A (by P = VI). Electric heaters deliberately use resistance to generate heat — an 1,500 W heater at 120 V draws 12.5 A. USB charging: a 5 V charger with 1 A output delivers 5 W. Industrial motors: reducing voltage proportionally reduces current, which is why voltage regulators stabilize grid voltage to prevent excessive current draw. Automotive: a 12 V car battery delivering 100 A to a starter motor corresponds to 0.12 Ω effective resistance (R = V/I = 12/100). Medical: pacemakers use Ohm's Law to deliver precise currents to the heart. Electric vehicle charging: DC fast chargers use Ohm's Law to manage high currents (up to 350 A) at appropriate voltages (400–1000 V).",
  },
  {
    question: "How does resistance vary and why do different materials have different values?",
    answer:
      "Resistance depends on material composition and geometry: <strong>R = ρL/A</strong>, where ρ (rho) is resistivity, L is length, and A is cross-sectional area. <strong>Resistivity ρ</strong> varies enormously: copper (electrical conductor) ≈ 1.7 × 10⁻⁸ Ω·m; silicon (semiconductor) ≈ 2.3 × 10³ Ω·m; rubber (insulator) ≈ 10¹⁵ Ω·m. Conductors have many free electrons; insulators have almost none. Temperature affects resistivity — for metals, resistivity increases with temperature because atomic vibrations scatter electrons. Longer wires have more resistance (L increases R); thicker wires have less (A increases, R decreases). This is why power lines use thick copper and houses use appropriately-sized wiring.",
  },
  {
    question: "What are the limits of Ohm's Law and when does it fail?",
    answer:
      "Ohm's Law assumes <strong>linear, temperature-independent resistance</strong>, which works for most conductors over normal ranges. However, it fails or requires modification in several cases: <strong>Semiconductors:</strong> Diodes and transistors are highly nonlinear — resistance depends strongly on voltage. <strong>Temperature changes:</strong> Resistance varies with temperature; at cryogenic temperatures, superconductors have zero resistance. <strong>AC circuits:</strong> At high frequencies, capacitance and inductance (which don't dissipate energy like resistance) complicate the relationship — this requires impedance analysis (Z = V/I) instead. <strong>Extreme fields:</strong> Breakdown voltages cause arcing (gas ionization) when fields exceed ~3 MV/m. <strong>Nonlinear loads:</strong> LED lights, modern power supplies, and motor drives have nonlinear I-V characteristics. For these cases, circuits require more sophisticated analysis using Kirchhoff's laws and element-specific models.",
  },
];

export const ELECTRIC_POWER_FAQS: FAQ[] = [
  {
    question: "What is electric power and how is it calculated?",
    answer:
      "Electric power is the rate of energy transfer, measured in watts (W). The fundamental formula is: <strong>P = VI</strong>, where P is power (watts), V is voltage (volts), and I is current (amperes). Using Ohm's Law (V = IR), this can be rewritten as: <strong>P = I²R</strong> or <strong>P = V²/R</strong>. Example: a 100 W light bulb at 120 V draws 100/120 ≈ 0.83 A. Over 1 hour, it consumes 100 Wh (watt-hours) or 0.1 kWh (kilowatt-hours). In AC circuits, real power is <strong>P = VI cos(φ)</strong>, where cos(φ) is the power factor (typically 0.85–0.95 for industrial loads). The power factor accounts for reactance from capacitors and inductors, which store but don't dissipate energy. Understanding power is essential for energy bills, load management, and equipment sizing.",
  },
  {
    question: "How does power relate to resistance and what are the implications?",
    answer:
      "Using <strong>P = I²R</strong>, we see that power dissipated in a resistor grows with the square of current. This has critical implications: (1) <strong>Heating:</strong> Resistors dissipate power as heat — this is exploited in heaters and ovens but unwanted in power transmission. (2) <strong>Wire sizing:</strong> Thick wires have low resistance, minimizing losses. A 1,000 A current through a thin wire (high R) wastes tremendous power as heat. (3) <strong>Transmission:</strong> Power companies use high voltage to reduce current at a given power level (P = VI), minimizing I²R losses. (4) <strong>Safety:</strong> High current through skin resistance causes burns. Example: 1 A through 100 Ω dissipates 100 W; 10 A through 1 Ω also dissipates 100 W, but the second scenario may cause arcing and fire hazard.",
  },
  {
    question: "What is reactive power and power factor?",
    answer:
      "In AC circuits, power has two components. <strong>Real power (P)</strong> measured in watts is actually dissipated (heating, mechanical work). <strong>Reactive power (Q)</strong> measured in volt-amperes reactive (VAR) is stored and returned by capacitors and inductors. The <strong>power factor</strong> is the ratio of real to apparent power: <strong>PF = cos(φ) = P/S</strong>, where S is apparent power (VI) and φ is the phase angle. Example: a motor with S = 1,000 VA, P = 800 W has PF = 0.8, meaning 20% of the apparent power is reactive. Industrial facilities with low power factors (due to motors and transformers) face higher utility bills because the utility must supply extra current for the reactive component. Power factor correction using capacitors improves efficiency and reduces costs.",
  },
  {
    question: "How is energy consumption calculated and what do kWh mean?",
    answer:
      "Energy is power integrated over time: <strong>Energy = Power × Time</strong> measured in joules (1 W × 1 s = 1 J). For practical use, <strong>kilowatt-hour (kWh)</strong> is common: 1 kWh = 1,000 W × 3,600 seconds = 3.6 million joules (3.6 MJ). An appliance rated 1,000 W running for 1 hour consumes 1 kWh. A 100 W bulb running 10 hours consumes 1 kWh. Utility bills charge per kWh — typically $0.10–0.20/kWh in the US. Example: a house using 1,000 kWh/month at $0.12/kWh costs $120. Energy efficiency comes from reducing power (smaller appliances, LEDs) or reducing runtime (better insulation, smart thermostats). A 40 W LED bulb replaces a 100 W incandescent, saving 60 W × 24 hours × 365 days ≈ 525 kWh annually.",
  },
  {
    question: "How do power ratings and safe operating ranges apply in practice?",
    answer:
      "Every electrical device has a rated power, voltage, and current beyond which it fails, heats, or burns. <strong>Power ratings:</strong> A 60 W bulb shouldn't exceed 60 W continuous operation. <strong>Voltage ratings:</strong> A 120 V device shouldn't be supplied with 240 V (would overheat and fail). <strong>Current ratings:</strong> Wiring has ampacity — a 15 A circuit breaker protects a 15 A maximum. Exceeding ratings causes fires and equipment damage. Thermal management is critical — large inductors and resistors require heat sinks or cooling. Power supplies have continuous and surge ratings (short bursts can exceed continuous ratings). Proper circuit design ensures components operate within their safe ranges. Example: a USB charger rated 5V/2A delivers up to 10 W; using it to charge high-current devices beyond 2 A risks burnout.",
  },
];

export const RESISTOR_FAQS: FAQ[] = [
  {
    question: "What are resistors and how do they work?",
    answer:
      "Resistors are components that oppose the flow of electrical current, converting electrical energy to heat. When electrons move through a resistor, they collide with atoms, losing energy as thermal vibrations. All materials have resistance, but dedicated resistors are designed with specific resistance values. Resistors are characterized by their <strong>resistance (R)</strong> measured in ohms (Ω), <strong>tolerance</strong> (accuracy, typically ±5% or ±1%), and <strong>power rating</strong> (maximum power dissipation). Common types include: carbon film (cheap, noisy), metal film (precise, low noise), wirewound (high precision, high power), and thin film (very precise, high frequency). Resistors obey Ohm's Law over their operating range. They're fundamental building blocks in circuits for limiting current, creating voltage dividers, and biasing transistors.",
  },
  {
    question: "How are resistors combined in series and parallel?",
    answer:
      "In <strong>series</strong>, resistors are connected end-to-end, and total resistance is the sum: <strong>R_total = R₁ + R₂ + R₃ + ...</strong> Example: three 100 Ω resistors in series = 300 Ω total. Series circuits share the same current; voltage drops across each resistor proportionally. In <strong>parallel</strong>, resistors share the same voltage across their terminals, and total conductance is the sum (conductance G = 1/R): <strong>1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</strong> or <strong>R_total = (R₁ × R₂) / (R₁ + R₂)</strong> for two resistors. Example: two 100 Ω resistors in parallel = 50 Ω total. Parallel circuits reduce total resistance. Practical circuits use both: series for voltage control, parallel for current distribution. Misunderstanding series/parallel is a common mistake.",
  },
  {
    question: "What is the resistor color code and how do you read it?",
    answer:
      "Resistor color bands indicate value and tolerance. The standard bands (left to right) are: Band 1 = first digit, Band 2 = second digit, Band 3 = multiplier (power of 10), Band 4 = tolerance. <strong>Color map:</strong> Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9. Example: Brown-Black-Red-Gold = 10 × 10² = 1,000 Ω ±5%. Another example: Orange-Orange-Yellow-Red = 33 × 10⁴ = 330,000 Ω (330 kΩ) ±2%. For five-band resistors, Band 3 is also a digit. Tolerance bands: Gold=±5%, Silver=±10%, Brown=±1%, Red=±2%, Green=±0.5%. This color system dates to the era before digital printing and allows reading values without measurement or labels.",
  },
  {
    question: "What are practical applications of resistors in circuits?",
    answer:
      "Resistors appear in nearly every circuit for various purposes: (1) <strong>Current limiting:</strong> An LED requires limited current (~20 mA); a resistor in series protects it from burning. (2) <strong>Voltage division:</strong> Two resistors divide voltage — useful for creating reference voltages for sensors. (3) <strong>Pull-up/pull-down:</strong> Logic circuits use resistors to set default signal levels. (4) <strong>Biasing:</strong> Transistors and amplifiers need biasing resistors to set operating points. (5) <strong>Filtering:</strong> RC (resistor-capacitor) combinations filter signals, blocking high/low frequencies. (6) <strong>Termination:</strong> High-frequency transmission lines need resistors matching impedance to prevent reflections. (7) <strong>Load simulation:</strong> Resistors simulate real loads for testing power supplies. Professional circuit design requires understanding where and why to place resistors.",
  },
  {
    question: "How do temperature and frequency affect resistor behavior?",
    answer:
      "Most resistors have <strong>temperature coefficients</strong> (typically ±100–±500 ppm/°C for carbon, ±25 ppm/°C for metal film) meaning resistance changes slightly with temperature. Carbon resistors drift more than metal film. At high temperatures, resistors dissipate power as heat, so temperature management is critical — a resistor rated for 1/4 W at 20°C might only handle 1/8 W at 70°C. At high frequencies, resistors exhibit parasitic inductance and capacitance that become significant above ~10 MHz, causing impedance to deviate from the nominal resistance. For high-frequency work, wirewound resistors are avoided (too inductive); thin film is preferred. In precision applications, use metal film resistors and control temperature. In high-frequency RF circuits, resistor selection is critical for maintaining circuit performance.",
  },
];

export const CAPACITOR_FAQS: FAQ[] = [
  {
    question: "What are capacitors and how do they store energy?",
    answer:
      "Capacitors are components that store electrical energy in an electric field between two conductive plates. When a voltage is applied, positive charge accumulates on one plate, negative on the other, creating an electric field. The <strong>capacitance (C)</strong> is measured in farads (F), defined as: <strong>C = Q/V</strong>, where Q is charge (coulombs) and V is voltage. Practical units are microfarads (μF = 10⁻⁶ F) and nanofarads (nF = 10⁻⁹ F). A 10 μF capacitor at 10 V stores 100 μC of charge. The energy stored is: <strong>E = ½CV²</strong> joules. Capacitors are used for energy storage (power supplies, camera flashes), filtering (removing noise), coupling (blocking DC while passing AC), and timing (with resistors in RC circuits). Unlike resistors, ideal capacitors dissipate no power — all stored energy can be recovered.",
  },
  {
    question: "How do capacitance and the capacitor equation relate to physical structure?",
    answer:
      "Capacitance depends on three factors: <strong>C = εA/d</strong>, where ε is permittivity of the dielectric material, A is plate area, and d is plate separation. Larger plates increase capacitance; larger separation decreases it. <strong>Permittivity ε</strong> varies by material: air/vacuum ≈ 8.85 × 10⁻¹² F/m, ceramic ≈ 1,000× this, aluminum oxide ≈ 10,000×. Ceramic and electrolytic capacitors use high-ε dielectrics to pack large capacitance into small packages. Example: a ceramic disk capacitor (0.1 μF) is tiny, while an air capacitor of the same value would be enormous. <strong>Voltage rating</strong> depends on dielectric breakdown strength — applying excessive voltage ruptures the dielectric, destroying the capacitor. Higher-voltage capacitors require thicker dielectrics, making them physically larger.",
  },
  {
    question: "What is the difference between electrolytic, ceramic, and film capacitors?",
    answer:
      "<strong>Electrolytic capacitors</strong> use a chemical layer as the dielectric, offering high capacitance in small packages (10 μF–10 mF range). They're polarized — positive and negative terminals must be connected correctly or the capacitor fails. They have limited frequency response and high ESR (equivalent series resistance). <strong>Ceramic capacitors</strong> use ceramic dielectric, offering moderate capacitance (1 nF–10 μF), small size, and good frequency response (MHz range). They're non-polarized but can show voltage coefficient (capacitance changes with applied voltage). <strong>Film capacitors</strong> use plastic film dielectric (polyester, polypropylene, etc.), offering moderate capacitance, low ESR, stability, and high voltage ratings. They're used in AC applications, filtering, and precision circuits. Choice depends on application: electrolytics for large storage, ceramics for high frequency, film for precision and AC.",
  },
  {
    question: "How do capacitors behave in DC and AC circuits?",
    answer:
      "In <strong>DC steady-state</strong>, a capacitor acts as an open circuit — no current flows after the initial charging transient. A capacitor fully charged to the applied voltage blocks DC. In <strong>AC circuits</strong>, capacitors react to changing voltage. The capacitive reactance is: <strong>X_C = 1/(2πfC)</strong>, where f is frequency. At low frequencies, reactance is high (nearly blocks signal); at high frequencies, reactance is low (nearly shorts to ground). This is why capacitors are used for filtering — AC signals pass through low reactance, DC is blocked. Charging/discharging follows an exponential curve with time constant τ = RC. Example: a 1 μF capacitor charged through a 1 kΩ resistor has τ = 1 ms; reaching 63% charge in 1 ms, 95% in 3τ. Understanding capacitor transients is crucial for power supplies and signal circuits.",
  },
  {
    question: "What are capacitor ratings and what do ESR, voltage, and temperature range mean?",
    answer:
      "<strong>Voltage rating:</strong> Maximum DC voltage the capacitor withstands continuously. Exceeding this causes failure or leakage. Derating (using a lower voltage than rated) improves lifetime. <strong>Capacitance tolerance:</strong> Typically ±10%, ±20%, or ±5% depending on type and cost. Precision capacitors are ±1% or better. <strong>ESR (Equivalent Series Resistance):</strong> All real capacitors have internal resistance (~0.1 Ω for low-ESR film, ~10 Ω for electrolytics), causing power dissipation at high currents. Low-ESR capacitors are critical in switched-mode power supplies. <strong>Temperature range:</strong> Capacitance shifts with temperature (typically −20% to +20% over operating range). <strong>Frequency:</strong> Capacitors are designed for specific frequency ranges; film capacitors handle DC–MHz, electrolytics are limited to kHz range. <strong>Lifetime:</strong> Electrolytic capacitors age, especially in heat — typically 1,000–5,000 hours at rated ripple current and temperature.",
  },
];

export const COULOMBS_LAW_FAQS: FAQ[] = [
  {
    question: "What is Coulomb's Law and how does it relate to gravity?",
    answer:
      "Coulomb's Law describes the electrostatic force between charged objects: <strong>F = k(q₁q₂)/r²</strong>, where F is force (newtons), k is Coulomb's constant (8.99 × 10⁹ N·m²/C²), q₁ and q₂ are charges (coulombs), and r is distance (meters). Like charges repel; opposite charges attract. The force is inversely proportional to distance squared, identical in form to Newton's law of gravitation but vastly stronger. At 1 meter separation, two 1-coulomb charges exert ~9 billion newtons of force — the electrostatic force overwhelms gravity. Example: two electrons 1 nm apart experience repulsive force ~2.3 × 10⁻⁹ N. Coulomb's Law governs atomic structure, chemical bonding, and all electrostatic phenomena. Understanding this fundamental force is essential for chemistry, materials science, and electronics.",
  },
  {
    question: "What is a coulomb and how much charge is it?",
    answer:
      "A coulomb (C) is the SI unit of electric charge, defined as the charge transferred by 1 ampere of current flowing for 1 second. <strong>1 C = 1 A × 1 s</strong>. One coulomb is an enormous charge — it's the charge of ~6.24 × 10¹⁸ electrons (since one electron has charge e = 1.6 × 10⁻¹⁹ C). Practical quantities are much smaller: battery charges are in amp-hours (Ah): a 100 Ah battery holds 100 A × 3,600 s = 360,000 C. A smartphone battery with 3,000 mAh holds 3,000 × 10⁻³ A × 3,600 s ≈ 10,800 C. Household electrical usage is in coulombs per second (amperes) or coulombs per hour. Understanding coulombs is essential for battery sizing, circuit analysis, and electrochemistry.",
  },
  {
    question: "How does electric field relate to Coulomb's Law?",
    answer:
      "An electric field is a region where a charge experiences force. Coulomb's Law can be rewritten as: <strong>E = F/q = kQ/r²</strong>, where E is electric field strength (N/C or V/m), Q is the source charge creating the field. The field is independent of the test charge q — it's a property of space near the source charge. Example: the field near a 1 C charge at 1 m distance is ~9 × 10⁹ N/C. A second charge placed in this field experiences force F = qE. Field lines point away from positive charges and toward negative charges, providing a visual representation. Field strength decreases with distance squared. This field concept generalizes to more complex charge distributions and connects electrostatics to circuit theory.",
  },
  {
    question: "What causes electrostatic force and what is its range?",
    answer:
      "Electrostatic force arises from the interaction of electric fields. At the quantum level, this force is mediated by virtual photons. Unlike gravity (always attractive), electrostatic force can be attractive or repulsive depending on charge signs. The force has infinite theoretical range — it decreases with distance squared but never reaches exactly zero. Practically, the force becomes negligible beyond ~10⁻¹⁵ m (nuclear scale) where the strong nuclear force dominates. For macroscopic objects, charge typically distributes to minimize energy. Conductors allow charge redistribution; insulators don't. Static electricity (shuffling feet, rubbing balloons) creates large charge separations, generating visible sparks. Lightning is the dramatic manifestation of electrostatic force overcoming air's insulation (~3 MV/m breakdown field), discharging atmospheric charge.",
  },
  {
    question: "How does Coulomb's Law apply to multiple charges and continuous distributions?",
    answer:
      "For multiple discrete charges, the force on a test charge is the vector sum of forces from each source charge — the superposition principle. Three charges q₁, q₂, q₃ exert forces F₁, F₂, F₃ on test charge q; total force is F = F₁ + F₂ + F₃. For continuous charge distributions (like uniformly charged spheres or infinite planes), Coulomb's Law integrates over the distribution. Example: a uniform sphere of charge Q at distance r from its center exerts force F = kQq/r² on external charge q, as if all charge were concentrated at the center. Inside a uniformly charged spherical shell, the field is zero. This result is crucial for understanding atoms and molecules. The principle of superposition and the ability to integrate Coulomb's Law for continuous distributions is foundational for electrostatics.",
  },
];

export const ELECTRIC_FIELD_FAQS: FAQ[] = [
  {
    question: "What is an electric field and why is it a useful concept?",
    answer:
      "An electric field is a region where a charged particle experiences force due to nearby charges. Rather than thinking of direct force between charges, the field concept says a source charge creates a field in space, and test charges experience force from that field. Field strength E (N/C or V/m) is defined as force per unit charge: <strong>E = F/q</strong>. This separates the concept of the source from the effect on test charges. A positive charge creates a field pointing radially outward; a negative charge creates a field pointing inward. Multiple charges create a superposition of fields. The field concept generalizes to electrostatics, electromagnetism, and modern quantum field theory. Visualizing fields as lines (field lines) provides intuition — density of lines indicates field strength, direction shows force direction on positive charges.",
  },
  {
    question: "How do electric fields relate to voltage and potential?",
    answer:
      "Electric potential V (volts) is related to the electric field by: <strong>E = −dV/dr</strong> (field is the negative gradient of potential). Equivalently, the potential difference between two points is: <strong>ΔV = −∫E·dr</strong>. This means field points from high to low potential (like water flowing downhill). A uniform field of 100 V/m means potential drops 100 volts over each meter of distance. In a parallel-plate capacitor with 10 V across 0.1 m spacing, field is E = 10/0.1 = 100 V/m. A charged particle in this field experiences force; positive charges move toward lower potential (negative terminal), negative charges toward higher potential (positive terminal). This relationship unifies circuit concepts (voltage) with field concepts (electric field), bridging different perspectives on electrostatics.",
  },
  {
    question: "What are electric field lines and how do they represent field strength?",
    answer:
      "Electric field lines are imaginary curves tangent to the field direction at each point. By convention, lines point away from positive charges and toward negative charges. The density of lines (number per unit area perpendicular to the field) represents field strength. Close-spaced lines indicate strong field; widely-spaced lines indicate weak field. Field lines never cross (at each point, field has one direction). For a point charge, field lines radiate outward with density decreasing as 1/r² (matching the inverse-square decrease in field strength). For a dipole (opposite charges nearby), field lines curve from positive to negative charge. For parallel plates with opposite charge, field lines are straight and parallel between the plates. These visualizations aid intuition — imagining field line density accurately predicts field strength variations.",
  },
  {
    question: "How is electric field calculated for various charge configurations?",
    answer:
      "For a point charge Q at distance r: <strong>E = kQ/r²</strong>. For a uniformly charged sphere: outside acts like point charge (E = kQ/r²); inside varies linearly with distance from center (E ∝ r). For an infinite uniformly charged plane with surface charge density σ: <strong>E = σ/(2ε₀)</strong> (uniform field, independent of distance). For a uniformly charged line with linear charge density λ: <strong>E = λ/(2πε₀r)</strong> (radial, decreasing as 1/r). For parallel plates with charge densities ±σ: <strong>E = σ/ε₀</strong> between plates (uniform), zero outside. For arbitrary distributions, integration or numerical methods are needed. Gauss's Law provides an elegant way to calculate fields with high symmetry: <strong>∮E·dA = Q_enclosed/ε₀</strong>. Mastering these calculations is essential for capacitor design, electrostatics, and electromagnetic applications.",
  },
  {
    question: "What are real-world examples of electric fields?",
    answer:
      "Electric fields are everywhere: (1) <strong>Household wiring:</strong> 120 V outlets over ~cm distances create fields of ~10,000 V/m. (2) <strong>Lightning:</strong> Atmospheric electric field reaches ~3 MV/m (breakdown threshold, causing arcing). (3) <strong>Capacitors:</strong> A 1 mm thick dielectric at 1,000 V experiences 1 MV/m. (4) <strong>Cell membranes:</strong> ~70 mV across 5 nm membrane creates ~14 MV/m field, governing ion transport and nerve impulses. (5) <strong>Electroplating:</strong> Metal deposition driven by electric fields. (6) <strong>Particle accelerators:</strong> Fields accelerate electrons to nearly light speed. (7) <strong>Inkjet printers:</strong> Electric fields deflect charged ink droplets onto paper. (8) <strong>Radar and RF antennas:</strong> Time-varying electric fields create electromagnetic waves. Understanding electric fields is crucial for biomedics, power delivery, and technology.",
  },
];

// THERMODYNAMICS (4 calculators)

export const HEAT_CAPACITY_FAQS: FAQ[] = [
  {
    question: "What is heat capacity and how does it relate to temperature change?",
    answer:
      "Heat capacity is the amount of heat energy required to raise an object's temperature by 1°C (or 1 K). It's defined as: <strong>C = Q/ΔT</strong>, where Q is heat energy (joules) and ΔT is temperature change (°C or K). Units are joules per degree Celsius (J/°C). For example, water has heat capacity ~4,186 J/°C per kilogram, meaning 1 kg of water requires ~4,186 J to raise its temperature 1°C. Specific heat capacity (c) normalizes by mass: <strong>Q = mcΔT</strong>, where m is mass and c is specific heat (J/kg·°C). Water's specific heat (~4,186 J/kg·°C) is unusually high, making it an excellent coolant. Metals like aluminum (~900 J/kg·°C) and copper (~390 J/kg·°C) have lower specific heat. Heat capacity explains why large bodies of water (oceans, lakes) stabilize climate — their high heat capacity resists temperature swings.",
  },
  {
    question: "What is the difference between heat capacity and specific heat?",
    answer:
      "<strong>Heat capacity (C)</strong> is the property of a specific object: the amount of heat to raise its entire temperature by 1°C. Example: a 50 kg cast iron block has heat capacity ~50 × 500 = 25,000 J/°C. <strong>Specific heat capacity (c)</strong> is an intensive material property: heat per unit mass per degree. Cast iron has ~500 J/kg·°C specific heat. To compare thermal properties of different materials, use specific heat — it's independent of object size. A small piece of copper and a large block of copper have different heat capacities but the same specific heat. When designing thermal systems, specific heat determines how quickly temperature changes; total heat capacity determines energy requirements. Example: a 1 kg water heater requires 4,186 J per °C, while a 1 kg aluminum pan requires only 900 J per °C — water heats more slowly but stores more energy.",
  },
  {
    question: "How do you calculate temperature change from heat energy?",
    answer:
      "Use the formula: <strong>Q = mcΔT</strong>, rearranged as <strong>ΔT = Q/(mc)</strong>. Example: heating 2 kg of water (c = 4,186 J/kg·°C) with 20,000 J raises temperature by ΔT = 20,000 / (2 × 4,186) ≈ 2.4°C. Another example: cooling 500 g of aluminum (c = 900 J/kg·°C) from 100°C to 20°C: Q = 0.5 × 900 × (20 − 100) = 0.5 × 900 × (−80) = −36,000 J (negative indicates heat removal). The heat required is proportional to mass, specific heat, and temperature change. This calculation is fundamental in thermodynamics, refrigeration, and materials processing. For phase changes (melting, boiling), latent heat applies instead; Q = mL, where L is latent heat (J/kg).",
  },
  {
    question: "How does heat capacity vary with temperature and material properties?",
    answer:
      "For most solids and liquids over normal temperature ranges, specific heat is nearly constant. However, it varies somewhat with temperature — metals show heat capacity increasing slightly with temperature due to increased atomic vibrations. At extreme temperatures (near absolute zero), quantum effects dominate; heat capacity of solids approaches zero as T → 0 K, following the Debye model (c ∝ T³). Gases have different heat capacities depending on whether they're heated at constant volume (C_V) or constant pressure (C_P): <strong>C_P − C_V = R</strong> (gas constant). For monatomic gases, C_V = (3/2)R; for diatomic gases, C_V ≈ (5/2)R (including rotational energy). Complex materials like polymers show heat capacity dependent on degree of crystallinity. Water shows anomalously high specific heat due to strong hydrogen bonding. Understanding these variations is crucial for engineering applications.",
  },
  {
    question: "What are practical applications of heat capacity?",
    answer:
      "Heat capacity governs thermal management in countless applications: (1) <strong>Electronics cooling:</strong> Liquid cooling systems with high-c fluids (water, oils) efficiently remove heat from processors. (2) <strong>Thermal storage:</strong> Water tanks store solar heat for later use due to high heat capacity. (3) <strong>Climate control:</strong> Buildings with thermal mass (concrete, water) resist rapid temperature swings. (4) <strong>Cooking:</strong> Cast iron skillets retain heat (high heat capacity) for consistent cooking; aluminum heats/cools quickly (low capacity). (5) <strong>Batteries and power systems:</strong> Internal resistance causes heating; heat capacity buffers temperature rise. (6) <strong>Materials processing:</strong> Predicting cooling rates and mechanical properties. (7) <strong>Cryogenics:</strong> Managing heat leakage in liquid nitrogen/helium systems. Engineers select materials and fluids based on heat capacity for optimal thermal performance.",
  },
];

export const TEMPERATURE_CONVERTER_FAQS: FAQ[] = [
  {
    question: "What are the temperature scales and how do they relate?",
    answer:
      "<strong>Celsius (°C):</strong> Water freezes at 0°C and boils at 100°C at sea level. <strong>Fahrenheit (°F):</strong> Water freezes at 32°F and boils at 212°F. <strong>Kelvin (K):</strong> Absolute zero (lowest possible temperature) is 0 K; water freezes at 273.15 K and boils at 373.15 K. <strong>Rankine (°R):</strong> Absolute scale using Fahrenheit-sized degrees. Conversion formulas: <strong>°F = (°C × 9/5) + 32</strong>, <strong>K = °C + 273.15</strong>, <strong>°R = °F + 459.67</strong>. Key insight: Celsius and Fahrenheit are arbitrary (based on water), while Kelvin and Rankine are absolute scales based on thermodynamic zero. Scientists use Kelvin; most countries use Celsius; the US uses Fahrenheit. Understanding these scales is essential for international communication, science, and engineering.",
  },
  {
    question: "Why is Kelvin the absolute temperature scale used in science?",
    answer:
      "Kelvin is defined with absolute zero (0 K = −273.15°C) as the starting point, where all molecular motion theoretically ceases. This makes Kelvin an <strong>absolute scale</strong> — ratios of temperatures are physically meaningful. For example, 200 K is twice as hot as 100 K in terms of molecular kinetic energy (E ∝ T). In contrast, 100°C is not twice as hot as 50°C; the ratio is 373 K / 323 K ≈ 1.15. Gas laws, thermodynamic equations, and quantum mechanics require absolute temperature to work correctly. Kelvin is the SI standard for temperature. When scientists say \"temperature,\" they mean Kelvin unless otherwise specified. In equations like <strong>PV = nRT</strong> (ideal gas law), T must be in Kelvin. This absolute scale is why Kelvin is indispensable for physics and chemistry.",
  },
  {
    question: "What is absolute zero and why can't we reach it?",
    answer:
      "Absolute zero (0 K = −273.15°C ≈ −459.67°F) is the theoretical lowest possible temperature, where all molecular motion stops. It's defined by the third law of thermodynamics: entropy of a perfectly ordered crystal approaches zero as temperature approaches absolute zero. We cannot actually reach absolute zero (the laws of thermodynamics prevent it) — laboratory records approach within microkelvin (10⁻⁶ K). Reaching absolute zero would require infinite work. As temperatures approach absolute zero, properties change dramatically: gases liquefy, liquids solidify, and materials exhibit quantum effects (superconductivity, superfluidity). Most substances remain solids near absolute zero. The Kelvin scale is anchored to absolute zero because it makes thermodynamic equations work correctly. Understanding absolute zero is crucial for cryogenics and low-temperature physics.",
  },
  {
    question: "How do temperature conversions affect scientific calculations?",
    answer:
      "Many equations require absolute temperature (Kelvin). Example: the ideal gas law <strong>PV = nRT</strong> requires T in Kelvin. If you use Celsius, results are wrong. Example: gas at 27°C (300 K) and 1 atm occupies V = nR(300)/1 ≈ 24.8 L/mol. Using 27 incorrectly gives nonsense. The same applies to: thermal radiation laws (Stefan-Boltzmann: P ∝ T⁴), kinetic energy (E_k = 3/2 k_B T), entropy, and reaction rate equations (Arrhenius). Celsius is convenient for daily use but must be converted to Kelvin for science. Error in scale choice can produce orders-of-magnitude mistakes. Professional scientists always use Kelvin for thermodynamic calculations. This is a common source of error in homework and exams — always convert to Kelvin first.",
  },
  {
    question: "What are real-world examples of temperature ranges across scales?",
    answer:
      "Examples in multiple scales: (1) <strong>Room temperature:</strong> ~20°C = 68°F = 293 K. (2) <strong>Human body:</strong> ~37°C = 98.6°F = 310 K. (3) <strong>Boiling water:</strong> 100°C = 212°F = 373 K. (4) <strong>Liquid nitrogen:</strong> −196°C = −320°F = 77 K. (5) <strong>Surface of the Sun:</strong> ~5,778 K = 5,505°C = 9,941°F. (6) <strong>Core of the Sun:</strong> ~15 million K. (7) <strong>Cosmic microwave background radiation:</strong> 2.7 K = −270.5°C. These examples illustrate the vast range of temperatures in nature and technology. Using Kelvin immediately shows relative energy: the Sun's surface (5,778 K) is ~2,000 times hotter than liquid nitrogen (77 K) in terms of molecular kinetic energy. Celsius or Fahrenheit obscures this relationship.",
  },
];

export const IDEAL_GAS_LAW_FAQS: FAQ[] = [
  {
    question: "What is the ideal gas law and why is it fundamental?",
    answer:
      "The ideal gas law relates pressure, volume, temperature, and amount of gas: <strong>PV = nRT</strong>, where P is pressure (Pa), V is volume (m³), n is moles, R is the gas constant (8.314 J/mol·K), and T is absolute temperature (K). This equation describes ideal gases — hypothetical gases with negligible molecular volume and no intermolecular forces. Real gases approximate this behavior at moderate pressures and temperatures. Example: 1 mole of gas at standard temperature and pressure (STP: 0°C = 273 K, 1 atm ≈ 101,325 Pa) occupies V = nRT/P = (1)(8.314)(273)/101,325 ≈ 0.0224 m³ = 22.4 L. The law is fundamental because it connects macroscopic properties (P, V, T) to microscopic physics (molecular motion). It's essential for thermodynamics, chemistry, and engineering.",
  },
  {
    question: "How can the ideal gas law be rearranged to solve for different variables?",
    answer:
      "The ideal gas law PV = nRT has multiple rearrangements depending on the unknown: <strong>For pressure:</strong> P = nRT/V. Example: 2 moles of gas at 300 K in 0.05 m³ gives P = (2)(8.314)(300)/(0.05) ≈ 99,768 Pa. <strong>For volume:</strong> V = nRT/P. <strong>For temperature:</strong> T = PV/(nR). <strong>For moles:</strong> n = PV/(RT). <strong>For a gas at constant amount:</strong> P₁V₁/T₁ = P₂V₂/T₂ (combined gas law). <strong>For constant pressure and amount:</strong> V/T = constant (Charles's Law). <strong>For constant volume and temperature:</strong> P₁V₁ = P₂V₂ (Boyle's Law). These rearrangements solve practical problems: sizing containers, predicting pressure changes with temperature, calculating gas amounts. Remembering these forms is more efficient than deriving from scratch each time.",
  },
  {
    question: "What assumptions define an ideal gas and how do real gases differ?",
    answer:
      "An <strong>ideal gas</strong> assumes: (1) Molecules are point particles (negligible volume). (2) Collisions are perfectly elastic. (3) No intermolecular forces (no attractions or repulsions). (4) Molecules move randomly. <strong>Real gases</strong> deviate: (1) Molecules have finite volume, becoming significant at high pressures. (2) Intermolecular forces (van der Waals forces) cause deviations at low temperatures or high pressures. (3) Some molecules may condense to liquid or solid phases. The <strong>van der Waals equation</strong> corrects for these: <strong>(P + a(n/V)²)(V − nb) = nRT</strong>, where a and b are substance-specific constants. For most gases at room temperature and moderate pressure (< 10 atm), the ideal gas law is accurate to within ~5%. At high pressure or low temperature, real gas behavior dominates. CO₂ at 70 atm and 273 K deviates significantly from ideal behavior.",
  },
  {
    question: "How does temperature affect pressure in a constant volume container?",
    answer:
      "From the ideal gas law at constant volume and amount: <strong>P/T = nR/V = constant</strong>, or <strong>P₁/T₁ = P₂/T₂</strong> (Gay-Lussac's Law). Pressure is directly proportional to absolute temperature. Example: a sealed container of gas at 300 K and 1 atm, heated to 600 K, increases pressure to 2 atm. The mechanism: higher temperature means faster molecular motion, more frequent and energetic collisions with walls, increased force per unit area (pressure). Practically, this is why car tire pressure increases on hot days and decreases in cold weather. Doubling absolute temperature doubles pressure. This linear relationship (in Kelvin, not Celsius!) is why Kelvin is essential — if you used Celsius, the relationship would appear nonlinear. Tire pressure monitoring systems exploit this relationship to infer temperature changes.",
  },
  {
    question: "What are practical applications of the ideal gas law?",
    answer:
      "The ideal gas law applies across numerous fields: (1) <strong>HVAC systems:</strong> Predicting temperature and pressure changes in ducts and compressors. (2) <strong>Tire pressure:</strong> Gas law explains pressure variations with temperature and loading. (3) <strong>Scuba diving:</strong> Calculating decompression schedules and gas consumption. (4) <strong>Air compressors and pneumatic systems:</strong> Designing storage tanks and operating pressures. (5) <strong>Chemistry:</strong> Determining molar mass, stoichiometry, and gas reactions. (6) <strong>Meteorology:</strong> Relating pressure, temperature, and density in the atmosphere. (7) <strong>Internal combustion engines:</strong> Predicting pressure and temperature in cylinders during compression and combustion. (8) <strong>Refrigeration:</strong> Predicting saturation properties and cycle efficiency. Engineers across disciplines use the ideal gas law daily.",
  },
];

export const THERMAL_EXPANSION_FAQS: FAQ[] = [
  {
    question: "What is thermal expansion and why does it occur?",
    answer:
      "Thermal expansion is the increase in size (length, area, or volume) of materials when heated. It occurs because increased temperature means increased atomic vibrations, which push atoms slightly farther apart on average. Most materials expand when heated (positive expansion) because repulsive forces dominate at larger separations. The expansion is quantified by the linear expansion coefficient α: <strong>ΔL = α L₀ ΔT</strong>, where ΔL is length change, L₀ is original length, and ΔT is temperature change. For volume expansion: <strong>ΔV = β V₀ ΔT</strong>, where β ≈ 3α for isotropic materials. Example: a steel bridge 100 m long expands by ~12 cm from −10°C to +40°C (α_steel ≈ 12 × 10⁻⁶ K⁻¹). Thermal expansion is usually small but becomes significant in precision engineering, large structures, and materials with high α.",
  },
  {
    question: "How do different materials have different expansion coefficients?",
    answer:
      "Linear expansion coefficient α varies by material and temperature dependence: <strong>Metals:</strong> Iron/steel ~12 × 10⁻⁶ K⁻¹, aluminum ~23 × 10⁻⁶ K⁻¹, copper ~17 × 10⁻⁶ K⁻¹, gold ~14 × 10⁻⁶ K⁻¹. <strong>Non-metals:</strong> Glass ~5–10 × 10⁻⁶ K⁻¹, concrete ~10–14 × 10⁻⁶ K⁻¹, diamond ~1 × 10⁻⁶ K⁻¹ (very low). <strong>Liquids and gases:</strong> Water ~200 × 10⁻⁶ K⁻¹, mercury ~182 × 10⁻⁶ K⁻¹. Differences reflect atomic structure and bonding strength. Materials with weaker bonding expand more. Aluminum expands twice as much as steel, causing issues when combining materials. Water is anomalous: it contracts from 0–4°C then expands (why ice floats). At cryogenic temperatures (below 100 K), expansion coefficients may become negative or nearly zero due to quantum effects.",
  },
  {
    question: "What are practical problems caused by thermal expansion?",
    answer:
      "Thermal expansion creates real engineering challenges: (1) <strong>Thermal stress:</strong> When different materials expand at different rates (like steel and concrete in bridges), internal stress develops, causing cracking or failure. (2) <strong>Clearances:</strong> Engine pistons and cylinders must have clearance for thermal expansion — too tight expansion causes seizure. (3) <strong>Electrical contacts:</strong> Expansion changes resistance and contact pressure in connections. (4) <strong>Pipe systems:</strong> Water or steam pipes expand and contract, requiring expansion loops to prevent buckling or stress. (5) <strong>Precision instruments:</strong> Measuring devices lose accuracy with temperature changes. (6) <strong>Bimetallic strips:</strong> Differential expansion of bonded metals is used in thermostats, bending with temperature. (7) <strong>Dental and medical materials:</strong> Mismatch in expansion can cause failure. Engineers account for thermal expansion in design through expansion joints, material selection, and clearance calculations.",
  },
  {
    question: "How is volumetric thermal expansion calculated and applied?",
    answer:
      "For volumetric expansion: <strong>V = V₀(1 + β ΔT)</strong>, where β is the volumetric expansion coefficient. For isotropic materials, β ≈ 3α (since expansion occurs in all three dimensions). Example: a 1 m³ steel tank (β ≈ 36 × 10⁻⁶ K⁻¹) heated from 20°C to 60°C (ΔT = 40 K) expands to V = 1 × (1 + 36 × 10⁻⁶ × 40) ≈ 1.00144 m³ (0.14% increase). For precise work, this small change matters. Liquid expansion is more significant: water expanding ~8% from freezing to boiling. Thermal expansion stress in constrained materials is: <strong>σ = αEΔT</strong>, where E is Young's modulus. For steel with α = 12 × 10⁻⁶ K⁻¹ and E = 200 GPa, a 100 K temperature rise produces ~240 MPa stress — enough to yield the material if not accommodated.",
  },
  {
    question: "What is the anomalous expansion of water and why does it matter?",
    answer:
      "Water exhibits unusual behavior: it <strong>contracts</strong> from 0°C to 4°C, reaching maximum density at 4°C, then <strong>expands</strong> above 4°C. This anomaly occurs because two competing effects interact: normal atomic thermal motion (expansion) and hydrogen bonding (creates an open structure, especially near freezing). Near 0°C, hydrogen bonding dominates, creating ice-like structure that's less dense. As temperature increases from 0°C, this structure partially breaks down, allowing denser packing until 4°C. Above 4°C, normal expansion dominates. Consequences: (1) <strong>Ice floats</strong> because solid ice is less dense than liquid water. (2) <strong>Natural convection:</strong> Water circulates in lakes and oceans, distributing heat. (3) <strong>Aquatic life:</strong> Fish survive winter because ice forms on top, insulating deeper water. (4) <strong>Thermal storage:</strong> Water's high heat capacity and anomalous expansion make it ideal for thermal regulation. This property is crucial for climate and ecosystems.",
  },
];

// MODERN/OTHER PHYSICS (5 calculators)

export const PHOTON_ENERGY_FAQS: FAQ[] = [
  {
    question: "What is a photon and how much energy does it carry?",
    answer:
      "A photon is the fundamental quantum of electromagnetic radiation — a massless particle carrying energy and momentum. Energy is related to frequency by Planck's equation: <strong>E = hf</strong>, where h is Planck's constant (6.626 × 10⁻³⁴ J·s) and f is frequency (Hz). Alternatively, using wavelength λ: <strong>E = hc/λ</strong>, where c is light speed (3 × 10⁸ m/s). High-frequency light (blue, UV, X-ray) carries high photon energy; low-frequency light (red, IR, radio) carries low energy. Example: a 500 nm visible photon (green light) carries E = (6.626 × 10⁻³⁴) × (3 × 10⁸) / (500 × 10⁻⁹) ≈ 4 × 10⁻¹⁹ J. The energy is tiny (femtojoules), but photons are abundant, and collectively they carry substantial power. Understanding photon energy explains ionization, photosynthesis, and photoelectric effects.",
  },
  {
    question: "How does photon energy relate to color and ionization?",
    answer:
      "Photon energy increases with frequency (blue > red). <strong>Visible light:</strong> red (~700 nm, 2.9 eV) to violet (~400 nm, 3.1 eV). <strong>Ultraviolet:</strong> starting ~380 nm (3.3 eV), reaching 10+ eV. <strong>X-rays:</strong> 0.01–10 nm, 100 eV to 1 MeV. <strong>Ionization threshold:</strong> Most materials ionize above ~3–10 eV. Sunlight carries both visible (low ionization risk) and UV (ionization risk to skin cells, causing tanning and burning). X-rays easily ionize atoms, passing through tissue and being used for imaging. Gamma rays (highest energy photons) cause DNA damage. This energy-frequency relationship is why UV exposure is more hazardous than visible light, and why X-rays are used medically but require shielding. The photoelectric effect (Einstein's explanation) requires photon energy above a threshold to eject electrons, establishing photon energy as a real physical quantity.",
  },
  {
    question: "What is the relationship between photon energy, frequency, and wavelength?",
    answer:
      "The relationships are: <strong>E = hf</strong> and <strong>c = λf</strong> (wave equation). Combining: <strong>E = hc/λ</strong>. All three forms are equivalent. Energy and frequency are directly proportional; energy and wavelength are inversely proportional. Doubling frequency doubles energy; doubling wavelength halves energy. Example: infrared at 10 μm has frequency f = c/λ = (3 × 10⁸) / (10 × 10⁻⁶) = 3 × 10¹³ Hz, energy E = (6.626 × 10⁻³⁴) × (3 × 10¹³) ≈ 2 × 10⁻²⁰ J. A UV photon at 200 nm has 50× higher energy, explaining why UV damages molecules that IR doesn't. In spectroscopy, these relationships allow converting between frequency, wavelength, and energy, which is essential for identifying materials and understanding atomic structure.",
  },
  {
    question: "How is photon energy measured and what are electron volts?",
    answer:
      "Photon energy is often expressed in electron volts (eV): 1 eV = 1.602 × 10⁻¹⁹ J. This unit is convenient for atomic-scale energies. Example: a 500 nm visible photon carries E = (6.626 × 10⁻³⁴ J·s × 3 × 10⁸ m/s) / (500 × 10⁻⁹ m) ÷ (1.602 × 10⁻¹⁹ J/eV) ≈ 2.5 eV. Visible light ranges 1.6–3.1 eV. X-rays span 100 eV to 100 keV (100,000 eV). Gamma rays exceed 1 MeV (million eV). Conversion: <strong>E (eV) = E (J) / (1.602 × 10⁻¹⁹)</strong>. The electron volt is defined as the energy an electron gains when accelerated through 1 volt potential — hence the name. Particle physicists and astronomers routinely use keV, MeV, GeV, TeV units for convenience.",
  },
  {
    question: "What are practical applications of photon energy concepts?",
    answer:
      "Photon energy governs technology across sectors: (1) <strong>Photography and imaging:</strong> Sensors detect photons; wavelength determines color. (2) <strong>Solar cells:</strong> Photon energy must exceed band gap (~1.1 eV for silicon) to generate electrical current. (3) <strong>Lasers:</strong> Laser frequency determines wavelength and applications — CO₂ lasers (10 μm) for cutting, UV lasers for precision. (4) <strong>Fluorescence and phosphorescence:</strong> Photons excite electrons; relaxation emits photons of lower energy (longer wavelength, visible Stokes shift). (5) <strong>Medical imaging:</strong> X-ray photons penetrate tissue for radiography; PET uses gamma rays from positron annihilation. (6) <strong>UV protection:</strong> Sunscreen absorbs UV photons to prevent skin ionization. (7) <strong>Night vision:</strong> Detectors amplify weak visible photons. Understanding photon energy is essential for optics, quantum mechanics, and modern technology.",
  },
];

export const RELATIVISTIC_KE_FAQS: FAQ[] = [
  {
    question: "What is relativistic kinetic energy and when does it matter?",
    answer:
      "At speeds approaching light speed, classical kinetic energy <strong>KE = ½mv²</strong> becomes inaccurate. Relativistic kinetic energy is: <strong>KE = (γ − 1)mc²</strong>, where γ = 1/√(1 − v²/c²) is the Lorentz factor, m is rest mass, and c is light speed. At low speeds (v << c), γ ≈ 1 and KE ≈ ½mv² (classical). At high speeds, γ grows dramatically. Example: electron at v = 0.9c has γ ≈ 2.29, so relativistic KE ≈ 1.29 × 0.511 MeV ≈ 0.66 MeV, vs. classical ½mv² ≈ 0.18 MeV. The difference becomes significant above ~10% light speed. Particle accelerators like the Large Hadron Collider operate in this relativistic regime, where particles have enormous kinetic energy despite being microscopic. Relativistic mechanics is essential for understanding cosmic rays, black holes, and high-energy physics.",
  },
  {
    question: "What does the Lorentz factor γ represent and why does it grow with velocity?",
    answer:
      "The Lorentz factor <strong>γ = 1/√(1 − v²/c²)</strong> quantifies relativistic effects. At v = 0, γ = 1 (no effects). As v → c, γ → ∞ (diverges). This growth reflects the increasing difficulty of accelerating objects near light speed — infinite energy would be required to reach c. Physically, γ represents: (1) <strong>Time dilation:</strong> Moving clocks run slow by factor γ. (2) <strong>Length contraction:</strong> Moving lengths shrink by factor 1/γ. (3) <strong>Momentum increase:</strong> Relativistic momentum p = γmv grows faster than classical mv. (4) <strong>Mass-energy equivalence:</strong> The energy equivalent of rest mass is mc². At v = 0.99c, γ ≈ 7.1, meaning time slows 7-fold and momentum is 7× classical. This exponential growth is why accelerating particles to near-light speeds requires astronomical energies.",
  },
  {
    question: "How does E = mc² relate to kinetic energy and rest mass energy?",
    answer:
      "Einstein's famous equation <strong>E = mc²</strong> is the rest energy (energy of a stationary object). Total energy is <strong>E_total = γmc²</strong>. Kinetic energy is the difference: <strong>KE = E_total − E_rest = (γ − 1)mc²</strong>. Example: an electron (rest mass 9.1 × 10⁻³¹ kg, rest energy ≈ 0.511 MeV) at v = 0.9c has total energy ≈ 2.29 × 0.511 ≈ 1.17 MeV. Rest energy ≈ 0.511 MeV; kinetic energy ≈ 0.66 MeV. At extremely high velocities (v → c), KE dominates and can far exceed rest energy. This is why converting mass to energy (like in nuclear reactions) releases enormous energy — 1 kg of matter carries ~90 petajoules (90 × 10¹⁵ J) of rest energy. Understanding this relationship is crucial for nuclear physics and cosmology.",
  },
  {
    question: "How is relativistic kinetic energy calculated and what are typical examples?",
    answer:
      "Step-by-step calculation: (1) Find γ = 1/√(1 − v²/c²). (2) Calculate KE = (γ − 1)mc². Example: proton (rest mass 1.67 × 10⁻²⁷ kg ≈ 938 MeV/c²) at v = 0.8c: γ = 1/√(1 − 0.64) = 1/√0.36 ≈ 1.67. KE = (1.67 − 1) × 938 MeV ≈ 630 MeV. LHC example: protons accelerated to v ≈ 0.9999999c have γ ≈ 7,460, so KE ≈ 7,000 GeV (7 TeV). For comparison, classical mechanics gives nonsensical results — accelerating to 99.99999% of c requires relativistic treatment. These extreme energies are why discovering new particles requires massive accelerators; you must collide particles at TeV energies to explore fundamental physics beyond standard models.",
  },
  {
    question: "Why does relativistic kinetic energy matter in modern physics and technology?",
    answer:
      "Relativistic effects are essential in several contexts: (1) <strong>Particle accelerators:</strong> Designing and controlling multi-TeV beams requires relativistic calculations. (2) <strong>Cosmic rays:</strong> Incoming cosmic ray particles can exceed 10²⁰ eV, far into the relativistic regime. (3) <strong>Astrophysics:</strong> Accretion disks around black holes and jets from active galactic nuclei involve relativistic particles. (4) <strong>PET scanners:</strong> Positron-electron annihilation at relativistic speeds creates gamma rays used in medical imaging. (5) <strong>Fusion and fission:</strong> Nuclear reactions release energy from mass conversion, requiring relativity for accurate energy accounting. (6) <strong>GPS satellites:</strong> Relativistic time dilation and gravitational time dilation must be accounted for ~40 microseconds per day, or GPS fails. Modern technology fundamentally relies on Einstein's relativity, not just classical mechanics.",
  },
];

export const HALF_LIFE_FAQS: FAQ[] = [
  {
    question: "What is half-life and how is it calculated?",
    answer:
      "Half-life (t₁/₂) is the time required for half of a radioactive sample to decay. After one half-life, half remains; after two, one-quarter remains; after n half-lives, 1/2ⁿ remains. Mathematically: <strong>N(t) = N₀(1/2)^(t/t₁/₂)</strong> or equivalently <strong>N(t) = N₀ e^(-λt)</strong>, where λ = ln(2)/t₁/₂ is the decay constant. Half-lives vary enormously: Carbon-14 (used in dating) has t₁/₂ ≈ 5,730 years; Uranium-238 has t₁/₂ ≈ 4.5 billion years; Cobalt-60 (medical source) has t₁/₂ ≈ 5.3 years; Polonium-214 has t₁/₂ ≈ 164 microseconds. The exponential decay relationship makes half-life the most useful measure — it directly answers: how long until the activity drops to a specified level?",
  },
  {
    question: "How is half-life used in radiocarbon dating?",
    answer:
      "Radiocarbon dating exploits Carbon-14 (t₁/₂ ≈ 5,730 years). Living organisms maintain constant C-14 ratio with the atmosphere through metabolism and photosynthesis. After death, no new C-14 is acquired; existing C-14 decays. Measuring current C-14 content vs. original (assuming modern atmospheric ratio) gives age. Example: archaeological sample has C-14 reduced to 25% of original. How many half-lives? N/N₀ = 0.25 = (0.5)^n, so n = 2. Age = 2 × 5,730 ≈ 11,460 years. The technique is accurate to ~±50 years for samples 500–50,000 years old. Older samples have negligible C-14; younger samples have insufficient decay for precise measurement. This technique revolutionized archaeology, geology, and paleontology by enabling absolute dating of organic materials.",
  },
  {
    question: "What determines half-life and why does it vary so much between isotopes?",
    answer:
      "Half-life is determined by nuclear stability — a property of the nucleus's proton-neutron configuration. Nuclei with unfavorable proton-neutron ratios are unstable and decay by alpha emission (losing He-4), beta decay (neutron→proton or vice versa), or spontaneous fission. The underlying mechanism is quantum tunneling for alpha decay or weak nuclear force for beta decay. Why the huge variation? (1) <strong>Near stability:</strong> Even slightly unstable nuclei near the valley of stability can have extremely long half-lives (billions of years). (2) <strong>Far from stability:</strong> Highly unstable nuclei decay in fractions of a second. No known theory perfectly predicts half-life a priori — we determine it experimentally. This variation is exploited: short-lived isotopes for medical imaging (Tc-99m, t₁/₂ ≈ 6 hours) are produced in reactors; long-lived isotopes for dating (C-14, U-238) measure geological timescales.",
  },
  {
    question: "How is half-life used in medical applications?",
    answer:
      "Medical isotopes are chosen strategically based on half-life: (1) <strong>Diagnostic imaging (SPECT):</strong> Tc-99m (t₁/₂ ≈ 6 hours) labels various biological compounds. Short half-life means low radiation exposure; 6 hours allows preparation, shipping, and imaging. (2) <strong>PET imaging:</strong> F-18 (t₁/₂ ≈ 110 minutes) in FDG (fluorodeoxyglucose) for glucose metabolism imaging. Longer than SPECT, enabling multi-patient studies. (3) <strong>Therapy:</strong> I-131 (t₁/₂ ≈ 8 days) for thyroid cancer — long enough for uptake and treatment, short enough to spare other tissues. (4) <strong>Brachytherapy:</strong> Ir-192 (t₁/₂ ≈ 74 days) for cancer implants. Half-lives are precisely selected so activity decays to safe background levels (typically 10 half-lives = ~1,000× reduction) within clinically acceptable timeframes. Miscalculating or selecting the wrong isotope compromises either efficacy or safety.",
  },
  {
    question: "What is activity and how does it relate to half-life?",
    answer:
      "Activity (A) is the number of decays per unit time, measured in becquerels (Bq, decays/second) or curies (Ci, where 1 Ci = 3.7 × 10¹⁰ Bq). Activity relates to sample size and half-life: <strong>A = λN = (ln 2 / t₁/₂) × N</strong>, where N is number of atoms. A larger sample or shorter half-life means higher activity. Example: 1 gram of C-14 (Avogadro's number of atoms ≈ 6 × 10²³) with t₁/₂ ≈ 5,730 years (≈1.8 × 10¹¹ seconds) has A ≈ (0.693 / 1.8 × 10¹¹) × 6 × 10²³ ≈ 2.3 × 10¹¹ Bq. As decay occurs, activity decreases: <strong>A(t) = A₀ e^(-λt) = A₀ (1/2)^(t/t₁/₂)</strong>. Medical sources must account for activity decay — a vial useful for 6 hours becomes unsafe for patient dosing after 24 hours due to activity reduction and waste radiation.",
  },
];

export const ESCAPE_VELOCITY_FAQS: FAQ[] = [
  {
    question: "What is escape velocity and how is it derived?",
    answer:
      "Escape velocity is the minimum speed needed to escape a gravitating body's gravitational field without further propulsion. Derived from energy conservation: initial kinetic energy + initial potential energy must equal zero at infinity. <strong>½mv_e² − GMm/R = 0</strong>, where G is gravitational constant (6.674 × 10⁻¹¹ N·m²/kg²), M is body mass, R is radius, m is projectile mass. Solving: <strong>v_e = √(2GM/R)</strong>. Earth: M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m, so v_e ≈ 11.2 km/s. Moon: v_e ≈ 2.4 km/s. Jupiter: v_e ≈ 60 km/s. Black hole (extreme case): v_e = c (light speed), meaning even light cannot escape beyond the event horizon. Escape velocity is independent of projectile mass — a marble and a spacecraft need the same speed.",
  },
  {
    question: "How does escape velocity differ from orbital velocity?",
    answer:
      "Orbital velocity is the speed for a circular orbit at a given radius: <strong>v_orbit = √(GM/R)</strong>. Escape velocity is: <strong>v_e = √(2GM/R)</strong>. Notice <strong>v_e = √2 × v_orbit</strong> ≈ 1.41 × orbital velocity. For Earth orbit at radius R, orbital velocity ≈ 7.8 km/s; escape velocity ≈ 11.2 km/s. An orbiting satellite continuously falls toward Earth but moves sideways fast enough to miss; escaping requires energy to overcome gravitational potential entirely. To go from orbit to escape requires only √2 − 1 ≈ 0.41 times orbital kinetic energy in addition, not doubling speed. Geostationary satellites orbit at ~3.07 km/s; escape from Earth's gravity requires 11.2 km/s, showing the vast difference. Understating this distinction causes common misconceptions.",
  },
  {
    question: "What role does escape velocity play in spaceflight?",
    answer:
      "Escape velocity is crucial for space missions: (1) <strong>Launch design:</strong> Rockets accelerate to orbital velocity (~7.8 km/s for Earth) first, then additional fuel propels them to escape velocity or beyond. (2) <strong>Solar escape:</strong> Leaving the solar system requires escape velocity from the Sun (~42 km/s from Earth's orbit), not just Earth's escape velocity. (3) <strong>Planetary missions:</strong> Sending probes to other planets requires calculating combined gravitational effects. (4) <strong>Gravitational assist:</strong> Spacecraft use planetary flybys to steal kinetic energy from rotating planets, reducing fuel requirements. (5) <strong>Black hole physics:</strong> The event horizon radius is where escape velocity equals light speed. Escape velocity fundamentally limits what's achievable with conventional propulsion and guides mission planning.",
  },
  {
    question: "How does escape velocity vary with distance from the body?",
    answer:
      "Escape velocity decreases with distance: <strong>v_e(r) = √(2GM/r)</strong>. At Earth's surface, v_e ≈ 11.2 km/s. At twice Earth's radius, v_e ≈ 7.9 km/s. At infinite distance, v_e → 0 (already escaped). This relationship is crucial for launch planning — launching from a high-altitude location like the equator reduces the required velocity because the radius is larger and Earth's rotation provides additional velocity. Historical rockets achieve orbit by first climbing vertically to reduce atmospheric drag, then turning to accelerate horizontally. Once above most atmosphere (~100 km), less fuel is needed to achieve orbital/escape velocities because the required speeds apply from that radius, not Earth's surface.",
  },
  {
    question: "What are escape velocities for different celestial bodies and what do they tell us?",
    answer:
      "Escape velocity provides insight into celestial body properties: <strong>Moon (~2.4 km/s):</strong> Low mass and radius make escape easy. <strong>Mars (~5.0 km/s):</strong> Between Moon and Earth. <strong>Jupiter (~60 km/s):</strong> Massive and large. <strong>White dwarf (~6,000 km/s):</strong> Stellar remnant, extremely dense. <strong>Black hole:</strong> v_e = c at event horizon, 3× c hypothetically beyond (causally disconnected). The pattern: more massive or denser bodies have higher escape velocity. This determines atmospheric retention — small bodies (Moon, Mercury, Mars) lose light gases like hydrogen; Earth retains them. Planets in harsh stellar environments (like those around massive stars) may lose atmospheres entirely. Escape velocity also limits possible escape mechanisms — geysers on Enceladus can exceed escape velocity, ejecting water into space.",
  },
];

export const DENSITY_FAQS: FAQ[] = [
  {
    question: "What is density and how is it calculated?",
    answer:
      "Density is mass per unit volume: <strong>ρ = m/V</strong>, measured in kg/m³ or g/cm³. Example: water has density 1,000 kg/m³ (or 1 g/cm³). Lead is 11,340 kg/m³ (dense, sinks in water). Aluminum is 2,700 kg/m³ (less dense, lighter for same volume). Density varies with temperature and pressure. Water is unusual: density at 4°C is maximum (~1,000 kg/m³); ice at 0°C is ~917 kg/m³ (why ice floats). Gases have much lower densities: air at sea level ~1.2 kg/m³; hydrogen ~0.089 kg/m³. Density connects macroscopic (mass, volume) to material properties. In engineering, choosing materials involves density trade-offs: aluminum is lighter than steel (2,700 vs. 7,850 kg/m³) but weaker, requiring optimization.",
  },
  {
    question: "How do you calculate mass or volume from density?",
    answer:
      "From ρ = m/V, rearranging: <strong>m = ρV</strong> and <strong>V = m/ρ</strong>. Example: a 2 m³ block of copper (ρ = 8,960 kg/m³) has mass m = 8,960 × 2 = 17,920 kg. A 50 kg object of gold (ρ = 19,300 kg/m³) occupies V = 50 / 19,300 ≈ 0.00259 m³ ≈ 2,590 cm³. Density is used to identify materials (different substances have different densities), determine buoyancy (objects less dense than water float), and calculate weights of structures. Historical example: determining if Archimedes' crown was pure gold relied on density — gold has unique density (19,300 kg/m³), allowing identification by water displacement.",
  },
  {
    question: "How does density relate to buoyancy and floating?",
    answer:
      "An object floats if its average density is less than the fluid it displaces. Archimedes' principle: buoyant force equals weight of displaced fluid. For floating equilibrium: <strong>ρ_object × V_total = ρ_fluid × V_submerged</strong>. Example: wood with density ~700 kg/m³ floats in water (1,000 kg/m³), with ~70% submerged (since 700/1,000 = 0.7). Ships are denser than water but displace enough water through hull shape to float. Submarines control density by filling/emptying ballast tanks to sink or rise. Hot air balloons float because heated air (~1.0 kg/m³ at 70°C) is less dense than surrounding air (~1.2 kg/m³ at 15°C). Understanding density and buoyancy is essential for naval architecture, submarine design, and aeronautics.",
  },
  {
    question: "How does density vary with temperature and pressure?",
    answer:
      "Most materials' density decreases with temperature (atoms move farther apart, volume increases). Thermal expansion coefficient α relates to density change: <strong>ρ(T) = ρ₀ / (1 + 3α ΔT)</strong> (for small changes). Example: aluminum (α ≈ 23 × 10⁻⁶ K⁻¹) at 100°C has density ~2.7% lower than at 0°C. Water is anomalous: density increases from 0°C to 4°C, then decreases (why ice floats). Pressure increases density: <strong>ρ ≈ ρ₀(1 + ΔP/B)</strong>, where B is bulk modulus. Deep ocean water is denser due to compression. Gases compress significantly with pressure: air at 100 atm is ~100× denser than at 1 atm. In engineering, accounting for temperature and pressure effects on density is critical for fluid mechanics, structural design, and materials processing.",
  },
  {
    question: "What are density values for common materials and how do they compare?",
    answer:
      "<strong>Gases:</strong> Hydrogen ~0.089 kg/m³, air ~1.2 kg/m³, carbon dioxide ~1.98 kg/m³. <strong>Liquids:</strong> Gasoline ~750 kg/m³, water ~1,000 kg/m³, mercury ~13,600 kg/m³. <strong>Metals:</strong> Aluminum ~2,700 kg/m³, iron ~7,850 kg/m³, copper ~8,960 kg/m³, lead ~11,340 kg/m³, gold ~19,300 kg/m³. <strong>Non-metals:</strong> Wood ~700 kg/m³, concrete ~2,400 kg/m³, glass ~2,500 kg/m³, diamond ~3,500 kg/m³. The range spans ~5 orders of magnitude (hydrogen to gold). Density is used for material selection: lightweight applications favor aluminum or magnesium; high-density materials (lead, tungsten) shield radiation or provide mass in small volumes. Material properties (strength, thermal conductivity, etc.) correlate loosely with density, guiding engineering choices.",
  },
];
