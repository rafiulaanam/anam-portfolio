import React from 'react';

const SkillIcon = ({img}) => {
    return (
        <div>
            <div className="avatar">
  <div className="w-16 md:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src={img} />
  </div>
</div>
        </div>
    );
};

export default SkillIcon;