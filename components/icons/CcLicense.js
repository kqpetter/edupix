import React from 'react';
import Image from 'next/image';


const CcLogo = ({data}) => (
     <div>
        {data.license === "CC-BY-4.0" ?
        <>
            <Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" width="88" height="33"  />
            <br></br>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License.</a>
        </>
         : null}
        {data.license === "CC-BY-SA-4.0" ?
        <>
            <Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" width="88" height="33" />
            <br></br>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License.</a>
        </>
        : null} 
        {data.license === "CC-BY-NC-4.0" ?
        <>
            <Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" width="88" height="33" />
            <br></br>This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License.</a>
        </>
        : null }

        {data.license === "CC-BY-NC-SA-4.0" ?
        <>
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" width="88" height="33" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a>
        </>
        : null }
    </div>
    
);

export default CcLogo;