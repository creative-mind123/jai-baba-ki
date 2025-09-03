
import { FAQItem } from "./faq";

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
};

const stressAndAnxietyRelatedIssues: HealthIssue[] = [
    {
    title: "Separation Anxiety Disorder",
    slug: "separation-anxiety-disorder-ncr",
    description: "Coping strategies and support for overwhelming fear when separated from loved ones. At-home counseling available in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=11",
      alt: "A child holding a parent's hand, symbolizing separation anxiety.",
      aiHint: "child sad"
    },
    faq: [
      { question: "Can adults have separation anxiety?", answer: "Yes, while common in children, adults can also experience separation anxiety disorder. Our counselors can help you develop coping mechanisms in a comfortable home setting." }
    ]
  },
  {
    title: "Agoraphobia",
    slug: "agoraphobia-treatment-ncr",
    description: "Gradual exposure therapy and relaxation techniques to overcome the fear of open or crowded spaces, delivered at your home.",
    image: {
      src: "https://picsum.photos/600/400?random=12",
      alt: "An empty, open public space that might trigger agoraphobia.",
      aiHint: "empty space"
    },
    faq: [
      { question: "How can at-home therapy help agoraphobia?", answer: "At-home therapy provides a safe starting point. Our therapists can help you with relaxation techniques and gradually guide you through exposure therapy at a pace that feels comfortable for you." }
    ]
  },
  {
    title: "Phobias",
    slug: "phobias-treatment-delhi-ncr",
    description: "Effective at-home treatments like CBT and exposure therapy to manage and overcome specific phobias.",
    image: {
      src: "https://picsum.photos/600/400?random=13",
      alt: "A spider on a web, representing a common specific phobia.",
      aiHint: "spider web"
    },
    faq: [
      { question: "Can counseling help with my fear of heights?", answer: "Yes, specific phobias like fear of heights (acrophobia) can be effectively treated with therapeutic techniques like Cognitive Behavioral Therapy (CBT) and systematic desensitization, which our therapists can provide." }
    ]
  },
    {
    title: "Panic Disorder",
    slug: "panic-disorder-support-ncr",
    description: "Learn to control and reduce panic attacks with our at-home counseling and mind-body techniques across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=14",
      alt: "A person practicing deep breathing exercises to calm down from a panic attack.",
      aiHint: "deep breathing"
    },
    faq: [
      { question: "What is the goal of therapy for panic attacks?", answer: "The goal is to help you understand the triggers, manage the physical symptoms through techniques like deep breathing, and use cognitive strategies to reduce the fear of future attacks." }
    ]
  },
    {
    title: "Social Anxiety Disorder",
    slug: "social-anxiety-disorder-gurgaon",
    description: "Build confidence and manage social anxiety with personalized, discreet counseling sessions at your home in Gurgaon and NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=15",
      alt: "A person feeling anxious and looking away in a social gathering.",
      aiHint: "anxious person"
    },
    faq: [
      { question: "Is social anxiety just shyness?", answer: "Social anxiety is more intense than shyness. It's a persistent fear of being judged or scrutinized by others. Our therapists can provide tools to help you navigate social situations with more confidence." }
    ]
  },
  {
    title: "Generalized Anxiety Disorder (GAD)",
    slug: "gad-treatment-noida",
    description: "Holistic strategies to manage persistent and excessive worry. We offer yoga, counseling, and naturopathy at home in Noida.",
    image: {
      src: "https://picsum.photos/600/400?random=16",
      alt: "A visual representation of a worried or overthinking mind.",
      aiHint: "worry thought"
    },
    faq: [
      { question: "How does yoga help with GAD?", answer: "Yoga combines physical postures, breathing exercises, and meditation to help calm the nervous system, reduce muscle tension, and quiet the racing thoughts associated with Generalized Anxiety Disorder." }
    ]
  },
  {
    title: "Acute Stress",
    slug: "acute-stress-management-ncr",
    description: "Immediate coping strategies for short-term stress caused by recent events. At-home Reiki and massage can provide quick relief.",
    image: {
      src: "https://picsum.photos/600/400?random=17",
      alt: "A stressed person sitting at a desk with their head in their hands.",
      aiHint: "person stressed"
    },
    faq: [
      { question: "What's the difference between acute and chronic stress?", answer: "Acute stress is the body's immediate reaction to a new challenge, while chronic stress is a prolonged and constant feeling of stress that can negatively affect your health over time." }
    ]
  },
  {
    title: "Episodic Acute Stress",
    slug: "episodic-acute-stress-help-ncr",
    description: "Support for those who experience frequent episodes of acute stress. Learn long-term management techniques at home.",
    image: {
      src: "https://picsum.photos/600/400?random=18",
      alt: "A calendar with many appointments circled, symbolizing a life with frequent stress.",
      aiHint: "busy schedule"
    },
    faq: [
      { question: "How can I manage frequent stress episodes?", answer: "Our integrated approach can help. Counseling can address underlying thought patterns, while regular yoga or massage can help manage the physical symptoms and prevent stress from building up." }
    ]
  },
  {
    title: "Chronic Stress",
    slug: "chronic-stress-relief-delhi",
    description: "A comprehensive, long-term approach to managing chronic stress with an integrated plan of Ayurveda, yoga, and counseling in Delhi.",
    image: {
      src: "https://picsum.photos/600/400?random=19",
      alt: "A person looking tired and drained, representing the effects of chronic stress.",
      aiHint: "person tired"
    },
    faq: [
      { question: "How can Ayurveda help with chronic stress?", answer: "Ayurveda addresses chronic stress by balancing the body's doshas through diet, lifestyle modifications, and specific herbs (like Ashwagandha) to rejuvenate the nervous system and improve resilience." }
    ]
  }
];

const backPainRelatedIssues: HealthIssue[] = [
  {
    title: "Cervical Pain (Neck Pain)",
    slug: "cervical-neck-pain-delhi-ncr",
    description: "Targeted at-home physiotherapy and exercises to relieve neck stiffness, pain, and improve mobility in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=20",
      alt: "Person holding their neck, indicating cervical pain.",
      aiHint: "neck pain"
    },
    faq: [
      { question: "What is the best treatment for cervical pain at home?", answer: "A combination of gentle neck stretches, strengthening exercises, and posture correction is highly effective. Our physiotherapists guide you through a safe and personalized routine at your home in Delhi NCR." },
      { question: "Can using a cervical pillow help?", answer: "Yes, a supportive cervical pillow can help maintain the natural curve of your neck while you sleep, reducing strain. Our experts can recommend the right type for you." }
    ]
  },
  {
    title: "Thoracic Pain (Mid-Back Pain)",
    slug: "thoracic-mid-back-pain-delhi-ncr",
    description: "Effective at-home treatment for pain in the upper or mid-back, often caused by poor posture or muscle strain.",
    image: {
      src: "https://picsum.photos/600/400?random=21",
      alt: "An illustration showing the thoracic spine area.",
      aiHint: "back pain"
    },
    faq: [
      { question: "What causes thoracic pain?", answer: "It's often caused by poor posture (especially from sitting at a desk), muscle irritation, or joint dysfunction. Our home-visit physiotherapists in Delhi NCR can diagnose the root cause and provide targeted treatment." },
      { question: "Are there exercises to relieve mid-back pain?", answer: "Yes, exercises like scapular retractions, foam rolling, and specific stretches can provide significant relief. We create a customized exercise plan for you." }
    ]
  },
  {
    title: "Lumbar Pain (Lower Back Pain)",
    slug: "lumbar-lower-back-pain-delhi-ncr",
    description: "Specialized care for lower back pain, the most common type of back pain, with at-home physiotherapy in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=22",
      alt: "A diagram highlighting the lumbar region of the spine.",
      aiHint: "back pain"
    },
    faq: [
      { question: "Why is lower back pain so common?", answer: "The lumbar spine bears a significant amount of the body's weight, making it susceptible to strain from lifting, twisting, or poor posture. Our treatments focus on strengthening the core to support this area." },
      { question: "How can I prevent lower back pain?", answer: "Maintaining a healthy weight, regular exercise, and using proper lifting techniques are crucial. Our experts provide ergonomic advice and preventive exercise routines during home visits." }
    ]
  },
  {
    title: "Sacral/Coccyx Pain (Tailbone Pain)",
    slug: "sacral-coccyx-tailbone-pain-delhi-ncr",
    description: "Gentle, non-invasive home therapies to relieve persistent tailbone pain (Coccydynia) in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=23",
      alt: "An illustration of the coccyx or tailbone area.",
      aiHint: "back pain"
    },
    faq: [
      { question: "What causes tailbone pain?", answer: "It can result from a fall, prolonged sitting on a hard surface, or childbirth. Our physiotherapists use gentle mobilization techniques and recommend special cushions to alleviate pressure." },
      { question: "Is it possible to treat tailbone pain at home?", answer: "Yes, many cases can be managed effectively at home with specific stretching exercises, posture adjustments, and guidance from a qualified physiotherapist." }
    ]
  },
  {
    title: "Muscle or Ligament Strain",
    slug: "back-muscle-ligament-strain-delhi-ncr",
    description: "Accelerate recovery from back muscle and ligament strains with expert physiotherapy and care at your home.",
    image: {
      src: "https://picsum.photos/600/400?random=24",
      alt: "A person stretching their back to relieve a muscle strain.",
      aiHint: "exercise stretch"
    },
    faq: [
      { question: "What's the difference between a strain and a sprain?", answer: "A strain involves injury to a muscle or the band of tissue that attaches a muscle to a bone (a tendon), while a sprain injures the bands of tissue that connect two bones together (ligaments). Treatment is often similar, focusing on rest and gradual rehabilitation." },
      { question: "How long does a back strain take to heal?", answer: "A mild strain can heal in a few days to a week, while a more severe strain can take several weeks. Physiotherapy can help speed up the recovery process and prevent re-injury." }
    ]
  },
  {
    title: "Herniated or Bulging Disc",
    slug: "herniated-bulging-disc-delhi-ncr",
    description: "Non-surgical management of herniated or bulging discs with specialized physiotherapy at home in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=25",
      alt: "A medical illustration showing a herniated disc pressing on a nerve.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "Can a herniated disc be treated without surgery?", answer: "Yes, in many cases, conservative treatment like physiotherapy is very effective. We focus on exercises that relieve pressure on the nerve and strengthen supporting muscles." },
      { question: "What is the primary goal of physiotherapy for a bulging disc?", answer: "The goal is to reduce pain, inflammation, and nerve compression. We use techniques like mechanical diagnosis and therapy (MDT) or the McKenzie method to centralize the pain and improve function." }
    ]
  },
  {
    title: "Sciatica",
    slug: "sciatica-pain-relief-delhi-ncr",
    description: "Find relief from the radiating nerve pain of sciatica with targeted at-home physiotherapy across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=26",
      alt: "An illustration of the sciatic nerve and the path of pain.",
      aiHint: "nerve pain"
    },
    faq: [
      { question: "What causes sciatica?", answer: "Sciatica is most commonly caused by a herniated disc pressing on the sciatic nerve. Other causes can include spinal stenosis or piriformis syndrome. Our physiotherapists will perform tests to determine the likely cause." },
      { question: "What kind of exercises help with sciatica?", answer: "Exercises for sciatica focus on gentle stretching of the piriformis muscle, nerve gliding exercises, and core strengthening. It is crucial these are done correctly, under the guidance of a professional." }
    ]
  },
  {
    title: "Degenerative Disc Disease",
    slug: "degenerative-disc-disease-delhi-ncr",
    description: "Manage the symptoms of Degenerative Disc Disease and improve your quality of life with our at-home care plans.",
    image: {
      src: "https://picsum.photos/600/400?random=27",
      alt: "An illustration comparing a healthy disc with a degenerated disc.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "Is Degenerative Disc Disease an actual disease?", answer: "Despite its name, it's not technically a disease, but rather a condition in which a damaged disc causes pain. The 'degeneration' refers to the natural wear and tear on your spinal discs." },
      { question: "How can physiotherapy help manage this condition?", answer: "Physiotherapy helps by strengthening the muscles that support the spine, improving flexibility and posture, and teaching you pain-management techniques to stay active." }
    ]
  },
  {
    title: "Spinal Stenosis",
    slug: "spinal-stenosis-treatment-delhi-ncr",
    description: "At-home physiotherapy to manage pain and improve mobility for individuals with spinal stenosis in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=28",
      alt: "An illustration showing the narrowing of the spinal canal in spinal stenosis.",
      aiHint: "spine diagram"
    },
    faq: [
      { question: "What is spinal stenosis?", answer: "Spinal stenosis is the narrowing of the spaces within your spine, which can put pressure on the nerves that travel through the spine. It most often occurs in the lower back and the neck." },
      { question: "What exercises are safe for spinal stenosis?", answer: "Flexion-based exercises (exercises that involve bending forward) are often recommended as they can help open up the spinal canal and relieve pressure on the nerves. Our physiotherapists will create a safe and effective plan for you." }
    ]
  }
];

const digestiveRelatedIssues: HealthIssue[] = [
  {
    title: "Acid Reflux / GERD",
    slug: "acid-reflux-gerd-treatment-ncr",
    description: "Natural and effective at-home remedies to manage acid reflux, heartburn, and GERD symptoms in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=30",
      alt: "A cup of soothing herbal tea, which can help with acid reflux.",
      aiHint: "herbal tea"
    },
    faq: [
      { question: "How can naturopathy help with acid reflux?", answer: "Naturopathy focuses on identifying and eliminating trigger foods, improving digestion through natural supplements, and recommending lifestyle changes like eating smaller meals and not lying down after eating. Our experts can create a personalized plan at your home." }
    ]
  },
  {
    title: "Irritable Bowel Syndrome (IBS)",
    slug: "ibs-management-delhi-ncr",
    description: "Holistic at-home management for IBS, focusing on diet, stress reduction, and gut health improvement across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=31",
      alt: "A diagram of a healthy gut microbiome.",
      aiHint: "healthy gut"
    },
    faq: [
      { question: "What is a low-FODMAP diet for IBS?", answer: "A low-FODMAP diet is an elimination diet that temporarily restricts certain carbohydrates known to cause digestive distress. Our nutritionists guide you through this process carefully to identify your specific triggers and create a sustainable eating plan." }
    ]
  },
  {
    title: "Bloating and Gas",
    slug: "bloating-gas-relief-ncr",
    description: "Find relief from uncomfortable bloating and gas with our at-home yoga and dietary guidance in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=32",
      alt: "A person practicing a gentle yoga twist to relieve bloating.",
      aiHint: "yoga twist"
    },
    faq: [
      { question: "Which yoga poses are best for bloating?", answer: "Poses like Wind-Relieving Pose (Pawanmuktasana) and gentle spinal twists can help release trapped gas. Our yoga instructors can teach you a specific sequence to practice at home for regular relief." }
    ]
  },
  {
    title: "Constipation",
    slug: "constipation-relief-at-home-ncr",
    description: "Natural and gentle solutions to relieve constipation and improve regularity with at-home care in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=33",
      alt: "A glass of water and high-fiber foods like fruits and vegetables.",
      aiHint: "healthy diet"
    },
    faq: [
      { question: "How can Ayurveda help with chronic constipation?", answer: "Ayurveda addresses the root cause by balancing the Vata dosha, which governs movement. This involves dietary changes, specific herbs like Triphala, and lifestyle adjustments to promote regular bowel movements." }
    ]
  },
  {
    title: "Diarrhea (Acute)",
    slug: "diarrhea-home-remedies-ncr",
    description: "Supportive care and simple home remedies to manage acute diarrhea and prevent dehydration in Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=34",
      alt: "A simple meal of rice and yogurt, which is soothing for the stomach.",
      aiHint: "simple food"
    },
    faq: [
      { question: "What should I eat when I have diarrhea?", answer: "It's best to stick to simple, easy-to-digest foods like bananas, rice, applesauce, and toast (the BRAT diet). Our naturopaths can provide guidance on rehydration solutions and when to seek further medical help." }
    ]
  },
  {
    title: "Indigestion (Dyspepsia)",
    slug: "indigestion-dyspepsia-treatment-ncr",
    description: "Relieve the discomfort of indigestion with at-home naturopathic remedies and lifestyle advice across Delhi NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=35",
      alt: "Herbal remedies like ginger and mint, which can aid digestion.",
      aiHint: "herbal medicine"
    },
    faq: [
      { question: "What are some natural ways to improve digestion?", answer: "Simple changes like chewing your food thoroughly, avoiding drinking large amounts of water with meals, and incorporating digestive spices like ginger and fennel can make a big difference. Our experts provide personalized advice." }
    ]
  }
];


export const healthIssues: HealthIssue[] = [
  {
    title: "Back Pain Relief",
    slug: "back-pain-relief-delhi-ncr",
    description: "Find lasting relief from chronic back pain with our personalized at-home physiotherapy, yoga, and therapeutic massage services available across Delhi, Gurgaon, and Noida.",
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "A person receiving a therapeutic back massage for pain relief in their Delhi home.",
      aiHint: "back pain"
    },
    faq: [
        { question: "Which therapy is best for chronic back pain in Delhi NCR?", answer: "An integrated approach often works best. Physiotherapy strengthens core muscles, while targeted yoga and therapeutic massage relieve tension. Our experts in Delhi NCR create a personalized plan for you at home." },
        { question: "How quickly can I expect results for my back pain with home physiotherapy?", answer: "While some relief can be felt after the first session, a consistent regimen over a few weeks, often as part of our care packages, typically yields the best, long-lasting results for chronic back pain." },
        { question: "Is bed rest good for back pain?", answer: "Prolonged bed rest is generally not recommended for most types of back pain. Gentle movement and specific exercises prescribed by our physiotherapists are more effective for recovery. We guide you on the right balance of rest and activity during our home visits." },
        { question: "What kind of exercises can I expect from at-home physiotherapy?", answer: "Our physiotherapists will prescribe a set of exercises tailored to your specific condition. This typically includes core strengthening exercises, gentle stretching to improve flexibility, and posture correction techniques that you can safely do at home." },
        { question: "How does yoga help with back pain management?", answer: "Yoga improves flexibility in the spine, strengthens back and abdominal muscles, and enhances posture. Our private yoga instructors teach specific, gentle postures that reduce strain on the back and promote relaxation, which is crucial for pain relief." },
        { question: "Can you help with post-surgery back pain rehabilitation at home?", answer: "Yes, our physiotherapists are experienced in post-operative rehabilitation. We work in coordination with your surgeon's recommendations to provide a structured recovery plan at home, helping you regain mobility and strength safely." },
        { question: "What should I do to prevent back pain from recurring?", answer: "Prevention is key. Our experts will advise you on maintaining correct posture during daily activities, ergonomic adjustments for your workspace (even at home), and a regular exercise routine to keep your back strong and healthy." }
    ],
    youtubeVideoId: 'm4g_sFplfGg',
    relatedIssues: backPainRelatedIssues
  },
  {
    title: "Stress & Anxiety Management",
    slug: "stress-anxiety-management-ncr",
    description: "Manage stress and find your calm with our holistic at-home services. We offer counseling, Reiki, and yoga across Delhi, Noida, and Gurgaon to restore your peace of mind.",
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "A person meditating peacefully in a calm home environment in Gurgaon to manage stress.",
      aiHint: "stress management"
    },
    faq: [
        { question: "Can at-home yoga really help with anxiety?", answer: "Yes, personalized yoga sessions at your home in the NCR can significantly reduce anxiety. Our instructors teach breathing techniques (pranayama) and calming postures in a comfortable, private setting where you can truly relax." },
        { question: "Is online or at-home counseling for stress confidential?", answer: "Absolutely. All our counseling sessions, whether at your home in Delhi, Noida, Gurgaon or online, are 100% confidential, providing you a safe and non-judgmental space to discuss your concerns." }
    ],
    relatedIssues: stressAndAnxietyRelatedIssues
  },
  {
    title: "Arthritis Care",
    slug: "arthritis-care-at-home-delhi",
    description: "Manage arthritis pain and improve joint mobility with our gentle and effective at-home care. We use Physiotherapy and Naturopathy to bring relief to you in Delhi.",
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "An elderly person receiving gentle physiotherapy for arthritis in their home in Delhi.",
      aiHint: "arthritis care"
    },
    faq: [
        { question: "How does home physiotherapy help with arthritis in Delhi?", answer: "Our physiotherapists in Delhi use gentle exercises and techniques to improve joint mobility, reduce stiffness, strengthen supporting muscles, and thereby significantly reduce arthritis pain and improve your quality of life." },
        { question: "Can diet changes from a Naturopath help my arthritis?", answer: "Yes, our naturopaths can recommend an anti-inflammatory diet that may help reduce inflammation, a key factor in arthritis pain. We provide at-home diet consultations across the NCR." }
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
    description: "Achieve your health goals with our personalized weight management plans. We combine nutrition counseling, yoga, and naturopathy at your home in Noida and across the NCR.",
    image: {
      src: "https://picsum.photos/600/400?random=4",
      alt: "A person consulting with a nutritionist for a weight management plan in Noida.",
      aiHint: "healthy diet"
    },
    faq: [
      { question: "Do you provide diet charts for weight loss in Noida?", answer: "Yes, our nutritionists and naturopaths create personalized and practical diet plans tailored to your body type, lifestyle, and preferences, with consultations available at your home in Noida and Greater Noida." },
      { question: "How is yoga for weight management different from a gym workout?", answer: "Our private yoga instructors focus on dynamic flows (Vinyasa) and specific postures that boost metabolism and build lean muscle, while also addressing hormonal imbalances that can affect weight." }
    ]
  },
  {
    title: "Migraine Management",
    slug: "migraine-management-delhi-ncr",
    description: "Reduce migraine frequency and intensity with our non-invasive therapies. We offer targeted acupressure, Ayurvedic remedies, and relaxation techniques at home.",
    image: {
      src: "https://picsum.photos/600/400?random=5",
      alt: "A person resting in a dimly lit room with a compress on their forehead to ease a migraine.",
      aiHint: "holistic health"
    },
    faq: [
      { question: "How can acupressure help my migraines at home?", answer: "Our TCM experts in Delhi NCR can teach you specific acupressure points to press for immediate relief when a migraine starts, providing a drug-free tool to manage your symptoms." },
      { question: "Are there Ayurvedic remedies that can prevent migraines?", answer: "Yes, our Ayurvedic doctors may recommend specific herbal preparations and lifestyle changes to address the root imbalances (like an aggravated Pitta dosha) that often contribute to migraine attacks." }
    ]
  },
  {
    title: "Insomnia & Sleep Issues",
    slug: "insomnia-sleep-issues-ncr",
    description: "Regain restful sleep naturally with our specialized home therapies. Our approach includes yoga nidra, massage, and herbal remedies for a peaceful night across the NCR.",
    image:      {
        src: "https://picsum.photos/600/400?random=6",
        alt: "A peaceful bedroom setting at night, promoting good sleep and relaxation.",
        aiHint: "restful sleep"
    },
    faq: [
      { question: "Which therapy is best for sleep problems in the NCR?", answer: "A combination of a relaxing pre-bedtime routine, guided Yoga Nidra, and a therapeutic massage can greatly improve sleep quality. We offer all these services at your home for your convenience." },
      { question: "I want to avoid sleeping pills. What natural alternatives do you offer?", answer: "We specialize in non-medicinal solutions. Homeopathy, Ayurveda, and lifestyle counseling can address the root cause of your sleep issues without the risk of dependency or side effects." }
    ]
  },
  {
    title: "Digestive Problems",
    slug: "digestive-problems-delhi",
    description: "Soothe digestive issues like IBS, bloating, and acidity. Our naturopaths and yoga therapists provide at-home solutions in Delhi to improve your gut health.",
    image: {
        src: "https://picsum.photos/600/400?random=7",
        alt: "A healthy, balanced meal with fresh vegetables designed to improve digestive health.",
        aiHint: "digestive health"
    },
    faq: [
      { question: "Can you help with creating a diet for IBS in Delhi?", answer: "Yes, our naturopaths and dietitians in Delhi create personalized diet plans (like a low-FODMAP diet) to manage your IBS symptoms, reduce triggers, and improve your gut health effectively." },
      { question: "Are there yoga poses that can help with gas and bloating?", answer: "Certainly. Our yoga instructors can guide you through specific postures like 'Pawanmuktasana' (Wind-Relieving Pose) and gentle twists to provide immediate relief from digestive discomfort and improve overall digestion." }
    ],
    relatedIssues: digestiveRelatedIssues
  },
  {
    title: "Skin Conditions",
    slug: "skin-conditions-ncr",
    description: "Manage chronic skin issues like eczema and psoriasis naturally. We use detoxification, homeopathy, and personalized Ayurvedic care at your NCR home.",
    image: {
        src: "https://picsum.photos/600/400?random=8",
        alt: "Natural skincare ingredients like aloe vera, turmeric, and herbs for healthy skin.",
        aiHint: "natural skin"
    },
    faq: [
      { question: "How does naturopathy treat skin conditions like eczema?", answer: "Naturopathy focuses on treating the root cause. This includes internal detoxification, identifying trigger foods, and using natural applications to soothe the skin. Our practitioners in the NCR guide you through this holistic plan for clearer skin." },
      { question: "Is homeopathy effective for chronic psoriasis treatment at home?", answer: "Homeopathy can be very effective for psoriasis as it treats the individual's unique symptoms and constitution, aiming to address the root autoimmune issue rather than just suppressing symptoms. We offer home consultations across Delhi NCR." }
    ]
  }
];

    

    

    