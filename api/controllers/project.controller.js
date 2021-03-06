import Tb_Project from '../models/project';
import {parseObjectId} from '../utils';

export function getProjectsByUserId(req,res){
  if(!req.params.userId){
    res.status(201).json({errCode: 40001, errMsg: '用户', data: {}});
  }
  else{
    Tb_Project.find({ '_user': parseObjectId(req.params.userId) }, function (err, result){
      if(err){
        res.status(201).json({errCode:40003,errMsg:'项目信息',data:{err}});
      }
      else{
        res.status(201).json({errCode:0,errMsg:'',data:{result}});
      }
    });
  }
}
export function getProjectAudioFileByAudioFileId(req, res) {
    if (!req.params.audioId) {
        res.status(201).json({errCode: 40001, errMsg: '音频文件ID', data: {}});
    }
    else {
        var gridfs = req.app.get("gridfs");
        var readstream = gridfs.createReadStream({_id: req.params.audioId});
        readstream.on("error", function (err) {
            return res.status(201).json({errCode: 40003, errMsg: '项目音频文件', data: {error: err}});
        });
        res.set('Content-Type', 'audio/mpeg');
        readstream.pipe(res);
    }
};
