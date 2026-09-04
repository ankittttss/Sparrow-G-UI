// Content lifted verbatim from the Claude Design source
// ("SparrowG Unified Site.dc.html"). Edit there, or regenerate with
// `python tools/gendata.py`.

export const CDN = 'https://kv80w4-fe.myshopify.com/cdn/shop/';

export interface Skill { title: string; text: string }
export interface InboxItem { name: string; qty: string }
export interface Spec { k: string; v: string }

export interface Product {
  id: string; name: string; category: string; badge: string;
  age: string; ageN: number; level: string; buildTime: string;
  price: number; mrp: number; reviews: number;
  blurb: string; long: string; img: string; img2: string;
  learnIntro: string; skills: Skill[]; inbox: InboxItem[]; specs: Spec[];
}

export interface AgeGroup {
  label: string; min: number; max: number; note: string; img: string;
}

export interface Quote {
  headline: string; quote: string; name: string; role: string;
  stars: number; img: string;
}

export interface PostBlock { t: 'p' | 'h' | 'q'; text: string }
export interface Post {
  id: string; cat: string; read: string; date: string; title: string;
  img: string; excerpt: string; body: PostBlock[];
}

export interface Partner {
  name: string; img: string; bg: string; fg: string;
  hasImg: boolean; isCap: boolean; isBulb: boolean;
}

export interface QuizOption { label: string; sub: string; value: string | number }
export interface QuizStep {
  id: string; title: string; note: string; options: QuizOption[];
}

export const FEATURED_IDS = [
  'bucket-wheel-excavator', 'excavator', 'tower-crane', 'tractor',
];


export const AGES: AgeGroup[] = [
    { label: '9 – 10 Years', min: 9, max: 9, note: 'First real machines', img: 'files/ea12b9c9-515d-4add-83e2-803a751a6fbe.jpg?v=1787552907&width=1100' },
    { label: '10 – 12 Years', min: 10, max: 10, note: 'Linkages and gearing', img: 'files/WhatsApp_Image_2026-08-22_at_13.02.38.jpg?v=1787384022&width=1100' },
    { label: '12+ Years', min: 10, max: 99, note: 'Advanced multi-system builds', img: 'files/ChatGPT_Image_Aug_10_2026_04_20_48_PM.png?v=1787132383&width=1100' },
    { label: 'All ages', min: 0, max: 99, note: 'Every kit we make', img: 'files/ChatGPT_Image_Aug_10_2026_05_11_27_PM_1_3.jpg?v=1787552793&width=1100' }
  ];


export const QUOTES: Quote[] = [
    { headline: 'I wish I had this while growing up!', quote: 'SparrowG kits have changed how my son learns. The engineering creativity and the screen-free approach is exactly what we needed — he finished the excavator over two weekends and now wants to know how everything works.', name: 'Aarav Mehta', role: 'Parent, Mumbai', stars: 5, img: 'files/C0872T01.jpg?v=1785909769&width=1100' },
    { headline: 'My students develop real problem-solving skills', quote: 'As an educator I am impressed by how these kits make STEM engaging. The manuals are written so children can lead the build themselves, which changes the whole dynamic of the classroom.', name: 'Neha Jain', role: 'Teacher, Pune', stars: 5, img: 'files/IMG_E3593.jpg?v=1785909791&width=1100' },
    { headline: 'Premium quality, worth every rupee', quote: 'These kits keep my kids engaged for hours — no more screen-time battles. The parts are metal where they need to be, and nothing has broken in eight months of heavy use.', name: 'Sana Kapoor', role: 'Parent, Bangalore', stars: 4, img: 'files/WhatsApp_Image_2026-08-03_at_12.28.45.jpg?v=1785740343&width=1100' },
    { headline: 'The differential blew his mind', quote: 'He built the tractor with his grandfather over a week. Watching a nine-year-old explain how a differential works to the rest of the family was worth the price on its own.', name: 'Rahul Verma', role: 'Parent, Hyderabad', stars: 5, img: 'files/ChatGPT_Image_Aug_13_2026_12_35_20_PM_1.png?v=1786605004&width=1100' }
  ];


export const PRODUCTS: Product[] = [
    { id: 'bucket-wheel-excavator', name: 'Bucket Wheel Excavator', category: 'Construction', badge: 'Bestseller', age: '12+', ageN: 12, level: 'Advanced', buildTime: '12–16 hrs', price: 14000, mrp: 16000, reviews: 64,
      blurb: 'Our biggest build — a live bucket wheel, working conveyor and slewing superstructure.',
      long: 'A mining machine that genuinely works. The bucket wheel turns, the conveyor carries, and the whole superstructure slews on a bearing your child assembles themselves.',
      img: 'files/ChatGPT_Image_Aug_10_2026_04_20_48_PM.png?v=1787132383&width=1200',
      img2: 'files/ChatGPT_Image_Aug_10_2026_04_17_51_PM.png?v=1786359222&width=1200',
      learnIntro: 'Twelve mechanisms in one machine. This is the kit children graduate to once gears and linkages feel easy.',
      skills: [{ title: 'Gear trains', text: 'Reduction ratios that turn one motor into three speeds.' }, { title: 'Load paths', text: 'Why a boom this long needs a counterweight and a truss.' }, { title: 'Continuous transport', text: 'Conveyor tensioning, drive rollers and material flow.' }, { title: 'Slew bearings', text: 'Rotating a heavy structure without binding or tipping.' }, { title: 'Systems thinking', text: 'Debugging a machine where one subsystem stalls the next.' }, { title: 'Patience', text: 'A long build finished in sessions, not one sitting.' }],
      inbox: [{ name: 'Precision-cut structural parts', qty: '1,412' }, { name: 'Metal gears & axles', qty: '86' }, { name: 'Geared DC motors', qty: '3' }, { name: 'Conveyor belt assembly', qty: '1' }, { name: 'Tool set (hex, spanner, driver)', qty: '1' }, { name: 'Illustrated build manual', qty: '212 pp' }],
      specs: [{ k: 'Assembled size', v: '62 × 24 × 38 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: '4 × AA (not included)' }, { k: 'Weight', v: '2.4 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] },
    { id: 'excavator', name: 'Excavator', category: 'Construction', badge: 'Bestseller', age: '10+', ageN: 10, level: 'Intermediate', buildTime: '8–10 hrs', price: 14000, mrp: 16000, reviews: 91,
      blurb: 'Four-linkage digging arm, tracked chassis and a full 360° cab rotation.',
      long: 'The machine every child recognises. Build the boom, stick and bucket as a real four-bar linkage, then drive it on working tracks.',
      img: 'files/WhatsApp_Image_2026-08-22_at_13.02.38.jpg?v=1787384022&width=1200',
      img2: 'files/ChatGPT_Image_Aug_10_2026_05_18_40_PM.png?v=1786363141&width=1200',
      learnIntro: 'The clearest introduction to linkages we have ever put in a box.',
      skills: [{ title: 'Four-bar linkages', text: 'How three joints turn into a controlled digging arc.' }, { title: 'Torque & leverage', text: 'Why a longer boom lifts less, measured hands-on.' }, { title: 'Tracked drive', text: 'Differential steering and track tension.' }, { title: 'Mechanical advantage', text: 'Trading speed for force through gearing.' }, { title: 'Problem solving', text: 'Diagnosing a jammed joint by isolating it.' }, { title: 'Fine motor skill', text: 'Hundreds of precise fastenings, done properly.' }],
      inbox: [{ name: 'Structural parts', qty: '860' }, { name: 'Metal gears & axles', qty: '54' }, { name: 'Geared DC motors', qty: '2' }, { name: 'Rubber track links', qty: '96' }, { name: 'Tool set', qty: '1' }, { name: 'Illustrated build manual', qty: '148 pp' }],
      specs: [{ k: 'Assembled size', v: '46 × 20 × 26 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: '4 × AA (not included)' }, { k: 'Weight', v: '1.6 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] },
    { id: 'tower-crane', name: 'Tower Crane', category: 'Construction', badge: 'Popular', age: '10+', ageN: 10, level: 'Intermediate', buildTime: '7–9 hrs', price: 12000, mrp: 14000, reviews: 47,
      blurb: 'A real winch, trolley and slewing jib — plus the physics of counterweights.',
      long: 'Lift, traverse and slew a genuine load. The counterweight has to be calculated, not guessed — which is the whole point.',
      img: 'files/ChatGPT_Image_Aug_10_2026_05_11_27_PM_1_3.jpg?v=1787552793&width=1200',
      img2: 'files/ChatGPT_Image_Aug_10_2026_04_47_43_PM.png?v=1786362184&width=1200',
      learnIntro: 'Statics made visible. Children feel the moment a crane becomes unstable.',
      skills: [{ title: 'Moments & balance', text: 'Counterweight maths you can test by tipping it over.' }, { title: 'Pulley systems', text: 'Multiplying lift force with a reeved block.' }, { title: 'Truss structures', text: 'Why triangles carry load and squares do not.' }, { title: 'Winch mechanics', text: 'Drum diameter, cable wrap and lift speed.' }, { title: 'Precision assembly', text: 'A tall structure only stands if it is built square.' }, { title: 'Spatial reasoning', text: 'Reading flat drawings into three dimensions.' }],
      inbox: [{ name: 'Structural parts', qty: '740' }, { name: 'Metal gears & axles', qty: '42' }, { name: 'Geared DC motors', qty: '2' }, { name: 'Steel cable & hook block', qty: '1' }, { name: 'Tool set', qty: '1' }, { name: 'Illustrated build manual', qty: '132 pp' }],
      specs: [{ k: 'Assembled size', v: '38 × 38 × 72 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: '4 × AA (not included)' }, { k: 'Weight', v: '1.4 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] },
    { id: 'seed-driller', name: 'Seed Driller', category: 'Agriculture', badge: 'New', age: '9+', ageN: 9, level: 'Beginner', buildTime: '4–6 hrs', price: 9500, mrp: 11500, reviews: 28,
      blurb: 'Metering wheels, furrow openers and the mechanics of feeding a country.',
      long: 'A working seed drill with adjustable row spacing and a ground-driven metering mechanism — agricultural engineering at kitchen-table scale.',
      img: 'files/ea12b9c9-515d-4add-83e2-803a751a6fbe.jpg?v=1787552907&width=1200',
      img2: 'files/f67d0a1b-f654-4184-a1f7-f5c27e45ed9a.png?v=1786433971&width=1200',
      learnIntro: 'The gentlest entry point in the range, and the one with the best story behind it.',
      skills: [{ title: 'Ground-driven timing', text: 'Motion taken from the wheels, not a motor.' }, { title: 'Metering', text: 'Controlling flow rate with geometry alone.' }, { title: 'Ratchets & cams', text: 'Turning rotation into intermittent motion.' }, { title: 'Agricultural systems', text: 'Where food actually comes from.' }, { title: 'Measurement', text: 'Calibrating row spacing and seed depth.' }, { title: 'Confidence', text: 'A finish-in-a-weekend first real machine.' }],
      inbox: [{ name: 'Structural parts', qty: '480' }, { name: 'Metal gears & axles', qty: '31' }, { name: 'Metering discs', qty: '4' }, { name: 'Seed hopper', qty: '1' }, { name: 'Tool set', qty: '1' }, { name: 'Illustrated build manual', qty: '96 pp' }],
      specs: [{ k: 'Assembled size', v: '34 × 22 × 20 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: 'Ground driven' }, { k: 'Weight', v: '0.9 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] },
    { id: 'tractor', name: 'Tractor', category: 'Agriculture', badge: 'Popular', age: '9+', ageN: 9, level: 'Beginner', buildTime: '5–7 hrs', price: 9500, mrp: 11500, reviews: 52,
      blurb: 'Working differential, steering rack and a three-point hitch that really lifts.',
      long: 'Under the bonnet of this one is the single most useful mechanism in engineering: a working differential your child assembles gear by gear.',
      img: 'files/f67d0a1b-f654-4184-a1f7-f5c27e45ed9a.png?v=1786433971&width=1200',
      img2: 'files/ea12b9c9-515d-4add-83e2-803a751a6fbe.jpg?v=1787552907&width=1200',
      learnIntro: 'If they build one mechanism this year, make it the differential.',
      skills: [{ title: 'Differentials', text: 'How two wheels turn at different speeds on one axle.' }, { title: 'Rack & pinion', text: 'Rotation converted into steering travel.' }, { title: 'Three-point hitch', text: 'A linkage that lifts and levels at once.' }, { title: 'Traction', text: 'Tread, weight distribution and grip.' }, { title: 'Assembly discipline', text: 'Sub-assemblies tested before they go in.' }, { title: 'Curiosity', text: 'The first "wait, how does that work?" moment.' }],
      inbox: [{ name: 'Structural parts', qty: '520' }, { name: 'Metal gears & axles', qty: '38' }, { name: 'Geared DC motor', qty: '1' }, { name: 'Rubber tyres', qty: '4' }, { name: 'Tool set', qty: '1' }, { name: 'Illustrated build manual', qty: '104 pp' }],
      specs: [{ k: 'Assembled size', v: '32 × 18 × 22 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: '4 × AA (not included)' }, { k: 'Weight', v: '1.0 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] },
    { id: 'tractor-seeder', name: 'Tractor Seeder', category: 'Agriculture', badge: 'Bundle', age: '10+', ageN: 10, level: 'Intermediate', buildTime: '9–11 hrs', price: 9500, mrp: 11500, reviews: 19,
      blurb: 'Tractor plus towed seeder — two machines that have to work as one.',
      long: 'The first kit where two independent machines must be synchronised. Get the hitch geometry wrong and the seeder skips rows.',
      img: 'files/WhatsApp_Image_2026-08-03_at_12.28.45.jpg?v=1785740343&width=1200',
      img2: 'files/WhatsApp_Image_2026-08-22_at_13.02.38.jpg?v=1787384022&width=1200',
      learnIntro: 'A systems-integration build disguised as a farm toy.',
      skills: [{ title: 'Hitch geometry', text: 'Towing angles, turning radius and tracking.' }, { title: 'Power take-off', text: 'Driving an implement from the tractor.' }, { title: 'Synchronisation', text: 'Two mechanisms sharing one timing source.' }, { title: 'Iteration', text: 'Test, adjust, re-test until rows come out even.' }, { title: 'Documentation', text: 'Following a two-manual build in the right order.' }, { title: 'Collaboration', text: 'Genuinely better as a two-person build.' }],
      inbox: [{ name: 'Structural parts', qty: '990' }, { name: 'Metal gears & axles', qty: '64' }, { name: 'Geared DC motor', qty: '1' }, { name: 'Hitch & PTO assembly', qty: '1' }, { name: 'Tool set', qty: '1' }, { name: 'Illustrated build manuals', qty: '2' }],
      specs: [{ k: 'Assembled size', v: '58 × 20 × 22 cm' }, { k: 'Material', v: 'ABS + zinc alloy' }, { k: 'Power', v: '4 × AA (not included)' }, { k: 'Weight', v: '1.7 kg' }, { k: 'Origin', v: 'Made in India' }, { k: 'Warranty', v: '12 months' }] }
  ];


export const POSTS: Post[] = [
    { id: 'leadership', cat: 'Learning', read: '6 min read', date: 'August 4, 2026', title: 'How STEM activities build leadership skills', img: 'articles/ChatGPT_Image_Aug_4_2026_04_32_47_PM_118ceeb6-8e8d-45a3-868f-7e2e9a7f3a72.png?v=1787144768&width=1400',
      excerpt: 'Technical subjects get the credit, but the quiet outcome of a group build is a child who can organise other people around a problem.',
      body: [
        { t: 'p', text: 'When people think of STEM education they think of the four subjects. What they rarely picture is six children arguing about who holds the boom while the seventh reads the manual aloud — and yet that is where leadership begins.' },
        { t: 'h', text: 'Leadership is a by-product of shared difficulty' },
        { t: 'p', text: 'A build that one child can finish alone teaches persistence. A build that needs three teaches delegation, sequencing and the uncomfortable skill of telling a friend their sub-assembly is upside down. The machine is an impartial referee: it either works or it does not.' },
        { t: 'q', text: 'Children do not learn to lead by being told to lead. They learn it the first time a group needs a decision and nobody else makes one.' },
        { t: 'h', text: 'What to look for at home' },
        { t: 'p', text: 'Watch for the child who starts sorting parts before anyone asks. Watch for the one who re-reads step 14 when the gear will not mesh instead of forcing it. Those are the behaviours worth naming out loud — children repeat what gets noticed.' },
        { t: 'p', text: 'Give them builds slightly beyond what one person can comfortably finish. The gap is the lesson.' }
      ] },
    { id: 'engineering-play', cat: 'Engineering', read: '7 min read', date: 'August 4, 2026', title: 'Teaching engineering concepts through play', img: 'articles/ChatGPT_Image_Aug_4_2026_04_32_41_PM_8a4d74ce-1ff3-4886-a61d-202821c834a5.png?v=1787146194&width=1400',
      excerpt: 'Engineering is everywhere a child already looks — bridges, lifts, tractors. The trick is turning that noticing into understanding.',
      body: [
        { t: 'p', text: 'Engineering surrounds children long before anybody uses the word. The lift in the building, the crane over the construction site, the tractor on the way to a grandparent\'s village — all of it is engineering that a nine-year-old already finds interesting.' },
        { t: 'h', text: 'Start with the mechanism, not the vocabulary' },
        { t: 'p', text: 'A child who has built a gear train understands reduction ratios before ever hearing the phrase. Introduce the word afterwards and it lands on something real. Introduce it first and it is one more thing to memorise.' },
        { t: 'q', text: 'Play is not the sugar coating on the lesson. For mechanisms, play is the lesson.' },
        { t: 'h', text: 'Let the machine fail' },
        { t: 'p', text: 'The most valuable ten minutes of a build are the ones where it does not work. Resist fixing it. Ask which part moves and which does not, and let them narrow it down. That is debugging, and it transfers to every subject they will ever study.' }
      ] },
    { id: 'problem-solving', cat: 'Parenting', read: '5 min read', date: 'August 4, 2026', title: 'How hands-on learning improves problem-solving skills', img: 'articles/ChatGPT_Image_Aug_4_2026_04_31_48_PM_8fa4db02-1874-4fe9-ac9e-3ce8dcdff985.png?v=1787146134&width=1400',
      excerpt: 'Problem-solving is not a personality trait. It is a habit, and it is built by giving children problems that are genuinely theirs to solve.',
      body: [
        { t: 'p', text: 'In an age where technology reshapes work every few years, one skill stays valuable: the ability to face something that does not work and methodically make it work.' },
        { t: 'h', text: 'Why physical problems teach better' },
        { t: 'p', text: 'A worksheet problem has one answer and an authority who knows it. A jammed mechanism has a cause, and the child is the only person in the room looking at it closely enough to find it. That difference changes who owns the problem.' },
        { t: 'q', text: 'The goal is not a finished model. It is a child who is no longer frightened of a thing that does not work yet.' },
        { t: 'h', text: 'Three habits worth building' },
        { t: 'p', text: 'Isolate before you adjust. Change one thing at a time. Write down what you tried. These are the same habits a professional engineer uses on a factory floor, and a ten-year-old can learn all three from a seed drill that keeps skipping rows.' }
      ] }
  ];


export const PARTNERS: Partner[] = [
    { name: 'CBSE', img: '/assets/CBSE-logo.jpg', bg: '#FFFFFF', fg: '#3D6B33', hasImg: true, isCap: false, isBulb: false },
    { name: 'ICSE', img: '/assets/ICSE.jpg', bg: '#FFFFFF', fg: '#2C4C86', hasImg: true, isCap: false, isBulb: false },
    { name: 'State Board', img: '/assets/logo-stateboard.png', bg: '#FFFFFF', fg: '#5B4B8A', hasImg: true, isCap: false, isBulb: false },
    { name: 'IIT Alumni', img: '/assets/IIT.png', bg: '#FFFFFF', fg: '#131A22', hasImg: true, isCap: false, isBulb: false },
    { name: 'T-Works', img: '/assets/logo-tworks.png', bg: '#FFFFFF', fg: '#FFFFFF', hasImg: true, isCap: false, isBulb: false },
    { name: 'EdTech', img: '/assets/logo-edtech.png', bg: '#FFFFFF', fg: '#B58516', hasImg: true, isCap: false, isBulb: false }
  ];


export const QUIZ: QuizStep[] = [
    { id: 'age', title: 'How old is your child?', note: 'We only recommend kits they can finish.', options: [
      { label: '9–10', sub: 'Just starting out', value: 10 },
      { label: '11–12', sub: 'Ready for more parts', value: 12 },
      { label: '13 and up', sub: 'Bring on the big builds', value: 14 }
    ] },
    { id: 'interest', title: 'What are they into?', note: 'Pick whatever sounds most like them.', options: [
      { label: 'Diggers & cranes', sub: 'Construction sites', value: 'Construction' },
      { label: 'Tractors & farming', sub: 'Fields and machines', value: 'Agriculture' },
      { label: 'Anything with a motor', sub: 'If it moves, they love it', value: 'motor' },
      { label: 'Not sure yet', sub: 'Surprise us', value: 'any' }
    ] },
    { id: 'enjoy', title: 'What do they enjoy most?', note: 'This decides how big the build should be.', options: [
      { label: 'Long weekend projects', sub: 'Happy to keep going for hours', value: 'long' },
      { label: 'Quick wins', sub: 'Likes finishing things', value: 'quick' },
      { label: 'Taking things apart', sub: 'Wants to see inside', value: 'tinker' },
      { label: 'Following instructions', sub: 'Careful and methodical', value: 'method' }
    ] },
    { id: 'level', title: 'How much have they built before?', note: '', options: [
      { label: 'First ever kit', sub: 'Starting from scratch', value: 'Beginner' },
      { label: 'Built a few', sub: 'Knows their way around', value: 'Intermediate' },
      { label: 'Confident builder', sub: 'Wants a real challenge', value: 'Advanced' }
    ] },
    { id: 'budget', title: 'What feels right to spend?', note: 'Every kit includes free shipping.', options: [
      { label: 'Under ₹10,000', sub: 'Best value picks', value: 'u10' },
      { label: '₹10,000–₹13,000', sub: 'The middle of the range', value: 'mid' },
      { label: 'No limit', sub: 'Show me the best fit', value: 'any' }
    ] }
  ];
