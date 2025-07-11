
import React, { useState } from 'react';

const ProductDetailsTab = ({descrition,additionalInfo}) => {

    const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product-tabs my-5">
      
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Information
          </button>
        </li>
      </ul>

      
      <div className="tab-content p-3 border border-top-0">
        {activeTab === 'description' && (
          <div>
            <p>
              {descrition}
            </p>
          </div>
        )}
        {activeTab === 'additional' && (
          <div>
          <p>{additionalInfo}</p> 
          </div>
        )}
      </div>

    </div>
  );
}

export default ProductDetailsTab
