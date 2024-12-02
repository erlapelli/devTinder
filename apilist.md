# DevTinder APIs 
## authRouter
-POST/signup 
-POST/login 
-POST/logout 

## profileRouter
-GET/profile/view 
-PATCH/profile/edit 
-PATCH/profile/password // forgot password API 

## connectionRequestRouter
-POST /request/send/:status/:userId 
-Post /request/review/:status/:userId 


## userRouter
-GET/user/requests
-GET/user/connections 
-GET/user/feed -Gets you the profiles of other user on platform 

Status:ignore,interested,accepted,rejected 
