import * as debug from "debug";
import { INotificationsStore } from "./iNotificationsStore";

const logger = debug("notifications");

export class DefaultNotificationsStore implements INotificationsStore {

    public constructor() {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notifications!");
        }

        Notification
            .requestPermission()
            .then((permission) => {
                ///
            });
    }

    public raiseNotification = (title: string) => {

        const options: NotificationOptions = {
            body: "New Notification",
        };

        const notification = new Notification(title, options);
        notification.onerror = (event: Event) => {
            logger("Errored creating notification");
        };
        notification.onclick = () => {
            logger("Clicked notification");
        };
        notification.onclose = () => {
            logger("Closed notitication");
        };
    }
}
