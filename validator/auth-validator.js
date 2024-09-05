const {z}=require("zod");

const signupSchema = z.object({
    username: z.string({ requires_error:"Name is required"}).trim().min(3, {message:"Name must not be more than 255"}),
    email: z.string({required_error:"Email is required"}).trim().email({message:"Invalid email Address"}).min(3,{message:"Email must be of at lease 3 characters"}).max(255, {message:"Email must not be more than 255 characters"}),
    phone: z.string({required_error: "Phone is required"}).trim().min(10,{message:"Phone must be atleast of 10 characters"}).max(10, {message: "Phone must not be more than 10 characters"}),
    password: z.string({required_error:"Password is required"}).min(7, {message:"password must be atleast of 7 characters"}).max(1024, {message:"password can't be more than 1024 charcters"})

})


module.exports=signupSchema;