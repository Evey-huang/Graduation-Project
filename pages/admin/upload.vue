<template>
  <section class="container">

    <el-upload
      class="upload-demo"
      drag
      action="/api/upload/multerFile"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div class="single">
      <div class="title">单个文件上传</div>
      <input type="file" name="singleFile" ref="singleFile">
      <button class="submit" @click="singleFile">上传</button>
    </div>


    <img :src="img" />
    <div class="multer">
      <div class="title">多个文件上传</div>
      <input type="file" name="multerFile" ref="multerFile" multiple>
      <button class="submit" @click="multerFile">上传</button>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    head() {
      return {
        title: '图片上传'
      }
    },
    data() {
      return {
        img: ''
      }
    },
    methods: {
      singleFile() {
        let fileList = this.$refs.singleFile.files
        let formData = new FormData()
        formData.append('file', fileList[0])
        axios.post('/upload/singleFile', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
          this.img = res.data.imageUrl
        })
      },
      multerFile() {
        let fileList = this.$refs.multerFile.files
        let formData = new FormData()
        for (let i = 0; i < fileList.length; i++) {
          formData.append('file', fileList[i]);
        }
        axios.post('/upload/multerFile', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 0;
    padding: 100px 0;
    text-align: center;
  }

</style>
