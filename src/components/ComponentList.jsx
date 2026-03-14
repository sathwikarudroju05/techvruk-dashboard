function ComponentList({ components, selectedComponent, onSelectComponent }) {
  return (
    <div className="component-list">
      <h2>Components</h2>

      {components.length > 0 ? (
        <ul>
          {components.map((component) => (
            <li
              key={component.id}
              className={
                selectedComponent?.id === component.id ? "active-component" : ""
              }
              onClick={() => onSelectComponent(component)}
            >
              {component.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No components found.</p>
      )}
    </div>
  );
}

export default ComponentList;