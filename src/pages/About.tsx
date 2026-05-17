import Header from "@/components/Header";
import OptimizedImage from "@/components/OptimizedImage";
import { getBlurPlaceholder } from "@/lib/blur-utils";
import { siteConfig } from "@/data/siteConfig";

      <main className="pb-32 px-6 md:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mx-auto bg-card border border-border rounded-xl overflow-hidden grid md:grid-cols-2 md:aspect-square">
            {/* Left: Portrait (fills left half) */}
            <div className="relative hidden md:block">
              <OptimizedImage
                src={about.portrait}
                alt={siteConfig.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                containerClassName="absolute inset-0"
                blurDataURL={getBlurPlaceholder(about.portrait)}
              />
            </div>

            {/* Right: Content */}
            <div className="p-6 md:p-10 flex flex-col h-full">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2">
                  {siteConfig.name}
                </h1>
                <p className="text-sm text-muted-foreground mb-4">{about.title}</p>
                <p className="text-xs text-muted-foreground mb-6">{about.location}</p>
              </div>

              <div className="prose max-w-none text-[0.9rem] text-muted-foreground leading-relaxed overflow-auto mb-6">
                {about.bio.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-auto">
                <div className="mb-6">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Softwarevaardigheden</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Professioneel</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Archicad', 'Adobe Photoshop', 'Lumion'].map((s) => (
                          <span key={s} className="inline-block px-3 py-1 bg-muted text-[0.8rem] text-muted-foreground rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Gevorderd</h4>
                      <div className="flex flex-wrap gap-2">
                        {['SketchUp', 'Adobe InDesign', 'Twinmotion', 'AutoCAD', 'Autodesk Inventor'].map((s) => (
                          <span key={s} className="inline-block px-3 py-1 bg-muted text-[0.8rem] text-muted-foreground rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Contact</h3>
                  <div className="space-y-1">
                    <a href={`mailto:${about.contact.email}`} className="block text-[0.9rem] text-muted-foreground hover:opacity-60 transition-opacity duration-200">
                      {about.contact.email}
                    </a>
                    {about.contact.phone && (
                      <a href={`tel:${about.contact.phone.replace(/\s+/g, '')}`} className="block text-[0.9rem] text-muted-foreground hover:opacity-60 transition-opacity duration-200">
                        {about.contact.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile portrait below content for small screens */}
            <div className="relative md:hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <OptimizedImage
                  src={about.portrait}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  containerClassName="absolute inset-0"
                  blurDataURL={getBlurPlaceholder(about.portrait)}
                />
              </div>
            </div>
          </div>
        </div>
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Contact
                </h2>
                <div className="space-y-2">
                  <a
                    href={`mailto:${about.contact.email}`}
                    className="block text-[0.81rem] md:text-[0.9rem] font-light leading-relaxed text-muted-foreground hover:opacity-60 transition-opacity duration-300"
                  >
                    {about.contact.email}
                  </a>
                  {about.contact.phone && (
                    <a
                      href={`tel:${about.contact.phone.replace(/\s+/g, "")}`}
                      className="block text-[0.81rem] md:text-[0.9rem] font-light leading-relaxed text-muted-foreground hover:opacity-60 transition-opacity duration-300"
                    >
                      {about.contact.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Two-column Work Experience & Education section placed after initial content */}
        <section className="max-w-6xl mx-auto px-0 md:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience Column */}
            <div>
              {about.workExperience && about.workExperience.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    Werkervaring
                  </h2>
                  <div className="space-y-6">
                    {about.workExperience.map((item) => (
                      <div key={`${item.period}-${item.role}`} className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.period}
                        </p>
                        <h3 className="text-base md:text-lg font-medium leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        {item.description && item.description.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            {item.description.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Education Column */}
            <div>
              {about.education && about.education.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    Opleidingen
                  </h2>
                  <div className="space-y-6">
                    {about.education.map((item) => (
                      <div key={`${item.period}-${item.program}`} className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.period}
                        </p>
                        <h3 className="text-base md:text-lg font-medium leading-tight">{item.program}</h3>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
