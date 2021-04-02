interface Authorization {
    actor: string;
    permission: string;
}

interface SendMessageData {
    sender: string;
    chatroom: string;
    message: string;
}

interface EditMessageData {
    chatroom: string;
    new_message: string;
    message_id: number;
}

interface Action<DataType> {
    authorization: Authorization[];
    account: string;
    name: string;
    data: DataType;
}

export interface SendMessageTransaction {
    actions: Action<SendMessageData>[];
}

export interface EditMessageTransaction {
    actions: Action<EditMessageData>[];
}