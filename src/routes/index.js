import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { TabsRoutes } from "./tabs.routes";
import { DrawerRoutes } from "./drawerRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            {/* <StackRoutes /> */}
            {/* <TabsRoutes /> */}
            <DrawerRoutes />
        </NavigationContainer>
    )
}