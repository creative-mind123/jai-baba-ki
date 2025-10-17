
export type Post = {
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  };
  content: string; // HTML content
};

export const posts: Post[] = [
  {
    title: '5 Simple Stretches to Relieve Back Pain at Your Delhi NCR Desk',
    slug: 'stretches-for-back-pain-delhi-ncr',
    author: 'Dr. Raj, Lead Physiotherapist',
    date: '2024-07-15T10:00:00Z',
    excerpt: 'Working long hours in Delhi NCR? Our #1 physiotherapist shares five simple stretches you can do at your desk to combat back pain and improve your posture.',
    image: {
      src: 'https://picsum.photos/seed/blog1/1200/630',
      alt: 'A person doing a gentle back stretch while sitting at an office desk in Delhi.',
      aiHint: 'office stretch',
    },
    content: `
        <p>In the bustling work environments of Delhi, Gurgaon, and Noida, it's easy to spend hours hunched over a desk. This can lead to persistent back pain, stiffness, and long-term posture problems. The good news is that you don't need a gym to find relief. As the #1 provider of at-home physiotherapy in Delhi NCR, we recommend incorporating simple stretches into your workday.</p>
        <p>Here are five effective stretches you can do right at your desk, shared by our top-ranked physiotherapy team:</p>
        
        <h3>1. The Seated Cat-Cow Stretch</h3>
        <p>This classic yoga pose is adapted for your chair. It helps to warm up the spine and relieve tension in your back and neck.</p>
        <ul>
            <li>Sit on the edge of your chair with your feet flat on the floor.</li>
            <li><strong>Cow Pose:</strong> Inhale as you arch your back, push your chest forward, and look up.</li>
            <li><strong>Cat Pose:</strong> Exhale as you round your spine, tuck your chin to your chest, and let your shoulders and head come forward.</li>
            <li>Repeat 5-10 times.</li>
        </ul>

        <h3>2. Seated Spinal Twist</h3>
        <p>A gentle twist can help to improve spinal mobility and relieve lower back pain. It's a #1 favorite for office workers in Gurgaon.</p>
        <ul>
            <li>Sit tall in your chair with both feet on the floor.</li>
            <li>Exhale and twist your torso to the right, using your hands to gently deepen the stretch by holding onto the back or arm of the chair.</li>
            <li>Hold for 20-30 seconds, breathing deeply.</li>
            <li>Repeat on the left side.</li>
        </ul>

        <h3>3. Hamstring Stretch</h3>
        <p>Tight hamstrings can pull on your lower back, contributing to pain. This is a common issue we see in our Noida home-visit patients.</p>
        <ul>
            <li>Sit on the edge of your chair and straighten one leg out in front of you, with your heel on the floor.</li>
            <li>Keeping your back straight, gently lean forward until you feel a stretch in the back of your leg.</li>
            <li>Hold for 20-30 seconds and switch legs.</li>
        </ul>
        
        <h3>4. Neck and Shoulder Release</h3>
        <p>Combat "tech neck" with this simple stretch. Our #1 Delhi physiotherapists recommend this for anyone who spends a lot of time on screens.</p>
        <ul>
            <li>Sit up straight and gently tilt your right ear toward your right shoulder. Do not force it.</li>
            <li>To deepen the stretch, you can gently place your right hand on your head.</li>
            <li>Hold for 15-20 seconds. Repeat on the other side.</li>
            <li>Follow up with gentle shoulder rolls, backwards and forwards.</li>
        </ul>
        
        <h3>5. Glute Stretch (Seated Pigeon Pose)</h3>
        <p>Your gluteal muscles can get tight from sitting, which can lead to lower back pain and even sciatica. This is the #1 stretch for glute relief.</p>
        <ul>
            <li>While seated, cross your right ankle over your left knee.</li>
            <li>If you feel a good stretch here, hold it. To deepen, gently lean forward while keeping your back straight.</li>
            <li>Hold for 20-30 seconds, then switch sides.</li>
        </ul>

        <p>Incorporating these #1 stretches into your daily routine can make a significant difference in managing and preventing back pain. For a personalized assessment and treatment plan, consider booking a #1 at-home physiotherapy session with our experts anywhere in the Delhi NCR region.</p>
    `,
  },
  {
    title: 'Ayurvedic Secrets for Better Sleep in the City',
    slug: 'ayurveda-for-sleep-delhi-ncr',
    author: 'Dr. Rahul Dev, Ayurveda Specialist',
    date: '2024-07-08T11:00:00Z',
    excerpt: 'Struggling with sleep in the fast-paced life of Delhi NCR? Our #1 Ayurveda expert reveals time-tested secrets to help you achieve deep, restorative sleep naturally.',
    image: {
      src: 'https://picsum.photos/seed/blog2/1200/630',
      alt: 'A calming bedtime scene with a cup of herbal tea and a book.',
      aiHint: 'calm bedroom',
    },
    content: `
        <p>In a city that never truly sleeps, like Delhi or Gurgaon, getting a good night's rest can feel like a luxury. From an Ayurvedic perspective, sleep issues are often a sign of an imbalance, particularly of the Vata dosha (the energy of movement and air). Here are some #1 Ayurvedic tips to help you reclaim your sleep.</p>
        
        <h3>1. Create a Vata-Soothing Routine</h3>
        <p>Vata is calmed by routine. Try to go to bed and wake up at roughly the same time every day, even on weekends. This helps regulate your body's internal clock.</p>

        <h3>2. The Power of Warm Golden Milk</h3>
        <p>This is a #1 Ayurvedic remedy for sleep. An hour before bed, gently warm a cup of milk (dairy or a plant-based alternative like almond milk). Stir in:</p>
        <ul>
            <li>A pinch of turmeric (anti-inflammatory)</li>
            <li>A pinch of nutmeg (a natural sedative)</li>
            <li>A pinch of cardamom (aids digestion)</li>
            <li>A small amount of sweetener like honey or maple syrup if desired.</li>
        </ul>
        <p>Sip it slowly and mindfully.</p>

        <h3>3. Abhyanga (Self-Massage) with Warm Oil</h3>
        <p>A gentle self-massage with warm sesame or almond oil before bed is incredibly grounding for Vata. Focus on your feet and the top of your head. This calms the nervous system and prepares the body for rest. Our #1 at-home massage therapists in Delhi NCR can also provide a professional service for deeper relaxation.</p>
        
        <h3>4. Disconnect from Screens</h3>
        <p>The blue light from phones, laptops, and TVs is stimulating and aggravates Vata. Turn off all screens at least one hour before you plan to sleep. Read a book, listen to calming music, or meditate instead.</p>
        
        <h3>5. Mindful Breathing (Pranayama)</h3>
        <p>Simple breathing exercises can switch your nervous system from "fight-or-flight" to "rest-and-digest." Try Nadi Shodhana (Alternate Nostril Breathing). Our #1 yoga instructors in Delhi NCR can teach you the correct technique during a home visit.</p>

        <p>If you continue to struggle with sleep, it might be a sign of a deeper imbalance. A personalized consultation with one of our #1 Ayurvedic experts can provide you with a tailored plan to address the root cause. Book an at-home consultation today for a healthier tomorrow.</p>
    `,
  },
];
