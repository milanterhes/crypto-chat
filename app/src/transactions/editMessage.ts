import { EditMessageTransaction } from "./types";

export const editMessage = async (
    chatroom: string,
    activeUser: any,
    new_message: string,
    message_id: number
): Promise<any> => {

    const action = {
        account: "chatexample1",
        name: "editmessage",
        data: {
            chatroom,
            new_message,
            message_id
        },
    };
    const permission = activeUser.requestPermission

    const transaction: EditMessageTransaction = {
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
        throw new Error("Editing the message has failed");
    }
    return response;
};