// 引入模块
import { Router } from "express";
import multer from "multer";
// 创建实例
const router = Router();
const upload = multer({
  storage: multer.diskStorage({
    // 设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
    // Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: function(req, file, cb) {
      cb(null, "./uploads/img/");
    },
    // TODO: 文件区分目录存放
    // 获取文件MD5，重命名，添加后缀,文件重复会直接覆盖
    filename: function(req, file, cb) {
      let changedName = new Date().getTime() + "-" + file.originalname;
      cb(null, changedName);
    }
  })
});

let singleUpload = upload.single("singleFile");
// 单文件上传
router.post("/upload/singleFile", function(req, res, next) {
  singleUpload(req, res, err => {
    if (err) {
      return res.json({
        success: false,
        message: err.message,
        type: "single",
        originalname: ""
      });
    }
    if (req.file) {
      return res.json({
        success: true,
        message: "上传成功",
        type: "single",
        originalname: req.file.originalname
      });
    } else {
      return res.json({
        success: false,
        message: "文件丢失",
        type: "single",
        originalname: ""
      });
    }
  });
});

let multerUpload = upload.array("multerFile");
//多个文件上传
router.post("/upload/multerFile", (req, res, next) => {
  multerUpload(req, res, err => {
    if (err) {
      return res.json({
        success: false,
        type: "multer",
        fileList: [],
        msg: err.message
      });
    }
    let fileList = [];
    req.files.map(elem => {
      fileList.push({
        originalname: elem.originalname
      });
    });
    return res.json({
      success: true,
      message: "上传成功",
      type: "multer",
      fileList: fileList
    });
  });
});

export default router;
