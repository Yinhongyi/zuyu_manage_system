<script>
  //    import Vue from 'vue'
  const api = location.hostname.indexOf('localhost') > -1 ? '/api' : '/amigo-cloud-1.0.0';

  //全选效果
  function selectAllCheckbox(e){
    if(e && e.checked){
      setCheckboxStatus($(e), true);
    }else{
      e ? setCheckboxStatus($(e), false) : setCheckboxStatus($('.check-all'), false);
    }
  }
  //设置选择框状态
  function setCheckboxStatus(e, boolean){
    e.parents('table').find("input[type='checkbox']").prop("checked", boolean);
  }

  //关闭窗口
  function closeModal(){
    $(".md-overlay,.md-modal").hide();
  }

  //添加信息窗口
  function AddModal(){
    $(".md-overlay,.md-modal.AddModal").show();
  }

  //设置信息窗口
  function SetModal(){
    $(".md-overlay,.md-modal.SetModal").show();
  }

  //提示信息
  function showCenterTip(text, t){
    $('body').append('<div class="centerTip" id="centerTip">' + text +'</div>');
    let time = t || 1500;
    setTimeout(function(){
      $("#centerTip").remove();
    },time)
  }

  //修改信息窗口
  function ChangeModal(event){
    $(".md-overlay,.md-modal.ChangeModal").show();
  }

  //处理请求参数(后台不接受空字符串的传值，删除空字符串的值，除State外)
  function getParams(obj) {
    for(let i in obj){
      if(typeof obj[i] === 'object'){
        getParams(obj[i])
      }else if(typeof obj[i] === 'string'){
        if(!obj[i]){
          delete obj[i];
        }
      }else if(typeof obj[i] === 'number'){
        if(!obj[i] && i.indexOf("State") === -1){
          delete obj[i];
        }
      }
    }
    return obj;
  }

  //深复制
  function deepClone(obj) {
    let returnObj = {};
    if(obj && typeof obj === 'object'){
      returnObj = JSON.parse(JSON.stringify(obj));
    }
    return returnObj;
  }

  export default {
    api,
    closeModal,
    AddModal,
    SetModal,
    showCenterTip,
    ChangeModal,
    getParams,
    selectAllCheckbox,
    setCheckboxStatus,
    deepClone
  }
</script>
