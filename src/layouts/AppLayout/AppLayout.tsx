import React, { FC } from "react";
import AppHeader from "components/AppHeader/AppHeader";

const AppLayout: FC = ({ children }) => {
    return (
        <div>
            <AppHeader></AppHeader>
            {children}
            <div>Copyright MLHN</div>
        </div>
    );
};

export default AppLayout;
