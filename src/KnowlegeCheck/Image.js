import React, { useState } from 'react';

function KnowledgeCheckImage({ src, alt }) {
  const [zoomed, setZoomed] = useState(false)
  return (
    <div>
      <img src={src} className="w-full" onClick={() => setZoomed(!zoomed)}/>
      {zoomed && (
        <div className="fixed inset-0 bg-white p-10 flex items-center" onClick={() => setZoomed(!zoomed)}>
          <img src={src} alt={alt} className="w-full max-w-full h-auto" onClick={() => setZoomed(!zoomed)}/>
        </div>
      )}
    </div>
  );
}
export default KnowledgeCheckImage;
