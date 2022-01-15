import styles from "../../styles/About.module.css";
import FadeInWhenVisible from "../fadeInWhenVis/FadeInWhenVisible";
import { Tab } from "../Tab";
import Image from "next/image";

const tabContent = [
  {
    title: "Functional Medicine",
    content:
      "Functional Medicine asks how and why illness occurs in the body, and restores health by addressing the root cause of disease within an individual. Functional Medicine is an approach that understands how the body is adjusting to both short-term and long-term changes in its environment, and seeks to treat the functional imbalances that may occur during these changes. ",
    multiContent:
      "Chronic disease is almost always preceded by a period of declining function in one or more of the body’s systems. To intervene in the early stages of disease or dysfunction, Functional Medicine has created practical models for obtaining and evaluating clinical information that lead to individualized, patient-center, and science-based therapies. ",
    tabImg: "/images/tabs/functional.png",
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to promote wellness and longevity through an individualized approach that identifies the " +
      "root cause of dysfunction and disease and provides integrative and holistic care and treatment. We " +
      "believe in the innate ability of the human body to heal and find balance and are committed to " +
      "partnering with each patient throughout their wellness journey. ",
    multiContent: "",
    tabImg: "/images/tabs/mission.png",
  },
  {
    title: "Integrative Medicine",
    content:
      "Integrative medicine is the practice of medicine that focuses on the whole person and unites all appropriate therapeutic approaches, healthcare professionals, and disciplines to achieve optimal health and healing. It is based upon a model of health and wellness--as opposed to a model of disease--and explores how a patient’s physical, mental, spiritual, and social wellbeing may be influencing their current health status. ",
    multiContent:
      "This practice of medicine favors the use of low-tech and low-cost interventions whenever possible, and coordinates all aspects of a patient’s health plan. Your integrative medicine providers strive to work in tandem with your primary care providers, integrative health coaches, nutritionists, massage therapists, and acupuncturists. ",
    tabImg: "/images/tabs/integrative.png",
  },
];

export const About = () => {
  return (
    <>
      <div className="text-primary flex flex-col">
        <div className="text-center text-5xl py-10 bg-gray-100">
          <FadeInWhenVisible>
            <h2 className="font-maitree font-normal text-black">
              restore your body’s natural balance
            </h2>
          </FadeInWhenVisible>
          <div className="border-b-4 w-1/12 m-auto pt-5 border-primary" />
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
                  <p className="text-black text-2xl py-4 px-5 font-maitree ">
                    {tab.content}
                  </p>
                  <p className="text-black text-2xl py-4 px-5 font-maitree ">
                    {tab.multiContent}
                  </p>
                </div>
 
                  <div className="w-full h-full relative">
                    <Image
                      alt={`${tab.title} ${idx}`}
                      // layout="fill"
                      height={567}
                      width={1024}
                      src={tab.tabImg}
                      objectFit="contain"
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
