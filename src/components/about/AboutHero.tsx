export default function AboutHero() {
  return (
    <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://i.imgur.com/d8y3h0f.png"
        alt="Cre8tiverse Academy — empowering Africa's digital professionals"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.85) 0%, rgba(35,36,100,0.75) 50%, rgba(35,36,100,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="animate-fade-up opacity-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight max-w-[900px] mx-auto"
          style={{ animationDelay: '0.2s' }}
        >
          Empowering Africa's Next Generation of Digital Professionals
        </h1>

        <p
          className="animate-fade-up opacity-0 mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-[700px] mx-auto"
          style={{ animationDelay: '0.4s' }}
        >
          Cre8tiverse Academy is an AI-integrated digital learning academy committed to equipping
          aspiring professionals, creators, and innovators with practical, industry-relevant skills
          for the future of work.
        </p>
      </div>
    </section>
  );
}
