import { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const data = getComponents();
    setComponents(data);
  }, []);

  const handleImageUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setFileName(file.name);
    setZoom(1);
  };

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard">
      <h1 className="main-title">Simple Diagram Dashboard</h1>

      <UploadBox onImageUpload={handleImageUpload} fileName={fileName} />

      <div className="dashboard-content">
        <div className="left-panel">
          <DiagramViewer
            image={image}
            zoom={zoom}
            setZoom={setZoom}
            selectedComponent={selectedComponent}
          />
        </div>

        <div className="right-panel">
          <ComponentList
            components={components}
            selectedComponent={selectedComponent}
            onSelectComponent={handleSelectComponent}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;