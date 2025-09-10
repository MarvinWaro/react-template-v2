import { Image } from '@unpic/react';
import React from 'react';

function AppLogoIconComponent() {
    return (
        <Image
            layout="constrained"
            width={40}
            height={40}
            src="./assets/img/placeholder.png"
            alt="chedro-12"
            className="size-10 transition-all group-data-[collapsible=icon]:size-8"
        />
    );
}

const AppLogoIcon = React.memo(AppLogoIconComponent);
export default AppLogoIcon;
