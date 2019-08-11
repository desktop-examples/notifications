import { DefaultNotificationsStore } from "./notifications";
import { ServiceWorkerStore } from "./serviceWorker/serviceWorkerStore";

export const stores = {
    notificationsStore: new DefaultNotificationsStore(),
    serviceWorkerStore: new ServiceWorkerStore(),
};
