import styles from "../../styles/About.module.css";
import FadeInWhenVisible from "../fadeInWhenVis/FadeInWhenVisible";
import { Tab } from "../Tab";

const tabContent = [
  {
    title: "Functional Medicine",
    content:
      "Functional Medicine asks how and why illness occurs in the body, and restores health by addressing the root cause of disease within an individual. Functional Medicine is an approach that understands how the body is adjusting to both short-term and long-term changes in its environment, and seeks to treat the functional imbalances that may occur during these changes. ",
    multiContent:
      "Chronic disease is almost always preceded by a period of declining function in one or more of the body’s systems. To intervene in the early stages of disease or dysfunction, Functional Medicine has created practical models for obtaining and evaluating clinical information that lead to individualized, patient-center, and science-based therapies. ",
    tabImg: "/images/tabs/img3.png",
  },
  {
    title: "Our Mission",
    content:
      "Our mission at Balance Regenerative Medicine is to promote " +
      "wellness and longevity through an individualized approach that " +
      "identifies the root cause of disease and provides integrative, " +
      "functional, and holistic treatments to reverse disease and restore " +
      "the body’s natural balance. We believe in the body’s innate " +
      "ability to heal and find balance, and we are committed to " +
      "partnering with each patient throughout their journey to wellness.",
    multiContent: "",
    tabImg:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    title: "Integrative Medicine",
    content:
      "Integrative medicine is the practice of medicine that focuses on the whole person and unites all appropriate therapeutic approaches, healthcare professionals, and disciplines to achieve optimal health and healing. It is based upon a model of health and wellness--as opposed to a model of disease--and explores how a patient’s physical, mental, spiritual, and social wellbeing may be influencing their current health status. ",
    multiContent:
      "This practice of medicine favors the use of low-tech and low-cost interventions whenever possible, and coordinates all aspects of a patient’s health plan. Your integrative medicine providers strive to work in tandem with your primary care providers, integrative health coaches, nutritionists, massage therapists, and acupuncturists. ",
    tabImg:
      "https://images.pexels.com/photos/161599/scent-sticks-fragrance-aromatic-161599.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

export const About = () => {
  return (
    <>
      <div className="text-primary flex flex-col font-montserrat">
        <div className="text-center text-5xl py-10 bg-gray-100">
          <FadeInWhenVisible>
            <h2 className="font-montserrat font-normal">lorem ipsum - dolor sit amet</h2>
          </FadeInWhenVisible>
          <div className="border-b-4 w-1/12 m-auto pt-5" />
        </div>

        <div>
          <Tab active={1}>
            {tabContent.map((tab, idx) => (
              <Tab.TabPane
                className="max-w-sm"
                key={`Tab-${idx}`}
                tab={tab.title}
              >
                <div className="pt-10">
                  <p className="text-black text-lg py-4 px-5 ">{tab.content}</p>
                  <p className="text-black text-lg py-4 px-5 ">
                    {tab.multiContent}
                  </p>
                </div>
                <div className="flex justify-center py-4 m-5">
                  <img
                    alt={`Image-${idx}`}
                    className="rounded-2xl shadow-2xl object-contain"
                    src={tab.tabImg}
                  />
                </div>
              </Tab.TabPane>
            ))}
          </Tab>
        </div>
      </div>
    </>
  );
};
