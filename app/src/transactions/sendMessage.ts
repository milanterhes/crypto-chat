export interface Authorization {
    actor: string;
    permission: string;
}

export interface SendMessageData {
    sender: string;
    chatroom: string;
    message: string;
}

export interface Action {
    authorization: Authorization[];
    account: string;
    name: string;
    data: SendMessageData;
}

export interface Transaction {
    actions: Action[];
}

export const sendMessage = async (
    chatroom: string,
    activeUser: any,
    message: string
): Promise<any> => {

    const accountName = await activeUser.getAccountName()

    const action = {
        account: "chatexample1",
        name: "sendmessage",
        data: {
            sender: accountName,
            chatroom,
            message
        },
    };
    const permission = activeUser.requestPermission

    const transaction: Transaction = {
        actions: [
            {
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission,
                    },
                ],
                ...action,
            },
        ],
    };

    const response = await activeUser.signTransaction(transaction, {
        blocksBehind: 3,
        expireSeconds: 120,
    });
    if (response.status !== "executed") {
        throw new Error("Sending new message has failed");
    }
    return response;
};