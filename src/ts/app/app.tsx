import { Button } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import * as React from "react";

import { INotificationsStore } from "../stores/notifications";

interface IAppProps {
    readonly notificationsStore?: INotificationsStore;
}

@inject("notificationsStore")
@observer
export class App extends React.Component<IAppProps> {

    public render() {
        return (
            <>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onClick}>
                    Raise Notification
                </Button>
            </>
        );
    }

    private readonly onClick = () => {

        const { notificationsStore } = this.props;

        notificationsStore!.raiseNotification("Hello!");
    }
}
