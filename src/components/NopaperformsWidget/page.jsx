// components/NopaperformsWidget.js
// 'use client'; // If using Next.js 13+ App Router

// import Script from 'next/script';
// import { useEffect } from 'react';
// import '../NopaperformsWidget/npf-custom.css';
// export default function NopaperformsWidget() {
//   useEffect(() => {
//     // Ensure the div is mounted before the script runs
//     const div = document.createElement('div');
//     div.className = 'npf_wgts';
//     div.setAttribute('data-width', '350px');
//      div.setAttribute('data-height', '510px');
//     div.setAttribute('data-w', '11d11a985695ee40ae67edece4a153ad');
//     document.getElementById('npf-container').appendChild(div);
//   }, []);

//   return (
//     <>
//       <div id="npf-container" />
//       <Script
//         src="https://widgets.nopaperforms.com/emwgts.js"
//         strategy="afterInteractive"
//       />
//     </>
//   );
// }
'use client'; // For Next.js 13+ App Router

import Script from 'next/script';
import { useEffect } from 'react';
import '../NopaperformsWidget/npf-custom.css'; // Custom styling for widget

export default function NopaperformsWidget() {
  useEffect(() => {
    const container = document.getElementById('npf-container');

    // Prevent duplicate widget creation
    if (container && !container.querySelector('.npf_wgts')) {
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'npf_wgts';
      widgetDiv.setAttribute('data-width', '100%');
      widgetDiv.setAttribute('data-height', '500px');
      widgetDiv.setAttribute('data-w', '11d11a985695ee40ae67edece4a153ad');
      container.appendChild(widgetDiv);
    }
  }, []);

  return (
    <>
      <div id="npf-container" />
      <Script
        src="https://widgets.nopaperforms.com/emwgts.js"
        strategy="afterInteractive"
      />
    </>
  );
}
