var searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var XHR = new XMLHttpRequest();
  var FORM_DATA = new FormData(searchForm);

  XHR.open(
    "POST",
    "https://www.kcomwel.or.kr/kcomwel/paym/insu/srch.jsp?confirmyn=Y"
  );

  XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  XHR.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  XHR.setRequestHeader("Pragma", "no-cache");
  XHR.setRequestHeader("Expires", "0");
  XHR.setRequestHeader("Authorization", "");

  XHR.addEventListener("load", function (event) {
    console.log("SUCCESS");
    console.log(event);
  });

  XHR.addEventListener("error", function (event) {
    console.log("ERROR");
    console.log(event);
  });

  console.log(XHR);
  XHR.send(FORM_DATA);
});

function urlencodeFormData(fd) {
  var s = "";
  function encode(s) {
    return encodeURIComponent(s).replace(/%20/g, "+");
  }
  for (var pair of fd.entries()) {
    if (typeof pair[1] == "string") {
      s += (s ? "&" : "") + encode(pair[0]) + "=" + encode(pair[1]);
    }
  }
  return s;
}
// function popJisa() {
//   window.open(
//     "/_custom/kcom/_common/board/index/223.jsp",
//     "jisapop",
//     "width=565,height=750, scrollbars=no, resizable=no"
//   );
// }

// function changeJisa(code) {
//   $("#insu2004").val(code);
// }

// function fn_search() {
//   if ($("#searchValue").val() == "") {
//     alert("사업장명을 입력해 주세요.");
//     $("#searchValue").focus();
//     return false;
//   }

//   if ($("#insu2004").val() == "0000") {
//     alert("관할지역은 필수선택 사항입니다.");
//     $("#insu2004").focus();
//     return false;
//   }

//   $("#searchForm").attr("action", "?confirmyn=Y");

//   $("#searchForm").submit();
//   $(".submit").attr("onclick", "alert('검색중입니다. 잠시만 기다려주세요.')");
//   $(".submit span").css({ "background-color": "#dfdfdf", color: "#fff" });
// }

// function singo() {
//   var sel = $("input:radio[name='sel']:checked").val();

//   if ("1" == sel) {
//     //location.href = "/kcomwel/cust/nowp/nowp_wrt.jsp?user=anon";
//     location.href = "/kcomwel/cust/nowp/nowp_pri.jsp?nextPageType=1";
//   } else if ("2" == sel) {
//     location.href = "/kcomwel/cust/nowp/nowp_pri.jsp?nextPageType=2";
//   }
// }
