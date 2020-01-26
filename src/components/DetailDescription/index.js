import React from 'react';
import './detailDescription.scss';

const DetailDescription = () => {
  return (
    <div className="detail-description">
      <div className="main-container">
        <div className="detail-description-wrapper">
          <div className="detail-description-actions">
            <span className="detail-description-actions__description">description</span>
            <span className="detail-description-actions__additional">additional inforamtion</span>
            <span className="detail-description-actions__review">reviews</span>
          </div>
          <div className="detail-description-text">
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris convallis nunc mauris   consectetur nisl feugiat vitae. Suspendisse dapibus tincidunt diam non laoreet. Nullam suscipit nunc id dictum mollis facilisi. Proin ultricies ex ut hendrerit ullamcorper. Sed ac venenatis est. Etiam nec porttitor dui, eu vulputate mauris.</p><br/>
            <p>Aliquam elit odio, pellentesque sit amet ex suscipit, finibus consectetur mi. In metus augue, dapibus vel imperdiet velstique non massa. Etiam nisi ante, pretium sit amet dignissim ut, tempus tincidunt elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDescription;