function UploadBox({ onImageUpload, fileName }) {
  const handleChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="upload-box">
      <label htmlFor="fileUpload" className="upload-label">
        {fileName ? "Replace Diagram" : "Upload Diagram"}
      </label>

      <input
        id="fileUpload"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleChange}
      />

      {fileName && <p className="file-name">Selected File: {fileName}</p>}
    </div>
  );
}

export default UploadBox;