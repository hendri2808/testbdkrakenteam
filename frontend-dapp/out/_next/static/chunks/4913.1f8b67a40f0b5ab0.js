"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4913],{94913:function(t,r,a){a.d(r,{E:function(){return z},a:function(){return x}});var e=a(61744),i=a(2593),n=a(29251),s=a(9279),c=a(31886),o=a(84243),p=a(2515),l=a(86407),d=a(21919),h=a(2840),u=a(23437),m=a(7681),g=a(88309),y=a(43277),W=a(40721),w=a(17736),f=a(38776),T=a(99979),C=a(1604),b=a(93626);class S{featureName=p.cL.name;constructor(t){this.contractWrapper=t}token=(0,u.f)(async t=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[t]}))}class k{featureName=p.cM.name;constructor(t,r,a){this.erc721=t,this.contractWrapper=r,this.storage=a;let e=new d.C(this.contractWrapper,p.bg,this.storage);this.conditions=new m.D(this.contractWrapper,e,this.storage)}to=(0,u.f)(async(t,r,a)=>{let e=await this.conditions.getClaimTransaction(t,r,a);return e.setParse(t=>{let a=this.contractWrapper.parseLogs("TokensClaimed",t?.logs)[0].args.startTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i}),e})}class M{featureName=p.cN.name;constructor(t,r){this.erc721=t,this.contractWrapper=r}to=(0,u.f)(async(t,r,a)=>{let n=await this.contractWrapper.getSigner()?.getAddress();if(t!==n)throw Error("Zora Drop: Destination address must match connected wallet address");if(a?.pricePerToken)throw Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");let s=await this.getSaleDetails(),c=s.publicSalePrice,o=e.parseEther(p.cw.parse("0.000777")),l=i.O$.from(c).add(o).mul(r),d=u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"purchase",args:[r],overrides:{value:l}});return d.setParse(t=>{let a=this.contractWrapper.parseLogs("Sale",t?.logs)[0].args.firstPurchasedTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i}),d});async getSaleDetails(){return this.contractWrapper.read("saleDetails",[])}}class E{featureName=p.cO.name;constructor(t,r){this.erc721=t,this.contractWrapper=r}async getClaimTransaction(t,r,a){let e={};return a&&a.pricePerToken&&(e=await (0,g.c)(this.contractWrapper,a.pricePerToken,r,a.currencyAddress,a.checkERC20Allowance)),u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[t,r],overrides:e})}to=(0,u.f)(async(t,r,a)=>{let e=await this.getClaimTransaction(t,r,a);return e.setParse(t=>{let a=this.contractWrapper.parseLogs("TokensClaimed",t?.logs)[0].args.startTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i}),e})}class I{featureName=p.cP.name;constructor(t,r,a){this.erc721=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc721Revealable()}lazyMint=(0,u.f)(async(t,r)=>{let a=await this.erc721.nextTokenIdToMint(),e=await (0,h.u)(t,this.storage,a.toNumber(),r),i=(0,h.g)(e);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,i.endsWith("/")?i:`${i}/`,n.Y0("")],parse:t=>{let r=this.contractWrapper.parseLogs("TokensLazyMinted",t?.logs),a=r[0].args.startTokenId,e=r[0].args.endTokenId,i=[];for(let r=a;r.lte(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.getTokenMetadata(r)});return i}})});updateMetadata=(0,u.f)(async(t,r,a)=>{let e=await this.contractWrapper.read("getBaseURICount",[]);if(e.eq(0))throw Error("No base URI set. Please set a base URI before updating metadata");let n=i.O$.from(t),s=i.O$.from(0),c=i.O$.from(0),o=0;for(let t=0;t<e.toNumber()&&(o=t,!(c=await this.contractWrapper.read("getBatchIdAtIndex",[o])).gt(n));t++)s=c;let p=Array.from({length:c.sub(s).toNumber()},(t,r)=>r+s.toNumber()),l=await Promise.all(p.map(t=>this.erc721.getTokenMetadata(t))),d=[];for(let t=0;t<l.length;t++){let{id:a,uri:e,...s}=l[t];i.O$.from(n).eq(i.O$.from(a))?d.push(r):d.push(s)}let m=await (0,h.u)(d,this.storage,s.toNumber(),a),g=m[0].substring(0,m[0].lastIndexOf("/"));return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateBatchBaseURI",args:[o,`${g.endsWith("/")?g:`${g}/`}`]})});detectErc721Revealable(){if((0,d.d)(this.contractWrapper,"ERC721Revealable"))return new g.D(this.contractWrapper,this.storage,p.cQ.name,()=>this.erc721.nextTokenIdToMint())}}class v{featureName=p.cR.name;constructor(t){this.contractWrapper=t}cancel=(0,u.f)(async t=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancel",args:[t]}));revoke=(0,u.f)(async t=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"revoke",args:[t]}))}class P{featureName=p.cS.name;constructor(t,r){this.contractWrapper=t,this.storage=r}update=(0,u.f)(async(t,r)=>{let a=await (0,h.b)(r,this.storage);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,a]})})}class R{featureName=p.cT.name;constructor(t,r,a){this.erc721=t,this.contractWrapper=r,this.storage=a}to=(0,u.f)(async(t,r)=>{let[a,e]=await Promise.all([(0,h.u)(r,this.storage),(0,p.aL)(t)]),i=new y.C(this.contractWrapper),n=a.map(t=>i.encode("mintTo",[e,t]));return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:t=>{let a=this.contractWrapper.parseLogs("TokensMinted",t.logs);if(0===a.length||a.length<r.length)throw Error("TokenMinted event not found, minting failed");return a.map(r=>{let a=r.args.tokenIdMinted;return{id:a,receipt:t,data:()=>this.erc721.get(a)}})}})})}class N{featureName=p.cU.name;constructor(t,r,a){this.erc721=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc721BatchMintable()}to=(0,u.f)(async(t,r)=>{let[a,e]=await Promise.all([(0,h.b)(r,this.storage),(0,p.aL)(t)]);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[e,a],parse:t=>{let r=this.contractWrapper.parseLogs("Transfer",t?.logs);if(0===r.length)throw Error("TransferEvent event not found");let a=r[0].args.tokenId;return{id:a,receipt:t,data:()=>this.erc721.get(a)}}})});async getMintTransaction(t,r){return this.to.prepare(await (0,p.aL)(t),r)}detectErc721BatchMintable(){if((0,d.d)(this.contractWrapper,"ERC721BatchMintable"))return new R(this.erc721,this.contractWrapper,this.storage)}}class L{featureName=p.cV.name;constructor(t,r){this.contractWrapper=t,this.storage=r}async get(){let t=await this.contractWrapper.read("sharedMetadata",[]);if(!t.every(t=>""===t))return{name:t.name,description:t.description,image:t.imageURI,animation_url:t.animationURI}}set=(0,u.f)(async t=>{let r=w.B.parse(t);r.description=this.sanitizeJSONString(r.description);let a=[];(0,W.XT)(r.image)?a.push(this.storage.upload(r.image)):"string"==typeof r.image?a.push(Promise.resolve(r.image)):a.push(Promise.resolve(void 0)),(0,W.XT)(r.animation_url)?a.push(this.storage.upload(r.animation_url)):"string"==typeof r.animation_url?a.push(Promise.resolve(r.animation_url)):a.push(Promise.resolve(void 0));let[e,i]=await Promise.all(a);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setSharedMetadata",args:[{name:`${r.name||""}`,description:r.description||"",imageURI:e||"",animationURI:i||""}]})});sanitizeJSONString(t){if(!t)return t;let r=JSON.stringify(t);return r.slice(1,r.length-1)}}class A{featureName=p.cW.name;constructor(t,r){this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){let t=r?.start||0,e=r?.count||h.D;a=a.slice(t,t+e)}return await Promise.all(a.map(t=>this.erc721.get(t.toString())))}async tokenIds(t){let r=await (0,p.aL)(t||await this.contractWrapper.getSignerAddress()),a=await this.contractWrapper.read("balanceOf",[r]),e=Array.from(Array(a.toNumber()).keys());return await Promise.all(e.map(t=>this.contractWrapper.read("tokenOfOwnerByIndex",[r,t])))}}class O{featureName=p.cX.name;constructor(t,r){this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){let t=r?.start||0,e=r?.count||h.D;a=a.slice(t,t+e)}return await Promise.all(a.map(t=>this.erc721.get(t.toString())))}async tokenIds(t){let r=await (0,p.aL)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("tokensOfOwner",[r])}}class B{featureName=p.cY.name;constructor(t,r){this.erc721=t,this.contractWrapper=r,this.owned=this.detectErc721Owned()}async all(t){let r=i.O$.from(0);(0,d.h)("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));let a=i.O$.from(t?.start||0).add(r).toNumber(),e=i.O$.from(t?.count||h.D).toNumber(),n=await this.erc721.nextTokenIdToMint(),s=Math.min(n.add(r).toNumber(),a+e);return await Promise.all([...Array(s-a).keys()].map(t=>this.erc721.get((a+t).toString())))}async allOwners(t){let r;let a=i.O$.from(0);(0,d.h)("startTokenId",this.contractWrapper)&&(a=await this.contractWrapper.read("startTokenId",[]));try{r=await this.erc721.totalClaimedSupply()}catch(t){r=await this.totalCount()}let e=[...Array((r=r.add(a)).toNumber()).keys()];if(t){let r=t?.start||0,a=t?.count||h.D;e=e.slice(r,r+a)}let n=await Promise.all(e.map(t=>this.erc721.ownerOf(t).catch(()=>s.d)));return e.map(t=>({tokenId:t,owner:n[t]})).filter(t=>t.owner!==s.d)}async totalCount(){return await this.erc721.nextTokenIdToMint()}async totalCirculatingSupply(){return await this.contractWrapper.read("totalSupply",[])}detectErc721Owned(){return(0,d.d)(this.contractWrapper,"ERC721Enumerable")?new A(this.erc721,this.contractWrapper):(0,d.d)(this.contractWrapper,"ERC721AQueryable")?new O(this.erc721,this.contractWrapper):void 0}}let D=b.B.extend({tierPriority:C.z.array(C.z.string()),royaltyRecipient:p.b9.default(s.d),royaltyBps:p.cC.default(0),quantity:p.b5.default(1)}),$=[{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"},{name:"data",type:"bytes"}];class q{featureName=p.cZ.name;constructor(t,r,a){this.erc721=t,this.contractWrapper=r,this.storage=a}async getMetadataInTier(t){let r=await this.contractWrapper.read("getMetadataForAllTiers",[]),a=r.find(r=>r.tier===t);if(!a)throw Error("Tier not found in contract.");let e=await Promise.all(a.ranges.map((t,r)=>{let e=[],i=a.baseURIs[r];for(let r=t.startIdInclusive.toNumber();r<t.endIdNonInclusive.toNumber();r++){let t=i.endsWith("/")?`${i}${r}`:`${i}/${r}`,a=this.storage.downloadJSON(t);e.push(a)}return e}).flat());return e}async getTokensInTier(t){let r=await this.contractWrapper.read("getTokensInTierLen",[]);if(r.eq(0))return[];let a=await this.contractWrapper.read("getTokensInTier",[t,0,r]),e=await Promise.all(a.map(t=>{let r=[];for(let a=t.startIdInclusive.toNumber();a<t.endIdNonInclusive.toNumber();a++)r.push(this.erc721.get(a));return r}).flat());return e}createBatchWithTier=(0,u.f)(async(t,r,a)=>{let e=await this.erc721.nextTokenIdToMint(),i=await (0,h.u)(t,this.storage,e.toNumber(),a),s=(0,h.g)(i);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[i.length,s.endsWith("/")?s:`${s}/`,r,n.Y0("")],parse:t=>{let r=this.contractWrapper.parseLogs("TokensLazyMinted",t?.logs),a=r[0].args[1],e=r[0].args[2],i=[];for(let r=a;r.lte(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.getTokenMetadata(r)});return i}})});createDelayedRevealBatchWithTier=(0,u.f)(async(t,r,a,e,i)=>{if(!a)throw Error("Password is required");let s=await this.storage.uploadBatch([w.C.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),p=(0,h.g)(s),l=await this.erc721.nextTokenIdToMint(),d=await this.storage.uploadBatch(r.map(t=>w.C.parse(t)),{onProgress:i?.onProgress,rewriteFileNames:{fileStartNumber:l.toNumber()}}),m=(0,h.g)(d),g=await this.contractWrapper.read("getBaseURICount",[]),y=await this.contractWrapper.getChainID(),W=c.keccak256(["string","uint256","uint256","address"],[a,y,g,this.contractWrapper.address]),f=await this.contractWrapper.read("encryptDecrypt",[n.Y0(m),W]),T=c.keccak256(["bytes","bytes","uint256"],[n.Y0(m),W,y]),C=o.$.encode(["bytes","bytes32"],[f,T]);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[d.length,p.endsWith("/")?p:`${p}/`,e,C],parse:t=>{let r=this.contractWrapper.parseLogs("TokensLazyMinted",t?.logs),a=r[0].args[1],e=r[0].args[2],i=[];for(let r=a;r.lte(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.getTokenMetadata(r)});return i}})});reveal=(0,u.f)(async(t,r)=>{if(!r)throw Error("Password is required");let a=await this.contractWrapper.getChainID(),e=c.keccak256(["string","uint256","uint256","address"],[r,a,t,this.contractWrapper.address]);try{let r=await this.contractWrapper.callStatic().reveal(t,e);if(!r.includes("://")||!r.endsWith("/"))throw Error("invalid password")}catch(t){throw Error("invalid password")}return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,e]})});async generate(t){let[r]=await this.generateBatch([t]);return r}async generateBatch(t){let r=await Promise.all(t.map(t=>D.parseAsync(t))),a=await this.contractWrapper.getChainID(),e=this.contractWrapper.getSigner();return(0,f.Z)(e,"No signer available"),await Promise.all(r.map(async t=>{let r=await this.contractWrapper.signTypedData(e,{name:"SignatureAction",version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{GenericRequest:$},await this.mapPayloadToContractStruct(t));return{payload:t,signature:r.toString()}}))}async verify(t){let r=await this.mapPayloadToContractStruct(t.payload),a=await this.contractWrapper.read("verify",[r,t.signature]);return a[0]}async claimWithSignature(t){let r=await this.mapPayloadToContractStruct(t.payload),a=await (0,T.n)(this.contractWrapper.getProvider(),t.payload.price,t.payload.currencyAddress),e=await this.contractWrapper.getCallOverrides();await (0,w.s)(this.contractWrapper,a,t.payload.currencyAddress,e);let i=await this.contractWrapper.sendTransaction("claimWithSignature",[r,t.signature],e),n=this.contractWrapper.parseLogs("TokensClaimed",i?.logs),s=n[0].args.startTokenId,c=s.add(n[0].args.quantityClaimed),o=[];for(let t=s;t.lt(c);t=t.add(1))o.push({id:t,receipt:i,data:()=>this.erc721.get(t)});return o}async mapPayloadToContractStruct(t){let r=await (0,T.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress),a=o.$.encode(["string[]","address","address","uint256","address","uint256","uint256","address"],[t.tierPriority,t.to,t.royaltyRecipient,t.royaltyBps,t.primarySaleRecipient,t.quantity,r,t.currencyAddress]);return{uid:t.uid,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,data:a}}}class x{featureName=p.c_.name;constructor(t,r){this.contractWrapper=t,this.storage=r}mint=(0,u.f)(async t=>{let r=t.payload,a=t.signature,e=await this.contractWrapper.getCallOverrides(),i=t=>{let r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw Error("No MintWithSignature event found");let a=r[0].args.tokenIdMinted;return{id:a,receipt:t}};if(await this.isLegacyNFTContract()){let t=await this.mapLegacyPayloadToContractStruct(r),n=t.price;return await (0,w.s)(this.contractWrapper,n,r.currencyAddress,e),u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[t,a],overrides:e,parse:i})}{let t=await this.mapPayloadToContractStruct(r),n=t.pricePerToken.mul(t.quantity);return await (0,w.s)(this.contractWrapper,n,r.currencyAddress,e),u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[t,a],overrides:e,parse:i})}});mintBatch=(0,u.f)(async t=>{let r=await this.isLegacyNFTContract(),a=(await Promise.all(t.map(t=>r?this.mapLegacyPayloadToContractStruct(t.payload):this.mapPayloadToContractStruct(t.payload)))).map((r,a)=>{let e=t[a],n=e.signature,s=e.payload.price;if(i.O$.from(s).gt(0))throw Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:r,signature:n}}),e=new y.C(this.contractWrapper),n=a.map(t=>e.encode("mintWithSignature",[t.message,t.signature]));if((0,d.h)("multicall",this.contractWrapper))return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:t=>{let r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw Error("No MintWithSignature event found");return r.map(r=>({id:r.args.tokenIdMinted,receipt:t}))}});throw Error("Multicall not available on this contract!")});async verify(t){let r;let a=await this.isLegacyNFTContract(),e=t.payload,i=t.signature;return r=a?await this.mapLegacyPayloadToContractStruct(e):await this.mapPayloadToContractStruct(e),(await this.contractWrapper.read("verify",[r,i]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){let r=await this.isLegacyNFTContract(),a=await Promise.all(t.map(t=>b.t.parseAsync(t))),e=a.map(t=>t.metadata),i=await (0,h.u)(e,this.storage),n=await this.contractWrapper.getChainID(),s=this.contractWrapper.getSigner();return(0,f.Z)(s,"No signer available"),await Promise.all(a.map(async(t,a)=>{let e;let c=i[a],o=await b.u.parseAsync({...t,uri:c});return e=r?await this.contractWrapper.signTypedData(s,{name:"TokenERC721",version:"1",chainId:n,verifyingContract:this.contractWrapper.address},{MintRequest:b.v},await this.mapLegacyPayloadToContractStruct(o)):await this.contractWrapper.signTypedData(s,{name:"SignatureMintERC721",version:"1",chainId:n,verifyingContract:await this.contractWrapper.address},{MintRequest:b.x},await this.mapPayloadToContractStruct(o)),{payload:o,signature:e.toString()}}))}async mapPayloadToContractStruct(t){let r=await (0,T.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid}}async mapLegacyPayloadToContractStruct(t){let r=await (0,T.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,price:r,uri:t.uri,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}async isLegacyNFTContract(){return(0,d.d)(this.contractWrapper,"ERC721SignatureMintV1")}}class z{featureName=p.c$.name;get chainId(){return this._chainId}constructor(t,r,a){this.contractWrapper=t,this.storage=r,this.query=this.detectErc721Enumerable(),this.mintable=this.detectErc721Mintable(),this.burnable=this.detectErc721Burnable(),this.lazyMintable=this.detectErc721LazyMintable(),this.tieredDropable=this.detectErc721TieredDrop(),this.signatureMintable=this.detectErc721SignatureMintable(),this.claimWithConditions=this.detectErc721ClaimableWithConditions(),this.claimCustom=this.detectErc721Claimable(),this.claimZora=this.detectErc721ClaimableZora(),this.erc721SharedMetadata=this.detectErc721SharedMetadata(),this.loyaltyCard=this.detectErc721LoyaltyCard(),this.updatableMetadata=this.detectErc721UpdatableMetadata(),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){let[r,a]=await Promise.all([this.ownerOf(t).catch(()=>s.d),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...h.F}))]);return{owner:r,metadata:a,type:"ERC721",supply:"1"}}async ownerOf(t){return await this.contractWrapper.read("ownerOf",[t])}async balanceOf(t){return await this.contractWrapper.read("balanceOf",[await (0,p.aL)(t)])}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async isApproved(t,r){let[a,e]=await Promise.all([(0,p.aL)(t),(0,p.aL)(r)]);return await this.contractWrapper.read("isApprovedForAll",[a,e])}transfer=(0,u.f)(async(t,r)=>{let[a,e]=await Promise.all([this.contractWrapper.getSignerAddress(),(0,p.aL)(t)]);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[a,e,r]})});transferFrom=(0,u.f)(async(t,r,a)=>{let[e,i]=await Promise.all([(0,p.aL)(t),(0,p.aL)(r)]);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[e,i,a]})});setApprovalForAll=(0,u.f)(async(t,r)=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[await (0,p.aL)(t),r]}));setApprovalForToken=(0,u.f)(async(t,r)=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,p.aL)(t),r]}));async getAll(t){return(0,l.a)(this.query,p.cY).all(t)}async getAllOwners(t){return(0,l.a)(this.query,p.cY).allOwners(t)}async totalCount(){return this.nextTokenIdToMint()}async totalCirculatingSupply(){return(0,l.a)(this.query,p.cY).totalCirculatingSupply()}async getOwned(t,r){if(t&&(t=await (0,p.aL)(t)),this.query?.owned)return this.query.owned.all(t,r);{let[a,e]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners(r)]),i=(e||[]).filter(t=>a?.toLowerCase()===t.owner?.toLowerCase());return await Promise.all(i.map(async t=>this.get(t.tokenId)))}}async getOwnedTokenIds(t){if(t&&(t=await (0,p.aL)(t)),this.query?.owned)return this.query.owned.tokenIds(t);{let[r,a]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);return(a||[]).filter(t=>r?.toLowerCase()===t.owner?.toLowerCase()).map(t=>i.O$.from(t.tokenId))}}mint=(0,u.f)(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t));mintTo=(0,u.f)(async(t,r)=>(0,l.a)(this.mintable,p.cU).to.prepare(t,r));async getMintTransaction(t,r){return this.mintTo.prepare(t,r)}mintBatch=(0,u.f)(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t));mintBatchTo=(0,u.f)(async(t,r)=>(0,l.a)(this.mintable?.batch,p.cT).to.prepare(t,r));burn=(0,u.f)(async t=>(0,l.a)(this.burnable,p.cL).token.prepare(t));cancel=(0,u.f)(async t=>(0,l.a)(this.loyaltyCard,p.cR).cancel.prepare(t));revoke=(0,u.f)(async t=>(0,l.a)(this.loyaltyCard,p.cR).revoke.prepare(t));lazyMint=(0,u.f)(async(t,r)=>(0,l.a)(this.lazyMintable,p.cP).lazyMint.prepare(t,r));updateMetadata=(0,u.f)(async(t,r)=>this.lazyMintable?this.lazyMintable.updateMetadata.prepare(t,r):(0,l.a)(this.updatableMetadata,p.cS).update.prepare(t,r));async update(t,r){return this.updateMetadata(t,r)}claim=(0,u.f)(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r));claimTo=(0,u.f)(async(t,r,a)=>{let e=this.claimWithConditions,i=this.claimCustom,n=this.claimZora;if(e)return e.to.prepare(t,r,a);if(i)return i.to.prepare(t,r,a);if(n)return n.to.prepare(t,r,a);throw new p.x(p.cO)});async getClaimTransaction(t,r,a){let e=this.claimWithConditions,i=this.claimCustom;if(e)return e.conditions.getClaimTransaction(t,r,a);if(i)return i.getClaimTransaction(t,r,a);throw new p.x(p.cO)}async totalClaimedSupply(){let t=this.contractWrapper;if((0,d.h)("totalMinted",t))return this.contractWrapper.read("totalMinted",[]);if((0,d.h)("nextTokenIdToClaim",t))return this.contractWrapper.read("nextTokenIdToClaim",[]);throw Error("No function found on contract to get total claimed supply")}async totalUnclaimedSupply(){let[t,r]=await Promise.all([this.nextTokenIdToMint(),this.totalClaimedSupply()]);return t.sub(r)}get claimConditions(){return(0,l.a)(this.claimWithConditions,p.cM).conditions}get tieredDrop(){return(0,l.a)(this.tieredDropable,p.cZ)}get signature(){return(0,l.a)(this.signatureMintable,p.c_)}get revealer(){return(0,l.a)(this.lazyMintable?.revealer,p.cQ)}get sharedMetadata(){return(0,l.a)(this.erc721SharedMetadata,p.cV)}async getTokenMetadata(t){let r=await this.contractWrapper.read("tokenURI",[t]);if(!r)throw new p.n;return(0,h.f)(t,r,this.storage)}async nextTokenIdToMint(){if((0,d.h)("nextTokenIdToMint",this.contractWrapper)){let t=await this.contractWrapper.read("nextTokenIdToMint",[]);return(0,d.h)("startTokenId",this.contractWrapper)&&(t=t.sub(await this.contractWrapper.read("startTokenId",[]))),t}if((0,d.h)("totalSupply",this.contractWrapper))return await this.contractWrapper.read("totalSupply",[]);throw Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint")}detectErc721Enumerable(){if((0,d.d)(this.contractWrapper,"ERC721Supply")||(0,d.h)("nextTokenIdToMint",this.contractWrapper))return new B(this,this.contractWrapper)}detectErc721Mintable(){if((0,d.d)(this.contractWrapper,"ERC721Mintable"))return new N(this,this.contractWrapper,this.storage)}detectErc721Burnable(){if((0,d.d)(this.contractWrapper,"ERC721Burnable"))return new S(this.contractWrapper)}detectErc721LazyMintable(){if((0,d.d)(this.contractWrapper,"ERC721LazyMintable"))return new I(this,this.contractWrapper,this.storage)}detectErc721TieredDrop(){if((0,d.d)(this.contractWrapper,"ERC721TieredDrop"))return new q(this,this.contractWrapper,this.storage)}detectErc721SignatureMintable(){if((0,d.d)(this.contractWrapper,"ERC721SignatureMintV1")||(0,d.d)(this.contractWrapper,"ERC721SignatureMintV2"))return new x(this.contractWrapper,this.storage)}detectErc721ClaimableWithConditions(){if((0,d.d)(this.contractWrapper,"ERC721ClaimConditionsV1")||(0,d.d)(this.contractWrapper,"ERC721ClaimConditionsV2")||(0,d.d)(this.contractWrapper,"ERC721ClaimPhasesV1")||(0,d.d)(this.contractWrapper,"ERC721ClaimPhasesV2"))return new k(this,this.contractWrapper,this.storage)}detectErc721Claimable(){if((0,d.d)(this.contractWrapper,"ERC721ClaimCustom"))return new E(this,this.contractWrapper)}detectErc721ClaimableZora(){if((0,d.d)(this.contractWrapper,"ERC721ClaimZora"))return new M(this,this.contractWrapper)}detectErc721SharedMetadata(){if((0,d.d)(this.contractWrapper,"ERC721SharedMetadata"))return new L(this.contractWrapper,this.storage)}detectErc721LoyaltyCard(){if((0,d.d)(this.contractWrapper,"ERC721LoyaltyCard"))return new v(this.contractWrapper)}detectErc721UpdatableMetadata(){if((0,d.d)(this.contractWrapper,"ERC721UpdatableMetadata"))return new P(this.contractWrapper,this.storage)}}}}]);