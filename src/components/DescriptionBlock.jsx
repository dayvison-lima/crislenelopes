import React from 'react';
import '../styles/descriptionBlock.css';

function DescriptionBlock() {
  return (
    <div className="description-block">
      <p className="quote">
        &quot;Neque porro quisquam est qui dolorem ipsum quia
        dolor sit amet, consectetur, adipisci velit...
        There is no one who loves pain itself, who seeks
        after it and wants to have it, simply because it is pain...&quot;
      </p>
      <p className="author">
        Lorem Ipsum
      </p>

    </div>
  );
}

export default DescriptionBlock;
