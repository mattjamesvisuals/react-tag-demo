import React from 'react'
import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'


const Ad = ({adSlot,  adRefreshCount}) => {
  
  if(! adSlot) {
  return (<div></div>)  
  }
   return (
    <div key={adSlot.name}>
      <FreestarAdSlot
        adUnit={adSlot}
        channel='custom_channel'
        classList={['m-30', 'p-15', 'b-thin-red']}
        adRefresh={adRefreshCount}
        onNewAdSlotsHook={(placementName) => console.log('freestar.newAdSlots() was called', { placementName })}
        onDeleteAdSlotsHook={(placementName) => console.log('freestar.deleteAdSlots() was called', { placementName })}
        onAdRefreshHook={(placementName) => console.log('adRefresh was called', { placementName })}
      />
    </div>
  )

}

  
export default Ad