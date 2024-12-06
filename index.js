import {ethers} from 'ethers';
import { Contract } from 'ethers';
import { abi } from "./abi.js";

const main = async () => { 
	const ethersRPC=new ethers.WebSocketProvider("wss://bsc-testnet-rpc.publicnode.com")

   const constractInstace = new Contract(
		"0xb1BD67670C6A824A6a71feDbB41690c6b753AB9A",
		abi,
		ethersRPC
	);

	const res=await constractInstace.BASIC_PRICE();
	console.log(res);
	 ethersRPC.destroy()
	console.log("RPC connection closed")
		
}
main()
