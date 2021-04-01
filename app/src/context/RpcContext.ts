import { JsonRpc } from "eosjs"
import React from "react"

export const rpc = new JsonRpc('https://wax.greymass.com')

const RpcContext = React.createContext<JsonRpc>(rpc)

export default RpcContext