//OFd5fRExhlv3W0j2
//mongodb://admin:OFd5fRExhlv3W0j2@cluster0-shard-00-00.nqsob.mongodb.net:27017,cluster0-shard-00-01.nqsob.mongodb.net:27017,cluster0-shard-00-02.nqsob.mongodb.net:27017/?ssl=true&replicaSet=atlas-qqa7jx-shard-0&authSource=admin&retryWrites=true&w=majority
const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
const userRouter=require('./routes/user-router');
const blogRouter=require('./routes/blog-router');
const app=express();
app.use(cors())
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/blogs",blogRouter);
mongoose.connect("mongodb://admin:OFd5fRExhlv3W0j2@cluster0-shard-00-00.nqsob.mongodb.net:27017,cluster0-shard-00-01.nqsob.mongodb.net:27017,cluster0-shard-00-02.nqsob.mongodb.net:27017/?ssl=true&replicaSet=atlas-qqa7jx-shard-0&authSource=admin&retryWrites=true&w=majority",
()=>console.log("db connected"));
app.listen(5000,()=>console.log("server on"));