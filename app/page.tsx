import Header from "@/components/Header";
import Hero from "@/components/Hero";
import contentImg1 from "@/public/content1.jpg"
import contentImg2 from "@/public/content2.jpg"
import contentImg3 from "@/public/content3.jpg"
import Learning from "@/components/LearningManagementSystem";

import ContentSection from "@/components/ContentSection";

const contents = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organization. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: contentImg1,
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: contentImg2,
    reverse: true,
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth.",
    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: contentImg3               ,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Learning />
      <main>
        <div className="px-12">
          <div className="space-y-24">
            {contents.map((content) => (
              <ContentSection key={content.title} {...content} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
