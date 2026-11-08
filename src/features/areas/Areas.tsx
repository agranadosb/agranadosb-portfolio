import { AreaCard } from "@/features/areas/components/AreaCard";
import { useAreas } from "@/features/areas/useAreas";
import "@/features/areas/Areas.css";

export function Areas() {
  const { capabilities, areas, strings } = useAreas();

  return (
    <>
      <div className="ports-strip">
        <p className="ports-strip__label">{strings.common}</p>
        <ul className="chips chips--ports ports-strip__chips">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
      <div className="areas">
        <h3 className="areas__title">{strings.title}</h3>
        <div className="areas__grid">
          {areas.map((area) => (
            <AreaCard
              key={area.id}
              area={area}
              touchedLabel={strings.touched}
              appliedAILabel={strings.appliedAI}
            />
          ))}
        </div>
      </div>
    </>
  );
}
