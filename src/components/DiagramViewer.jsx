function DiagramViewer({ image, zoom, setZoom, selectedComponent }) {
  const zoomIn = () => {
    setZoom((prev) => prev + 0.1);
  };

  const zoomOut = () => {
    setZoom((prev) => (prev > 0.2 ? prev - 0.1 : prev));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <div className="viewer-section">
      <div className="viewer-header">
        <h2>Diagram Viewer</h2>

        <div className="zoom-controls">
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
          <button onClick={resetZoom}>Reset</button>
        </div>
      </div>

      {selectedComponent && (
        <div className="selected-box">
          <p>
            Selected Component: <strong>{selectedComponent.name}</strong>
          </p>
        </div>
      )}

      <div className="image-container">
        {image ? (
          <div
            className="image-wrapper"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src={image}
              alt="Uploaded Diagram"
              className="diagram-image"
            />

            {selectedComponent && (
              <div className="component-highlight">
                {selectedComponent.name}
              </div>
            )}
          </div>
        ) : (
          <div className="empty-viewer">
            <p>No diagram uploaded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiagramViewer;