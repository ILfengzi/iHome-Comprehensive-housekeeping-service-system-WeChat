<!--
 * @Description: 新建地址、编辑地址页面
 * @Author: Wanlin Chen
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-11-04 11:35:41
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="newaddress" enctype="multipart/form-data">
    <form action>
      <div class="form_group">
        <span>用户名：</span>
        <input name="username" placeholder="请输入您的名字" type="text" v-model="editAddress.username" />
      </div>
      <div class="form_group">
        <span class="title">手机号码：</span>
        <input name="phone" type="number" placeholder="请输入您的手机号" v-model="editAddress.phone" />
      </div>
      <div class="form_group">
        <span class="title">所在地区：</span>
        <!-- <input v-model="formaddr.area" class="area"> -->
        <div :inputArea="inputArea" class="area">{{editAddress.province}}{{aa}}{{editAddress.city}}</div>
        <img class="btn" src="/static/images/icon/xuanzezhankai.png" @click="showMulLinkageTwoPicker" />
        <mp-picker
          ref="mpPicker"
          mode="multiLinkageSelector"
          :deepLength="deepLength"
          :pickerValueDefault="pickerValueDefault"
          @onChange="onChange"
          @onConfirm="onConfirm"
          @onCancel="onCancel"
          :pickerValueArray="pickerValueArray"
        ></mp-picker>
      </div>
      <div class="form_group">
        <span class="title">详细地址：</span>
        <!-- <input class="addr" placeholder="如道路、门牌号、小区、楼层等信息"> -->
        <textarea
          placeholder="如道路、门牌号、小区、楼层等信息"
          maxlength="50"
          autofocus="true"
          v-model="editAddress.detail"
        ></textarea>
      </div>
      <div class="form_group defaultaddr">
        <span class="title">设为默认地址</span>
        <mp-switch v-model="switchValue" @change="switchChange"></mp-switch>
      </div>
      <div class="save">
        <button @click="submited" form-type="submit" type="primary" size="large">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import mpButton from "mpvue-weui/src/button";
import mpSwitch from "mpvue-weui/src/switch";
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpSwitch,
    mpButton,
    mpPicker
  },
  data() {
    return {
      switchValue: false,
      mode: "multiLinkageSelector",
      deepLength: 2,
      pickerValueDefault: [0, 0],
      aa: "",
      pickerValueArray: [
        {
          label: "广东省",
          value: 0,
          children: [
            {
              label: "广州市",
              value: 1
            },
            {
              label: "深圳市",
              value: 2
            },
            {
              label: "珠海市",
              value: 3
            },
            {
              label: "佛山市",
              value: 4
            },
            {
              label: "湛江市",
              value: 5
            },
            {
              label: "肇庆市",
              value: 6
            },
            {
              label: "梅州市",
              value: 7
            },
            {
              label: "韶关市",
              value: 8
            }
          ]
        },
        {
          label: "上海市",
          value: 1,
          children: [
            {
              label: "市辖区",
              value: 1
            }
          ]
        },
        {
          label: "河南省",
          value: 2,
          children: [
            {
              label: "郑州市",
              value: 1
            },
            {
              label: "开封市",
              value: 2
            },
            {
              label: "洛阳市",
              value: 3
            },
            {
              label: "焦作市",
              value: 4
            }
          ]
        }
      ],
      editAddress: {
        city: "",
        detail: "",
        id: "",
        phone: "",
        province: "",
        status: 0,
        userId: "",
        username: ""
      }
    };
  },

  mounted() {
    //将vuex中的旧地址拿到，如果是新建地址页面跳过来的则为空
    console.log(this.$store.state.isNewAddress);
    if (this.$store.state.isNewAddress === true) {
      console.log("此为新建地址");
      this.editAddress.city = "";
      this.editAddress.detail = "";
      this.editAddress.id = "";
      this.editAddress.phone = "";
      this.editAddress.province = "";
      this.editAddress.userId = "";
      this.editAddress.username = "";
      this.aa = "";
      console.log(this.editAddress.city === "");
    } else {
      console.log("此为编辑地址");
      this.editAddress = this.$store.state.oldUserAddress;
      this.aa = "-";
    }
  },

  methods: {
    submited() {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      // 新建地址
      if (this.$store.state.isNewAddress === true) {
        // 校验
        if (this.editAddress.username === "") {
          wx.showToast({
            title: "请填写用户姓名",
            icon: "none",
            duration: 2000
          });
        } else if (!myreg.test(this.editAddress.phone)) {
          wx.showToast({
            title: "请输入正确的手机号码",
            icon: "none",
            duration: 2000
          });
        } else if (this.editAddress.city === "") {
          wx.showToast({
            title: "请选择所在地区",
            icon: "none",
            duration: 2000
          });
        } else if (this.editAddress.detail === "") {
          wx.showToast({
            title: "请填写详细的地址",
            icon: "none",
            duration: 2000
          });
        } else {
          this.$https
            .request({
              url: this.$interfaces.setUserAddress,
              data: {
                userName: this.editAddress.username,
                phone: this.editAddress.phone,
                userId: this.$store.state.fakeId, //正式请用
                // userId: 3, //测试用
                province: this.editAddress.province,
                city: this.editAddress.city,
                detail: this.editAddress.detail,
                status: this.editAddress.status //新建0是有效，删除为1无效，默认地址为2
              },
              header: {
                "content-type": "application/json" // 默认值
              },
              method: "POST"
            })
            .then(res => {
              console.log(res);
              // ⚠️尝试修复默认地址按钮的bug
              this.switchValue = false;
              // 成功，回退
              wx.navigateBack({
                delta: 1 // 回退前 delta(默认为1) 页面
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      } else {
        // 校验
        if (this.editAddress.username === "") {
          wx.showToast({
            title: "请填写用户姓名",
            icon: "none",
            duration: 2000
          });
        } else if (!myreg.test(this.editAddress.phone)) {
          wx.showToast({
            title: "请输入正确的手机号码",
            icon: "none",
            duration: 2000
          });
        } else if (this.editAddress.city === "") {
          wx.showToast({
            title: "请选择所在地区",
            icon: "none",
            duration: 2000
          });
        } else if (this.editAddress.detail === "") {
          wx.showToast({
            title: "请填写详细的地址",
            icon: "none",
            duration: 2000
          });
        } else {
          // 编辑地址
          this.$https
            .request({
              url: this.$interfaces.updateUserAddress,
              data: {
                userName: this.editAddress.username,
                phone: this.editAddress.phone,
                id: this.editAddress.id,
                userId: this.$store.state.fakeId, //正式请用
                // userId: 3, //测试用
                province: this.editAddress.province,
                city: this.editAddress.city,
                detail: this.editAddress.detail,
                status: this.editAddress.status //新建0是有效，删除为1无效，默认地址为2
              },
              header: {
                "content-type": "application/json" // 默认值
              },
              method: "POST"
            })
            .then(res => {
              console.log(res);
              // ⚠️尝试修复默认地址按钮的bug
              this.switchValue = false;
              // 成功，刷新页面
              wx.navigateBack({
                delta: 1 // 回退前 delta(默认为1) 页面
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },

    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },

    onConfirm(e) {
      console.log(e);
      // this.inputArea = e.label;
      let temp = e.label;
      let str = temp.split("-");
      console.log(str);
      this.editAddress.province = str[0];
      this.editAddress.city = str[1];
      this.aa = "-";
    },

    switchChange(e) {
      if (e == true) {
        this.editAddress.status = 2;
      } else {
        this.editAddress.status = 0;
      }
      console.log(this.editAddress.status);
    }
  }
};
</script>

<style>
.newaddress {
  height: 100%;
  width: 100%;
}

.newaddress .form_group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px  10px;
  line-height: 95rpx;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
}

.form_group input,
textarea {
  width: 440rpx;
  /* border:1px solid #ddd; */
  /* border-radius:8rpx; */
  height: 60rpx;
  line-height: 60rpx;
  padding: 10rpx 20rpx;
  margin-right: 20px;
  word-wrap: break-word;
  word-break: break-all;
}
textarea {
  height: 120rpx;
}
.area {
  width: 440rpx;
  /* border:1px solid #ddd;
    border-radius:8rpx; */
  height: 112rpx;
  line-height: 60rpx;
  padding: 10rpx 20rpx;
  float: right;
}
img {
  width: 20px;
  height: 20px;
  float: right;
}
.defaultaddr {
  margin-top: 30px;
}
.save {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: none;
}
</style>