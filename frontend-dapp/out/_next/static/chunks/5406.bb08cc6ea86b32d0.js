"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5406],{93030:function(t,r,e){e.d(r,{S:function(){return s}});var a=e(2515),n=e(23437),o=e(94913);class s{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new o.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await (0,a.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await (0,a.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,n.f)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,n.f)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,n.f)(async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.aL)(t),r]}))}},89276:function(t,r,e){e.d(r,{h:function(){return n}});var a=e(2515);async function n(t,r,n){let o=t.getProvider(),s=(await Promise.resolve().then(e.t.bind(e,49242,19))).default,i=new a.cs(o,r,s,{},t.storage),c=await t.getSignerAddress(),d=t.address,p=await i.read("allowance",[c,d]);return p.gte(n)}},63813:function(t,r,e){e.d(r,{a:function(){return h},g:function(){return w},h:function(){return p},i:function(){return d},m:function(){return l},v:function(){return u}});var a=e(64146),n=e(2593),o=e(38776),s=e(2840),i=e(2515),c=e(43277);async function d(t,r,n,o,i){try{let c=(await e.e(5025).then(e.t.bind(e,25025,19))).default,d=new a.CH(n,c,t),[p,u]=await Promise.all([d.supportsInterface(s.I),d.supportsInterface(s.a)]);if(p){let s;let c=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,d=new a.CH(n,c,t),p=await d.isApprovedForAll(i,r);if(p)return!0;try{s=await d.getApproved(o)}catch(t){}return s?.toLowerCase()===r.toLowerCase()}if(!u)return console.error("Contract does not implement ERC 1155 or ERC 721."),!1;{let o=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,s=new a.CH(n,o,t);return await s.isApprovedForAll(i,r)}}catch(t){return console.error("Failed to check if token is approved",t),!1}}async function p(t,r,a,n,o){let c=(await e.e(5025).then(e.t.bind(e,25025,19))).default,d=new i.cs(t.getSignerOrProvider(),a,c,t.options,t.storage),[p,u]=await Promise.all([d.read("supportsInterface",[s.I]),d.read("supportsInterface",[s.a])]);if(p){let s=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,c=new i.cs(t.getSignerOrProvider(),a,s,t.options,t.storage),d=await c.read("isApprovedForAll",[o,r]);if(!d){let t=(await c.read("getApproved",[n])).toLowerCase()===r.toLowerCase();t||await c.sendTransaction("setApprovalForAll",[r,!0])}}else if(u){let n=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,s=new i.cs(t.getSignerOrProvider(),a,n,t.options,t.storage),c=await s.read("isApprovedForAll",[o,r]);c||await s.sendTransaction("setApprovalForAll",[r,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function u(t){(0,o.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,o.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,o.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,o.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,o.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,o.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type&&(0,o.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function l(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await (0,c.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function h(t,r,e){if(e=n.O$.from(e),t=n.O$.from(t),r=n.O$.from(r),t.eq(n.O$.from(0)))return!1;let a=r.sub(t).mul(i.dE).div(t);return a.gte(e)}async function w(t,r,e){let a=[];for(;r-t>s.D;)a.push(e(t,t+s.D-1)),t+=s.D;return a.push(e(t,r-1)),await Promise.all(a)}},15406:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return f}});var a=e(61744),n=e(43277),o=e(89276),s=e(99979),i=e(2515),c=e(63813),d=e(2840),p=e(23437),u=e(21919),l=e(88309),h=e(82123),w=e(93030);e(13550),e(77191),e(54146),e(64063);class f extends w.S{static contractRoles=i.dI;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cs(t,r,o,a,e);super(c,e,s),this.abi=i.bj.parse(o||[]),this.metadata=new u.C(this.contractWrapper,i.dJ,this.storage),this.app=new u.b(this.contractWrapper,this.metadata,this.storage),this.roles=new h.C(this.contractWrapper,f.contractRoles),this.encoder=new n.C(this.contractWrapper),this.estimator=new u.G(this.contractWrapper),this.events=new u.a(this.contractWrapper),this.royalties=new l.C(this.contractWrapper,this.metadata),this.owner=new l.a(this.contractWrapper)}async getWrappedContents(t){let r=await this.contractWrapper.read("getWrappedContents",[t]),e=[],o=[],s=[];for(let t of r)switch(t.tokenType){case 0:{let r=await (0,n.f)(this.contractWrapper.getProvider(),t.assetContract);e.push({contractAddress:t.assetContract,quantity:a.formatUnits(t.totalAmount,r.decimals)});break}case 1:o.push({contractAddress:t.assetContract,tokenId:t.tokenId});break;case 2:s.push({contractAddress:t.assetContract,tokenId:t.tokenId,quantity:t.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:o,erc1155Tokens:s}}wrap=(0,p.f)(async(t,r,e)=>{let[a,n,o]=await Promise.all([(0,d.b)(r,this.storage),this.toTokenStructList(t),(0,i.aL)(e||await this.contractWrapper.getSignerAddress())]);return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[n,a,o],parse:t=>{let r=this.contractWrapper.parseLogs("TokensWrapped",t?.logs);if(0===r.length)throw Error("TokensWrapped event not found");let e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:()=>this.get(e)}}})});unwrap=(0,p.f)(async(t,r)=>{let e=await (0,i.aL)(r||await this.contractWrapper.getSignerAddress());return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[t,e]})});async toTokenStructList(t){let r=[],e=this.contractWrapper.getProvider(),a=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(let a of t.erc20Tokens){let t=await (0,s.n)(e,a.quantity,a.contractAddress),n=await (0,o.h)(this.contractWrapper,a.contractAddress,t);if(!n)throw Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${a.quantity});

`);r.push({assetContract:a.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(let e of t.erc721Tokens){let t=await (0,c.i)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);r.push({assetContract:e.contractAddress,totalAmount:0,tokenId:e.tokenId,tokenType:1})}if(t.erc1155Tokens)for(let e of t.erc1155Tokens){let t=await (0,c.i)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push({assetContract:e.contractAddress,totalAmount:e.quantity,tokenId:e.tokenId,tokenType:2})}return r}async prepare(t,r,e){return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);