import { useStack } from "@/features/stack/useStack";
import "@/features/stack/Stack.css";

export function Stack() {
  const { stack, strings } = useStack();

  return (
    <div id="stack" className="stack">
      <table className="stack__table">
        <caption>
          <strong className="stack__title">{strings.title}</strong>
          {strings.caption}
        </caption>
        <thead>
          <tr>
            <th scope="col">{strings.capability}</th>
            <th scope="col">{strings.tools}</th>
          </tr>
        </thead>
        <tbody>
          {stack.map((row) => (
            <tr key={row.capability}>
              <th scope="row">{row.capability}</th>
              <td>
                <ul className="chips">
                  {row.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
