import React from 'react'

const Counti= ({text, count, bgColor}) => {

  const progress = {width: `${count}%`};
  console.log(`Pourcentage ${text}`);

  return (
    <div>
        <p className="h1">{count}%</p>
        <div className="progress">
            <div 
              className={`progress-bar progress-bar-striped bg-${bgColor}`} 
              role="progressbar"
              style={progress}>
                progression
            </div>
        </div>
    </div>

  )
}

export default React.memo(Counti);


