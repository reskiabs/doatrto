export interface Testimonial {
  id: string;
  name: string;
  username: string;
  avatar: string;
  text: string;
  role?: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Miller",
    username: "@john.miller",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Excellent service, I feel much better now!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "2",
    name: "Emily Johnson",
    username: "@emily.johnson",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I was initially hesitant about online counseling, but it turned out to be one of the best decisions I’ve made. The psychologist was empathetic, attentive, and provided actionable steps to manage my anxiety.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "3",
    name: "Michael Davis",
    username: "@michael.davis",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Very helpful sessions.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "4",
    name: "Sarah Lee",
    username: "@sarah.lee",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I feel more in control of my emotions after just a few sessions. The therapist gave me simple techniques that actually work.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "5",
    name: "David Wilson",
    username: "@david.wilson",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Quick and professional response from the team. Booking an appointment was seamless.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "6",
    name: "Sophia Clark",
    username: "@sophia.clark",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Their therapy sessions gave me hope during my lowest moments. I truly appreciate the kindness and care.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "7",
    name: "James Rodriguez",
    username: "@james.rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Great support!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "8",
    name: "Olivia Walker",
    username: "@olivia.walker",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "They guided me through my grief with patience and understanding. I am grateful for their professional yet warm approach.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "9",
    name: "Ethan Hall",
    username: "@ethan.hall",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "The session opened my mind. I now know how to manage stress better.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "10",
    name: "Ava Young",
    username: "@ava.young",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I love how they listen without judgment. It makes me feel safe and understood.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "11",
    name: "William King",
    username: "@william.king",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Their team is highly professional and caring. Highly recommended!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "12",
    name: "Mia Wright",
    username: "@mia.wright",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "The online sessions were surprisingly effective. I learned new ways to calm my thoughts.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "13",
    name: "Lucas Scott",
    username: "@lucas.scott",
    avatar:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Friendly and professional!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "14",
    name: "Amelia Turner",
    username: "@amelia.turner",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "The therapist helped me understand my emotions better and gave practical tools for everyday life challenges.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "15",
    name: "Daniel Harris",
    username: "@daniel.harris",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Great experience overall.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "16",
    name: "Isabella Evans",
    username: "@isabella.evans",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "The team is incredibly supportive and well-trained. I felt heard and understood throughout all my sessions.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "17",
    name: "Henry Baker",
    username: "@henry.baker",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Very positive experience.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "18",
    name: "Ella Carter",
    username: "@ella.carter",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I loved how they gave me practical exercises that improved my confidence and self-awareness.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "19",
    name: "Matthew Moore",
    username: "@matthew.moore",
    avatar:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I didn’t expect therapy to work this fast. Amazing!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "20",
    name: "Grace Hill",
    username: "@grace.hill",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Their sessions are life-changing. I now handle my stress with ease.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "21",
    name: "Benjamin Adams",
    username: "@benjamin.adams",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Supportive and understanding team.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "22",
    name: "Chloe Nelson",
    username: "@chloe.nelson",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I felt safe, respected, and encouraged to open up. Their professionalism is top-notch.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "23",
    name: "Alexander Perez",
    username: "@alexander.perez",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Helpful staff and excellent therapists.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "24",
    name: "Lily Cooper",
    username: "@lily.cooper",
    avatar:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Their approach is modern and flexible, which made therapy much less intimidating for me.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "25",
    name: "Jack Murphy",
    username: "@jack.murphy",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "I’m more confident and happier than ever before!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "26",
    name: "Sophie Ramirez",
    username: "@sophie.ramirez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "They truly care about their clients and offer great tools to help you grow emotionally.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "27",
    name: "Ryan Torres",
    username: "@ryan.torres",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Absolutely recommended.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "28",
    name: "Ella Richardson",
    username: "@ella.richardson",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Thanks to their guidance, I’ve overcome my fear of public speaking.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "29",
    name: "Mason Brooks",
    username: "@mason.brooks",
    avatar:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Their team is friendly and knowledgeable.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "30",
    name: "Avery Jenkins",
    username: "@avery.jenkins",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "The best therapy experience I have ever had. I highly recommend this company to anyone who needs emotional support.",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "31",
    name: "Leo Sanders",
    username: "@leo.sanders",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "Fantastic team!",
    role: "Client",
    company: "MindCare",
  },
  {
    id: "32",
    name: "Harper Foster",
    username: "@harper.foster",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces&auto=format&dpr=2",
    text: "They provided a safe space for me to express my feelings and discover new coping mechanisms. It was a transformative experience that I will always cherish.",
    role: "Client",
    company: "MindCare",
  },
];
