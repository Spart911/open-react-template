"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useState } from "react";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
  setActiveIndex(index === activeIndex ? null : index);
};

  const faqItems = [
    {
      title: "Как наш продукт сокращает трудозатраты и время?",
      content:
        "Каждый раз, когда вы меняете оборудование или материал, вы тратите время на доводку и настройку. Наша нейросеть помогает отпечатать всего лишь одну тестовую модель и сделать одно фото, чтобы по фото определить дефект, и подобрать правильные настройки к вашему оборудованию.",
    },
    {
      title: "Как мы остаемся конкурентоспособными?",
      content:
        "Наш продукт остаётся конкурентоспособным благодаря тому, что мы выставляем честную цену на работу нейронной сети, благодаря собственным вычислительным мощностям.",
    },
    {
      title: "Можно ли с нами сотрудничать?",
      content:
        "Мы всегда готовы к сотрудничеству, в любом направлении, можете связаться с нами, узнав наши контакты, расположенные внизу страницы. Наша команда всегда рада новым предложениям и сотрудничеству.",
    },
    {
      title: "От чего зависит стоимость конечного сервиса?",
      content:
        "Стоимость конечного сервиса зависит от времени работы нейронной сети на наших мощностях, как и от электроэнергии.",
    },
    {
      title: "Кто и как основал NeuroPrint?",
      content:
        "Мы команда из студентов Южного федерального университета и Донского государственного технического университета, которые заинтересованы в развитии аддитивных технологий и машинного обучения.",
    },
  ];

  const styles = {
    accordion: {
      fontFamily: "Inter, sans-serif",
    },
    accordionItem: {
      borderBottom: "1px solid gray",
    },
    accordionTitle: {
      fontSize: "12px",
      cursor: "pointer",
      backgroundColor: "transparent",
      margin: 0,
      padding: "15px 35px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "background-color 0.3s ease",
    },
    accordionTitleActive: {
    },
    accordionContent: {
      display: "none",
      padding: "0px 35px",
    },
    accordionContentActive: {
      display: "block",
      padding: "15px 35px",
    },
    accordionIcon: {
      fontSize: "16px",
      transition: "transform 0.3s ease",
    },
    accordionIconOpen: {
      transform: "rotate(180deg)",
    },
  };

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Часто задаваемые вопросы
            </h2>
          </div>

          <div style={styles.accordion}>
            {faqItems.map((item, index) => (
              <div
                style={styles.accordionItem}
                className={`accordion-item`}
                key={index}
              >
                <div
                  style={
                    index === activeIndex
                      ? { ...styles.accordionTitle, ...styles.accordionTitleActive }
                      : styles.accordionTitle
                  }
                  onClick={() => onTitleClick(index)}
                >
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <i
                    style={
                      index === activeIndex
                        ? { ...styles.accordionIcon, ...styles.accordionIconOpen }
                        : styles.accordionIcon
                    }
                    className="fas fa-chevron-down"
                  ></i>
                </div>
                {index === activeIndex && (
                  <div style={styles.accordionContentActive}>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
