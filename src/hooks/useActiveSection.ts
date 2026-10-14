import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const hashSection = window.location.hash.slice(1);
    if (sectionIds.includes(hashSection)) setActiveSection(hashSection);

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.28;
      const currentSection = sections
        .map((section) => ({
          section,
          rect: section.getBoundingClientRect(),
          distance: 0,
        }))
        .map((candidate) => ({
          ...candidate,
          distance:
            candidate.rect.top > readingLine
              ? candidate.rect.top - readingLine
              : candidate.rect.bottom < readingLine
                ? readingLine - candidate.rect.bottom
                : 0,
        }))
        .sort(
          (first, second) =>
            first.distance - second.distance || second.rect.top - first.rect.top,
        )[0]?.section;

      if (currentSection) {
        setActiveSection((current) =>
          current === currentSection.id ? current : currentSection.id,
        );
      }
    };

    const observer = new IntersectionObserver(
      updateActiveSection,
      {
        rootMargin: "-24% 0px -68% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
