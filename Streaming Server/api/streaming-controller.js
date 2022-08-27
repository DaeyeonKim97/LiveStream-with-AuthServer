const HttpStatus = require('http-status');
const shortid = require('shortid');
const Stream = require('../database/schema');


exports.generateKey = async (req,res,next)=>{
    let newKey = shortid.generate();
    let userName = req.body.userName;
    
    let stream = {};

    
    Stream.findOne({userName:userName}, async (err,user)=>{
        if(!err){
            if(!user){
                console.log('키를 발급받지 않은 유저입니다.')

                stream = new Stream({
                    userName : userName,
                    streamKey : newKey,
                    isOn : false
                })
            
                await stream.save((err)=>{
                    if(err){
                        console.log('키 생성 에러!');
            
                        res.status(HttpStatus.BAD_REQUEST).send({
                        status: HttpStatus.BAD_REQUEST,
                        message : 'failed to generate key...',
                        });
                    }
            
                    else{
                        console.log('스트림 키 생성!');
            
                        res.status(HttpStatus.OK).send({
                            status: HttpStatus.OK,
                            message : 'OK',
                            results : newKey,
                        })
                    }
                    return;
                })

            } else {
                console.log('이미 키를 발급받은 유저입니다.');
                Stream.deleteMany({userName : userName},async (err,users)=>{
                    console.log('deleted info : ', users);

                    stream = new Stream({
                        userName : userName,
                        streamKey : newKey,
                        isOn : false
                    })
                
                    await stream.save((err)=>{
                        if(err){
                            console.log('키 생성 에러!');
                
                            res.status(HttpStatus.BAD_REQUEST).send({
                            status: HttpStatus.BAD_REQUEST,
                            message : 'failed to generate key...',
                            });
                        }
                
                        else{
                            console.log('스트림 키 생성!');
                
                            res.status(HttpStatus.OK).send({
                                status: HttpStatus.OK,
                                message : 'OK',
                                results : newKey,
                            })
                        }
                        return;
                    })
                })
            }
        }
    })
}


exports.getStreamKey = (req, res, next) =>{

    const userName = req.body.userName;

    Stream.findOne({userName:userName}, (err, user)=>{
        if(!err){
            if(!user){
                res.status(HttpStatus.BAD_REQUEST).send({
                    status: HttpStatus.BAD_REQUEST,
                    message : '해당 유저의 스트림키가 존재하지 않습니다.'
                })
            }
            else{
                res.status(HttpStatus.OK).send({
                    status: HttpStatus.OK,
                    message : 'OK',
                    results : user.streamKey,
                })
            }
        } else{
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message : '조회 실패'
            })
        }
    })
}

exports.getIsOn = (req,res,next) => {
    
    Stream.find({isOn:true}, (err,users)=>{
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message : 'OK',
            results : users,
        })
    })
}