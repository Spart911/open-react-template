import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}

          <div className="mx-auto max-w-3xl  py-4 md:py-5 text-center ">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                NyuroPrint
              </span>
            </div>
          </div>

        <div className="py-4 md:py-5">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-10">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Избавим вас от дефектов 3D печати
            </h1>
            <div className="mx-auto max-w-1xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Наше программное обеспечение нацелено на обнаружение дефектов на аддитивном производстве и их устранение. Мы используем алгоритмы и нейросетевой подход для определения искажений на фотографиях отпечатанных изделий, а по выходу наша программа предоставляет инструкции по их оптимальному устранению. На данный момент ведется разработка приложения, которое будет самостоятельно трудиться над их устранением, путем корректировки параметров печати. Наше решение поможет вам сократить временные и финансовые издержки на производстве.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://nyuroprint.ru/"
                  >
                    Перейти к Alfa версии
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
        {/* SVG */}
        <img
          src="images/Group 1 (1).svg"
          width={300}
          height={310}
          alt="Photo thumbnail"
          style={{
            borderRadius: '16px',
            filter: 'blur(0.1px) brightness(0.8)',
          }}
        />

        {/* Text Block */}
        <div className="flex-1 text-xl text-indigo-200/65 text-center" data-aos="fade-up" data-aos-delay={400}>
          <p>
            Наш продукт представляет полный цикл корректировки дефектов, начиная с их детекции на фотографиях и заканчивая рекомендациями по устранению. Мы используем передовые алгоритмы и методы машинного обучения для точного анализа изделий, созданных методом 3D печати. Наша цель — автоматизация процессов, что поможет вам сосредоточиться на производстве, исключая человеческий фактор и минимизируя количество брака.
          </p>
        </div>
      </div>

        </div>
      </div>
    </section>
  );
}
