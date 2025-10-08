export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="flex flex-col justify-center items-center w-11/12 mx-auto pt-10 pb-0">
          <div className="space-y-5 text-center">
            <h2 className="text-6xl font-bold leading-20 max-w-xl mx-auto">
              We Build <span className="text-secondary"> Productive</span>
              <span className="text-primary"> Apps</span>
            </h2>
            <p className="italic max-w-9/12 mx-auto">
              At <span className="text-primary font-bold">RealtimeHype</span>,
              we craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting. Our goal is to turn your ideas into
              digital experiences that truly make an impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noreferrer"
                className="btn btn-xl hover:shadow-xl rounded-xl"
              >
                <img
                  alt="Google Play"
                  className="w-10"
                  src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
                />
                Google Play
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-xl hover:shadow-xl rounded-xl"
              >
                <img
                  alt="App Store"
                  className="w-10"
                  src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
                />
                App Store
              </a>
            </div>
          </div>

          <img
            alt="Hero Illustration"
            className="pt-10"
            src={'./src/assets/hero.png'}
          />
        </div>
      </div>
    </section>
  );
}
