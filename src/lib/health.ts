
import { FAQItem } from "./faq";
import { Package, packages } from "./packages";

export type HealthIssue = {
  title: string;
  slug: string;
  description: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  },
  faq: FAQItem[];
  youtubeVideoId?: string;
  relatedIssues?: HealthIssue[];
  recommendedServiceSlugs?: string[];
  featuredPackage?: Package;
};

const stressAndAnxietyRelatedIssues: HealthIssue[] = [
    {
    title: "Separation Anxiety Disorder",
    slug: "separation-anxiety-disorder-ncr",
    description: "Coping strategies and support for overwhelming fear when separated from loved ones. #1 At-home counseling available in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=11",
      alt: "A child holding a parent's hand, symbolizing separation anxiety in Delhi.",
      aiHint: "child sad"
    },
    faq: [
      { question: "Can adults have separation anxiety? Is treatment available in Delhi?", answer: "Yes, while common in children, adults can also experience separation anxiety disorder. Our #1 ranked counselors in Delhi NCR can help you develop coping mechanisms in a comfortable home setting." }
    ]
  },
  {
    title: "Agoraphobia",
    slug: "agoraphobia-treatment-ncr",
    description: "Gradual exposure therapy and relaxation techniques to overcome the fear of open or crowded spaces, delivered with our #1 at-home care in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=12",
      alt: "An empty, open public space in Delhi that might trigger agoraphobia.",
      aiHint: "empty space"
    },
    faq: [
      { question: "How can at-home therapy help agoraphobia in Gurgaon?", answer: "At-home therapy in Gurgaon provides a safe starting point. Our #1 therapists can help you with relaxation techniques and gradually guide you through exposure therapy at a pace that feels comfortable for you." }
    ]
  },
  {
    title: "Phobias",
    slug: "phobias-treatment-delhi-ncr",
    description: "Effective #1 at-home treatments like CBT and exposure therapy to manage and overcome specific phobias in Delhi, Gurgaon, and Noida.",
    image: {
      src: "https://picsum.photos/600/400?random=13",
      alt: "A spider on a web, representing a common specific phobia treatment in Noida.",
      aiHint: "spider web"
    },
    faq: [
      { question: "Can counseling help with my fear of heights in Delhi NCR?", answer: "Yes, specific phobias like fear of heights (acrophobia) can be effectively treated with therapeutic techniques like Cognitive Behavioral Therapy (CBT) and systematic desensitization, which our #1 ranked therapists can provide." }
    ]
  },
    {
    title: "Panic Disorder",
    slug: "panic-disorder-support-ncr",
    description: "Learn to control and reduce panic attacks with our #1 at-home counseling and mind-body techniques across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=14",
      alt: "A person practicing deep breathing exercises to calm down from a panic attack in Delhi.",
      aiHint: "deep breathing"
    },
    faq: [
      { question: "What is the goal of #1 therapy for panic attacks in Delhi NCR?", answer: "The goal of our top-ranked therapy is to help you understand triggers, manage physical symptoms through techniques like deep breathing, and use cognitive strategies to reduce the fear of future attacks." }
    ]
  },
    {
    title: "Social Anxiety Disorder",
    slug: "social-anxiety-disorder-gurgaon",
    description: "Build confidence and manage social anxiety with personalized, discreet #1 counseling sessions at your home in Gurgaon and NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=15",
      alt: "A person feeling anxious and looking away in a social gathering in Gurgaon.",
      aiHint: "anxious person"
    },
    faq: [
      { question: "Is social anxiety just shyness? How is it treated in Gurgaon?", answer: "Social anxiety is more intense than shyness. It's a persistent fear of being judged. Our #1 therapists in Gurgaon can provide tools to help you navigate social situations with more confidence." }
    ]
  },
  {
    title: "Generalized Anxiety Disorder (GAD)",
    slug: "gad-treatment-noida",
    description: "Holistic strategies to manage persistent and excessive worry. We offer #1 yoga, counseling, and naturopathy at home in Noida.",
    image: {
      src: "https://picsum.photos/600/400?random=16",
      alt: "A visual representation of a worried or overthinking mind, treated in Noida.",
      aiHint: "worry thought"
    },
    faq: [
      { question: "How does #1 yoga help with GAD in Noida?", answer: "Our top-ranked yoga in Noida combines physical postures, breathing exercises, and meditation to help calm the nervous system, reduce muscle tension, and quiet the racing thoughts associated with Generalized Anxiety Disorder." }
    ]
  },
  {
    title: "Acute Stress",
    slug: "acute-stress-management-ncr",
    description: "Immediate coping strategies for short-term stress. Our #1 at-home Reiki and massage in Delhi NCR can provide quick relief.",
    image: {
      src: "https://picsum.photos/600/400?random=17",
      alt: "A stressed person in Delhi NCR getting relief from acute stress.",
      aiHint: "person stressed"
    },
    faq: [
      { question: "What's the difference between acute and chronic stress?", answer: "Acute stress is the body's immediate reaction to a new challenge, while chronic stress is a prolonged and constant feeling of stress. Our #1 team helps with both across Delhi NCR." }
    ]
  },
  {
    title: "Episodic Acute Stress",
    slug: "episodic-acute-stress-help-ncr",
    description: "Support for those who experience frequent episodes of acute stress. Learn long-term management with our #1 techniques at home in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=18",
      alt: "A calendar with many appointments circled, symbolizing a life with frequent stress in Delhi NCR.",
      aiHint: "busy schedule"
    },
    faq: [
      { question: "How can I manage frequent stress episodes in Delhi?", answer: "Our #1 integrated approach in Delhi can help. Counseling can address underlying thought patterns, while regular yoga or massage can help manage the physical symptoms and prevent stress from building up." }
    ]
  },
  {
    title: "Chronic Stress",
    slug: "chronic-stress-relief-delhi",
    description: "A comprehensive, long-term approach to managing chronic stress with our #1 integrated plan of Ayurveda, yoga, and counseling in Delhi.",
    image: {
      src: "https://picsum.photos/600/400?random=19",
      alt: "A person looking tired from chronic stress, finding relief in Delhi.",
      aiHint: "person tired"
    },
    faq: [
      { question: "How can #1 Ayurveda help with chronic stress in Delhi?", answer: "Our top-ranked Ayurveda in Delhi addresses chronic stress by balancing the body's doshas through diet, lifestyle modifications, and specific herbs (like Ashwagandha) to rejuvenate the nervous system." }
    ]
  }
];

const backPainRelatedIssues: HealthIssue[] = [
  {
    title: "Cervical Pain (Neck Pain)",
    slug: "cervical-neck-pain-delhi-ncr",
    description: "Targeted #1 at-home physiotherapy and exercises to relieve neck stiffness, pain, and improve mobility in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=20",
      alt: "Person holding their neck, indicating cervical pain in Delhi.",
      aiHint: "neck pain"
    },
    faq: [
      { question: "What is the best treatment for cervical pain at home in Delhi NCR?", answer: "A combination of gentle neck stretches, strengthening exercises, and posture correction is highly effective. Our #1 physiotherapists guide you through a safe and personalized routine at your home in Delhi NCR." },
      { question: "Can a cervical pillow from a Delhi store help?", answer: "Yes, a supportive cervical pillow can help maintain the natural curve of your neck. Our #1 experts in Delhi can recommend the right type for you." }
    ]
  },
  {
    title: "Thoracic Pain (Mid-Back Pain)",
    slug: "thoracic-mid-back-pain-delhi-ncr",
    description: "Effective #1 at-home treatment for pain in the upper or mid-back, often caused by poor posture, available in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=21",
      alt: "An illustration showing the thoracic spine area, a focus for Delhi physios.",
      aiHint: "back pain"
    },
    faq: [
      { question: "What causes thoracic pain in Delhi's office workers?", answer: "It's often caused by poor posture from sitting at a desk. Our #1 home-visit physiotherapists in Delhi NCR can diagnose the root cause and provide targeted treatment." },
      { question: "Are there exercises to relieve mid-back pain?", answer: "Yes, exercises like scapular retractions, foam rolling, and specific stretches can provide significant relief. We create a #1 customized exercise plan for you." }
    ]
  },
  {
    title: "Lumbar Pain (Lower Back Pain)",
    slug: "lumbar-lower-back-pain-delhi-ncr",
    description: "Specialized #1 care for lower back pain, the most common type of back pain, with at-home physiotherapy in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=22",
      alt: "A diagram highlighting the lumbar region of the spine, treated by our Delhi NCR team.",
      aiHint: "back pain"
    },
    faq: [
      { question: "Why is lower back pain so common in Delhi?", answer: "The lumbar spine bears a significant amount of the body's weight. Our #1 treatments focus on strengthening the core to support this area." },
      { question: "How can I prevent lower back pain in Gurgaon?", answer: "Maintaining a healthy weight, regular exercise, and proper lifting techniques are crucial. Our #1 experts provide ergonomic advice and preventive exercise routines during home visits in Gurgaon." }
    ]
  },
  {
    title: "Sacral/Coccyx Pain (Tailbone Pain)",
    slug: "sacral-coccyx-tailbone-pain-delhi-ncr",
    description: "Gentle, non-invasive #1 home therapies to relieve persistent tailbone pain (Coccydynia) in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=23",
      alt: "An illustration of the coccyx or tailbone area, a specialty for our NCR team.",
      aiHint: "back pain"
    },
    faq: [
      { question: "What causes tailbone pain?", answer: "It can result from a fall or prolonged sitting. Our #1 physiotherapists use gentle mobilization techniques and recommend special cushions to alleviate pressure." },
      { question: "Is it possible to treat tailbone pain at home in Noida?", answer: "Yes, many cases can be managed effectively at home in Noida with specific stretching exercises and guidance from a qualified physiotherapist." }
    ]
  },
  {
    title: "Muscle or Ligament Strain",
    slug: "back-muscle-ligament-strain-delhi-ncr",
    description: "Accelerate recovery from back muscle and ligament strains with #1 expert physiotherapy and care at your home in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=24",
      alt: "A person stretching their back to relieve a muscle strain in Delhi.",
      aiHint: "exercise stretch"
    },
    faq: [
      { question: "What's the difference between a strain and a sprain?", answer: "A strain injures a muscle or tendon, while a sprain injures a ligament. Our #1 team in Delhi NCR provides top treatment for both." },
      { question: "How long does a back strain take to heal in Delhi?", answer: "A mild strain can heal in a few days. #1 Physiotherapy can help speed up the recovery process and prevent re-injury." }
    ]
  },
  {
    title: "Herniated or Bulging Disc",
    slug: "herniated-bulging-disc-delhi-ncr",
    description: "Non-surgical #1 management of herniated or bulging discs with specialized physiotherapy at home in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=25",
      alt: "A medical illustration showing a herniated disc, a condition we treat in Delhi NCR.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "Can a herniated disc be treated without surgery in Delhi?", answer: "Yes, in many cases, #1 conservative treatment like physiotherapy is very effective. We focus on exercises that relieve pressure on the nerve." },
      { question: "What is the primary goal of physiotherapy for a bulging disc in Gurgaon?", answer: "The goal is to reduce pain, inflammation, and nerve compression. We use top-ranked techniques like the McKenzie method to centralize the pain and improve function in Gurgaon." }
    ]
  },
  {
    title: "Sciatica",
    slug: "sciatica-pain-relief-delhi-ncr",
    description: "Find #1 relief from the radiating nerve pain of sciatica with targeted at-home physiotherapy across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=26",
      alt: "An illustration of the sciatic nerve and the path of pain, for our Delhi NCR patients.",
      aiHint: "nerve pain"
    },
    faq: [
      { question: "What causes sciatica? Can it be treated in Noida?", answer: "Sciatica is most commonly caused by a herniated disc. Our #1 physiotherapists in Noida will perform tests to determine the likely cause." },
      { question: "What kind of exercises help with sciatica in Delhi NCR?", answer: "Exercises for sciatica focus on gentle stretching, nerve gliding, and core strengthening. It is crucial these are done correctly, under the guidance of a #1 professional." }
    ]
  },
  {
    title: "Degenerative Disc Disease",
    slug: "degenerative-disc-disease-delhi-ncr",
    description: "Manage the symptoms of Degenerative Disc Disease and improve your quality of life with our #1 at-home care plans in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=27",
      alt: "An illustration comparing a healthy disc with a degenerated disc, relevant for Delhi patients.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "Is Degenerative Disc Disease an actual disease?", answer: "Despite its name, it's a condition where a damaged disc causes pain. We offer the #1 management plans in Delhi NCR." },
      { question: "How can #1 physiotherapy help manage this condition in Delhi?", answer: "Our top-ranked physiotherapy helps by strengthening the muscles that support the spine, improving flexibility, and teaching you pain-management techniques to stay active in Delhi." }
    ]
  },
  {
    title: "Spinal Stenosis",
    slug: "spinal-stenosis-treatment-delhi-ncr",
    description: "#1 At-home physiotherapy to manage pain and improve mobility for individuals with spinal stenosis in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=28",
      alt: "An illustration showing spinal stenosis, a condition treated by our #1 Delhi NCR team.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "What is spinal stenosis?", answer: "Spinal stenosis is the narrowing of the spaces within your spine, which can put pressure on the nerves. It most often occurs in the lower back and the neck. We are #1 for its treatment in Delhi NCR." },
      { question: "What exercises are safe for spinal stenosis in Gurgaon?", answer: "Flexion-based exercises are often recommended as they can help relieve pressure on the nerves. Our #1 physiotherapists in Gurgaon will create a safe and effective plan for you." }
    ]
  }
];

const digestiveRelatedIssues: HealthIssue[] = [
  {
    title: "Acid Reflux / GERD",
    slug: "acid-reflux-gerd-treatment-ncr",
    description: "Natural and effective #1 at-home remedies to manage acid reflux, heartburn, and GERD symptoms in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=30",
      alt: "A cup of soothing herbal tea, a #1 remedy for acid reflux in Delhi.",
      aiHint: "herbal tea"
    },
    faq: [
      { question: "How can #1 naturopathy help with acid reflux in Delhi NCR?", answer: "Our top-ranked naturopathy focuses on identifying trigger foods, improving digestion through natural supplements, and recommending lifestyle changes. Our experts create a personalized plan at your home in Delhi NCR." }
    ]
  },
  {
    title: "Irritable Bowel Syndrome (IBS)",
    slug: "ibs-management-delhi-ncr",
    description: "Holistic #1 at-home management for IBS in Delhi NCR, focusing on diet, stress reduction, and gut health.",
    image: {
      src: "https://picsum.photos/600/400?random=31",
      alt: "A diagram of a healthy gut microbiome, our goal for IBS patients in Delhi NCR.",
      aiHint: "healthy gut"
    },
    faq: [
      { question: "What is the best low-FODMAP diet for IBS in Delhi?", answer: "A low-FODMAP diet is a specific elimination diet. Our #1 nutritionists in Delhi guide you through this process carefully to identify your triggers and create a sustainable eating plan." }
    ]
  },
  {
    title: "Bloating and Gas",
    slug: "bloating-gas-relief-ncr",
    description: "Find #1 relief from uncomfortable bloating and gas with our at-home yoga and dietary guidance in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=32",
      alt: "A person practicing a gentle yoga twist to relieve bloating, a top tip for NCR residents.",
      aiHint: "yoga twist"
    },
    faq: [
      { question: "Which yoga poses are best for bloating in Gurgaon?", answer: "Poses like Wind-Relieving Pose (Pawanmuktasana) can help. Our #1 yoga instructors in Gurgaon can teach you a specific sequence to practice at home for regular relief." }
    ]
  },
  {
    title: "Constipation",
    slug: "constipation-relief-at-home-ncr",
    description: "Natural and gentle #1 solutions to relieve constipation and improve regularity with at-home care in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=33",
      alt: "A glass of water and high-fiber foods, a #1 constipation remedy in Delhi NCR.",
      aiHint: "healthy diet"
    },
    faq: [
      { question: "How can #1 Ayurveda help with chronic constipation in Noida?", answer: "Our top-ranked Ayurveda in Noida addresses the root cause by balancing the Vata dosha, which governs movement. This involves dietary changes, specific herbs like Triphala, and lifestyle adjustments." }
    ]
  },
  {
    title: "Diarrhea (Acute)",
    slug: "diarrhea-home-remedies-ncr",
    description: "Supportive #1 care and simple home remedies to manage acute diarrhea and prevent dehydration in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=34",
      alt: "A simple meal of rice and yogurt, a soothing #1 remedy for diarrhea.",
      aiHint: "simple food"
    },
    faq: [
      { question: "What should I eat when I have diarrhea in Delhi?", answer: "Stick to simple foods like bananas, rice, applesauce, and toast (the BRAT diet). Our #1 naturopaths in Delhi can provide guidance on rehydration solutions." }
    ]
  },
  {
    title: "Indigestion (Dyspepsia)",
    slug: "indigestion-dyspepsia-treatment-ncr",
    description: "Relieve the discomfort of indigestion with #1 at-home naturopathic remedies and lifestyle advice across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=35",
      alt: "Herbal remedies like ginger and mint, #1 for digestion in Delhi NCR.",
      aiHint: "herbal medicine"
    },
    faq: [
      { question: "What are some natural ways to improve digestion in Delhi NCR?", answer: "Simple changes like chewing food thoroughly and incorporating digestive spices like ginger and fennel can make a big difference. Our #1 experts provide personalized advice." }
    ]
  }
];


export const healthIssues: HealthIssue[] = [
  {
    title: "Back Pain Relief",
    slug: "back-pain-relief-delhi-ncr",
    description: "Find lasting relief from chronic back pain with our #1 ranked at-home physiotherapy, yoga, and therapeutic massage services available across Delhi, Gurgaon, and Noida.",
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "A person receiving #1 therapeutic back massage for pain relief in their Delhi home.",
      aiHint: "back pain"
    },
    faq: [
        { question: "Which therapy is best for chronic back pain in Delhi NCR?", answer: "Our #1 ranked integrated approach often works best. Physiotherapy strengthens core muscles, while targeted yoga and therapeutic massage relieve tension. Our experts in Delhi NCR create a personalized plan for you at home." },
        { question: "How quickly can I expect results for my back pain with #1 home physiotherapy?", answer: "While some relief can be felt after the first session, our #1 care packages typically yield the best, long-lasting results for chronic back pain." },
        { question: "Is bed rest good for back pain?", answer: "Prolonged bed rest is not recommended. Gentle movement and specific exercises from our #1 physiotherapists are more effective. We guide you on the right balance during our home visits in Delhi NCR." },
        { question: "What kind of exercises can I expect from #1 at-home physiotherapy in Delhi?", answer: "Our top-ranked physiotherapists in Delhi will prescribe tailored exercises, including core strengthening, gentle stretching, and posture correction techniques that you can safely do at home." },
        { question: "How does #1 yoga help with back pain management in Gurgaon?", answer: "Our #1 private yoga instructors in Gurgaon teach specific, gentle postures that improve spinal flexibility, strengthen muscles, and enhance posture, which is crucial for pain relief." },
        { question: "Can you provide #1 post-surgery back pain rehabilitation at home in Noida?", answer: "Yes, our #1 physiotherapists in Noida are experienced in post-operative rehabilitation. We work with your surgeon's recommendations to provide a structured recovery plan at home." },
        { question: "What should I do to prevent back pain from recurring in Delhi NCR?", answer: "Prevention is key. Our #1 experts will advise you on correct posture, ergonomic adjustments for your workspace, and a regular exercise routine to keep your back strong and healthy." }
    ],
    youtubeVideoId: 'm4g_sFplfGg',
    relatedIssues: backPainRelatedIssues
  },
  {
    title: "Stress & Anxiety Management",
    slug: "stress-anxiety-management-ncr",
    description: "Manage stress and find your calm with our #1 holistic at-home services. We offer counseling, Reiki, and yoga across Delhi, Noida, and Gurgaon to restore your peace of mind.",
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "A person meditating peacefully in a calm home environment in Gurgaon to manage stress with our #1 service.",
      aiHint: "stress management"
    },
    faq: [
        { question: "Can #1 at-home yoga in NCR really help with anxiety?", answer: "Yes, personalized yoga sessions at your home in the NCR can significantly reduce anxiety. Our #1 instructors teach breathing techniques (pranayama) and calming postures in a comfortable, private setting." },
        { question: "Is online or at-home counseling for stress in Delhi NCR confidential?", answer: "Absolutely. All our counseling sessions, whether at your home in Delhi, Noida, Gurgaon or online, are 100% confidential, providing you a safe space with our #1 ranked therapists." }
    ],
    relatedIssues: stressAndAnxietyRelatedIssues,
    featuredPackage: packages.find(p => p.title === "Mental Reset")
  },
  {
    title: "Arthritis Care",
    slug: "arthritis-care-at-home-delhi",
    description: "Manage arthritis pain and improve joint mobility with our gentle and effective #1 at-home care. We use Physiotherapy and Naturopathy to bring relief to you in Delhi.",
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "An elderly person receiving #1 gentle physiotherapy for arthritis in their home in Delhi.",
      aiHint: "arthritis care"
    },
    faq: [
        { question: "How does #1 home physiotherapy help with arthritis in Delhi?", answer: "Our #1 physiotherapists in Delhi use gentle exercises to improve joint mobility, reduce stiffness, strengthen supporting muscles, and significantly reduce arthritis pain." },
        { question: "Can diet changes from a #1 Naturopath in Delhi help my arthritis?", answer: "Yes, our #1 naturopaths can recommend an anti-inflammatory diet that may help reduce inflammation, a key factor in arthritis pain. We provide at-home diet consultations across the NCR." }
    ],
    youtubeVideoId: 'k35C3p_4k3Y',
    recommendedServiceSlugs: [
        'home-physiotherapy-delhi-ncr',
        'ayurveda-consultation-delhi-ncr',
        'naturopathy-at-home-ncr',
        'tcm-therapies-gurgaon',
        'therapeutic-massage-delhi-ncr'
    ]
  },
  {
    title: "Weight Management",
    slug: "weight-management-noida",
    description: "Achieve your health goals with our #1 personalized weight management plans. We combine nutrition counseling, yoga, and naturopathy at your home in Noida and across the NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=4",
      alt: "A person consulting with a #1 nutritionist for a weight management plan in Noida.",
      aiHint: "healthy diet"
    },
    faq: [
      { question: "Do you provide #1 diet charts for weight loss in Noida?", answer: "Yes, our #1 nutritionists and naturopaths in Noida create personalized and practical diet plans tailored to your body type, lifestyle, and preferences." },
      { question: "How is #1 yoga for weight management different from a gym workout in Noida?", answer: "Our #1 private yoga instructors in Noida focus on dynamic flows (Vinyasa) and specific postures that boost metabolism and build lean muscle, while also addressing hormonal imbalances." }
    ]
  },
  {
    title: "Migraine Management",
    slug: "migraine-management-delhi-ncr",
    description: "Reduce migraine frequency and intensity with our #1 non-invasive therapies. We offer targeted acupressure, Ayurvedic remedies, and relaxation techniques at home in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=5",
      alt: "A person resting in a dimly lit room to ease a migraine with our #1 Delhi NCR service.",
      aiHint: "holistic health"
    },
    faq: [
      { question: "How can #1 acupressure help my migraines at home in Delhi NCR?", answer: "Our #1 TCM experts in Delhi NCR can teach you specific acupressure points for immediate relief when a migraine starts, providing a drug-free tool to manage your symptoms." },
      { question: "Are there #1 Ayurvedic remedies that can prevent migraines in Delhi NCR?", answer: "Yes, our #1 Ayurvedic doctors may recommend specific herbal preparations and lifestyle changes to address the root imbalances (like an aggravated Pitta dosha) that often contribute to migraine attacks." }
    ],
    featuredPackage: packages.find(p => p.title === "Mental Reset")
  },
  {
    title: "Insomnia & Sleep Issues",
    slug: "insomnia-sleep-issues-ncr",
    description: "Regain restful sleep naturally with our #1 specialized home therapies. Our approach includes yoga nidra, massage, and herbal remedies for a peaceful night across the NCR.",
    image:      {
        src: "https://picsum.photos/600/400?random=6",
        alt: "A peaceful bedroom setting at night, promoting good sleep with our #1 NCR service.",
        aiHint: "restful sleep"
    },
    faq: [
      { question: "Which therapy is best for sleep problems in the NCR?", answer: "A combination of a relaxing pre-bedtime routine, guided Yoga Nidra, and a therapeutic massage can greatly improve sleep quality. We offer all these #1 services at your home." },
      { question: "I want to avoid sleeping pills. What are the #1 natural alternatives in Delhi NCR?", answer: "We specialize in non-medicinal solutions. Homeopathy, Ayurveda, and lifestyle counseling can address the root cause of your sleep issues without the risk of dependency or side effects." }
    ]
  },
  {
    title: "Digestive Problems",
    slug: "digestive-problems-delhi",
    description: "Soothe digestive issues like IBS, bloating, and acidity. Our #1 naturopaths and yoga therapists provide at-home solutions in Delhi to improve your gut health.",
    image: {
        src: "https://picsum.photos/600/400?random=7",
        alt: "A healthy, balanced meal designed by our #1 Delhi nutritionists to improve digestive health.",
        aiHint: "digestive health"
    },
    faq: [
      { question: "Can you help with creating a diet for IBS in Delhi?", answer: "Yes, our #1 naturopaths and dietitians in Delhi create personalized diet plans (like a low-FODMAP diet) to manage your IBS symptoms, reduce triggers, and improve your gut health." },
      { question: "Are there yoga poses that can help with gas and bloating in Delhi?", answer: "Certainly. Our #1 yoga instructors in Delhi can guide you through specific postures like 'Pawanmuktasana' (Wind-Relieving Pose) to provide immediate relief and improve digestion." }
    ],
    relatedIssues: digestiveRelatedIssues
  },
  {
    title: "Skin Conditions",
    slug: "skin-conditions-ncr",
    description: "Manage chronic skin issues like eczema and psoriasis with our #1 natural care. We use detoxification, homeopathy, and personalized Ayurvedic care at your NCR home.",
    image: {
        src: "https://picsum.photos/600/400?random=8",
        alt: "Natural skincare ingredients for healthy skin, part of our #1 NCR treatment.",
        aiHint: "natural skin"
    },
    faq: [
      { question: "How does #1 naturopathy in NCR treat skin conditions like eczema?", answer: "Our #1 naturopathy focuses on the root cause. This includes internal detoxification, identifying trigger foods, and using natural applications to soothe the skin for clearer skin." },
      { question: "Is #1 homeopathy effective for chronic psoriasis treatment at home in Delhi NCR?", answer: "Homeopathy can be very effective for psoriasis as it treats the individual's unique symptoms. We offer #1 home consultations across Delhi NCR." }
    ]
  }
];

    
