import React from 'react'
import "./../components/animate.css"
const Animate = () => {
  return (
 
        
 <div class="cssload-loading">
	<div class="cssload-finger cssload-finger-1">
		<div class="cssload-finger-item">
			<span></span><i></i>
		</div>
	</div>
	<div class="cssload-finger cssload-finger-2">
		<div class="cssload-finger-item">
			<span></span><i></i>
		</div>
	</div>
	<div class="cssload-finger cssload-finger-3">
		<div class="cssload-finger-item">
			<span></span><i></i>
		</div>
	</div>
	<div class="cssload-finger cssload-finger-4">
		<div class="cssload-finger-item">
			<span></span><i></i>
		</div>
	</div>
	<div class="cssload-last-finger">
		<div class="cssload-last-finger-item"><i></i></div>
        
	</div>
    <div  className="loading-text" ><p className='text-amber-400 text-2xl animate-pulse font-medium' >Loading....</p></div>
    
</div>



  )
}

export default Animate
