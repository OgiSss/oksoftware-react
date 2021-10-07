import React from "react";

const SubscriptionListContext = React.createContext({
    subscriptionList: [],
    deleteEmailHandler: () => { },
});

export default SubscriptionListContext;