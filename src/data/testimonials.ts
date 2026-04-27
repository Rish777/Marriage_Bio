export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Deepan Sachithanandam",
    position: "Senior Data Architect",
    company: "TechCorp Inc.",
    quote: "I would like to endorse Rishabh for his outstanding work and contributions to our team. His dedication and commitment have been evident through his flawless project delivery and the development of tools that have significantly enhanced our team's adaptability.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQEYDYFyqXWxQg/profile-displayphoto-scale_400_400/B56Zrzc0KeH8Ag-/0/1765021010618?e=1768435200&v=beta&t=wVUgO3zb4ZseE4ky7PipE7UgIlY8OQPOAk9fPxwhqsc"
  },
  // {
  //   id: 2,
  //   name: "Michael Zhang",
  //   position: "CTO",
  //   company: "DataStream Solutions",
  //   quote: "I've worked with many data engineers, but few have the combination of technical skill and business understanding that this professional brings to the table. They don't just build pi[...]
  //   avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   position: "Lead Data Scientist",
  //   company: "Insight Analytics",
  //   quote: "The ETL processes designed by this engineer are elegant, efficient, and incredibly reliable. Our data science team can now focus on building models instead of cleaning data, which h[...]
  //   avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: 4,
  //   name: "David Wilson",
  //   position: "VP of Engineering",
  //   company: "CloudSystems Inc.",
  //   quote: "Their expertise in cloud data integration saved our migration project. They designed a scalable architecture that not only met our immediate needs but has easily adapted as our data[...]
  //   avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // }
];
