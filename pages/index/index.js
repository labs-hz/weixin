// index.js
Page({
  data: {
    myMessage: 'Hello, WeChat!'
  },

  setMyMessage(_msg) {
    console.info(_msg)
    this.setData({
      myMessage: _msg
    })
  },

  onClick(e) {
    this.setMyMessage('1111111')
    console.log("按钮被点击了！");
    wx.showToast({
      title: '点了我～',
      icon: 'none'
    });
    const fs = wx.getFileSystemManager();
    const FILE_PATH = `${wx.env.USER_DATA_PATH}/myfile.txt`;
    const content = "这是要保存的内容";

    fs.writeFile({
      filePath: FILE_PATH,
      data: content,
      encoding: 'utf8',
      success(res) {
        console.log("文件保存成功", res);
      },
      fail(err) {
        console.error("保存失败", err);
      }
    });

  },

  onReadFile() {
    this.setMyMessage('1111111')

    const FILE_PATH = `${wx.env.USER_DATA_PATH}/myfile.txt`;

    const fs = wx.getFileSystemManager();

    fs.readFile({
      filePath: FILE_PATH,
      encoding: 'utf8',
      success: (res) => {
        console.log("读取内容：", res.data);
        this.setMyMessage(res.data);
      },
      fail: (err) => {
        console.error("读取失败", err);
      }
    });
  }
})
